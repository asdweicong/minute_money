var number = 10;
var allNumber = null;
var time = 10;
var result = []
var beishu = 2.2;
for(var i=0;i<time;i++){
    allNumber = allNumber * beishu + number
    allNumber = parseInt(allNumber)
    result.push(allNumber)  
}console.log(result)
