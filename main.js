let btn=document.getElementById('btn');
let inp=document.getElementById('inp');
let boxs=document.querySelectorAll('.box');
let drag=null;
btn.onclick=function(){
    if(inp.value !=''){
        boxs[0].innerHTML+=`
        <p class="item" draggable="true">${inp.value}</p>
        `
        inp.value='';
    }
    dragitem();
}
function dragitem(){
    let items=document.querySelectorAll('.item')
    items.forEach(item=>{
        item.addEventListener('dragstart',function(){
            drag=item;
            item.style.opacity='0.5'
        })
        item.addEventListener('dragend',function(){
            drag=null;
            item.style.opacity='1'
        })
        boxs.forEach(box=>{
            box.addEventListener('dragover',function(e){
                e.preventDefault();
                this.style.background='#090';
                this.style.color='#fff';
            })
            box.addEventListener('dragleave',function(){
                this.style.background='#fff';
                this.style.color='#000';
            })
            box.addEventListener('drop',function(){
                box.append(drag);
                this.style.background='#fff';
                this.style.color='#000';
            })
        })
    })
}


let x=function (a,b){return a+b};
let z=x(7,8)
//console.log(z)
//function constructor
const myfunction=new Function("a","b","return a*b");
let b=myfunction(7,8);
//console.log(b)
//self invoked function
// (function (){
//     console.log("hello");
// })()
//***object constructor**
function Person(name,age){
    this.name=name;
    this.age=age;
}
let person01=new Person("omnia",22);
let person02=new Person("ali",99);
console.log(person01);
//**method to object**
function car(name,model){
    this.name=name;
    this.model=model;
    //method defined as a properity to the  object
    this.displayinfo=function(){
        console.log(`car:${this.name} ${this.model}`)
    }
}
let mycar=new car("jeeb",2020)
mycar.displayinfo();
