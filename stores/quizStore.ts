import { create } from "zustand";

export interface ChapterState {
  id: string;
  title: string;
  order: number;
  sectionId: string | null;
}

interface QuizState {
  isSectionSelected: boolean;
  selectedSection: string;
  selectedChapter: string;
  chapterList: ChapterState[];
  // 상태 변경 액션들
  setIsSectionSelected: (v: boolean) => void;
  setSelectedSection: (s: string) => void;
  setSelectedChapter: (c: string) => void;
  setChapterList: (list: ChapterState[]) => void;
}

export const useQuizStore = create<QuizState>()((set) => ({
  isSectionSelected: false,
  selectedSection: "ALL",
  selectedChapter: "ALL",
  chapterList: [],
  setIsSectionSelected: (v) => set({ isSectionSelected: v }),
  setSelectedSection: (s) => set({ selectedSection: s }),
  setSelectedChapter: (c) => set({ selectedChapter: c }),
  setChapterList: (list) => set({ chapterList: list }),
}));
