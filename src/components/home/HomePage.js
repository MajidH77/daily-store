import React, { useEffect , useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container,Grid, Typography } from "@mui/material";
import Categories from "../category/Categories";
import BestSellers from "../../components/BestSellers";
import SpecialDiscount from "../../components/SpecialDiscount";
import Products from "../product/Products";
// import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';

import html from "../../assets/icons/html.png"
import CardEL from "../shared/CardEL";

import { shorten } from "../../helper/functions";
import {setSearchContext} from "../layout/index"
import {setSearchedContext} from "../layout/index"
import {searchContext} from "../layout/index"
import {searchedContext} from "../layout/index"
import { GET_PRODUCTS_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Pagination, Navigation , Autoplay} from 'swiper/modules';



function HomePage() {

  const { loading, data, errors } =  useQuery(GET_PRODUCTS_INFO);
  const search = useContext(searchContext);
  // const searched = useContext(searchedContext);
  // const setSearched = useContext(setSearchedContext);


  const [searched , setSearched]= useState([])

// if (data.products){
//   const searchedProduct = data.products.filter(product => shorten(product.name).toLowerCase().includes(search.toLowerCase()))
// }
  useEffect( () => {
          const searchedProduct = async  () => {
              if (search.length > 0 && data.products ){
              setSearched( await data.products.filter(product => shorten(product.name).toLowerCase().includes(search.toLowerCase())) )
              }
            }
            searchedProduct();

        },[search])


console.log(searched);
  
  return (
    <>
     {
     
     (search && search.length>0) ? 
     <Grid container justifyContent="center" alignItems="center" mt={3} spacing={2}>
          { (searched.length>0) ?    
                searched.map((product) => (
                    <Grid item xs={6} sm={4} md={2} key={product.id}>
                      <CardEL {...product} />
                    </Grid>
                  ))
                :
                <Typography color="#4c4d4e" component="h3" variant="h5" mt={3} ml={5} mb={2} fontWeight={700}>
                  کالای مورد نظر یافت نشد !
                </Typography>
          }
        

       </Grid>
     
     
     :
     
     <>
      <div style={{width:"100%", height:"100%",}}>
      <Grid  item xs={12} style={{width:"100%"}}   >
         <Swiper  

            style={{
                      "--swiper-navigation-color": "#2e2e2e",
                      "--swiper-navigation-size": "25px",
                      "--swiper-pagination-color": "#2e2e2e",
                      "--swiper-pagination-size": "60px",
                      "--swiper-pagination-bullet-horizontal-gap": "1%",
                      
                    }}
                  slidesPerView={1}
                  spaceBetween={10}
                  loop={true}
                  pagination={{
                    clickable: true,  
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  modules={[Autoplay,Pagination, Navigation]}
                  className="mySwiper"
                >
                  {/* <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3fc345de534d82494a65ff068f730d2fea98732d_1707557025.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s1"/></SwiperSlide> */}
                  {/* <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1772946ee187760c44ae02400883e4ef73de7a58_1703928825.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s1"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/bf95f7021be3de8865b649b3f7141626140de1a6_1704551586.gif?x-oss-process=image?x-oss-process=image/format,webp" alt="s2"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/84c468be610718ad77212f2aa383f96eb83a2861_1704272302.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s3"/></SwiperSlide>
                  <SwiperSlide><img src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/b4a8ae656b7d886032838b8efa753c8789f3ff7d_1703937789.jpg?x-oss-process=image/quality,q_95/format,webp"} alt="s4"/></SwiperSlide>
                  <SwiperSlide><Link
                  to="/products/apple-vision-pro" > <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c8f4e098d31f979b874477333e212b8e3842eb53_1707557025.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s5"/> </Link></SwiperSlide>
                <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/e10289fba66071d82f4de4a1a6ccac086adc0648_1704290761.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s6"/></SwiperSlide> */}
                
                
                
                
                  <SwiperSlide><img 
                  sizes="50vw"
                  srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/17a5eee7f0f3c8e07276b0dd3ba4f076f99143fa_1707300295.jpg?x-oss-process=image/quality,q_95 380w , https://dkstatics-public.digikala.com/digikala-adservice-banners/db2c0b4c50ff9d788b338fb4657893bd1a786cd0_1707300295.jpg?x-oss-process=image/quality,q_95 1480w"
                  alt="skieslect"/>
                  </SwiperSlide>

                <SwiperSlide><img 
                sizes="50vw"
                srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/99213d08c769fccbd81e352e055d31f32782d98a_1707911856.jpg?x-oss-process=image/quality,q_95/format,webp 380w ,https://dkstatics-public.digikala.com/digikala-adservice-banners/2fdc22b240c7339749bd0dbd6384317dd725d4fb_1707911856.jpg?x-oss-process=image/quality,q_95/format,webp 1480w"
                alt="areuok"/></SwiperSlide>

                  <SwiperSlide><img 
                  sizes="50vw"
                  srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/7245ccdab120e9a252bcb9243f038fdb57c20a33_1708104012.jpg?x-oss-process=image/quality,q_95/format,webp 380w ,https://dkstatics-public.digikala.com/digikala-adservice-banners/6f25dcbdab9e5cefc40745e652fdd4823ebfe293_1708104012.jpg?x-oss-process=image/quality,q_95/format,webp 1480w"
                  alt="organizer"/></SwiperSlide>
                  
                  <SwiperSlide><img 
                  sizes="50vw"
                  srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/d340200d386bf11dbd3e8a26610d042f0fd90931_1707713130.jpg?x-oss-process=image/quality,q_95/format,webp 380w ,https://dkstatics-public.digikala.com/digikala-adservice-banners/6450f9955c71b3e85fc180f5c9024efa3fd5dee4_1707713130.jpg?x-oss-process=image/quality,q_95/format,webp 1480w"
                  alt="ikea"/></SwiperSlide>
                 
                  <SwiperSlide><img 
                  sizes="50vw"
                  srcSet="https://dkstatics-public.digikala.com/digikala-adservice-banners/72ca9fc45e36524b9e8b839399f32471b2c5025b_1707813456.jpg?x-oss-process=image/quality,q_95/format,webp 380w ,https://dkstatics-public.digikala.com/digikala-adservice-banners/ea59b678bf1878c5b141112a8d1cb57075abfdd8_1707813456.jpg?x-oss-process=image/quality,q_95/format,webp 1480w" 
                  alt="electronics"/></SwiperSlide>


              
       
      
      </Swiper>
     </Grid>
   
   </div>
    <Container maxWidth="lg"  >
      {/* <div style={{marginTop:"10px"}}>
    <BestSellers  />
      </div> */}
      <div style={{marginTop:"10px"}}>
    <SpecialDiscount  />
  
      </div>

      <Grid container spacing={2} padding={1} >
     
                <Grid item xs={12} md={3} mt={1} pr={2} paddingRight={2}>
                {/* <Link 
                    to={`/categories/${category.slug}`} style={{textDecoration:"none" , color:"#000000"}}> */}

                  <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                    دسته بندی ها
                  </Typography>
                    
                  
                  < Categories />
                </Grid>
               
        <Grid item xs={12} md={8} mt={4}>

          <Products />
        </Grid>
      </Grid>
    <BestSellers />
    </Container>
     </>
     
    
     
     }
   
</>
  );
}

export default HomePage;


// kieslect
// https://dkstatics-public.digikala.com/digikala-adservice-banners/17a5eee7f0f3c8e07276b0dd3ba4f076f99143fa_1707300295.jpg?x-oss-process=image/quality,q_95/format,webp
// https://dkstatics-public.digikala.com/digikala-adservice-banners/db2c0b4c50ff9d788b338fb4657893bd1a786cd0_1707300295.jpg?x-oss-process=image/quality,q_95/format,webp

// ikea
// https://dkstatics-public.digikala.com/digikala-adservice-banners/d340200d386bf11dbd3e8a26610d042f0fd90931_1707713130.jpg?x-oss-process=image/quality,q_95/format,webp
// https://dkstatics-public.digikala.com/digikala-adservice-banners/6450f9955c71b3e85fc180f5c9024efa3fd5dee4_1707713130.jpg?x-oss-process=image/quality,q_95/format,webp

// samsung
// https://dkstatics-public.digikala.com/digikala-adservice-banners/22eaceb180b26d8ede7e7f42e82e702f2cb3e2e9_1707898267.jpg?x-oss-process=image/quality,q_95/format,webp



// bestsellers tecnolgy
// https://dkstatics-public.digikala.com/digikala-adservice-banners/72ca9fc45e36524b9e8b839399f32471b2c5025b_1707813456.jpg?x-oss-process=image/quality,q_95/format,webp
// https://dkstatics-public.digikala.com/digikala-adservice-banners/ea59b678bf1878c5b141112a8d1cb57075abfdd8_1707813456.jpg?x-oss-process=image/quality,q_95/format,webp



// organizer
// https://dkstatics-public.digikala.com/digikala-adservice-banners/7245ccdab120e9a252bcb9243f038fdb57c20a33_1708104012.jpg?x-oss-process=image/quality,q_95/format,webp
// https://dkstatics-public.digikala.com/digikala-adservice-banners/6f25dcbdab9e5cefc40745e652fdd4823ebfe293_1708104012.jpg?x-oss-process=image/quality,q_95/format,webp

// // areuok
// https://dkstatics-public.digikala.com/digikala-adservice-banners/99213d08c769fccbd81e352e055d31f32782d98a_1707911856.jpg?x-oss-process=image/quality,q_95/format,webp
// https://dkstatics-public.digikala.com/digikala-adservice-banners/2fdc22b240c7339749bd0dbd6384317dd725d4fb_1707911856.jpg?x-oss-process=image/quality,q_95/format,webp