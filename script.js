
//tagname P
const P=document.getElementsByTagName('p')

//container scope
const container=document.getElementById('container')


//1. merubah warna background semua paragraph
const button_1=document.getElementById('buttonSatu')

button_1.addEventListener('click',function(){

    for (i=0;i<P.length;i++){
        P[i].style.backgroundColor='lightblue'
    }

})


//2. merubah warna background color dan warna text button "Dua"
const button_2=document.getElementById('buttonDua')

button_2.addEventListener('click',function(){

    button_2.style.backgroundColor='magenta'
    button_2.style.color='white'

})


//3. merubah font-family dan warna text semua paragraph
const button_3=document.getElementById('buttonTiga')

button_3.addEventListener('click',function(){

    for (i=0;i<P.length;i++){
        P[i].style.fontFamily = 'Impact'
        P[i].style.color = 'magenta'
    }

})


//4. merubah font-size semua paragraph
const button_4=document.getElementById('buttonEmpat')

button_4.addEventListener('click',function(){

    for (i=0;i<P.length;i++){
        P[i].style.fontSize='50px'
    }

})


//5. merubah container background-color
const button_5=document.getElementById('buttonLima')

button_5.addEventListener('click',function(){

    container.style.backgroundColor='Lightblue'

})


//6. merubah tag "p" pada class p1 menjadi "h2"
const button_6=document.getElementById('buttonEnam')

button_6.addEventListener('click',function(){
    //profile parent
const sectionA=document.getElementById('a')
//tangkap element yg ingin diganti
const pOld=sectionA.querySelector('p')

    //create element dan text baru
    const H2=document.createElement('h2')
    const texth2Baru=document.createTextNode('Wilujeng Sumping di Dojobox ^_^')
    H2.appendChild(texth2Baru)
    sectionA.replaceChild(H2,pOld)   

})



//7. menambahkan satu nama mentor baru dan menghapus nama mentor pertama
const button_7=document.getElementById('buttonTujuh')

button_7.addEventListener('click',function(){

    const ul=document.querySelector('section#b ul')
    const li=document.querySelector('li')
    const MentorBaru=document.createElement('li')
    const textBaru=document.createTextNode('Mentor Baru - Dona Saputra')
    MentorBaru.appendChild(textBaru)
    ul.appendChild(MentorBaru)
    ul.removeChild(li)

})


//8. mengganti text judul "DOOJOBOX.id" menjadi "Post Test"
const button_8=document.getElementById('buttonDelapan')

button_8.addEventListener('click',function(){

    const judul=document.getElementById('judul')
    judul.innerHTML='Post Test'
    judul.style.color='Darkblue'

})


//9. menghapus link
const button_9=document.getElementById('buttonSembilan')

button_9.addEventListener('click',function(){

    const a=document.getElementsByTagName('a')[0]
    const sectionA=document.getElementById('a')
    sectionA.removeChild(a)

})


//10. menambah link ke github masing masing
const button_10=document.getElementById('buttonSepuluh')

button_10.addEventListener('click',function(){

    const li=document.querySelector('section#c ul li:nth-child(10)')
    const sectionC=document.getElementById('c')
    const pRemove=sectionC.getElementsByTagName('p')[9]
    
    const A =document.createElement('a')
    const TextaBaru=document.createTextNode('Link Github a.n Dona Saputra ')
    A.appendChild(TextaBaru)
    A.setAttribute('href','https://github.com/donasaputra/PostTest_Dojobox_DOM')
    li.replaceChild(A,pRemove)
    
})