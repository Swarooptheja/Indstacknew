let express = require("express")

let app = express()

app.use(express.json())
app.use(express.text())

var olddata = [{ "strMeal": "Ayam Percik", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/020z181619788503.jpg", "idMeal": "53050" }, { "strMeal": "Brown Stew Chicken", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/sypxpx1515365095.jpg", "idMeal": "52940" }, { "strMeal": "Chick-Fil-A Sandwich", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/sbx7n71587673021.jpg", "idMeal": "53016" }, { "strMeal": "Chicken & mushroom Hotpot", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/uuuspp1511297945.jpg", "idMeal": "52846" }, { "strMeal": "Chicken Alfredo Primavera", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/syqypv1486981727.jpg", "idMeal": "52796" }, { "strMeal": "Chicken Basquaise", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/wruvqv1511880994.jpg", "idMeal": "52934" }, { "strMeal": "Chicken Congee", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/1529446352.jpg", "idMeal": "52956" }, { "strMeal": "Chicken Couscous", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/qxytrx1511304021.jpg", "idMeal": "52850" }, { "strMeal": "Chicken Enchilada Casserole", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/qtuwxu1468233098.jpg", "idMeal": "52765" }, { "strMeal": "Chicken Fajita Mac and Cheese", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/qrqywr1503066605.jpg", "idMeal": "52818" }, { "strMeal": "Chicken Ham and Leek Pie", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/xrrtss1511555269.jpg", "idMeal": "52875" }, { "strMeal": "Chicken Handi", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/wyxwsp1486979827.jpg", "idMeal": "52795" }, { "strMeal": "Chicken Karaage", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/tyywsw1505930373.jpg", "idMeal": "52831" }, { "strMeal": "Chicken Marengo", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/qpxvuq1511798906.jpg", "idMeal": "52920" }, { "strMeal": "Chicken Parmentier", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/uwvxpv1511557015.jpg", "idMeal": "52879" }, { "strMeal": "Chicken Quinoa Greek Salad", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/k29viq1585565980.jpg", "idMeal": "53011" }, { "strMeal": "Coq au vin", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/qstyvs1505931190.jpg", "idMeal": "52832" }, { "strMeal": "Crock Pot Chicken Baked Tacos", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/ypxvwv1505333929.jpg", "idMeal": "52830" }, { "strMeal": "French Onion Chicken with Roasted Carrots & Mashed Potatoes", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/b5ft861583188991.jpg", "idMeal": "52996" }, { "strMeal": "General Tso's Chicken", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/1529444113.jpg", "idMeal": "52951" }, { "strMeal": "Honey Balsamic Chicken with Crispy Broccoli & Potatoes", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/kvbotn1581012881.jpg", "idMeal": "52993" }, { "strMeal": "Jerk chicken with rice & peas", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/tytyxu1515363282.jpg", "idMeal": "52937" }, { "strMeal": "Katsu Chicken curry", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/vwrpps1503068729.jpg", "idMeal": "52820" }, { "strMeal": "Kentucky Fried Chicken", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/xqusqy1487348868.jpg", "idMeal": "52813" }, { "strMeal": "Kung Pao Chicken", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/1525872624.jpg", "idMeal": "52945" }, { "strMeal": "Nutty Chicken Curry", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/yxsurp1511304301.jpg", "idMeal": "52851" }, { "strMeal": "Pad See Ew", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/uuuspp1468263334.jpg", "idMeal": "52774" }, { "strMeal": "Piri-piri chicken and slaw", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/hglsbl1614346998.jpg", "idMeal": "53039" }, { "strMeal": "Potato Gratin with Chicken", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/qwrtut1468418027.jpg", "idMeal": "52780" }, { "strMeal": "Rappie Pie", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/ruwpww1511817242.jpg", "idMeal": "52933" }, { "strMeal": "Ros\u00f3\u0142 (Polish Chicken Soup)", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/lx1kkj1593349302.jpg", "idMeal": "53020" }, { "strMeal": "Shawarma", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/kcv6hj1598733479.jpg", "idMeal": "53028" }, { "strMeal": "Tandoori chicken", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/qptpvt1487339892.jpg", "idMeal": "52806" }, { "strMeal": "Teriyaki Chicken Casserole", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/wvpsxx1468256321.jpg", "idMeal": "52772" }, { "strMeal": "Thai Green Curry", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/sstssx1487349585.jpg", "idMeal": "52814" }]
var newdata = [{ "a": "Baked salmon with fennel & tomatoes", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg", "c": "52959" }, { "a": "Cajun spiced fish tacos", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/uvuyxu1503067369.jpg", "c": "52819" }, { "a": "Escovitch Fish", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/1520084413.jpg", "c": "52944" }, { "a": "Fish fofos", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/a15wsa1614349126.jpg", "c": "53043" }, { "a": "Fish pie", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/ysxwuq1487323065.jpg", "c": "52802" }, { "a": "Fish Stew with Rouille", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/vptqpw1511798500.jpg", "c": "52918" }, { "a": "Garides Saganaki", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/wuvryu1468232995.jpg", "c": "52764" }, { "a": "Grilled Portuguese sardines", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/lpd4wy1614347943.jpg", "c": "53041" }, { "a": "Honey Teriyaki Salmon", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/xxyupu1468262513.jpg", "c": "52773" }, { "a": "Kedgeree", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/utxqpt1511639216.jpg", "c": "52887" }, { "a": "Kung Po Prawns", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/1525873040.jpg", "c": "52946" }, { "a": "Laksa King Prawn Noodles", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/rvypwy1503069308.jpg", "c": "52821" }, { "a": "Mediterranean Pasta Salad", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/wvqpwt1468339226.jpg", "c": "52777" }, { "a": "Mee goreng mamak", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/xquakq1619787532.jpg", "c": "53048" }, { "a": "Nasi lemak", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/wai9bw1619788844.jpg", "c": "53051" }, { "a": "Portuguese fish stew (Caldeirada de peixe)", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/do7zps1614349775.jpg", "c": "53045" }, { "a": "Recheado Masala Fish", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/uwxusv1487344500.jpg", "c": "52809" }, { "a": "Salmon Avocado Salad", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/1549542994.jpg", "c": "52960" }, { "a": "Salmon Prawn Risotto", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/xxrxux1503070723.jpg", "c": "52823" }, { "a": "Saltfish and Ackee", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/vytypy1511883765.jpg", "c": "52936" }, { "a": "Seafood fideu\u00e0", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/wqqvyq1511179730.jpg", "c": "52836" }, { "a": "Shrimp Chow Fun", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/1529445434.jpg", "c": "52953" }, { "a": "Sledz w Oleju (Polish Herrings)", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/7ttta31593350374.jpg", "c": "53023" }, { "a": "Spring onion and prawn empanadas", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/1c5oso1614347493.jpg", "c": "53040" }, { "a": "Sushi", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/g046bb1663960946.jpg", "c": "53065" }, { "a": "Three Fish Pie", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg", "c": "52882" }, { "a": "Tuna and Egg Briks", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/2dsltq1560461468.jpg", "c": "52975" }, { "a": "Tuna Nicoise", "b": "https:\/\/www.themealdb.com\/images\/media\/meals\/yypwwq1511304979.jpg", "c": "52852" }]

let arr1=[]
olddata.forEach((el)=>{
    arr1.push(Object.keys(el))
})
let arr2=[]
newdata.forEach((el)=>{
    arr2.push(Object.values(el))
})



let main=[]
for(let i=0;i<arr2.length;i++){
    let newobj={}
    for(let j=0;j<arr2[0].length;j++){
        var char=arr1[i][j]
        newobj[char]=arr2[i][j]
    }
   main.push(newobj)
   
}
// console.log(main)

app.get("/", (req, res) => {
    let api=req.body
    if(api=="new"){
        res.send(main)
    }
    else if(api=="old"){

        res.send(olddata)
    }
    
})



app.listen(8000, () => {
    console.log("8000 port is running")
})