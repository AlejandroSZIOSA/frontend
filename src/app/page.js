import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <main className="justify-center">
      <Link href="/createUser">Create User</Link>

      {/* <button onClick={() => router.push("/createUser/page")}>
        Create User
      </button> */}
    </main>
  );
}
