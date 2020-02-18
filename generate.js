const image = [];
var count = 0;
for(var i = 0; i<25;i++)
{
    image[i] = ++count;
}
console.log(image);
function gen(image)
{
    for(i = 0;i < image.length; i++)
    {
        console.log("var box"+(i+1)+" = document.querySelector('#box"+(i+1)+"');")
    }
}
gen(image);
var imageArray = [];
for(var i = 0; i < 16; i++)
{
    imageArray[i] = "box"+(i+1);
}
console.log(imageArray);