// $(function () { Grid.init(); });
// Timer
// $("#DateCountdown").TimeCircles({ animation: "smooth", bg_width: .3, fg_width: .02, circle_bg_color: "#333333", time: { Days: { text: "Days", color: "#ffffff", show: true }, Hours: { text: "Hours", color: "#ffffff", show: true }, Minutes: { text: "Minutes", color: "#ffffff", show: true }, Seconds: { text: "Seconds", color: "#ffffff", show: true } } })

// TYPERWRITER EFFECT JS
document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    var dataText = ["The world is our office."];
    // var dataText = [ "NMA Student Show", "Portfolio Show & Demo Reel.", "Animation.", "Interface Design.", "Go NMA!"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span class="blinking-cursor" aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 100);
        }
        // check if dataText[i] exists
        // console.log(i);
        // console.log(dataText[i].length);
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                setTimeout(function () {
                    StartTextAnimation(i);
                }, 5000);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);


    // RELOAD THE PAGE ON DEVICE ORIENTATION CHANGE IF ON IOS DEVICE
    function isIOS(){
        return (
            //Detect iPhone
            (navigator.platform.indexOf("iPhone") != -1) ||
            //Detect iPod
            (navigator.platform.indexOf("iPad") != -1)
        );
    }
    function refreshThePageIfIOS() {
        if(isIOS()){
            location.reload();
        }
    };
    window.addEventListener('resize', refreshThePageIfIOS);

});