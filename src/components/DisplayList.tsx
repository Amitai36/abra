import { List, ListItem, Paper, Typography } from "@mui/material"

import { Place } from "../api/types"

interface DisplayListProps {
    items: Place[],
    setDisplayAddress: React.Dispatch<React.SetStateAction<string>>
}

function DisplayList(props: DisplayListProps) {
    const { items, setDisplayAddress } = props
    return (
        <Paper sx={{backgroundColor:"#fff", height:"100%", overflow:"scroll"}} >
            <Typography>Dislpay list</Typography>
            <List >
                {items.map((item) => <ListItem sx={{border:"5px gray  solid",cursor:"pointer"}} onClick={()=>setDisplayAddress(item.Address)} key={item.Address}>{item.Address}</ListItem>)}
            </List>
        </Paper>
    )
}

export default DisplayList
