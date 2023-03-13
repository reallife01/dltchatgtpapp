let questionBox = document.querySelector('#questionBox');
let apiKey = `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`;
let responseContainer = document.querySelector('#responseContainer');


function askGpt() {
    const question = questionBox.value;
    console.log(question);
    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {

        method: "POST",
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: `${question}`,
            temperature: 0.7,
            n: 1,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            max_tokens: 4000,

        }),


    }).then((response) => response.json())
        .then((resp) => {
            responseContainer.textContent = resp.choices[0].text;
            // console.log(resp?.choices[0]?.text);


        })
        .catch((err) => console.log('err on callback', err));
}


async function askGpt2() {
    const question = questionBox.value;
    console.log(question);
    try {
        let fecthResp = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {

            method: "POST",
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: `${question}`,
                temperature: 0.7,
                n: 1,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
                max_tokens: 4000,

            }),

        });
        let parseJson = await fecthResp.json();
        responseContainer.innerHTML = parseJson?.choices[0]?.text;


    }
    catch (e) {
        console.log('error on await', e);

    }
}
