import { Button } from "@/components/ui/button";
import { Route } from "next";
import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  title: string;
  icon: React.ComponentType<{ size?: number | string }>;
}

const ButtonLink = ({ href, title, icon: Icon }: ButtonLinkProps) => {
  return (
    <div className="flex justify-end px-4 lg:px-6">
      <Link href={href as Route}>
        <Button className="flex items-center gap-2 cursor-pointer">
          <Icon size={16} />
          {title}
        </Button>
      </Link>
    </div>
  );
};

export default ButtonLink;
