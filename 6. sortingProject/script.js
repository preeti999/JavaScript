var novels = [
    {
        novelName: "Harry Potter and the Philosopher's Stone by J.K. Rowling",
        novelPrice: 1997,
    },

    {
        novelName: "The Lion, The Witch and the Wardrobe by C.S. Lewis",
        novelPrice: 1950,
    },
    {
        novelName: "The Little Prince by Antoine de Saint-Exupéry",
        novelPrice: 1943,
    },
    {
        novelName: "A Tale of Two Cities by Charles Dickens",
        novelPrice: 1859,
    },
    {
        novelName: "The Lord of the Rings by J.R.R. Tolkien",
        novelPrice: 1954,
    },

    {
        novelName: "The Hobbit by J.R.R. Tolkien",
        novelPrice: 1937,
    },
    {
        novelName: "Don Quixote by Miguel de Cervantes",
        novelPrice: 1612,
    },
];



function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";

    novels.forEach((fetchNovels) => {
        const li = document.createElement("li");    // <li></li>
        li.classList.add("list-group-item");        // <li class="list-group-item"></li>
        const name = document.createTextNode(fetchNovels.novelName);
        li.appendChild(name);                  // <li class="list-group-item">The Hobbit by J.R.R. Tolkien</li>


        const span = document.createElement("span");    //<li class="list-group-item">The Hobbit by J.R.R. Tolkien <span></span></li>
        span.classList.add("float-right");              // <li class="list-group-item">The Hobbit by J.R.R. Tolkien <span class="float-right"></span></li>
        const price = document.createTextNode("Released in: " + fetchNovels.novelPrice);   //<li class="list-group-item">The Hobbit by J.R.R. Tolkien <span class="float-right">Released in: 1937</span></li>
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);

    })
}

// generateList();
window.addEventListener("load", generateList);


// Assending the list
const buttonLowToHigh = document.querySelector(".btn-success");
buttonLowToHigh.addEventListener("click", () => {
    novels.sort((a, b) => a.novelPrice - b.novelPrice)
    generateList();
});

// Descending the list
const buttonHighToLow = document.querySelector(".btn-primary");
buttonHighToLow.addEventListener("click", () => {
    novels.sort((a, b) => a.novelPrice+b.novelPrice).reverse();
    generateList();
});
