async function analyzeSentiment() {
    const text = document.getElementById("inputText").value;
    
    if (!text.trim()) {
        alert("Please enter some text!");
        return;
    }

    try {
        const response = await fetch("/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: text }),
        });

        const data = await response.json();
        
        document.getElementById("sentiment").textContent = `Sentiment: ${data.sentiment}`;
        document.getElementById("confidence").textContent = `Confidence: ${data.score.toFixed(2)}`;
        
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while analyzing sentiment.");
    }
}