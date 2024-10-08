import BestSellers from "../BestSellers";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY_INFO } from "../../graphql/queries";
import { Container, Grid, Typography } from "@mui/material";


import React,{ useState} from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

import { GET_CATEGORIES_INFO } from "../../graphql/queries";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation} from 'swiper/modules';


function AllCategoriesPage() {


  const { loading, data, errors } = useQuery(GET_CATEGORIES_INFO);

  const [swiperRef, setSwiperRef] = useState(null);
const { categories } = data;
console.log(categories);
  return (
 
    <Container maxWidth="lg"style={{marginTop:"50px"}}>
        {/* <BestSellers /> */}
        <Grid container  justifyContent="end"   alignItems="center"  style={{background:"#dfdfdf",borderRadius:"10px"}}>

<Grid item xs={12} md={12} py={2} px="10px">
<div style={{  borderRadius: 4 , background:"#dfdfdf"}}>
   <Swiper
   onSwiper={setSwiperRef}
   // slidesPerView={6}
   spaceBetween={3}
   navigation={true}
   modules={[Pagination, Navigation]}
   className="mySwiper"
   breakpoints={{
       // when window width is >= 320px
       320: {
         slidesPerView: 3,
         spaceBetween: 5,
       },
       480: {
           slidesPerView: 4,
           spaceBetween: 5,
         },
       720: {
           slidesPerView: 5,
           spaceBetween: 5,
         },
         1024: {
           slidesPerView: 6,
           spaceBetween: 5,
         },}}
       
   style={{
       "--swiper-navigation-color": "#4e4949",
       "--swiper-navigation-size": "35px",

         
      
     }}>
    <SwiperSlide  style={{ background:"#dfdfdf" , width:"fit-content ", height:"auto" ,}}>
       
   <Grid item  justifyContent="center" alignItems="center">
       <Typography sx={{ fontSize: { xs: '16px', lg: '20px' }, fontWeight: { xs: '400', lg: '500' } }} 
       component="h2"
       color="#303030"
       fontWeight={500}
       align="center"
          >
           دسته بندی ها :
           
       </Typography>
    

       <div style={{ display:"flex", justifyContent:"center"     }}>

      
       </div>
   </Grid>
       </SwiperSlide>
    {  categories.map(category => {
            return <SwiperSlide key={category.slug} style={{borderRadius:"5px" , background:"#dfdfdf"}}>
               <Link
               to={`/categories/${category.slug}`}
               style={{ textDecoration: "none", width: "100%" }}>
               <Grid container justifyContent="center">
                   <img src={category.photo.url}  style={{  objectFit:"fill" , width:"100%", height:"100%" ,maxWidth:"160px" , maxHeight:"160px",marginTop:"10px"}}/>
                  
               <Grid container  justifyContent="start" height="20px" mt={1} >
               <Grid mt="1px">
                 
               </Grid>
              
              
               </Grid>
               <Typography
               component="p"
               fontSize={16}
               color="text.primary"
               fontWeight={500}
               align="center" 
               my="1px"
               >
                 {category.name}
               </Typography>
               
               </Grid>
               </Link>
                   </SwiperSlide>
               } )
           }
 </Swiper>
 </div>

   </Grid>
   

</Grid>
    </Container>
   
  );
}

export default AllCategoriesPage;
