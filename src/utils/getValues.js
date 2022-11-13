/**
 *
 * @param {ref.current} element
 * @returns {Number} element's style.left in px
 */
export const getLeft = (element) => {
  const left = parseInt(element.style.left.replace(/\D/g, ""))
    ? parseInt(element.style.left.replace(/\D/g, ""))
    : 0;
  return left;
};
/**
 *
 * @param {ref.current} element
 * @returns {Number} element's style.top in px
 */
export const getTop = (element) => {
  const top = parseInt(element.style.top.replace(/\D/g, ""))
    ? parseInt(element.style.top.replace(/\D/g, ""))
    : 0;
  return top;
};
