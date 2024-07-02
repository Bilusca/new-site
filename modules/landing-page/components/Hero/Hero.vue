<template>
  <main
    class="w-full h-screen flex flex-col items-center justify-center z-[11] relative bg-gradient-to-r from-rose-100 to-teal-100"
    id="home"
  >
    <div
      class="w-full flex flex-col lg:flex-row items-center container mx-auto"
    >
      <div class="flex flex-col space-y-6 text-center relative z-10">
        <h1 class="text-5xl tracking-tighter text-balance leading-[0.95]">
          Eleve seu
          <span class="text-gradient font-extrabold">negócio</span>
          ao próximo nível com
          <span class="text-gradient font-extrabold">soluções digitais</span>
          sob medida
        </h1>
        <p class="text-balance text-lg tracking-tight leading-tight">
          Tenha páginas
          <span class="text-gradient font-archivo font-semibold"
            >perfomaticas e belas</span
          >
          e aplicativos WEB usando as melhores
          <span class="text-gradient font-archivo font-semibold"
            >tecnologias</span
          >
          da ataulidade.
        </p>
        <div class="flex items-center justify-center">
          <Button as="a" href="https://www.google.com" target="_blank"
            >Faça um orçamento gratis!</Button
          >
        </div>
      </div>
    </div>
    <img class="-mt-10 -mb-48" src="@/assets/images/performance.png" />
  </main>
</template>
