export default defineAppConfig({
  pages: ["pages/index/index", "pages/my/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#7A7E83",
    selectedColor: "#1296db",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/home-2-line.png",
        selectedIconPath: "./assets/home-2-fill.png",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "./assets/user-line.png",
        selectedIconPath: "./assets/user-fill.png",
      },
    ],
  },
});
