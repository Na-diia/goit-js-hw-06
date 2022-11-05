const allItems = document.querySelectorAll('.item');
console.log('Number of categories:', allItems.length);


allItems.forEach(elem => {
    console.log('Category:', elem.querySelector('h2').textContent);
    console.log('Elements:', elem.querySelectorAll('li').length);
},);