const image1 = "./images/cat1.jpg";
        const image2 = "./images/cat2.jpg";

        const galleryImage = document.getElementById('galleryImage');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        function changeImage(image) {
            galleryImage.src = image;
        }

        nextButton.addEventListener("click", ()=>{
            changeImage(image1);
        });
        prevButton.addEventListener("click", () =>{
            changeImage(image2);
        });