export const userDataService = {
    get() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(['Tom', 'Don Pedro', 'si Muchacho']);
            }, 1000);
        })
    }
}
