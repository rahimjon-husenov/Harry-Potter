
let demo = document.getElementById('demo')

let html = ``
fetch('https://hp-api.herokuapp.com/api/characters/')
    .then((response) => response.json())
    .then((data) => {
        data.map(el => {
            html += `<div class="main">
            <div class="box">
                       <img class="img" src=${el.image}></img>
                        <div> 
                            <p>${el.name}</p>
                            <p>${el.house}</p>
                            <p>${el.dateOfBirth}</p>
                        </div>
                    </div>
                    </div>`;
            demo.innerHTML = html
        })
    })