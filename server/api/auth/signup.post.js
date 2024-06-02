import axios from "axios";

export default defineEventHandler(async (event) => {
  //read payload form body
  const incomeBody = await readBody(event);

  const {
    public: { API_URL },
  } = useRuntimeConfig();

  console.log(incomeBody);

  // const config = useRuntimeConfig();
  try {
    const response = await $fetch(`${API_URL}/api/members/signup/`, {
      method: "POST",
      body: incomeBody,
      
    });
    console.log(response.data);
    return { status: true, data: response.data };
  } catch (err) {
    console.log(err);

    return { status: false, data: err };
  }
});
