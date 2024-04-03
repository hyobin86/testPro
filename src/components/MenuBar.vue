<script setup>
import { RouterLink } from "vue-router";
import { ref, watch, onMounted } from "vue";

import { useWindowsWidth } from "../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://www.creative-tim.com/product/vue-material-kit",
      color: "bg-gradient-success",
      label: "Free Download"
    })
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

function getArrowColor() {
  return textDark.value?ArrDark:DownArrWhite;
}

function getBG() {
  return textDark.value ? 'bg-white' :'bg-transparent shadow-none '
}
function getTextColor() {
  return textDark.value ? 'text-dark font-weight-bolder' :'text-white'
}

// set nav color on mobile && desktop

let textDark = ref(false);
let height = ref(0);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}
const scrollEvents = ()=>{
  let scroll = document.documentElement.scrollTop;
  if(height.value-100>scroll) {
    textDark.value = false;
  }else {
    textDark.value = true;
  }
};
onMounted(() => {
  height.value = document.querySelector(".page-header").offsetHeight;
  document.addEventListener('scroll', scrollEvents);
});
watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  },
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0 z-index-3 w-100 position-fixed pt-3"
    :class="[getBG()]"
  >
    <div class="container">
      <RouterLink
        class="navbar-brand d-none d-md-block font-weight-bolder"
        :class="[getTextColor()]"
        :to="{ name: 'index' }"
        rel="tooltip"
        data-placement="bottom"
      >
        I'am
      </RouterLink>
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        I'am
      </RouterLink>
      <button
        class="navbar-toggler shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" href="#introduce" :class="getTextColor()">
              Introduce
            </a>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" href="#skill" :class="getTextColor()">
              Skill
            </a>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" href="#project" :class="getTextColor()">
              Project
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
