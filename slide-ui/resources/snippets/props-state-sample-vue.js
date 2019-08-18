Vue.component("comment-input", {
  data: () => ({ message: "" }),
  props: ["placeholder"],
  template: `<form>
  <span>Comemnt</span>
  <input v-model="message" :placeholder="placeholder" />
  </form>`
});
