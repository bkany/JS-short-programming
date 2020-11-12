let nb = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
nb = Number(nb);


function oneline(n, i)
{
	let space = "";
	let hashtag = "";
	
	for(let count = 0; count < (n - i); count++){
		space = space + " ";
	}
	for(let count = 0; count < i; count++){
		hashtag = hashtag + "#";
	}
	console.log(space + hashtag);
	//return (space + hashtag);
}


for (let i = 1; i <= nb; i++){
	oneline(nb, i);
}
