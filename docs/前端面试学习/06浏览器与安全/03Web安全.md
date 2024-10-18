 
# Web安全

## 1. 什么是XSS攻击？如何防范？
**答案**：XSS（跨站脚本攻击）是一种将恶意脚本注入到受信任网站的攻击方式。

防范措施：
1. 输入验证和过滤
2. 输出编码
3. 使用 Content Security Policy (CSP)
4. 使用 HttpOnly 标记 cookie
5. 使用现代框架的内置XSS保护
6. 定期进行安全审计和渗透测试

示例（输出编码）：
```javascript
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag));
}
```

## 2. 什么是CSRF攻击？如何防范？
**答案**：CSRF（跨站请求伪造）是一种强制用户在当前已登录的Web应用程序上执行非本意操作的攻击方式。

防范措施：
1. 使用 CSRF Token
2. 验证 HTTP Referer 字段
3. 使用 SameSite Cookie 属性
4. 在请求中使用自定义请求头
5. 避免使用 GET 请求进行数据修改操作
6. 二次验证敏感操作

示例（CSRF Token）：
```javascript
// 服务器端生成 token
const csrfToken = generateToken();
res.cookie('XSRF-TOKEN', csrfToken);

// 客户端发送请求时带上 token
fetch('/api/data', {
    method: 'POST',
    headers: {
        'X-XSRF-TOKEN': getCookie('XSRF-TOKEN')
    },
    // ...
});
```

## 3. 什么是点击劫持（Clickjacking）？如何防范？
**答案**：点击劫持是一种视觉欺骗攻击，攻击者使用透明的iframe覆盖在正常网页上，诱导用户点击。

防范措施：
1. 使用 X-Frame-Options 响应头
2. 使用 Content Security Policy (CSP) 的 frame-ancestors 指令
3. 使用 JavaScript 框架保护
4. 实施 frame busting 技术

示例：
```http
X-Frame-Options: DENY
Content-Security-Policy: frame-ancestors 'none'
```

## 4. 什么是SQL注入？前端如何配合后端预防SQL注入？
**答案**：SQL注入是一种将恶意SQL代码插入应用的输入参数中，并在后端数据库中执行的攻击技术。

前端预防措施：
1. 输入验证和过滤
2. 使用参数化查询或预处理语句
3. 限制输入长度和类型
4. 避免直接将用户输入拼接到SQL查询中
5. 使用 ORM（对象关系映射）库

示例（参数化查询）：
```javascript
// 后端 Node.js 示例
const sql = 'SELECT * FROM users WHERE id = ?';
connection.query(sql, [userId], (error, results) => {
    // 处理结果
});
```

## 5. 什么是中间人攻击？如何防范？
**答案**：中间人攻击是攻击者插入到两个通信方之间，能够窃听和篡改他们之间传输的数据的攻击方式。

防范措施：
1. 使用HTTPS协议
2. 实施 HTTP Strict Transport Security (HSTS)
3. 使用证书固定（Certificate Pinning）
4. 避免使用公共Wi-Fi，或使用VPN
5. 检查证书的有效性
6. 使用双因素认证

示例（HSTS 头）：
```http
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

## 6. 什么是内容安全策略（CSP）？如何实施CSP？
**答案**：内容安全策略是一种额外的安全层，用于检测并削弱某些特定类型的攻击，包括 XSS 和数据注入攻击。

实施CSP：
1. 设置 Content-Security-Policy HTTP 头
2. 使用 `<meta>` 标签在页面中设置CSP
3. 定义允许加载的资源的源
4. 禁用不安全的内联代码和eval()
5. 报告CSP违规

示例：
```http
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com;
```

## 7. 什么是子资源完整性（SRI）？如何使用SRI？
**答案**：子资源完整性是一种安全功能，允许浏览器检查其获得的资源（例如从 CDN 获得的）是否被篡改。

使用SRI：
1. 为资源生成一个加密散列
2. 在 `<script>` 或 `<link>` 标签中使用 integrity 属性

示例：
```html
<script src="https://example.com/example-framework.js" 
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous"></script>
```

## 8. 什么是安全的密码存储？前端在密码安全方面应注意什么？
**答案**：安全的密码存储通常在后端实现，包括使用强哈希算法、加盐等技术。

前端注意事项：
1. 使用HTTPS传输密码
2. 不在前端存储明文密码
3. 实施密码强度检查
4. 使用双因素认证
5. 限制登录尝试次数
6. 在传输前对密码进行哈希（注意：这不能替代服务器端的哈希）

示例（密码强度检查）：
```javascript
function checkPasswordStrength(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasNonalphas = /\W/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas;
}
```

## 9. 什么是CORS预检请求？它与Web安全有什么关系？
**答案**：CORS预检请求是浏览器在进行实际的跨源请求之前，发送的一个 OPTIONS 请求，用于检查服务器是否允许实际的请求。

与Web安全的关系：
1. 防止未经授权的跨源请求
2. 允许服务器指定哪些源可以访问资源
3. 控制哪些HTTP方法和头部可以用于跨源请求
4. 减少跨站点脚本攻击（XSS）和跨站请求伪造（CSRF）的风险

## 10. 什么是安全的会话管理？前端如何配合实现安全的会话管理？
**答案**：安全的会话管理包括创建、存储和销毁用户会话的安全实践。

前端配合措施：
1. 使用 HttpOnly 和 Secure 标记的 cookies
2. 实施合理的会话超时
3. 在用户登出时清除会话数据
4. 使用 CSRF token 保护请求
5. 避免在 URL 中传递会话 ID
6. 使用 HTTPS 加密所有通信
7. 实现重新认证机制用于敏感操作

示例（清除会话数据）：
```javascript
function logout() {
    // 清除本地存储的会话数据
    localStorage.removeItem('sessionData');
    // 发送登出请求到服务器
    fetch('/api/logout', { method: 'POST' })
        .then(() => {
            // 重定向到登录页面
            window.location.href = '/login';
        });
}
```