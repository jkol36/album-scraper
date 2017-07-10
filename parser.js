import cheerio from 'cheerio'

export const findAlbum = (html, artist) => {
  return new Promise((resolve, reject) => {
    let $ = cheerio.load(html)
    let name = $('._B5d').text()
    let albumImage = $(`img[alt="Image result for ${artist} new album"]`).attr('src')
    let releaseDate = $($('._tA').toArray()[2]).text()
    resolve({
      albumImage,
      name,
      releaseDate
    })
  })
}