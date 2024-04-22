document.addEventListener('DOMContentLoaded', function() {
    // The search bar now solely relies on the button click, so no need for keyup event handling
});

function searchPosts() {
    let inputElement = document.getElementById("searchBar");
    let input = inputElement.value.toUpperCase();  // Convert input to uppercase for case-insensitive matching
    let postsContainer = document.getElementById("posts-container");
    let posts = postsContainer.getElementsByClassName("post-preview");

    console.log("Searching for:", input);

    for (let post of posts) {
        let titleElement = post.getElementsByTagName("h2")[0];
        let contentElement = post.getElementsByTagName("p")[0];

        let title = titleElement ? titleElement.textContent.toUpperCase() : "";
        let content = contentElement ? contentElement.textContent.toUpperCase() : "";

        // Display posts that match the search criteria
        post.style.display = (title.includes(input) || content.includes(input)) ? "" : "none";
    }
}
