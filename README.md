# happy-vue-admin

| 账号      | 密码   | 权限                     |
| --------- | ------ | ------------------------ |
| openadmin | 123456 | 仅只有各个功能的查询权限 |
| monitoradmin | 123456 |  系统监控页面及按钮权限  |

# 使用
修改 .env.development 中 VUE_APP_BASE_API 后端服务地址

```
npm install

npm run dev
```

### TODO
由于ws出问题，暂时关闭 store/modules/user 里面的ws链接 `ws/initSocket`