import { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPosts.json();
      setPosts(postJson.posts);
      console.log(postJson);
    };
    fetchPosts();
  }, []);
  const blogPost = posts.map((post) => {
    return (
      <div
        className="bg-[#7D0A0A] m-10 p-5 max-w-5xl mx-auto  text-white"
        key={post.id}
      >
        <div className="flex space-x-2 items-center">
          <p className="text-xl font-semibold">{post.title}</p>
          <div className="bg-clr-yellow text-gray-700 font-semibold rounded-full p-1 w-6 h-6 flex items-center justify-center">
            {post.userId}
          </div>
        </div>
        <p className=" text-lg p-2 ">{post.body}</p>

        <div className=" flex mx-auto space-x-5">
          {post.tags.map((tag, index) => {
            return (
              <div
                className=" bg-red-300 px-2 py-1 rounded-xl"
                key={`tags-${tag}-${index}`}
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return <div>{blogPost}</div>;
};

export default HomePage;
