import firebase from 'firebase';

try {
  var config = {
        apiKey: "AIzaSyCIpkHu4nmsHKZrKPfn8FerjpuR0jG7qUk",
        authDomain: "react-redux-todo-app-111b1.firebaseapp.com",
        databaseURL: "https://react-redux-todo-app-111b1.firebaseio.com",
        projectId: "react-redux-todo-app-111b1",
        storageBucket: "react-redux-todo-app-111b1.appspot.com",
        messagingSenderId: "384766511940"
      };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
