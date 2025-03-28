import { CarsJson } from "../../interface";
export default async function getCars():Promise<CarsJson>{
    
    await new Promise((resolve)=>setTimeout(resolve, 300));

    // const response = await fetch("https://a08-venue-explorer-backend-2.vercel.app/api/v1/venues");
    const response = await fetch("http://localhost:5000/api/v1/cars", {next: {tags:['cars']}});
    if(!response.ok){
        throw new Error("Failed to fetch cars");
    }
    
    return await response.json() as CarsJson;
}