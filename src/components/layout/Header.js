import * as React from 'react';
import { createContext , useState,useEffect , useRef , useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link , useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider , } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import {  Typography , Button , Grid , Paper  } from "@mui/material";
import logo from "../../assets/icons/Daily Store - logo .png"

import {searchContext} from "../layout/index"
import {setSearchContext} from "../layout/index"


function Header(props) {

  const search = useContext(searchContext);
  const setSearch = useContext(setSearchContext);




  const productsState = useSelector(store => store.cartState)
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
            const mainTheme = createTheme({
                direction: "rtl",
            
            });
            const Img = styled('img') ({
              display: 'block',
              marginLeft: "auto",
              marginRight: "auto",
              
              
            });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box  onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <List  >
        {<>

          <ListItem  disablePadding >
            <Link to="/" style={{textDecoration:"none"}} >

            <ListItemButton>
              <ListItemText >
              <Button sx={{ color: '#2b2a2a' }}>
                         صفحه اصلی 
                        </Button>
                        </ListItemText>
            </ListItemButton>
            </Link>
            

          </ListItem>
          <Divider />
          <ListItem  disablePadding >
            <Link to="/categories" style={{textDecoration:"none"}} >

            <ListItemButton>
              <ListItemText >
              <Button sx={{ color: '#2b2a2a' }}>
                          دسته بندی ها
                        </Button>
                        </ListItemText>
            </ListItemButton>
            </Link>
            

          </ListItem>
          <Divider />
              <ListItem  disablePadding>
              <Link to="/specialDiscountPage" style={{textDecoration:"none"}} >
              <ListItemButton>
              <Button sx={{ color: '#2b2a2a' }}>
                          تخفیف ویژه 
                        </Button>
              </ListItemButton>
              </Link>
              
  
            </ListItem>
            <Divider />
            <ListItem  disablePadding>
              <Link to="/bestSellerPage" style={{textDecoration:"none"}} >
              <ListItemButton>
              <Button sx={{ color: '#2b2a2a' }}>
              محصولات پرفروش

                        </Button>
              </ListItemButton>
              </Link>
              
  
            </ListItem>

            </>
}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 15,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  


  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.addEventListener('keypress', (event) => {
      if (event.key === "Enter") {
        // event.preventDefault();
        document.getElementById("searchBtn").click();
      }
    } );
    return () => {
      myRef.current.removeEventListener('click', handleClick);
    };
  }, []);

const handleClick = (event) => {
  console.log('Clickeeeeeeeeeeeeed!');
};

const navigate = useNavigate();

  return ( <>


                <AppBar component="nav"   sx={{ display: "contents"}} style={{ background: '#ffffff' 
                 }}>
                  <Toolbar style={{ background: '#ffffff' ,
                  textAlign:"center" , borderBottom:"1px solid transparent" ,
                  borderImage: "linear-gradient(0.25turn, #fdc81b52, #ff3c00e7, #838383ff)",
                 borderImageSlice : "1",
                 width:"92%"
                 }}>
    <Grid container justifyContent="space-between" alignItems="center" >

        <Grid item  display="flex"  alignItems="center"  >
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ display: { sm: 'none' } }}
                    >
                      <MenuIcon sx={{ color: "#2b2b2b"}}  />
                    </IconButton>
                    <Typography
                      variant="h6"
                      component="div"
                >   
                
                        
        <Link to="/" style={{textDecoration:"none"}}>
          <Img  src={logo}  alt="Daily Store"   
          sx={{
                      width: { xs: '60px',lg:"95px" ,xl: '120px' },
                      paddingRight: { xs: '0', lg: '30px' },
                    }}  />
        </Link>
          </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <Button sx={{ color: '#2b2a2a' }} onClick={() => setSearch("")}>
                          صفحه اصلی
                        </Button>
                    </Link>
                    <Link to="/categories" style={{textDecoration:"none"}}>
                        <Button sx={{ color: '#2b2a2a' }} onClick={() => setSearch("")}>
                          دسته بندی ها
                        </Button>
                    </Link>
                    <Link to="/specialDiscountPage" style={{textDecoration:"none"}}>

                        <Button sx={{ color: '#2b2a2a' }} onClick={() => setSearch("")}>
                        تخفیف ویژه
                        </Button>
                        </Link>
                        <Link to="/bestSellerPage" style={{textDecoration:"none"}} >
                        <Button sx={{ color: '#2b2a2a' }} onClick={() => setSearch("")}>
                          پرفروش ترین ها
                        </Button>
                        </Link>
                      
                    </Box>









<Paper  style={{background:"#eeeaea" , maxHeight:"37px" , marginRight:"10px"}}
      component="form"
      sx={{  display: 'flex', alignItems: 'center' }}
    >
     
      <InputBase
        sx={{ ml:2 , flex: 1 , width:{xs:'110px' , lg: '230px'}}}
        // id="myInput"
        ref={myRef}
        type="text"
        value={search}
        onChange={ e => {
          e.preventDefault()
          setSearch(e.target.value) }}
        placeholder="جستجو ..."
        inputProps={{ 'aria-label': 'search' }}
      />


</Paper>

                  
        </Grid>

        <Grid item display="flex"   >
                    <Link to="/signup" style={{ color:"#4e4e4e"}}>
                              <PersonIcon  sx={{ fontSize: 38 }} />
                              
                          </Link>
                        

                          <div style={{ position: "relative"}}>
                              <Link to="/cart" style={{ color:"#494747"}}>
                                  <ShoppingCartIcon  sx={{ fontSize: 38 }} />
                                  {(productsState.itemsCounter)>0  && 
                                  <span style={{
                                      position: "absolute",
                                      top: "0",
                                      right: "0",
                                      backgroundColor: "#04adfc",
                                      borderRadius: "50%",
                                      width: "18px",
                                      height: "18px",
                                      lineHeight: "18px",
                                      fontSize: "0.80rem",
                                      textAlign: "center",
                                      fontWeight: "bold",
                                      color: "#fff",
                                  }}>{productsState.itemsCounter}</span>}
                              </Link>
                          </div>
        </Grid>
        </Grid>
                  </Toolbar>
                </AppBar>
<nav>

<ThemeProvider theme={mainTheme} >
  <Drawer

    anchor="left"
    container={container}
    variant="temporary"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
    sx={{
      display: { xs: 'block', sm: 'none' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '200' },
      
    }}>

    {drawer}
  </Drawer>
</ThemeProvider >
</nav>
    
    </>
  );
}

export default Header;


