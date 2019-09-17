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
            "shortUrl": "https://sleepy-beaver-ba039a.netlify.com/"+storage.urls.length + 1
        }
        storage.urls.push(urlData)
        response.send(urlData)
    }
}