import React, { useMemo, useState } from 'react'
import { Alert, Button, Grid } from '@mui/material'
import SimpleCard from '../Component/SimpleCard'
import * as fab from '@fortawesome/free-brands-svg-icons';
import Header2 from '../Component/Header2';

const originaList = Object.values(fab).slice(0, -2);

function Home() {
    // font Awesome icon list
    const [iconArray, setIconArray] = useState(originaList)
    // for alert box of copy
    const [isCopy, setIsCopy] = useState(false);

    // // to filter the iconArray
    const handleFilter = (value) => {
        if (value !== "") {
            const newIconArray = originaList.filter(icon => icon.iconName.toLowerCase().includes(value.toLowerCase()));
            setIconArray(newIconArray)
        } else {
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
            <Grid container spacing={1}>
                {iconArray.map((icon, index) => {
                    return (
                        <Grid item xs={1} key={index} >
                            <Button size='small' variant='text' color='info' style={{ width: "5rem", height: "5rem", }} onClick={() => copyToClipboard(icon.iconName)}>
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
