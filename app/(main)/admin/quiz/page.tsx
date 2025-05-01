import QuizListForm from "@/components/admin/quiz/quiz-list-form";
import { getAllQuizzes, getAllSectionChapter } from "./actions";

export default async function QuizAdmin() {
  const sectionList = await getAllSectionChapter();
  const quizList = await getAllQuizzes();

  return <QuizListForm sectionList={sectionList} quizListProp={quizList} />;
}
