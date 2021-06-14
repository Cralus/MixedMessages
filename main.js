// main message configuration file

const genContent = () =>{
    let message = '';
    let rand = Math.floor(Math.random() * 5)
    switch(rand){
    case 0:
        {
            message = `A random inpiring message`
        }
        break;
    case 1:
        {
            message = `A random inspiring message but very, very, very long like really really long`
        }
        break;
    case 2:
        {
            message = `A random un-inspiring  message`
        }
        break;
    case 3:
        {
            message = `Man I hate writing messages quite a bit`
        }
        break;
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
        break;
    case 1:
        {
            sig = `-L. Da Vinci`
        }
        break;
    case 2:
        {
            sig = `-Abraham Lincoln`
        }
        break;
    case 3:
        {
            sig = `-Me Myself and I`
        }
        break;
    case 4:
        {
            sig = `-W. Shakespear`
        }
       
    }
    return sig;
}
const genFormat = (content, sig) =>
{
let lineType = '';
let paddingType = '';
let rand = Math.floor(Math.random() * 5)
switch(rand){
case 0:
    {
        lineType = `=`
        paddingType = '#'
    }
    break;
case 1:
    {
        lineType = `-`
        paddingType = `$`
    }
    break;
case 2:
    {
        lineType = `~`
        paddingType = `+`
    }
    break;
case 3:
    {
        lineType = `¬`
        paddingType = `@`
    }
    break;
case 4:
    {
        lineType = `_`
        paddingType = `|`
    }
}
sig.padEnd((content.length), ' ')
let fullLine = ''
fullLine.padStart((content.length + 2), lineType)
content.padStart((content.length+1), paddingType)
content.padEnd((content.length+1), paddingType)
sig.padStart((sig.length+1), paddingType)
content.padEnd((sig.length+1), paddingType)
content = fullLine + '\n' + content + `\n` + sig + `\n`;

return content;
}
console.log(genFormat(genContent(), genSig()))
const output = (content) => {
    console.log()
}



