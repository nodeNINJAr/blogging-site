import { BlogCard } from "../components/BlogCard";
import { fetchBlogs } from "../components/utils";


// 

const Home = async() => {
  const blogs = await fetchBlogs();

// 
  return (
    <>
      <h1 className="text-4xl text-gray-900 text-center uppercase py-10 font-semibold">Our feature blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {
          blogs.slice(0, 8).map(blog=>(
             <BlogCard key={blog?.id} blog={blog}/>
          ))
         }
      </div>
    </>
  );
};

export default Home;
