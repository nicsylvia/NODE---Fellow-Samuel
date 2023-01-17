// import http from "https";
// import local from "http";

// import fs from "fs";
// import path from "path";
// import stream from "stream";

// const URL: string = "https://fakestoreapi.com/products";

// const URL1: string =
//   "https://api.nasa.gov/planetary/apod?api_key=1vQha29IYNyn1yhud8t5PniF4NNuwkyjzf9NLEXB";

// const URL2: string = "https://api.github.com/users/petxcode";

// const app = local.createServer(
//   (
//     req: local.IncomingMessage,
//     res: local.ServerResponse<local.IncomingMessage>
//   ) => {
//     const { url, method } = req;

//     if (url === "/nasa" && method === "GET") {
//       http.get(URL1, (resp) => {
//         let body = "";

//         resp.on("data", (chunk) => {
//           body += chunk;
//         });

//         resp.on("end", () => {
//           let result = JSON.parse(body).url;

//           http.get(result, (resp) => {
//             let img = new stream.Transform();
//             resp.on("data", (chunk) => {
//               img.push(chunk);
//             });

//             resp.on("end", () => {
//               let file = path.join(__dirname, "/images", "nasa.jpg");

//               fs.writeFileSync(file, img.read());
//             });
//           });
//         });
//       });

//       res.write("Image has been saved");
//       res.end();
//     }

//     if (url === "/product/images" && method === "GET") {
//       http.get(URL, (resp) => {
//         let body = "";

//         resp.on("data", (chunk) => {
//           body += chunk;
//         });

//         resp.on("end", () => {
//           let results = JSON.parse(body);

//           console.log("View Result: ");

//           let result =
//             results[Math.floor(Math.random() * results.length)].image;

//           console.log(results[Math.floor(Math.random() * results.length)]);

//           http.get(result, (resp) => {
//             let img = new stream.Transform();
//             resp.on("data", (chunk) => {
//               img.push(chunk);
//             });

//             resp.on("end", () => {
//               let file = path.join(__dirname, "/images", `${Date.now()}.jpg`);

//               fs.writeFileSync(file, img.read());
//             });
//           });
//         });
//       });

//       res.write("Product Image has been saved");
//       res.end();
//     }

//     if (method === "GET") {
//       res.setHeader("Content-Type", "application/json");

//       let name = url?.split("/")[2];
//       const options = {
//         hostname: "api.github.com",
//         path: `/users/${name}`,
//         method: "GET",
//         headers: {
//           "user-agent": "node.js",
//         },
//       };

//       http.get(options, (resp) => {
//         let body = "";

//         resp.on("data", (chunk) => {
//           body += chunk;
//         });

//         resp.on("end", () => {
//           let result = JSON.parse(body);

//           const file = path.join(__dirname, "/github", `github.json`);

//           fs.writeFileSync(file, JSON.stringify(result), (err, data) => {
//             if (err) {
//               console.log(err);
//             } else {
//               result = data;
//               fs.write(JSON.stringify(result));
//             }
//           });
//         });
//       });

//       //   res.write("Github Data has been saved");

//       const file = path.join(__dirname, "/github", `github.json`);

//       fs.readFile(file, (err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.write(data);

//           res.end();
//         }
//     });
//   }

//   if (url === "/product/data" && method === "GET") {
//     http.get(URL, (resp) => {
//       let body = "";

//       resp.on("data", (chunk) => {
//         body += chunk;
//       });

//       resp.on("end", () => {
//         let results = JSON.parse(body);

//         console.log("View Result: ");

//         let result = results[Math.floor(Math.random() * results.length)];

//         const file = path.join(__dirname, "/data", `${Date.now()}.json`);

//         fs.writeFileSync(file, JSON.stringify(result));
//       });
//     });

//     res.write("Product Data has been saved");
//     res.end();
//   }
// }
// );

// app.listen(3355, () => {
// console.log("");
// console.log("Server is now running");
// console.log("");
// });


































