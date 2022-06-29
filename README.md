# 部署方式

安装 parcel：

```
yarn global add parcel@1.9.7
```

每次改完代码，必须运行这一行，才能正确的请求 JS 和 CSS：

```
parcel build src/index.html --no-minify --public-url .
```
