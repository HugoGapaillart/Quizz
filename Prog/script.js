fetch("quiz.json")
    .then(function(reponse) { return reponse.json();})
    .then(function(donne) {
        
        function choixquest(){
            if(bouton1 == 1){
                return Math.random(1, 2)
            }
        }

            const question = document.querySelector(".quest1");
    
            document.querySelector('.quest1').innerHTML = donne.quiz.question1.question;
        }
       /* const question = [];
        for(let i = 0; i < donne.quiz.question.legth)
        
        rep = [];

        document.querySelector('.bouton1').addEventListener('onclick', () => {
            let min = 0;
            let max = question.length;
            let random = Math.floor(Math.random() * (max - min) + min);
            if (question.length == 0){
                return "youou";
            }else{
                document.querySelector('.quetion').innerHTML = question[random];
            }
        });*/
          
);