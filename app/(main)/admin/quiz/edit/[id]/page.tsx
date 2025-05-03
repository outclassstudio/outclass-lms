import EditQuizForm from "@/components/admin/quiz/quiz-edit-form";
import { getOneQuiz } from "../../actions";
import { PageParams } from "@/lib/types/common";

export default async function QuizEditPage({ params }: { params: PageParams }) {
  const { id } = await params;
  const quiz = await getOneQuiz(id);

  return <EditQuizForm quiz={quiz} />;
}
