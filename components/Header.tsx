import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between gap-12 py-4">
      <Image src="/news-logo.png" alt="Logo News" width={120} height={100} />

      <div className="flex items-center justify-start">
        <Input
          placeholder="Szukaj ..."
          className="bg-[#F0F3F5] border-0 rounded-full w-[600px]"
        />
        <Button className="bg-[#5F00D1] rounded-full w-[80px] ml-[-30px]">
          <Search className="h-4 w-4 font-bold" />
        </Button>
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <p>Polityka</p>
        <p>Sport</p>
        <p>Rozrywka</p>
        <p>Motoryzacja</p>
      </div>
      <Button
        className="bg-white text-neutral-800
              font-medium
              border border-gray-200
              rounded-full
              hover:bg-white
              hover:border-white
              hover:shadow-lg
              hover:text-purple-700
              "
      >
        Zaloguj się
      </Button>
    </div>
  );
}
