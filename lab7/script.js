const url =' https://randomuser.me/api/ ';

let avatar = document.getElementById('avatar');
let fullname = document.getElementById('fullname');
let country = document.getElementById('country');
let city = document.getElementById('city');
let postcode = document.getElementById('postcode');
let btn = document.getElementById('btn');

btn.addEventListener("click", function() {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)
});

function handleErrors (res){
  if(!res.ok){
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function parseJSON (res){
  return res.json();
}

function updateProfile (profile){
  avatar.src = profile.results[0].picture.medium;
  fullname.innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last;
  city.innerHTML = profile.results[0].location.city;
  country.innerHTML = profile.results[0].location.country;
  postcode.innerHTML = profile.results[0].location.postcode;
  return 1;
}

function printError (error){
  console.log(error);
}
