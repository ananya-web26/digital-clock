let clock = document.getElementById("clock");

setInterval(function () {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Background change logic using Unsplash URLs
    let bgUrl = "";
    if (hours >= 5 && hours < 12) {
        // Morning
        bgUrl = "https://images.unsplash.com/photo-1470252649358-96949c73eef4?auto=format&fit=crop&w=1920&q=80";
    }
    else if (hours >= 12 && hours < 17) {
        // Afternoon
        bgUrl = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80";
    }
    else if (hours >= 17 && hours < 20) {
        // Evening
        bgUrl = "https://images.unsplash.com/photo-1472120482482-d44b0e9751d7?auto=format&fit=crop&w=1920&q=80";
    }
    else {
        // Night
        bgUrl = "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?auto=format&fit=crop&w=1920&q=80";
    }

    // Apply the background image to the body
    document.body.style.backgroundImage = "url('" + bgUrl + "')";

    // AM/PM Logic
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    // Format (add leading zeros)
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    // Display the time
    clock.innerText = h + ":" + m + ":" + s + " " + ampm;

}, 1000);