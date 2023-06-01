const sendUserMsn = (userMsn,bootResponse)=>{

    

    // console.log(bootResponse.choices[0].message.content)
    let areaConversation = document.querySelector(".mensagens")
    let user = document.querySelector(".models .user").cloneNode(true)
    user.innerHTML = formatText(userMsn);
    areaConversation.append(user)
    clearInput()
    document.querySelector('input').disabled = true;

    scrollDiv()


}
const sendBootMsn = (bootResponse)=>{

    

    let areaConversation = document.querySelector(".mensagens")
    let boot = document.querySelector(".models .boot").cloneNode(true)
    boot.innerHTML = formatText(bootResponse.choices[0].message.content);
    areaConversation.append(boot)
    document.querySelector('input').disabled = false;

    scrollDiv()
    


}

const clearInput = ()=>{
    document.querySelector("input").value = ""
    document.querySelector("input").focus()
}

const scrollDiv = ()=>{
    let div = document.querySelector('.mensagens');
    div.scrollTop = div.scrollHeight;

}

const formatText = (text) =>{

    var bbcode = '[b]Este é um texto em negrito.[/b]';
    let fomat = text
  .replace(/\[b\](.*?)\[\/b\]/g, '<b>$1</b>')
  .replace(/\[i\](.*?)\[\/i\]/g, '<i>$1</i>')
  .replace(/\[u\](.*?)\[\/u\]/g, '<u>$1</u>')
  .replace(/\[url\](.*?)\[\/url\]/g, '<a href="$1">$1</a>')
  .replace(/\[img\](.*?)\[\/img\]/g, '<img src="$1">')
  .replace(/\[br\](.*?)\[\/br\]/g, '<br>');

    return fomat // <b>Este é um texto em negrito.</b>


}


// const copy = (value)=>{

//     navigator.clipboard.writeText(value) // escreve o texto na área de transferência
//   .then(() => {
//     alert('Texto copiado para a área de transferência com sucesso!');
//   })
//   .catch((err) => {
//     console.error('Erro ao copiar texto para a área de transferência: ', err);
//   });

// }