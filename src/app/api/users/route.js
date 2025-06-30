import { collectionName, connectDb } from "@/lib/mongodb";

export default async function handler(req,res){
    const userDb = connectDb(collectionName.userCollection);
    switch(req.methtod){
        case 'GET':
            
    }
}