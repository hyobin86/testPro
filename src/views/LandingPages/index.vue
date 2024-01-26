<script setup>
//common components
import MenuBar from "@/components/MenuBar.vue";
import Footer from "@/components/Footer.vue";

//sections
import Headers from "./section/AboutHeader.vue";
import Information from "./section/AboutInformation.vue";
import Graph from "./section/AboutGraph.vue"
import List from "./section/AboutList.vue"

//data
import data from "./Data/listData.js";
</script>
<template>
  <MenuBar/>
  <Headers/>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <!-- 소개 -->
    <Information />
    <!-- skill -->
    <Graph />
    <List :data="data" />
  </div>
  <Footer />
</template>
