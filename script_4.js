const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//----------------QUESTION 1----------------------//

function birthday1970s(ent)
{
	let array = [];
	
	for (let i = 0; i < ent.length ; i++)
	{
		if (ent[i].year >= 1970 && ent[i].year <= 1979)
		{
			array.push(ent[i].first + " " + ent[i].last)
		}
	}
	return array;
}

function printTab(tab)
{
	let result = "";
	let i = 0;
	
	while (i < (tab.length - 1)){
		result = result + tab[i] + ", ";
		i++;
	}
	console.log(result + tab[i]);
}

console.log("Voici la liste des entrepeneurs nés dans les années 70");
printTab(birthday1970s(entrepreneurs))

//----------------QUESTION 2----------------------//

function nameLastName(ent)
{
	let array = [];
	
	for (let i = 0; i < ent.length ; i++)
	{
		array.push(ent[i].first + " " + ent[i].last);
	}
	return array;
}

console.log("Voici la liste des noms et prénoms des entrepeneurs");
printTab(nameLastName(entrepreneurs))

//----------------QUESTION 3----------------------//

function ageByName(ent)
{
	let array = [];
	
	for (let i = 0; i < ent.length ; i++)
	{
		array.push(nameLastName(entrepreneurs)[i] + " : " + (2020 - ent[i].year) + " ans");
	}
	return array;
}

console.log("Voici l'âge des entrepeneurs aujourd'hui");
printTab(ageByName(entrepreneurs))

//----------------QUESTION 4----------------------//

function sortLastName(ent)
{
	let result = [];
	
	for (let i = 0; i < ent.length ; i++)
	{
		result.push(ent[i].last);
	}
	
	return result.sort();
}

function findFirstName(name, ent)
{
	let i = 0;
	
	while (ent[i].last != name)
	{
		i++;
	}
	return (ent[i].first);
}

function findYear(name, ent)
{
	let i = 0;
	
	while (ent[i].last != name)
	{
		i++;
	}
	return (ent[i].year);
}

function sortHash(ent)
{
	let result = [];
	let sortArray = sortLastName(ent);
	
	for (let i = 0; i < ent.length ; i++)
	{
		let entry = {};
		entry.first = findFirstName(sortArray[i], ent);
		entry.last = sortArray[i]; 
		entry.year = findYear(sortArray[i], ent);
		result.push(entry);
	}
	
	return (result);
}

console.log(sortHash(entrepreneurs));