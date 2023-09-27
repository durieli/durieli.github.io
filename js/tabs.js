document.addEventListener("DOMContentLoaded", function () {
  const tabSet = document.querySelector("#tabSet");
  const panels = document.querySelectorAll(".panel");

  tabSet.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const targetPanelId = e.target.getAttribute("href").substr(1);

      panels.forEach((panel) => {
        panel.style.display = "none";
      });

      // Create a script element with nonce attribute
      const script = document.createElement("script");
      script.setAttribute("nonce", "7kfIr7GAhvpKBA00LuW9mg==");
      script.src = "your-dynamic-script.js"; // Replace with the actual script URL

      // Append the script element to the document
      document.body.appendChild(script);
    }
  });
});

