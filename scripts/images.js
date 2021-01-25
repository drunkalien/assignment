const imagesJSON = `[
  {
    "url": "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F013%2F564%2Fdoge.jpg",
    "caption": "doge"
  },
  {
    "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/womanyellingcat-1573233850.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=1200:*",
    "caption": "Women yelling at a cat"
  },
  {
    "url": "https://d.newsweek.com/en/full/823815/rick-morty-rest-ricklaxation.jpg?w=1600&h=900&q=88&f=c639411db5692a414ef36b578e784621",
    "caption": "Rick and Morty"
  },
  {
    "url": "https://i.kym-cdn.com/entries/icons/mobile/000/020/002/memeeman.jpg",
    "caption": "meme-man"
  },
  {
    "url": "https://www.meme-arsenal.com/memes/1b3eb9fc181288cf391df06cb52d9caa.jpg",
    "caption": "Saitama"
  },
  {
    "url": "https://i.guim.co.uk/img/media/3aab8a0699616ac94346c05f667b40844e46322f/0_123_5616_3432/master/5616.jpg?width=700&quality=85&auto=format&fit=max&s=a476da702aff265ce6f586be1412b1e1",
    "caption": "harold"
  },
  {
    "url": "https://i.kym-cdn.com/entries/icons/facebook/000/034/915/vibingcatttt.jpg",
    "caption": "vibing cat"
  },
  {
    "url": "https://wallup.net/wp-content/uploads/2018/09/26/223370-anime-Tokyo_Ghoul-Kaneki_Ken-748x421.jpg",
    "caption": "Kaneki Ken"
  },
  {
    "url": "https://i.pinimg.com/originals/aa/94/4b/aa944bb46b7bbda797a12a7fc489b722.jpg",
    "caption": "Haise Sasake"
  }
]
`;

const images = JSON.parse(imagesJSON);

const container = document.querySelector(".gallery-items-container");
const button = document.querySelector(".gallery-btn");
let isClicked = false;

for (let i = 0; i < images.length; i++) {
  container.innerHTML += `
    <div class="gallery-item">
      <div class="image-link" >
        <img class="image" src="${images[i].url}"/>
        ${images[i].caption}
      </div>
    </div>
    `;
}
const imgs = document.querySelectorAll(".gallery-item");
button.addEventListener("click", () => {
  isClicked = !isClicked;
  for (let img of imgs) {
    if (isClicked) {
      img.classList.add("clicked");
    } else {
      img.classList.remove("clicked");
    }
  }
});

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);

for (let img of imgs) {
  img.addEventListener("click", (e) => {
    lightbox.innerHTML = `${e.target.outerHTML}`;
    lightbox.classList.add("active");
    console.log(lightbox);
  });
}
lightbox.addEventListener("click", () => lightbox.classList.remove("active"));
