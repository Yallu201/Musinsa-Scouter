import app from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
import firebaseConfig from 'secret/firebaseConfig';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.analytics = app.analytics();
    this.db = app.database();
  }
  ranking = date => this.db.ref(`ranking/${date}`);
  product = serialNo => this.db.ref(`products/${serialNo}`);
  brands = () => this.db.ref('brands/');
}

const fb = new Firebase();
export default fb;
