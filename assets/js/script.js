//JS by Anders Erik Nissen
//UCN MMDA0920


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
// document.addEventListener("scroll", onScroll)


// Create Sites
    const
    thisURL = document.location.href;
    //Changes URL without Reloading
    // function URLcreate () {
    //     window.history.pushState("stateObj", "Title", "index.html/ommig");
    // }

    function titleCreate (title) {
        let 
        newTitle = title.charAt(0).toUpperCase() + title.slice(1);
        // Makes sure to split up "ommig"
        if (title === "om-mig") {
            let
            newSplit = title.split("-"),
            splitOne = newSplit[0].charAt(0).toUpperCase() + newSplit[0].slice(1),
            splitTwo = newSplit[1].charAt(0).toUpperCase() + newSplit[1].slice(1);
            newTitle = splitOne + " " + splitTwo; 
        }
        //Changes the Title
        document.title = newTitle + " - Anders Erik Nissen - Portfolio"
    }
    function GlobalNAVactive (active) {
        let
        list = document.querySelectorAll(".globalNAVli"),
        act = active;
        //If the the site either SNV or Engelrod set active on "projekter"
        if (act === "snv") {
            act = "projekter";
        }
        if (act === "englerod") {
            act = "projekter";
        }
        //Check each item in the Array.
        list.forEach( each => {
            let 
            //Check each href + slice "?"
            att = each.getAttribute("href"),
            attCut = att.slice(1);
            // First remove if there is any .active_nav, then add to the matching nav-li-element.
            each.classList.remove("active_nav");
            if (attCut === act) {
                each.classList.add("active_nav");
            }
        })

    }
    function SITEcreate () {
        let 
        checkSplit = thisURL.split("?"),
        check = checkSplit[1];
    
        switch (check) {

            case undefined:
                titleCreate("Forside");
                console.log("false!!")
                break;

            case "om-mig":
                titleCreate(check);
                GlobalNAVactive(check);
                console.log(check)
                break;

            case "projekter":
                titleCreate(check);
                GlobalNAVactive(check);
                console.log(check)
                break;

            case "kontakt":
                titleCreate(check);
                GlobalNAVactive(check);
                console.log(check)
                break;

            case "snv":
                titleCreate(check);
                GlobalNAVactive(check);
                console.log(check)
                break;

            case "englerod":
                titleCreate(check);
                GlobalNAVactive(check);
                console.log(check)
                break;
                
            default:
                console.log("DEFAULT: HTML-CREATE")
        }
        // "Forside", ommig, projekter, kontakt, snv, englerod
        
    }
    SITEcreate();

// window.addEventListener("load", ()=> {console.log(document.querySelector("main").scrollTop)})

// Fades out Hero Content with the scrollY.
document.addEventListener("scroll", ()=> {
    let 
    hero = document.querySelector("#heroTextSection");
    //Stops when going below 0.
    if (window.scrollY < 400) {
        hero.style.opacity = 1 - (window.scrollY / 400);
    }
})





































// Fetch Token
const
    startURL = "http://aenders.dk/wp-json/jwt-auth/v1/token",

    login = {
       
    };

    // fetch("http://aenders.dk/wp-json/jwt-auth/v1/token", {
    //     method: "POST",
    //     body: {
    //       
    //     },
    // }) 
    // .then(res => res.json())
    // .then(json => console.log(json));

    // fetch("http://aenders.dk/wp-json/wp/v2/posts?status=private&categories=50", {
    //     method: "GET",
    //     headers: {
    //         }
    // })
    // .then(res => res.json())
    // .then(json => console.log(json))
    
    
    // fetch("http://aenders.dk/wp-json/jwt-auth/v1/token", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: {
    //         
    //     }
    // })
    // .then(res => res.json())
    // .then(json => console.log(json))


    console.log("        /\\       _______   ___    __ ")
    console.log("       /  \\     |   ____| |   \\  |  |")
    console.log("      / /\\ \\    |  |____  |    \\ |  |")
    console.log("     / /__\\ \\   |   ____| |  |\\ \\|  |")
    console.log("    / /____\\ \\  |  |____  |  | \\    |")
    console.log("   /_/      \\_\\ |_______| |__|  \\___|")