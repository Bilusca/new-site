<script lang="ts" setup>
import { twMerge } from "tailwind-merge";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<{ as?: "button" | "a"; class?: HTMLAttributes["class"] }>(),
  {
    as: "button",
    class: "",
  }
);
</script>

<template>
  <component
    :is="props.as"
    v-bind="$attrs"
    :class="
      twMerge(
        'rounded-md border-2 px-4 py-3 border-black bg-fuchsia-600 text-white shadow-[5px_5px_0px] shadow-black text-xl font-archivo hover:shadow-none transition-all',
        props.class
      )
    "
  >
    <slot />
  </component>
</template>
<style lang="css" scoped></style>
