import React,{useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { Grid , Typography,} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GET_PRODUCTS_INFO } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import Loader from "./shared/Loader";
import { discountCalculator } from "../helper/functions";
import discountIcon from "../assets/icons/product-discount.svg"
import discountBox from "../assets/icons/discountBox.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation} from 'swiper/modules';


function SpecialDiscount() {
    const [swiperRef, setSwiperRef] = useState(null);
    const { loading, data, errors } =  useQuery(GET_PRODUCTS_INFO);
    if (loading) return <Loader/>;
    if (errors) return <h4>Error...</h4>;
    
    const highDiscount = data.products.filter((product) => product.discount > 25); 
    

    return ( 
<>
 <Grid container  justifyContent="end"   alignItems="center"  style={{background:"#ef4056",borderRadius:"10px"}}>

     <Grid item xs={12} md={12} py={2} px="10px">
     <div style={{  borderRadius: 4 , background:"#ef4056"}}>
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
            "--swiper-navigation-color": "#a1a1a1",
            "--swiper-navigation-size": "35px",

              
           
          }}>
         <SwiperSlide  style={{ background:"#ef4056" , width:"fit-content ", height:"auto" ,}}>
            
        <Grid item  justifyContent="center" alignItems="center">
            <Typography sx={{ fontSize: { xs: '16px', lg: '20px' }, fontWeight: { xs: '400', lg: '500' } }} 
            component="h2"
            color="#ffffff"
            fontWeight={500}
            align="center"
               >
                تخفیفات 
                
            </Typography>
            <Typography sx={{ fontSize: { xs: '16px', lg: '20px' } , fontWeight: { xs: '400', lg: '500' } }} 
            component="h2"
            color="#ffffff"
            align="center"
            
               >
             شگفت انگیز :
                
            </Typography>
            <div style={{ display:"flex", justifyContent:"center"     }}>

           <img src={discountBox} style={{width:"65%"}}  />
            </div>
        </Grid>
            </SwiperSlide>
         {  highDiscount.map(product => {
                 return <SwiperSlide key={product.slug} style={{borderRadius:"5px"}}>
                    <Link
                    to={`/products/${product.slug}`}
                    style={{ textDecoration: "none", width: "100%" }}>
                    <Grid container justifyContent="center">
                        <img src={product.cover.url}  style={{  objectFit:"fill" , width:"100%", height:"100%" ,maxWidth:"160px" , maxHeight:"160px",marginTop:"10px"}}/>
                        <div >
                    <Grid container  justifyContent="start" height="20px" mt={1} >
                    <Grid mt="2px">
                        <Typography
                        component="p"
                        fontSize={14}
                        color="#747272"
                        textDecoration="line-through"
                        fontWeight={400}
                        mr="5px"
                        
                        style={{ textDecoration:"line-through"}}
                        >
                        { new Intl.NumberFormat('fa-US', {style : "decimal" }).format(product.price)}
                        </Typography>
                    </Grid>
                    <div style={{background:"#cc2d42" ,color:"#ffffff", width:"30px" ,height:"18px",fontSize:"12px" , borderRadius:"50%", textAlign:"center" ,marginTop:"2px" }}>
                    {new Intl.NumberFormat('fa-US', {style : "decimal" }).format(product.discount)}<span style={{fontSize:"10px",marginTop:"80px"}}>%</span><span style={{fontSize:"8px"}}>-</span>
                    </div>
                    </Grid>
                    <Typography
                    component="p"
                    fontSize={16}
                    color="text.primary"
                    fontWeight={500}
                    align="center" 
                    my="5px"
                    >
                    { new Intl.NumberFormat('fa-US', {style : "decimal" }).format(discountCalculator(product.price, product.discount))}  تومان
                    </Typography>
                    </div>
                    </Grid>
                    </Link>
                        </SwiperSlide>
                    } )
                }
      </Swiper>
      </div>

        </Grid>
        
   
    </Grid>
</>
    )


}

export default SpecialDiscount;