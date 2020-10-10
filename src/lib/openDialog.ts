import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'

export const openDialog = (options) => {
    const close = ()=>{
        app.unmount(div)
        div.remove()
    }
    const defaultOptions = {
        visible: true,
        title: '123',
        'onUpdate:visible': (newVisible) => {
            if (newVisible === false){
                close()
            }
        }
    }
    const { title, content } = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp({
        render() {
            return h(Dialog, defaultOptions)
        }
    })
    app.mount(div)
}
