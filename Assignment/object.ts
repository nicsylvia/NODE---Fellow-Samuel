const URL2: string = "https://fakestoreapi.com/products";

import http from "https";
import local from "http";
import fs  from "fs";
import path from "path";


const server = local.createServer((req, res) =>{
    const {method, url} = req;
    if (method === "GET" && url === "/product/data" && res.statusCode === 200) {
        http.get(URL2, response =>{
            let container = "";
            response.on(
                "data", chunk =>{
                    container += chunk;
                    console.log(container);
                }
            )
            response.on("end", () =>{
                let contain = JSON.parse(container);
                let result = contain[Math.floor(Math.random() * contain.length)]

               const file = path.join(__dirname, "/data", `${Date.now()}.json`);

               fs.writeFileSync(file, JSON.stringify(result));
            })
        
        })

        res.write("Product Images has been saved");
        res.end();
        
    }

    res.write("Product data gotten");
    res.end();
})