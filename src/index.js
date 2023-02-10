const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(80, () => {
  console.log('server is running at http://localhost:80')
})
