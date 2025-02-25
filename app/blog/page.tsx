"use client";

import { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1321] text-primary-foreground py-10 px-6 md:px-20">
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

// API для заглушки статей
export async function GET() {
  return Response.json([
    {
      id: "1",
      title: "The Future of AI in Sales",
      excerpt: "Exploring how AI is transforming revenue generation and sales strategies."
    },
    {
      id: "2",
      title: "Why CRO Matters More Than Ever",
      excerpt: "Understanding the role of conversion rate optimization in business growth."
    },
    {
      id: "3",
      title: "Leveraging Data for Smarter Decisions",
      excerpt: "How data analytics can drive better sales and marketing outcomes."
    }
  ]);
}
