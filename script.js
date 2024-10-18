// fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=96b42eab9a1f47d8983fd349fcb99c8e")
// .then((res)=> res.json())
//     .then(loadNews) ;

const news = [
  {
    source: {
      id: null,
      name: "Search Engine Journal",
    },
    author: "Brooke Osmundson",
    title:
      "Reddit Makes Game-Changing Updates to Keyword Targeting via @sejournal, @brookeosmundson",
    description:
      "Reddit announced their keyword targeting expansion today, available on both feed and conversation ad placements. Also announced were AI keyword suggestions to help bolster performance.\nThe post Reddit Makes Game-Changing Updates to Keyword Targeting appeared …",
    url: "https://www.searchenginejournal.com/reddit-makes-game-changing-updates-to-keyword-targeting/529841/",
    urlToImage:
      "https://www.searchenginejournal.com/wp-content/uploads/2024/10/shutterstock_2430356195-924.png",
    publishedAt: "2024-10-11T16:00:24Z",
    content:
      "In a big move for digital advertisers, Reddit has just introduced a new Keyword Targeting feature, changing the game for how marketers reach their target audiences.\r\nThis addition brings fresh potent… [+5583 chars]",
  },
  {
    source: {
      id: null,
      name: "Search Engine Journal",
    },
    author: "Moz",
    title:
      "Why Your Keyword Strategy Isn’t Driving Enough Traffic (And How to Fix It) via @sejournal, @Moz",
    description:
      "Developing keyword strategy is an intricate, research-heavy task. Learn about the biggest mistakes and how to avoid them.\nThe post Why Your Keyword Strategy Isn’t Driving Enough Traffic (And How to Fix It) appeared first on Search Engine Journal.",
    url: "https://www.searchenginejournal.com/moz-fix-your-keyword-strategy-spa/527357/",
    urlToImage:
      "https://www.searchenginejournal.com/wp-content/uploads/2024/09/featured-815.jpg",
    publishedAt: "2024-09-25T05:00:25Z",
    content:
      "This post was sponsored by Moz. The opinions expressed in this article are the sponsor’s own.\r\nThe scope of modern keyword strategy is expansive and crosses many disciplines. As Google leans further … [+9215 chars]",
  },

  {
    source: {
      id: null,
      name: "Hubspot.com",
    },
    author: "esantiago@hubspot.com (Erica Santiago)",
    title: "I Tried Creating a YouTube Channel Using Only AI",
    description:
      "Recently, I came across a viral video from Jensen Tung, a talented creator on our HubSpot Creator Network.",
    url: "https://blog.hubspot.com/marketing/create-youtube-channel-using-five-ai-tools#article",
    urlToImage:
      "https://www.hubspot.com/hubfs/Untitled%20design%20-%202024-10-11T134344.346.jpg",
    publishedAt: "2024-10-15T11:00:00Z",
    content:
      "Recently, I came across a viral video from Jensen Tung, a talented creator on our HubSpot Creator Network.\r\nIn the video, Jensen created a YouTube channel using only AI! He made it look easy, but is … [+5818 chars]",
  },
  {
    source: {
      id: null,
      name: "Search Engine Journal",
    },
    author: "Loren Baker",
    title:
      "Why & How To Track Google Algorithm Updates via @sejournal, @lorenbaker",
    description:
      "Check out these algorithm monitoring tools to track ranking fluctuations and SERP volatility.\nThe post Why & How To Track Google Algorithm Updates appeared first on Search Engine Journal.",
    url: "https://www.searchenginejournal.com/seo/track-google-algorithm-updates/",
    urlToImage:
      "https://www.searchenginejournal.com/wp-content/uploads/2024/06/shutterstock_2215892491-236.jpg",
    publishedAt: "2024-09-22T23:00:29Z",
    content:
      "Google constantly evaluates and updates its algorithms. There can be hundreds or even thousands of individual changes per year.\r\nGoogle does confirm some of the major updates, such as site reputation… [+11455 chars]",
  },
  {
    source: {
      id: null,
      name: "Search Engine Journal",
    },
    author: "Brian Harnish",
    title:
      "The 11 Best SEO Books You Should Read via @sejournal, @BrianHarnish",
    description:
      "Brush up on your SEO knowledge with recommended reading on link building and optimizing for local, ecommerce, entities, and more.\nThe post The 11 Best SEO Books You Should Read appeared first on Search Engine Journal.",
    url: "https://www.searchenginejournal.com/the-11-best-seo-books-you-should-read/527165/",
    urlToImage:
      "https://www.searchenginejournal.com/wp-content/uploads/2024/09/best-seo-books-230.jpg",
    publishedAt: "2024-09-30T10:30:31Z",
    content:
      "SEO is a rapidly evolving field, making it important for professionals to continuously expand their knowledge and skills.\r\nWe’ve put together a list of essential SEO books suitable for readers at var… [+14809 chars]",
  },
  {
    source: {
      id: null,
      name: "Css-tricks.com",
    },
    author: "Juan Diego Rodríguez",
    title: "CSS Anchor Positioning Guide",
    description:
      "Learn about CSS Anchor Positioning, including its syntax, properties, how it is used to position one element next to another, and even how it's used to resize elements relative to other elements.\n\nCSS Anchor Positioning Guide originally published on CSS-Trick…",
    url: "https://css-tricks.com/css-anchor-positioning-guide/",
    urlToImage:
      "https://css-tricks.com/wp-json/social-image-generator/v1/image/381364",
    publishedAt: "2024-10-02T15:26:48Z",
    content:
      "Not long ago, if we wanted a tooltip or popover positioned on top of another element, we would have to set our tooltip’s position to something other than static and use its inset/transform properties… [+27549 chars]",
  },
  {
    source: {
      id: null,
      name: "9to5Mac",
    },
    author: "Ben Lovejoy",
    title: "Second judge implies Apple lied in Epic lawsuit; denies request",
    description:
      "A second judge in the Apple versus Epic Games lawsuit has implied that the Cupertino company has lied to the court. It comes after the original judge strongly implied that Apple had not told the truth about the reasons for its new App Store policy.\n\n\n\nA secon…",
    url: "https://9to5mac.com/2024/09/30/second-judge-implies-apple-lied-in-epic-lawsuit-denies-request/",
    urlToImage:
      "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/09/Second-judge-implies-Apple-lied-in-Epic-lawsuit.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2024-09-30T11:14:38Z",
    content:
      "A second judge in the Apple versus Epic Games lawsuit has implied that the Cupertino company has lied to the court. It comes after the original judge strongly implied that Apple had not told the trut… [+4710 chars]",
  },
  
  {
    source: {
      id: null,
      name: "Codeproject.com",
    },
    author: "Trần_Tuấn_Anh",
    title:
      "Difference Between @RequestParam and @PathVariable Annotations in Spring",
    description:
      "In Spring, handling request parameters is a fundamental task that developers often encounter. Two commonly used annotations to achieve this are @RequestParam and @PathVariable. Though they may seem similar, they serve different purposes.",
    url: "https://www.codeproject.com/Articles/5388245/Difference-Between-RequestParam-and-PathVariable-A",
    urlToImage: null,
    publishedAt: "2024-09-17T15:21:00Z",
    content:
      "1. Introduction to @RequestParam and @PathVariable\r\nIn a Spring application, URL parameters and path variables are often required to capture dynamic values in HTTP requests. Both @RequestParam and @P… [+2779 chars]",
  },
  {
    source: {
      id: null,
      name: "Wpbeginner.com",
    },
    author: "Editorial Staff",
    title:
      "WPBeginner Spotlight 04: WordCamp US Highlights, Plugin Updates + More",
    description:
      "September has been packed with exciting WordPress developments, from new plugin features to major events like WordCamp US 2024. Whether you’re a website owner, developer, or WordPress enthusiast, there’s something here for you. In this issue, we will cover ev…",
    url: "https://www.wpbeginner.com/news/wpbeginner-spotlight-04-wordcamp-us-highlights-plugin-updates-more/",
    urlToImage:
      "https://www.wpbeginner.com/wp-content/uploads/2024/09/top-wordpress-news-september-2024-og.png",
    publishedAt: "2024-09-26T10:00:00Z",
    content:
      "September has been packed with exciting WordPress developments, from new plugin features to major events like WordCamp US 2024. Whether you’re a website owner, developer, or WordPress enthusiast, the… [+9576 chars]",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "news.google.com",
    title:
      "Google signed a deal to power data centers with nuclear micro-reactors from Kairos — but the 2030 timeline is very optimistic",
    description:
      "Google signed a deal to power data centers with nuclear micro-reactors from Kairos — but the 2030 timeline is very optimistic TechCrunch\nGoogle Backs New Nuclear Plants to Power AI The Wall Street Journal\nNew nuclear clean energy agreement with Kairos Power T…",
    url: "https://biztoc.com/x/afcf21ec36e76be3",
    urlToImage: "https://biztoc.com/cdn/804/og.png",
    publishedAt: "2024-10-15T01:25:19Z",
    content:
      "Google signed a deal to power data centers with nuclear micro-reactors from Kairos but the 2030 timeline is very optimistic TechCrunchGoogle Backs New Nuclear Plants to Power AI The Wall Street Journ… [+131 chars]",
  },
  {
    source: {
      id: null,
      name: "Upenn.edu",
    },
    author: "Mark Liberman",
    title: "Ben Zimmer on Keywords",
    description:
      "Christine Oh, \"Wolf Humanities Center hosts linguist, columnist Ben Zimmer for lecture on 'keywords'\", The Daily Pennsylvanian 10/11/2024: The Wolf Humanities Center hosted Wall Street Journal language columnist Ben Zimmer at the ARCH building for a talk titl…",
    url: "https://languagelog.ldc.upenn.edu/nll/?p=66463",
    urlToImage: null,
    publishedAt: "2024-10-11T11:58:28Z",
    content:
      "« previous post | \r\nChristine Oh, \"Wolf Humanities Center hosts linguist, columnist Ben Zimmer for lecture on 'keywords'\", The Daily Pennsylvanian 10/11/2024:\r\nThe Wolf Humanities Center hosted Wall … [+3773 chars]",
  },
  {
    source: {
      id: null,
      name: "AdExchanger",
    },
    author: "AdExchanger",
    title:
      "TikTok Search, But It’s Going For Amazon; Can CTV Supply Outpace Demand?",
    description:
      "TikTok announced this week that it would allow search advertising to be targeted by keyword. Plus, streaming ad supply now outpaces demand.\nThe post TikTok Search, But It’s Going For Amazon; Can CTV Supply Outpace Demand? appeared first on AdExchanger.",
    url: "http://www.adexchanger.com/daily-news-roundup/friday-04102024/",
    urlToImage:
      "https://live-adexchanger.pantheonsite.io/wp-content/uploads/2024/10/HI.RES_.marathon.cartoon.jpg",
    publishedAt: "2024-10-04T04:03:54Z",
    content:
      "Heres todays AdExchanger.com news round-up Want it by email? Sign up here.\r\nSearch High And Low\r\nTikTok announced this week that it would allow search advertising to be targeted by keyword. Previousl… [+4072 chars]",
  },
  {
    source: {
      id: null,
      name: "MakeUseOf",
    },
    author: "Ali Haider",
    title: "I'm Finally Leaving Google Chrome, and These Are the 4 Reasons Why",
    description: "Give Chrome the boot; I know I am.",
    url: "https://www.makeuseof.com/reasons-leaving-google-chrome/",
    urlToImage:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/07/chrome-edge-firefox-safari-logos-with-laptop-in-background.jpg",
    publishedAt: "2024-09-28T16:30:12Z",
    content:
      "Ive been a loyal Chrome user for as long as I can remember, but lately, Ive felt a growing dissatisfaction. There are multiple reasons for this, from privacy concerns to resource hogging and limited … [+5113 chars]",
  },
  {
    source: {
      id: null,
      name: "Theregister.com",
    },
    author: "Laura Dobberstein",
    title:
      "Data harvesting superapp admits it struggled to wield data – until it built an LLM",
    description:
      "Engineers at Grab don't need to ask each other questions any more\nAsia's answer to Uber, Singaporean superapp Grab, has admitted it gathered more data than it could easily analyze – until a large language and generative AI turned things around.…",
    url: "https://www.theregister.com/2024/09/27/grab_dataset_llm/",
    urlToImage:
      "https://regmedia.co.uk/2024/03/05/shutterstock_editorial_only_grab_superapp.jpg",
    publishedAt: "2024-09-27T06:56:07Z",
    content:
      "Asia's answer to Uber, Singaporean superapp Grab, has admitted it gathered more data than it could easily analyze until a large language and generative AI turned things around.\r\nGrab offers ride-shar… [+3958 chars]",
  },
  {
    source: {
      id: null,
      name: "Digiday",
    },
    author: "The Washington Post",
    title:
      "How brands are increasing trust and CTR by advertising in news publications",
    description:
      "Jana Meron, vp of revenue operations and data, The Washington Post In 2023, more than one-third of brands entirely excluded news from their marketing mix, driven largely by concerns over brand suitability. This “fear of the screenshot” looms large — one misst…",
    url: "http://digiday.com/sponsored/how-brands-are-increasing-trust-and-ctr-by-advertising-in-news-publications/",
    urlToImage:
      "https://digiday.com/wp-content/uploads/sites/3/2024/10/mobilecoins_1030x600-01-02.webp",
    publishedAt: "2024-10-16T18:45:04Z",
    content:
      "In 2023, more than one-third of brands entirely excluded news from their marketing mix, driven largely by concerns over brand suitability. This fear of the screenshot looms large one misstep and a br… [+3387 chars]",
  },
  {
    source: {
      id: null,
      name: "TechSpot",
    },
    author: "Zo Ahmed",
    title:
      "BrainChip unveils microscopic NPU that consumes less than 1 milliwatt of power",
    description:
      "The Akida Pico packs BrainChip's event-based neural processing capabilities into an area of just 0.12 square millimeters. Yet despite that size, it can handle relatively intensive AI workloads like voice wakeup, keyword spotting, noise reduction, and sensor p…",
    url: "https://www.techspot.com/news/105023-brainchip-unveils-microscopic-ai-npu-consumes-less-than.html",
    urlToImage:
      "https://www.techspot.com/images2/news/bigimage/2024/10/2024-10-06-image-10.jpg",
    publishedAt: "2024-10-07T11:09:00Z",
    content:
      "Why it matters: Australian hardware company BrainChip has unveiled its latest neural processor the incredibly small and efficient Akida Pico NPU. Designed to be an AI accelerator, it could enable a n… [+2375 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "Carly Quellman",
    title: "AI Could Help You Ace Your Job Interview. But There's a Cost",
    description:
      "Final Round AI wants to support your interview process in a highly competitive professional world -- as long as you can pay a huge subscription fee upfront.",
    url: "https://www.cnet.com/tech/services-and-software/ai-could-help-you-ace-your-job-interview-but-theres-a-cost/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/bd5ec83a56d834fc637c6519c9b71db479180c3d/hub/2024/09/24/0d526e36-6299-4a2f-907a-bab6b61261e4/gettyimages-1642394553.jpg?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2024-09-26T12:00:20Z",
    content:
      "Researching a company's background, prepping potential interview questions and believing in your skillset is part of a good interview strategy — but sometimes, the preparation for an interview versus… [+7066 chars]",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "news.google.com",
    title:
      "Google ordered to open up the Play Store in Epic Games antitrust ruling",
    description:
      "Google ordered to open up the Play Store in Epic Games antitrust ruling Engadget\nWhy we’re appealing the Epic Games verdict The Keyword\nGoogle Must Open Android to Other App Stores and Billing Options, Judge Rules The New York Times\nGoogle ordered to open Pla…",
    url: "https://biztoc.com/x/dcb19ecac04882db",
    urlToImage: "https://biztoc.com/cdn/803/og.png",
    publishedAt: "2024-10-07T21:43:12Z",
    content:
      "Google ordered to open up the Play Store in Epic Games antitrust ruling EngadgetWhy were appealing the Epic Games verdict The KeywordGoogle Must Open Android to Other App Stores and Billing Options, … [+131 chars]",
  },
  {
    source: {
      id: null,
      name: "Search Engine Journal",
    },
    author: "Brooke Osmundson",
    title:
      "Optimizing International PPC Campaigns: Best Practices For Keyword Localization via @sejournal, @brookeosmundson",
    description:
      "Unlock global PPC success with expert tips on keyword localization, tailored bidding, and creative adaptation. Learn how to optimize international campaigns for maximum impact.\nThe post Optimizing International PPC Campaigns: Best Practices For Keyword Locali…",
    url: "https://www.searchenginejournal.com/optimizing-international-ppc-campaigns-best-practices-for-keyword-localization/525975/",
    urlToImage:
      "https://www.searchenginejournal.com/wp-content/uploads/2024/09/international-ppc-campaigns-237.png",
    publishedAt: "2024-10-07T10:30:34Z",
    content:
      "As brands expand into new international markets, the challenge of running successful PPC campaigns becomes increasingly complex.\r\nNavigating the differences in culture, language, consumer behavior, a… [+7878 chars]",
  },
  {
    source: {
      id: null,
      name: "Web.dev",
    },
    author: null,
    title: "The new CSS property that boosts your rendering performance",
    description:
      "The CSS content-visibility property enables web content rendering performance benefits by skipping rendering of off-screen content. This article shows you how to leverage this new CSS property for faster initial load times, using the auto keyword. You will al…",
    url: "https://web.dev/articles/content-visibility",
    urlToImage: null,
    publishedAt: "2024-10-07T10:45:22Z",
    content:
      "Improve initial load time by skipping the rendering of offscreen content.\r\nThe\r\ncontent-visibility\r\nproperty, launching in Chromium 85, might be one of the most impactful new CSS\r\nproperties for impr… [+13628 chars]",
  },
  {
    source: {
      id: null,
      name: "Search Engine Journal",
    },
    author: "Brooke Osmundson",
    title:
      "How To Set Up Your First Paid Search Campaign via @sejournal, @brookeosmundson",
    description:
      "Learn how to set up your first paid search campaign with this step-by-step guide, covering goals, keyword research, ad copy, and more.\nThe post How To Set Up Your First Paid Search Campaign appeared first on Search Engine Journal.",
    url: "https://www.searchenginejournal.com/how-to-set-up-your-first-paid-search-campaign/525977/",
    urlToImage:
      "https://www.searchenginejournal.com/wp-content/uploads/2024/09/your-first-paid-search-campaign-409.jpg",
    publishedAt: "2024-09-27T08:30:23Z",
    content:
      "Paid search advertising is a powerful way to drive traffic and conversions for your brand.\r\nHowever, setting up your first campaign can feel overwhelming if you’re new to the game. Even if you’re a P… [+17744 chars]",
  },
  {
    source: {
      id: null,
      name: "Hubspot.com",
    },
    author: "Jenny Romanchuk",
    title:
      "How to Calculate and Manage Your PPC Budget: 12 Experts Share Their Tips",
    description:
      "Here’s a real story. Upon writing this piece, I tried to set up a PPC campaign on a whim with no plan or clue (practicing on my friend’s small business—oops). I just set the budget and let it run. Was it good? I’ll leave it up to you.",
    url: "https://blog.hubspot.com/marketing/ppc-budget#article",
    urlToImage:
      "https://www.hubspot.com/hubfs/ppc-budget-1-20240923-8945535.webp",
    publishedAt: "2024-09-24T11:00:00Z",
    content:
      "Heres a real story. Upon writing this piece, I tried to set up a PPC campaign on a whim with no plan or clue (practicing on my friends small businessoops). I just set the budget and let it run. Was i… [+16164 chars]",
  },
  {
    source: {
      id: null,
      name: "Jamesg.blog",
    },
    author: null,
    title: "Search Engine Shortcuts in Firefox",
    description:
      "Firefox has a feature that lets you map a character or sequence of characters typed in the Firefox address bar to a custom search engine. For example, you can map w to Wikipedia, so the query w coffee would take you to the Wikipedia search page for coffee (wh…",
    url: "https://jamesg.blog/2024/10/13/search-engine-shortcuts-firefox/",
    urlToImage:
      "https://screenshots.jamesg.blog/?url=https://jamesg.blog/2024/10/13/search-engine-shortcuts-firefox/",
    publishedAt: "2024-10-13T22:22:07Z",
    content:
      "Firefox has a feature that lets you map a character or sequence of characters typed in the Firefox address bar to a custom search engine. For example, you can map w to Wikipedia, so the query w coffe… [+1579 chars]",
  },
];

