import { useEffect, useState } from "react";
import { getBlogs, saveBlogs } from "../utils/blogStorage";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  const handleDelete = (id: number) => {
    const updated = blogs.filter((b) => b.id !== id);
    saveBlogs(updated);
    setBlogs(updated);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {blogs.map((blog) => (
        <div key={blog.id} className="border-b pb-6">
          <img src={blog.image} className="w-full h-64 object-cover rounded" />

          <h2 className="text-xl font-bold mt-4">{blog.title}</h2>
          <p className="text-red-500 text-xs">{blog.category}</p>

          <p className="mt-2 text-gray-600">{blog.content}</p>

          <div className="text-sm text-gray-500 mt-2">
            {blog.date} - {blog.author}
          </div>

          <div className="flex gap-4 mt-2">
            <Link to={`/blog/${blog.id}`} className="text-blue-500">
              Read more
            </Link>

            <button
              onClick={() => handleDelete(blog.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
