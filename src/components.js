import './styles/index.scss'

import xaButton  from './components/button/xaButton'
import xabuttonGroup  from './components/button/xabuttonGroup'
import xaContainer  from './components/Layout/xaContainer'
import xaRow  from './components/Layout/xaRow'



const Components = [
    xaButton,
    xabuttonGroup,
    xaContainer,
    xaRow
]
const install = function (Vue){
    if(install.installed) return

    console.log(Components)
    Components.map((components)=>Vue.component(components.name, components))
 
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const API = {
    install,
    Components
}

export default API
