import Firebase from 'components/firebase/firebase';
export const getRanking = date => {
  return new Promise((resolve, reject) => {
    Firebase.ranking(date).on('value', snapshot => {
      try {
        const ranking = snapshot.val();
        resolve({ data: ranking });
      } catch (e) {
        reject(e);
      }
    });
  });
};

export const getProduct = serialNo => {
  return new Promise((resolve, reject) => {
    Firebase.product(serialNo).on('value', snapshot => {
      try {
        const product = snapshot.val();
        resolve({ data: product });
      } catch (e) {
        reject(e);
      }
    });
  });
};

export const getBrands = input => {
  return new Promise((resolve, reject) => {
    Firebase.brands().on('value', snapshot => {
      try {
        const brands = snapshot.val();
        resolve({ data: brands });
      } catch (e) {
        reject(e);
      }
    });
  });
};
