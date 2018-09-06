let install = function (Vue) {
    Vue.component(this.name, this)
  }

let create = function (sfc) {
    sfc.mixins = sfc.mixins || []
    sfc.components = sfc.components || {}
    sfc.install = sfc.install || install
  
    return sfc
  }
  const getTouch = (event) => {
    return event.changedTouches[0] || event.touches[0]
  }

export{
    install,
    create,
    getTouch
}