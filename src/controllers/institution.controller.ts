import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import Institution from "../models/institution"


function getAll (request:Request, response:Response): void {

    Institution.find({}).then((responseBody)=>{

        if(responseBody == null) {

            return response.status(404).json(responseBody);

        } else {

            return response.status(200).json(responseBody);

        } 

    }).catch((erro) => {

        return response.status(500).json(erro);

    })

}


function addInstitution (request:Request, response:Response): void {

    const newInst = new Institution({

        "name": request.body.name,
        "description": request.body.description,
        "url": request.body.url,
        "responsible": request.body.responsible,

    });

    newInst.save().then((responseBody) => {

        return response.status(200).json(responseBody);

    }).catch((erro) => {

        return response.status(500).json(erro);

    })
}


function getInstitution (request:Request, response:Response): void {
    Institution.findOne({"name":request.params.name}).then((responseBody)=>{

        if(responseBody == null) {

            return response.status(404).json(responseBody);

        } else {

            return response.status(200).json(responseBody);

        }

    }).catch((erro) => {

        return response.status(500).json(erro);

    })
}


function removeInstitution (request:Request, response:Response): void {

    Institution.deleteOne({"name":request.params.name}).then((responseBody)=>{

        if(responseBody == null) {

            return response.status(404).json(responseBody);

        } else {

            return response.status(200).json(responseBody);

        }

    }).catch((erro) => {

        return response.status(500).json(erro);

    })
}

export default { getAll, addInstitution, getInstitution, removeInstitution };