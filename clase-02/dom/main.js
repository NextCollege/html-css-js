async function getData() {
    const response = await fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/GIN.geo.json');

    const data = await response.json();

    console.log(data)
}

const title = document.createElement('h1');
title.textContent = 'Hello World';

const contentElements = document.querySelectorAll('.content')

function createCard(text, footerText) {
  const card = document.createElement('div')

  card.classList.add('card')

  card.innerHTML = `
    <div class="card-content">
      <h2>Card Title</h2>
      <p>${text}</p>
      <hr>
      <p>${footerText}</p>
      <button>Click me</button>
    </div>
  `

  const cardButton = card.querySelector('button')
  cardButton.addEventListener('click', () => {
    getData()
  })

  return card
}

const idElement = document.getElementById('my-element')

const layout = document.querySelector('.layout')

const helloWorldCard = createCard('Hello Wooooooorld!', 'Soy el footer')

const paragraph = document.querySelector('.content')

layout.appendChild(helloWorldCard)

console.log(paragraph.dataset)