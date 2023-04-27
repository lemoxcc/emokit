
function pick<T extends object, K extends keyof T>(source: T, keys?: Iterable<K>, forced?: boolean) {
  if (!keys) return { ...source }
  const result = {} as Pick<T, K>
  for (const key of keys) {
    if (forced || key in source) result[key] = source[key]
  }
  return result
}

export {
  pick
}
