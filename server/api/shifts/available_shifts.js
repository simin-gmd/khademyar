import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
const authToken=getCookie(event,'accessToken')
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    if (access.data.access) {
      const response = await axios.get(
        `${API_URL}/api/shifts/`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      // console.log("test", response.data);
      return { status: true, data: response.data };
    }
  } catch (e) {
    // console.log(e);
    return { status: false, data: e };
  }
  
});
