let counter = document.querySelector('#counter')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let heart = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let form = document.querySelector('form')
let divList = document.querySelector('#list')

let time = 0

minus.addEventListener('click', () => time = time - 2)
plus.addEventListener('click', () => time = time + 1)

function setCount(){
    setInterval(()=> {++time, counter.innerHTML = time}, 1000);
}
setCount()

heart.addEventListener('click', function(){
    let li = document.createElement('li')
    li.textContent = `${time} has been liked 1 time`
    document.querySelector('.likes').appendChild(li)
})

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let input = e.target.comment.value
    fetch('http://localhost:3000/comments',{
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: input
      }
      )
})
})

fetch('http://localhost:3000/comments')
.then(resp => resp.json())
.then(data => {
    let commentSection = data
    commentSection.forEach(comment =>{
    console.log(comment)
    console.log(comment.body)
    let p = document.createElement('p')
    p.textContent = comment.comment
    divList.appendChild(p)
})
.catch((error)=>{
    alert('OUT TO LUNCH')
    console.error(error)
})
})

pause.addEventListener('click', () => console.log('clicked'))