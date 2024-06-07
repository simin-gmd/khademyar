import axios from "axios";

export default defineEventHandler(async (event) => {
  const authToken = getCookie(event, "refreshToken");
  const { capacityID } = getQuery(event);
  console.log(capacityID , "capacityid");
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const access = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
      refresh: authToken,
    });
    if (access.data.access) {
      const response = await axios.delete(`${API_URL}}/api/shifts-capacity/${capacityID}/`, {
        headers: {
          Authorization: `Bearer ${access.data.access}`,
        },
      });
      console.log(response.data , "simsim");
      return { status: true, data: response.data };
    }
  } catch (e) {
    console.log(e, "simsim error");
    return { status: false, data: e };
  }
});
