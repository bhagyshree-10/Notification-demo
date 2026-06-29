const loginBtn = document.getElementById("loginBtn");
const status = document.getElementById("status");
const notifications = document.getElementById("notifications");

const msgs = [
    "📧 New Email Received",
    "📸 Instagram: Someone liked your post",
    "💬 WhatsApp: New Message",
    "🔔 LinkedIn: New Connection Request"
];

loginBtn.addEventListener("click", () => {

    status.textContent = "✅ Login Successful";
    loginBtn.textContent = "Logout";

    // Every 4 sec
    setInterval(() => {

        let random = Math.floor(Math.random() * msgs.length);

        let p = document.createElement("p");
        p.textContent = msgs[random];

        notifications.appendChild(p);

    }, 4000);


    // After 10 sec (practice)
    setTimeout(() => {

        let p = document.createElement("p");
        p.textContent = "📅 Meeting starts in 10 minutes!";

        notifications.appendChild(p);

    }, 10000);


    // After 20 sec
    setTimeout(() => {

        let p = document.createElement("p");
        p.textContent = "✅ Hello! Task Completed.";

        notifications.appendChild(p);

    }, 20000);

});