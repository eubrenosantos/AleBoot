let conversation = []
let url = "https://cadastrandoweb.com.br/version-test/api/1.1//obj/boottreino"
fetch(url)
  .then(response => response.json())
  .then(data => treining(data.response.results))
  .catch(error => console.error(error))


const treining = (data)=>{
    data.forEach(value => {
       
        let initQuestion = new Pergunta("user", value.txt)
        conversation.push(initQuestion)
        
    });
}