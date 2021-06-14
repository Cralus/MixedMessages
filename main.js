// main message configuration file

const genContent = () =>{
    let message = '';
    let rand = Math.floor(Math.random() * 5)
    switch(rand){
    case 0:
        {
            message = `A random inpiring message`
        }
    case 1:
        {
            message = `A random inspiring message but very, very, very long like really really long`
        }
    case 2:
        {
            message = `A random un-inspiring  message`
        }
    case 3:
        {
            message = `Man I hate writing messages quite a bit`
        }
    case 4:
        {
            message = `Minimum message achieved`
        }

    }
    return message;

}
const genSig = () =>
{
    let sig = '';
    let rand = Math.floor(Math.random() * 5)
    switch(rand){
    case 0:
        {
            sig = `-S. Body`
        }
    case 1:
        {
            sig = `-L. Da Vinci`
        }
    case 2:
        {
            sig = `-Abraham Lincoln`
        }
    case 3:
        {
            sig = `-Me Myself and I`
        }
    case 4:
        {
            sig = `-W. Shakespear`
        }

    }
    return sig;
}
const genFormat = (content, sig) =>
{
content = content + `/n` + sig;
return content;
}
console.log(genFormat(genContent(), genSig()))
const output = (content) => {
    console.log()
}



