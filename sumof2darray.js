 var value=[["20","30"],["30","40"]]
 for(i=0;i<=value.length;i++)
 var sum = 0;
//console.log(array.length);
for (var i = 0; i < value.length; i++) {
    //console.log(array[i]);
    for (var j = 0; j < value[i].length; j++) {
        console.log(value[j][i]);
        sum += value[j][i];
    }
}