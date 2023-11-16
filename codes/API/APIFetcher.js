/**
 * Class for fetching data from APIs. Designed to be flexible and reusable.
 */
class APIFetcher {
    /**
     * Constructs the APIFetcher instance.
     * @param {string} baseUrl - Base URL of the API.
     * @param {Object} [defaultHeaders={}] - Default headers for all requests.
     */
    constructor(baseUrl, defaultHeaders = {}) {
        this.baseUrl = baseUrl; // Store the base URL
        this.defaultHeaders = defaultHeaders; // Store the default headers
    }

    /**
     * Fetches data from a specific API endpoint using async/await.
     * @param {string} endpoint - API endpoint to fetch data from.
     * @param {Object} [options={}] - Additional fetch options.
     * @returns {Promise<Object>} - Promise resolving to the fetched data as JSON.
     */
    async fetchData(endpoint, options = {}) {
        // Create a complete URL from the base URL and the endpoint
        const url = new URL(endpoint, this.baseUrl);

        // Combine the default headers with any headers provided in options
        const fetchOptions = {
            headers: { ...this.defaultHeaders, ...options.headers },
            ...options, // Spread any other options provided
        };

        try {
            // Perform the fetch operation
            const response = await fetch(url, fetchOptions);

            // Check if the response status is not ok (200-299)
            if (!response.ok) {
                // If not ok, throw an error
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // If response is ok, parse and return the JSON data
            return await response.json();
        } catch (error) {
            // Log and re-throw any errors that occur during fetch
            console.error('Fetch error:', error);
            throw error;
        }
    }

    /**
     * Cleans up or resets the APIFetcher instance.
     * This method is not a destructor but serves a similar purpose for cleanup.
     */
    cleanup() {
        // Reset the base URL
        this.baseUrl = '';

        // Reset the default headers
        this.defaultHeaders = {};
    }
}
