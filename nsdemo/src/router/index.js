import Vue from "vue";
import Router from "vue-router";
//新闻列表 异步路由
const index = (resolve) => {
  require.ensure([], () => {
    resolve(require("@/pages/index.vue"));
  });
};
//新闻详情 异步路由
const article = (resolve) => {
  require.ensure([], () => {
    resolve(require("@/pages/article.vue"));
  });
};
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
    },
    {
      path: "/article/:title/:reads/:from/:date/:image",
      name: "article",
      component: article,
    },
  ],
});
