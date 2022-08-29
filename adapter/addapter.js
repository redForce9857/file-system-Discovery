import * as fs from "fs";

class Adapter{
    constructor() {
        this.dir = (name) => 'data/' + name;
    }

    writeFile(name, data){
        return new Promise((reject,resolve) =>{
            const stream =  fs.createWriteStream(this.dir(name))
            stream.write(data)
            stream.on('error', (e) =>{
                reject(e)
            })
            resolve({name})
        })
    }

    readFile(name){
        return fs.createReadStream(this.dir(name))
    }

}

export default new Adapter();