function addBook(){
    bookName=bname.value
    author=aid.value
    coverImg=cover.value
    if(bookName in localStorage){
        alert("book already presnt")
    }
    else{
        book={bookName,author,coverImg}
        localStorage.setItem(bookName,JSON.stringify(book))
        alert("book added successfully")
    }
}
function searchPages(){
    window.location='search.html'
}

function booksSearch(){
    book_Name=bn.value
    if(book_Name in localStorage){

      bookDetails=JSON.parse(localStorage.getItem(book_Name))
      result.innerHTML =`
      <div class="card" style="width:25% 18rem;">
  <img src="${bookDetails.coverImg} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Book Name ${bookDetails.bookName}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Author Name ${bookDetails.author}</li>
  </ul>
  
</div>
      `
    }
    else{
        result.innerHTML=`<h1 class="text-danger">
        Book is not found
        </h1>`
    }
}