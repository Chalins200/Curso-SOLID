(() => {

	type Gender = 'M'|'F';

	class Person {
		constructor(
			public name:string, 
			public gender:Gender, 
			public birthdate: Date){
		}
	}


	const newPerson = new Person('Cesar','M', new Date('1995-06-20') );
	console.log({ newPerson});


})();