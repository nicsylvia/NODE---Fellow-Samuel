const URL1: string = "https://api.github.com/users/PetxCode";

const URL2: string = "https://fakestoreapi.com/products";

const URL3: string =
  "https://api.nasa.gov/planetary/apod?api_key=OLObe95VSJjhi4EK1BulUVnrJOtJbPVq5o7XWBqe";

import { IncomingMessage, ServerResponse } from "http";
import stream from "stream";
import http from "https";
import http1 from "http";
import fs from "fs";
import path from "path";
const PORT = 2020;

const myServer = http1.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>): void =>{
    const {method, url} = req;

    if (method === "GET" && url === "/product/images" && res.statusCode === 200) {
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
               let wrapper = Math.floor(Math.random() * contain.length);
                let imageURL = contain[wrapper].image;

                if (res.statusCode === 200) {
                    http.get(imageURL, replies =>{
                        let img = new stream.Transform();
                        replies.on(
                            "data", buffer =>{
                                img.push(buffer);
                            }
                        )
                        replies.on("end", () =>{
                            let name = Date.now();
                            fs.writeFileSync(path.join(__dirname, "../Images", `${name}.png`),
                            img.read())
                        })
                    })
                    
                }
            })
        
        })

        res.write("Product Images has been saved");
        res.end();
        
    }
})

myServer.listen(PORT, () =>{
    // console.log("Listening to my local server");
})