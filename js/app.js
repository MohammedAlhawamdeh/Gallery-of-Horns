'use strict'
let images = []
let secondPageImages = []
let imageRendering = document.getElementById('render')
let imageFiltering = document.getElementById('filterFirstPage')
let imageFilteringSecond = document.getElementById('filterSecondPage')
let imageSorting = document.getElementById('sort')
let firstPage = document.getElementById('page1')
let secondPage = document.getElementById('page2')
fetch("../data/page-1.json")
  .then((results) => results.json())
  .then((data) => {
    data.forEach((value) => {
      images.push(value)
    })
    imageFilteringSecond.remove()
    render()
    imageSorting.addEventListener('change', (e) => {
      if (e.target.value === 'Title') {
        let titleCopy = images.slice()
        let sortedTitle = titleCopy.sort(sortedByTitle)
        imageRendering.innerHTML = ''
        sortedTitle.forEach((val) => {
          let imageEl = document.createElement('img')
          imageRendering.appendChild(imageEl)
          imageEl.setAttribute('src', val.image_url)
        })
      } else if (e.target.value === 'Horn') {
        let hornCopy = images.slice()
        let sortedHorn = hornCopy.sort(sortedByHorn)
        imageRendering.innerHTML = ''
        sortedHorn.forEach((val) => {
          let imageEl = document.createElement('img')
          imageRendering.appendChild(imageEl)
          imageEl.setAttribute('src', val.image_url)
        })
      } else if (e.target.value === 'Sort-By-Title / Horn') {
        imageRendering.innerHTML = ''
        render()
      }

    })
  })

fetch('../data/page-2.json')
  .then((results) => results.json())
  .then((data) => {
    data.forEach((val) => {
      secondPageImages.push(val)
    })
  })
function renderSecondPage() {
  secondPageImages.forEach((value) => {
    let imgEl = document.createElement("img");
    imageRendering.appendChild(imgEl);
    imgEl.setAttribute('src', value.image_url)
  });
}
function render() {
  images.forEach((value) => {
    let imgEl = document.createElement("img");
    imageRendering.appendChild(imgEl);
    imgEl.setAttribute('src', value.image_url)
  });
}
secondPage.addEventListener('click', () => {
  imageRendering.innerHTML = ''
  imageFiltering.replaceWith(imageFilteringSecond)
  renderSecondPage()
  imageSorting.addEventListener('change', (e) => {
    if (e.target.value === 'Title') {
      let titleCopy = secondPageImages.slice()
      let sortedTitle = titleCopy.sort(sortedByTitle)
      imageRendering.innerHTML = ''
      sortedTitle.forEach((val) => {
        let imageEl = document.createElement('img')
        imageRendering.appendChild(imageEl)
        imageEl.setAttribute('src', val.image_url)
      })
    } else if (e.target.value === 'Horn') {
      let hornCopy = secondPageImages.slice()
      let sortedHorn = hornCopy.sort(sortedByHorn)
      imageRendering.innerHTML = ''
      sortedHorn.forEach((val) => {
        let imageEl = document.createElement('img')
        imageRendering.appendChild(imageEl)
        imageEl.setAttribute('src', val.image_url)
      })
    } else if (e.target.value === 'Sort-By-Title / Horn') {
      imageRendering.innerHTML = ''
      render()
    }

  })
})
firstPage.addEventListener('click', () => {
  imageRendering.innerHTML = ''
  imageFilteringSecond.replaceWith(imageFiltering)
  render()
  imageSorting.addEventListener('change', (e) => {
    if (e.target.value === 'Title') {
      let titleCopy = images.slice()
      let sortedTitle = titleCopy.sort(sortedByTitle)
      imageRendering.innerHTML = ''
      sortedTitle.forEach((val) => {
        let imageEl = document.createElement('img')
        imageRendering.appendChild(imageEl)
        imageEl.setAttribute('src', val.image_url)
      })
    } else if (e.target.value === 'Horn') {
      let hornCopy = images.slice()
      let sortedHorn = hornCopy.sort(sortedByHorn)
      imageRendering.innerHTML = ''
      sortedHorn.forEach((val) => {
        let imageEl = document.createElement('img')
        imageRendering.appendChild(imageEl)
        imageEl.setAttribute('src', val.image_url)
      })
    } else if (e.target.value === 'Sort-By-Title / Horn') {
      imageRendering.innerHTML = ''
      render()
    }

  })
})
imageFiltering.addEventListener('change', (e) => {
  imageRendering.innerHTML = ''
  images.forEach((val) => {
    if (e.target.value === val.keyword) {
      let imgEl = document.createElement("img");
      imageRendering.appendChild(imgEl);
      imgEl.setAttribute('src', val.image_url)
    } else if (e.target.value === 'Filter-By-Keyword') {
      imageRendering.innerHTML = ''
      render()
    }
  });
})
imageFilteringSecond.addEventListener('change', (e) => {
  imageRendering.innerHTML = ''
  secondPageImages.forEach((val) => {
    if (e.target.value === val.keyword) {
      let imgEl = document.createElement("img");
      imageRendering.appendChild(imgEl);
      imgEl.setAttribute('src', val.image_url)
    } else if (e.target.value === 'Filter-By-Keyword') {
      imageRendering.innerHTML = ''
      render()
    }
  });
})
function sortedByTitle(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}
function sortedByHorn(a, b) {
  if (a.horns > b.horns) {
    return -1;
  }
  if (a.horns < b.horns) {
    return 1;
  }
  return 0;
}

