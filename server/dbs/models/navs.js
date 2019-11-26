import mongoose, {mongo} from 'mongoose'
const Schema = mongoose.Schema
const NavSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    urlId:{
        type:Number,
        require:true
    },
})
export default mongoose.model('Nav',NavSchema)