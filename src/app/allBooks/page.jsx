import Link from "next/link";
import React from "react";

const Books = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  console.log(data)

  return (
    <div className="flex flex-col">
      <h2>All Books</h2>
      {/* <Link href="/allBooks/1">book 1</Link>
      <Link href="/allBooks/2">book 2</Link>
      <Link href="/allBooks/3">book 3</Link>
      <Link href="/allBooks/4">book 4</Link>
      <Link href="/allBooks/5">book 5</Link> */}

      {data.map((user) => (
        <Link key={user.id} href={`/allBooks/${user.id}`}>
          {user.title}
        </Link>
      ))}
    </div>
  );
};

export default Books;
