export const usePagination = (items, limit, page = 1) => {
  const paginatorItems = [...items];
  const lastPageNumeric = Math.ceil(paginatorItems.length / limit);

  if(typeof page === 'string') {
    page = parseInt(page);
  }

  if(page > lastPageNumeric) {
    page = lastPageNumeric;
  }

  const start = (page - 1) * limit;
  const end = page * limit;

  const chunk = paginatorItems.slice(start, end);
  
  const firstPage = page !== 1 ? `${window.location.pathname}?page=1&limit=${limit}` : null;
  const nextPage = page !== lastPageNumeric ? `${window.location.pathname}?page=${page + 1}&limit=${limit}` : null;
  const previousPage = page !== 1 ? `${window.location.pathname}?page=${page - 1}&limit=${limit}`: null; 
  const lastPage = page !== lastPageNumeric ? `${window.location.pathname}?page=${lastPageNumeric}&limit=${limit}` : null;
  return { 
    items: chunk,
    limit,
    page,
    navigation: {
      firstPage,
      lastPage,
      nextPage,
      previousPage,
    }
  };
}