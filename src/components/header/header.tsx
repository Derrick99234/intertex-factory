"use client";
import Image from "next/image";
import Link from "next/link";
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
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href={"/enquiries/wholesale-enquiries"}>Wholesale</Link>
            </li>
            <li>
              <Link href={"/enquiries/uniforms"}>Uniform</Link>
            </li>
            <li>
              <Link href={"/enquiries/distributor"}>Become a Distributor</Link>
            </li>
            <li>
              <Link href={"/enquiries/customize-labels"}>Customize Labels</Link>
            </li>
            <li>
              <Link href={"/enquiries/packaging"}>Packaging</Link>
            </li>
            <li>
              <Link href={"/enquiries/become-an-investor"}>
                Become an Investor
              </Link>
            </li>
          </ul>
        </nav>
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
