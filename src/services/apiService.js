export const userDataService = {
  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 2, name: "Tom" },
          { id: 3, name: "Don Pedro" },
          { id: 4, name: "Sir El Camino" },
        ]);
      }, 1000);
    });
  },
};
