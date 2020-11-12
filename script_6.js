const proteines = [
    {
        nom : "serine",
        nucleotides : [
            "UCU",
            "UCC",
            "UCA",
            "UCG",
            "AGU",
            "AGC"
        ]
    },
    {
        nom : "proline",
        nucleotides : [
            "CCU",
            "CCC",
            "CCA",
            "CCG"
        ]
    },
    {
        nom : "leucine",
        nucleotides : [
            "UUA",
            "UUG"
        ]
    },
    {
        nom : "phenylalanine",
        nucleotides : [
            "UUU",
            "UUC"
        ]
    },
    {
        nom : "arginine",
        nucleotides : [
            "CGU",
            "CGC",
            "CGA",
            "CGG",
            "AGA",
            "AGG"
        ]
    },
    {
        nom : "tyrosine",
        nucleotides : [
            "UAU",
            "UAC"
        ]
    }
]

function findProteine(string)
{
	let i = 0;
	
	while (i < proteines.length)
	{
		let j = 0;
		while (j < proteines[i].nucleotides.length)
		{
			if (proteines[i].nucleotides[j] === string)
			{
				return (proteines[i].nom);
			}
			j++;
		}
		i++;
	}
	console.log("Error 404 - Protein not found");
	
}

function giveName(string)
{
	let acideAmine = "";
	let i = 0;
	
	while (i < string.length - 4) {
		let trio = string[i] + string[i + 1] + string[i + 2];
		acideAmine = acideAmine + findProteine(trio) + " - ";
		i = i + 3;
	}
	let trio = string[i] + string[i + 1] + string[i + 2];
	acideAmine = acideAmine + findProteine(trio)
	
	return acideAmine;
}

console.log(giveName("CCUCGCCGGUACUUCUCG"));
