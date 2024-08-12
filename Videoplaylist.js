
const videosList = [
{
   video: 'images/WhatsApp Video 2024-07-28 at 20.14.32_f140408a.mp4',
   title: 'Nicole'
},
{
   video: 'images/vid-3.mp4',
   title: 'emoji falling animat'
}
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
   var { video, title } = item;
   return (
       `<div class="list active">
       <video src=${video} class="list-video"></video>
       <h3 class="list-title">${title}</h3>
       </div>`
       )
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
   vid.onclick = () => {
       videoList.forEach(remove => { remove.classList.remove('active') });
       vid.classList.add('active');
       let src = vid.querySelector('.list-video').src;
       let title = vid.querySelector('.list-title').innerHTML;
       document.querySelector('.main-video-container .main-video').src = src;
       document.querySelector('.main-video-container .main-video').play();
       document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});
