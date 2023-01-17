import { IncomingMessage, ServerResponse } from "http";
import local from "http";
import fs from "fs";
import path from "path";

const PORT = 2020;

const myServer = local.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>): void =>{
    res.setHeader("content-Type", "application/json");
    const {method, url} = req;

    const db = [
        {username: "sylvia", phoneno: "09061180473"},
        {username: "Daniel", phoneno: "08052827585"},
        {username: "Feyikemi", phoneno: "09087654312"},
        {username: "Codelab",  phoneno: "08076896898"},
    ]

    let body = "";

    req.on("data", (chunk) =>{
        body += chunk;
    });
    req.on("end", () =>{
        if (url === "/" && method === "GET" && res.statusCode === 200) {
            console.log(db);
            res.end(JSON.stringify(db));
        }
        res.end();
        if (url === "/" && method === "POST" && res.statusCode === 200) {
            let newBody = JSON.parse(body);
            console.log(newBody);
            db.push(newBody);
            console.log(" ");
            console.log("hi");
            console.log(db);
        }
        res.end();
    })                                                                                       
});

myServer.listen(PORT, () =>{
    console.log("Server is running.");
})
