<template>
  <header id="home" class="header-area">
    <Menu/>
    <Paralax/>
  </header>
</template>

<script>
import Menu from "./Header/Menu";
import Paralax from "./Header/Paralax";

export default {
  components: {Paralax, Menu}
}

</script>
