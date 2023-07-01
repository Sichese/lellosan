<template>
  <div class="carousel-desktop">
    <Carousel
      :perPage="cardsPerPage"
      :autoplay="false"
      :loop="false"
      :paginationEnabled="false"
    >
      <Slide v-for="(card, index) in cards" :key="index">
        <SingleCard :title="card.title" />
      </Slide>
    </Carousel>
  </div>

  <div class="carousel-mobile">
    <div class="carousel-row">
      <SingleCard
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
      />
    </div>
  </div>
</template>

<script>
import Carousel from "vue-carousel";
import Slide from "vue-carousel/src/Slide";
import SingleCard from "./SingleCard.vue";

export default {
  components: {
    Carousel,
    Slide,
    SingleCard,
  },
  data() {
    return {
      cards: [],
      cardsPerPage: 8, // Number of cards to display per page on desktop
    };
  },
  mounted() {
    this.generateCards();
    // Watch for language change
    this.$watch(
      () => this.$i18n.locale,
      () => {
        this.generateCards();
      }
    );
  },
  methods: {
    generateCards() {
      const currentDate = new Date();
      const locale = this.$i18n.locale;

      const formatCardDate = (date, locale) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(locale, options);
      };

      this.cards = []; // Clear the existing cards array
      for (let i = 0; i < 8; i++) {
        const cardDate = new Date(
          currentDate.getTime() - (i +1) * 24 * 60 * 60 * 1000
        ); // Subtract a day from each card
        const cardTitle = formatCardDate(cardDate, locale);
        this.cards.push({ title: cardTitle });
      }
    },
  },
};
</script>

<style scoped>
.carousel-mobile {
  display: block;
}

.carousel-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .carousel-row {
    justify-content: space-evenly;
  }
}
</style>
