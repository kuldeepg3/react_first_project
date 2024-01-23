import React from "react";
import dataSet from '../assets/post.json'
import {GridCard} from "../components/01React_grid";
export const Blogs = () => {


  let data =dataSet.blogs;
let list = data.map((item)=>{
  return ( <GridCard data={item}/> )
})


  return (<>
  <div className="container mx-auto mt-12 ">
   <h1 className="text-center text-stone-50 font-semibold lg:text-2xl ">Blogs</h1>
   <p className="text-center text-stone-50 font-medium opacity-75 lg:text-md ">some thoughts that may change your life and knowledge </p>

<div className=" md:grid  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
{list}
</div>

  
</div>
  
    </>);
};
