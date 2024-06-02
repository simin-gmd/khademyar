import axios from "axios";

// a callback function for get user info and return status
const chackAccessibilitie = async (baseURL, token) => {
  const selectedRole = useCookie("selectedRole");

  // set role To cookie
  try {
    const access = await axios.post(
      `/api/auth/jwt/refresh/`,
      { refresh: token },
      { baseURL }
    );
    if (access.data.access) {
      const response = await axios.get("/api/members/users/me/", {
        baseURL,
        headers: {
          Authorization: `Bearer ${access.data.access}`,
        },
      });

      if (response.data.is_active) {
        if (response.data.is_superuser && response.data.is_staff) {
          selectedRole.value = "multiple";
          return "redirect";
        }
        if (response.data.is_superuser) {
          selectedRole.value = "master";

          return "master";
        } else if (response.data.is_staff) {
          selectedRole.value = "user";

          return "user";
        }
      } else {
        selectedRole.value = "not-active";

        return "not-active";
      }
    }
  } catch (err) {
    selectedRole.value = "undefined";
    return "undefined";
  }
};

export default defineNuxtRouteMiddleware(async (to, from) => {
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  const AuthToken = useCookie("refreshToken");
  const selectedRole = useCookie("selectedRole");
  // لیست مسیر ها و سطوح دسترسی
  const pathNames = ["master", "user", "not-active"];
  // چک کردن توکن احراز هویت
  if (process.server) {
    if (AuthToken.value) {
      // در صورتی که کاربر از قبل رول را مشخص نکرده بود

      // چک کردن سطح دسترسی کاربر از Api
      const accessibility = selectedRole.value
        ? selectedRole.value
        : await chackAccessibilitie(API_URL, AuthToken.value);

      if (accessibility == "undefined") {
        return navigateTo("/", { external: true });
      } else if (accessibility == "multiple") {
        if (from.path == "/redirect" || to.path == "/redirect") {
          return;
        } else {
          return navigateTo("/redirect", { external: true });
        }
      } else {
        pathNames.forEach((item) => {
          const checkPath = to.path.startsWith("/" + item);
          // در صورتی که کاربر در مسیر های مشخص شده وارد شد سطح دسترسی با مسیر چک میشود  اگر کاربر دسترسی داشت
          //  ادامه مسیر میدهد در غیر این صورت به صفحه خود هدایت میشود
          switch (checkPath) {
            case true:
              if (accessibility != item) {
                return navigateTo(`/${accessibility}`, { external: true });
              }
            case false:
              // چک کردن موارد در صفحه لاگین
              if (to.path == "/login") {
                return navigateTo("/" + accessibility, { external: true });
              }
            default:
              // در صورت ورود به مسیر های عمومی ادامه مسیر
              return;
          }
        });
      }
    } else {
      // در صورت نداشتن توکن احراز هویت
      pathNames.forEach((item) => {
        const checkPath = to.path.startsWith("/" + item);
        switch (checkPath) {
          // در صورت ورود به مسیر های خاص انتقال به صفحه اول
          case true:
            return navigateTo("/login", { external: true });
          case false:
            return;
          default:
            // در صورت ورود به مسیر های عمومی ادامه مسیر
            return;
        }
      });
    }
  } else if (process.client) {
    return;
  }
});
