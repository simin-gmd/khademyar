import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
  const incomeForm = await readFormData(event);

  const config = useRuntimeConfig();
  try {
    const response = await axios.post(
      `${config.public.API_URL}/api/auth/jwt/create/`,
      incomeForm
    );
    console.log(response.data.refresh, "refreshToken");
    if (response.data.refresh) {
      setCookie(event, "refreshToken", response.data.refresh, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
        sameSite: true,
      });
    }
    if (response.data.access) {
      setCookie(event, "accessToken", response.data.access, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
        sameSite: true,
      });
    //   console.log(response.data);
    }
    return { status: true, data: response.data };
  } catch (err) {
    console.log(err ,"errorsimin");

    return { status: false, data: err };
  }
});
