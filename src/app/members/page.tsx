import { fetchCurrentUserLikeIds } from "@/actions/likeAction";
import { getMembers } from "@/actions/memberAction";
import MemberCard from "@/components/member/MemberCard";

export default async function MembersPage() {
  const members = await getMembers();
  const likeIds = await fetchCurrentUserLikeIds();

  return (
    <div className="mt-10 grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
      {members &&
        members.map((member) => (
          <MemberCard key={member.id} member={member} likeIds={likeIds} />
        ))}
    </div>
  );
}
