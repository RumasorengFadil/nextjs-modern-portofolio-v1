import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Password } from "@/typedata/account/password"
import { Profile } from "@/typedata/account/profile"

export function FormAccount({
    onUpdateProfile,
    onUpdatePassword,
    handleProfileChange,
    handlePasswordChange,
    handleFileChange,
    profileForm,
    passwordForm,
    avatarPreview = "",
}: {
    onUpdateProfile: (profileForm: Profile | Record<string, unknown>) => void,
    onUpdatePassword: (passwordForm: Password | Record<string, unknown>) => void,
    handleProfileChange: (key: string, value: string) => void,
    handlePasswordChange: (key: string, value: string) => void,
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void,
    profileForm: Profile | Record<string, unknown>,
    passwordForm: Password | Record<string, unknown>,
    avatarPreview?:string
}) {
    return (
        <div className="px-4 md:px-6 space-y-10">
            {/* Profile Info */}
            <Card>
                <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        onUpdateProfile(profileForm);
                    }} className="grid gap-6">
                        <div className="flex flex-col space-y-4">
                            <Label htmlFor="name">Profile Picture</Label>

                            <div className="flex items-center space-x-4">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage src={`${avatarPreview ? avatarPreview : `${process.env.NEXT_PUBLIC_API_URL}${profileForm.imageUrl}`}`} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col">
                                    <div className="grid w-full max-w-40 items-center gap-3">
                                        <Input id="picture" type="file" onChange={(e) => {
                                            handleFileChange(e, "image");
                                        }} />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Jpg, Jpeg or Png Max 4mb</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                value={profileForm.name as string || ""}
                                onChange={(e) => handleProfileChange("name", e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={profileForm.email as string || ""}
                                onChange={(e) => handleProfileChange("email", e.target.value)}
                            />
                        </div>
                        <Button
                            type="submit"
                        >Save Changes</Button>
                    </form>
                </CardContent>
            </Card>

            {/* Password Update */}
            <Card>
                <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        onUpdatePassword(passwordForm);
                    }} className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input
                                id="currentPassword"
                                type="password"
                                value={passwordForm?.currentPassword as string || ""}
                                onChange={(e) =>
                                    handlePasswordChange("currentPassword", e.target.value)
                                }
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input
                                id="newPassword"
                                type="password"
                                value={passwordForm?.newPassword as string || ""}
                                onChange={(e) =>
                                    handlePasswordChange("newPassword", e.target.value)
                                }
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                value={passwordForm?.confirmPassword as string || ""}
                                onChange={(e) =>
                                    handlePasswordChange("confirmPassword", e.target.value)
                                }
                            />
                        </div>
                        <Button
                            type="submit"
                            variant="outline"
                        >
                            Update Password
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
