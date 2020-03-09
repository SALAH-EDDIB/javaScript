var favoriteBooks = ['the witcher', 'To Kill a Mockingbird', 'Invisible Man'];

function addFavoriteBook(bookname) {
    var n = bookname.includes("Great")
    if (n != true) {
        favoriteBooks.push(bookname);
    }
}

function printFavoriteBooks() {

    console.log("Livres favoris : " + favoriteBooks[0])
    console.log("number of books :  " + favoriteBooks.length)

    for (let y = 0; y < favoriteBooks.length; y++) {

        console.log(favoriteBooks[y]);

    }
}