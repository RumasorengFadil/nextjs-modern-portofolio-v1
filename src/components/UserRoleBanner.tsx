// components/UserRoleBanner.tsx
import React from "react";

interface UserRoleBannerProps {
  desc: string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?:string;
}

const UserRoleBanner: React.FC<UserRoleBannerProps> = ({ desc, logo:Logo, className }) => {
  return (
    <div className={"flex items-center space-x-3 " + className}>
      <Logo className="w-6 h-8" />
      <p className="text-lg font-bold">{desc}</p>
    </div>
  );
};

export default UserRoleBanner;
