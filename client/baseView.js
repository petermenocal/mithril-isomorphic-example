"use strict"

var m = require("mithril")

function getTitle (vnode) {
  if (vnode.state.getTitle) {
    return vnode.state.getTitle()
  }
  return "Geeky Pixel"
}

module.exports = function (view) {
  if (process.browser) {
    return function (vnode) {
      document.title = getTitle(vnode)
      return view(vnode)
    }
  }
  return function (vnode) {
    return [
      m("!doctype[html]"),
      m("html[lang=en]", [
        m("head", [
          m("title", getTitle(vnode)),
          m("meta[charset=utf-8]"),
          m("script[src=/index.js]"),
          m("link", {rel: "stylesheet", href: "https://unpkg.com/tachyons/css/tachyons.min.css"})
        ])
      ]),
      m("body", view(vnode))
    ]
  }
}
