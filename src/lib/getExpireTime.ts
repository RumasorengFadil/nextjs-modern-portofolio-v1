import { jwtDecode, JwtPayload } from "jwt-decode";

export function getTokenExpireTime(token: string) {
  const decoded = jwtDecode<JwtPayload>(token);
  return (decoded.exp ?? 0) * 1000; // ubah ke ms
}
