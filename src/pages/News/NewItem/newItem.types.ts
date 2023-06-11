import { News } from 'store/news/news.types';

export interface NewItemProps extends News {
  isFullVersion?: boolean;
}
