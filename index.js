console.log("covid19Api");



fetch('https://api.covid19api.com/summary').then((response) => {
  return response.json();
}).then((responsedata) => {
  const data = responsedata;
  let country = data.Countries;
  let str = "";
    let date = new Date();

  country.forEach(function (element, index) {
    str += ` <div class="card" id="card22">
            <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left"  type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
               ${index+1}.  ${element["Country"]}
                </button>
              </h2>
            </div>
        
            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#accordionExample">
              <div class="card-body">
                <div class="alert alert-primary" role="alert">
                    Date&Time:${date}
                </div>
                <div class="alert alert-light" role="alert">
               NewConfirmed: ${element['NewConfirmed']}
                </div>
                <div class="alert alert-secondary" role="alert">
               New Deaths: ${element['NewDeaths']}
                </div>
                <div class="alert alert-success" role="alert">
                New Recovery:  ${element['NewRecovered']}
                </div>
                <div class="alert alert-warning" role="alert">
                 TotalConfirmed: ${element['TotalConfirmed']}
                </div>
                <div class="alert alert-danger" role="alert">
                 TotalDeaths: ${element['TotalDeaths']}
                </div>
              
            
              </div>
            </div>
          </div>`
  })
  document.getElementById("accordionExample").innerHTML = str;


}).catch((error) => {
  console.log(error);
})

function getelement(){
  document.getElementById("element").innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  let input = document.getElementById("input").value;
  let card = document.getElementsByClassName("card")
  Array.from(card).forEach(function (element, index) {
    let btn = document.getElementsByClassName("btn btn-link btn-block text-left")[index].innerText;
    console.log(btn);
    
    if (btn.includes(input)) {
      console.log("ok")
      console.log(element);
      element.style.display = "block";
    }
    else {
      element.style.display = "none";     
      // getelement();
      
    }
    
  });
  
  e.preventDefault();
  input.value="";
})

