const jsonServer = require('json-server')
//const sleep = require('sleep')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = 3001
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
//server.get('/timeout', async (req, res) => {
	//const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))
//	await sleep(10000)
//    res.status(504).jsonp({
//    	error: "Gateway Timeout"
//  	})
//})

// Add custom routes before JSON Server router

server.get('/retryme', (req, res) => {
  if (Math.random() < 0.2) {
   res.status(200).jsonp({
    	message: "Nice try. You are lucky!"
    });
  } else {
  	res.status(500).jsonp({
    	error: "Server Internal Error. Please retry again."
  	});
  }
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
// Use default router
server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is at port ${port}`)
})
