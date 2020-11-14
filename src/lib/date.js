function getDateString() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1; // getMonth() is zero-based
  const dd = today.getDate();

  return [yyyy, (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('');
}
function yesterday() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const yyyy = d.getFullYear();
  const mm = d.getMonth() + 1; // getMonth() is zero-based
  const dd = d.getDate();

  return [yyyy, (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('');
}

export default getDateString;
export { yesterday };
