import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <div className="p-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Dummy Posts
        </h1>

        <div className="grid gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3 capitalize">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-2">{post.body}</p>
              <div className="mt-4 flex justify-end">
                <Link
                  href={`/posts/${post.id}`}
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

