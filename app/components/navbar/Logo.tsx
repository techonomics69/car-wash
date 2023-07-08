"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="hidden bg-slate-300 justify-self-start md:block cursor-pointer left-0 relative rounded-3xl"
      height="70"
      width="70"
      src="/images/logo.png"
    />
  );
};

export default Logo;
