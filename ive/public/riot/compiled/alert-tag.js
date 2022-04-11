var alertTag = {
  css: `alert-tag #alert-tag-main,[is="alert-tag"] #alert-tag-main{ width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 40px 0; }`,
  exports: {
    onBeforeMount(props, state) {
      console.log("// before the component is mounted");
    },

    onMounted(props, state) {
      console.log("// right after the component is mounted on the page");
    },

    onBeforeUpdate(props, state) {
      console.log("// allows recalculation of context data before the update");
    },

    onUpdated(props, state) {
      console.log("// right after the component template is updated after an update call");
    },

    onBeforeUnmount(props, state) {
      console.log("// before the component is removed");
    },

    onUnmounted(props, state) {
      console.log("// when the component is removed from the page");
    },

    handleEnable(e) {
      // console.log(e)
      const text = this.$('#alert-tag-description');
      text.innerText = "Now Enabled";
      this.onInteraction(0);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div id="alert-tag-main"><div id="alert-tag-description">Another Riot Tag</div></div>', []),
  name: 'alert-tag'
};

export { alertTag as default };
