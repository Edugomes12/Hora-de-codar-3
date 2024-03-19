var i = 1
var n = parseInt(prompt("me diga o valor a ser multiplicado"));

while (n >= 1)
{
    var media = n * i
    document.write (n + " * " + i + " = " + media + "<BR>")
    i++
    if (i >= 11)
    {
        n--
        i -=10
    }
}
