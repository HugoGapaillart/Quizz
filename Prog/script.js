fetch("quiz.json")
    .then(function(reponse) { return reponse.json();})
    .then(function(donne) {
        
        const question = document.querySelector(".question");
        const reponse1 = document.querySelector(".reponse1");
        const reponse2 = document.querySelector(".reponse2");
        const reponse3 = document.querySelector(".reponse3");
        const repone4 = document.querySelector(".reponse4");

        document.querySelector('.question').innerHTML = donne.quiz.question1.question;
        document.querySelector('.reponse1').innerHTML = donne.quiz.question1.reponse1;
        document.querySelector('.reponse2').innerHTML = donne.quiz.question1.reponse2;
        document.querySelector('.reponse3').innerHTML = donne.quiz.question1.reponse3;
        document.querySelector('.reponse4').innerHTML = donne.quiz.question1.reponse4;

    });