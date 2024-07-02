<script lang="ts" setup>
const home = document.getElementById("home");
const projects = document.getElementById("projects");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
</script>

<template>
  <header class="w-full fixed top-0 py-3 backdrop-blur-sm z-[999]">
    <nav
      class="container mx-auto flex items-center justify-center gap-6 text-lg font-archivo font-bold"
    >
      <a class="hover:text-purple-600" href="#home">Home</a>
      <a class="hover:text-purple-600" href="#projects">Projetos</a>

      <div class="w-14 h-14 bg-purple-600 rounded-full">LV</div>

      <a class="hover:text-purple-600" href="#about">Sobre</a>
      <a class="hover:text-purple-600" href="#contact">Contato</a>
    </nav>
  </header>
</template>
