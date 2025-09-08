import { toast } from "sonner"

type ToastType = "success" | "error" | "info" | "warning" | "default" | "loading"

interface ToastOptions {
    type?: ToastType
}

/**
 * Menampilkan banyak pesan toast berdasarkan nilai object atau array.
 * @param messages Object (key-value) atau Array of strings.
 * @param options Optional: jenis toast (success, error, etc)
 */
export function showToasts(
    messages: Record<string, string | string[]> | string[] | string,
    options?: ToastOptions
) {
    const list = Array.isArray(messages) ? messages : isString(messages) ? [messages] : Object.values(messages).flat()

    list.forEach((msg) => {
        switch (options?.type) {
            case "success":
                toast.success(msg)
                break
            case "error":
                toast.error(msg)
                break
            case "info":
                toast.info(msg)
                break
            case "warning":
                toast.warning(msg)
                break
            case "loading":
                toast.loading(msg)
                break
            case "default":
            default:
                toast.success(msg)
                break
        }
    })
    function isString(value: unknown) {
        return typeof value === 'string' || value instanceof String;
    }
}
