import http from "https";


const URL1: string = "https://api.github.com/users/PetxCode";

// const options = {
//     hostname: "api.github.com",
//     path: "/users/PetxCode",
//     method: "GET",
//     headers: {
//         "user-agent": "node.js",
//     }
// }

const options = {
    host: "api.github.com/users",
    path: "/users/",
    method: "GET",
    headers: { 'user-agent': 'Node.js' }
}
 

http.get(options, response =>{
    let wrap = "";
    response.on(
        "data", chunk =>{
            wrap += chunk;
        }
    )
    response.on(
        "end", () =>{
            console.log(JSON.parse(wrap));
        }
    )
})