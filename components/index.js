module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
      style: 'simple',
      title: 'Hello World',
      onClick: () => {
        $ui.toast(`Clicked ${item.title}`)
      }
    }]
  }
}
