import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-[380px] md:w-full h-[800px] items-center pt-10 text-lg">
      <div className="p-5">
        <Link
          href="/createUser"
          className="flex w-28 h-10 bg-red-400 items-center justify-center rounded-md"
        >
          Create User
        </Link>
      </div>
    </div>
  );
}
