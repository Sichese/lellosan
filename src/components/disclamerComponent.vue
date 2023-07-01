<template>
  <div class="disclaimer">
    <p>
      {{ $t("disclaimer") }}
    </p>
    <CreditComponent />
  </div>
</template>

<script>
import CreditComponent from "./CreditsComponent.vue";

export default {
  components: {
    CreditComponent,
  },
};
</script>

<style scoped>
.disclaimer {
  background-color: #f5f5f5;
  padding: 10px;
  margin-top: 10px;
}

.disclaimer p {
  text-align: center;
  font-size: 14px;
}
</style>
