fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST', 
body: JSON.stringify({ 
title: 'The Studio',
body: 'Something funny',
userId: 1,
}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => console.log(json));

function addCard(title ="Sample Title", userId = " Sample User", id = "Sample ID", body = "Sample Body") {
    const template =
    document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-userId').innerText = userId;
    template.querySelector('.card-id').innerText = id;
    template.querySelector('.card-text').innerText = body;
    document.querySelector('#card-list').appendChild(template);
    }
