export const getData = async() => {
  try {
    const response = await fetch('/src/mocks/data.json');
    const data = await response.json();
    return data.library;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};
