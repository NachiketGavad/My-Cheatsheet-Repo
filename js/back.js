// JavaScript function to go back to the previous page
function goBack() {
  if (document.referrer) {
    window.history.back();
  } else {
    // If there's no referrer, navigate to a fallback page or perform some other action
    console.log("No previous page in history. Performing fallback action.");
    // You can replace the following line with any action you prefer, like redirecting to a specific page
    window.location.href = "/";
  }
}
