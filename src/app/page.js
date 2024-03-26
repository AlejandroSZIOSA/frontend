import Link from "next/link";

import { useRouter } from "next/navigation";

/* w-[380px] h-[800px] */

export default function Home() {
  return (
    <div className="flex flex-col w-[380px] h-[800px] items-center">
      <main className="p-10">
        <Link href="/createUser">Create User</Link>

        {/* <button onClick={() => router.push("/createUser/page")}>
        Create User
      </button> */}
      </main>
    </div>
  );
}
