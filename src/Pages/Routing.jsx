import { Routes, Route } from "react-router-dom"
import HomePage from "./Oshkosh/HomePage/HomePage"
import ProductPage from "./ProdPage/ProdList/ProductPage"
import Product1 from "./ProdPage/ProdDetail/Product1"
import CreateAccount from "./NavLinks/create/create"
import SignIn from "./NavLinks/signin/signin"
import Littleplanet from "./LittlePlanet/Page/Littleplanet"
import TractProduct from "./NavLinks/tract/tract"
import Cart from "./NavLinks/ProductCart/ProductCart"

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/littleplanet" element={<Littleplanet />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/track" element={<TractProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/createacc" element={<CreateAccount />} />
            <Route path="/productpage" element={<ProductPage />} />
            <Route path="/productpage/:id" element={<Product1 />} />
        </Routes>
    )
}

export default Routing;