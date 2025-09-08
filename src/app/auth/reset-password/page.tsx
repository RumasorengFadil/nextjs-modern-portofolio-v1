import GuestLayout from "@/layout/server/GuestLayout";
import PageClient from "./PageClient";


const ForgotPassword = async ({ searchParams }: { searchParams: Promise<{ token: string, email: string }> }) => {
    return (
        <GuestLayout>
            <PageClient token={(await searchParams).token ?? ""} email={(await searchParams).email ?? ""} />
        </GuestLayout>
    );
};
export default ForgotPassword;
