<template>
  <div class="card">
    <img :src="imageSrc" alt="Card Image" />
    <h3>{{ name }}</h3>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return require("../assets/lello/lello" + this.getRandomDice() + ".png");
    },
    name() {
      return "Antonello Sanna"; // Replace with your common description
    },
  },
  methods: {
    getRandomDice() {
      return Math.floor(Math.random() * 10) + 1;
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 25px;
  text-align: center;
  margin-bottom: 20px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 130px;
  min-width: 130px;
  transition: background-color 0.3s, transform 0.3s; /* Add transitions for smooth animation */
}

.card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
  margin-bottom: 10px;
}

.card h3 {
  font-size: 15px;
  margin-bottom: 5px;
}

.card p {
  font-size: 14px;
  color: #888;
}

.card:hover,
.card:focus {
  background-color: #e0e0e0;
  transform: translateY(-5px);
}

.card:active {
  background-color: #d0d0d0;
  transform: translateY(0);
}
</style>
