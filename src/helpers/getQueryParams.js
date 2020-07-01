export const getQueryParams = location => {
  let queryString = location.search;

  if(!queryString) {
    return {};
  }

  queryString = queryString.replace('?', ''); // get rid of the ?

  let queryObject = {};
  queryString.split('&').forEach(item => {
    const [name, value] = item.split('=');

    queryObject[name] = value;
  });

  return queryObject;
}