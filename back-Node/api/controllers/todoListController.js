
var mongoose = require('mongoose'),
  Books = mongoose.model('Books'),
  Categorys = mongoose.model('Categorys'),
  Pay = mongoose.model('Pay');

exports.list_all_books = function (req,res) {
    Books.find({}).populate("categorys","name _id").exec((err,data)=>{
		if(err){
			res.send(err);
		} 
		res.json(data);
	})
};

exports.list_all_pays = function (req,res) {
    Pay.find({}).exec((err,data)=>{
		if(err){
			res.send(err);
		} 
		res.json(data);
	})
};


exports.create_a_book = async function(req,res){
    const bookTitle = req.body.title;
    const bookPay = req.body.pay;
    const bookLink = req.body.link;
    const bookNum = req.body.num;
    const bookCategory = req.body.categorys;

    let CategoryData = await Categorys.findOne({name:bookCategory});
    if(CategoryData == null){
        var category = new Categorys();
        category.name = bookCategory;
        CategoryData = await category.save();
    }

    let categoryID = CategoryData._id;

    let book = new Books();
    book.title = bookTitle;
    book.pay = bookPay;
    book.link = bookLink;
    book.num = bookNum;
    book.categorys = categoryID;

    book.save(async(err,bookData)=>{
        if(err){
            res.send(err)
        }
        await Categorys.findByIdAndUpdate(categoryID,{$push:{books:bookData._id}}).exec((err)=>{
            if(err) {res.send(err)}
            res.json(bookData);
        })
    })
};

exports.update_a_book = async function(req,res){
    const bookID = req.body._id;
    const bookTitle = req.body.title;
    const bookPay = req.body.pay;
    const bookLink = req.body.link;
    const bookNum = Number(req.body.num);
    console.log(bookNum,bookPay,bookTitle,bookLink)
    await Books.findById(bookID,(err,data)=>{
        console.log(data)
        if(err){res.send(err)}
        data.title = bookTitle;
        data.pay = bookPay;
        data.link = bookLink;
        data.num = bookNum;
        data.save().then(result => {
            res.json({post: result})
        })

    })
};

exports.delete_a_book = function(req,res){
    let id = req.params.bookID;
    Books.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.send(err)
        }
        res.json(data)
    })
}

exports.search_a_book = async function(req,res){
    let found = req.params.bookID;
    console.log(req.params.bookID)
    console.log(typeof(found))
    // Books.find(
    //       { title: { $regex: found ,$options:"$i"}
    //   }).exec((err,data)=>{
	// 	if(err){
	// 		res.send(err);
    //     }
    //     console.log(data)
	// 	res.json(data);
    // })
    let book = await Books.find({ title: { $regex: found ,$options:"$i"}},async (err,data)=>{
        if(err){res.send(err)}
        else{
        if(data.length == 0){
            let category = await Categorys.findOne({name:{ $regex: found ,$options:"$i"}},(err2)=>{
                if(err){res.send(err2)}
            })
            console.log(category)
            let bookId = String(category._id);
            console.log(typeof(bookId))
            await Books.find({categorys:bookId},(err1,data1)=>{
                if(err){res.send(err1)}
                res.json(data1)
            })
        }
        else{res.json(data)}}
    })
}

exports.list_all_categorys = function (req,res) {
    Categorys.find({}).populate("books","title _id").exec((err,data)=>{
		if(err){
			res.send(err);
		} 
		res.json(data);
	})
};

exports.create_a_category = function(req,res){
    const category = new Categorys(req.body);
    category.save((err,data)=>{
        if(err){
            res.send(err)
        }
        Categorys.find({},(err1,data1)=>{
            if(err1){
                res.send(err1)
            }
            res.send(data1)
        })
    })
};

exports.update_a_category = function(req,res){
    let category = new Categorys(req.body)
    Categorys.findByIdAndUpdate(req.body._id,category,(err)=>{
        if(err){
            res.send(err)
        }
        Categorys.findById(req.body._id,(err1,data1)=>{
            if(err1){
                res.send(err1)
            }
            res.json(data1)
        })
    })
};

exports.delete_a_category = function(req,res){
    let id = req.params.categoryID;
    Categorys.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.send(err)
        }
        res.json(data)
    })
}

exports.pay_a_book = async function(req,res){
    let pay = new Pay(req.body);
    let idBook = req.body.idBook;
    let count = req.body.count;
    await Books.findById(idBook,(err,data)=>{
        if(err){
            res.send(err)
        }
        var newNum = data.num-count;
        var nameBook = data.title;
        Books.findByIdAndUpdate(idBook,{num:newNum},(err1)=>{
            if(err){
                res.send(err1)
            }
        })
    })
    let book =  await Books.findById(idBook);
    let bookName = book.title;
    let bookPay = Number(book.pay)*count;
    await pay.save((err,data)=>{
        if(err){
            res.send(err)
        }
            data.bookName=bookName;
            data.pay = bookPay;
            data.save();
        Pay.find({}).exec((err1,data1)=>{
            if(err1){
                res.send(err1)
            }
            res.json(data1)
        })
    })
}