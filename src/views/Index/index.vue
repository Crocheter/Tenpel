<template>
    <section class="sized">
        <Header />
        <Main />
        <Section />
    </section>
</template>

<style>
    *,
::after,
::before {
    box-sizing: border-box
}
    .sized {
        background-color: #FFFFFF;
        width: 624px;
        height: 1500px;
        margin: 0 auto;
    }
</style>

<script>
    import Header from './includes/header.vue'
    import Main from './includes/main.vue'
    import Section from './includes/section.vue'
    
    export default {
  components: {
    Header,
    Main,
    Section,
  },
};
</script>