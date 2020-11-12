const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//----------------QUESTION 1----------------------//

function areRented(tabHash){
	let i = 0;
	
	while (i < tabHash.length){
		if (tabHash[i].rented === 0)
			return (false);
		i++;
	}
	return(true);	
}

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
if (areRented(books)) { console.log("Oui !"); }
else { console.log("Non ..."); }

//----------------QUESTION 2----------------------//

function mostRented(tabHash)
{
	let i = 1;
	let result = tabHash[0];
	
	while (i < tabHash.length){
		if (result.rented < tabHash[i].rented)
		{
			result = tabHash[i];
		}
		i++;
	}
	return (result);
}

console.log("Quel est livre le plus emprunté ?");
console.log(mostRented(books).title);

//----------------QUESTION 3----------------------//

function lessRented(tabHash)
{
	let i = 1;
	let result = tabHash[0];
	
	while (i < tabHash.length){
		if (result.rented > tabHash[i].rented)
		{
			result = tabHash[i];
		}
		i++;
	}
	return (result);
}

console.log("Quel est le livre le moins emprunté ?");
console.log(lessRented(books).title);

//----------------QUESTION 4----------------------//

function findID(tabHash, id)
{
	let i = 1;
	let result; 
	
	while (i < tabHash.length){
		if (tabHash[i].id === id)
		{
			return tabHash[i];
		}
		i++;
	}
	return (0);
}

console.log("Le livre avec l'id 873495 est " + findID(books, 873495).title);

//----------------QUESTION 5----------------------//

function findIndex(tabHash, id)
{
	let i = 0; 
	
	while (i < tabHash.length){
		if (tabHash[i].id === id)
		{
			return (i);
		}
		i++;
	}
	return (-1);
}

function deleteID(tabHash, id)
{
	let index = findIndex(tabHash, id);
	if (index >= 0) {
		delete tabHash[index];
	}
	else {
		console.log("Pas de bouquin trouvé avec cet id"); 
	}
}

deleteID(books, 133712);
console.log(books);

//----------------QUESTION 6----------------------//

/*
function sortByTitle(tab)
{
	let result = [];
	
	for (let i = 1; i < tab.length ; i++)
	{
		result.push(tab[i].title);
	}
	
	return result.sort();
}


function findID(title, tab)
{
	let i = 1;
	
	while (tab[i].title != title)
	{
		i++;
	}
	return (tab[i].id);
}

function findRented(title, tab)
{
	let i = 1;
	
	while (tab[i].title != title)
	{
		i++;
	}
	return (tab[i].rented);
}

function sortHash(ent)
{
	let result = [];
	let sortArray = sortByTitle(books);

	for (let i = 0; i < ent.length ; i++)
	{
		let entry = {};
		entry.title = sortArray[i];
		entry.id = findID(sortArray[i], books);
		entry.rented = findRented(sortArray[i], books);
		result.push(entry);
	}
	
	return (result);
}

console.log(sortHash(books));
*/
