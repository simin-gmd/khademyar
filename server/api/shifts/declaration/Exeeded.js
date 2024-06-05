import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
  const authToken = getCookie(event, "refreshToken");
  const { id } = getQuery(event);
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const access = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
      refresh: authToken,
    });
    if (access.data.access) {
      const response = await axios.get(
        `${API_URL}/api/shifts/${id}/exceeded_requests/`,
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
    console.log(e);
    return { status: false, data: e };
  }
});
