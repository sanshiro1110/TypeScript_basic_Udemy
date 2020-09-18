"use strict";
var Book2 = /** @class */ (function () {
    function Book2() {
        this._name = '';
        this.code = '123456';
    }
    Object.defineProperty(Book2.prototype, "name", {
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
    return Book2;
}());
var myBook2 = new Book2();
myBook2.name = 'javascriptを勉強中です。';
console.log(myBook2.code);
