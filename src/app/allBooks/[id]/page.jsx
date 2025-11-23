import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return (
    <div>
      <h1>Book Name: {data.title}</h1>
      <p>Book description: {data.body}</p>
    </div>
  );
};

export default page;
