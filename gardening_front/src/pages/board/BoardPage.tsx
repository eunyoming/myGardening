import {BoardCard} from "@/entities/board/ui/BoardCard.tsx";
import {useState} from "react";
import type {BoardItem} from "@/entities/board/model/boardItem.ts";

export default function BoardPage() {
    const [boards, setBoards] = useState<BoardItem[]>([
        {
            id: 1,
            title: "우리집 몬스테라 성장일기",
            content: "드디어 새 잎이 나왔어요!",
            images: [
                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
                "https://images.unsplash.com/photo-1526827826797-7b05204a22ef",
                "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea",
            ],
        },
        {
            id: 2,
            title: "초보자 식물 추천해주세요!",
            content: "키우기 쉬운 식물 추천 부탁드려요 🌱",
            images: [
                "https://images.unsplash.com/photo-1528741254566-d718e868201f",
                "https://images.unsplash.com/photo-1543286386-713bdd548da4",
            ],
        },
        {
            id: 3,
            title: "오늘은 물 주는 날",
            content: "다육이들이 엄청 건강해졌어요.",
            images: [],
        },
    ]);

    return (
        <main className="mx-auto h-full w-full max-w-3xl px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {boards.map((item) => (
                    <BoardCard
                        key={item.id}
                        cards={item.images.map((img) => ({
                            image: img,
                            title: item.title,
                            description: item.content,
                        }))}
                    />
                ))}
            </div>
        </main>
    );
}