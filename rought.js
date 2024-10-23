const subtleColors = [{
    name: "Lavender Mist",
    color: "rgba(230, 224, 238, 0.8)",
  },
  {
    name: "Mint Green",
    color: "rgba(218, 240, 233, 0.8)",
  },
  {
    name: "Peach Blossom",
    color: "rgba(255, 235, 238, 0.8)",
  },
  {
    name: "Sky Blue",
    color: "rgba(219, 238, 248, 0.8)",
  },
  {
    name: "Creamy Ivory",
    color: "rgba(255, 253, 240, 0.8)",
  },
  {
    name: "Light Gray",
    color: "rgba(238, 238, 238, 0.8)",
  },
  {
    name: "Pale Beige",
    color: "rgba(245, 240, 235, 0.8)",
  },
  {
    name: "Soft Sand",
    color: "rgba(245, 240, 230, 0.8)",
  },
  {
    name: "Silver Gray",
    color: "rgba(220, 220, 220, 0.8)",
  },
  {
    name: "Pearl White",
    color: "rgba(255, 255, 245, 0.8)",
  },
  {
    name: "Lilac Haze",
    color: "rgba(235, 225, 240, 0.8)",
  },
  {
    name: "Seafoam Green",
    color: "rgba(220, 240, 238, 0.8)",
  },
  {
    name: "Apricot Glow",
    color: "rgba(255, 235, 225, 0.8)",
  },
  {
    name: "Cloud White",
    color: "rgba(255, 255, 255, 0.8)",
  },
  {
    name: "Mist Blue",
    color: "rgba(225, 235, 245, 0.8)",
  },
  {
    name: "Soft Pink",
    color: "rgba(255, 220, 230, 0.8)",
  },
  {
    name: "Pale Yellow",
    color: "rgba(255, 245, 220, 0.8)",
  },
  {
    name: "Lavender Blush",
    color: "rgba(255, 220, 240, 0.8)",
  },
  {
    name: "Baby Blue",
    color: "rgba(220, 230, 245, 0.8)",
  },
  {
    name: "Creamy Beige",
    color: "rgba(245, 240, 235, 0.8)",
  },
  {
    name: "Light Green",
    color: "rgba(225, 240, 230, 0.8)",
  },
  {
    name: "Pale Orange",
    color: "rgba(255, 235, 220, 0.8)",
  },
  {
    name: "Soft Purple",
    color: "rgba(230, 220, 240, 0.8)",
  },
  {
    name: "Ivory White",
    color: "rgba(255, 253, 245, 0.8)",
  },
  {
    name: "Light Yellow",
    color: "rgba(255, 245, 225, 0.8)",
  },
  {
    name: "Pale Blue",
    color: "rgba(220, 230, 240, 0.8)",
  },
  {
    name: "Soft Red",
    color: "rgba(255, 220, 225, 0.8)",
  },
  {
    name: "Creamy White",
    color: "rgba(255, 253, 245, 0.8)",
  },
  {
    name: "Light Pink",
    color: "rgba(255, 230, 235, 0.8)",
  },
];

const languages = [{
  code: "ar",
  language: "Arabic",
},
{
  code: "de",
  language: "German",
},
{
  code: "en",
  language: "English",
},
{
  code: "es",
  language: "Spanish; Castilian",
},
{
  code: "fr",
  language: "French",
},
{
  code: "he",
  language: "Hebrew",
},
{
  code: "it",
  language: "Italian",
},
{
  code: "nl",
  language: "Dutch; Flemish",
},
{
  code: "no",
  language: "Norwegian",
},
{
  code: "pt",
  language: "Portuguese",
},
{
  code: "ru",
  language: "Russian",
},
{
  code: "sv",
  language: "Swedish",
},
{
  code: "zh",
  language: "Chinese",
}
]

const news_container = document.querySelector(".news--container")
const search_input = document.querySelector('.searchinput');
const search_btn = document.querySelector('.search-icon');
const element = document.querySelector(".full--page");
const language_filter = document.querySelector('.filter1');
const sortby_filter = document.querySelector('.filter2');

// language select option
languages.forEach((language)=>{
let option = document.createElement("option");
option.setAttribute("value", language.code);
option.innerText = language.language;
language_filter.appendChild(option) ; 
})

// random color background generation
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * subtleColors.length);
  return subtleColors[randomIndex].color;
}
element.style.backgroundColor = getRandomColor();

// news showing
function showNews(data) {
news_container.innerHTML = "";
data.forEach((news) => {
  console.log(news);
  if(news.urlToImage != null){
      const news_card = document.createElement("div");
      const news_source = document.createElement("span");
      const news_image = document.createElement("img");
      const news_content = document.createElement("div");
      const news_heading = document.createElement("h3");
      const news_info = document.createElement("span");
      const news_desc = document.createElement("p");
  
      news_source.innerText = news.source.name;
      news_source.className = "news--source"
  
      news_image.setAttribute("src", news.urlToImage);
      news_image.className = "news--image";
  
      news_content.className = "news--content";
  
      news_heading.textContent = news.title;
      news_heading.className = "news--heading";
  
      news_info.textContent = news.author + " " + new Date(news.publishedAt).toLocaleString();;
      news_info.className = "news--info";
  
      news_desc.textContent = news.description;
      news_desc.className = "news--desc";
  
      news_content.appendChild(news_heading)
      news_content.appendChild(news_info)
      news_content.appendChild(news_desc)
  
      news_card.className = "news--card";
      news_card.appendChild(news_source)
      news_card.appendChild(news_image)
      news_card.appendChild(news_content)
  
      news_container.appendChild(news_card)
  }
});
}

function loadNews(searchTerm, lang, preference) {
console.log("Loading...");
fetch(https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=e4a49220c2874998b9900298aac654ea&language=${lang}&sortBy=${preference})
  .then((res) => res.json())
  .then((res) => {
    let data = res.articles;
    showNews(data);
  })
  .catch((err) => console.log(err))
}

// search and filter functionality
let searchTerm = "business";
let lang = 'en';
let preference = "relevance";  

search_btn.addEventListener("click", function () {
  searchTerm = search_input.value.toLowerCase().trim();
  if (searchTerm.length === 0) {
    alert("Please enter a search term");
    return;
}
  loadNews(searchTerm, lang, preference);
});

// Adding event listener for dropdown change
language_filter.addEventListener('change', (event) => {
lang = event.target.value;
console.log("Selected language:", lang);
loadNews(searchTerm, lang, preference);
});


sortby_filter.addEventListener('change', (event) => {
preference = event.target.value;
console.log("Selected sortBy:", preference);
loadNews(searchTerm, lang, preference);
});

loadNews(searchTerm, lang, preference);