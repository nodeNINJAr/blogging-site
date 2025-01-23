"use client";

import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [id, setId] = useState(null);
  const [blogDetails, setblogDetails] = useState("");

  useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    unwrapParams();
  }, [params]);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (id) {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
          const data = await response.json();
          setblogDetails(data);
        } catch (error) {
          // console.error("Error fetching blogs:", error);
        }
      }
    };
    fetchBlogs();
  }, [id]); 

  if (!blogDetails) {
    return <div className="text-center pt-20">Loading...</div>;
  }

  return (
    <div className="text-center py-20">
      <div>
        <strong>ID:</strong> {blogDetails?.id}
      </div>
      <div>
        <strong>User ID:</strong> {blogDetails?.userId}
      </div>
      <h1>{blogDetails?.title}</h1>
      <p>{blogDetails?.body}</p>
    </div>
  );
};

export default Page;
