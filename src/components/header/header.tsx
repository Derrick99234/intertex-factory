"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <header className="hidden lg:flex justify-between items-center px-10 text-secondary py-6 w-full">
        <div className="logo">
          <Image
            src={"/logo/intertex-new-logo.png"}
            onClick={handleClick}
            alt="intertex logo"
            className="cursor-pointer"
            width={150}
            height={200}
          />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden flex justify-between items-center px-4 py-4 bg-white text-s">
        <div className="logo">
          <Image
            src={"/logo/intertex-new-logo.png"}
            onClick={handleClick}
            alt="intertex logo"
            className="cursor-pointer"
            width={100}
            height={40}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
