export const getSections = () => {
    const response = fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .catch(error => console.error(error.response.data))

    return response
}

// // import axios from 'axios';
// export const getSectionsWithAxios = async () => {
//     try {
//         const response = await axios.get("https://randomuser.me/api/?results=5");
//         return response.json()
        
//     } catch (error) {
//         console.error(error.response.data);
//     }
// }
