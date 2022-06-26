// code your solution here
function saturdayFun(activity="roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun("Watch Football match");

const mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork("Go for a hike");

(function (baseNumber){
    return baseNumber+3;
})(2);


function outer(greeting, msg="its a fine day to learn"){
    const innerFunction = function(name,lang="Python"){
        return `${greeting}, ${name}! ${msg} ${lang}`;

    };
    return innerFunction("student", "javascript");
}
outer("Hello");
function wrapAdjective(style) {
    let result =(function(activity) {
        return "You are " +style+ activity+
        style + "!"
    })
    let emphatic = result;
    return emphatic;   
}