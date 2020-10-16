RequestedData = []

MainContent = []
ConceptsContent = []
RandomContent = []

MainContentPost = ["<h1>Link Access To Main Projects</h1>"]
ConceptsContentPost = ["<h1>Link Access To Concept Projects</h1>"]
RandomContentPost = ["<h1>Link Access To Random Projects</h1>"]


async function FetchData() {
    let response = await fetch("/JSONfiles/Index.JSON");
    if (response.status === 200) {
        let data = await response.json();
		MainContent = data[0].Main
		ConceptsContent = data[1].Concepts
		RandomContent = data[2].Random
	}
	CreateArray()
	
}

FetchData()

function CreateArray(){
	for (let i = 0; i < MainContent.length; i++) {
		MainContentPost.push(`
		<a href="${MainContent[i].Link}">
			<h2>${MainContent[i].Title}</h2>
			<ul>
				<li>${MainContent[i].Description}</li>
			</ul>
		</a>
		`)
		
	}
	for (let i = 0; i < ConceptsContent.length; i++) {
		ConceptsContentPost.push(`
		<a href="${ConceptsContent[i].Link}">
			<h2>${ConceptsContent[i].Title}</h2>
			<ul>
				<li>${ConceptsContent[i].Description}</li>
			</ul>
		</a>
		`)
	}
	for (let i = 0; i < RandomContent.length; i++) {
		RandomContentPost.push(`
		<a href="${RandomContent[i].Link}">
			<h2>${RandomContent[i].Title}</h2>
			<ul>
				<li>${RandomContent[i].Description}</li>
			</ul>
		</a>
		`)
	}
	MainContentPost = MainContentPost.join("")
	ConceptsContentPost = ConceptsContentPost.join("")
	RandomContentPost = RandomContentPost.join("")
	document.getElementById("Main").innerHTML = MainContentPost
	document.getElementById("Concepts").innerHTML = ConceptsContentPost
	document.getElementById("Random").innerHTML = RandomContentPost
}