const markLink = document.getElementById("notification__mark");
const notificationNumber = document.getElementById("notification-number");
const unreadNotifications = Array.from(
  document.getElementsByClassName("notification-unread")
);
let notifications = parseInt(notificationNumber.textContent);

console.log(notifications);
// read all notifications
markLink.addEventListener("click", () => {
  notificationNumber.innerText = "0";

  unreadNotifications.map((notification, index) => {
    document.getElementsByClassName("notification-unread__icon")[
      index
    ].style.display = "none";
    notification.classList.remove("notification-unread");
  });
});

// read individual notification
// map over unread notification and attarch an event listener of click on each element
unreadNotifications.map((notification, index) => {
  notification.addEventListener("click", () => {
    notifications -= 1;
    let notificationsLeft = notifications < 0 ? 0 : notifications;
    notificationNumber.innerText = notificationsLeft;
    document.getElementsByClassName("notification-unread__icon")[
      index
    ].style.display = "none";
    notification.classList.remove("notification-unread");
  });
});
