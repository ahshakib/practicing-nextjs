
export default async function Comments({promise}) {
    const comments = await promise
  return (
    <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h3>
          {comments.map((comment, index) => (
            <div key={index} className="mb-4 p-4 rounded-lg shadow-lg bg-white border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-4 flex justify-center items-center">
                  <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a9 9 0 111.414 2L9.414 10.586A9 9 0 012 14z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{comment.email}</p>
                  <p className="text-xs text-gray-500">Posted on {new Date().toLocaleDateString()}</p>
                </div>
              </div>
              <p className="text-gray-700">{comment.body}</p>
            </div>
          ))}
        </div>
  )
}
