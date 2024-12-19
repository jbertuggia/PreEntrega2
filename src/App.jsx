import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./components/UI/Error"



function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Pc Lux, su tienda de hardware de confianza"} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenidos a Pc Lux, su tienda de hardware de confianza"} />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
          <Route path="*" element= {<Error/>}/>
          </Routes>


      </BrowserRouter>

    </div>

  )
}

export default App
