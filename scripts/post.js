var categorylist = document.querySelector(".images");
var arr = JSON.parse(window.localStorage.getItem("post"));

const POSTDELETETEMPLATE = `<div class="post-image">
<img src="{{POST-IMAGE}}" alt="">
<h5>{{POST-TYPE}}</h5>
<p>{{POST-DESCRIPTION}}</p>
<p>$ {{POST-PRICE}}</p>
<button onclick="remove({{POST-ID}})"><i class="fa fa-trash"> </i> Delete</button>
</div>`;
const renderdelCategories = () => {
    var data = JSON.parse(window.localStorage.getItem("post"));
    const post = data
    .sort((a,b) => b.price - a.price);
    categorylist.innerHTML = "";
    post.forEach(post => {
        if(post.imageUrl == '') post.imageUrl = "./Images/unhealthy-junk-food-different-types-fast-food-table-close-up_77190-5177.jpg"
        let foodPost = POSTDELETETEMPLATE
        .replace('{{POST-IMAGE}}',post.imageUrl)
        .replace('{{POST-TYPE}}',post.type)
        .replace('{{POST-DESCRIPTION}}',post.discription)
        .replace('{{POST-PRICE}}',post.price)
        .replace('{{POST-ID}}',post.id)
        categorylist.innerHTML += foodPost;
    })
}

function remove(id)
{
    var item = JSON.parse(window.localStorage.getItem("post"));
    console.log(id)
    const remain = item.filter(food => food.id != id);
    item = remain;
    localStorage.setItem('post',JSON.stringify(item));
    console.log(remain);
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
        <button onclick="remove(${food.id})"><i class="fa fa-trash"> </i> Delete</button>
        </div>`;
    })
    if(searchInput.value == '')
    {
        renderdelCategories();
    }
    categorylist.innerHTML = html;
}
var searchInput = document.querySelector('#search');
searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);


renderdelCategories();