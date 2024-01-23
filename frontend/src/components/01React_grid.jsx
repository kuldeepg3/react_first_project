import React from "react";
import image from "../assets/imageLogo.jpg"
import { Link } from "react-router-dom";

export function GridCard(props){
    return (<>
    <Link to={`/post/${props.data.id}`}> <div className=" grid grid-cols-3  p-2 m-2 bg-gray-950 border-2  rounded-md text-gray-100 text-wrap hover:scale-up-and-fade md:grid-cols-1 md:w-[240px]"  id={props.data.id}>
     {/* <h1 className=" font-bold text-md m-auto">card</h1>  */}
     <div className=" col-span-1   ">
        <img className="w-[100px]  md:w-[250px] md:gap-2 m-auto" src={image} alt="LOGO"  />
        </div> 
        <div className=" col-span-2  mx-2">
            <h1 className="font-bold text-sm opacity-85 ">{props.data.title}</h1>
            <p className="hidden sm:block   opacity-75">{props.data.content.substring(0,50)}....</p>
        </div>
    </div>
    </Link>
    </>)
   
}



  

const React_grid = () => {
  return (<>
  
  <div className="grid bg-slate-700    max-w-[95vw] mx-auto" >
  <h1 className=" font-bold text-md">Grid</h1>
   
   <div className="container p-3 flex flex-auto flex-wrap items-center mx-auto  justify-center

">

 
    <GridCard />
    <GridCard/>   
    <GridCard/>
    <GridCard/>     
    <GridCard/>
    <GridCard/>
    
   </div>


  </div>
  
  </>);
};

export default React_grid;
