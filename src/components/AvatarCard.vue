<template>
  <div class="avatar-card">
    <div class="avatar-card__image">
      <img :src="getImageSrc()" :alt="altText" />
    </div>
    <div class="avatar-card__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImageSrc() {
      return require("../assets/lello/lelloMain.jpeg");
    },
  },
};
</script>

<style scoped>
.avatar-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px; /* Add more space at the bottom */
}

.avatar-card__image {
  width: 150px; /* Increase the image size */
  height: 150px; /* Increase the image size */
  border-radius: 50%;
  overflow: hidden;
}

.avatar-card__image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-card__text {
  margin-top: 10px;
  font-size: 30px;
}
</style>

