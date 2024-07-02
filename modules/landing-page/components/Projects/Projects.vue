<script lang="ts" setup>
import Caroussel from "./Caroussel.vue";
import serumImg from "@/assets/images/serum.png";
import savelogImg from "@/assets/images/savelog.png";
import zionImg from "@/assets/images/zion.png";
import terachatImg from "@/assets/images/terachat.png";

type Project = {
  title: string;
  link: string;
  image: string;
};

const projects = ref<Project[]>([
  {
    title: "Serum",
    link: "https://serumestetica.com.br/",
    image: serumImg,
  },
  {
    title: "Zion",
    link: "https://zionquimica.com.br/",
    image: zionImg,
  },
  {
    title: "Terachat",
    link: "https://www.terachat.com.br/",
    image: terachatImg,
  },
  {
    title: "Save-Log",
    link: "https://save-log.com/",
    image: savelogImg,
  },
]);
</script>

<template>
  <section
    id="projects"
    class="md:h-screen flex bg-gradient-to-r from-gray-300 via-white to-gray-300"
  >
    <div class="container flex items-center justify-center">
      <div class="h-full w-full flex flex-col justify-center px-10 gap-6">
        <h2 class="text-3xl tracking-tighter font-bold text-left">
          Conheça alguns dos <span class="text-gradient">meus projetos</span>
        </h2>
        <p class="text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          expedita delectus possimus laborum quisquam vero placeat quia cumque
          sequi tenetur sit, quae molestiae mollitia fugit consequuntur minima
          perferendis eaque deleniti!
        </p>
        <div class="w-full">
          <Button class="text-lg">
            Não perca tempo, entre em contato agora mesmo!
          </Button>
        </div>
      </div>
      <div class="h-full w-full flex items-center justify-center">
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="border-2 border-black shadow-[5px_5px_0px] shadow-black rounded-md w-64 aspect-square relative"
            :class="{ '-mt-4': index === 1 || index === 3 }"
          >
            <img
              :src="project.image"
              class="object-cover block w-full h-full rounded-md"
            />
            <div
              class="w-full h-full absolute bg-black/30 top-0 rounded-sm flex items-end p-4"
            >
              <Button
                class="bg-white text-sm text-black"
                as="a"
                :href="project.link"
                target="_blank"
              >
                Visitar a {{ project.title }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
