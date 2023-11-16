/**
 * Test class to demonstrate the use of APIFetcher.
 */
class APIFetcherTest {
    /**
     * Asynchronously tests the APIFetcher with a sample API.
     */
    static async testFetch() {
        // Create an instance of APIFetcher with a sample base URL and default headers
        const apiFetcher = new APIFetcher('https://jsonplaceholder.typicode.com', {
            'Content-Type': 'application/json'
        });

        try {
            // Fetch data from the 'posts/1' endpoint
            const data = await apiFetcher.fetchData('posts/1');

            // Log the fetched data
            console.log('Fetched Data:', data);
        } catch (error) {
            // Log any errors that occur during fetching
            console.error('Error in fetching data:', error);
        } finally {
            // Cleanup the APIFetcher instance
            apiFetcher.cleanup();
        }
    }
}

// Execute the test function
APIFetcherTest.testFetch();
