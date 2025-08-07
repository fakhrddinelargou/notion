import { Outlet } from "react-router-dom"

import Section from "../components/Section"
import Header from "../components/Header"


export const HomeLayout = () =>{


    return(
        <div className="flex gap-3 w-[90%] m-auto h-auto min-h-[80vh] p-3   bg-white   ">
            <Header/>
            <Section/>
           <Outlet/>
        </div>
    )

}