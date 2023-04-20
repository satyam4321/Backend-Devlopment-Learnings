const dbConnect = require('./mongodb');

const update = async() => {
    let data = await dbConnect();
    // console.log(data);
    let result = data.updateMany(
        {name : 'note 10'},
        {$set: {price: 250}} 
    )
}

update();