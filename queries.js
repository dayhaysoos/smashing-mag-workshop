import Prismic from '@prismicio/client';
import { Client } from './prismic';

async function fetchDocs(page = 1, routes = []) {
  const response = await Client().query('', { pageSize: 100, lang: '*', page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...new Set(allRoutes)];
}

export const queryRepeatableDocuments = async (filter) => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter(filter);
};

export const productPageQuery = async () => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter((doc) => doc.type === 'product').slice(0, 5);
};

export const queryDocsByType = async (type) => {
  try {
    const result = await Client().query(
      Prismic.Predicates.at('document.type', type)
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const queryDocByUID = async (uid) => {
  try {
    const result = await Client().getByUID('product', uid);
    return result;
  } catch (error) {
    console.log('error', error);
  }
};
