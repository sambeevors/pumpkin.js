export default class FakeDOM {
  constructor(html, cb) {
    this.html = html
    this.cb = cb
    this.resetDom()
  }

  resetDom() {
    document.body.innerHTML = this.html
    this.cb()
  }
}
