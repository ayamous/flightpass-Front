import { Drawer } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Istate } from "../../store"
import DescriptionIndex from "./description"
import Summmary from "./summary"
const DrawerIndex = () => {
    const summaryOpen = useSelector((state: Istate) => state.drarwer.summaryOpen)

    return (
        <div className="rr">
            <Drawer
                open={summaryOpen}
                anchor={"right"}
            >
                <div className="drawer-container">
                    <Summmary/>
                    <DescriptionIndex/>
                    
                </div>
            </Drawer>
        </div>
    )
}
export default DrawerIndex