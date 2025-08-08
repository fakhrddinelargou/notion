import { Outlet } from "react-router-dom"

import Section from "../components/Section"
import Header from "../components/Header"
import { NewNote } from "../components/NewNote"


export const HomeLayout = () =>{


    return(
        <div className="flex flex-col gap-2 m items-center justify-center w-[90%] m-auto h-auto min-h-[80vh] p-3    bg-white   ">
            <Header/>
            <NewNote/>
            <div className="flex w-full gap-2">
            <Section/>
           <Outlet/>
            </div>
                
        </div>
    )

}