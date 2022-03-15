export default function useTryCatch(func: Function) {
  try {
    let res = func();
    if (res) {
      return res;
    }
  } catch (err) {
    return err;
  }
}
