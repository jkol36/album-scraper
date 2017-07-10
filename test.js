import { expect } from 'chai'
import { fetchAlbum } from './helpers'
import { findAlbum } from './parser'


describe('album scraper', () => {
  let html 
  it('should find album info for artist', done => {
    fetchAlbum('kanye west')
    .then(res => {
      expect(res).to.not.be.undefined
      console.log(res)
      html = res
      done()
    })
  })
  it('should find album ', done => {
    findAlbum(html, 'kanye west')
    .then(res => {
      console.log(res)
      done()
    })
  })
  it('should save album', done => {
    findAlbum(html, 'kanye west')
    .then(res => {
      console.log(res)
      done()
    })
  })
})

