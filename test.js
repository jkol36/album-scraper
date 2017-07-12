import { expect } from 'chai'
import { 
  fetchAlbum, 
  findArtistUrl,
  queryForArtistUrl
   } from './helpers'
import { 
  findAlbum, 
  parseForArtistUrl, 
  parseForAlbum
} from './parser'


describe('album scraper', () => {
  let html 
  let artistUrl
  let artistHtml
  it('should find artist', done => {
    let artist = 'kanye west'
    findArtistUrl(artist)
    .then(res => {
      console.log(res)
      expect(res).to.not.be.undefined
      html = res
      done()
    })
  })
  it('should find artist url', done => {
    expect(html).to.not.be.undefined
    parseForArtistUrl(html)
    .then(url => {
      expect(url).to.not.be.undefined
      artistUrl = url
      done()
    })
  })
  it('should query artist url', done => {
    expect(artistUrl).to.not.be.undefined
    console.log(artistUrl)
    queryForArtistUrl(artistUrl)
    .then(res => {
      expect(res).to.not.be.undefined
      artistHtml = res
      done()
    })

  })
  it('should parse for album', done => {
    expect(artistHtml).to.not.be.undefined
    parseForAlbum(artistHtml)
    .then(album => {
      expect(album).to.not.be.undefined
      console.log('got album', album)
      done()
    })
  })
  // it('should find album info for artist', done => {
  //   fetchAlbum('kanye west')
  //   .then(res => {
  //     expect(res).to.not.be.undefined
  //     console.log(res)
  //     html = res
  //     done()
  //   })
  // })
  // it('should find album ', done => {
  //   findAlbum(html, 'kanye west')
  //   .then(res => {
  //     console.log(res)
  //     done()
  //   })
  // })
  // it('should save album', done => {
  //   findAlbum(html, 'kanye west')
  //   .then(res => {
  //     console.log(res)
  //     done()
  //   })
  // })
})

