function getExt(filename: string) {
  return filename.split('.').pop()?.toLocaleLowerCase()
}

export {
  getExt
}
