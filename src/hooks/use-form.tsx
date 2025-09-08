import axiosClient from "@/utils/axiosClient";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

type Errors<T> = Partial<Record<keyof T, string>>;

export function useForm<T extends Record<string, unknown>>(initialValues: T) {
    const [data, setData] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Errors<T>>({});
    const [loading, setLoading] = useState(false);

    const updateField = <K extends keyof T>(key: K, value: T[K]) => {
        setData(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    const reset = (...fields: (keyof T)[]) => {
        fields.forEach(key => {
            setData((prev) => ({
                ...prev,
                [key]: initialValues[key]
            }));
        });

        if (fields.length) return;

        setData(initialValues);
    };

    const submit = async (
        method: "post" | "put" | "patch" | "delete" | "get",
        apiEndPoint: string,
        options?: {
            onSuccess?: (res: AxiosResponse) => void;
            onError?: (errors: unknown) => void;
        },
        config?: AxiosRequestConfig,
        overrideData?: T,
    ) => {
        setLoading(true);
        setErrors({});
        try {
            const payload = overrideData ?? data;

            const res: AxiosResponse = await axiosClient[method](apiEndPoint, payload, { ...(config) })

            if (options?.onSuccess) {
                options?.onSuccess(res);
            }
        } catch (error: unknown) {
            const errorRes = ((error as AxiosError).response as AxiosResponse);
            if (errorRes?.data?.errors) {

                setErrors(errorRes.data.errors);
                if (options?.onError) {
                    options?.onError(errors);
                }
            }
        }
        setLoading(false);
    };

    return {
        data,
        setData: updateField,
        reset,
        errors,
        loading,
        submit,
    };
}
