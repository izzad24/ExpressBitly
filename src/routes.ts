import { UrlController } from "./controller/UrlController";


export const Routes = [
    {
        method: "post",
        route: "/urls",
        controller: UrlController,
        action: "shortUrl"
    },
    {
        method: "get",
        route: "/urls",
        controller: UrlController,
        action: "showList"   
    },
    {
        method: "get",
        route: "/urls/:id",
        controller: UrlController,
        action: "redirect"   
    }
];