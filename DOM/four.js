function addnewLang(langName){
    const li=document.createElement('li');
    li.innerText=`${langName}`
    document.querySelector('.language').appendChild(li)
    
}
addnewLang("React")
addnewLang('Java')

function addLang(langname){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${langname}`))
    document.querySelector('.language').appendChild(li)
}
addLang('c++')

// Edit element
const secLang=document.querySelector('li:nth-child(2')
// secLang.innerText="NNN"

const newLi=document.createElement('li')
newLi.appendChild(document.createTextNode('Python'))
secLang.replaceWith(newLi)

const firLang=document.querySelector('li')
const newli=document.createElement('li')
newli.appendChild(document.createTextNode('MySQL'))
firLang.replaceWith(newli)

f
// remove
// secLang.remove()
const Lang=document.querySelector('li')
Lang.remove()