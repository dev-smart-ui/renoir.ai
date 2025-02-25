"use server";

import {list} from "./posts/posts";
 

const getBlogPosts = () => {
  const postsData = list;
  return postsData.map(({  title, content }, key) => ({
    id:key+1,
    title,
    excerpt: content.slice(0, 100) + "...",
  }));
};

const Blog = async () => {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-[#0D1321] text-primary-foreground py-24 px-6 md:px-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-[#6EF2BE] mb-8">Blog</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="p-6 bg-[#1C1F26] rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#6EF2BE] mb-2">{post.title}</h2>
              <p className="text-gray-300">{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className="text-[#6EF2BE] hover:underline mt-4 inline-block">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;