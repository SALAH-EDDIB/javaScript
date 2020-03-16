var favoriteBooks = ['the witcher', 'To Kill a Mockingbird', 'Invisible Man'];
var inputText = document.querySelector('.textinput').value;
var btn = document.querySelector('.btn')


btn.addEventListener('click', addFavoriteBook)


var pval = "";
for (let y = 0; y < favoriteBooks.length; y++) {

    pval = pval + favoriteBooks[y] + "<br>" + "<br>";

}
document.querySelector('.para').innerHTML = pval;




function addFavoriteBook(inputText) {
    var inputText = document.querySelector('.textinput').value;
    var n = favoriteBooks.includes(inputText)




    if (n != true) {
        favoriteBooks.push(inputText);

    }

    document.querySelector('.textinput').value = '';


    var pval = "";

    for (let y = 0; y < favoriteBooks.length; y++) {

        pval = pval + favoriteBooks[y] + "<br>" +
            "<br>";

    }
    document.querySelector('.para').innerHTML = pval;


}

// function printFavoriteBooks() {

//     console.log("Livres favoris : " + favoriteBooks[0])
//     console.log("number of books :  " + favoriteBooks.length)

//     for (let y = 0; y < favoriteBooks.length; y++) {

//         console.log(favoriteBooks[y]);

//     }
// }




var movie = document.querySelector('.movie');
var bodybackground = document.querySelector('body');
var textH = document.querySelector('.texth')


movie.addEventListener('click', movieschanges);

function movieschanges() {
    bodybackground.style.backgroundImage = 'url(../img/film.jpg)';
    textH.innerHTML = 'ADD YOUR movie BOOK';


}








let number = [1, 2, 3, 4, 5]

function addnumber(arr, item) {
    arr.push(item)
    console.log('deleted ithem  :' + arr[0])
    arr.shift()
    console.log(arr)

}