
// function insertButtons(drinks) {
//     let output = ""; 
//     drinks.forEach(
//         drink => {
//             output += `
//             <button data-name=${drink.name} id=${drink.name} value="${drink.price}"> ${drink.name}(${drink.price}원, 재고수${drink.stock})</button>
//             `;
//         }
//     ); 
//     console.log(output);
//     document.querySelector("#drinks").innerHTML = output;
// }

// const response =  fetch("drinks.json");

// response
// .then(response => response.json())
// .then(insertButtons)
// .catch(err => console.log(err)); 

const drinkBox = document.querySelector("#drinks");

const drinks = [
    {
        "name" : "코카콜라",
        "price" : 700,
        "stock" : 5,
    },
    {
        "name" : "오렌지주스",
        "price" : 1200,
        "stock" : 5,
    },
    {
        "name" : "커피",
        "price" : 500,
        "stock" : 5,
    },
    {
        "name" : "물",
        "price" : 700,
        "stock" : 5,
    },
    {
        "name" : "옥수수 수염차",
        "price" : 1200,
        "stock" : 5,
    },
    {
        "name" : "밀키스",
        "price" : 700,
        "stock" : 5,
    },
    {
        "name" : "트래비",
        "price" : 1000,
        "stock" : 5,
    },
    {
        "name" : "미에로화이바",
        "price" : 1700,
        "stock" : 5,
    }
];

let output = ""; // html용 

    drinks.forEach(
        drink => {
            output += `
            <button name=${drink.name} value=${drink.price} data-stock=${drink.stock}> ${drink.name}(${drink.price}원, 재고수${drink.stock})</button>
            `;
        }
    ); 
    
    drinkBox.innerHTML = output;




const machineButton  = document.querySelectorAll(".moneyButtons > button");

const insertInput = document.querySelector("#inputMoney");

const command = document.querySelector(".command");

const myWallet = document.querySelector("#myMoney");

const drinkButton = document.querySelectorAll("#drinks > button");
// const drinks = document.querySelector("#drinks");

const machineMoney = document.querySelector("#machine");

let insertMoney = 0; //투입금액

let drinkPriceSum = 0; // 음료 총액

let machineCapital = 1000; // 자판기 총 잔액

let myWalletCoin = 10000;

machineMoney.setAttribute("value", machineCapital);

insertInput.setAttribute("value", 0);

// drinks.addEventListener(
//     "click",
//     (e) => {
//         console.log(e.target.dataset.name);
//     }
// );

myWallet.setAttribute("value", myWalletCoin);


for(let i = 0; i < drinkButton.length; i++){
    if (drinkButton[i].value > insertMoney) {
        drinkButton[i].setAttribute("disabled", "true");
    }
}


[].forEach.call(machineButton, (machineButton) => { // 돈 투입
    machineButton.addEventListener("click", () => {

        let myMoney = 0;

        myMoney = parseInt(machineButton.value);

        myWalletCoin -= myMoney;

        if(myWalletCoin < 0){
            alert("돈이 없어요!");
            killInsertButton();
            return;
        }

        console.log();

        insertMoney += parseInt(machineButton.value);

        insertInput.setAttribute("value", insertMoney);

        for(let i = 0; i < drinkButton.length; i++){
            if (drinkButton[i].value <= insertMoney){
                drinkButton[i].setAttribute("class", "yellow");
                 drinkButton[i].removeAttribute("disabled");
            } 
            if (drinkButton[i].value > insertMoney) {
                drinkButton[i].setAttribute("disabled", "true");
            }
        }

        myWallet.setAttribute("value", myWalletCoin);

    }); 
});

    const drinkBtn = document.querySelectorAll("#drinks > button");



    [].forEach.call(drinkBtn, (drinkBtn) => { // 음료 뽑기
        drinkBtn.addEventListener("click", () => {

        command.innerText += `${drinkBtn.name} 을/를 선택하셨습니다. 가격: ${drinkBtn.value} \n`;

           drinkPriceSum += parseInt(drinkBtn.value);

           drinkBtn.dataset.stock -= 1;

           drinkBtn.innerHTML = `<button name=${drinkBtn.name} value=${drinkBtn.value} data-stock=${drinkBtn.dataset.stock}> ${drinkBtn.name}(${drinkBtn.price}원, 재고수${drinkBtn.dataset.stock})</button>`;

           drinkBtn.setAttribute("data-stock", drinkBtn.dataset.stock);

           if (drinkBtn.dataset.stock <= 0) {
            return alert(`${drinkBtn.name}의 재고가 모두 소진되었어요!`);
           }
          

           insertInput.setAttribute("value", insertMoney - drinkPriceSum);

           insertMoney -= drinkPriceSum;

           machineCapital += drinkPriceSum;
           
           
           machineMoney.setAttribute("value", machineCapital);

           for(let i = 0; i < drinkButton.length; i++){
            if (drinkButton[i].value <= insertMoney){
                 drinkButton[i].removeAttribute("disabled");
            } 
            if (drinkButton[i].value > insertMoney) {
                drinkButton[i].setAttribute("disabled", "true");
                drinkButton[i].removeAttribute("class");
            }
        }

           if(insertMoney < 500){
            command.innerText += `투입한 돈을 다 썼어요. 돈을 더 투입하세요. \n`;
            killDrinkButton();
           }

           drinkPriceSum = 0;
            
        })
    });

    function killDrinkButton() {
        for (let i = 0; i < drinkButton.length; i++){
            drinkButton[i].setAttribute("disabled", true);
        }
    } 

    function killInsertButton() {
        for (let i = 0; i < machineButton.length; i++){
            machineButton[i].setAttribute("disabled", true);
        }
    }


// function Drinks(name, price, stock) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
// }

// const coke = new Drinks('코카콜라', 700, 5);
// const orange = new Drinks('오렌지주스', 1200, 5);
// const coffee = new Drinks('커피', 500, 5);
// const water = new Drinks('물', 700, 5);
// const corn = new Drinks('옥수수수염차', 1200, 5);
// const milkiss = new Drinks('밀키스', 700, 5);
// const travi = new Drinks('트래비', 1000, 5);




