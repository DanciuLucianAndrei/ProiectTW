var text = '{ "infected": 373474, "tested": 3733410, "recovered": 253244, "deceased": 9261, "country": "Romania", "historyData": "https:\/\/api.apify.com\/v2\/datasets\/n1XtXTelVG5dJhDhy\/items?format=json&clean=1", "sourceUrl": "", "lastUpdatedAtApify": "2020-11-17T13:10:00.000Z", "lastUpdatedAtSource": "2020-11-17T13:00:00.000Z", "README": "https:\/\/www.graphs.ro\/resources.php" }';
var obj = JSON.parse(text, function (key, value) {
if (key == "country") 
{
    return value.toUpperCase();
} 
else 
{
    return value;
}
});


document.getElementById("conf").innerHTML = obj.infected; 
document.getElementById("recovered").innerHTML = obj.recovered; 
document.getElementById("deaths").innerHTML = obj.deceased; 

var DateJudet='{"data":[{"county_code":"ROU128","total_county":4784,"total_healed":6,"total_dead":105,"county":"Bucharest"},{"county_code":"ROU311","total_county":4114,"total_healed":5,"total_dead":242,"county":"Suceava"},{"county_code":"ROU302","total_county":2656,"total_healed":0,"total_dead":95,"county":"Arges"},{"county_code":"ROU305","total_county":2629,"total_healed":0,"total_dead":60,"county":"Brasov"},{"county_code":"ROU315","total_county":1784,"total_healed":0,"total_dead":92,"county":"Galati"},{"county_code":"ROU130","total_county":1577,"total_healed":6,"total_dead":18,"county":"Dâmbovita"},{"county_code":"ROU310","total_county":1559,"total_healed":0,"total_dead":39,"county":"Prahova"},{"county_code":"VN","total_county":1535,"total_healed":0,"total_dead":46,"county":"Vrancea"},{"county_code":"IS","total_county":1328,"total_healed":1,"total_dead":42,"county":"Iasi"},{"county_code":"BZ","total_county":1142,"total_healed":0,"total_dead":11,"county":"Buzau"},{"county_code":"NT","total_county":1125,"total_healed":0,"total_dead":55,"county":"Neamt"},{"county_code":"NA","total_county":1115,"total_healed":0,"total_dead":0,"county":"JUDEȚ NECUNOSCUT"},{"county_code":"BC","total_county":1112,"total_healed":0,"total_dead":58,"county":"Bacau"},{"county_code":"BT","total_county":1109,"total_healed":3,"total_dead":57,"county":"Botosani"},{"county_code":"IF","total_county":1106,"total_healed":0,"total_dead":23,"county":"ILFOV"},{"county_code":"TM","total_county":985,"total_healed":4,"total_dead":55,"county":"Timis"},{"county_code":"CJ","total_county":953,"total_healed":1,"total_dead":18,"county":"Cluj"},{"county_code":"MS","total_county":895,"total_healed":0,"total_dead":67,"county":"Mures"},{"county_code":"BH","total_county":836,"total_healed":0,"total_dead":22,"county":"Bihor"},{"county_code":"HD","total_county":811,"total_healed":3,"total_dead":72,"county":"Hunedoara"},{"county_code":"AR","total_county":799,"total_healed":1,"total_dead":77,"county":"Arad"},{"county_code":"SB","total_county":793,"total_healed":0,"total_dead":46,"county":"Sibiu"},{"county_code":"BN","total_county":754,"total_healed":0,"total_dead":66,"county":"Bistrita-Nasaud"},{"county_code":"CT","total_county":728,"total_healed":2,"total_dead":19,"county":"Constanta"},{"county_code":"AB","total_county":671,"total_healed":27,"total_dead":23,"county":"Alba"},{"county_code":"GJ","total_county":642,"total_healed":1,"total_dead":10,"county":"Gorj"},{"county_code":"IL","total_county":640,"total_healed":16,"total_dead":24,"county":"Ialomita"},{"county_code":"BR","total_county":615,"total_healed":0,"total_dead":4,"county":"Braila"},{"county_code":"OT","total_county":610,"total_healed":5,"total_dead":16,"county":"Olt"},{"county_code":"DJ","total_county":559,"total_healed":0,"total_dead":6,"county":"Dolj"},{"county_code":"MH","total_county":516,"total_healed":0,"total_dead":22,"county":"Mehedinti"},{"county_code":"HR","total_county":495,"total_healed":0,"total_dead":3,"county":"Harghita"},{"county_code":"VS","total_county":495,"total_healed":0,"total_dead":19,"county":"VASLUI"},{"county_code":"CV","total_county":384,"total_healed":0,"total_dead":11,"county":"Covasna"},{"county_code":"VL","total_county":343,"total_healed":0,"total_dead":4,"county":"Vâlcea"},{"county_code":"GR","total_county":337,"total_healed":0,"total_dead":6,"county":"Giurgiu"},{"county_code":"MM","total_county":333,"total_healed":1,"total_dead":6,"county":"Maramures"},{"county_code":"TL","total_county":254,"total_healed":0,"total_dead":8,"county":"TULCEA"},{"county_code":"TR","total_county":253,"total_healed":0,"total_dead":11,"county":"Teleorman"},{"county_code":"CL","total_county":248,"total_healed":0,"total_dead":3,"county":"Calarasi"},{"county_code":"CS","total_county":188,"total_healed":6,"total_dead":7,"county":"Caras-Severin"},{"county_code":"SJ","total_county":149,"total_healed":0,"total_dead":17,"county":"Salaj"},{"county_code":"SM","total_county":91,"total_healed":0,"total_dead":8,"county":"Satu Mare"}]}';
var datajud=JSON.parse(DateJudet);
var colour = '#b9b9b9';
var colour1 = '#ffa4a9';
var colour2 = '#cc6674';
var colour3 = '#993341';
var colour4 = '#66000e';
function colourCountry(name,culoare) {
        var country = document.getElementById(name);    
        country.setAttributeNS(null, 'fill', culoare);
}

for (var country = 0; country < datajud.data.length; country++){
    if(datajud.data[country].total_county>3000)
    colourCountry(datajud.data[country].county_code,colour4);
    if(datajud.data[country].total_county>2000 && datajud.data[country].total_county<3000)
    colourCountry(datajud.data[country].county_code,colour3);
    if(datajud.data[country].total_county>1000 && datajud.data[country].total_county<2000)
    colourCountry(datajud.data[country].county_code,colour2);
    if(datajud.data[country].total_county>500 && datajud.data[country].total_county<1000)
    colourCountry(datajud.data[country].county_code,colour1);
    if(datajud.data[country].total_county>0 && datajud.data[country].total_county<500)
    colourCountry(datajud.data[country].county_code,colour);
}