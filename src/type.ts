import { categoryOption, sortOption } from './constants';

export type Category = '한식' | '중식' | '일식' | '아시안' | '양식' | '기타';
export type Distance = 5 | 10 | 15 | 20 | 30;

export interface Restaurant {
  id: string;
  category: Category;
  name: string;
  distance: Distance;
  description: string;
  link?: string;
}

export interface RestaurantProps {
  info: Restaurant;
}

export type CategoryFilter = typeof categoryOption[number]['value'];
export type SortFilter = typeof sortOption[number]['value'];