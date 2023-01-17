import fs from "fs";
import path from "path";
import http, { IncomingMessage, ServerResponse } from "http";

const PORT: number = 3000;

const webServer = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>): void =>{
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    // res.write("Created my local server for my web pages");
    

   let viewPages: string = "webpages/";

   switch (req.url) {
    case "/":
        viewPages += "index.html";
        res.statusCode = 200;
        break;

    case "/about":
        viewPages += "about.html";
        res.statusCode = 200;
        break;

    case "/contact":
        viewPages += "contact.html";
        res.statusCode = 200;
        break;

    case "/services":
        viewPages += "services.html";
        res.statusCode = 200;
        break;
   
    default:
        viewPages += "404.html";
        res.statusCode = 404;
        break;
   }


    fs.readFile(
        path.join(__dirname, viewPages),
        (err, data) =>{
            if (err) {
                console.log(`An error occured: ${err}`);
                res.end();
            } else {
               res.write(data) ;
               res.end();
            }
        }
    )
})

webServer.listen(PORT, () =>{
    console.log(`Listening to the local server i created for my webpages: ${PORT}`);
})