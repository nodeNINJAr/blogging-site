import { BlogCard } from "@/app/components/BlogCard";
import { fetchBlogs } from "@/app/components/utils";
import React from "react";

const Blogs = async () => {
  const blogs = await fetchBlogs();
  return (
    <>
      <h1 className="text-4xl text-gray-900 text-center uppercase py-10 font-semibold">
        Here is our all blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
