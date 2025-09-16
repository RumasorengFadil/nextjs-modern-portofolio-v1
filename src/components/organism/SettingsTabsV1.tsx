import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Settings } from "@/typedata/settings/settings"

export function SettingsTabs({
    onSubmit,
    handleChange,
    handleFileChange,
    form,
}: {
    onSubmit: () => void,
    handleChange: (key:string, value:string | boolean) => void,
    handleFileChange: (e:React.ChangeEvent<HTMLInputElement>, key:string) => void,
    form:Settings,
}) {


    return (
        <div className="px-4 md:px-6">
            <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid grid-cols-4 w-full mb-6">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="seo">SEO</TabsTrigger>
                    <TabsTrigger value="comments">Comments</TabsTrigger>
                    <TabsTrigger value="theme">Theme</TabsTrigger>
                </TabsList>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }} className="space-y-6">
                    {/* General Tab */}
                    <TabsContent value="general">
                        <Card>
                            <CardHeader>
                                <CardTitle>General Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="title">Site Title</Label>
                                    <Input
                                        id="title"
                                        value={form.title}
                                        onChange={(e) => handleChange("title", e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={form.description}
                                        onChange={(e) => handleChange("description", e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="logo">Logo Upload</Label>
                                    <Input
                                        id="logo"
                                        type="file"
                                        onChange={(e) =>
                                            handleFileChange(e, "logo")
                                        }
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* SEO Tab */}
                    <TabsContent value="seo">
                        <Card>
                            <CardHeader>
                                <CardTitle>SEO Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="metaTitle">Meta Title</Label>
                                    <Input
                                        id="metaTitle"
                                        value={form.metaTitle}
                                        onChange={(e) => handleChange("metaTitle", e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="metaDescription">Meta Description</Label>
                                    <Textarea
                                        id="metaDescription"
                                        value={form.metaDescription}
                                        onChange={(e) => handleChange("metaDescription", e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="ogImage">OG Image</Label>
                                    <Input
                                        id="ogImage"
                                        type="file"
                                        onChange={(e) =>
                                            handleFileChange(e, "ogImage")
                                        }
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Comments Tab */}
                    <TabsContent value="comments">
                        <Card>
                            <CardHeader>
                                <CardTitle>Comment Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between">
                                <Label htmlFor="comments">Enable Comments</Label>
                                <Switch
                                    id="comments"
                                    checked={form.commentsEnabled}
                                    onCheckedChange={(checked) =>
                                        handleChange("commentsEnabled", checked)
                                    }
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Theme Tab */}
                    <TabsContent value="theme">
                        <Card>
                            <CardHeader>
                                <CardTitle>Theme Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <Label htmlFor="theme">Theme</Label>
                                <Select
                                    value={form.theme}
                                    onValueChange={(value) => handleChange("theme", value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <div className="pt-4">
                        <Button type="submit">Save Changes</Button>
                    </div>
                </form>
            </Tabs>
        </div>
    )
}
