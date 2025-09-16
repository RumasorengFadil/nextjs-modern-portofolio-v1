import PageClient from "./PageClient";
import AuthenticatedLayout from "@/layout/server/AuthenticatedLayout";

const EditBlog = async () => {
    return (
        <AuthenticatedLayout>
            <PageClient />
        </AuthenticatedLayout>
    );
};
export default EditBlog;
