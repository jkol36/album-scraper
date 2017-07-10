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

export const saveAlbum = (album, artist) => {
  return albumRef.child(artist.split(' ').join('-')).set(album)
}
