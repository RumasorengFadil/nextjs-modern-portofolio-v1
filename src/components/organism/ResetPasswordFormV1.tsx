import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ResetPassForm } from "@/typedata/auth/resetPassForm";
import { FormEventHandler } from "react";
import ButtonWithLoading from "./ButtonWithLoadingV1";

const ResetPasswordForm = ({
    form,
    loading,
    onSubmit,
    setData,
}: {
    form: ResetPassForm
    loading:boolean
    onSubmit: FormEventHandler
    setData: <K extends keyof ResetPassForm>  (key:K, value: ResetPassForm[K]) => void
}) => {
  return (
    <CardContent className="space-y-6 py-8">
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold">Atur Ulang Password</h1>
        <p className="text-muted-foreground text-sm">Masukkan kata sandi baru Anda di bawah ini.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className='flex flex-col space-y-2 text-left'>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setData('email', e.target.value)}
            required
            disabled
          />
        </div>

        <div className='flex flex-col space-y-2 text-left'>
          <Label htmlFor="password">Password Baru</Label>
          <Input
            id="password"
            type="password"
            value={form.password}
            onChange={(e) => setData('password', e.target.value)}
            required
          />
        </div>

        <div className='flex flex-col space-y-2 text-left'>
          <Label htmlFor="password_confirmation">Konfirmasi Password</Label>
          <Input
            id="password_confirmation"
            type="password"
            value={form.password_confirmation}
            onChange={(e) => setData('password_confirmation', e.target.value)}
            required
          />
        </div>
        <ButtonWithLoading
          type='submit'
          isLoading={loading}
          className="w-full"
          disabled={loading}
        >
          Atur Ulang Password
        </ButtonWithLoading>

      </form>
    </CardContent>
  );
};

export default ResetPasswordForm;
