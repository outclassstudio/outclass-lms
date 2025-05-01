import { SectionChapterListType } from "@/app/(main)/admin/quiz/actions";
import { ChapterState } from "./quiz-list-form";

interface QuziSelectProps {
  handleSectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedSection: string;
  sectionList: SectionChapterListType;
  isSectionSelected: boolean;
  handleChapterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  chapterList: ChapterState[];
  selectedChapter: string;
  isDisabled?: boolean;
}

export default function QuizSelectBox({
  handleSectionChange,
  selectedSection,
  sectionList,
  isSectionSelected,
  handleChapterChange,
  chapterList,
  selectedChapter,
  isDisabled = false,
}: QuziSelectProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <div className="flex flex-col gap-2">
        <div className="font-bold text-lg">섹션 선택</div>
        <select
          onChange={handleSectionChange}
          className={`bg-white disabled:bg-neutral-200 disabled:appearance-none input-style py-4 px-2 sm:p-4 text-sm sm:text-base`}
          value={selectedSection}
          disabled={isDisabled}
        >
          <option value="DEFAULT" disabled hidden>
            섹션을 선택해주세요.
          </option>
          <option value="ALL">전체보기</option>
          {sectionList!.map((section) => (
            <option key={section.id}>{section.title}</option>
          ))}
        </select>
      </div>
      {isSectionSelected ? (
        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg">챕터 선택</div>
          <select
            onChange={handleChapterChange}
            className="input-style bg-white py-4 px-2 sm:p-4 text-sm sm:text-base"
            value={selectedChapter}
          >
            <option value="DEFAULT" disabled hidden>
              챕터를 선택해주세요.
            </option>
            <option>전체보기</option>
            {chapterList!.map((chapter) => (
              <option key={chapter.id}>{chapter.title}</option>
            ))}
          </select>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
