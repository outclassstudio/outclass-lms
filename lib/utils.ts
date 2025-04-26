export function dateFormatter(date: Date): string {
  const year = date.getFullYear();
  let month = `${date.getMonth() + 1}`;
  if (date.getMonth() + 1 < 10) {
    month = `0${month}`;
  }
  let day = `${date.getDate()}`;
  if (date.getDate() < 10) {
    day = `0${day}`;
  }
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
