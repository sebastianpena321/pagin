(function(){
     const titleQuestions = [...document.querySelectorAll('.questions_title')];
        console.log(titleQuestions)

        titleQuestions.forEach(question =>{
        question.addEventListener('click', () =>{
            let height = 0  ;
            let yo = question.nextElementSibling;
            let add = question.parentElement.parentElement;	

            question.querySelector('.questions_arrow').classList.toggle('rotate');
            add.classList.toggle('questions_padding--add');

            
          

            if (yo.clientHeight === 0) {
                height = yo.scrollHeight;
            } 
            yo.style.height = `${height}px`;


         

    })
    });
    }) ();



    
    
    
