const devs = [
     
    {
       id        : 01,
       name      :'Asraful Haque',
       skill     : 'Mearn Stack',
       location  : 'Mirpur',
       age       : 35,
       photo     :"https://i.postimg.cc/23pFM2k3/received-1936588693281302-1.jpg"


    },
    {
        id        : 02,
        name      :'Sabbir Mahmud',
        skill     : 'Java',
        location  : 'Uttara',
        age       : 40,
        photo     :"https://pcceagles.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2018/10/8/JosephLiwosz.jpg"
 
 
     },
     {
        id        : 03,
        name      :'Sharmin Sultana',
        skill     : 'Wordpress Developer',
        location  : 'Bosundhora',
        age       : 21,
        photo     :"https://i.postimg.cc/LshDqqb9/Screenshot-7.png" 
 
 
     },
     {
        id        : 04,
        name      :'Akas khan',
        skill     : 'Php developer',
        location  : 'Barishal',
        age       : 30,
        photo     :"https://i.postimg.cc/TPP7rNpX/received-2084204758519694.jpg"
 
 
     },
     {
        id        : 05,
        name      :'Somrat hossain',
        skill     : 'Phython',
        location  : 'Cumilla',
        age       : 26,
        photo     :"https://pngimage.net/wp-content/uploads/2018/06/indian-man-png-5.png"
 
 
     },
     {
        id        : 06,
        name      :'Sajid Sorkar',
        skill     : 'Django',
        location  : 'Chandpur',
        age       : 19,
        photo     :"https://jamuionline.com/wp-content/uploads/2021/01/4b844fd800ef49025ab30e247ca8be34.png"
 
 
     },
    










];

const amr = document.querySelector('.team ');
devs.map(data =>{

    amr.innerHTML += `


    <div class="teamitem">
           
    <img  src="${data.photo}" alt="">

            <h2> ${data.name}</h2>
            <b>${data.age}</b>
            <p>${data.skill}</p>
            <span>${data.location}</span>
          
        </div>
    
    
    
    
    
    
    `;







});