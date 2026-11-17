import DefaultTheme from 'vitepress/theme'
import DemoEmbed from '../components/DemoEmbed.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoEmbed', DemoEmbed)
  }
}
