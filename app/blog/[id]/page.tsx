"use server";

import { list } from "../posts/posts";

 

const BlogPost = async ({ params }:{params:any}) => {
  const post = list[params.id-1];

  if (!post) {
    return <h1 className="text-center text-2xl text-red-500">Post not found</h1>;
  }

  return (
    <div className="min-h-screen bg-[#0D1321] text-primary-foreground py-24 px-6 md:px-20">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-[#6EF2BE] mb-6">{post.title}</h1>
        <p className="text-gray-300 leading-relaxed">{post.content}</p>
   
    
          { post?.html&& <div dangerouslySetInnerHTML={{__html:post?.html}}/>}
         <a href="/blog" className="text-[#6EF2BE] hover:underline mt-6 block">← Back to Blog</a>
         </div>
    </div>
  );
};

export default BlogPost;
