// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
        lactoseFree: true,
        keto: true,
		organic: true,
		price: 4.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
        lactoseFree: true,
        keto: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
        lactoseFree: true,
        keto: true,
		organic: false,
		price: 10.00
	},
    {
		name: "milk",
		vegetarian: false,
		glutenFree: true,
        lactoseFree: false,
        keto: false,
		organic: true,
		price: 3.99
	},
    {
		name: "lean beef",
		vegetarian: false,
		glutenFree: true,
        lactoseFree: true,
        keto: true,
		organic: false,
		price: 8.99
	},
    {
		name: "asparagus",
		vegetarian: true,
		glutenFree: true,
        lactoseFree: true,
        keto: true,
		organic: true,
		price: 4.99
	},
    {
		name: "tomatoes",
		vegetarian: true,
		glutenFree: true,
        lactoseFree: true,
        keto: true,
		organic: true,
		price: 2.99
	},
    {
		name: "bacon",
		vegetarian: false,
		glutenFree: true,
        lactoseFree: true,
        keto: true,
		organic: false,
		price: 6.99
	},
    {
		name: "yogurt",
		vegetarian: false,
		glutenFree: true,
        lactoseFree: false,
        keto: false,
		organic: false,
		price: 8.99
	},
    {
		name: "chocolate-chips",
		vegetarian: true,
		glutenFree: true,
        lactoseFree: true,
        keto: true,
		organic: false,
		price: 6.99
	},
      
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let product_price = 0;
	let product_price_text = "";
	let product_price_name = "";
	let products_pre_sort = [];
	
	let products_2d = [];
	let current_product = [];
	var current_prod = "";
	var current_price = 0;
	var current_price_text = "";
	let final_list =[];
	
	for (let i=0; i<prods.length; i+=1) {
// 		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
// 			product_names.push(prods[i].name);
// 		}
// 		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
// 			product_names.push(prods[i].name);
// 		}
// 		else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
// 			product_names.push(prods[i].name);
// 		}
// 		else if ((restriction == "Keto") && (prods[i].keto == true)){
// 			product_names.push(prods[i].name);
// 		}
// 		else if ((restriction == "Organic") && (prods[i].organic == true)){
// 			product_names.push(prods[i].name);
// 		}
// 		else if ((restriction == "Non-Organic") && (prods[i].organic == false)){
// 			product_names.push(prods[i].name);
// 		}
// 		else if (restriction == "None"){
// 			product_names.push(prods[i].name);
// 		}
		if (((restriction == "Vegetarian") && (prods[i].vegetarian == true)) || ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) || ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)) || ((restriction == "Keto") && (prods[i].keto == true)) || ((restriction == "Organic") && (prods[i].organic == true)) || ((restriction == "Non-Organic") && (prods[i].organic == false)) || (restriction == "None")) {
			products_pre_sort.push(prods[i].name);
			product_price = prods[i].price;
			product_price_text = product_price.toString();
			product_price_name = prods[i].name.concat(" ~ (", product_price_text,"$)");
			product_names.push(product_price_name);
			
			current_product.push(prods[i].name);
			current_product.push(prods[i].price);
			products_2d.push(current_product);
			current_product = [];	
		}
		
	}
	
	products_2d.sort(function (a,b) {
		var x = a[1];
		var y = b[1];
		return x - y;
	});
	for (let x = 0; x < products_2d.length; x+=1) {
		current_price = products_2d[x][1];
		current_price_text = current_price.toString();
		current_prod = products_2d[x][0];
		current_prod = current_prod.concat(" ~ (", current_price_text,"$)");
		final_list.push(current_prod);
		current_prod = "";
  
}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
