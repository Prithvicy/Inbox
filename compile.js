const path = require("path");
const fs = require("fs");
const solc = require("solc");
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");//so it can reach directory even in unix based systems
const source = fs.readFileSync(inboxPath, "utf-8");//to read the file we directed to is of file format utf-8
module.exports=solc.compile(source, 1).contracts[':Inbox'];//we are exporting the byte code and abi of the file

