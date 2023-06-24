export interface NewsBody {
  title: string;
  text: string;
  picture_news?: string | null;
}

export interface News extends NewsBody {
  id: number;
}
