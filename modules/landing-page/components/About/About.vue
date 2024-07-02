<template>
  <section
    id="about"
    class="md:h-screen flex flex-col md:flex-row items-center justify-center bg-white relative"
  >
    <div
      class="h-full md:w-1/2 bg-black flex flex-col items-center justify-center"
    >
      <img src="@/assets/images/me.png" alt="" />
    </div>
    <div class="h-full md:w-1/2 flex flex-col justify-center px-6 text-balance">
      <h3 class="text-4xl font-bold mb-10 tracking-tighter">
        Um pouco sobre minha
        <span class="text-gradient uppercase">carreira</span>
      </h3>
      <p class="text-lg tracking-tight leading-tight mb-6 font-medium">
        Me chamo Lucas, e sou desenvolvedor desde de 2014, com larga experiência
        em softwares para a web. Trabalhei em vários tipos de empresa e em
        vários ramos diferentes, já passei por startups à grandes empresas.
        Tenho experiência com as tecnologias mais modernas da
        <strong class="text-xl font-archivo font-bold">WEB</strong> como por
        exemplo
        <strong class="text-xl font-archivo font-bold text-emerald-500">
          Vue
        </strong>
        ,
        <strong class="text-xl font-archivo font-bold text-sky-500">
          React
        </strong>
        e
        <strong class="text-xl font-archivo font-bold text-emerald-700">
          Node </strong
        >.
      </p>
      <p class="text-lg tracking-tight leading-tight mb-10">
        Está pronto para
        <strong class="text-gradient font-archivo font-bold text-xl"
          >transformar seu negócio?</strong
        >
        Entre em contato hoje mesmo e faça um orçamento gratuito!
        <strong class="text-gradient font-archivo font-bold text-xl">
          Vamos juntos criar algo incrível.
        </strong>
      </p>
      <div>
        <Button> Entre em contato agora mesmo! </Button>
      </div>
    </div>
  </section>
</template>
