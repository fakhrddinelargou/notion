import { Outlet } from "react-router-dom"

import Section from "../components/Section"
import Header from "../components/Header"


export const HomeLayout = () =>{


    return(
        <div className="flex ">
            <Header/>
            <Section/>
           <Outlet/>
        </div>
    )

}