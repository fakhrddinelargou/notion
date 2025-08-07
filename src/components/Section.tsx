import { Link, useLocation } from "react-router-dom"

function Section(){

    const location = useLocation()
    const getPath = location.pathname

    const sections = [
        {name : "Notions" , path : "/notions"},
        {name : "Analys" , path : "/Analys"},
        {name : "Options" , path : "/options"}

    ]

    return(
     <div className=" w-[18%]  rounded-l-2xl  h-auto  bg-blue-50 border-3 border-blue-100  ">
        <ul className="text-[1.5rem] flex flex-col  gap-5 p-4">

   {sections.map((item)=> (
       
   <Link  to={item.path}> <li className={` border-2 border-blue-100 hover:bg-blue-100 p-2 rounded-xl ${getPath === item.path ? "bg-blue-100" : ""}`}  key={item.path}>{item.name}</li>   </Link>
))}
</ul>
     </div>
    )
}


export default Section