import fs  from "fs";
import path from "path";
import http, { IncomingMessage, ServerResponse } from "http";

const port: number = 2020;

const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>): void =>{
    // res.setHeader("content-type", "text/html")
    // res.writeHead(200);

    let viewPages: string = "pages/";
    switch (req.url) {
        case "/":
            viewPages += "home.html"
            res.statusCode = 200;
            break;

        case "/services":
            viewPages += "services.html"
            res.statusCode = 200;
            break;

        case "/about":
            viewPages += "about.html"
            res.statusCode = 200;
            break;

        case "/contact":
            viewPages += "contact.html"
            res.statusCode = 200;
            break;

            
        case "/product":
            res.setHeader("Location", "/contact");
            res.statusCode = 301;
            break;
    
        default:
            viewPages += "404.html"
            res.statusCode = 404;
            break;
    }

    fs.readFile(
        path.join(__dirname, viewPages),
        (err, data) =>{
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        }
    )
});

server.listen(port, () =>{
    console.log("Created my server.");
})

