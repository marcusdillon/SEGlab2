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
	let final_list = [];
	let current_product = "";
	let current_product_name_price = "";
	let current_product_price = 0;
	let current_product_price_text = "";
	
	
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
			
		}
	}
	
	for (let x = 0; x < products_pre_sort.length; x+=1) {
		current_product = products_pre_sort[x];
		for (let y = 0; y < products_pre_sort.length; y+=1) { 
			if (products_pre_sort[y].price < products_pre_sort[x].price) {
				current_product_price = products_pre_sort[y].price;
				current_product_price_text = current_product_price.toString();
				current_product = products_pre_sort[y].name.concat(" ~ (", current_product_price_text,"$)");
			}
		}
		final_list.push(current_product);

	}
	return final_list;
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
