var http=require('http');
http.createServer(function(req,res)
{
    res.writeHead(200,{'content-Type':'text/plain'});
    const url=req.url
    if(url==='/about')
    {
        res.write('Welcome to ABOUT page');
        res.end();
    }
    else if(url==='/contact')
    {
        res.write('Welcome to CONTACT page');
        res.end();
    }
    else if(url==='/career')
    {
        res.write('Welcome to CAREER page');
        res.end();
    }
    else
    {
        res.write('Hello World!');
        res.end();
    }
}).listen(8080,'192.168.29.94',() => {
    console.log('Listening on PC IPv4');
});