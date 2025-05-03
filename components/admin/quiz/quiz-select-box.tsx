import { SectionChapterListType } from "@/app/(main)/admin/quiz/actions";
import { useQuizStore } from "@/stores/quizStore";

interface QuziSelectProps {
  handleSectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChapterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  sectionList: SectionChapterListType;
  isDisabled?: boolean;
}

export default function QuizSelectBox({
  sectionList,
  handleSectionChange,
  handleChapterChange,
  isDisabled = false,
}: QuziSelectProps) {
  const { selectedSection, selectedChapter, chapterList } = useQuizStore();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <div className="flex flex-col gap-2">
        <div className="font-bold text-lg">섹션 선택</div>
        <select
          onChange={handleSectionChange}
          className={`bg-white min-w-[200px] disabled:bg-neutral-200 disabled:appearance-none input-style py-4 px-2 sm:p-4 text-sm sm:text-base`}
          value={selectedSection}
          disabled={isDisabled}
        >
          <option value="ALL">전체보기</option>
          {sectionList!.map((section) => (
            <option key={section.id}>{section.title}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-lg">챕터 선택</div>
        <select
          onChange={handleChapterChange}
          className="input-style min-w-[200px] bg-white py-4 px-2 sm:p-4 text-sm sm:text-base"
          value={selectedChapter}
        >
          <option value="ALL">전체보기</option>
          {chapterList!.map((chapter) => (
            <option key={chapter.id}>{chapter.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
