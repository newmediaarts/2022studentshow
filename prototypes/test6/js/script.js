$(function () { Grid.init(); });
// Timer
$("#DateCountdown").TimeCircles({ animation: "smooth", bg_width: .3, fg_width: .02, circle_bg_color: "#333333", time: { Days: { text: "Days", color: "#ffffff", show: true }, Hours: { text: "Hours", color: "#ffffff", show: true }, Minutes: { text: "Minutes", color: "#ffffff", show: true }, Seconds: { text: "Seconds", color: "#ffffff", show: true } } })