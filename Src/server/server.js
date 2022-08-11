const express = require('express')
const router = require('../routes/routess.js')
const app = express()
const port = 8080


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/productos', router)



const server = app.listen(port, () => console.log(`Listening on port:${port}`))


server.on("error", (err) => {
  console.log( `Has tenido un error:${err}`)
})