import DialogComponent from "../components/DialogMui"
import PlaceForm from "../components/PlaceForm"

interface PlaceProps {
    setOpenAddPlace: React.Dispatch<React.SetStateAction<boolean>>
    openAddPlace: boolean
}

function Place(props:PlaceProps) {
    const {openAddPlace, setOpenAddPlace} = props
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
