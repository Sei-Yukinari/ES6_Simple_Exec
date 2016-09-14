let book = {
  title: 'タイトル',
  price: 5000,
  toString(){
    console.log( `${this.title}:${this.price}` );
  }
}

book.toString();