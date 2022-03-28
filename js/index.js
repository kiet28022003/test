function change() {
    let img_arr = [
        "../images/bmw.jpg",
        "../images/Ferrari_SUV.jpg",
        "../images/mercedes.jpg"
    ];

    let left = document.getElementById("left-img");
    let main = document.getElementById("main-img");
    let right = document.getElementById("right-img");

    let index = 0;

    setInterval(() => {
        if (index < img_arr.length - 2) {
            left.src = img_arr[index];
            main.src = img_arr[index + 1];
            right.src = img_arr[index + 2];
        } else if (index == img_arr.length - 2) {
            left.src = img_arr[index];
            main.src = img_arr[index + 1];
            right.src = img_arr[0];
        } else if (index == img_arr.length - 1) {
            left.src = img_arr[index];
            main.src = img_arr[0];
            right.src = img_arr[1];
        } else if (index == img_arr.length) {
            index = 0;
            left.src = img_arr[index];
            main.src = img_arr[index + 1];
            right.src = img_arr[index + 2];
        }

        index++;
    }, 3000);
}

change();