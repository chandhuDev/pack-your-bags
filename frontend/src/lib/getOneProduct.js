import { query } from "../Utils/Images"
export default async function getAOneProduct(id){
    const response = await fetch(`http://localhost:1337/api/places/${id}?${query}`)
    if(!response.ok){
        throw new Error(response.message)
    }
    return response.json()
}