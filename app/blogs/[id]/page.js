
export default async function page({params}) {
    const {id} = await params
    const blogs = [
        {
            id: 1,
            title: "Getting Started with Next.js",
            description: "Learn the fundamentals of Next.js and build your first application with this powerful React framework. Explore key concepts like server-side rendering, static site generation, and dynamic routing. Master the art of creating fast, SEO-friendly web applications with modern tooling and best practices. Dive deep into Next.js features like API routes, middleware, and image optimization.",
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS",
            description: "Discover how to create beautiful, responsive designs using Tailwind CSS utility classes and best practices. Learn advanced concepts like custom configurations, component extraction, and responsive design patterns. Explore techniques for maintaining a consistent design system and optimizing your CSS bundle size for production."
        },
        {
            id: 3,
            title: "Modern Web Development Practices",
            description: "Explore current trends and best practices in web development, from performance optimization to user experience design. Learn about modern build tools, testing strategies, and deployment workflows. Discover techniques for creating progressive web apps, implementing modern authentication, and leveraging serverless architectures for scalable applications."
        },
        {
            id: 4,
            title: "Building Accessible Websites",
            description: "Understanding the importance of web accessibility and implementing inclusive design principles in your projects. Learn WCAG guidelines, ARIA attributes, and semantic HTML best practices. Master keyboard navigation, screen reader optimization, and color contrast requirements to create truly inclusive web experiences for all users."
        }
    ]
  return (
    <div className="p-12">
      <div className="max-w-3xl mx-auto p-8 bg-white hover:bg-gray-50 transition-colors duration-300 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 hover:text-blue-600 transition-colors duration-300">
          {blogs.find(blog => blog.id === Number(id))?.title || 'Blog not found'}
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
          {blogs.find(blog => blog.id === Number(id))?.description}
        </p>
      </div>
    </div>
  )
}
