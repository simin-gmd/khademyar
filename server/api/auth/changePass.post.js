// /api/shifts-request/{id}/approve_shift/

import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
  const authToken = getCookie(event, "refreshToken");
  const bodyData = await readBody(event);
  const { old_password, password, password_confirm, username } = bodyData;
  console.log(username);
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const access = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
      refresh: authToken,
    });
    if (access.data.access) {
      const response = await axios.patch(
        `${API_URL}/api/members/users/${username}/update_password/`,
        {
          old_password,
          password,
          password_confirm,
        },
        {
          headers: {
            Authorization: `Bearer ${access.data.access}`,
          },
        }
      );
      console.log("test", response.data);
      return { status: true, data: response.data };
    }
  } catch (e) {
    return {
      status: false,
      data: e.response.data.old_password ? "رمز عبور قبلی مطابقت  ندارد" : "",
    };
  }
});
