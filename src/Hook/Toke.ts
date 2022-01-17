export const useToken = () => {
  const token: string =
    JSON.parse(localStorage.getItem('user') || '{}').token || '';
  return token;
};
