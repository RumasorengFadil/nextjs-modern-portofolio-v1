import axios from "axios";
import { cookies } from "next/headers";

export const getAuthFromSever = async () => {
  const cookieStore = cookies();
  const refreshToken = (await cookieStore).get("refresh_token")?.value;

  if(!refreshToken) return;
  
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth`,
      null,
      {
        headers: {
          Cookie: `refresh_token=${refreshToken}`,
        },
      }
    );

    return res.data;
  } catch (err) {
    console.log("error", err)
    return null;
  }
};
