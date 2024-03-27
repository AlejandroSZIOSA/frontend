import Link from "next/link";

/* w-[380px] h-[800px] */

export default function Home() {
  return (
    <div className="flex flex-col w-[380px] h-[800px] items-center">
      <main className="p-10">
        <Link
          href="/createUser"
          className="flex w-28 h-10 bg-red-400 items-center justify-center rounded-md"
        >
          Create User
        </Link>

        {/* <button onClick={() => router.push("/createUser/page")}>
        Create User
      </button> */}
      </main>
    </div>
  );
}
