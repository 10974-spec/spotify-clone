import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/stores/useAuthStore";
import { useAuth } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import {  useEffect, useState, } from "react";

const updateApiToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getToken, } = useAuth();
  const [loading, setLoading] = useState(true);
  const {isAdmin, checkAdminStatus} = useAuthStore()

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateApiToken(token);
        if (token) {
          await checkAdminStatus();
        }
      } catch (error) {
        updateApiToken(null);
        console.log("Error in the auth provider", error);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, [getToken]);

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader className="size-8 text-emerald-500 animate-spin"/>
      </div>
    );

  return <div>{children}</div>;
};

export default AuthProvider;
