# Contact Keeper

在线通讯录,实现注册登录,前端鉴权
前端用 react 技术栈完成,后台使用 express 完成.使用 jwt 做认证.数据存储使用 MongoDB.

## 依赖安装

```bash
npm install
npm client-install
```

### 配置 MongoDB

编辑 /config/default.json 中的 uri 填入 MongoDB 的 uri

### 启动开发

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```
