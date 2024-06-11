import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
  const authToken = getCookie(event, "refreshToken");

  const incomeBody = await readBody(event);
  // console.log(incomeBody);
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const access = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
      refresh: authToken,
    });
    if (access.data.access) {
      const response = await axios.post(`${API_URL}/api/shifts/`,incomeBody, {
        headers: {
          Authorization: `Bearer ${access.data.access}`,
        },
      });
      // console.log("test", response.data);
      return { status: true, data: response.data };
    }
  } catch (e) {
    console.log(e.response.data);
    return { status: false, data: e };
  }
});
