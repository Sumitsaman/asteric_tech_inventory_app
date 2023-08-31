document.addEventListener("DOMContentLoaded", function () {
    const authContainer = document.getElementById("auth-container");
    const inventoryContainer = document.getElementById("inventory-container");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const itemList = document.getElementById("item-list");
    const addItemBtn = document.getElementById("add-item-btn");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        // Implement login logic here
        // For simplicity, you can just show the inventory container
        authContainer.style.display = "none";
        inventoryContainer.style.display = "block";
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("register-username").value;
        const password = document.getElementById("register-password").value;
        // Implement registration logic here
        // For simplicity, you can just show the inventory container after registration
        authContainer.style.display = "none";
        inventoryContainer.style.display = "block";
    });

    addItemBtn.addEventListener("click", function () {
        const itemName = prompt("Enter item name:");
        if (itemName) {
            const newItem = document.createElement("li");
            newItem.innerText = itemName;
            itemList.appendChild(newItem);
        }
        // Function to render items
    function renderItems() {
        itemList.innerHTML = "";
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.name;

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", () => editItem(item.id));

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => deleteItem(item.id));

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            itemList.appendChild(li);
        });
    }
    document.addEventListener("DOMContentLoaded", function () {
        const itemList = document.getElementById("item-list");
    
        // Mock data for demonstration purposes
        const items = [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" }
        ];
    
    // Function to edit an item
    function editItem(itemId) {
        // Implement your edit logic here
        console.log(`Editing item with ID: ${itemId}`);
    }

    // Function to delete an item
    function deleteItem(itemId) {
        // Implement your delete logic here
        const index = items.findIndex(item => item.id === itemId);
        if (index !== -1) {
            items.splice(index, 1);
            renderItems(); // Update the UI
        }
    }

    // Initial rendering of items
    renderItems();
});
    });
});
