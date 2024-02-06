<template>
  <div v-for="release in releasesList">
    <h3>
      <a v-bind:href="release.html_url">
        {{ release.name }} ({{ formatDate(release.published_at) }})
      </a>
    </h3>
    <a v-for="asset in release.assets">
      <a v-bind:href="asset.browser_download_url"
        ><li>{{ asset.name }}</li>
      </a>
    </a>
  </div>
</template>

<style>
.search-box input {
  width: 200px; /* You can adjust the size according to your needs. */
}
</style>

<script>
import axios from "axios";
export default {
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  created() {
    axios
      .get("https://api.github.com/repos/adempiere/adempiere/releases")
      .then((result) => {
        if (result.data) {
          this.releasesList = result.data;
        }
      });
  },
  data() {
    return {
      releasesList: [],
    };
  },
};
</script>