const newsContainer = document.getElementById("news-container");

// fetch("https://newsapi.org/v2/everything?q=Apple&from=2024-10-18&sortBy=popularity&apiKey=96b42eab9a1f47d8983fd349fcb99c8e")
//     .then((res) => res.json())
//     .then(loadNews) ;
// fetch("https://newsapi.org/v2/everything?q=Apple&apiKey=96b42eab9a1f47d8983fd349fcb99c8e")
//     .then((res) => res.json())
//     .then(loadNews) ;

//  Build the showNews Function
function showNews(data) {
  data.forEach((news) => {
    // console.log(news) ;
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    const source = document.createElement("span");
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const author = document.createElement("span");
    const published = document.createElement("p");

    // Now use the data to build the card
    source.classList.add("source");
    source.innerText = news.source.name;

    image.classList.add("image");
    image.src = news.urlToImage;
    image.alt = news.title;
    // news_image.setAttribute("src", news.urlToImage);
    // news_image.className = "image" ;

    title.classList.add("title");
    title.innerText = news.title;

    // author.classList.add("author") ;
    author.className = "author published";
    author.innerText = `${news.author} . ${news.publishedAt}`;

    published.classList.add("description");
    published.innerText = news.description;

    // newCard.appendChild(source, image, title, author, published) ;
    newCard.appendChild(source);
    newCard.appendChild(image);
    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(published);
    newsContainer.appendChild(newCard);
  });
}

function loadNews(data) {
  console.log("Loading News ... ", data);
  //   showNews(data.articles);
  showNews(data);
}
loadNews(news);
