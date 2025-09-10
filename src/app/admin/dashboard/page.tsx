import PageClient from "./PageClient";
import AuthenticatedLayout from "@/layout/server/AuthenticatedLayout";

const Login = async () => {
    return (
        <AuthenticatedLayout>
            <PageClient />
        </AuthenticatedLayout>
    );
};
export default Login;
