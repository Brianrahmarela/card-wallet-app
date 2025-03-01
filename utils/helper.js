export const formatExpiredAt = (expiredAt) => {
  if (!expiredAt) return "";
  const date = new Date(expiredAt);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${year}`;
};
