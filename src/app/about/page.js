import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "./loading";

const About = async () => {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();
  //   console.log(posts);
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <h1 className="text-2xl font-bold">About Page</h1>
        <div className="mt-4">
          {posts.map((post) => (
            <div key={post.id} className="mb-4">
              <Link href={`/post/${post.id}`}>
                <span className="text-blue-500 hover:underline">{post.title}</span>
              </Link>
              <p className="text-gray-500">{post.body}</p>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default About;
