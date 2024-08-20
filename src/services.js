export const get = (url) => {
    const promise = new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  };
  