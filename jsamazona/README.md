1.Create folder Structure:
    1.create root folder as jsamazona
    2.add frontend and backend folder
    3.create src folder in frontend
    4.run index.html with heading jsamazona in src
    5.run npm init in frontend folder
    6.npm install live-server
    7.add start command as live-server src --verbose
    8.run nm start
2.Design Website:
    1.create style.css
    2.link style.css to index.html
    3.create div.css-container
    4.create header, main and footer
    5.style html, body
    6.style grid-container,header, main and footer
3.Create Static Home Screen
    1.Create ul.products
    2.Create li
    3.Create div.product
    4.add .product-image, .product-name, .product.brand, .product-price
    5.style ul.products and internal divs
    6.duplicate 2 times to show products
4.Render Dynamic Home Screen
    1.create data.js
    2.expport an array of 6 screens
    3.create screen/Homescreen.js
    4.export HomeScreen as an object withh render() method
    5.implement render()
    6.import data.js
    7.return  products mapped to list inside an ul
    8. create app.js
    9.link it to main_container
    10.set main id to main_container
    11.create router() function 
    12.set main_container innerHTML to HomeScreen.render()
    13.set load event of window to router() function
5.Build Url Router
    1.create route for route :screen object form home screen 
    2.create utils.js
    3.export parseRequestURL()
    4.set URL as hash address split by splash
    5.return  resource, id and verb of url
    6.update router()
    7.set  request as parseRequestURL()
    8.build parseUrl and compare with routes
    9.if route exists render it , else render Eror404
    10.create screens/Error404.js and render error message
6.Create Node.JS SERVER
    1.run npm init in root jsamazona folder
    2.npm install express
    3.create server.js
    4.add start command as node/backend/server.js
    5.require express
    6.move data.js from frontend in data.js
    7.create route for /api/products
    8.return products in data.js
    9.run npm start
7.Load Products From Backend
    1.edit HomeScreen.js
    2.make render async
    3.fetch products from'/api/products' in render()
    4.make router() async and call await homeScreen.render()
8.Add Webpack
    1.cd frontend
    2.npm install-D webpack-cli webpack-dev-server
    3.npm unistall live-server
    4."start": "webpack-dev-server -- mode development -- watch-content-base --open"
    5.move index.html,style.css and images to frontend folder
    6.rename app.js to index.js
    7.update index.html
    8.add <script src="main.js" ></script>before</body>
    9.npm start
    10.npm install axios
    11.change fetch to axios in HomeScreen
9.Install Babel For ES6 Syntax
    1.npm  install -D babel core, cli, node, preset-env
    2.Create .babelrc and set presets to @babel/preset-env
    3.npm install -D nodemon
    4.set start:nodemon --watc backend --exec babel-node backend/server.js
    5.convert require to import in server.js
    6.npm start
10.Enable Code Linting
    1.npm install -D eslint
    2.install VsCode eslint extension
    3.create .eslintrc and set module.exports for env to node
    4.Set Vscode setting for editor.codeActionsOnSave source.fixAll
    5.check result for linting error
    6.npm install eslin-config-base and es-lint-plugin-  import 
    7.set extends to airbnb-base
    8.set parseOptions to ecmaVersion 11 and sourceType to module
    9.set rules for no-console to 0 to ignore linting error
11.Install VSCode Extensio
    1.JavaScript (ES6) code snippets
    2.ES7 REACT/Redux/GrapQL/React-Native snippets
    3.Prettier -Code formatter
    4.HTML&LESS grammar injections
    5.CSS Peek
12.Create Rating Component
    1.create components/rating.js
    2.create div.rating
    3.link to frontawesome.css in index.html
    4.define Rating object with render()
    5.if !props.value return empty div
    6.else use fa fa-star , fa-star-half-o and fa-star-o
    7.last span for props.test || ''
    8.style div.rating,span and last span
    9.Edit HomeScreen
    10.Add div.product-rating and use rating component
13.Product Screen
    1.get product id from request
    2.implement /api/product/:id api
    3.send Ajax request to product api
14.Product Screen UI    
    1.create back to result link
    2.create div.details with 3 columns
    3.column 1 for product image
    4.column 2 for product information
    5.column 3 form product action
    6.style .details and all columns
    7.create add to cart button with add-button id
15.Add to screen action
    1.after_render() to add event to the button
    2.add event handler for button
    3.redirect user to cart/:product_id
    4.implement after_render in index.js
