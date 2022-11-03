const navItemEl = document.querySelectorAll(`#categories .item`);

console.log(`Number of categories: ${navItemEl.length}`)
for (let category of navItemEl){
    console.log(`Category: ${category.firstElementChild.textContent}`)
    console.log(`Elements: ${category.lastElementChild.children.length}`)
}


