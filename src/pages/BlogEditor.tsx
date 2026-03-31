import { useState } from "react";
import { getBlogs, saveBlogs } from "../utils/blogStorage";
import { useNavigate } from "react-router-dom";

export default function BlogEditor() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    author: "",
    avatar: "",
    date: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const blogs = getBlogs();

    const newBlog = {
      id: Date.now(),
      ...form,
    };

    saveBlogs([newBlog, ...blogs]);

    alert("Blog saved!");
    navigate("/blog");
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">Blog Editor</h1>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key}
          className="border p-2 w-full mt-3 rounded"
          onChange={handleChange}
        />
      ))}

      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
      >
        Save
      </button>
    </div>
  );
}
