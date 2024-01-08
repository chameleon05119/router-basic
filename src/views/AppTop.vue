<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <h1>TOP</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>TOP</li>
    </ul>
  </nav>
  <section>
    <p>
      <RouterLink :to="{ name: 'MemberList' }"> 会員登録はこちら </RouterLink>
    </p>
  </section>
</template>
