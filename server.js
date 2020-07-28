  
// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express=require('express');

// Start up an instance of app
const app=express();
const bodyParser=require('body-parser');
const	cors=require('cors');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=3000;

const server=app.listen(port,listning);

function listning() {
	     console.log('running on localhost with port: ',port);
}
// get route
app.get('/',function(req,res) {
	res.send(projectData);}
)

app.post('/',function(req,res){
	//projectData.push(req.body);
	//console.log(req.body);
	let newData = req.body;
	let newEntry = {
		
		temp : newData.temperature,
		ne: newData.newDate,
		user : newData.user_response
	
	}
	projectData.push(newEntry)	;
	//res.send(projectData);
	//console.log(projectData);
	
});