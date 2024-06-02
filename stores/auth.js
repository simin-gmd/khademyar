import axios from "axios";
import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        userData: new Object(),
        userID: "",
    }),
    getters: {
        getUserData(state) {
            return state.userData;
        },
    },
    actions: {
        async setUserData() {
            const response = await $fetch("/api/auth/info");
            console.log("setUserData", response);
            // console.log(response , "&&&&" ,this.userData );
            this.userData = response.data;
            const indexofProf = response.data.profile
                .toString()
                .lastIndexOf("profiles");
            this.userID = response.data.profile
                .slice(indexofProf, response.data.profile.length)
                .split("/")[1];
            return response.data;
        },
    },
});
