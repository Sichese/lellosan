<template>
  <div class="language-selector">
    <div class="language-selector__flag">
      <img :src="getFlagImage" :alt="selectedLanguage" />
    </div>
    <div class="language-selector__select">
      <label :for="languageSelectId">{{ $t('languageSelector.selectLanguage') }}:</label>
      <select
        :id="languageSelectId"
        v-model="selectedLanguage"
        @change="changeLanguage"
      >
        <option value="it">{{ $t('languageSelector.it') }}</option>
        <option value="en">{{ $t('languageSelector.en') }}</option>
        <option value="fr">{{ $t('languageSelector.fr') }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: localStorage.getItem("selectedLanguage") || "it",
    };
  },
  computed: {
    getFlagImage() {
      return require(`../assets/flags/${this.selectedLanguage}.png`);
    },
    languageSelectId() {
      return "language-select-" + this._uid;
    },
  },
  methods: {
    changeLanguage() {
      this.isLoading = true;
      this.$i18n.locale = this.selectedLanguage;
      localStorage.setItem("selectedLanguage", this.selectedLanguage);
    },
  },
  mounted() {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && ["en", "fr", "it"].includes(storedLanguage)) {
      this.selectedLanguage = storedLanguage;
      this.$i18n.locale = storedLanguage;
    }
  },
};
</script>

<style scoped>
.language-selector {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
}

.language-selector__flag {
  margin-right: 10px;
  width: 26px; /* Adjust the width as needed */
  height: 22px; /* Adjust the height as needed */
}

.language-selector__flag img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.language-selector__select {
  display: flex;
  align-items: center;
}

.language-selector__select label {
  margin-right: 5px;
}

.language-selector__select select {
  padding: 5px;
}
</style>
