// JavaScript
console.log('******')
const searchForm = document.getElementById("search_form");
const searchIcon = document.getElementById("search_icon");

searchIcon.addEventListener("click", function(event) {
    console.log('test')
  event.preventDefault();
  searchForm.submit();
});
