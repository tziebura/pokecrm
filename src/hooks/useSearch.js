export const useSearch = (collection, phrase, fieldsToMatch) => {
  let filteredCollection;

  if(phrase) {
    filteredCollection = collection.filter((item) => {
      let isFound = false;

      for(let i = 0; i < fieldsToMatch.length; i++) {
        const field = fieldsToMatch[i];

        if(item[field].toLowerCase().includes(phrase.toLowerCase())) {
          isFound = true;
          break;
        }
        
      }

      return isFound;
    });
  }
  else {
    filteredCollection = collection;
  }
  
  return filteredCollection;
}
