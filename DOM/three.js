const div=document.createElement('div')
console.log(div);
div.className='main'
div.id=Math.round(Math.random()*10 + 1)

div.setAttribute('title','this is a title')
div.style.color='green'
div.style.padding='12px'
div.innerText="Anna Boss"
const text=document.createTextNode('gourav')
div.appendChild(text)
div.title='bbb'

document.body.appendChild(div);