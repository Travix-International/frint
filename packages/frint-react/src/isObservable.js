/**
 * Check if given `obj` is an Observable or not.
 *
 * @TODO: this function needs to be more proper and reliable
 *
 * @param any obj
 * @return boolean
 */
export default function isObservable(obj) {
  if (obj && typeof obj.subscribe === 'function') {
    return true;
  }

  return false;
}
