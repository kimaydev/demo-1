import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/ProductList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/productlist">
          <Route path="redwine" element={<ProductList />} />
          <Route path="whitewine" element={<ProductList />} />
          <Route index path="*" element={<NotFound />} />
        </Route>
        {/* <Route path="/productlist/:ilist" element={<ProductList />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

// /productlist/redwine -> 화면에 레드와인이라는 글자가 나옴
// /productlist/whitewine -> 화면에 화이트와인이라는 글자가 나옴
// /productlist/djfkljdkfjskldjkf -> Notfound
// /productlist/233r32r2r -> Notfound

// const {pathname} = useLocation();

// if (pathname === 'redwine') {
//   setTitle('레드와인');
// }
