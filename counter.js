let counter = 0;

// Перевірити, чи вже є значення у локальному сховищі
if (!localStorage.getItem('counter')) {

        // Якщо ні, встановити лічильник на нуль у локальному сховищі
        localStorage.setItem('counter', 0);
    }
                
    
function count() {
                // Отримати значення лічильника з локального сховища
    let counter = localStorage.getItem('counter');
        counter++;
                document.querySelector('h1').innerHTML = counter
                // Зберегти лічильник у локальному сховищі
    localStorage.setItem('counter', counter);

                

            }
            document.addEventListener('DOMContentLoaded', function() {
                document.querySelector('h1').innerHTML = localStorage.getItem('counter');
                document.querySelector('button').onclick = count;
   
    });
