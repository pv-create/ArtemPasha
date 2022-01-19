import Login from "../Components/Pages/LoginPage/login";
import homePage from "../Components/Pages/HomePage/homepage";

export interface IRoute {
    path:string;
    component:React.ComponentType,
    exact?:boolean,
}

export enum routeNames{
    LOGIN='/login',
    HOMEPAGE='/'

}
//маршруты для неавторизованны пользователей
export const publicRouts:IRoute[]=[
    {path:routeNames.LOGIN, exact:true, component:Login}
]
//для авторизованных пользователей
export const privateRouts:IRoute[]=[
    {path:routeNames.HOMEPAGE, exact:true, component:homePage}
]