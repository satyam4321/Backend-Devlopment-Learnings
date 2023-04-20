const dbConnect = require('./mongodb');

const insert = async() => {
    // console.log("insert function");

    let db = await dbConnect();
    // console.log(db);
    let result = await db.insertMany(
    [
        {name: 'note 7', brand: 'vivo', price: 300, cateogry: 'mobile'},
        {name: 'note 8', brand: 'vivo', price: 400, cateogry: 'mobile'}
    ]
        )
    console.log(result);
    if(result.acknowledged) {
        console.log("Data Inserted");
    }
}

insert();