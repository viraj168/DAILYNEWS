window.addEventListener('DOMContentLoaded', () => {
  // Load Blogs
  fetch('blog.json')
    .then(res => res.json())
    .then(blogs => {
      const container = document.getElementById('blog-container');
      blogs.forEach(blog => {
        container.innerHTML += `
          <div class="card">
            <h3>${blog.title}</h3>
            <p>${blog.desc}</p>
            <img src="${blog.img}" alt="Blog Image" />
          </div>
        `;
      });
    });

  // Load News
  fetch('news.json')
    .then(res => res.json())
    .then(newsList => {
      const container = document.getElementById('news-container');
      newsList.forEach(news => {
        container.innerHTML += `
          <div class="card">
            <h3>${news.title}</h3>
            <p>${news.desc}</p>
            <img src="${news.img}" alt="News Image" />
          </div>
        `;
      });
    });
});
