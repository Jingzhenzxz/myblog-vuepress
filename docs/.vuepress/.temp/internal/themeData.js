export const themeData = JSON.parse("{\"repoLabel\":\"GitHub\",\"editLink\":false,\"contributors\":false,\"lastUpdated\":true,\"lastUpdatedText\":\"上次更新\",\"docsDir\":\"docs\",\"sidebarDepth\":2,\"homeLayout\":true,\"algolia\":{\"appId\":\"你的AppID\",\"apiKey\":\"你的API密钥\",\"indexName\":\"你的索引名称\"},\"markdown\":{\"code\":{\"lineNumbers\":true}},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"算法\",\"link\":\"/algorithm/\"},{\"text\":\"Java\",\"link\":\"/java/\"},{\"text\":\"关于\",\"link\":\"/about/\"}],\"sidebar\":{\"/algorithm/\":[{\"text\":\"算法\",\"collapsible\":true,\"children\":[{\"text\":\"简介\",\"link\":\"/algorithm/\"},{\"text\":\"两个键的键盘\",\"link\":\"/algorithm/2-keys-keyboard\"}]}],\"/java/\":[{\"text\":\"Java\",\"collapsible\":true,\"children\":[{\"text\":\"简介\",\"link\":\"/java/\"}]}],\"/about/\":[{\"text\":\"关于\",\"collapsible\":true,\"children\":[{\"text\":\"关于我\",\"link\":\"/about/\"}]}],\"/\":[{\"text\":\"首页\",\"children\":[{\"text\":\"欢迎\",\"link\":\"/\"}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
