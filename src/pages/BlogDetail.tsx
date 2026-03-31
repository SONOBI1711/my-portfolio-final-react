import { useParams } from "react-router-dom";
import { getBlogs } from "../utils/blogStorage";

const BlogDetail = () => {
  const { id } = useParams();

  const blogs = getBlogs();
  const blog = blogs.find((b: any) => b.id === Number(id));

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={blog.image} className="w-full h-80 object-cover rounded" />

      <h1 className="text-2xl font-bold mt-4">{blog.title}</h1>

      <p className="text-red-500">{blog.category}</p>

      <p className="mt-4">{blog.content}</p>

      <div className="text-gray-500 mt-3">
        {blog.date} - {blog.author}
      </div>
    </div>
  );
};

export default BlogDetail;
