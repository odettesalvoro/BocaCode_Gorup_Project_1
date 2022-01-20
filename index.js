// New Project 
function readThisFIle(file){
    const fs = require('fs')
    const data = fs.readFileSync('data.json', "utf-8")
return data
}
console.log(readThisFIle())

const fs = require("fs");
fs.readFile("data.json", "utf-8",(err,data) => {
    if (err) {
        console.log(err);
        }
        console.log(data)
})
