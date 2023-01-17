import local, { IncomingMessage, ServerResponse } from "http";

const port: number = 2000;

interface Data{
    message: string;
    success: boolean;
    data: {}[] | null | {};
}

interface DB{
    id: number;
    name: string;
}

let database: DB[] = [
    {id: 2, name: "Esther"},
    {id: 0, name: "CodeLab"},
    { id: 4, name: "Feyikemi" },
    { id: 1, name: "Peter" },
    {id: 5, name: "sylvia"},
    
];
let databaseWrap: number = database[database.length - 1].id;
console.log("firstdb: ", databaseWrap);
const myServer = local.createServer(
    (
        req: IncomingMessage,
        res: ServerResponse<IncomingMessage>
    ): void =>{
        const { method, url } = req;

        res.setHeader("content-Type", "application/json");

        let status: number = 404;
        let DBResult: Data = {
            message: 'failed',
            success: false,
            data: null,
        }

        let container: any = [];
        let contWrap: number;

        req.on("data", (chunk) =>{
            container.push(chunk);
            console.log("");
            contWrap = JSON.parse(container).id;
            console.log("secondct: ",contWrap);
        });
        

        req.on("end", () =>{
            
            // GET METHOD: 
            if (url === "/" && method === "GET") {
                const sortDB = (x) =>{
                    return (a, b) =>{
                        if (a[x] > b[x]) {
                            database.push(JSON.parse(container));
                        } else if (a[x] < b[x]) {
                            return -1
                        }
                        return 0;
                    };
                }
                database.sort(sortDB("id")); 
                console.log("sort: ", database.sort(sortDB("id")));
                
                status = 200;
                DBResult.message = "Successfully Read the DB - ENTRIES FOUND.";
                DBResult.success = true;
                DBResult.data = database;
            }

            // POST METHOD: 
            if (url === "/" && method === "POST") {

                const sortDB = (x) =>{
                    return (a, b) =>{
                        if (a[x] > b[x]) {
                            database.push(JSON.parse(container));
                        } else if (a[x] < b[x]) {
                            return -1
                        }
                        return 0;
                    };
                }
                database.sort(sortDB("id"));
                console.log("sort: ", database.sort(sortDB("id")));
                
                status = 201;
                DBResult.message = "Successfully wrote to DB - ENTRIES CREATED.";
                DBResult.success = true;
                DBResult.data = database;
            }

            // DELETE METHOD:
            if (method === "DELETE") {
                const getID: string | undefined = url?.split("/")[1];
                const numID = parseInt(getID!);

                if (numID <= database.length) {
                    database = database.filter((el) => el.id !== numID);

                    status = 201;
                    DBResult.message = "Successfully Deleted from the DB - ENTRIES DELETED.";
                    DBResult.success = true;
                    DBResult.data = database;
                } else{
                    status = 404;
                    DBResult.message = "No id match";
                    DBResult.success = false;
                    DBResult.data = null;
                }
                
            }

            // UPDATE METHOD(PATCH):
            if (method === "PATCH") {
                const getID: string | undefined = url?.split("/")[1];
                const numID = parseInt(getID!);
                console.log("numID: ", numID);

                if (numID <= database.length) {
                    status = 201;
                    DBResult.message = "Successfully Updated the DB - ENTRIES UPDATED.";
                    DBResult.success = true;
                    DBResult.data = database[numID - 1]
                } else {
                    status = 404;
                    DBResult.message = "No id match";
                    DBResult.success = false;
                    DBResult.data = null;
                }

            }

            // UPDATE(PUT METHOD): 
            if (method === "PUT") {
                const { name } = JSON.parse(container);
        
                const getID: string | undefined = url?.split("/")[1];
        
                const numID = parseInt(getID!);
        
                database[numID - 1].name = name;
                // let myData = (dataSet[getIDS - 1] = name);
        
                if (numID <= database.length) {
                  status = 201;
                  DBResult.message = "Entry Updated";
                  DBResult.success = true;
                  DBResult.data = database;
                } else {
                    status = 404;
                    DBResult.message = "No id match";
                    DBResult.success = false;
                    DBResult.data = null;
                }
              }
            console.log("To check: ",database.push(JSON.parse(container)));

            res.end(
                JSON.stringify({
                    status, DBResult
                })
            );


        })


    }
)

myServer.listen(port, ()=>{
    console.log("");
    console.log("GOD ABEG");
    console.log("");
});