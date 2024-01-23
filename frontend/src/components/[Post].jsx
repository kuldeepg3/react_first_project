import React from "react";
import dataSet from '../assets/post.json'
import image from "../assets/imageLogo.jpg"
import { useParams,Link } from "react-router-dom";


function Post() {
  let data =dataSet.blogs;
  const postId=useParams();
  console.log(postId);
  
  return(
<div className="container max-w-screen-md mx-auto">
<h1 className="text-center text-slate-100  font-bold text-2xl mt-4 mb-6">{data[`${postId.postId-1}`].title}</h1>
<section className="image my-2"><img src={image} className="w-full h-64"  alt="" /></section>
<section className="blog_content bg-slate-300 p-4"> 
<article className="max-w-lg m-auto text-balance ">
{/* <article className="max-w-lg m-auto line-clamp-4"> */}

<div className="post_header my-3 text-slate-950 font-semibold text-xl"><h2>{data[`${postId.postId-1}`].title}</h2></div>
    <div className="para p-2 "><p>{data[`${postId.postId}`].content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci repellat natus saepe ipsa eaque, dolore, error rem eos repudiandae officia! Ipsum temporibus eaque quo laudantium vel distinctio repellat quam, provident odio voluptates sapiente ea molestias, voluptatibus iure ad iste? In dolorem nesciunt eos numquam fuga? Dignissimos at esse ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga laudantium minus aspernatur quam tenetur quia non sit ipsa quibusdam voluptatum aut et at doloribus accusantium modi debitis, beatae earum quaerat! Ipsa maiores reiciendis culpa excepturi ut fugiat blanditiis velit esse perferendis in minus tempora, doloremque natus accusamus, ab modi?</p></div>

</article>

</section>
<section>
  <div className="flex justify-end"><span><Link to={'/'} className="text-white font-semibold">➡️Back To Home</Link></span></div>
</section>
</div>
  );
}

export default Post;
