import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";

import prisma from "@/libs/prismadb";

export const getSession = async () => {
    return await getServerSession(authOptions);
};

const getCurrentUser = async () => {
    try {
        const session = await getSession();
        // console.log(prisma);

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string,
            },
        });
        currentUser.createdAt = currentUser.createdAt.toString();
        currentUser.updatedAt = currentUser.updatedAt.toString();
        // console.log(currentUser);
        return currentUser && currentUser;
    } catch (error: any) {
        console.log(error);
        return null;
    }
};

export default getCurrentUser;
