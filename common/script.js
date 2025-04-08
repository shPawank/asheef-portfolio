window.addEventListener("DOMContentLoaded", () => {
    fetch("Common/header.html")
      .then(res => res.text())
      .then(data => document.getElementById("header").innerHTML = data);
  
    fetch("Common/footer.html")
      .then(res => res.text())
      .then(data => document.getElementById("footer").innerHTML = data);
  });
  fetch("Common/header.html")
  .then(response => {
    if (!response.ok) throw new Error("Failed to load header");
    return response.text();
  })
  .then(data => {
    document.getElementById("header").innerHTML = data;
  })
  .catch(err => console.error(err));


  