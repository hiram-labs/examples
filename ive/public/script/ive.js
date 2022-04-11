//////////////////////////////////////////////////////////////////////////////////
///                                                                            ///
///                       ELEMENT    HANDLERS                                  ///
///                                                                            ///
//////////////////////////////////////////////////////////////////////////////////
async function onHoverAnswerBtn(_e) {
  console.log("-- awaiting onhover async process --");
  return "-- routine onhover async returned --";
}

async function onClickAnswerBtn(e) {
  const uid = e.target.dataset.uid;
  if (uid.match(/\b(c2939a04|83268904)\b/)) {
    return 3;
  } else {
    return 2;
  }
}

async function onClickSubmitBtn(e) {
  e.preventDefault();
  const [input] = e.target.parentNode.childNodes;
  if (input.checkValidity()) {
    input.dataset.test = input.value; // <--- assert the same element is rendered each time so it should have the prv value
    console.log(input.value);
    return 4;
  } else {
    input.classList.add("check-input-validity");
    return 0;
  }
}

//////////////////////////////////////////////////////////////////////////////////
///                                                                            ///
///                              RIOT    TAGS                                  ///
///                                                                            ///
//////////////////////////////////////////////////////////////////////////////////

const enableTag = {
  css: `enable-tag #enable-tag-main,[is="enable-tag"] #enable-tag-main{ width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 40px 0; }`,
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
      console.log(
        "// right after the component template is updated after an update call"
      );
    },

    onBeforeUnmount(props, state) {
      console.log("// before the component is removed");
    },

    onUnmounted(props, state) {
      console.log("// when the component is removed from the page");
    },

    handleEnable(e) {
      // console.log(e)
      const text = this.$("#enable-tag-description");
      text.innerText = "Now Enabled";
      this.onInteraction(0);
    },
  },
  template: (template, expressionTypes, bindingTypes, getComponent) =>
    template(
      '<div id="enable-tag-main"><div id="enable-tag-description">Answer Selection Disabled (i.e. this can be a timer component of sort)</div><button expr0="expr0">Enable</button></div>',
      [
        {
          redundantAttribute: "expr0",
          selector: "[expr0]",
          expressions: [
            {
              type: expressionTypes.EVENT,
              name: "onclick",
              evaluate: (_scope) => _scope.handleEnable,
            },
          ],
        },
      ]
    ),
  name: "enable-tag",
};

const alertTag = {
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
      console.log(
        "// right after the component template is updated after an update call"
      );
    },

    onBeforeUnmount(props, state) {
      console.log("// before the component is removed");
    },

    onUnmounted(props, state) {
      console.log("// when the component is removed from the page");
    },

    handleEnable(e) {
      // console.log(e)
      const text = this.$("#alert-tag-description");
      text.innerText = "Now Enabled";
      this.onInteraction(0);
    },
  },
  template: (template, expressionTypes, bindingTypes, getComponent) =>
    template(
      '<div id="alert-tag-main"><div id="alert-tag-description">Another Riot Tag</div></div>',
      []
    ),
  name: "alert-tag",
};

(function (window) {
  window._ive_script_ = {
    // element events
    onHoverAnswerBtn,
    onClickAnswerBtn,
    onClickSubmitBtn,

    // riot tags
    enableTag,
    alertTag,
  };
})(window);
