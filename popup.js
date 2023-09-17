document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleExtension");

    // Add a click event listener to the button
    toggleButton.addEventListener("click", function () {
        // Send a message to the content script to toggle the extension
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { command: "toggleExtension" });
        });

        // Toggle the button text
        toggleButton.innerText = toggleButton.innerText === "Enable Extension" ? "Disable Extension" : "Enable Extension";
    });
});
