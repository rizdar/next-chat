import { getMemberByUserId } from "@/actions/memberAction";
import MemberSidebar from "@/components/member/MemberSidebar";
import { Card } from "@nextui-org/react";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export default async function layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { userId: string };
}) {
  const member = await getMemberByUserId(params.userId);

  if (!member) return notFound();

  return (
    <div className="grid grid-cols-12 gap-4 h-[80vh]">
      <div className="col-span-3">
        <MemberSidebar member={member} />
      </div>
      <div className="col-span-9">
        <Card className="w-full mt-5 h-[80vh]">{children}</Card>
      </div>
    </div>
  );
}
