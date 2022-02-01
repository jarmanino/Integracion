const mongoose = require ('mongoose');

const dbConnection = async (req,res)=> {
    try{
        await mongoose.connect(process.env.MONGO_URI, {         
            useNewUrlParser:true,
            useUnifiedTopology:true,
            
        });
        console.log('DB is connected');
    }
    catch { 
        console.log('error en db');
        
    }
}

module.exports={
    dbConnection
}