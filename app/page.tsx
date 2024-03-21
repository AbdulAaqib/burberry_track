import Image from "next/image";

export default function Home() {
  const headerPart = (
    <header className="w-full p-4 bg-white flex justify-center items-center shadow-md">
      <Image className="h-10" src="https://source.unsplash.com/random/?burberry" alt="Burberry Logo" width={100} height={100} />
    </header>
  );

  return (
    <>
      {headerPart}
      {/* Add the rest of your component here */}
    </>
  );
}
