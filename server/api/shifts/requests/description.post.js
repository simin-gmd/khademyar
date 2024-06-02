import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
  const authToken = getCookie(event, "refreshToken");
  const bodyData = await readBody(event);
  const { user_description, id } = bodyData;
  // console.log(bodyData);
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const access = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
      refresh: authToken,
    });
    if (access.data.access) {
      const response = await axios.post(
        `${API_URL}/api/shifts-request/`,
        bodyData,
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
    console.log(e.response);
    return { status: false, data: e };
  }
});
