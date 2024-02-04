import React,{ useState,useEffect } from "react";

import { NavBar } from './components/NavBar'
import {Footer} from './components/Footer'
import {Skeleton} from './components/loding'


import { Home } from './pages/01Home'
import {Login} from './pages/06Login'
import {SignUp} from './pages/05Sginup'
import {About} from './pages/03About'
import {Contact} from './pages/04Contact'
import {Blogs} from './pages/02Blogs'
import {ErrorPage} from './pages/00Error'

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Post from "./components/[Post]";



const Layout=()=>{
  return (<>
  
  <NavBar/>
  <Outlet/>
  <Footer/>
  
  </>)
}



const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    errorElement:<ErrorPage/>,
   
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/post/:postId",
        element:<Post/>
      },
    ],
    
  },
]);


function App() {
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {

      setTimeout(() => { 
        setIsLoding(false);
      },2000);    
   
  }, []);
 
 


  return (    
         <>
        <div className="app relative bg-slate-900">
         
           {isLoding?(<Skeleton/>):(
          <div className="container mx-auto bg-slate-900 p-2 ">
          <RouterProvider router={router}/>
          </div>
           )}
        </div>
          
    </>
  )
}


export default App
