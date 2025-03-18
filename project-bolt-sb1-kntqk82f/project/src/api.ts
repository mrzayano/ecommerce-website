export async function fetchData() {
    try {
        const response = await fetch("http://localhost:3000/api/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
