import Link from "next/link";
import PrimaryBtn from "./components/PrimaryBtn";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-lg">
      <div className="p-10">
        {/* <Link
          href="/createUser"
          className="flex w-28 h-10 bg-[#A79277] text-[#FFF2E1] items-center justify-center rounded-md"
        >
          Create User
        </Link> */}
        <Link href="/createUser">
          <PrimaryBtn>Create User</PrimaryBtn>
        </Link>
      </div>
    </div>
  );
}
