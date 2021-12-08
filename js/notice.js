// Paste New Title Here
let newTitle = "Warning Explanation"
// Paste New Warning Here
let newWarning = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


let noticeTitle = document.getElementById("noticeTitle");

let noticeBlurb = document.getElementById("noticeBlurb");

function notice() {
    const Title = newTitle;
    const Warning = newWarning;
    document.getElementById("noticeTitle").innerText = Title;
    document.getElementById("noticeWarning").innerHTML = Warning;
};

notice();