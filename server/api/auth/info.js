import axios from "axios";

export default defineEventHandler(async (event) => {
    const AuthToken = getCookie(event, "accessToken");

    const {
        public: {API_URL},
    } = useRuntimeConfig();
    // set role To cookie

    try {
        if (AuthToken) {
            const response = await axios.get(`${API_URL}/api/members/users/me/`, {
                headers: {
                    Authorization: `Bearer ${AuthToken}`,
                },
            });
            console.log('test', response.data);
            return {status: true, data: response.data};
        }
    } catch (e) {
        console.log(e);
        return {status: false, data: e};
    }
});
