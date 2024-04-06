import React, { useEffect, useState } from "react";
// 48:40
function HomePage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPostData = async () => {
      const fetchUrl = await fetch("https://dummyjson.com/products");
      const posts = await fetchUrl.json();
      setPost(posts.products);
    };
    getPostData();
  }, []);

  const getDetail = post.map((post) => {
    return (
      <div className="bg-white p-10 flex gap-4 flex-wrap" key={`${post.id} ${post.title}`}>
        <img src={post.images[0]} alt="" width={480} />
        <div>
          <h1 className="uppercase font-semibold">{post.title}</h1>
          <p>{post.description}</p>
          <div className="space-x-4 mt-4">
            <span className="bg-green-500 px-3 py-1 text-white cursor-pointer">
              Discount {post.discountPercentage}
            </span>
            <span className="bg-green-500 px-3 py-1 text-white cursor-pointer">
              Price $ {post.price}
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="bg-gray-100 min-h-screen">{getDetail}</div>
    </React.Fragment>
  );
}

export default HomePage;

