import React, { useMemo, useState, useTransition } from 'react'
import { Alert, Button, CircularProgress, Grid } from '@mui/material'
import SimpleCard from '../Component/SimpleCard'
import * as fab from '@fortawesome/free-brands-svg-icons';
import Header2 from '../Component/Header2';

const originaList = Object.values(fab).slice(0, -2);

function Home() {
    // font Awesome icon list
    const [iconArray, setIconArray] = useState(originaList)
    // for alert box of copy
    const [isCopy, setIsCopy] = useState(false);

    const [isPending, startTransition] = useTransition()

    // to filter the iconArray
    const handleFilter = (value) => {
        startTransition(() => {
            if (value !== "") {
                const newIconArray = originaList.filter(icon => icon.iconName.toLowerCase().includes(value.toLowerCase()));
                setIconArray(newIconArray)
            } else {
                setIconArray(originaList)
            }
        })
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
            {isPending ? (
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item>
                        <CircularProgress />
                    </Grid>
                </Grid>
            ) : (
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
            )}

        </div>
    )
}

export default Home
