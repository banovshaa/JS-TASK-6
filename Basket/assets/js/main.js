if (localStorage.getItem('products')===null) {
    localStorage.setItem('products',JSON.stringify([]))
} 
let buttons=document.querySelectorAll('.btn')
for (let button of buttons) {
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        let id=e.target.parentElement.parentElement.id
        let name=e.target.previousElementSibling.previousElementSibling.innerHTML
        let price=e.target.previousElementSibling.firstChild.nextElementSibling.innerHTML
        let image=e.target.parentElement.previousElementSibling.src
        let basket=JSON.parse(localStorage.getItem('products'))
        let exist=basket.find(item=>item.ID===id)
        if (exist===undefined) {
            basket.push({
                ID:id,
                Name:name,
                Price:price,
                Image:image,
                Count:1
            })
            document.querySelector('.alert span').innerHTML='Product has been added to your cart'
            document.querySelector('.alert').style.right='15px'
            document.querySelector('.alert').style.backgroundColor='#139a74'

        }else{
            exist.Count++
            document.querySelector('.alert span').innerHTML='This product already exists'
            document.querySelector('.alert').style.right='15px'
            document.querySelector('.alert').style.backgroundColor='orange'
        }
        
           localStorage.setItem('products',JSON.stringify(basket))
           setTimeout(() => {
            document.querySelector('.alert').style.right='-100%'
           }, 1500);
           ProductsNumber()
    })
   
}
function ProductsNumber(){
    let basket=JSON.parse(localStorage.getItem('products'))
    let span=document.querySelector('.shop span')
    span.innerHTML=basket.length
}
ProductsNumber()
