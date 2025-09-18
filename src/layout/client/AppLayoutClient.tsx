"use client"
import Particles from "@/components/organism/Particles";


export default function AppLayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div>
            {/* Command Particles */}
            <Particles
                className="absolute inset-0 -z-50 animate-fade-in"
                quantity={100}
            />

            {/* Layout Children */}
            {children}
        </div>
    );
}
