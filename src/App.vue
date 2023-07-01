<template>
  <div id="app">
    <div class="content">
      <LanguageSelector />
      <PageHeader />
      <AvatarCard altText="Antonello Sanna" text="Antonello Sanna" />
      <CardCarousel />
      <disclamerComponent/>
      <CreditsComponent />
    </div>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import LanguageSelector from "./components/LanguageSelector.vue";
import AvatarCard from "./components/AvatarCard.vue";
import CardCarousel from "./components/CardCarousel.vue";
import disclamerComponent from "./components/disclamerComponent.vue";

export default {
  components: {
    PageHeader,
    LanguageSelector,
    AvatarCard,
    CardCarousel,
    disclamerComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

.content {
  margin: 0 auto;
  max-width: 800px;
}
</style>
