export default async function updatePlace(id,seats,addSeats){
    const JWT=localStorage.getItem("JWT")
    const formData=new FormData()
    formData.append("data",JSON.stringify({seat:Number(seats)+Number(addSeats)}))
    const response=await fetch(`http://localhost:1337/api/places/${id}`,{
        method:"PUT",
        headers: {
            Authorization: `Bearer ${JWT}`,
          },
        body:formData
    })
    if(!response.ok){
        throw new Error(response.message)
    }
    return response.json()  
}

