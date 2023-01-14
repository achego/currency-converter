const http = require('http')
const app = require('./app')


const server = http.createServer(app)
const port  = process.env.PORT || 4000
server.listen(port).addListener('listening', ()=> {
    console.log(`Server Connected and listening at port ${port}`);
})