"use client";

import { useState, useEffect } from "react";
import {
  //(2)Dialog関係インポート
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"; //(2)Buttonインポート
import { Textarea } from "@/components/ui/textarea"; //(2)Textareaインポート

//(1)propsの型定義
type MemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  date: Date | null;
  initialMemo: string;
  onSave: (memo: string) => void;
};

//(1)props定義追加
const MemoModal = ({ 
  isOpen,
  onClose,
  date,
  initialMemo,
  onSave,
  }: MemoModalProps) => {
    const [memo, setMemo] = useState(initialMemo);

    useEffect(() => {
      setMemo(initialMemo);
    }, [initialMemo, isOpen]);

    const handleSave = () => {
      onSave(memo);
      onClose();
    };
    
    if (!date) return null; //nullの可能性ありの為、それを排除

//(3)UIの定義
  return (
    <Dialog
      open={isOpen} //isOpenがtrueであればモーダルオープン
      //openの状態監視、openがfalseであればモーダルクローズ
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {date.toLocaleDateString("ja-JP", {
              //dateを日本語表記の年月日に変換
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            のメモ
          </DialogTitle>
        </DialogHeader>

        <Textarea
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="メモを入力してください"
          className="min-h-[100px] focus-visible:ring-0"
        />
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            キャンセル
          </Button>
          <Button
            onClick={handleSave} //仮設置
          >
            保存
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MemoModal;
