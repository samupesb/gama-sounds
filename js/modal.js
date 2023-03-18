function acao1(){



let modal1 = document.querySelector('.modal1')

modal1.style.display = 'block';

}

function fechar1(){

let modal1 = document.querySelector('.modal1')

modal1.style.display = 'none';

}





function acao2(){



    let modal2 = document.querySelector('.modal2')
    
    modal2.style.display = 'block';
    
    }
    
    function fechar2(){
    
    let modal2 = document.querySelector('.modal2')
    
    modal2.style.display = 'none';
    
    }






    function acao3(){



        let modal3 = document.querySelector('.modal3')
        
        modal3.style.display = 'block';
        
        }
        
        function fechar3(){
        
        let modal3 = document.querySelector('.modal3')
        
        modal3.style.display = 'none';
        
        }    




        const form = document.querySelector("#form1")
        const nameInput = document.querySelector("#name")
        const emailInput = document.querySelector("email")

        form.addEventListener("submit", (event) =>{

            event.preventDefault();

            if(nameInput.value === "") {
            alert("Por favor preencha seu nome");
            return;
            }

            if(emailInput.value === "") {
            alert("Por favor, preencha o seu email");
            return;
            }


            // Se tudo estiver preenchido, envie o form
            
            form.submit();
        });
        

        
