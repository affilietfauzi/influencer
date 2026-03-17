export function createSelect(id,label,data){
const wrapper=document.createElement('div')

const lbl=document.createElement('label')
lbl.innerText=label

const select=document.createElement('select')
select.id=id

data.forEach(item=>{
const opt=document.createElement('option')
opt.value=item.desc || item
opt.text=item.name || item
select.appendChild(opt)
})

wrapper.appendChild(lbl)
wrapper.appendChild(select)

return wrapper
}

export function randomizeSelects(){
document.querySelectorAll('select').forEach(s=>{
s.selectedIndex=Math.floor(Math.random()*s.options.length)
})
}
