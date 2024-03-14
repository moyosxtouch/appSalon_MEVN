import { ref, onMounted, computed } from "vue";
import { defineStore } from "pinia";
import AuthAPI from "@/api/AuthAPI";
import { useRouter } from "vue-router";
export const useUserStore = defineStore("user", () => {
  const router = useRouter();
  const user = ref({});
  onMounted(async () => {
    try {
      const { data } = await AuthAPI.auth();
      user.value = data;
    } catch (error) {
      console.log(error);
    }
  });
  function logout() {
    localStorage.removeItem("AUTH_TOKEN");
    user.value = {};
    router.push({ name: "login" });
  }
  const getUsername = computed(() =>
    user.value?.name ? user.value?.name : ""
  );
  return {
    user,
    getUsername,
    logout,
  };
});
