let addButtons = document.querySelectorAll('.pros-btn');

addButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        let name = button.getAttribute('data-name');
        let price = button.getAttribute('data-price');
        let img = button.getAttribute('data-img');

        item(name, price, img);
    });
});

let twodiv = document.querySelector('.offf');
let twodiv2 = document.querySelector('.offf1')

let badge = document.querySelector('.badge');
let count = 0;
let prices = [];
let sum
let p 
let rate = document.querySelector('.price')

    let total = document.createElement('p')
 

function item(name, price, img) {
    p=price

    let div = document.createElement('div');
    let para = document.createElement('p')

    // twodiv.style.backgroundColor="green"
    // twodiv2.style.backgroundColor='red'
    twodiv2.style.width="35%"
    // twodiv2.style.height="30%"
    twodiv.style.width="60%"
    badge.innerHTML = ++count;
    
    twodiv.style.display = "flex";
    twodiv.style.flexWrap = "wrap";
    twodiv.style.gap = "20px";
    div.innerHTML = `
    <div class="row row-cols-1 row-cols-sm-2 mt-5">
      <div class="col">
        <div class="card rounded bg-dark text-white" style="width: 14rem; border-radius: 10px; padding: 6px; margin:10px">
            <button type="button" class="btn-close btn-close-white close" aria-label="Close"></button>
            <img src="${img}" alt="" style="width: 100%; height: 14rem;">
            <div class="card-title bg-dark">
                <p class="p" style="word-wrap: break-word;">${name}</p>
                <p class="p1">₹${price}</p>
            </div>
        </div>
      </div>
    </div>
    `;
    
console.log(price)
console.log(name,'name')
rate.innerHTML=""
    prices.push(parseFloat(price));
    console.log(prices)
     sum = prices.reduce((total, current) => total + current, 0);
    console.log(sum, 'sum');
    
    para.innerHTML = `${name}&nbsp;&nbsp;&nbsp;₹<p class="span" style="display:"inline">${price}</p>`;
    total.innerHTML=`Total:₹${sum}`

    twodiv.appendChild(div);
    twodiv2.appendChild(para);
    twodiv2.appendChild(total)

    // Add event listener to the close button
    let closeButton = div.querySelector('.close');
    closeButton.addEventListener('click', function() {
        close(div);
    });
}

function close(div) {
    console.log("clicked");
    twodiv.removeChild(div);
    badge.innerHTML = --count;
   
}
