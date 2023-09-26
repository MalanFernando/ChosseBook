export async function getData() {
  const res = await fetch('/src/mocks/data.json');
  const data = await res.json();
  return data;
};
