const http=require('http');
const jsonData={
    "question" : "What is node js",
    "answer":"Node js is cross-platform, open-source JavaScript runtime environment that can run on various operating system. node js is used to run javascript code outside the brouser"
}
const app =http.createServer((req,res)=>{
    if(req.url=="/" && req.method=="GET")
    {
        res.write("<h1>Node js is cross-platform, open-source JavaScript runtime environment that can run on various operating system. node js is used to run javascript code outside the brouser</h1>")
        res.write(JSON.stringify(jsonData))
    }

    if(req.url==="/post" && req.method==="POST"){
        let data = ""
        req.on("data",(chunk)=>{
            data+=chunk
        })
        req.on('end', () => {
            console.log('Received data:', data);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Data received successfully');
          });
    }
    res.end();
}).listen(5000)