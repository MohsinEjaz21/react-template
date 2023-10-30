import { axios } from '@src/utils/axios';
function filterWords(payload): Promise<any> {
  return axios
    .GET<any>({ url: `/filter/${payload}` })
    .then((response) => response?.data)
}

export const MockService = {
  filterWords,
};