import { UrlController } from "./controller/UrlController";


export const Routes = [{
    method: "post",
    route: "/api/shortUrl",
    controller: UrlController,
    action: "shortUrl"
}];