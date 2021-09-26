import Admin from "./page/Admin"
import Basket from "./page/Basket"
import Shop from "./page/shop"
import Auth from "./page/Auth"
import Device from "./page/DevicePage"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/const"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin
    },

    {
        path: BASKET_ROUTE,
        component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        component: Shop 
    },

    {
        path: REGISTRATION_ROUTE,
        component: Auth
    },

    {
        path: LOGIN_ROUTE,
        component: Auth
    },

    {
        path: DEVICE_ROUTE + '/:id',
        component: Device
    },
]