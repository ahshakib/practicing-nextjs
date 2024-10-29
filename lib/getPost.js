export default async function getPost (id) {
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if(result.ok) {
            return result.json()
        } else {
            throw new Error("The data is not found...")
        }
    } catch (error) {
        throw new Error(error.message)
    }
}