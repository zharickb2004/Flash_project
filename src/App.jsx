import React from "react"
import "./App.css"
import Pages from "./pages/Pages"
import Cart from "./common/Cart/Cart"
import PageLogin from "./pages/PageLogin"
import { Route, Routes } from "react-router-dom"
import PageRegister from "./pages/PageRegister"
import PageOffer from "./pages/PageOffer"
import PageStores from "./pages/PageStores"
import PageNewProduct from "./pages/PageNewProduct"
import RecoverPasword from "./components/RecoverPassword/RecoverPasword"
import CodeRecoverPassword from "./components/RecoverPassword/CodeRecoverPassword"
import ConcludeBuy from "./components/ConcludeBuy/ConcludeBuy"
import CategoryUnitarie from "./components/CategoryUnitarie/CategoryUnitarie"
import Account from "./components/Account/Account"
import PageAdmin from "./pages/PageAdmin"
import PageNotFound from "./pages/PageNotFound"
import PageStoreInfo from "./pages/PageStoreInfo"
import PageCreateStore from "./pages/PageCreateStore"
import PageDeleteStore from "./pages/PageDeleteStore"

import PageAccountAdmin from "./pages/PageAccountAdmin"
import PageInfoCategory from "./pages/PageInfoCategory"
import PageCreateCategory from "./pages/PageCreateCategory"
import PageDeleteCategory from "./pages/PageDeleteCategory"
import PageUpdateCategory from "./pages/PageUpdateCategory"

import PageSingleShop from "./pages/PageSingleShop"
import PageCreateAdmin from "./pages/PageCreateAdmin"
import CreateProduct from "./components/FormsEmployed/CreateProduct/CreateProduct"
import PageEmployed2 from "./pages/PageEmployed2"
import EditProduct from "./components/FormsEmployed/EditProduct/EditProduct"
import DeleteProduct from "./components/FormsEmployed/DeleteProduct/DeleteProduct"
import ProductsEmployed from "./components/ProductsEmployed/ProductsEmployed"
import MyStoreEmployed from "./components/MyStoreEmployed/MyStoreEmployed"
import EditStore from "./components/FormsEmployed/EditStore/EditStore"
import Estadisticas from "./components/Estaditicas/Estadisticas"

import CreateSubcategory from "./components/FormsEmployed/CreateSubcategory/CreateSubcategory"
import EditSubCategory from "./components/FormsEmployed/EditSubcategory/EditSubCategory"
import DeleteSubcategory from "./components/FormsEmployed/DeleteSubcategory/DeleteSubcategory"
import PageEditPorfileEmployed from "./pages/PageEditPorfileEmployed"
import PageSubcategorys from "./pages/PageSubcategorys"
import Products from "./components/SubCategorys/Products"
import PageEmployed from "./components/MenuEmployed/PageEmployed"
import CardProductBig from "./components/CardProductBig/CardProductBig"
import NewPassword from "./components/NewPassword/NewPassword.jsx"
import PageViewOverAdmin from "./pages/PageViewOverAdmin"
import FormPorfileUser from "./components/MenuUser/FormPorfileUser"
import DasboharUser from "./components/MenuUser/DasboharUser"
import Table from "./components/MenuUser/Table"
import { UseContextShop } from "./Hook/UseContextShop"
import CreateMalls from "./CreateMalls/CreateMalls"
import DataTableMalls from "./Table/DataTableMalls"
import PageDiscountAll from "./pages/PageDiscountAll"
import Buy from "./components/FormBuy/Buy"
import PageBuy from "./pages/PageBuy"
import PageAllStore from "./pages/PageAllStore"
import PageAllMalls from "./pages/PageAllMalls"
import FilterProduct from "./components/FilterProduct/FilterProduct"
import PageOrders from "./pages/PageOrders"


