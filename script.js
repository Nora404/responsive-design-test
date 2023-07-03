function loadPage(page) {
  var container = document.getElementById("container");
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      container.innerHTML = xhr.responseText;
    }
  };

  xhr.open("GET", "src/" + page, true);
  xhr.send();
}
