import next from "next"

export default async function getAllPosts () {
    try {
        const result = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=10',
            {
                next: {
                    revalidate: 10,
                }
            }
        )
        if(result.ok) {
            return result.json()
        } else {
            throw new Error("The data is not found...")
        }
    } catch (error) {
        throw new Error(error.message)
    }
}