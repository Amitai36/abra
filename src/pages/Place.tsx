import DialogComponent from "../components/DialogMui"
import PlaceForm from "../components/PlaceForm"

interface PlaceProps {
    setOpenAddPlace: React.Dispatch<React.SetStateAction<boolean>>
    openAddPlace: boolean
}
//place component and open dialog here
function Place(props:PlaceProps) {
    const {openAddPlace, setOpenAddPlace} = props
    return (
            <DialogComponent setOpen={setOpenAddPlace} content={
                <PlaceForm />
            } open={openAddPlace} title={{ text: "Add a place", color: "info" }}  >
            </DialogComponent>
    )
}

export default Place
