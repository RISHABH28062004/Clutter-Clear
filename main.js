import fsn from "fs"
import fs from "fs/promises"
import path from "path"

const basePath = "D:\\Web Development\\Node\\CluttClear"
let files = await fs.readdir(basePath)

for (const item of files) {
    console.log("running for : ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basePath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
    }


}