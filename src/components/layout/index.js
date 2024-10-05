import React , {useState , createContext , useEffect} from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_INFO } from "../../graphql/queries";
import { useNavigate } from "react-router-dom";

export const ProductsContext = createContext();
export const setSearchContext = createContext();
export const searchContext = createContext();

function Layout({ children }) {
  

  const { loading, data, errors } =  useQuery(GET_PRODUCTS_INFO);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();



  useEffect( () => {
    if (search) {  navigate("/") }
  },[search])

  return (
    <>
       <ProductsContext.Provider value={data}>
          <setSearchContext.Provider value={setSearch}>
              <searchContext.Provider value={search}>

                 <Header />
                   {children}
                  <Footer />

                  </searchContext.Provider>
           </setSearchContext.Provider>
           </ProductsContext.Provider>
    </>
  );
}

export default Layout;
