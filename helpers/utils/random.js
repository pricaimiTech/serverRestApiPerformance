export function getRandomNumber(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

export function getObjectList(objList) {
  const indice = getRandomNumber(0, objList.length);
  return objList[indice];
}
