import Link from "next/link"

export const metadata = {
    title: "DevStudio Blog - Insights and Tutorials",
    description: "Stay updated with the latest insights, tutorials, and best practices in web development, design, and digital strategy. Explore our expert articles to enhance your skills and stay ahead in the digital world.",
  };

export default function Blogs() {
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
        <ul className="max-w-3xl mx-auto space-y-4">
        {
            blogs.map(blog => (
                <li key={blog.id} className="list-none">
                    <Link 
                        href={`/blogs/${blog.id}`}
                        className="block p-6 bg-white hover:bg-gray-50 rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                            {blog.title}
                        </h2>
                        <p className="mt-2 text-gray-600 hover:text-gray-900 transition-colors duration-300">
                            {blog.description.substring(0, 100)}...
                        </p>
                    </Link>
                </li>
            ))
        }
        </ul>
    </div>
  )
}
