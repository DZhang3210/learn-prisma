import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    // await prisma.user.deleteMany()
    // const user = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Kyle",
    //             email: "kyle@test.com",
    //             age: 27,
    //         }, {
    //             name: "Sally",
    //             email: "sally@test.com",
    //             age: 32,
    //         },
    //     ],
    // })
    // console.log(user)
    // await prisma.user.createMany({
    //     data: [{
    //         name: "Sally",
    //         age: 12,
    //         email: "sally@test1.com"
    //     }]
    // })
    // const user = await prisma.user.findMany({
    //     where: {
    //         // name: { in: ["Sally", "Kyle"] }
    //         // age: { lt: 20 }
    //         author: {
    //             is: {
    //                 age: 27
    //             }
    //         }
    //         // writtenPosts: {
    //         //     every: {
    //         //         title: "Test"
    //         //     }
    //         // }

    //         // userPreference: {
    //         //     emailUpdates: false
    //         // }

    //         // NOT: {
    //         //     email: { startsWith: "sally" }  
    //         // }
    //         // OR:
    //         //     [
    //         //         {
    //         //             email: { startsWith: "sally" },
    //         //         },
    //         //         {
    //         //             email: { endsWith: "@test1.com" }
    //         //         }
    //         //     ]
    //     },
    //     // orderBy: {
    //     //     age: "desc"
    //     // }
    //     // take: 1,
    //     // skip: 1 
    //     // distinct: ["name"]
    // })

    const update = await prisma.user.updateMany({
        where: {
            name: "Sally",
        },
        data: {
            name: "New Sally"
        }
    })

    const user = await prisma.user.findMany()
    console.log(user)
}

main()
    .catch(e => {
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })