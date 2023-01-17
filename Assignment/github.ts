import http from "https";

import local, { IncomingMessage } from "http";
import fs from "fs";
import path from "path";
const URL4: string = "https://api.github.com/users/PetxCode";

const Port = 2020;

const options = {
    host: "api.github.com",
    path: "/users/petxCode",
    method: "GET",
    headers: { 'user-agent': 'Node.js' }
}

const server = local.createServer((req: IncomingMessage, res:) =>{
    const {method, url} = req;
    if (method === "GET" && req === "/github/") {
        res.setHeader("Content-Type", "application/json");
  
        let name = url?.split("/")[2];
        const options = {
          hostname: "api.github.com",
          path: `/users/${name}`,
          method: "GET",
          headers: {
            "user-agent": "node.js",
          },
        };
  
        http.get(options, (resp) => {
          let body = "";
  
          resp.on("data", (chunk) => {
            body += chunk;
          });
  
          resp.on("end", () => {
            let result = JSON.parse(body);
  
            const file = path.join(__dirname, "/github", `github.json`);
  
            fs.writeFileSync(file, JSON.stringify(result)),
             (err, data) => {
              if (err) {
                console.log(err);
              } else {
                result = data;
                fs.writeFile(file, JSON.stringify(result));
              }
            });
          });
        });
  
        //   res.write("Github Data has been saved");
  
        const file = path.join(__dirname, "/github", `github.json`);
  
        fs.readFile(file, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.write(data);
  
            res.end();
          }
      });
    }
    
})

server.listen(Port, () =>{
    console.log("server is running");
})

