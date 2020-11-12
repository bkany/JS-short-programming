let nb = prompt("De quel nombre veux-tu calculer la factorielle ?");


function recursivefactoriel(n)
{
	if (n === 0)
		return 1;
	else
		return n * (recursivefactoriel(n - 1));
}

console.log("Le résultat est : " + recursivefactoriel(Number(nb)));