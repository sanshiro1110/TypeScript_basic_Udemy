class Book2 {
  private _name: string = '';
  readonly code: string = '123456';

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



let myBook2: Book2 = new Book2();
myBook2.name = 'javascriptを勉強中です。';
myBook2.code = '222222';
console.log(myBook2.code);
