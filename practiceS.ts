import fs from "fs";
import http from "https"
import  stream  from "stream";
import path from "path";

const URL1: string = "https://api.github.com/users/PetxCode";

const URL2: string = "https://fakestoreapi.com/products";

const URL3: string =
  "https://api.nasa.gov/planetary/apod?api_key=OLObe95VSJjhi4EK1BulUVnrJOtJbPVq5o7XWBqe";


const Port = 2020;

const options = {
    host: "api.github.com",
    path: "/users/PetxCode",
    method: "GET",
    headers: { 'user-agent': 'Node.js' }
}
 
http.get(options, reply =>{
    let wrapper = "";
    reply.on(
        "data", chunk =>{
            wrapper += chunk;
            console.log(chunk);
        }
    ).on("end", () =>{
        // console.log(wrapper);
        console.log(JSON.parse(wrapper));
        // let imgURL = JSON.parse(wrapper)[Math.floor(Math.random() * 20)].image;

        // http.get(imgURL, respond =>{
        //     let image = new stream.Transform()
        //     respond.on(
        //         "data", buffer =>{
        //         image.push(buffer);
        //         }
        //     )
        //     respond.on("end", ()=>{
        //         fs.writeFileSync(path.join(__dirname, "/imgFolder", `${Date.now()}.jpg`),
        //         image.read())
        //     })
        // })
    })
})
