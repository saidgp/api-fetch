
    document.querySelector(`#boton`).addEventListener(`click`, bringdata);

  function bringdata(){

    const cts = document.getElementById("cartas");
    const spin = document.querySelector(`#load`);
    const url ="https://reqres.in/api/users?delay=3";
    

    let  past = localStorage.getItem("pasado");
    past= JSON.parse(past);

    let present = new Date().getTime();
    let time = (present-past)/1000;
    console.log(time);


if(time>=60 ){

    cts.style.display=`none`;
    spin.style.display=`inline`;

    setTimeout(function(){
        cts.style.display=`inline`;
        spin.style.display=`none`;
            
    }, 3500);

    const getProducts  = async ( url ) =>{
        try {
            const response = await fetch(url);
            const productsObj = await response.json();
            console.log(productsObj)

           let res = document.querySelector(`#res`);
            res.innerHTML=``;

            for(let item of productsObj.data){

                //console.log(item);

                res.innerHTML+=`
                    <tr>
                    <th scope="row">${item.id}</th>
                    <td><img id="img1" src="${item.avatar}" class="img" alt="..."></td>      
                    <td>${item.first_name}</td>
                    <td>${item.last_name}</td></td>
                    <td>${item.email}</td>
                  </tr>
                `
            }


            
       const timestamp = new Date().getTime();
       console.log(timestamp);
       localStorage.setItem('pasado', JSON.stringify(timestamp));

       let users = JSON.stringify(productsObj.data);
       localStorage.setItem("data", users);
           
        } catch (error) {
            console.log(error)
        }
    };
    getProducts(url);
  }
  else{
    cts.style.display=`inline`;
    spin.style.display=`none`;

    let  dataFast = localStorage.getItem("data");
    
    dataFast=JSON.parse(dataFast);
    console.log( dataFast);

    let res = document.querySelector(`#res`);
    res.innerHTML=``;

    for(let item of dataFast){
      //  console.log(item);
        res.innerHTML+=`   
        <tr>
        <th scope="row">${item.id}</th>
        <td><img id="img1" src="${item.avatar}" class="img" alt="..."></td>      
        <td>${item.first_name}</td>
        <td>${item.last_name}</td></td>
        <td>${item.email}</td>
      </tr>     `
    }
  }
  }