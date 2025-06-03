// app/posts/page.js
import Link from "next/link";
import PostsLimit from "@/components/PostsPage"; // Make sure this is a client component
import { Suspense } from "react";

// Fetch posts with a specified limit and optional page number
async function getPostsData(limit = 5, page = 1) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function PostsPage({ searchParams }) {
  const limit = parseInt(searchParams?.limit) || 5;
  const posts = await getPostsData(limit);

  return (
    <div className="Posts">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
              Post #{post.id}: {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Suspense fallback={<p>Loading limit selector...</p>}>
          <PostsLimit defaultLimit={limit} />
        </Suspense>
      </div>
    </div>
  );
}