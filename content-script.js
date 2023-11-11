document.oncopy = function(event) {
    // Get the selected text
    var selectedText = window.getSelection().toString();
    
    // Get the current webpage's URL
    var pageUrl = window.location.href;
    
    // Append the URL to the selected text
    var newText = selectedText + '\n ' + pageUrl;
    
    // Create a temporary element to copy the modified text
    var tempElement = document.createElement('textarea');
    tempElement.value = newText;

    console.log(newText)
    
    
    navigator.clipboard.writeText(newText);
};
