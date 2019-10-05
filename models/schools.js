var mongoose =require('mongoose')
var schoolSchema=new mongoose.Schema({
	abbr:{
		type:String,
		unique:true
	},
	name:{
		type:String,
		unique:true
	},
	// description:String,
	entities:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"entity"
	}]
})
var School=mongoose.model('School',schoolSchema);
module.exports=School;
School.create({
	abbr:'soict',
	name:'ict'
});
School.create({
	abbr:'sob',
	name:'biotech'
})
School.create({
	abbr:'sobs',
	name:'buddhism'
})
School.create({
	abbr:'sovs',
	name:'vocational'
})
School.create({
	abbr:'soh',
	name:'humanities'
})
School.create({
	abbr:'soe',
	name:'engineering'
})