16.AddTo Cart Action
    1.create CartScreen.js
    2.parserequestUrl
    3.getProduct(request.id)
    4.addToCarItemsif 
    5.existItem.find update qty
    6.else add item
    7.setCartItems
17.CArt Screen UI
    1.cartItmes = getCartItems()
    2.create 2 columns for cart items and cart action
    3.cartItems.lenght === 0 ? cart is empty
    4.show item image, name, qty and price
    5.cart action
    6.Subtotal
    7.proceed to Checkout button
    8.Add Css Style
18.Update and Delete Cart items
    1.add qty select next to each item
    2.after_render()
    3.add_change event to qty select
    4.getCartItems() and pass to addToCart()
    5.set force to addToCart()
    6.create render() as(component,areaName ='content')
    7.component.render and component.after_render
    8.if force is true the render()
    9.add delete button next to qty button
    10.call removeFromCArt(deleteButton.id)
    11.implement removeFromCArt(id)
    12.setCartItems(getCartItems().filter)
    13.if id === parseRequestURL()
    14.id ? redirect to '/cart/'
    15.else rerender(CartScreen)
18.Connect To MongoDB and Create Admin User
    1.npm instal mongoose
    2.connect to mongodb
    3.createconfig.js
    4.npm install dotenv
    5.export PORT and MONGODB_URL
    6.createmodels/useModel.JS
    7.create userSchema and userModel
    8.create userRoute
    9.create createadmin route
20.Sign-in Screen UI
    1.create SigninScreen
    2.render email and password fields
    4.style signin form
21.Sign-in screen Action
    1.after_render handle form submit
    2.create signin request in frontend
    3.create signin api in backend
    4.create route for api/users/signin
    5.create check user name and password
    6.if it not ogreturn 401 error
    7.install express-async-handler
    8.wrap it in expressSyncHandler
    9.add error middleware in server.js
    10.install Postman
    11.send post request
    12.test with invalid user password
    13.otherwise generate token
    14.install jsonwebtoken
    15.set config.JWT.TOKEN_SECRET to somethingsecret
    16.add generateToken to utils.js
    17.test with correct user and password
22.Sign-in Screen Action  
    1.after_render handle submit
    2.create signin request in frontend
    3.show alert if email or password is incorrect 
    4.Add getUserInfo an setUserInfo to localStorage
    5.create header componenet
    6.if userInfo.email exist show user name otherwise show signin
23.Create Progress Indicator and Alert Component
    1.create overlay loading
    2.Style  overlay loading
    3.create showLoading() function
    4.set loading-overlay classList add active
    5.create hideLoading() function
    6.create overlay message div in index.html
    7.add style overlay message
    8.create showMessage (message, callback) 
    9.document  message-overlay- set inner HTML
    10.div > div id message-overlay-content
    11.show message 
    12.button id message-overlay-close-button Ok
    13.add class active to it
    14.add event listener for button to call callback
 24.Create header Component
    1.update index.html
    2.add header render and after render to router function
    3.show header menu based and user logged in or not 
25.Register Screen Action
    1.after_render handle submit
    2.create register request in  frontend
    3.create register api in backend
26.Checkout Wizard
    1.create CheckoutSteps.js
    2.create div elements for step 1 to 4
    3.create redirectUser() in utils.js
    4.copy profile screen and as shippin screen
    5.use CheckoutStep
    6.define getShipping and setShipping
    7.copy shipping screen and as payment screen
    8.define getPayment and setPayment
    9.redirect user to Placeorder.js
27.PlaceOrder Screen UI
    1.create PlaceOrder.js
    2.style elements
28.Order Screen Action
    1.Handle place order button click
    2.createOrder api
    3.create orderModel
    4.create orderrouter
    5.create post order route
29.Order Screen
    1.create OrderScreen.js
    2.style elements
30.PayPal Paymnet
    1. get client id from paypal
    2.set iti in .env file
    3.create route form /api/paypal/clientId
    4.create getpaypalClientID in api.js
    5.add paypal checkout script in OrderScreen.js
    6.show paypal button
    7.update order after payment
    8.cfreate route for /:id/pay in orderRouter.js
    9.create route for /:id/pay in oreder router.js
    10.rerender after pay order
31.User order history
    1.create order history api
    2.Show orders in profile screen
32.Admin Products
    1.create Admin order menu in header
    2.create productListScreen.js
    3.show products with edit and delete button
    4.show create product button
    5.implement create product backend
    6.redirect user to edit product screen



  


    







    
