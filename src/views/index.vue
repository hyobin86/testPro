<script setup>
//common components
import MenuBar from "@/components/MenuBar.vue";
import Footer from "@/components/Footer.vue";

//sections
import Headers from "./section/AboutHeader.vue";
import Introduce from "./section/AboutIntroduce.vue";
import Skill from "./section/AboutSkill.vue"
import ProjectList from "./section/AboutProject.vue"

//data
import data from "./data/listData.js";
</script>
<template>
  <MenuBar/>
  <Headers/>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <!-- 소개 -->
    <Introduce />
    <!-- skill -->
    <Skill />
    <ProjectList :data="data" />
  </div>
  <Footer />
</template>
