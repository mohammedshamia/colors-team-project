import { Route, Routes } from "react-router-dom"
import { HomePage } from "./Pages/Gest/HomePage/HomePage"
import { SearchScreen } from "./Pages/Gest/SearchScreen/SearchScreen"
import { ProductItem } from "./Pages/Gest/ProductItem/ProductItem"
import NotFoundScreen from "./Pages/Gest/NotFoundScreen/NotFoundScreen"
import {Login} from "./Pages/Auth/Login/Login"

import {Signup} from "./Pages/Auth/Signup/Signup"



/** there  is  3  role one  of  thim  is  user  and  gest  and the   */
export const AllRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={'/product/:id'} element={<ProductItem />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFoundScreen />} />

        </Routes>
    )
}