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
            console.log(phone);
           const div = document.createElement('div');
           div.classList.add('col');
           div.innerHTML =`
                <div class="card h-100">
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
    console.log(phoneId)
    const url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => phoneDeteilsDisplay(data.data))
}


const phoneDeteilsDisplay = (phone) => {

    console.log(phone)
    const phoneDet = document.getElementById('phone-details');
    phoneDet.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML =`
                <div class="card h-100">
                <img src="${phone.image}" class="card-img-top"  alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p>Phone Release Date</p>
                    <p>Brand: ${phone.brand}</p>
                </div>
                </div>
    `

}