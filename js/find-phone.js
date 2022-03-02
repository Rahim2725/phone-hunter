const  searchPhone = () =>{
    const searchFiled = document.getElementById('search-filed');
    const searchText = searchFiled.value ;
    const search = searchText.toLowerCase() ;
    searchFiled.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

const displayPhone = (phones) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if( phones.length == []){
       document.getElementById('not-found').style.display = 'block';
    }
   else{
        phones.forEach(phone => {
           const div = document.createElement('div');
           div.classList.add('col');
           div.innerHTML =`
                <div class="card  box-shodo h-100">
                <img src="${phone.image}" class="card-img-top"  alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p>Brand: ${phone.brand}</p>
                    <button class="btn btn-primary" onclick="phoneDeteils('${phone.slug}')"> Deteils</button>
                </div>
                </div>
           `
            searchResult.appendChild(div);
            document.getElementById('not-found').style.display = 'none';
        });
   }   
};
const phoneDeteils = (phoneId) =>{
    const url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`
   
    fetch(url)
        .then(res => res.json())
        .then(data => phoneDeteilsDisplay(data.data))
}


const phoneDeteilsDisplay = (phone) => {
    console.log(phone)
    console.log(phone.mainFeatures.storage);
    const phoneDeteils = document.getElementById('phone-details');
    phoneDeteils.textContent ='';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-4">
        <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${phone.name}</h5>
        <p class="card-text mb-0">${phone?.releaseDate || 'Not found'}</p>
        <p>Brand: ${phone.brand}</p>
        <p>Storage: ${phone.mainFeatures.storage}, chipSet: ${phone.mainFeatures.chipSet}</p>
        </div>
    </div>
    </div>
    </div>
    `
    phoneDeteils.appendChild(div);


    
}


// if(phone.releaseDate.length !== []){
//     const phoneReleasedate = phone.releaseDate ;
//     document.getElementById('releaseDate').innerText = phoneReleasedate; 
// }
// else{
//     const releaseDate = 'Not Found Release Date';
//     document.getElementById('releaseDate').innerText = releaseDate; 
// }
