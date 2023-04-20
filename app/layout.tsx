import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";
import RegisterModal from "@/components/modals/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";
import LoginModal from "@/components/modals/LoginModal";
import getCurrentUser from "@/actions/getCurrentUser";

export const metadata = {
    title: "HomeBnB",
    description: "HomeBnB is inspired by Airbnb",
};

const font = Nunito({
    subsets: ["latin"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser();
    console.log(currentUser);

    return (
        <html lang="en">
            <body className={font.className}>
                <ClientOnly>
                    <ToasterProvider />
                    <RegisterModal />
                    <LoginModal />
                    <Navbar currentUser={currentUser ? currentUser : undefined} />
                </ClientOnly>
                {children}
            </body>
        </html>
    );
}
