import SubmitEntity from "../models/db.js";
import Adapter from "../adapter/addapter.js";


class Service{
    constructor() {
        this.Entity = SubmitEntity;
        this.Adapter = Adapter;
    }

    async create(name,data,meta) {
        try {
            await  SubmitEntity.create({
                name,
                ...meta,
            })
            return  Adapter.writeFile(name, data)
        } catch (e) {
            console.log(e)
        }
    }

    async getAllFiles() {
        return SubmitEntity.find({
            attributes: ["name", "mimetype", "size"],
        });
    }
    async getOneFile(name) {
        const meta = await SubmitEntity.findOne({name: name})
        if (meta === null) {
            return 'File is not found'
        }
        return {
            meta,
            stream: Adapter.readFile(name)
        }
    }
}

export default new Service();