function getExt(filename: string): string {
  return filename.split('.').pop()?.toLocaleLowerCase() as string
}

function checkFilename(filename: string, list: string[]) {
  return list.includes(getExt(filename))
}

function isImage(filename: string) {
  return checkFilename(filename, ['png', 'jpeg', 'jpg', 'gif', 'bmp', 'wbep'])
}

export {
  getExt,
  checkFilename,
  isImage
}
