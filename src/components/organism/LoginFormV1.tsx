
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Checkbox from '../components/Checkbox';
import { Credentials } from '@/typdata/credentials';
import { FormEventHandler } from 'react';
import Link from 'next/link';
import ButtonWithLoading from './ButtonWithLoadingV1';

export const LoginFormN = ({
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
                                    Login to your bbyts account
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
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <span className="ms-2 text-sm text-gray-600">Remember me</span>
                                </label>
                            </div>
                            <ButtonWithLoading
                                type='submit'
                                isLoading={loading}
                                className="w-full"
                                disabled={loading}
                            >
                                Login
                            </ButtonWithLoading>
                            
                            {/* <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                <span className="bg-card text-muted-foreground relative z-10 px-2">
                                    Or continue with
                                </span>
                            </div> */}
                            {/* <div className="grid grid-cols-3 gap-4">
                                <Button variant="outline" type="button" className="w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="sr-only">Login with Google</span>
                                </Button>
                            </div> */}
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="/auth/register" className="underline underline-offset-4">
                                    Sign up
                                </Link>
                            </div>
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
