import firebaseAdmin from 'firebase-admin'
global.Promise = require('bluebird')

const serviceAccount = require('./serviceAccount.json')
export const headers = {
  'Pragma': 'no-cache',
  'Accept-Encoding': 'gzip, deflate, sdch',
  'Accept-Language': 'en-US,en;q=0.8,sv;q=0.6',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Referer': 'http://stublr.com/start-page/',
  'Connection': 'keep-alive',
  'Cache-Control': 'no-cache',
  'Cookie': 'wordpress_logged_in_01b4192195561109f357f21a219b3ba9=Centernj%7C1498251111%7CsO1eEZUlRgjJtlEa5rBS9j4Yi7KQUyMJIMIvoshhTjf%7C8f69fe65f02cb259dd7b6d979b7c8e75f5d266cb61431b37af66aff9f6cccb62; wordfence_verifiedHuman=c7191ed2ec; _ga=GA1.2.1106831229.1498164685; _gid=GA1.2.1771350323.1498164685; wfvt_477330341=594c312e6fccf'
};
export const firebase = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://ticketlynx-5a17f.firebaseio.com"

})

export const queryRef = firebase.database().ref('queries')
export const albumRef = firebase.database().ref('albums')