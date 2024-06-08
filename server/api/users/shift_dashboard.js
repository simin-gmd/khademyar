// /api/members/users/{username}/activate/
import axios from "axios";
// import createFilterQuery from "~/server/utils/createFilterQuery";

export default defineEventHandler(async (event) => {
  //read payload form body
  const authToken = getCookie(event, "refreshToken");
  // const query = getQuery(event);
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const access = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
      refresh: authToken,
    });
    if (access.data.access) {
      const response = await axios.get(
        `${API_URL}/api/shifts/dashboard_shifts_info/`,
       
        {
          headers: {
            Authorization: `Bearer ${access.data.access}`,
          },
        }
      );
    
      return { status: true, data: response.data };
    }
  } catch (e) {
    return { status: false, data: e };
  }
});
