export const csvToJSON = (csv: string) => {
  try {
    const lines = csv.split('\n');
    const result = [];

    const headers = lines[0]
      .split('"')
      .join()
      .split(',')
      .filter(el => el !== '');

    for (let i = 1; i < lines.length; i++){
      const obj = {};
      const currentline = lines[i]
        .split('"')
        .join()
        .split(',')
        .filter(el => el !== '');

      for (let j = 0; j < headers.length; j++){
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return result;
  } catch (e) {
    return;
  }
};
