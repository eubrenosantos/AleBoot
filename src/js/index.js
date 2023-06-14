let auth = "Bearer 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";

let btnPerguntar = document.querySelector(".inputs button")

btnPerguntar.addEventListener("click", async e => {
    let text = document.querySelector("input").value
    if (text) {

        let question = new Pergunta("user", text)
        conversation.push(question)
        sendUserMsn(text)

        const body = {
            "model": "gpt-3.5-turbo",
            "messages": conversation,
            "temperature": 0.6
        };

        fetch("https://api.openai.com/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${auth}`
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(data => sendBootMsn(data))
            .catch(error => console.error(error))



    } else {
        alert("Escreva o que você precisa no campo!")




    }
})


