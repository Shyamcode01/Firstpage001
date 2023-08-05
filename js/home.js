
// menu 

let humber=document.querySelector('.humber');
let menu=document.querySelector('.navbar');
humber.addEventListener('click',(()=>{
    menu.classList.toggle('nav-show');
}))
//iamge slider 
let Slider=[
    {
        id:'S1',
        image:'Photo/slide (2).jpg',
        title1:'Simple',
        title2:'Service Available',
        paragraf:'Service is a word that we always use in our daily lives. It acts as an important role in many businesses and is a leading indicator to'
    },
    {
        id:'S2',
        image:'Photo/slide (3).jpg',
        title1:'New',
        title2:'Service Available',
        paragraf:'Service is a word that we always use in our daily lives. It acts as an important role in many businesses and is a leading indicator to'
    },
]
let slideid=document.querySelector('.wrappers');
 Slider.map((Slide,index)=>{
    let{image,title1,title2,paragraf,id}=Slide;
     return(
        slideid.innerHTML+=
        
        `
        <div class="wrapper ${id}">
        <div class="slide">
        <div class="image"><img src="${image}"class="slide-img" alt=""></div>
        <div class="slide-text">
            <h1><span class="spa">${title1}</span>${title2}</h1>
            <h3>${paragraf}</h3>
        </div>
        </div>
        </div>
        `
     )
 })


 let showslide=document.querySelectorAll('.wrapper');
  let indexn=0;
  fileshow();
  function fileshow(){
    for(let i=0;i<showslide.length;i++){
        showslide[i].style.display="none";
    }
    indexn++;
    if(indexn>showslide.length){
        indexn=1;
    }
    showslide[indexn-1].style.display="block";
    setTimeout(fileshow,3000);
  }
  


// card item 
let Card=[
    {
        id:1,
        name:'Adhar to link mobile check',
        image:'service photo/service (1).jpg',
        link:'https://myaadhaar.uidai.gov.in/genricDownloadAadhaar',
        category:'Adhar'

    },
    {
        id:2,
        name:'Adhar card download',
        image:'service photo/service (1).png',
        link:'https://myaadhaar.uidai.gov.in/genricDownloadAadhaar',
        category:'Adhar'

    },
    {
        id:3,
        name:'Link pan to adhar',
        image:'service photo/service (2).jpg',
        link:'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar',
        category:'Adhar'

    },
    {
        id:1,
        name:'adhar pan link check status',
        image:'service photo/service (2).png',
        link:'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status',
        category:'Adhar'

    },
    {
        id:4,
        name:'pan card apply',
        image:'service photo/service (3).jpg',
        link:'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
        category:'Pancard'

    },
    {
        id:5,
        name:'Pm kissan e kyc',
        image:'service photo/pension (3).jpg',
        link:'https://exlink.pmkisan.gov.in/aadharekyc.aspx',
        category:'Kissan'

    },
    {
        id:6,
        name:'Old pension apply',
        image:'service photo/pension (1).jpg',
        link:'https://sspy-up.gov.in/HindiPages/oldage_h.aspx',
        category:'Pension'

    },
    {
        id:7,
        name:'divyang pension apply',
        image:'service photo/pension (2).jpg',
        link:'https://sspy-up.gov.in/HindiPages/handicap_h.aspx#',
        category:'Pension'

    },
    {
        id:8,
        name:'divyang pension kyc',
        image:'service photo/pension (1).jpeg',
        link:'https://sspy-up.gov.in/oap/public_new/UserLogin.aspx',
        category:'Pension'

    },
    {
        id:9,
        name:'ration card list',
        image:'service photo/ration-Cards.jpg',
        link:"https://nfsa.up.gov.in/Food/citizen/Default.aspx",
        category:'Ration'
    },
]



let set=document.querySelector('.main-services');

 
Card.map((e)=>{
   return(
    set.innerHTML+=
    `
    <div class="card"data-name="${e.category}">
            <div class="img"><a href="${e.link}" class="plink"><img src="${e.image}"class="card-img" alt=""></a></div>
            <div class="card-btn">
            <a href="${e.link}" class="btn">Click Here</a>
            <div class="help">Help</div>
            </div>
        </div>
    `
   ) 
})


