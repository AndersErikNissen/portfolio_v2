//JS by Anders Erik Nissen
//UCN MMDA0920


console.log("        /\\       _______   ___    __ ")
console.log("       /  \\     |   ____| |   \\  |  |")
console.log("      / /\\ \\    |  |____  |    \\ |  |")
console.log("     / /__\\ \\   |   ____| |  |\\ \\|  |")
console.log("    / /____\\ \\  |  |____  |  | \\    |")
console.log("   /_/      \\_\\ |_______| |__|  \\___|")

                            // IKKE NØDVENDIG; MEN NICE!
                            function footerPosition() {
                                let
                                footer = document.querySelector("footer"),
                                main = document.querySelector("main"),
                                mainH = main.offsetHeight,
                                windowH = window.innerHeight;

                                document.documentElement.style.setProperty("--footer-position", (windowH + mainH) + "px");
                            }
                            window.onload = footerPosition();
function onScroll() {
    let y = window.scrollY;
    main = document.querySelector("main");
    mainH = main.offsetHeight;
    // main.style.top ="-" + y + "vh";
    console.log(y)

}
document.addEventListener("scroll", onScroll)


// Create Sites
    const
    cURL = document.location.href;

    function URLcreate () {
        window.history.pushState("stateObj", "Title", "index.html/ommig");
    }
    function HTMLcreate () {
        if (cURL.includes("?ommig")) {
            console.log("AYA")
        }
        
    }
    HTMLcreate();







































// Fetch Token
const
    startURL = "http://aenders.dk/wp-json/jwt-auth/v1/token",

    login = {
        "username":"api.user",
        "password":"API-key-1234#!"
       
    };

    // fetch("http://aenders.dk/wp-json/jwt-auth/v1/token", {
    //     method: "POST",
    //     body: {
    //         "username":"api.user",
    //         "password":"API-key-1234#!"
    //     },
    // }) 
    // .then(res => res.json())
    // .then(json => console.log(json));

    // fetch("http://aenders.dk/wp-json/wp/v2/posts?status=private&categories=50", {
    //     method: "GET",
    //     headers: {
    //         Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LmFlbmRlcnMuZGsiLCJpYXQiOjE2Mjg5NTQ1NTIsIm5iZiI6MTYyODk1NDU1MiwiZXhwIjoxNjI5NTU5MzUyLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIyIn19fQ.Zuyeel6XRRSu8PxeAjVJUOzX82F8CEHi76Dcw7gJ6yU"
    //     }
    // })
    // .then(res => res.json())
    // .then(json => console.log(json))
    
    
    // fetch("http://aenders.dk/wp-json/jwt-auth/v1/token", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: {
    //         "username":"api.user",
    //         "password":"API-key-1234#!"
    //     }
    // })
    // .then(res => res.json())
    // .then(json => console.log(json))


 