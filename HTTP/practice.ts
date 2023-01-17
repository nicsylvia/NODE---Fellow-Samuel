import { write } from "fs";
import http, { IncomingMessage, ServerResponse } from "http";

const PORT: number = 2022;

const serverPractice = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>): void =>{
    res.writeHead(200);
    res.write("My server is up and running.");
    res.end();
});

serverPractice.listen(PORT, () =>{
    console.log(`Listening to LocalHost Port: ${PORT}`);
})