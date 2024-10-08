

import React from "react";
import BestSellers from "../BestSellers";
import { Container, Grid, Typography } from "@mui/material";
import Categories from "../category/Categories";
import BestDiscount from "./BestDiscount";

function SpecialDiscountPage() {

    
  
  return (
    <Container maxWidth="lg" >
       
      <Grid container spacing={6} padding={1} pb={5} >
          <Grid item xs={12} md={3} mt={1} pr={2} paddingRight={2}>
                  

                      <Typography component="h3" variant="h5"  mt={10} mb={3} fontWeight={700}>
                        دسته بندی ها
                      </Typography>
                        
                      
                      < Categories />
            </Grid>
            <Grid item xs={12} md={8} mt={4}>
              {" "}
            

              <Typography component="h3" variant="h5" mt={3} mb={3} fontWeight={700}>
                  تخفیفات ویژه
              </Typography>
                {/* </Link> */}
              <BestDiscount />
            </Grid>
      </Grid>
      <BestSellers />
    </Container>
  );
}

export default SpecialDiscountPage;
