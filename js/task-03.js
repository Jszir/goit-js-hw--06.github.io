const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const imagesMargin = images.map(image => `
    <li class="gallery-item">
        <img src="${image.url}" alt="${image.alt}">
    </li>
`).join('');

galleryList.insertAdjacentHTML('beforeend', imagesMargin);

function changeSize() { 
  const list = document.querySelector(".gallery")
  const pics = document.querySelectorAll(".gallery-item img")

  list.style.display =  'flex'
  list.style.justifyContent =  'center'
  list.style.position= 'relative'
  list.style.listStyle= 'none'

  pics.forEach(img => {
    img.style.width = '650px'; 
    img.style.height = '380px'; 
    img.style.marginRight = '30px'; 
  });


} 
changeSize()



