import { useState } from "react"
import { Add } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import Place from "./Place"
import MapComponent from "../components/Map"

function Home() {

    //create state to open add dialog place 
    const [openAddPlace, setOpenAddPlace] = useState(false)


    return (
        <div style={{ height: "100%", display: 'flex', flexDirection: 'column' }} >
            <AppBar sx={{ height: "10%" }} position="static">
                <Toolbar sx={{ alignItems: "center" }}>
                    <Typography variant="h4">Configuration Manager</Typography>
                    <IconButton sx={{ right: 0, position: "absolute" , background:"#fff"}} onClick={() => setOpenAddPlace(prev => !prev)}>
                        <Add />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div style={{ flexGrow: 1, overflow: 'auto', padding: 2 }}>
                <MapComponent />
            </div>
            <Place openAddPlace={openAddPlace} setOpenAddPlace={setOpenAddPlace} />
        </div>
    )
}

export default Home