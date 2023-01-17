import fs from "fs";
import path from "path";

// How to read information in a file.
// fs.readFile(
//     path.join(__dirname, "files", "starter.txt"), "utf-8",
//     (error, data): void =>{
//         if (error) throw error;
//         console.log("This is the data in the file:", data);
//     }
// )

// // How to write into a new file. Create a new file and write into it.
// const rentLetter = "Dear Landlord!!. Come and check your house. I'm not interested."
// fs.writeFile(
//     path.join(__dirname, "files", "newFile.txt"),
//     rentLetter,
//     (error) =>{
//         if (error) {
//             console.log("An error occured");
//         } else {
//             console.log("Done. Check your workSpace.");
            
//         }
//     }
// )

// // How to update an already existing file:
// const rentLetterUpdate = "\n Refund my money to me oooo."
// fs.appendFile(
//     path.join(__dirname, "files", "newFile.txt"),
//     rentLetterUpdate,
//     (error): void =>{
//         if (error) {
//             console.log("Failed to update");
//         } else {
//             console.log("File Updated Successfully");       
//         }
//     }
// )

// // To create new folder
// fs.mkdir(
//     "./newFolder", (error): void =>{
//         if (error) {
//             console.log("Failed to create error");
//         } else {
//             console.log("Folder Created");
            
//         }
//     }
// )

if (!fs.existsSync("./newFolder2")) {
    fs.mkdir(
        "./newFolder2", (error): void =>{
            if (error) {
                console.log("Can't create folder");
                
            } else {
                console.log("created");
                
            }
        }
    )
}

fs.rmdir(
    "./newFolder2", (error): void =>{
        if (error) {
            console.log("Error");
        } else {
            console.log("File deleted");
            
        }
    }
)

