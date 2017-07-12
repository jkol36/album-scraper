import { 
  findArtistUrl,
  queryForArtistUrl, 
  saveAlbum } from './helpers'
import { 
  parseForArtistUrl, 
  parseForAlbum
} from './parser'
import { queryRef } from './config'

const start = () => {
  console.log('listening for queries')
  queryRef.remove()
  queryRef.on('child_added', s => {
    console.log(s.val())
    findArtistUrl(s.val())
    .then(parseForArtistUrl)
    .then(findArtistUrl)
    .then(queryForArtistUrl)
    .then(parseForAlbum)
    .then(album => saveAlbum(album, s.val()))
    .catch(err => err)
    
  })
}

start()