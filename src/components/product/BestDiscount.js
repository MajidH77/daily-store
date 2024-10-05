import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { GET_PRODUCTS_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

 function  BestDiscount()  { 
  


  const { loading, data, errors } =  useQuery(GET_PRODUCTS_INFO);
  
  if (loading) return <Loader/>;
  if (errors) return <h4>Error...</h4>;

  
  const highDiscount = data.products.filter((product) => product.discount > 25); 


  return (
    
     
      <Grid container spacing={2}>
        {highDiscount.map((product) => (
          <Grid item xs={6} sm={4} md={4} key={product.id}>
            <CardEL {...product} />
          </Grid>
        ))}
      </Grid>
  
     
    
  );
}

export default BestDiscount;