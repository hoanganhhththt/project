module.exports = function(app){
    var todoList = require('../controllers/todoListController');

    //todoList cua BOOK
    app.route('/books')
        .get(todoList.list_all_books)
        .post(todoList.create_a_book)
        .put(todoList.update_a_book);
    
    app.route('/books/:bookID')
        .get(todoList.search_a_book)
        .delete(todoList.delete_a_book);

    //todoList cua Category
    app.route('/category')
        .get(todoList.list_all_categorys)
        .post(todoList.create_a_category)
        .put(todoList.update_a_category);

    app.route('/category/:categoryID')
        .delete(todoList.delete_a_category);
    
    app.route('/pay')
        .post(todoList.pay_a_book)
        .get(todoList.list_all_pays)
}