import { Outlet } from "react-router-dom"
import Header from "../components/Header"





export const PageLayout = ()=>{

    return(
        <div className="w-screen flex flex-col  min-h-[100vh]   ">
            <Header/>
                <Outlet/>
            
        </div>
    )

}