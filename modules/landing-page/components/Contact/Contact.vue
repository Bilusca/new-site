<script lang="ts" setup></script>

<template>
  <section
    id="contact"
    class="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-neutral-100 via-white to-neutral-300"
  >
    <h4 class="font-bold text-4xl mb-10">
      Entre em
      <span class="text-gradient font-extrabold uppercase">contato</span>
    </h4>
    <FormKit
      type="form"
      action="https://enpae7aofyxlml7.m.pipedream.net"
      method="post"
    >
      <FormKit
        class="w-full"
        name="text"
        label="Nome completo"
        validation="required"
      />
      <FormKit
        type="email"
        name="email"
        label="Seu melhor e-mail"
        validation="required|email"
      />
      <FormKit
        type="textarea"
        name="message"
        label="Mensagem"
        validation="required"
      />
      <template #submit>
        <Button type="submit" class="z-[999] after:z-[998] w-full mb-3">
          Enviar e-mail
        </Button>
      </template>
    </FormKit>
    <div class="w-80 flex flex-col gap-3">
      <strong class="text-center">OU</strong>
      <Button class="z-[999] after:z-[998]">Me chame no whatsapp</Button>
    </div>
  </section>
</template>
