import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
  const authToken = getCookie(event, "refreshToken");
  const bodyData = await readBody(event);
  // console.log("body", bodyData);
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const access = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
      refresh: authToken,
    });
    if (access.data.access) {
      const response = await axios.patch(
        `${API_URL}/api/shifts-request/${bodyData.id}/accept_shift/`,
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
    // console.log(e);
    return { status: false, data: e };
  }
});
