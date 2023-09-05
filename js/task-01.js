    let items = document.querySelectorAll(".item");

    let totalItems = items.length;
    console.log("Número de categorías", totalItems);


items.forEach((categoryItem) => { 
    const categoryName = categoryItem.querySelector('h2').textContent;
    const numArticles = categoryItem.querySelectorAll('ul li').length;
    console.log ("Categoría:", categoryName )
    console.log ("Elementos:", numArticles)
})
