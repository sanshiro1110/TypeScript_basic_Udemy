"use strict";
var Book = /** @class */ (function () {
    function Book() {
        this._name = '';
    }
    Object.defineProperty(Book.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value === '') {
                console.log('書籍名が指定されていません。');
            }
            else {
                this._name = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var myBook = new Book();
myBook.name = 'javascriptを勉強中です。';
