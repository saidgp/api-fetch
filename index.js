const url ="https://reqres.in/api/users?delay=3";
const id1 = document.getElementById('id1');
const id2 = document.getElementById('id2');
const id3 = document.getElementById('id3');
const id4 = document.getElementById('id4');
const id5 = document.getElementById('id5');
const id6 = document.getElementById('id6');

const n1 = document.getElementById(`n1`);
const n2 = document.getElementById(`n2`);
const n3 = document.getElementById(`n3`);
const n4 = document.getElementById(`n4`);
const n5 = document.getElementById(`n5`);
const n6 = document.getElementById(`n6`);

const img1 = document.getElementById(`img1`);
const img2 = document.getElementById(`img2`);
const img3 = document.getElementById(`img3`);
const img4 = document.getElementById(`img4`);
const img5 = document.getElementById(`img5`);
const img6 = document.getElementById(`img6`);



let  past = localStorage.getItem("pasado");
past= JSON.parse(past);
let present = new Date().getTime();
let time = (present-past)/1000;
console.log(time);

const spin = document.getElementById("load");


if(time>=60 ){
    const cts = document.getElementById("cartas");
    const spin = document.getElementById("load");
    cts.style.display=`none`;


    setTimeout(function(){
        cts.style.display=`inline`;
        spin.style.display=`none`;
        
       
    }, 3500);


const getProducts  = async ( url ) =>{
    try {
        const response = await fetch(url);
        const productsObj = await response.json();
       let mail = productsObj.data.map( function(product) {return product.email })
       let name =  productsObj.data.map( function(product) {return (product.first_name + ` `+product.last_name) })
       let img = productsObj.data.map( function(product) {return product.avatar })
       console.log(mail)
       id1.innerHTML=mail[0];
       id2.innerHTML=mail[1];
       id3.innerHTML=mail[2];
       id4.innerHTML=mail[3];
       id5.innerHTML=mail[4];
       id6.innerHTML=mail[5];

       n1.innerHTML=name[0];
       n2.innerHTML=name[1];
       n3.innerHTML=name[2];
       n4.innerHTML=name[3];
       n5.innerHTML=name[4];
       n6.innerHTML=name[5];
       
       img1.setAttribute("src", img[0]);
       img2.setAttribute("src", img[1]);
       img3.setAttribute("src", img[2]);
       img4.setAttribute("src", img[3]);
       img5.setAttribute("src", img[4]);
       img6.setAttribute("src", img[5]);

       
      
       const timestamp = new Date().getTime();
       console.log(timestamp);
       localStorage.setItem('pasado', JSON.stringify(timestamp));

       let email = JSON.stringify(mail);
       localStorage.setItem("mail", email);
       let nombre = JSON.stringify(name);
       localStorage.setItem("name", nombre);
       let imagen = JSON.stringify(img);
       localStorage.setItem("img", imagen);


    
    } catch (error) {
        console.log(error)
    }
};

getProducts (url);
}

else{
 
    spin.style.display=`none`;

    let  mailFast = localStorage.getItem("mail");
    mailFast = JSON.parse(mailFast)


    let  nameFast = localStorage.getItem("name");
    nameFast = JSON.parse(nameFast)

    let  imgFast = localStorage.getItem("img");
    imgFast = JSON.parse(imgFast)



    id1.innerHTML=mailFast[0];
    id2.innerHTML=mailFast[1];
    id3.innerHTML=mailFast[2];
    id4.innerHTML=mailFast[3];
    id5.innerHTML=mailFast[4];
    id6.innerHTML=mailFast[5];

    n1.innerHTML=nameFast[0];
    n2.innerHTML=nameFast[1];
    n3.innerHTML=nameFast[2];
    n4.innerHTML=nameFast[3];
    n5.innerHTML=nameFast[4];
    n6.innerHTML=nameFast[5];
    
    img1.setAttribute("src", imgFast[0]);
    img2.setAttribute("src", imgFast[1]);
    img3.setAttribute("src", imgFast[2]);
    img4.setAttribute("src", imgFast[3]);
    img5.setAttribute("src", imgFast[4]);
    img6.setAttribute("src", imgFast[5]);

}
/*   
  let userFullnames = users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  }) */