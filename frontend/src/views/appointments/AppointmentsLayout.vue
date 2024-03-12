<script setup></script>

<template>
  <div class="flex justify-between">
    <h1 class="text-2xl lg:text-6xl font-black text-white">Moyos Barbery</h1>
    <div class="flex flex-col space-y-5">
      <div class="flex gap-2 items-center">
        <p class="text-white text-right">Hello: User</p>
        <button
          type="button"
          class="bg-violet-600 hover:bg-violet-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
        >
          Cerrar Sesión
        </button>
      </div>
      <nav class="flex gap-2 items-center justify-end">
        <RouterLink
          :to="{ name: 'my-appointments' }"
          class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg"
        >
          Mis Citas
        </RouterLink>
        <RouterLink
          :to="{ name: 'new-appointment' }"
          class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg bg-blue-600 hover:bg-blue-700"
          >Nueva Cita
        </RouterLink>
      </nav>
    </div>
  </div>
  <main><RouterView /></main>
</template>
