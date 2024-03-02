<script setup>
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import SelectedService from "@/components/SelectedService.vue";
import { formatCurrency } from "@/helpers";
import { useAppointmentsStore } from "@/stores/Appointments";
const appointments = useAppointmentsStore();
</script>

<template>
  <h2 class="text-4xl font-extrabold text-white">Detalles Cita y Resumen</h2>

  <p class="text-white text-lg">
    A continuación verifica la información y confirma tu cita
  </p>
  <h3 class="text-3xl font-extrabold text-white">Servicios</h3>
  <p
    v-if="appointments.noServicesSelected"
    class="text-white text-2xl text-center"
  >
    No hay servicios seleccionados
  </p>
  <div class="grid gap-5" v-else>
    <SelectedService
      v-for="service in appointments.services"
      :key="service._id"
      :service="service"
    />
    <p class="text-right text-white text-2xl">
      Total a pagar:
      <span class="font-black">{{
        formatCurrency(appointments.totalAmount)
      }}</span>
    </p>
  </div>
  <div class="space-y-8" v-if="!appointments.noServicesSelected">
    <h3 class="text-3xl font-extrabold text-white">Fecha y Hora</h3>
    <div class="lg:flex gap-5 items-start">
      <div class="w-full lg:w-96 bg-white flex justify-center rounded-lg">
        <VueTailwindDatepicker i18m="es-mx" as-single no-input />
      </div>
    </div>
  </div>
</template>
