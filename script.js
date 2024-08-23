let textArea = document.querySelector('.textarea');
let enterKey = document.querySelector('.enter');
let spaceKey = document.querySelector('.space');
let deleteKey = document.querySelector('.delete');
let capslock = document.querySelector('.capslock');
let allKeys = document.querySelectorAll('.key');
let caps = false;

enterKey.addEventListener('click', function () {
    let content = textArea.innerText;
    let newContent = content+'\n';
    textArea.innerText = newContent;
});

spaceKey.addEventListener('click', () => {
    let content = textArea.innerText;
    let newContent =content +'\u00a0';
    textArea.innerText = newContent;
});

deleteKey.addEventListener('click', () => {
    let content = textArea.innerText;
    let newContent = content.slice(0, content.length-1);
    textArea.innerText = newContent;
});

capslock.addEventListener('click', () => {
    if (caps) {
        capslock.classList.remove('caps-state');
        for (let key of allKeys) {
            if (key.classList.length > 1) {
                    //do nothing
            } else {
                key.innerText = key.innerText.toLowerCase();
            }
        }  
    } else {
        capslock.classList.add('caps-state');
        for (let key of allKeys) {
            if (key.classList.length > 1) {
                    //do nothing
            } else {
                
                key.innerText = key.innerText.toUpperCase();
            }
        }  
    }
    caps=!caps;
});
 
for (let key of allKeys) {
    if (key.classList.length > 1) {
        //do nothing
    } else {
        key.addEventListener('click', () => {
            textArea.innerText += key.innerText;
        })
    }
 };
