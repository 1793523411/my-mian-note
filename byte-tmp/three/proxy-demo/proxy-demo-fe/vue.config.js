module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4000",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },

      "/github": {
        target: "https://api.github.com",
        pathRewrite: {
          "^/github": "", // 替换掉代理地址中的 /api
        },
        changeOrigin: false, // 确保请求 GitHub 的主机名就是：api.github.com
      },
    },
  },
};
