import mongoose, {mongo} from 'mongoose'
const Schema = mongoose.Schema
const ArticleSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    from:{
        type:String
    },
    content:{
        type:String,
        require:true
    },
    fontImg:{
        type:String,
        require:true
    },
    releaseTime:{
        type:Date,
        require:true
    },
    lastModified:{
        type:Date,
        default: Date.now
    },
    viewCount:{
        type:Number,
        default:0
    },
    commentCount:{
        type:Number,
        default:0
    },
    tag:{
        type:Number,
        default:0
    },
    isOriginal:{
        type:Boolean,
        default:true
    },
    isIndex:{
        type:Boolean,
        default:false
    }
})

export default mongoose.model('Article',ArticleSchema)