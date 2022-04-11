let obj = {
  top: "10",
  right: "10",
  html: "Hello!",
  className: "welcome",
};

function showNotification({ top, right, html, className }) {
  let body = document.body;
  let notification = document.createElement("div");

  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;
  notification.style.position = `absolute`;
  notification.innerHTML = html;
  //   notification.style.display = "block";

  if (className.length > 0) notification.classList.add(className);
  body.append(notification);

  setTimeout(() => {
    notification.style.display = "none";
  }, 1500);
}

showNotification(obj);
