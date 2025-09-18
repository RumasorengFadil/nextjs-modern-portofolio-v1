import GuestLayout from "@/layout/server/GuestLayout";
import PageClient from "./PageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | bbyts",
    description:
        "Masuk ke akun bbyts untuk mengelola blog, membaca artikel, dan menikmati fitur lengkap kami.",
    keywords: ["Login", "bbyts", "Masuk", "Blog", "Artikel", "Dashboard"],
    openGraph: {
        title: "Login | bbyts",
        description:
            "Masuk ke akun bbyts untuk mengelola blog, membaca artikel, dan menikmati fitur lengkap kami.",
        url: "https://bbyts.com/auth/login",
        siteName: "bbyts",
        images: [
            {
                url: "https://bbyts.com/public/app/og-image.png",
                width: 1200,
                height: 630,
                alt: "Login bbyts",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    robots: {
        index:false,
        follow:false
    }
};

const Login = async () => {
    return (
        <GuestLayout>
            <PageClient />
        </GuestLayout>
    );
};
export default Login;
