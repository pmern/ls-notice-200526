// Paste New Title Here
let newTitle = "NOTICE OF LAW SOCIETY TRUSTEESHIP"
// Paste New Warning Here
let newWarning = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// Paste New helpful Message for support here
let newHelp = "We understand this news could be alarming, and we are here to help. Please refer to the <a href='https://www.lso.ca/home'>Law Society of Ontario</a> for more information and support."

let noticeTitle = document.getElementById("noticeTitle");

let noticeBlurb = document.getElementById("noticeBlurb");

let noticeHelp = document.getElementById("helpfulMessage");

function notice() {
    const Title = newTitle;
    const Warning = newWarning;
    const Help = newHelp;
    document.getElementById("noticeTitle").innerText = Title;
    document.getElementById("noticeWarning").innerHTML = Warning;
    document.getElementById("helpfulMessage").innerHTML = Help;
};

notice();
