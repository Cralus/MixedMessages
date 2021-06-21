// main message configuration file

const el = document.getElementById('message')
const changeButton = document.getElementById('change')
const contentMessages = [`A random inpiring message`, `A random inspiring message but very, very, very long like really really long`, `A random un-inspiring  message`, `Man I hate writing messages quite a bit`, `Minimum message achieved`]
const signatures = [`-S. Body`, `-L. Da Vinci`, `-Abraham Lincoln`, `-Me Myself and I`, sig = `-W. Shakespear`]
const cssColors =["blue","red", "green",  "aqua", "fuchsia"]
const borderStyles =["solid", "rounded", "dashed", "dotted", "outset"]
const genRandomString = arr => {
    let rand = Math.floor(Math.random() * arr.length)

    return arr[rand];
}
const genRandomStyle = (borders, colors) =>{
    let rand1 = Math.floor(Math.random() * borders.length)
    let rand2 = Math.floor(Math.random() * colors.length)
    el.style.color = colors[rand2]
    rand2 = Math.floor(Math.random() * colors.length)
    el.style.border = `${borders[rand1]} ${colors[rand2]}`
}
const genFormat = (content, sig) =>
{


content = "<p>" + content + "</p>" + "<p>" + sig +"</p>";

return content;
}

const output = (content, el) => {
    genRandomStyle(borderStyles, cssColors);
    el.innerHTML = content;
}

const mixedMessages = () => output(genFormat(genRandomString(contentMessages), genRandomString(signatures)), el);
mixedMessages();
changeButton.onclick = mixedMessages;

