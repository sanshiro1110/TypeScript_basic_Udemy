class Book {
  private _name: string = '';

  set name(value: string) {
    if(value === '') {
      console.log('書籍名が指定されていません。');
    } else {
      this._name = value;
    }
  }
  get name(): string {
    return this._name;
  }
}



let myBook: Book = new Book();
myBook.name = 'javascriptを勉強中です。';