function App() {

  return (
    <>
      <UseContextShop>
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path='/Login' element={<PageLogin />} />
          <Route path='/Register' element={<PageRegister />} />
          <Route path='/Offers/:code/:name' element={<PageOffer />} />
          <Route path='/AllStores' element={<PageAllStore />} />
          <Route path='/OfficialStores/:code/:idStore/:name' element={<PageStores />}>
            <Route path="tienda" element={<PageStores />} />
          </Route>
          <Route path='/NewProducts' element={<PageNewProduct />} />
          <Route path='/BigDiscount' element={<PageNewProduct />} />
          <Route path='/RecoverPassword' element={<RecoverPasword />} />
          <Route path='/CodeRecoverPassword/:id' element={<CodeRecoverPassword />} />
          <Route path='/ConcludeBuy' element={<ConcludeBuy />} />
          <Route path='/Category' element={<CategoryUnitarie />} />
          <Route path='/Account' element={<Account />} />
          <Route path="/search" element={<FilterProduct />} />
          <Route path='/Admin' element={<PageAdmin />} />
          <Route path='/StoresInfo' element={<PageStoreInfo />} />
          <Route path='/CreateStore' element={<PageCreateStore />} />
          <Route path='/DeleteStore/:code' element={<PageDeleteStore />} />
          <Route path='/CategoryInfo' element={<PageInfoCategory />} />
          <Route path='/CreateCategory' element={<PageCreateCategory />} />
          <Route path='/DeleteCategory' element={<PageDeleteCategory />} />
          <Route path='/UpdateCategory' element={<PageUpdateCategory />} />
          <Route path='/AccountAdmin' element={<PageAccountAdmin />} />
          <Route path='/cart/:payment' element={<Cart />} />
          <Route path='/SingleShop' element={<PageSingleShop />} />
          <Route path='/SingleCategory/:code/:name' element={<CategoryUnitarie />} />
          <Route path='/Employed' element={<PageEmployed />} />
          <Route path='/CreateAdmin' element={<PageCreateAdmin />} />
          <Route path='/CardProducts/:code' element={<CardProductBig />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/Employed' element={<PageEmployed2 />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/Products' element={<ProductsEmployed />} />
          <Route path='/CreateProduct' element={<CreateProduct />} />
          <Route path='/EditProduct/:code' element={<EditProduct />} />
          <Route path='/DeleteProduct' element={<DeleteProduct />} />
          <Route path='/MyStore' element={<MyStoreEmployed />} />
          <Route path='/EditStore' element={<EditStore />} />
          <Route path='/Estaditicas' element={<PageEmployed />} />
          <Route path='/Categorys' element={<Estadisticas />} />
          <Route path='/EditPorfileEmployed' element={<PageEditPorfileEmployed />} />
          <Route path='/CreateSubcategory' element={<CreateSubcategory />} />
          <Route path='/EditSubcategory/:code' element={<EditSubCategory />} />
          <Route path='/DeleteSubcategory' element={<DeleteSubcategory />} />
          <Route path='/SubCategorys' element={<PageSubcategorys />} />
          <Route path='/ProductsCategorys' element={<Products />} />
          <Route path="/NewPassword/:id" element={<NewPassword />} />
          <Route path="/overAdmin" element={<PageViewOverAdmin />} />
          <Route path="/PageUser" element={<DasboharUser />} />
          <Route path="/FormProfileUser" element={<FormPorfileUser />} />
          <Route path="/DataTableBuysUser" element={<Table />} />
          <Route path="/CreateMalls" element={<CreateMalls />} />
          <Route path="/Malls" element={<DataTableMalls />} />
          <Route path="/DiscountCard" element={<PageDiscountAll />} />
          <Route path="/RegistreSales" element={<PageBuy />} />
          <Route path="/Buy/:idP/:price/:amount" element={<Buy />} />
          <Route path="/AllMalls" element={<PageAllMalls />} />
          <Route path="/MyOrders/:code" element={<PageOrders />} />
        </Routes>
      </UseContextShop>
    </>
  )
}

export default App