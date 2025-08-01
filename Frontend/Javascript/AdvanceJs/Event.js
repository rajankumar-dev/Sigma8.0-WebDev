let ul = document.querySelector('ul');
ul.addEventListener('click', function(e){
    console.log(e.target.parentNode);
    
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG'){
        let remove = e.target.parentNode;
        remove.remove();
    }
    
    
    
},false);