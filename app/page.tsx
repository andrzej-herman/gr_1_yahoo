import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex justify-between py-4 gap-10">
        <div className="w-full flex-[0.75]">
          <p>News dnia</p>
          <p>Pozostałe wieści</p>
        </div>
        <div className="w-full border h-[1000px] rounded-md flex-[0.25]">
          Reklamy
        </div>
      </main>
    </div>
  );
}
