import ServicesAPI from "@/api/ServicesAPI";
import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
export const useServicesStore = defineStore("services", () => {
  const services = ref([]);
  onMounted(async () => {
    try {
      const { data } = await ServicesAPI.all();

      services.value = data;
    } catch (error) {
      console.log(error);
    }
  });
  return {
    services,
  };
});
