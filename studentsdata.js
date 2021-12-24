 const students = [

   {
       roll    : 01,
       name    : 'Sajidul',
       fathers : 'Akas khan',
       mothers : 'Misti',
       schools : 'Hajigong pailot high school and college',
       age     : 12,
       class   : 'five',
       pic     : "https://www.apeejay.edu/panchsheel/images/achievements/2021/Brem-Dutt-Memorial-Pan/Brem-Dutt-Memorial-Pan-1.jpg"

   },
   {
    roll    : 02,
    name    : 'Saimun',
    fathers : 'Akkas ali',
    mothers : 'Beauti Begum',
    schools : 'Hajigong pailot high school and college',
    age     : 13,
    class   : 'six',
    pic     : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/2021_6$largeimg_246853733.jpg"

},
{
    roll    : 03,
    name    : 'Sadia akter',
    fathers : 'Mamunur rahman',
    mothers : 'Sapla Begum',
    schools : 'Hajigong pailot high school and college',
    age     : 11,
    class   : 'four',
    pic     : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/2021_6$largeimg_246853733.jpg"

},
{
    roll    : 04,
    name    : 'Sumaiya sultana',
    fathers : 'Jillur rahman',
    mothers : 'Rimi Begum',
    schools : 'Hajigong pailot high school and college',
    age     : 10,
    class   : 'Three',
    pic     : "https://www.apeejay.edu/panchsheel/images/achievements/2021/Brem-Dutt-Memorial-Pan/Brem-Dutt-Memorial-Pan-1.jpg"

},
{
    roll    : 05,
    name    : 'Alfaz',
    fathers : 'Al-Amin',
    mothers : 'Farhana',
    schools : 'Hajigong pailot high school and college',
    age     : 12,
    class   : 'five',
    pic     : "https://i.pinimg.com/236x/65/52/71/655271f0571687022d6b4ba3ca276c48.jpg"

},
{
    roll    : 06,
    name    : 'Sahjadi islam',
    fathers : 'Sofiqul islam',
    mothers : 'Sathi Begum',
    schools : 'Hajigong pailot high school and college',
    age     : 11,
    class   : 'four',
    pic     : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/2021_6$largeimg_246853733.jpg"

},
   






 ];





 const tomr = document.querySelector('.studentsdata');
 students.map(info =>{

    tomr.innerHTML += `


    <div class="studentbox">
    <img src="${info.pic}" alt="">
    <h3>Roll : ${info.roll} </h3>
    <h2>Name : ${info.name}</h2>
    <h2>Fathers Name : ${info.fathers} </h2>
    <h2>Mothers Name : ${info.mothers}</h2>
    <h2>School Name : ${info.schools}</h2>
    <h3>Age : ${info.age }</h3>
   

</div>
    
    
    
    
    
    
    `;







});
