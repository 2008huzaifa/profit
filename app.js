function profit() {
    var pro = document.getElementById('prfit')
    var prsale = document.getElementById('invesr')
    var percvvv = pro.value * 100 / prsale.value
    var con = percvvv.toFixed(2)
    var perce = document.getElementById('Percent')

    perce.innerHTML = con

} 
function percentage() {
    var pro = document.getElementById('inves')
    var prsale = document.getElementById('perc')
    var percvvv = pro.value/100*prsale.value
    var con = percvvv.toFixed(2)
    var perce = document.getElementById('amount')

    perce.innerHTML = con

}
function sale() {
    var pro = document.getElementById('ale')
    var prsale = document.getElementById('cost')
    var percvvv =  ((prsale.value/pro.value)*100)
    var abc = 100-percvvv
    var con = abc.toFixed(2)

    var perce = document.getElementById('salecost')
    var saa = document.getElementById('sa')
saa.innerHTML = percvvv.toFixed(2)

    perce.innerHTML = con

}