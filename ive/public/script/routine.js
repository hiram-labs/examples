(function (window) {
  window._routine_ = {
    async onHoverAnswerBtn(_e) {
      console.log("-- awaiting onhover async process --");
      return "-- routine onhover async returned --";
    },

    async onClickAnswerBtn(e) {
      const uid = e.target.dataset.uid;
      if (uid.match(/\b(c2939a04|83268904)\b/)) {
        return 2;
      } else {
        return 1;
      }
    },

    async onClickSubmitBtn(e) {
      const [, input] = e.target.parentNode.childNodes;
      input.dataset.test = input.value; // <--- assert the same element is rendered each time so it should have the prv value
      console.log(input.value);
      return 3;
    },
  };
})(window);
