<script lang="ts" setup>
type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const props = defineProps<{ projects: Project[] }>();
</script>

<template>
  <Swiper
    :modules="[SwiperEffectCreative, SwiperNavigation, SwiperEffectCards]"
    :effect="'cards'"
    :grabCursor="false"
    :navigation="true"
  >
    <SwiperSlide
      v-for="project in props.projects"
      :key="project.title"
      class="bg-none rounded-2xl"
    >
      <div
        class="w-full aspect-video rounded-2xl shadow-lg"
        :style="{
          background: `url('${project.image}') center/cover no-repeat`,
        }"
      >
        <strong>{{ project.title }}</strong>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<style lang="css">
.swiper-button-next,
.swiper-button-prev {
  --swiper-navigation-size: 44px;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: -60px;
  --swiper-navigation-color: red;
}
</style>
