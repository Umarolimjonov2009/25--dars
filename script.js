const box=document.getElementById("box");
const cardsOta=document.getElementById("cardsOta");
const select=document.getElementById("select");
const input=document.getElementById("input");
const loading=document.getElementById("loading");
let odamlar;

async function getData(){
    const res = await fetch("https://randomuser.me/api/?results=100");
    const data = await res.json();
    console.log(data.results);
    odamlar=data.results;
    ish(data.results);
    loading.style.display="none";
    box.style.display="block";
}



function ish(odam){
    cardsOta.innerHTML="";
    odam.map(o=>{
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML=`
          <img src="${o.picture.large}" alt="">
                    <h1 id="name">${o.name.first} ${o.name.last}</h1>
                    <p id="age">Age: ${o.dob.age}</p>
                    <p id="number">
                        Telefon:${o.phone} </p>
                    <p id="email">Email:${o.email} </p>
                    <p id="manzil">Location: ${o.location.country}, ${o.location.city}
                    </p>

        `
        cardsOta.appendChild(div)
    })
}

setTimeout(getData,2000);


select.addEventListener("change",()=>{
    const d= odamlar.sort((o1,o2)=> o1.dob.age-o2.dob.age);
    ish(d);
});

input.addEventListener("input",()=>{
    const b=o.filter(r=> r.name.toLowerCase().includes(input.value,toLowerCase()));
   ish(b)
  })