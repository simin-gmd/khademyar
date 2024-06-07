// /api/members/users/{username}/activate/
import axios from "axios";
// import createFilterQuery from "~/server/utils/createFilterQuery";

export default defineEventHandler(async (event) => {
  //read payload form body
  const authToken = getCookie(event, "refreshToken");
  const incomeBody = await readBody(event);
//console.log(incomeBody , "incomeBody");
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const access = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
      refresh: authToken,
    });
    if (access.data.access) {
      const response = await axios.post(
        `${API_URL}/api/shifts-capacity/`,incomeBody, 
        {
          headers: {
            Authorization: `Bearer ${access.data.access}`,
          },
        }
      );
      // console.log(response.data , "simsim");
      return { status: true, data: response.data };
    }
  } catch (e) {
    console.log(e , "simsim error");
    return { status: false, data: e };
  }
});
