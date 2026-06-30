export interface Question {
  id: string;
  text: string;
  scripture?: string;
}

export interface Category {
  id: number;
  name: string;
  color: string;
  questions: Question[];
}

export interface QuestionsData {
  categories: Category[];
}

export interface GameState {
  categoryId: number | null;
  cardIndex: number;
  shuffled: Question[];
}
