import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-red-700 font-semibold">Hello NextJS</h1>
      <Button
        as={Link}
        href="/members"
        color="primary"
        startContent={<FaRegSmile size={20} />}
        variant="bordered"
        type="button"
      >
        Click Me
      </Button>
    </div>
  );
}
