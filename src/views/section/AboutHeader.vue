<script setup>
import { onMounted, onUnmounted } from "vue";

import bg0 from "@/assets/img/bg9.jpg";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();

// popover
import setTooltip from "@/assets/js/tooltip";

//dep
import Typed from "typed.js";
const body = document.getElementsByTagName("body")[0];

//hooks
onMounted(() => {
  setTooltip(store.bootstrap);

  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Work with an amazing <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>team</h1>
              <h1>design</h1>
              <h1>tool</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              We’re constantly trying to express ourselves and actualize our
              dreams. If you have the opportunity to play this game
            </p>
            <h6 class="text-white mb-2 mt-5">Find me on</h6>
            <div class="d-flex justify-content-center">
              <a href="https://github.com/hyobin86">
                <i class="fab fa-github text-lg text-white me-4" title="go to gitHub" data-bs-toggle="tooltip" data-bs-placement="top"></i>
              </a>
              <a href="https://instagram.com/hyobin1216" target="_blank">
                <i class="fab fa-instagram text-lg text-white me-4" title="go to instagram" data-bs-toggle="tooltip" data-bs-placement="top"></i>
              </a>
              <a href="https://www.jobkorea.co.kr/User/Resume/View?rNo=12024716" target="_blank">
                <i class="fa fa-rss text-lg text-white" title="view resume" data-bs-toggle="tooltip" data-bs-placement="top"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
