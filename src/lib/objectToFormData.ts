export function objectToFormData<T extends Record<string, unknown>>(data: T): FormData {
  const formData = new FormData();

  (Object.keys(data) as Array<keyof T>).forEach((key) => {
    const value = data[key];

    // Skip jika null atau undefined
    if (value === undefined || value === null) return;

    // Jika tipe File atau Blob, langsung append
    if (value instanceof File || value instanceof Blob) {
      formData.append(String(key), value);
    }
    // Jika boolean, ubah ke string "true"/"false"
    else if (typeof value === "boolean") {
      formData.append(String(key), value ? "true" : "false");
    }
    // Jika array, ubah ke JSON string
    else if (Array.isArray(value)) {
      formData.append(String(key), JSON.stringify(value));
    }
    // Jika objek biasa, stringify
    else if (typeof value === "object") {
      formData.append(String(key), JSON.stringify(value));
    }
    // Selain itu (string, number, dsb.), langsung append
    else {
      formData.append(String(key), String(value));
    }
  });

  return formData;
}
