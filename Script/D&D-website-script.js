/* ------ SAVE FOR LATER FUNCTIONALITY ------ */

// Getting the save-btn element
const saveBtns = document.querySelectorAll(".save-btn");

//checking if the save-btn element exists on the page
if (saveBtns) {
    // Adding a click event listener on each save-btn element
    saveBtns.forEach(saveBtn => {
        saveBtn.addEventListener("click", function() {
            // getting the previous sibling element of the save-btn element
            const divElement = this.previousElementSibling;
            const divHTML = divElement.outerHTML;
        
            // Code to add the saved element to sessionStorage
            let savedItems = sessionStorage.getItem("savedItems");
            // checking if there are any saved items in sessionStorage
            if (!savedItems) {
                // creating an empty array for the saved items if none already exist
                savedItems = [];
            } else {
                // parsing the saved items from JSON string to an array if items are already present in the sessionStorage
                savedItems = JSON.parse(savedItems);
            }
            // pushing the new item to the array
            savedItems.push(divHTML);
            // storing the updated array as a JSON string in sessionStorage
            sessionStorage.setItem("savedItems", JSON.stringify(savedItems));
            // adding an alert telling the user how many items are in their 'save for later' folder / on the 'Save for later' page
            alert(`Item saved successfully. There are now ${savedItems.length} items on the 'Saved items' page.`);
        });
    });
}


//getting the save-container element
const saveContainer = document.getElementById("save-container");

//checking if the save-container element exists on the page
if (saveContainer) {
    //getting the saved items from the session storage
    let savedItems = sessionStorage.getItem("savedItems");
    //checking if there is any saved items in the session storage
    if (savedItems) {
        //parsing the saved items from JSON string to an array
        savedItems = JSON.parse(savedItems);
        //looping through each item in the array
        savedItems.forEach(function(item) {
            //inserting each item as a new element with a 'delete' button to the end of the save-container
            const deleteBtn = `<button class="delete-btn">delete</button>`;
            saveContainer.insertAdjacentHTML("beforeend", '<div class="saved-item">' + item + deleteBtn + '</div>');
            });
    }

    /* ------ DELETE FROM 'SAVED ITEMS' PAGE FUNCTIONALITY ------ */

    //adding a click event listener on the delete button
    saveContainer.addEventListener("click", function(event) {
        if (event.target.className === "delete-btn") {
          //getting the <div> element that needs to be removed
          const divElement = event.target.parentElement;
          const divHTML = divElement.outerHTML;
          //getting the saved items from session storage and parsing it to an array
          let savedItems = sessionStorage.getItem("savedItems");
          savedItems = JSON.parse(savedItems);
          //finding the index of the divHTML to be removed in the saved items array
          const index = savedItems.indexOf(divHTML);
          //removing the item from the saved items array
          savedItems.splice(index, 1);
          //updating the session storage with the updated saved items array
          sessionStorage.setItem("savedItems", JSON.stringify(savedItems));
          //removing the div element and delete button from the save-for-later page
          divElement.remove();
          event.target.remove();
          //showing an alert with the updated number of items on the save-for-later page
          alert(`Item deleted successfully. There are now ${savedItems.length} items on the 'Saved items' page.`);
        }
      });
      
}



/* ------ LEAVE A COMMENT FUNCTIONALITY ------ */
// Getting the comment form element
const commentForm = document.getElementById("comment-form");

//checking if the comment form exists on the page
if(commentForm) {
    // Adding a submit event listener on the comment form
    commentForm.addEventListener("submit", function(event) {
        // Preventing the form from submitting
        event.preventDefault();

        // Getting the name and comment input values
        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;

        // Creating the comment HTML
        const commentHTML = `<p><strong>${name}:</strong> ${comment}</p>`;

        // Getting the comments container element
        const commentsContainer = document.getElementById("comments-container");

        // Adding the comment HTML to the comments container
        commentsContainer.insertAdjacentHTML("beforeend", commentHTML);

        // Clearing the form inputs
        commentForm.reset();
    });
}



/* ------ LIKE BUTTON FUNCTIONALITY ------ */
//selecting all elements with the class 'likeBtn'
const likeBtns = document.querySelectorAll(".likeBtn");

//checking if the save-btn element exists on the page
if (likeBtns) {
    //iterating over each button element
    likeBtns.forEach(function(likeBtn) {
        //adding a click event listener to each 'like' button
        likeBtn.addEventListener("click", function() {
            //checking if the button has the class 'not-liked'
            if (this.classList.contains("not-liked")) {
                //if it does, changing the background color and text + text color of the button
                this.style.backgroundColor = "rgba(40, 39, 41, 0.7)";
                this.style.color = "rgba(255, 252, 242, 1)";
                this.innerText = "you liked this";
                //removing the 'not-liked' class and adding the 'liked' class
                this.classList.remove("not-liked");
                this.classList.add("liked");
            //adding an option to 'unlike'
            } else {
                //if the button does not have the class 'not-liked', changing back the background color and text + text color of the button
                this.style.backgroundColor = "rgba(123, 136, 111, 1)";
                this.style.color = "rgba(40, 39, 41, 1)";
                this.innerText = "like";
                //changing the class of the button from 'liked' to 'not-liked'
                this.classList.remove("liked");
                this.classList.add("not-liked");
            }
        });
    });
}



/* ------ CONTACT FORM ------ */
//selecting the contact form element
const contactForm = document.getElementById("contact-form");

//checking if the contact form element exists on the page
if (contactForm) {
    //adding a submit event listener on the form
    contactForm.addEventListener("submit", function () {
        //faking the content of the form being sent out and alerting the user that the form has successfully been completed
        contactForm.reset();
        alert('Your email was successfully sent.');
    });
}