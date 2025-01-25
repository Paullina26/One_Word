export interface Word {
  _id: string;
  userId: string;
  basicWord: string;
  transWord: string;
  addLang: number;
  status: number;
  createdDate: string;
  updatedDate: string;
  daysRepeat: number;
  __v: number;
}

export interface RepeatWordsProps {
  daysRepeat: number;
}

export interface PointsProps {
  numberOfWords: number;
}
