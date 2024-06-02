// /api/shifts-request/{id}/approve_shift/

import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
  const authToken = getCookie(event, "refreshToken");
  const bodyData = await readBody(event);
  const { admin_descriptions, approved, id } = bodyData;
  // console.log(bodyData);
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const access = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
      refresh: authToken,
    });
    if (access.data.access) {
      const response = await axios.patch(
        `${API_URL}/api/shifts-request/${id}/approve_shift/`,
        {
          admin_descriptions,
          approved,
        },
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
