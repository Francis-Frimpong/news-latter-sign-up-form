const input = document.querySelector('#email')
const errorText = document.querySelector('.errorText')
const regexValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/








document.querySelector('form').addEventListener('submit', (e) => {

    if(!regexValid.test(input.value.trim())){
        e.preventDefault()
        errorText.textContent = 'Valid email required'
        errorText.style.display = 'block'
    }
    
    
    if (input.value.trim() === ''){
        errorText.textContent = 'Valid email required'
        errorText.style.display = 'block';
    }else {
        console.log(input.value);
        input.value = '';
        errorText.style.display = 'none';
    }
})