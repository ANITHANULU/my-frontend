function myfun() {
    let fruits = [{ name: "Strawberry", cost: "Rs.30" },
         { name: "Guava", cost: "Rs.20" },
         {name:"pomogranite",cost:"Rs.40"},
         {name:"mango",cost:"Rs.100"},
         {name:"Apple",cost:"Rs.200"},
         {name:"Grapes",cost:"Rs.300"}];
    let myres = fruits.map((val) => {
        return (`
            <div class="inner">
                <div class="card1">
                    <div class="img1"></div>
                    <div class="content1">
                        <h3>${val.name}</h3>
                        <p>${val.cost}</p>
                        <button>Buy Now</button>

                    </div>
                    </div>
                <div class="card2">
                <div class="img2"></div>
                <div class="content2">
                 <h3>${val.name}</h3>
                <p>${val.cost}</p>
                  <button>Buy Now</button>
                </div>
                </div>
            <div class="card3">
                <div class="img3"></div>
                <div class="content3">
                 <h3>${val.name}</h3>
                <p>${val.cost}</p>
                 <button>Buy Now</button>
                </div>
            </div>
        </div>
                    <div class="inner1">
            <div class="card4">
                <div class="img4"></div>
                <div class="content4">
                <h3>${val.name}</h3>
                <p>${val.cost}</p> <button>Buy Now</button></div>  
            </div>
            <div class="card5">
                <div class="img5"></div>
                <div class="content5">
                <h3>${val.name}</h3>
                <p>${val.cost}</p>
                 <button>Buy Now</button></div>
            </div>
            <div class="card6">
                <div class="img6"></div>
                <div class="content6">
                <h3>${val.name}</h3>
                <p>${val.cost}</p>
                  <button>Buy Now</button></div>
            </div>
            </div>
    `);
    }).join(''); 
    document.getElementById('container').innerHTML = myres;
}
myfun();