
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { FormEventHandler } from 'react';
import Link from 'next/link';
import ButtonWithLoading from './ButtonWithLoadingV1';
import { Checkbox } from '../ui/checkbox';
import { Credentials } from '@/typedata/auth/credentials';

export const LoginForm = ({
    form, loading = false, onSubmit, setData,
}: {
    form: Credentials | null,
    loading: boolean
    onSubmit: FormEventHandler,
    setData: <K extends keyof Credentials> (key: K, value: Credentials[K]) => void
}) => {
    return (
        <div className={cn("flex flex-col gap-6")}>
                <CardContent className="grid p-0">
                    <form onSubmit={onSubmit} className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Welcome back</h1>
                                <p className="text-muted-foreground text-balance">
                                    Login to your account
                                </p>
                            </div>
                            <div className="grid gap-3">
                                <Label className="text-left" htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    value={form?.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="/auth/forgot-password"
                                        className="ml-auto text-sm underline-offset-2 hover:underline"
                                    >
                                        Lupa password Anda?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={form?.password}
                                    onChange={(e) => setData("password", e.target.value)}
                                />
                            </div>
                            <div className="block">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={form?.remember}
                                        onCheckedChange={(checked:boolean) => setData('remember', checked)}
                                    />
                                    <span className="ms-2 text-sm text-gray-600">Remember me</span>
                                </label>
                            </div>  
                            <ButtonWithLoading
                                type='submit'
                                isLoading={loading}
                                className="w-full cursor-pointer"
                                disabled={loading}
                            >
                                Login
                            </ButtonWithLoading>
                        </div>
                    </form>
                    {/* <div className="bg-muted relative hidden md:block">
                        <img
                            src="/images/common/unsplash-1.jpg"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div> */}
                </CardContent>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our <Link href="#">Terms of Service</Link>{" "}
                and <Link href="#">Privacy Policy</Link>.
            </div>
        </div>
    );
};
