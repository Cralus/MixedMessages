// main message configuration file

const el = document.getElementById('message')
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
        console.log(rand)
        lineType = `=`
        paddingType = '#'
    }
    break;
case 1:
    {
        console.log(rand)
        lineType = `-`
        paddingType = `$`
    }
    break;
case 2:
    {
        console.log(rand)
        lineType = `~`
        paddingType = `+`
    }
    break;
case 3:
    {
        console.log(rand)
        lineType = `¬`
        paddingType = `@`
    }
    break;
case 4:
    {
        console.log(rand)
        lineType = `_`
        paddingType = `|`
    }
}
console.log(lineType);
sig = sig.padEnd((content.length), ' ');


console.log(content.length);

content =  content + `\n` + sig;

return content;
}

const output = (content, el) => {
    
    el.innerHTML = content;
}

output(genFormat(genContent(), genSig()), el);

