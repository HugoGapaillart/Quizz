fetch("quiz.json")
    .then(function(reponse) { return reponse.json();})
    .then(function(data) {
        console.log("La question est " + data.quiz.questuion1.question);
    })