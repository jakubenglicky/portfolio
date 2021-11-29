<template>
  <div>
    <Spinner/>
    <Header/>
    <About/>
    <Services/>
<!--    <Blog/>-->
    <Video/>
    <Contact/>
    <Footer/>
    <Nuxt/>
  </div>
</template>

<script>


import Header from '../components/Header';
import Spinner from "../components/Spinner";
import About from "../components/About";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Video from "../components/Video";

export default {
  components: {Video, Footer, Contact, Services, About, Header, Spinner, Blog}

}
</script>
