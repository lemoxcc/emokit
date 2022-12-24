import { isString, isUndefined } from './utils'

/**
 * 
 * @param bytes  
 * @param decimalPlaces 
 * @param unit optional, if not, adaptive
 */
function bytesConvert(bytes: number | string, decimalPlaces: number, unit?: number) {
  const symbols = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  if(isString(bytes)) {
    bytes = +bytes
    if(isNaN(bytes)) {
      throw new TypeError('bytes support only numeric and numeric strings')
    }
  }
  
  let index
  const { floor, log, pow, round } = Math
  if(isUndefined(unit)) {
    let exp = floor(log(bytes) / log(2))
    if(exp < 1) {
      exp = 0
    }
    index = floor(exp / 10)
  } else {
    index = unit
  }

  bytes /= pow(2, 10 * index)
  
  bytes = round((bytes + 'e' + decimalPlaces) as any) / pow(10, decimalPlaces)

  return bytes
}

export {
  bytesConvert
}
