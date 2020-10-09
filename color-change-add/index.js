const colors = [
    {name: "red",
    motto:"tomato"},
    {name: "green",
    motto: "lake"
    },
    {name: "blue",
    motto: "sky"
    },
    {name: "pink",
    motto: "gypsy"
    },
    {name: "gray",
    motto: "smoke"
    }
]

const randomButton = document.querySelector("#randomColorButton");
const addButton = document.querySelector("#setColorButton");

randomButton.addEventListener("click", changeColor)
addButton.addEventListener("click", addColor);

function changeColor(){
    const randomIndex = Math.floor(Math.random() *colors.length);
    document.querySelector("body").style.backgroundColor = colors[randomIndex].name;

    document.querySelector("#colorName").innerHTML = colors[randomIndex].name;
    document.querySelector("#colorDescp").innerHTML = colors[randomIndex].motto;  
    console.log(colors) ;
}

function addColor(){
    const userInput = document.querySelector(".colorInput");
    const colorData = userInput.value.split(":");
    
    const colorObject = {
        name: colorData[0],
        motto: colorData[1]
    }

    const searchedIndexOf = colors.findIndex((myColor)=> myColor.name === colorObject.name)

    if (searchedIndexOf === -1){

        document.querySelector("#colorName").innerHTML = colorObject.name;
        document.querySelector("#colorDescp").innerHTML = colorObject.motto; 
        
        colors.push(colorObject);
        document.querySelector("body").style.backgroundColor = colorObject.name;
    }
    else{
        alert("this color is already in list")
    }
 
    
    
}




