import firebase from 'firebase';

try {
  var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID
      };
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("API_KEY:", process.env.API_KEY);
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;


// import firebase from 'firebase';
//
// try {
//   var config = {
//       apiKey: "AIzaSyAKq5E2MhzVLDDKS9LhebYMKjjyPLUemAg",
//       authDomain: "todo-app-adbd8.firebaseapp.com",
//       databaseURL: "https://todo-app-adbd8.firebaseio.com",
//       projectId: "todo-app-adbd8",
//       storageBucket: "todo-app-adbd8.appspot.com",
//       messagingSenderId: "180396460750"
//     };
//     firebase.initializeApp(config);
// } catch (e) {
//
// }
// console.log("NODE_ENV:", process.env.NODE_ENV);
// console.log("API_KEY:", process.env.API_KEY);
//
// export var firebaseRef = firebase.database().ref();
// export default firebase;


//Remove any spaces in .env files
//Make sure the config folder is at the right location
