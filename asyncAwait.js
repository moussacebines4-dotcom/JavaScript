// async fait sortire (envoyer) une promesse 
// await aherde la promesse

const base_URL = "https://jsonplaceholder.typicode.com"
// const getUsers = ()=>{
//      fetch (`${base_URL}/users`)
//      .then((response)=>{
//         return response.json()
//      })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((error)=>console.log(error,"error de serveur"))
// }
// getUsers()

const getUsers = async()=>{
    try{
    const response =await fetch (`${base_URL}/users`)
    const data = await response.json()
    console.log(data)
    }
    catch(error){
console.log(error);

    }}

getUsers()