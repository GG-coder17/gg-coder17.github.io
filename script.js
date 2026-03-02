document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded successfully.");

  const header = document.querySelector("header");

  header.addEventListener("mouseover", function () {
    header.style.backgroundColor = "gray";
  });

  header.addEventListener("mouseout", function () {
    header.style.backgroundColor = "#111";
  });
});
