async function fetchUsers() {
    try {
        // Display a message while fetching
        const userList = document.getElementById('user-list');
        userList.innerHTML = "<p>Fetching users...</p>";

        // Fetch the data from the Random User API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const data = await response.json();

        // Clear the user list before displaying data
        userList.innerHTML = '';

        // Loop through each user and display their information
        data.results.forEach((user, idx) => {
            const userDiv = document.createElement('div');
            userDiv.style.border = "1px solid #ccc";
            userDiv.style.padding = "10px";
            userDiv.style.marginBottom = "10px";

            userDiv.innerHTML = `
                <h3>User ${idx + 1}</h3>
                <p><strong>Name:</strong> ${user.name.title} ${user.name.first} ${user.name.last}</p>
                <p><strong>Gender:</strong> ${user.gender}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Cell:</strong> ${user.cell}</p>
                <p><strong>Picture:</strong> <img src="${user.picture.large}" alt="User Picture"></p>
            `;
            userList.appendChild(userDiv);
        });
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('Error fetching data:', error);
        document.getElementById('user-list').innerHTML = "<p>Error fetching users. Please try again.</p>";
    }
}

// Add event listener to the button
document.getElementById('fetch-users-btn').addEventListener('click', fetchUsers);