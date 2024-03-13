import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

export default function Header2({handleFilter}) {
    const [value,setValue]=React.useState("")
    const [isLoginModal,setIsLoginModal]=useState(false)
    const [isSignUpModal,setIsSignUpModal]=useState(false)
    const [isLogin,setIsLogin]=useState(false)

    // seach bar
    const handleChange=(e)=>{
        setValue(e.target.value)
        handleFilter(value)
        console.log(value);
    }

  return (
    <>
        {/* nav bar */}
      <AppBar position="static" style={{background:"#01579b",}}>
        <Toolbar>
            {/* title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Icon Search - Tirth Rathod
          </Typography>

          {/* login button */}
          <Button color="inherit" variant='outlined' style={{margin:"1rem"}} onClick={()=>setIsLoginModal(true)}>Login</Button>
          {/* signup */}
          <Button color="inherit" variant='outlined' onClick={()=>setIsSignUpModal(true)}>SignUp</Button>

          {isSignUpModal && <SignUpModal isSignUpModal={isSignUpModal} setIsSignUpModal={setIsSignUpModal} />}
          {isLoginModal && <LoginModal isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />}
          {/* seach bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={value}
              onChange={handleChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
      </>
  );
}

// styled components for search bar
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
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
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));