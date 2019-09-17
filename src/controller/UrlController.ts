import {NextFunction, Request, Response} from "express";
import { storage } from "../index";

export class UrlController {
    // async hello(request: Request, response: Response, next: NextFunction) {
    //     response.send("Hello World!")
    // }

    async shortUrl(request: Request, response: Response, next: NextFunction){
        
        let urlData = {
            "id": storage.urls.length + 1,
            "urls": request.body.urls,
            "shortUrl": "https://warm-scrubland-03694.herokuapp.com/urls/"+storage.urls.length + 1
        }
        storage.urls.push(urlData)
        response.send(urlData)
    }

    async showList(request: Request, response: Response, next: NextFunction){
        response.send(storage.urls)
    }

    async redirect(request: Request, response: Response, next: NextFunction){

        let urlId = request.params.id
        for(let url of storage.urls){
            if(parseInt(urlId) == url.id){
                response.redirect(url.urls)
            }
        }
    }
}