console.log('---');

//import test from './data/data.json';

//var json_data = json.stringify(test);


//console.log(json_data);



$.getJSON('./data/data.json', function(data) {
    console.log(data);
});