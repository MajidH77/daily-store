import React, { useEffect , useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { GET_PRODUCTS_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";
import { shorten } from "../../helper/functions";
// import {searchContext} from "../layout/Header";
// import {setSearchContext} from "../layout/Header"

 function  Products()  { 
      
      // const searched = useContext(searchContext);
      // const setSearch = useContext(setSearchContext);

      const { loading, data, errors } =  useQuery(GET_PRODUCTS_INFO);
      const [products, setProducts] = useState([]);
   
     
//       useEffect(  () => {
//           setProducts(data)
//         console.log(products);
//       },[data])
// console.log(products);
        const searchedProduct = data
      // console.log(searchedProduct);
      // useEffect(() => {
      //   if (searched){
      //     setSearch("")
      //   }
      // },[])
      
      if (loading) return <Loader/>;
      if (errors) return <h4>Error...</h4>;
  return (
  <>
    
        {/* { (!!searched) ? 
              <Grid container spacing={2}>
              {searchedProduct.map((product) => (
                <Grid item xs={6} sm={4} md={4} key={product.id}>
                  <CardEL {...product} />
                </Grid>
              ))}
            </Grid>

             :

             <Grid container spacing={2}>
             {data.products.map((product) => (
               <Grid item xs={6} sm={4} md={4} key={product.id}>
                 <CardEL {...product} />
               </Grid>
             ))}
           </Grid>

         }  */}
        
        <Grid
          id="myheadline"
        container spacing={2}>
             {data.products.map((product) => (
               <Grid item xs={6} sm={4} md={4} key={product.id}>
                 <CardEL {...product} />
               </Grid>
             ))}
           </Grid>
    
        </>
  );
}

export default Products;