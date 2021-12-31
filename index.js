// buttons
const all = document.getElementById("all");
const discount = document.getElementById("discount");

// cards
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

// discount price
const newPrice = document.getElementById("price");

// testimonials
const cardJoshua = document.getElementById("cardJoshua");
const cardUnknown = document.getElementById("cardUnknown");

cardJoshua.addEventListener('mouseenter', function(e){
    cardJoshua.classList.remove('shadow');
    cardJoshua.classList.add('shads');
})
cardJoshua.addEventListener('mouseleave', function(e){
    cardJoshua.classList.add('shadow');
    cardJoshua.classList.remove('shads');
})
cardUnknown.addEventListener('mouseenter', function(e){
    cardUnknown.classList.remove('shadow');
    cardUnknown.classList.add('shads');
})
cardUnknown.addEventListener('mouseleave', function(e){
    cardUnknown.classList.add('shadow');
    cardUnknown.classList.remove('shads');
})

discount.addEventListener("click", function (e) {
  discount.classList.add("active");
  all.classList.remove("active");

  card1.classList.add("remove");
  card3.classList.add("remove");

  newPrice.innerHTML = `$399 <span class='strike text-muted'>$599</span>`;
});
all.addEventListener("click", function (e) {
  discount.classList.remove("active");
  all.classList.add("active");

  card1.classList.remove("remove");
  card3.classList.remove("remove");

  newPrice.innerHTML = `$599`;
});
