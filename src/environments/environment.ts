// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false
}


export const FIREBASE_CONFIG= {
  apiKey: "AIzaSyAqd1KqKCi97UDlNgYV5EfgbxseA891gK8",
  authDomain: "happy-pay-if4a.firebaseapp.com",
  databaseURL: "https://happy-pay-if4a.firebaseio.com",
  projectId: "happy-pay-if4a",
  storageBucket: "happy-pay-if4a.appspot.com",
  messagingSenderId: "531012882795",
  appId: "1:531012882795:web:ac8622a08adcce17fa7c2e",
  measurementId: "G-1XLVH54D1N"
}

export const snapshotToArray= snapshot => {
  let returnarr =[]
  snapshot.forEach(element => {
    let item = element.val();
    let key = element.key;
    returnarr.push(item);
  });
  return returnarr;
}


export default FIREBASE_CONFIG
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
