
preShownNews();

function preShownNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a4f38075bc0441fd85dc21dbbb2da58b
    `;
  
    console.log("function running");
  
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
          let str = "";
          data.articles.forEach((ele) => {
              str += 
              `<div class="card mb-3" style="max-width: 100%;">
              <div class="row g-0">
              <div class="col-md-4">
              <img src="${ele.urlToImage}" class="img-fluid rounded-start" style="object-fit: fill;" alt="...">
              </div>
              <div class="col-md-8">
              <div class="card-body">
              <h5 class="card-title">${ele.title}</h5>
              <p class="card-text">${ele.description}</p>
              <p class="card-text"><small class="text-muted">${ele.publishedAt}</small></p>
              
              <a href="${ele.url}" target="_blank"><button type="button" class="btn btn-secondary mb-2">Read More</button></a>
              </div>
              </div>
              </div>
              </div>`;
          });
  
          document.getElementById("newsSection").innerHTML = str;
          
      });
}

function searchText() {
  let searchInnerTxt = document.getElementById("searchTxt").value;
  let url = `https://newsapi.org/v2/everything?q=${searchInnerTxt}&apiKey=a4f38075bc0441fd85dc21dbbb2da58b`;

  console.log("function running");

  fetch(url)
    .then((data) => data.json())
    .then((data) => {
        let str = "";
        data.articles.forEach((ele) => {
            str += 
            `<div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
            <div class="col-md-4">
            <img src="${ele.urlToImage}" class="img-fluid rounded-start" style="object-fit: fill;" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${ele.title}</h5>
            <p class="card-text">${ele.description}</p>
            <p class="card-text"><small class="text-muted">${ele.publishedAt}</small></p>
            
            <a href="${ele.url}" target="_blank"><button type="button" class="btn btn-secondary mb-2">Read More</button></a>
            </div>
            </div>
            </div>
            </div>`;
        });

        document.getElementById("newsSection").innerHTML = str;
        
    });
}
