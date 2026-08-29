function filterFiles(category) {

    const files = document.querySelectorAll(".file-card");

    const buttons = document.querySelectorAll(".category-list button");


    buttons.forEach(button => {

        button.classList.remove("active");

    });


    event.target.classList.add("active");


    files.forEach(file => {

        if (category === "all") {

            file.style.display = "flex";

        }

        else if (file.classList.contains(category)) {

            file.style.display = "flex";

        }

        else {

            file.style.display = "none";

        }

    });

}