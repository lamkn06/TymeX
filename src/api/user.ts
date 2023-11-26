import axios from 'axios';
import { User, UserDetail } from '../types/user';

const BASE_URL = 'https://dummyjson.com';

export const getList = (
  query: string,
): Promise<{ data: { users: User[] } }> => {
  return axios.get(`${BASE_URL}/users${query}`);
};

export const getDetail = (id: number): Promise<{ data: UserDetail }> => {
  return axios.get(`${BASE_URL}/users/${id}`);
};
