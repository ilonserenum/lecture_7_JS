const dropdownMenu = document.getElementById("dropdown");
const mainContent = document.getElementById("content");
const newArticle = document.getElementById("new-article-content");

function toggleDropdown() {
  const isShown = dropdownMenu.className.includes("show");

  if (isShown) {
    dropdownMenu.className = "dropdown hide";
  } else {
    dropdownMenu.className = "dropdown show";
    dropdownMenu.style.display = "flex";
  }
}

function addArticle () {
    const text = newArticle.value;
    const numberOfArticles = document.getElementsByClassName("article").length;
    const article = document.createElement("div");
    article.classList.add("article");
    article.id = "article-" + numberOfArticles.toString();
    const title = document.createElement("div");
    title.classList.add("title");
    title.addEventListener('click', function(e) {
        toggleAccordionItem(numberOfArticles.toString());
    });
    const titleText = document.createElement("h1");
    titleText.innerText = `Article #${numberOfArticles + 1}`;
    title.appendChild(titleText);
    const accordionIcon = document.createElement("i");
    accordionIcon.className = "fa fa-plus accordion-icon";
    accordionIcon.ariaHidden = true;
    title.appendChild(accordionIcon);
    const articleContent = document.createElement("div");
    articleContent.classList.add("article-content");
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    articleContent.appendChild(paragraph);
    article.appendChild(title);
    article.appendChild(articleContent);
    mainContent.appendChild(article);
    newArticle.value = "";
}

function toggleAccordionItem(accordionItemId) {
    const article = document.getElementById("article-" + accordionItemId);
    const content = article.getElementsByClassName("article-content")[0];
    const isShown = content.className.includes("show");

    if (isShown) {
      content.className = "article-content hide";
      content.style.display = "none";
    } else {
      content.className = "article-content show";
      content.style.display = "flex";
    }
}