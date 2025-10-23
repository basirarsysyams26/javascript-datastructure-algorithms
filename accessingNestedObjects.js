const ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet testing": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};
const result = ourStorage["cabinet testing"]["top drawer"].folder1;
console.log(result);

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);