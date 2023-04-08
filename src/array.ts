function sortByProperty<T>(arr: T[], prop: keyof T, asc = true): T[] {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  if (typeof prop !== 'string' || prop.trim() === '') return arr;
  
  let sortedArr = arr.slice();
  
  sortedArr.sort((a, b) => {
    let aProp = a[prop];
    let bProp = b[prop];
    if (typeof aProp === 'string') aProp = aProp.toLowerCase();
    if (typeof bProp === 'string') bProp = bProp.toLowerCase();
    if (aProp < bProp) return asc ? -1 : 1;
    if (aProp > bProp) return asc ? 1 : -1;
    return 0;
  });
  
  return sortedArr;
}

function pluck<T extends { [key: string]: any }, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key])
}

export {
  sortByProperty,
  pluck
}
