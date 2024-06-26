import { urlChecker } from './urlChecker';

async function handleSubmit(event) {
    event.preventDefault();
    // Clear the results div in case of repeat use
    document.getElementById("results").innerHTML = "";
    // The url which is entered in input field
    const url = document.getElementById("url").value;

    if (!Client.urlChecker(url)) {
        console.log('Invalid URL provided');
    } 
    else {
        let apiData = await getAnalysis('http://localhost:8000/call', url).
        then(apiData => apiData.json()).
        then(function (res) {
            updateUI(res);
        });
    }
}

async function getAnalysis(postUrl, InputUrl) {

    let response = await fetch(postUrl, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'text/plain',
        },       
        body: InputUrl,
    });
    return response;
}

function updateUI(res) {
    const results = document.getElementById("results");
    const heading = document.createElement('h3');
    heading.textContent = "Sentiment Analysis";
    results.appendChild(heading);
    let p = document.createElement("p");
    p.textContent = `Score_tag: ${scoreConversion(res.score_tag)}`;
    results.appendChild(p);
    let p2 = document.createElement("p");
    p2.textContent = `Agreement: ${res.agreement}`;
    results.appendChild(p2);
    let p3 = document.createElement("p");
    p3.textContent = `Subjectivity: ${res.subjectivity}`;
    results.appendChild(p3);
    results.style.textTransform = 'capitalize';
}

function scoreConversion(score) {
    switch (score) {
        case "P+":
            return "Strongly Positive";
        case "P":
            return "Positive";
        case "NEU":
            return "Neutral";
        case "N":
            return "Negative";
        case "N+":
            return "Strongly Negative";
        case "NONE":
            return "No sentiment";
        default:
            return "Invalid data";
    }
}

export { handleSubmit,
        scoreConversion
    };


