import http from "http";

const port: number = 1445;

interface DATA {
  message: string;
  success: boolean;
  data: {}[] | null | {};
}

interface iDATA {
  id: number;
  name: string;
}

let dataSet: iDATA[] = [
  { id: 1, name: "Peter" },
  {
    id: 2,
    name: "Sylvia",
  },
  {
    id: 3,
    name: "Tunde",
  },
];

const app = http.createServer(
  (
    req: http.IncomingMessage,
    res: http.ServerResponse<http.IncomingMessage>
  ) => {
    const { url, method } = req;
    res.setHeader("Content-Type", "application/json");

    let status: number = 404;
    let result: DATA = {
      message: "failed",
      success: false,
      data: null,
    };
    console.log(result);

    let body: any = [];

    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
      console.log("The cuurent body: ", JSON.parse(body));
    });

    req.on("end", () => {
      if (url === "/" && method === "GET") {
        status = 200;
        result.message = "Found Entries";
        result.success = true;
        result.data = dataSet;
      }

      //   if (method === "GET") {
      //     const getID: string | undefined = url?.split("/")[1];

      //     const getIDS: number = parseInt(getID!);

      //     // new dataSet.find((el) => el.id == getIDS);

      //     let newData: Array<iDATA> = dataSet.find((el) => el.id === getIDS);

      //     console.log(newData);
          // status = 200;
      //     result.message = "Single Entries";
      //     result.success = true;
      //     result.data = newData;
      //   }

      if (url === "/" && method === "POST") {
        dataSet.push(JSON.parse(body));
        console.log("***********");
        console.log("The body: ", body);

        status = 201;
        result.message = "Entry Created";
        result.success = true;
        result.data = dataSet;
      }

      if (method === "DELETE") {
        const getID: string | undefined = url?.split("/")[1];
        // const getName: string | undefined = url?.split("/")[1];

        const getIDS = parseInt(getID!);
        if (getIDS <= dataSet.length) {
          dataSet = dataSet.filter((el) => el.id !== getIDS);

          status = 201;
          result.message = "Entry Deleted";
          result.success = true;
          result.data = dataSet;
        } else {
          status = 404;
          result.message = "No id match";
          result.success = false;
          result.data = null;
        }
      }

      if (method === "PATCH") {
        const getID: string | undefined = url?.split("/")[1];
        // const getName: string | undefined = url?.split("/")[1];

        const getIDS = parseInt(getID!);

        if (getIDS <= dataSet.length) {
          status = 201;

          result.message = "Single Get";
          result.success = true;
          result.data = dataSet[getIDS - 1];
        } else {
          status = 404;
          result.message = "No id match";
          result.success = false;
          result.data = null;
        }
      }

      if (method === "PUT") {
        const { name } = JSON.parse(body);

        const getID: string | undefined = url?.split("/")[1];

        const getIDS = parseInt(getID!);

        dataSet[getIDS - 1].name = name;
        // let myData = (dataSet[getIDS - 1] = name);

        if (getIDS <= dataSet.length) {
          status = 201;

          result.message = "Entry Updated";
          result.success = true;
          result.data = dataSet;
        } else {
            status = 404;
          result.message = "No id match";
          result.success = false;
          result.data = null;
        }
      }

      res.end(JSON.stringify({ status, result }));
    });
  }
);

app.listen(port, () => {
  console.log("");
  console.log("let's do this");
  console.log("");
});