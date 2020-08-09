'use strict'

let arrayOfObjects = []



function Images(description, horns, image_url, keyword, title) {
    this.description = description
    this.horns = horns
    this.image_url = image_url
    this.keyword = keyword
    this.title = title
    arrayOfObjects.push(this)
}


function render() {

    arrayOfObjects.forEach((val) => {
        let div = document.getElementById('div1')
        let imgEl = document.createElement('img')
        div.appendChild(imgEl)
        imgEl.src = val.image_url
    })
}

removeEventListener

fetch('../data/page-1.json')
    .then(results => results.json())
    .then(data => {
        data.forEach((val) => {
            new Images(val.description, val.horns, val.image_url, val.keyword, val.title)
        })
        render()
        filter()
    })

function filter() {
    let selection = document.getElementById('selection')
    arrayOfObjects.forEach((val) => {
        let optionEl = document.createElement('option')
        selection.appendChild(optionEl)
        optionEl.textContent = `${val.keyword}`
        optionEl.setAttribute('value', `${val.keyword}`)
    })
    let newArray = []
    selection.addEventListener('change', () => {
        document.getElementById('div1').style.display = 'none'
        arrayOfObjects.filter((val) => {
            if (selection.options[selection.selectedIndex].text === val.keyword) {
                let div = document.getElementById('div2')
                let imgEl = document.createElement('img')
                div.appendChild(imgEl)
                imgEl.src = val.image_url
                newArray.push(imgEl.src)
                if (newArray.includes(imgEl.src)) {
                    console.log(newArray)
                }
            }
        })
    })
}