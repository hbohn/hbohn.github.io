// Replace with your API key
const API_KEY = "pk_live_5cd02ac015ad7ce55a6b2d8377acbf56";

// Search and Display Results
$('#searchBtn').click(function () {
    const searchTerm = $('#searchTerm').val();
    fetch(`https://partners.every.org/v0.2/search/${searchTerm}?apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = $('#results');
            resultsDiv.empty(); // Clear previous results
            
            if (data.nonprofits && data.nonprofits.length > 0) {
                data.nonprofits.forEach(nonprofit => {
                    // Retrieve location and description (if available)
                    const location = nonprofit.location || 'Location not available';
                    const description = nonprofit.description || 'No description available';

                    resultsDiv.append(`
                        <div class="nonprofit">
                            <h2>${nonprofit.name}</h2>
                            <p><strong>Location:</strong> ${location}</p>
                            <p><strong>Description:</strong> ${description}</p>
                            <a href="${nonprofit.profileUrl}" target="_blank">View Profile</a>
                        </div>
                    `);
                });
            } else {
                resultsDiv.append("<p>No nonprofits found.</p>");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
