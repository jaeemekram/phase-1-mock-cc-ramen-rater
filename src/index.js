// display all images of ramen in #ramen-menu 
//pull objects out of json and convert  to js objects

//find the div you want to add on

//find the images

//append on div

fetch("http://localhost:3000/ramens")
.then((res) => res.json())
.then((data) => {
    console.log(data);
    for (let ramen of data) {
      renderRamen(ramen);
    }
  });




const renderRamen = (ramenObj) => {
    let div = document.getElementById("ramen-menu")

    let ramenImg = document.createElement("img")
    ramenImg.src = ramenObj.image

    div.append(ramenImg)

    ramenImg.addEventListener("click", (e) => {
        e.preventDefault()
        dispInfo(ramenObj)
    })





const dispInfo = (ramenObj) => {
    let infoDiv = document.getElementById("ramen-detail") 

    let img = document.querySelector(".detail-image")
    img.src = ramenObj.image

    let name = document.querySelector(".name")
    name.textContent = ramenObj.name
    
    let restaurant = document.querySelector(".restaurant")
    restaurant.textContent = ramenObj.restaurant

    let rating = document.getElementById("rating-display")
    rating.textContent = ramenObj.rating
    
    let comment = document.getElementById("comment-display")
    comment.textContent = ramenObj.comment

    div.append(img, name, restaurant)


}}


let form = document.getElementById("new-ramen")

form.addEventListener("submit",  (e) => {
    e.preventDefault()
    
    let newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value
    }

    renderRamen(newRamen)
})