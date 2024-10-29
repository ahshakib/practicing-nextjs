import Comments from "@/app/components/Comments";
import getAllPosts from "@/lib/getAllPosts";
import getPost from "@/lib/getPost";
import getPostComment from "@/lib/getPostComment";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  if (post) {
    return {
      title: post.title,
      description: post.body,
    };
  }
}

export default async function Post({ params }) {
  const { id } = await params;
  const postPromise = getPost(id);
  const commentPromise = getPostComment(id);
  //const [post, comments] = await Promise.all([postPromise, commentPromise])
  const post = await postPromise
  
  return (
    <div className="md:p-12 sm:p-0 sm:bg-gradient-to-b from-slate-200 to-blue-200">
      <div className="lg:max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md sm:max-w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {post.title}
          </h2>
          <p className="text-xl text-gray-700 line-clamp-3 leading-relaxed">
            {post.body}
          </p>
        </div>
        <div className="mt-8">
          <Suspense fallback={<div className='text-lg text-gray-700'>Comments Loading....</div>}>
              <Comments promise={commentPromise} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post) => ({
            id: post.id.toString(),
        }
    ))
}
