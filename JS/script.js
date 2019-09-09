//$(document).ready(function () {
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 100) {
//            $(".header").addClass("changeHeight")
//        } else {
//            $(".header").removeClass("changeHeight")
//        }
//    })
//})




//const Http = new XMLHttpRequest();
//const x = "https://jsonplaceholder.typicode.com/posts";
//Http.open("GET", x);
//Http.send();
//
//Http.onreadystatechange = () => {
//    var data = JSON.parse(Http.responseText)
//    data.map(item => console.log(item.body))
//}


$(document).ready(function () {

    const x = "https://jsonplaceholder.typicode.com/posts";
    $.ajax({
        url: x,
        type: "GET",
        success: function (res) {
            var result = res.splice(0, 9).map(item =>
                `
<div>
<h2>${item.title}</h2>
<p> ${item.body}</p>
</div>
`
            )
            document.getElementById("data").innerHTML = result

        },
        error: function (err) {
            console.log(err)
        }
    })

})

$(document).ready(function () {
    const x = "https://jsonplaceholder.typicode.com/photos";
    $.ajax({
        url: x,
        type: "GET",

        success: function (result) {
            var res = result.splice(0, 9).map(item =>
                `
                    <div>
                        <img src="${item.url}">
                        <h2>${item.title}</h2>
                    </div>
                `)
            document.getElementById('wrap').innerHTML = res
        }

    })
})
