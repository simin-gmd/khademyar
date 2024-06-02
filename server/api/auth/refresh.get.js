import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
  const { refreshToken } = await getQuery(event);
  // console.log(refreshToken);

  try {
    const response = await axios.post(
      `${config.public.API_URL}/api/auth/jwt/refresh/`,
      { refresh: refreshToken }
    );
    if (response.data.access) {
      return { status: true, data: response.data.access };
    }
  } catch (err) {
    return { status: false, data: err };
  }
});
