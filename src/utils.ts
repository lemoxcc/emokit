function isString(val: any): val is string {
  return typeof val === 'string'
}

function isUndefined(val: any): val is undefined {
  return typeof val === 'undefined'
}

export {
  isString,
  isUndefined
}
