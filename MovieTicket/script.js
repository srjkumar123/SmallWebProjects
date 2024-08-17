//Get reference to dom elements

//main container
const container = document.querySelector(".container");


//all available seats
const seats = document.querySelectorAll(".row .seat:not(.sold)");

//total and counts
const total  = document.getElementById("total");
const count = document.getElementById("count");

//movie drop down
const movieSelect = document.getElementById("movie");
//ticket value
let ticketPrice = +movieSelect.value;


//Add event listerners

//to movie selection change
movieSelect.addEventListener("change", e=>{
    ticketPrice = +e.target.value;
    
    //store selected movie
    setMovieData(e.target.selectedIndex, e.target.value);

    updateSelectedCount();
})

//check if seat is clicked and not sold
container.addEventListener("click", e=>{
    if(e.target.classList.contains("seat")&& !e.target.classList.contains("sold")){
        //toggle seat selection
        e.target.classList.toggle("selected")

        //update displayerd count and total
        updateSelectedCount();
    }
})

//function to update count and total
function updateSelectedCount()
{
   //get all the selected seats
   const selectedSeats = document.querySelectorAll(".row .seat.selected")

   //get an array of selected seat index
   const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

   //save selected seats in the local storage
   localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));
   
   //total seats selected
   const seatCount = selectedSeats.length;

   //update count and total amount on UI
   count.innerText = seatCount;
   total.innerText = seatCount*ticketPrice;
   

}

//function to store movie data in local storage
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}


//function to populate UI from local storage data
function populateUI(){
    //get selected seats from local storage
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"))
    
    if(selectedSeats != null && selectedSeats.length>0){
        seats.forEach((seat, index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add("selected")
            }
        })
    }


    //selected movie from local store=age
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex")
    
    if(selectedMovieIndex!=null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
    
}

populateUI();
updateSelectedCount()