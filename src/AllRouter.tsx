import { Route, Routes } from "react-router-dom"

import {PrivateRoute  } from "./Hook/PrivaterRouter";
import Loadable from "./Hook/Loadable"
import { lazy } from "react"

// import ProfilePage  from"./Pages/User/Profile/Profile"


const Signup = Loadable(lazy(() => import('./Pages/Auth/Signup/Signup')));
const Login = Loadable(lazy(() => import('./Pages/Auth/Login/Login')));
const NotFoundScreen = Loadable(lazy(() => import('./Pages/Gest/NotFoundScreen/NotFoundScreen')));
const ProductItem = Loadable(lazy(() => import('./Pages/Gest/ProductItem/ProductItem')));
const SearchScreen = Loadable(lazy(() => import('./Pages/Gest/SearchScreen/SearchScreen')));
const HomePage = Loadable(lazy(() => import('./Pages/Gest/HomePage/HomePage')));
const ProfilePage = Loadable(lazy(() => import('./Pages/User/Profile/Profile')));
const UpdateProfilePage = Loadable(lazy(() => import('./Pages/User/Profile/UpdateProfile')));
const CartPage = Loadable(lazy(() => import('./Pages/User/ShoppingCart/ShoppingCart')));
const Review = Loadable(lazy(() => import('./Pages/User/payment/review/review')));
const PaymentSuccess = Loadable(lazy(() => import('./Pages/User/PaymentSuccess/PaymentSuccess')));
const OrderItems = Loadable(lazy(() => import('./Pages/User/caardRender/orderItems')));


/** there  is  3  role one  of  thim  is  user  and  gest  and the   */
export const AllRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={'/product/:id'} element={<ProductItem />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* private  */}
            
            <Route path="/profile" element={ProfilePage} />
            <Route path="/update-profile" element={UpdateProfilePage} />


            <Route path="/cart" element={CartPage} />
            <Route path="/review" element={Review} />
            <Route path="/review" element={OrderItems} />
            <Route path="/payment-succuss" element={PaymentSuccess} />

                {/* private */}

            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    )
}