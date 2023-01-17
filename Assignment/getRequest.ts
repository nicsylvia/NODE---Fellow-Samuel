// console.log("start");

import http from "http";

const port: number = 3355;

const app = http.createServer((req, res) => {
  let body = "";
  let users = [
    { id: 1, name: "Peter" },
    { id: 2, name: "Osas" },
  ];
  req.on("data", (chunk) => {
    body += chunk;
    console.log(body);
    console.log(chunk);
  });

  req.on("end", () => {
    users.push(JSON.parse(body));

    console.log(users);
  });

  res.setHeader("Content-Type", "application/json");

  res.write(JSON.stringify(users));
  res.end();
});

app.listen(port, () => {
  console.log("");
  console.log("server is ready");
  console.log("");
});