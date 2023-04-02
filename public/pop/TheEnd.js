window.onload = function() {
    var messageElement = document.getElementById("message");
    var message = "";

    var currentUrl = window.location.href;

    var urls = [
      "https://hack-princeton-s23.web.app/pop/hydrate.html",
      "https://hack-princeton-s23.web.app/pop/social.html"
    ];

    // loop through the URLs and push them to the history state
    // for (var i = 0; i < urls.length; i++) {
    //   window.history.pushState(null, null, urls[i]);
    // }
    if (currentUrl.indexOf("/hydrate.html") !== -1) {
        message = "Keep staying hydrated!";
      } else if (currentUrl.indexOf("/social.html") !== -1) {
        message = "Keep staying socially balanced!";
      } else {
        console.log("{!} URL does not match a pop-up URL");
      }

      messageElement.innerHTML = "<p>" + message + "</p>";
}