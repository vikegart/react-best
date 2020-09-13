export const userDataService = {
  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 2, name: "Tom" },
          { id: 3, name: "Don Pedro" },
          { id: 4, name: "Sir El Camino" },
          { id: 5, name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
        ]);
      }, 1000);
    });
  },
};
