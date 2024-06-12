import {
  fetchCurrentUserLikeIds,
  fetchLikedMembers,
} from "@/actions/likeAction";
import ListTab from "@/components/ListTab";

export default async function ListsPage({
  searchParams,
}: {
  searchParams: { type: string };
}) {
  const likeIds = await fetchCurrentUserLikeIds();
  const members = await fetchLikedMembers(searchParams.type);

  return (
    <div>
      <ListTab members={members} likeIds={likeIds} />
    </div>
  );
}
