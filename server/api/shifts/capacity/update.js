import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
  const authToken = getCookie(event, "refreshToken");
  const bodyData = await readBody(event);
  console.log("body", bodyData ,"simerror");
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const access = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
      refresh: authToken,
    });
    if (access.data.access) {
      const response = await axios.patch(
        `${API_URL}/api/shifts-capacity/${bodyData.id}/`,
        bodyData,
        {
          headers: {
            Authorization: `Bearer ${access.data.access}`,
          },
        }
      );
      return { status: true, data: response.data };
    }
  } catch (e) {
    // console.log(e , "simerror");
    return { status: false, data: e };
  }
});
