


import http from "http" 

//set the port

const PORT = 3000

const server = http.createServer((req,res)=> {
    res.end('im a crying less now that my server is now working')
 })

 server.listen(PORT) 

