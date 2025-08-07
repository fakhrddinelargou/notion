import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { PageLayout } from "../Auth/PageLayout"

import { HomePage } from "../components/Home"
import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { HomeLayout } from "../Auth/HomeLayout"
import Main from "../components/Main"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"




const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        
        element: <Main />,
        index : true
      },
         {
        
        path : "notions",     
        element: <Main />,
      },
    ],
  },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "home",
        element: <HomePage />, 
      },
    ],
  },
 
]);

function Router(){


  const queryClient = new QueryClient()

    return(
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router}/>
     </QueryClientProvider>
    )
}


export default Router