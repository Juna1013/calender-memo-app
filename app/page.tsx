import Calendar from "./components/Calendar";
import MemoModal from "./components/MemoModal";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">カレンダーメモアプリ</h1>
      <Calendar />
      <MemoModal />
    </div>
  );
}
