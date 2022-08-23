export const myFind = <T>(array: T[], callback: (element: T) => boolean): T | undefined => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      return array[i];
    }
  }
};
