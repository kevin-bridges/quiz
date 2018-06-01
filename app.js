/* $.getJSON('./data/data.json', function(data) {
    console.log(data);
}); */

let testData = $.getJSON('./data/data.json');

console.log(JSON.stringify(testData));

$(testData.test).each(function(index, value) {
    console.log(value.name);
});