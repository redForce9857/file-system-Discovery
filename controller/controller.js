
import Service from "../service/service.js";

class Controller{

    async fileSubmit(req,res) {
        try{
            const name = req.params.name;
            const {data, ...meta } = req.file
            const file = await Service.create(name, data, meta)
            res.send(file);
        }catch (e) {
            res.json(e)
        }
    }


    async getAllFiles(req,res) {
        const allFiles = await Service.getAllFiles()
        res.send(allFiles)
    }

    async findFileByName (req,res) {
        const { stream, meta } = await Service.getOneFile(req.params['name']);
            res.setHeader('content-type', meta.mimetype);
            res.setHeader('content-length', meta.size);
        stream.pipe(res)
    }
}

export default new Controller()