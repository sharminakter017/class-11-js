    const phonedata = [

       {
         SerialNO : 01,
         Name     : 'Asraful Haque',
         Skill    : 'Wordpress developer',
         Location : 'Mirpur',
         Age      : 18,
         PhoneNO  : '01790169442',
         Photo    : "https://pngimage.net/wp-content/uploads/2018/06/indian-man-png-5.png" ,

       },
       {
        SerialNO : 02,
        Name     : 'Miron',
        Skill    : 'Golang',
        Location : 'Uttara',
        Age      : 20,
        PhoneNO  : '01779016945',
        Photo    :  "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/2021_6$largeimg_246853733.jpg"  ,

      },
      {
        SerialNO : 03,
        Name     : 'Ashik kabir',
        Skill    : 'Django',
        Location : 'Barishal',
        Age      : 35,
        PhoneNO  : '01790169356',
        Photo    : "https://pcceagles.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2018/10/8/JosephLiwosz.jpg" ,

      },
      {
        SerialNO : 04,
        Name     : 'Ayman sadik',
        Skill    : 'Wordpress developer',
        Location : 'Rongpur',
        Age      : 21,
        PhoneNO  : '01790169445',
        Photo    : "https://i.postimg.cc/LshDqqb9/Screenshot-7.png"  ,

      },
      {
        SerialNO : 05,
        Name     : 'Nur-Alam',
        Skill    : 'Phython',
        Location : 'Bagura',
        Age      : 25,
        PhoneNO  : '01790159442',
        Photo    : "https://pngimage.net/wp-content/uploads/2018/06/indian-man-png-5.png" ,

      },
      {
        SerialNO : 06,
        Name     : 'Al-Amin',
        Skill    : 'Java',
        Location : 'Rajsahi',
        Age      : 28,
        PhoneNO  : '01768169442',
        Photo    : "https://jamuionline.com/wp-content/uploads/2021/01/4b844fd800ef49025ab30e247ca8be34.png" ,

      },
      {
        SerialNO : 07,
        Name     : 'Sumaiya akter',
        Skill    : 'Mearn Stack',
        Location : 'Chandpur',
        Age      : 19,
        PhoneNO  : '01890169442',
        Photo    : "https://www.apeejay.edu/panchsheel/images/achievements/2021/Brem-Dutt-Memorial-Pan/Brem-Dutt-Memorial-Pan-1.jpg" ,

      },
      {
        SerialNO : 08,
        Name     : 'Rayhan munsi',
        Skill    : 'Java script',
        Location : 'Bosundhora',
        Age      : 22,
        PhoneNO  : '01726169442',
        Photo    : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/2021_6$largeimg_246853733.jpg" ,

      },
      {
        SerialNO : 09,
        Name     : 'Saimun Sikdar',
        Skill    : 'Wordpress developer',
        Location : 'Bagerhat',
        Age      : 30,
        PhoneNO  : '01799179442',
        Photo    : "https://www.apeejay.edu/panchsheel/images/achievements/2021/Brem-Dutt-Memorial-Pan/Brem-Dutt-Memorial-Pan-1.jpg" ,

      },
      {
        SerialNO : 10,
        Name     : 'Masum Billah',
        Skill    : 'GoLang',
        Location : 'Uttara',
        Age      : 26,
        PhoneNO  : '01990177442',
        Photo    : "https://i.pinimg.com/236x/65/52/71/655271f0571687022d6b4ba3ca276c48.jpg" ,

      },







    ];



    const bookinfo = document.querySelector('.phonebook .table');
    phonedata.map(book =>{
      
        bookinfo.innerHTML += `


       

        <tbody>
        <tr>
            <td>${book.SerialNO}</td>
            <td>${book.Name}</td>
            <td>${book.Skill}</td>
            <td>${book.Location}</td>
            <td>${book.Age}</td>
            <td>${book.PhoneNO}</td>
            <td><img class="amrimg" src="${book.Photo}" alt="Screenshot-7" </td>
        </tr>
    </tbody>
        
        
        
        
        
        
        
        `;


    })
