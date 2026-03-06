# BACKEND-Practice
I am learning backend to understand how servers handle requests and responses. I am practicing APIs, routing, and data flow to see how websites work behind the scenes and how frontend connects with backend.



Day 01: 1 March 2026

-Set up backend first
-Install express and created a sample index.js



Day 02: 2 March 2026


-Set up Routing and understand the req and response
-GET,POST,PUT,DELETE for set up after postman and test these req
-response can be json,file etc
-create a routes (item,js) >> to keep differnet routes and place the actual index.js clean to look 
-create custom route for birds.js and set up into index.js for clean struct



Day 03: 5 March 2026

-Connect to MongoDB
-Understand MongoDB compass for local database and atlas for cloud connection of database
-understand mongoose as ODM (Object Data Modelling) library for connection btw server and database
-Created db.js for mongoose connect 
-.env file for mongodb_uri and rest api or url can also be present
-created users.js for routing to perform CRUD operation
-Test CRUD operation on Postman 
-All the Operation are ready with postman run and mongodb atlas for attach mogodb_uri



Day 04: 7 March 2026

-learn about MVC Pattern(Model,View,Controllers)
-Model (for DB) & controller (business logic)
-created productControllers.js & routes for productRoutes
-All CRUD operation test on postman for controller to call route request
-Hence,responce get towards frontend or Client 

FINAL VIEW OF MVC PATTERN >> 

Frontend-> request -> express app -> route req -> controller(logic , models etc) -> response send to frontend

   
