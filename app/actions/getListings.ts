import prisma from '@/app/libs/prismadb'

export default async function getListings(){
    try {        
        const listigs = await prisma.listing.findMany({
            orderBy:{
                createdAt:'desc'
            }
        })
        return listigs
    } catch (error:any) {
        throw new Error(error);
    }
}