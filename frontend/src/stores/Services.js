import ServicesAPI from "@/api/ServicesAPI";
import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
export const useServicesStore = defineStore("services", () => {
  onMounted(async () => {
    try {
      const { data } = await ServicesAPI.all();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });
  return {};
});
