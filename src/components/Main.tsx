import { useQuery } from "@tanstack/react-query"
import { CiEdit } from "react-icons/ci";


type FieldData = {
    id : number;
folderName : string;
date : string
}

function Main(){


const {data} = useQuery({

queryKey : ["notions"],

queryFn : ()=> fetch("https://688bce19cd9d22dda5cb5584.mockapi.io/api/v1/notions" ,{
    method : "GET"
}).then((res) => res.json())

})

console.log(data)

    return(
     <div className=" p-2 w-full flex flex-col gap-1 bg-blue-50 rounded-r-2xl border-2 border-blue-100  h-auto min-h-[80vh]   ">
{data && data.map((item : FieldData)=> (

    <div key={item.id} className=" hover:bg-blue-50 border-2 bg-blue-100 border-blue-100 rounded-r-2xl flex items-center gap-9 p-3 text-[1.4rem]">
    <p className="w-[50%]">{item.folderName}</p>
    <p className=" w-[20%] text-center">{item.date}</p>
    <p className="  w-[15%] flex  justify-center text-blue-950 "><CiEdit size={20}/></p>

    <p className="  w-[15%] text-center underline  text-blue-950  ">delete</p>
</div>
))}

     </div>
    )
}


export default Main