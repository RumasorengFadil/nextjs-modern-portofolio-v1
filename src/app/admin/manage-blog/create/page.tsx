import PageClient from "./PageClient";
import AuthenticatedLayout from "@/layout/server/AuthenticatedLayout";

const CreateBlog = async () => {
    return (
        <AuthenticatedLayout>
            <PageClient />
        </AuthenticatedLayout>
    );
};
export default CreateBlog;
