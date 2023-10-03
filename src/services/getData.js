export const getData = async() => {
  try {
    const response = await fetch(
      new URL('../mocks/data.json', import.meta.url)
    );
    const data = await response.json();
    return data.library;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};
