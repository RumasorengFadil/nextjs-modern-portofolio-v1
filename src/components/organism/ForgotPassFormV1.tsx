import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEventHandler } from "react"
import { ForgotPassForm as ForgotPassFormType } from "@/typedata/auth/forgotPassForm"
import ButtonWithLoading from "./ButtonWithLoadingV1"

export const ForgotPassForm = ({
    form,
    loading,
    status,
    onSubmit,
    setData,
}: {
    form: ForgotPassFormType
    loading:boolean
    status:boolean
    onSubmit: FormEventHandler
    setData: <K extends keyof ForgotPassFormType>  (key:K, value: ForgotPassFormType[K]) => void
}) => {

    return <CardContent className="space-y-6 py-8">
        <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold">Lupa password Anda?</h1>
            <p className="text-muted-foreground text-sm">
                Masukkan email Anda dan kami akan mengirimkan tautan pengaturan ulang.
            </p>
        </div>
        {status && <div className="font-medium text-sm text-green-600">{status}</div>}
        <form onSubmit={onSubmit} className="space-y-4">
            <div className='flex flex-col space-y-2'>
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />
                {/* {errors.email && <p className="text-sm text-red-500">{errors.email}</p>} */}
            </div>

            <ButtonWithLoading
                type='submit'
                isLoading={loading}
                className="w-full"
                disabled={loading}
            >
                Kirim Password Reset Link
            </ButtonWithLoading>
        </form>
    </CardContent>
}