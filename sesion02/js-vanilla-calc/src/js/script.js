
const title = document.querySelector('h1')
const n1 = document.querySelector('#primer-numero')
const n2 = document.querySelector('#segundo-numero')
const sumBt = document.querySelector('#sum-button')
const diffBt = document.querySelector('#diff-button')
const prodBt = document.querySelector('#prod-button')
const divBt = document.querySelector('#div-button')
const resultNode = document.querySelector('#result')


// sum operation
sumBt.addEventListener('click', function () {
  const n1Int = parseInt(n1.value)
  const n2Int = parseInt(n2.value)

  const result = n1Int + n2Int
  console.log(result)

  //creacion de nodo <span> {resultado} </span>
  const textContent = document.createTextNode(result)
  const spanElement = document.createElement('span')
  spanElement.appendChild(textContent)

  if (resultNode.childNodes.length > 3) {
    resultNode.removeChild(resultNode.childNodes[3])
  }

  resultNode.appendChild(spanElement)

  return result

})

//diff operation
diffBt.addEventListener('click', function () {
  const n1Int = parseInt(n1.value)
  const n2Int = parseInt(n2.value)

  const result = n1Int - n2Int
  console.log(result)

  //creacion de nodo <span> {resultado} </span>
  const textContent = document.createTextNode(result)
  const spanElement = document.createElement('span')
  spanElement.appendChild(textContent)

  if (resultNode.childNodes.length > 3) {
    resultNode.removeChild(resultNode.childNodes[3])
  }

  resultNode.appendChild(spanElement)

  return result

})

prodBt.addEventListener('click', function () {
  const n1Int = parseInt(n1.value)
  const n2Int = parseInt(n2.value)

  const result = n1Int * n2Int
  console.log(result)

  //creacion de nodo <span> {resultado} </span>
  const textContent = document.createTextNode(result)
  const spanElement = document.createElement('span')
  spanElement.appendChild(textContent)

  if (resultNode.childNodes.length > 3) {
    resultNode.removeChild(resultNode.childNodes[3])
  }

  resultNode.appendChild(spanElement)

  return result

})

divBt.addEventListener('click', function () {
  const n1Int = parseInt(n1.value)
  const n2Int = parseInt(n2.value)

  const result = n1Int / n2Int
  console.log(result)

  //creacion de nodo <span> {resultado} </span>
  const textContent = document.createTextNode(result)
  const spanElement = document.createElement('span')
  spanElement.appendChild(textContent)

  if (resultNode.childNodes.length > 3) {
    resultNode.removeChild(resultNode.childNodes[3])
  }

  resultNode.appendChild(spanElement)

  return result

})



//JS Mouese Events
title.addEventListener('click',
  function () { console.log('click sobre el titulo') })