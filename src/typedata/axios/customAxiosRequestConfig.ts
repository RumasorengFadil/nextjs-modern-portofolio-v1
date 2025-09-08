import { AxiosRequestConfig } from "axios";

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
  showSuccessToast?: boolean;
  showErrorToast?: boolean;
}
