import AuthenticatedLayout from "@/layout/server/AuthenticatedLayout";
import PageClient from "./PageClient";


export default async function Account() {
    return (
        <AuthenticatedLayout>
            <PageClient />
        </AuthenticatedLayout>
    )
}

