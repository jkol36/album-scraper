import { fetchAlbum, saveAlbum } from './helpers'
import { findAlbum } from './parser'
import { queryRef } from './config'

const start = () => {
  console.log('listening for queries')
  queryRef.remove()
  queryRef.on('child_added', s => {
    console.log(s.val())
    fetchAlbum(s.val())
    .then(html => findAlbum(html, s.val()))
    .then(album => saveAlbum(album, s.val()))
    .catch(console.log)
    
  })
}

start()