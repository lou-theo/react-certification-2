import { getFromUrl } from '@/api/api.helper.ts';
import { ApiQuestionModel } from '@models/api/ApiQuestion.model.ts';
import { ApiQuestionListModel } from '@models/api/ApiQuestionList.model.ts';
import { DifficultyLevelEnum } from '@models/DifficultyLevel.enum.ts';
import { QuestionModel } from '@models/Question.model.ts';
import { QuestionOptionModel } from '@models/QuestionOption.model.ts';
import { GenericAbortSignal } from 'axios';

export const fetchQuestionList = async (
  body: { categoryId: string; difficulty: DifficultyLevelEnum },
  options?: {
    abortAxiosSignal?: GenericAbortSignal;
  },
): Promise<QuestionModel[]> => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const numberOfQuestions = parseInt(import.meta.env.VITE_NUMBER_OF_QUESTIONS, 10);
  const apiQuestionListModel: ApiQuestionListModel | undefined = await getFromUrl<ApiQuestionListModel>(
    `${baseUrl}/api.php?amount=${numberOfQuestions}&category=${body.categoryId}&difficulty=${body.difficulty}&type=multiple`,
    options,
  );
  return apiQuestionListModel ? mapApiQuestionListToQuestionModelList(apiQuestionListModel) : [];
};

export const mapApiQuestionListToQuestionModelList = (apiQuestionList: ApiQuestionListModel): QuestionModel[] => {
  return apiQuestionList.results.map((apiQuestion: ApiQuestionModel, index: number) => {
    return mapApiQuestionToQuestionModel(apiQuestion, index.toString());
  });
};

export const mapApiQuestionToQuestionModel = (apiQuestion: ApiQuestionModel, id: string): QuestionModel => {
  const incompleteOptions: Partial<QuestionOptionModel>[] = [
    ...apiQuestion.incorrect_answers.map((incorrectAnswer: string) => {
      return {
        text: incorrectAnswer,
        isAnswer: false,
      };
    }),
    {
      text: apiQuestion.correct_answer,
      isAnswer: true,
    },
  ];

  const options: QuestionOptionModel[] = randomizeArray<Partial<QuestionOptionModel>>(incompleteOptions).map(
    (option: Partial<QuestionOptionModel>, index: number) => {
      return {
        id: index.toString(),
        ...option,
      } as QuestionOptionModel;
    },
  );

  return {
    id,
    text: apiQuestion.question,
    options,
  };
};

const randomizeArray = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};
