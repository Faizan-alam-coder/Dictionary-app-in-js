const input = document.querySelector('#input')
const Search_btn = document.querySelector('#btn')
const api_key= `c15bbe2d-a6eb-41de-9dd9-95816d5d5cbe`
Search_btn.addEventListener('click',function(e){
    e.preventDefault(); //this prevent from after clik refresh
    //alert(1);
    let word = input.value;

    if(word===''){
        alert('Please Enter The Word');
        return;
    }

    getData(word);
})

 async function getData(word){
    const response  =  await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${api_key}`);
    const data = await response.json(); 
    
    console.log(data);
}
