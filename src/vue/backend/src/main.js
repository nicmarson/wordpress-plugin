// Import libraries and stuff
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import storeModules from './store'
import IDXStrapClass from '@idxbrokerllc/idxstrap/dist/idxStrap.js'

// Import VCL base and variable styles
import '@idxbrokerllc/idxstrap/dist/styles/base.scss'

// Import VCL components
import {
    IdxBlock,
    IdxButton,
    IdxCard,
    IdxCardBody,
    IdxCardHeader,
    IdxCheckboxLabel,
    IdxContainer,
    IdxDialog,
    IdxDialogActions,
    IdxDialogContent,
    IdxDialogDismiss,
    IdxDialogHeader,
    IdxFormGroup,
    IdxFormInput,
    IdxFormLabel,
    IdxFullscreen,
    IdxHeader,
    IdxIcon,
    IdxList,
    IdxListItem,
    IdxNavbar,
    IdxNavbarBrand,
    IdxNavItem,
    IdxNavList,
    IdxProgressBar,
    IdxProgressStepper,
    IdxSinglePropertyCard,
    IdxTabContainer,
    IdxToggleSlider,
    IdxCustomSelect,
    IdxVArrow,
    IdxVIcon,
    IdxVNav
} from '@idxbrokerllc/idxstrap'
const idxConfig = require('../idx.config')
const pluginOptions = {
    prefix: idxConfig.options.prefix,
    separator: idxConfig.options.separator,
    applyPrefix: true
}
Vue.use(Vuex)
const idxstrap = new IDXStrapClass(pluginOptions)
Vue.mixin({
    created () {
        Vue[idxstrap.name] = idxstrap
        Vue.prototype[`$${idxstrap.name}`] = idxstrap
    }
})

const components = [
    IdxBlock,
    IdxButton,
    IdxCard,
    IdxCardBody,
    IdxCardHeader,
    IdxCheckboxLabel,
    IdxContainer,
    IdxDialog,
    IdxDialogActions,
    IdxDialogContent,
    IdxDialogDismiss,
    IdxDialogHeader,
    IdxFormGroup,
    IdxFormInput,
    IdxFormLabel,
    IdxFullscreen,
    IdxHeader,
    IdxIcon,
    IdxList,
    IdxListItem,
    IdxNavbar,
    IdxNavbarBrand,
    IdxNavItem,
    IdxNavList,
    IdxProgressBar,
    IdxProgressStepper,
    IdxSinglePropertyCard,
    IdxTabContainer,
    IdxToggleSlider,
    IdxCustomSelect,
    IdxVArrow,
    IdxVIcon,
    IdxVNav
]
components.forEach(component => Vue.component(component.name, component))
const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: storeModules
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
