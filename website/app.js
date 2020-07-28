/* Global Variables */
let apikey = '&APPID=0dfaa53ebf76803c63fc22313bdbc0f9' ;
let apiurl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
//uk&APPID=0dfaa53ebf76803c63fc22313bdbc0f9 

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click',performact);

function performact(e){
const contry = document.getElementById('zip').value;
const user_response = document.getElementById('feelings').value;

getwether(apiurl,contry,apikey)
	.then(function(data)
	{
		//console.log(data)
		postwethear('/',{temperature:data.main.temp,newDate:newDate,user_response:user_response});
	
}).then(function(){
	
		UpdateUI();
})


}
// create get async function

const getwether=async (apiurl,contry,apikey)=> {
	const res= await fetch(apiurl+contry+apikey);
	try {
		const data =await res.json();
		//console.log(data);
		return data;
	}catch(error){
		console.log("error",error);
	}
}

// post async function 

const postwethear = async (url='',data={})=> {
	
	const res= await fetch(url,{
		method:'POST',
		credentials:'same-origin',
		headers:{
			'Content-Type':'application/json',
		},
		body:JSON.stringify(data),
	});
	console.log(res);
	 try{
		 const newres= await res.json();
		 console.log(newres);
		 return newres;
	 }catch(error){
		 console.log('error is ',error);
	 
	 }

}
	
const UpdateUI = async () => {
 const request = await fetch('/');
 //console.log(request);
 try {
	 const data= await request.json();
	 //console.log(data);
	 //console.log(alldata[0].temperature);
	 document.getElementById('temp').innerHTML = data.main.temp;
	 document.getElementById('date').innerHTML = data.newDate;
	 document.getElementById('content').innerHTML = data.user_response;
	 
	 
	
 }catch(error){
	console.log('error',error);
 }
}