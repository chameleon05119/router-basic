<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <h1>会員管理</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink :to="{ name: 'AppTop' }"> TOP</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'MemberList' }"> 会員リスト</RouterLink>
      </li>
      <li>会員詳細情報</li>
    </ul>
  </nav>
  <section>
    <h2>会員詳細情報</h2>
  </section>
</template>
