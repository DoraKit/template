module.exports = {
  type: 'list',
  async fetch({ args }) {
    return [{
      style: 'simple',
      title: 'Hello World',
      onClick: () => {
        $ui.toast(`Clicked ${item.title}`)
      }
    }]
  }
}
