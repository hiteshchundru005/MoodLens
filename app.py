from flask import Flask, render_template, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    text = data["text"]
    
    # Perform sentiment analysis
    analysis = TextBlob(text)
    sentiment = "Positive" if analysis.sentiment.polarity > 0 else "Negative" if analysis.sentiment.polarity < 0 else "Neutral"
    score = analysis.sentiment.polarity
    
    return jsonify({
        "sentiment": sentiment,
        "score": score
    })

if __name__ == "__main__":
    app.run(debug=True)