const morning=require('./morning');
const evening=require('./evening');

module.exports={
    //експортнув ті дані у свої функції
    getMorningMessage:function(){console.log(morning);},
    getEveningMessage:function(){console.log(evening);},

}