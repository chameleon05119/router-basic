<script setup lang="ts">
import { inject } from "vue";
import { RouterLink, RouterView } from "vue-router";
import type { Member } from "@/interfaces";

const memberList = inject("memberList") as Map<number, Member>;
</script>
<template>
  <h1>会員情報</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink :to="{ name: 'AppTop' }"> TOP</RouterLink>
      </li>
      <li>会員リスト</li>
    </ul>
  </nav>
  <section>
    <h2>会員リスト</h2>
    <p>
      新規会員登録は<RouterLink :to="{ name: 'MemberAdd' }"> こちら</RouterLink
      >から
    </p>
    <ul>
      <li v-for="[id, member] in memberList" :key="id">
        <RouterLink :to="{ name: 'MemberDetail', params: { id: id } }">
          IDが{{ id }}の{{ member.name }}さん
        </RouterLink>
      </li>
    </ul>
  </section>
  <RouterView />
</template>
