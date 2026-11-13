
"use client";

import { useRouter, usePathname } from "next/navigation";
import { BsChatDots } from "react-icons/bs";

export default function FloatingContact() {
  const router = useRouter();
  const pathname = usePathname();

  const handleContact = () => {
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      router.push("/#contact");
    }
  };

  return (
    <button
      onClick={handleContact}
      aria-label="Go to contact section"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-yellow-300"
    >
      <BsChatDots size={24} />
    </button>
  );
}
