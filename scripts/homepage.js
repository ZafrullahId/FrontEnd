const categoryList = document.querySelector(".images");
var arr = JSON.parse(window.localStorage.getItem("post"));
let foodBlog = [
    {
        id: 1,
        imageUrl: "./Images/good-foods.jpg",
        type: "Yam",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '100',
    },
    {
        id: 2,
        imageUrl: "./Images/photo-1550547660-d9450f859349.jpeg",  
        type: "Potato",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '280',
    },
    {
        id: 3,
        imageUrl: "./Images/pizza-picture-id184946701.jpeg",
        type: "Yam",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '200',
    },
    {
        id: 4,
        imageUrl: "./Images/photo-1550547660-d9450f859349.jpeg",
        type: "Pinnut",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '240',
    },
    {
        id: 5,
        imageUrl: "./Images/login page image.jpg",
        type: "Bugger",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '350',
    },
    {
        id: 6,
        imageUrl: "./Images/photo-1550547660-d9450f859349.jpeg",
        type: "Beans",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '200',
    },
    {
        id: 7,
        imageUrl: "./Images/unhealthy-junk-food-different-types-fast-food-table-close-up_77190-5177.jpg",
        type: "Rice",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '500',
    },
    {
        id: 8,
        imageUrl: "./Images/login image.jpg",
        type: "pizza",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '400',
    },
    {
        id: 9,
        imageUrl: "./Images/food.jpg",
        type: "pizza",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '400',
    },
    {
        id: 10,
        imageUrl: "./Images/image login.jpg",
        type: "Spag",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '400',
    },
    
]
const POSTTEMPLATE = `<div class="post-image">
<img src="{{POST-IMAGE}}" alt="">
<h5>{{POST-TYPE}}</h5>
<p>{{POST-DESCRIPTION}}</p>
<p>$ {{POST-PRICE}}</p>
</div>`;
const renderCategories = () => {
    // localStorage.setItem('post',JSON.stringify(foodBlog));
    var datas = JSON.parse(window.localStorage.getItem("post"));
    const post = datas
    .sort((a,b) => b.price - a.price);
    categoryList.innerHTML = "";
    post.forEach(post => {
        if(post.imageUrl == '') post.imageUrl = "./Images/unhealthy-junk-food-different-types-fast-food-table-close-up_77190-5177.jpg"
        let foodPost = POSTTEMPLATE
        .replace('{{POST-IMAGE}}',post.imageUrl)
        .replace('{{POST-TYPE}}',post.type)
        .replace('{{POST-DESCRIPTION}}',post.discription)
        .replace('{{POST-PRICE}}',post.price)
        categoryList.innerHTML += foodPost;
    })
}

function addFood()
{
    var datas = JSON.parse(window.localStorage.getItem("post"));
    const type = document.querySelector('#type');
    const description = document.querySelector('#description');
    const prize = document.querySelector('#price');
    const foodimg = document.querySelector('#food-img');
    const addForm = document.querySelector('.add-food-form');
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        var obj = {
            id: datas.length + 1,
            imageUrl: foodimg.value,
            type: type.value,
            discription: description.value,
            price: prize.value,
        }
        foodBlog = datas;
        foodBlog.push(obj);
        localStorage.setItem('post',JSON.stringify(foodBlog));
        location.href="index.html";
    })
}
function findMatches(wordToMatch, arr)
{
    return arr.filter(food => {
        const regex = new RegExp(wordToMatch, 'gi');
        return food.type.match(regex);
    })
}
function displayMatches(){
    const matchObj = findMatches(this.value, arr);
    const html = matchObj.map(food => {

        return  `<div class="post-image">
        <img src="${food.imageUrl}" alt="">
        <h5>${food.type}</h5>
        <p>${food.description}</p>
        <p>$ ${food.price}</p>
        </div>`;
    })
    if(searchInput.value == '')
    {
        renderCategories();
    }
    categoryList.innerHTML = html;
}
const searchInput = document.querySelector('#search');
searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);

renderCategories();