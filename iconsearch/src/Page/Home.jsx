import React, { useState } from 'react'
import { Alert, Button, Grid } from '@mui/material'
import SimpleCard from '../Component/SimpleCard'
import * as fab from '@fortawesome/free-brands-svg-icons';
import Header2 from '../Component/Header2';

function Home() {
    const originaList=Object.values(fab).slice(0,200);
    // font Awesome icon list
    const [iconArray,setIconArray] = useState(originaList)
    // for alert box of copy
    const [isCopy,setIsCopy]=useState(false);

    // to filter the iconArray
    const handleFilter=(value)=>{
        console.log(value);
        if (value !== ""){
            const newIconArray=iconArray.filter(icon => icon.iconName.toLowerCase().includes(value.toLowerCase()));
            setIconArray(newIconArray)
            console.log(value);
        } else{
            setIconArray(originaList)
        }
    }

    // copies to clipboard
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        setIsCopy(true)
      };

  return (
    <div>
        {/* header */}
        <Header2 handleFilter={handleFilter} />
        {/* alert */}
        {isCopy && <Alert severity="success">Font Copied.</Alert>}
        {/* font card */}
        <Grid container spacing={2}>
            {iconArray.map((icon,index) => {
                return(
                    <Grid item sm={2} key={index} >
                        <Button size='small' variant='outlined' style={{width:"10rem", color:"black", borderColor:"black"}} onClick={()=>copyToClipboard(icon.iconName)}>
                            <SimpleCard icon={icon} />
                        </Button>
                    </Grid>
                )
            })}
        </Grid>

    </div>
  )
}

export default Home
