import React from "react";

export const Skeleton = () => {
  return (<>
  
  <div className=" container mx-auto flex flex-col m-8 rounded shadow-md w-full h-[90vh]  animate-pulse ">
	<div className="h-48 rounded-t dark:bg-gray-700"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
		<div className="w-full h-6 rounded dark:bg-gray-700"></div>
		<div className="w-full h-6 rounded dark:bg-gray-700"></div>
		<div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
	</div>
</div>
  
  </>);
};

 