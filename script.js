// fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=96b42eab9a1f47d8983fd349fcb99c8e")
// .then((res)=> res.json())
//     .then(loadNews) ;



const languages = [
  {
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
  },
];

const newsContainer = document.getElementById("news-container");
const search_input = document.querySelector(".search input");
const search_btn = document.querySelector(".searchBtn");

const element = document.querySelector(".full--page");

const languagefilter1 = document.querySelector(".filter1");
const sortbyfilter2 = document.querySelector(".filter2");

//  Language select options
function languageChnage() {
  languages.forEach((language) => {
    let option = document.createElement("option");
    option.setAttribute("value", language.code);
    option.innerText = language.language;
    languagefilter1.appendChild(option);
  });
}
languageChnage();

//  Build the showNews Function
function showNews(data) {
  newsContainer.innerHTML = "";
  if(data.length > 0){
    data.forEach((news) => {
      console.log(news);

      // console.log(news) ;
      if(news.image != null){
        const news_card = document.createElement("div");
        const news_source = document.createElement("span");
        const news_image = document.createElement("img");
        const news_content = document.createElement("div");
        const news_heading = document.createElement("h3");
        const news_info = document.createElement("span");
        const news_desc = document.createElement("p");

        news_source.innerText = news.source.name;
        news_source.className = "news--source";

        news_image.setAttribute("src", news.image);
        news_image.className = "news--image";

        news_content.className = "news--content";

        news_heading.textContent = news.title;
        news_heading.className = "news--heading";

        news_info.textContent =
          news.source.name + " " + new Date(news.publishedAt).toLocaleString();
        news_info.className = "news--info";

        news_desc.textContent = news.description;
        news_desc.className = "news--desc";

        news_content.appendChild(news_heading);
        news_content.appendChild(news_info);
        news_content.appendChild(news_desc);

        news_card.className = "news--card";
        news_card.appendChild(news_source);
        news_card.appendChild(news_image);
        news_card.appendChild(news_content);

        newsContainer.appendChild(news_card);
      }
    });
  }
}

let data;
let searchTerm = "sports";
let lang = "en";
let preference = "relevance";
function loadNews(searchItem, lang) {
  //  Using Fetch Functionality to get the News Data
  console.log("Loading ... ");
  // fetch(
  //   `https://gnews.io/api/v4/search?q=${searchTerm}&lang=${lang}&apikey=60ed5966cde1ff77fcd6f65bb247ccc8`
  // )
  fetch(
    `https://gnews.io/api/v4/search?q=${searchItem}&lang=${lang}&apikey=60ed5966cde1ff77fcd6f65bb247ccc8`
  )
    .then((res) => res.json())
    .then((res) => {
      data = res.articles;
      console.log(data);
      showNews(data);
    })
    .catch((err) => console.log(err));
}
//  Search and filter Functionality
// let searchTerm = "sports";
// let lang = "en";
// let preference = "relevance";

search_btn.addEventListener("click", () => {
  searchTerm = search_input.value.toLowerCase().trim();
  if (searchTerm.length === 0) {
    alert("Please eneter a search keyword ");
    return;
  }
  loadNews(searchTerm, lang, preference);
});

// Trigger search on "Enter" key press
search_input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchTerm = search_input.value.toLowerCase().trim();
    if (searchTerm.length === 0) {
      alert("Please enter a search keyword");
      return ; 
    }
    loadNews(searchTerm, lang, preference);
  }
});

//  Adding Event Listener to dropdown change
languagefilter1.addEventListener("change", (event) => {
  lang = event.target.value;
  console.log("Selected language is : ", lang);
  loadNews(searchTerm, lang);
  // lang = languagefilter1.value ;
  // loadNews(searchTerm, lang, preference) ;
});

//  Adding Event Listener to dropdown change
sortbyfilter2.addEventListener("change", (event) => {
  preference = event.target.value;
  // loadNews(searchTerm, lang, preference) ;
  console.log("Selected sort by is : ", preference);
  applyFilter(preference);
});

//  Apply Filter Functionality
function applyFilter(criteria) {
  let sortedNews = [];

  switch (criteria) {
    case "relevancy":
      sortedNews = [...data]; // create a copy to maintain the original order .
      break;

    case "popularity":
      sortedNews = [...data].sort((a, b) => {
        const authorA = a.source.name ? a.source.name.toLowerCase() : " "; // handle undefined
        const authorB = b.source.name ? b.source.name.toLowerCase() : " "; // handle undefined
        return authorA.localeCompare(authorB);
      });
      break;

    case "publishedAt":
      sortedNews = [...data].sort((a, b) => {
        return new Date(a.publishedAt) - new Date(b.publishedAt);
      });
      break;

    default:
      sortedNews = [...data];
      break;
  }
  showNews(sortedNews);
}
loadNews(searchTerm, lang);
