import { useState } from "react"
import DialogComponent from "../components/DialogMui"
import PlaceForm from "../components/PlaceForm"

function Place() {
    const [openAddPlace, setOpenAddPlace] = useState(true)
    return (
        <div>
            <DialogComponent setOpen={setOpenAddPlace} content={
                <PlaceForm />
            } open={openAddPlace} title={{ text: "Add a place", color: "info" }}  >
            </DialogComponent>

        </div>
    )
}

export default Place
