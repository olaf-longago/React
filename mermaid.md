~~~mermaid
graph TD
A[用户] --> B{是否登录}
B -->| 是 | C[访问内容]
B -->| 否 | D[登录页面]
~~~