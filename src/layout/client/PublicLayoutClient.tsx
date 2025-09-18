"use client"
import NavbarSection from "@/components/organism/NavbarSectionV1";


export default function PublicLayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div>
            {/* Navbar Section */}
            <NavbarSection />

            {/* Layout Children */}
            {children}
        </div>
    );
}
