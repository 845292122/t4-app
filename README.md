# T4 App

## TODO

- [ ] 登录页面
- [ ] 微信授权登录
- [ ] 账号密码登录
- [ ] 页面布局

## 安全问题

- 安全响应头 (Security Headers)：这是提升安全性的低成本高效益措施。
  - 你的责任：在 next.config.js 中添加重要的安全头，如：
    - Content-Security-Policy (CSP): 限制资源加载来源，强力防御 XSS。配置较复杂，但效果好。
    - X-Content-Type-Options: nosniff: 防止浏览器猜测文件类型。
    - Strict-Transport-Security (HSTS): 强制浏览器使用 HTTPS。
    - X-Frame-Options: DENY 或 SAMEORIGIN: 防止点击劫持 (Clickjacking)。
