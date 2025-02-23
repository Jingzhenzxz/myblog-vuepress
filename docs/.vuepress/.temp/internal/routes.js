export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Projects/myblog-vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"D:/Projects/myblog-vuepress/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":""} }],
  ["/algorithm/2-keys-keyboard.html", { loader: () => import(/* webpackChunkName: "algorithm_2-keys-keyboard.html" */"D:/Projects/myblog-vuepress/docs/.vuepress/.temp/pages/algorithm/2-keys-keyboard.html.js"), meta: {"title":""} }],
  ["/algorithm/", { loader: () => import(/* webpackChunkName: "algorithm_index.html" */"D:/Projects/myblog-vuepress/docs/.vuepress/.temp/pages/algorithm/index.html.js"), meta: {"title":""} }],
  ["/java/", { loader: () => import(/* webpackChunkName: "java_index.html" */"D:/Projects/myblog-vuepress/docs/.vuepress/.temp/pages/java/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Projects/myblog-vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
