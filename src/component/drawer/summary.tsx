import { IconButton } from "@mui/material"
import { IoIosArrowBack, IoMdClose } from "react-icons/io"
import { IoCloseSharp } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { Istate } from "../../store"
import { drawerActions } from "../../store/drawer"

const Summmary = () => {
    const dispatch = useDispatch()
    const summaryOpen = useSelector((state: Istate) => state.drarwer.summaryOpen)
    const closeDrawer = () => {
        dispatch(drawerActions.setSummaryOpen(false))
    }
    const openDescription = () => {
        dispatch(drawerActions.setDescriptionOpen(true))
    }
    return (
        <div className="drawer-summary">
            <IconButton onClick={closeDrawer} className='close' aria-label="close">
                <IoCloseSharp/>
            </IconButton>
            <ul>
                <li onClick={openDescription}>
                    Comment ça fonctionne ?
                </li>
                <li>
                    FAQ
                </li>
                <li>
                    Nos Conditions
                </li>
                <li>
                    Responsabilité
                </li>
            </ul>
        </div>
    )
}
export default Summmary