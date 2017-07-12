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

export const parseForArtistUrl = html => {
  console.log('got html', html)
  return new Promise((resolve, reject) => {
     let $ = cheerio.load(html)
     let resultItems = $('#result-artists')
     .find('.result-item')
     .find('a')
     .toArray()
     resolve($(resultItems[0]).attr('href'))

  })
}

export const parseForAlbum = html => {
  let $ = cheerio.load(html)
  let resultItem = $('#result-albumreviews')
    .find('.result-item')
    .first()
  let albumImage = $(resultItem)
    .find('.review')
    .find('.artwork')
    .find('img')
    .attr('src')
  let releaseDate = $(resultItem)
      .find('.pub-date')
      .text()
  let name = $(resultItem)
  .find('.title')
  .text()

  name = name.split(/\r?\n/).join('')
  return Promise.resolve({
    name,
    albumImage,
    releaseDate
  })
}