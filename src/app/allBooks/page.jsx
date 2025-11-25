import Link from "next/link";
import React from "react";

const Books = async () => {
  const res = await fetch("http://localhost:5000/books");
  const data = await res.json();

  console.log(data)

  return (
    <div className="flex flex-col">
      <h2>All Books</h2>


      {data.map((user) => (
        <Link key={user._id} href={`/allBooks/${user._id}`}>
          {user.title}
        </Link>
      ))}
    </div>
  );
};

export default Books;
