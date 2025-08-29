"use client"

import { Button } from "@/app/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Calendar = () => {
    // ステート定義
    const [currentDate, setCurrentDate] = useState(new Date());

    // 月の日数
    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    // 月初の曜日を取得
    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    // 前後の月へ移動
    const prevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };
    const nextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
        <div className="w-full max-w-md mx-auto">
            {/* 月の推移用エリア */}
            <div className="flex justify-between items-center mb-4">
                <Button variant="outline" onClick={prevMonth}>
                    <ChevronLeft className="h-4 w-4"/>
                </Button>
                <h2 className="text-xl font-bold">
                    {currentDate.toLocaleString("ja-JP", {
                        year: "numeric",
                        month: "long",
                    })}
                </h2>
                <Button variant="outline" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4"/>
                </Button>
            </div>

            {/* カレンダーの中身 */}
            <div className="grid grid-cols-7 gap-1">
                {/* 曜日の表示 */}
                {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
                    <div key={day} className="text-center font-bold">
                        {day}
                    </div>
                ))}

                {/* 日付の余白 */}
                {Array(firstDayOfMonth)
                    .fill(null)
                    .map((_, index) => (
                        <div key={`empty-${index}`} />
                    ))}

                {/* 日付のマップ */}
                {days.map((day) => (
                    <Button
                        key={day}
                        variant="outline"
                        className="h-12 w-full relative"
                    >
                        {day}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
