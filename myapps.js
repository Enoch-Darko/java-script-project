var myname = "Enoch Darko"
var car ={
	brand: "Evolvo",
	maker: "Enoch Darko Company Limited",
	speed: "500mph",
	year: 2020,
    model: "E2020",
	engine: {
		materials: "Iron and steel",
		size : 6.0,
		fuel: "diesel",
		piston: [{number: "4", heat_capacity: "3000K"},{origin: "Ghana"}],
 
	},


		carInfo: function(carInformation){
var info = "*****This is a brief description about my car.******* " ;
var engine_piston =1;
var verboseInf="The name of the car is "+ car.brand + " made by " + car.maker + " in the year 2020. " +
"The model of this car is " + car.model + 
	".It has a maximum speed of "+car.speed + ".The engine of the car is made of "+ car.engine.materials + " and has a size of " + car.engine.size+
	".Because I hate patrol, I fuel my car with " + car.engine.fuel + ". The engine consist of " + car.engine.piston[0].number + " and was also manufactured in " +
	car.engine.piston[engine_piston].origin

var carInformation = info+ verboseInf;	

return carInformation;
	}

			
		};
//Accessing the members carInfo from the my car object by another object my array

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
   car.carInfo() 
];


console.log(array[4] );