const dbConnect = require('./mongodb');

const deleteData = async() => {
    // console.log("Function called");
    let data = await dbConnect();
    let result = await data.deleteOne({name: 'note 6'});
    // console.log(data);
    // console.log(result);
    if(result.acknowledged){
        console.log("Data Deleted")
    }
}

deleteData();