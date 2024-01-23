import React from "react";
import dataSet from '../assets/post.json'
import img12 from '../assets/lo.jpg';
import img34 from '../assets/myimg.jpeg';
import { Link } from "react-router-dom";
import { GridCard } from "../components/01React_grid";

export const Home = () => {

  
  let data =dataSet.blogs;
  
  
  return (<>
  
  <section className="dark:bg-gray-950 dark:text-gray-100 p-6">
	
	<div className=" flex items-center justify-center gap-2 ">

		<div className="flex flex-col justify-center item-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className=" text-2xl  font-bold md:text-4xl  ">Wonderful Learning
				<span className="dark:text-violet-400 "> Codex</span> Learning
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
			</p>


			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link rel="noopener noreferrer" to="/blogs" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 animate-pulse ">Explore</Link>
				<Link rel="noopener noreferrer" to="/signup" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 animate-bounce hover:bg-violet-400  transition-all ease-linear hover:text-gray-950">Sign up</Link>
			</div>

		</div>


		<div className=" sm: hidden md:flex lg:mx-12 h-50  items-center   bg-slate-400 rounded-md  p-4">
			<img src={img34} alt=" image" className="object-contain rounded-md translate-x-8 translate-y-6 lg:h-80 xl:h-80 2xl:h-96" />
		</div>
	</div>
</section>
  
 
  <section className="f-blogs p-2 my-4 cursor-pointer">
    <h2 className="text-2xl text-center font-mono font-semibold text-white">Featuerd Blogs</h2>
    <div className="container grid xl:grid-cols-5 m-auto lg:grid-cols-4 md:grid-cols-3 lg:gap-4">
      
   <GridCard data={data[0]} />
    <GridCard data={data[1]} />
    <GridCard data={data[2]} />
    <GridCard data={data[3]} />
    <GridCard data={data[4]} />
    <GridCard data={data[5]} />
   </div>
   <span className="ml-auto text-white font-semibold"><Link to='/blogs'>view all</Link></span>
  </section>
  
  
  </>)
};