let Buttons=document.querySelectorAll('.btn1');
let cards=document.querySelectorAll('.card');

Buttons.forEach((button) => {
    button.addEventListener('click',(e)=>{
        document.querySelector('.active-btn1').classList.remove('active-btn1');
        e.target.classList.add('active-btn1');

        cards.forEach((card)=>{

            card.classList.add('hide');
            if(card.dataset.name===e.target.dataset.name ||e.target.dataset.name==='All'){
                card.classList.remove('hide');
            }
        })
    })
     
});


//  animate 
let textAnimate=['Simple service available here now'];

let news=document.querySelector('.News');

let NewsSlide=()=>{
    return(
        
        news.innerHTML+=
        `
        <div class="animate">
        <Marquee direction="left">${textAnimate}</marquee>
        
        </div>
        `
        )
        
    }

 
NewsSlide();

// scroll btn 

let Btnscroll=document.querySelector('.upkey');

Btnscroll.addEventListener('click',(()=>{
    scrollTo(0,0);
    
 
   
}))


// about page 

let AboutData=[
    {
        id:1,
        name:'Ajay singh',
        Destination:'ceo',
        Photo:'Photo/jk (1).jpg',
        title:'some people of leverl down here no able',
    },
    {
        id:2,
        name:'karan singh',
        Destination:'ceo',
        Photo:'Photo/jk (2).jpg',
        title:'some people of leverl down here no able',
    },
    {
        id:3,
        name:'manish singh',
        Destination:'ceo',
        Photo:'Photo/jk (1).jpg',
        title:'some people of leverl down here no able',
    },
    {
        id:4,
        name:'sanja singh',
        Destination:'ceo',
        Photo:'Photo/jk (2).jpg',
        title:'some people of leverl down here no able',
    }
]



let testemonio=document.querySelector('.carosole');
 
AboutData.map((data)=>{
    let {id,name,Destination,Photo,title}=data;
    return(
        testemonio.innerHTML+=
        `
        <div class="carosole-box">
        <div class="carosole-card">
        <img src="${Photo}"alt="photo"class="carosole-img">
        <div class="text-carosole">
        <h1 class="name">${name}</h1>
        <h2 class="destination">${Destination}</h2>
        <p class="title">${title}</p>
        </div>
        </div>
        </div>
        
        `
    )
})


// slide testemonio

let Testimonio=document.querySelectorAll('.carosole-box');

 let num=0;
 let Tlength=Testimonio.length;

 let TestiFunc=()=>{
    for(let i=0;i<Tlength;i++){
        Testimonio[i].style.display="none";
    }
    num++;
    if(num>Tlength){
        num=1
    }
    Testimonio[num-1].style.display="block";
    setTimeout(TestiFunc,4000);
 }
 TestiFunc();

 

//  form manage 

let contacth=document.querySelectorAll('#FormT');
 let btnsubmit=document.querySelector('#submit');

 
 
 let Submitbtn=()=>{
     contacth.forEach((e)=>{
         let file= e.value;
        
        let formfile=[{...{file}}];

        localStorage.setItem(formfile,formfile);
         
         console.log(formfile);
        })
        
        contacth.forEach((d)=>{
            d.value="";
        })
        
        
    }

btnsubmit.addEventListener('click',Submitbtn);

  
 
//   help button form 

let helpBtn=document.querySelectorAll('.help');
let shwoHelp=document.querySelector('.form-manage');
let closeHelp=document.querySelector('.close-h');

 helpBtn.forEach((btn)=>{
    btn.addEventListener('click',((e)=>{
         shwoHelp.classList.add('help-manage');
    }))
    btn.addEventListener('click',(()=>{
        scrollTo(0,0);
    }))
 })
closeHelp.addEventListener('click',(()=>{
    shwoHelp.classList.remove('help-manage');
}))
 

    
  
  
 
   