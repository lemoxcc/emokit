function getExt(filename: string): string {
  return filename.split('.').pop()?.toLocaleLowerCase() as string
}

function checkFilename(filename: string, list: string[]) {
  return list.includes(getExt(filename))
}

export {
  getExt,
  checkFilename
}
