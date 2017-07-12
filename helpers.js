import agent from 'superagent-bluebird-promise'
import google from 'google'
import {albumRef} from './config'


export const fetchAlbum = (artistName) => {

  return new Promise((resolve, reject) => {
    google(`${artistName} new album`, (err, res) => {
      if(!!err) {
        reject(err)
      }
      console.log(err)
      resolve(res.body)
    })
  })
}

export const findArtistUrl = (artistName) => {
  let url = `http://pitchfork.com/search/?query=${artistName.split(' ').join('%20')}`
  return agent
          .get(url)
          .then(res => res.text)
          .catch(err => err)
}

export const queryForArtistUrl = shortUrl => {
  return agent
          .get(`http://pitchfork.com${shortUrl}`)
          .then(res => res.text)
          .catch(err => err)
}

export const saveAlbum = (album, artist) => {
  return albumRef.child(artist.split(' ').join('-')).push(album)
}
