"use client";

import { toggleLikeMember } from "@/actions/likeAction";
import { useRouter } from "next/navigation";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type LikeButtonProps = {
  targetId: string;
  hashLiked: boolean;
};

export default function LikeButton({ targetId, hashLiked }: LikeButtonProps) {
  const router = useRouter();

  async function toggleLike() {
    await toggleLikeMember(targetId, hashLiked);
    router.refresh();
  }

  return (
    <div onClick={toggleLike} className="relative hover:opacity-80">
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hashLiked ? "fill-red-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}
