/* Populate gallery from JSON */
fetch('photos.json')
  .then(r => r.json())
  .then(data => {
    const gallery = document.getElementById('gallery');
    data.forEach(({thumb, full, title}) => {
      const a = document.createElement('a');
      a.href = full || thumb;
      a.setAttribute('data-fancybox', 'gallery');
      a.setAttribute('data-caption', title);
      const img = document.createElement('img');
      img.src = thumb;
      img.alt = title;
      a.appendChild(img);
      gallery.appendChild(a);
    });
  });

/* Year in footer */
document.getElementById('year').textContent = new Date().getFullYear();

/* Optional: add Fancybox for lightbox (uncomment below) */
// const script = document.createElement('script');
// script.src = "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js";
// document.head.appendChild(script);
// const link = document.createElement('link');
// link.rel = "stylesheet";
// link.href = "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css";
// document.head.appendChild(link);
