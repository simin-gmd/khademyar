import axios from "axios";
import createFilterQuery from "~/server/utils/createFilterQuery";

export default defineEventHandler(async (event) => {
  //read payload form body
  const authToken = getCookie(event, "refreshToken");
  const query = getQuery(event);

  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const access = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
      refresh: authToken,
    });
    if (access.data.access) {
      const response = await axios.get(
        `${API_URL}/api/members/users/?limit=15${createFilterQuery(
          Object.entries(query)
        )}`,
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
