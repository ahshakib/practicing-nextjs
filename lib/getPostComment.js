export default async function getPostComment (id) {
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        if(result.ok) {
            return result.json()
        } else {
            throw new Error("The data is not found...")
        }
    } catch (error) {
        throw new Error(error.message)
    }
}