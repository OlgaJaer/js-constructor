import { block } from '../utils'
import { TitleBlock, TextBlock } from './blocks'

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    this.update = updateCallback

    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('beforeend', this.template)
    this.$el.addEventListener('submit', this.add.bind(this)) //теряем контекст??
  }

  get template() {
    return [block('text'), block('title')].join('')
  }

  add(event) {
    event.preventDefault()

    //console.log(event.target)
    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value

    //debugger
    const newBlock =
      type === 'text'
        ? new TextBlock(value, { styles })
        : new TitleBlock(value, { styles })

    this.update(newBlock)

    event.target.value.value = ''
    event.target.styles.value = ''
  }
}
