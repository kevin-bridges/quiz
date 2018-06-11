
let testData = './data/data.json';

// let testObject = $.getJSON(testData, function (json) {
//     console.log(json.test_questions); // this will show the info it in firebug console
// });


let firstPromise = $.getJSON(testData, function(data){
    console.log(data.test_questions[0].answers.a4.res);
    console.log(data);
    let thisVar = data.test_questions[0].answers;
    
    for (const prop in thisVar) {
        console.log(`${thisVar[prop].res}`);
    }
});




    // console.log(firstPromise.test_questions[0].question); // How many licks does it take to get to the tootsie roll center of the tootsie pop?
    // console.log(firstPromise.test_questions[0].answers[0].a1); // One hundred
    // console.log(firstPromise.test_questions[1].question); // True or False? Grizzly Adams had a beard.
    // console.log(firstPromise.test_questions[1].answers[0].a1); // True
    



