<template>
  <header class="page-header">
    <h1>{{ pageTitle }}</h1>
  </header>
</template>

<script>
export default {
  computed: {
    pageTitle() {
      const currentDate = new Date();
      const welcomeMsg = this.$t('welcome');
      const is = this.$t('is');
      const options = { weekday: 'long', month: 'long' };
      const locale = this.$i18n.locale;
      const translatedMonth = new Intl.DateTimeFormat(locale, options).formatToParts(currentDate)
        .find(part => part.type === 'month').value;
      return `${welcomeMsg} ${currentDate.getDate()} ${translatedMonth} ${currentDate.getFullYear()} ${is}`;
    },
  },
};
</script>

<style scoped>
.page-header {
  background-color: #f5f5f5;
  padding: 20px;
  margin-bottom: 20px;
}
.page-header h1 {
  margin: 0;
  font-size: 28px;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 24px;
  }
}

</style>
