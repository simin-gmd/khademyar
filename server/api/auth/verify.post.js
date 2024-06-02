import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
  const incomeForm = await readFormData(event);

  const config = useRuntimeConfig();
  console.log(incomeForm);
  try {
    const response = await axios.post(
      `${config.public.API_URL}/api/auth/jwt/create`,
      incomeForm
    );
    if (response.data.refresh) {
      setCookie(event, "refreshToken", response.data.refresh, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      });
      return { status: true, data: response.data };
    }
  } catch (err) {
    console.log(err);

    return { status: false, data: err };
  }
});
