

const menuTags = document.querySelectorAll('.menu_a');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const boxes = document.querySelector('.conteiner_menu');


class Menu {
    async getProducts (x) {
        try {
            let result = await fetch(`/apis/${ x }.json`);
            let data = await result.json();
            let products = data.items;
            products = products.map(item => {
                const { title, price, discription } = item.fields
                return { title, price, discription }
            })
            return products
        } catch (err) {
            console.log(err);
        }
    }
}


class UI {
    async displayProducts (products) {
        let result1 = '';
        let result2 = '';


        for (let i = 0; i <= products.length - 1; i++) {
            if (i % 2 === 0) {
                result1 += `<h1 class='menu_heading'>${ products[i].title } 
                 <span class='menu_price'> ${products[i].price }</span>
                </h1> 
            <p class='menu_desc'>${products[i].discription }</p>`
                box1.innerHTML = result1
            }
            else {
                result2 += `<h1 class='menu_heading'>${ products[i].title } 
                 <span class='menu_price'> ${products[i].price }</span>
                </h1> 
            <p class='menu_desc'>${products[i].discription }</p>`
                box2.innerHTML = result2

            }

        }
    }
}



menuTags.forEach(el => el.addEventListener('click', function (e) {
    let x = this.getAttribute('href').split('').slice(1).join('')
    let products = new Menu();
    let ui = new UI();
    products.getProducts(x).then(x => ui.displayProducts(x))
    boxes.classList.remove('anim')
    void boxes.offsetWidth
    boxes.classList.add('anim')

}))