import './styles/index.scss'



import {Button, ButtonGroup}  from './components/button/index'


const components = [
    Button,
    ButtonGroup
]

console.log(components)
const install = function (Vue){
    if(install.installed) return
   


    console.log(components)
    components.map((component)=>Vue.component(component.name,component))
    // for (let i in Components) {
    //     Vue.component(i, Components[i])
    //  }
}


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const API = {
    install,
    components
}

export default API
