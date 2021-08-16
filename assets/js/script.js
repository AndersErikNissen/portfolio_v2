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

    function globalNAV () {
        let 
        nav = document.querySelector("#globalHeader"),
        main = document.querySelector("main"),
        top = main.getBoundingClientRect().top;
    
        if (top < 0) {
            nav.classList.remove("nav_fadeOut");
            nav.classList.add("nav_fadeIn");
        } 
        if (top > 0) {
            nav.classList.remove("nav_fadeIn");
            nav.classList.add("nav_fadeOut");
        }
    }
    document.addEventListener("scroll", globalNAV);

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
    function HTMLcreate (check) {
        console.log("HTML create - RUNNING")
        switch(check) {
            case "om-mig":
                OMMIGcreate(check);
                break;

            case "projekter":

                break;
            case "kontakt":

                break;

            case "snv":

                break;
            case "englerod":

                break;

            default:
            console.log("DEFAULT HTMLcreate")

        }

    }
    function SITEcreate () {
        let 
        checkSplit = thisURL.split("?"),
        check = checkSplit[1];
    
        switch (check) {
            // Note to self: Don't use ; in a Case, that is why there is a break. :)
            case undefined:
                titleCreate("Forside")
                console.log("false!!")
                break;

            case "om-mig":
                titleCreate(check)
                GlobalNAVactive(check)
                HTMLcreate(check)
                console.log("SITEcreate",check)
                break;

            case "projekter":
                titleCreate(check)
                GlobalNAVactive(check)
                HTMLcreate(check)
                console.log(check)
                break;

            case "kontakt":
                titleCreate(check)
                GlobalNAVactive(check)
                HTMLcreate(check)
                console.log(check)
                break;

            case "snv":
                titleCreate(check)
                GlobalNAVactive(check)
                HTMLcreate(check)
                console.log(check)
                break;

            case "englerod":
                titleCreate(check)
                GlobalNAVactive(check)
                HTMLcreate(check)
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










// Create HTML for EACH page
const
//Constants
    hero = document.querySelector("#hero"),
    main = document.querySelector("main");

function OMMIGcreate (check) {
    let
    // Hero Content
        intro = document.createElement("section"), h1 = document.createElement("h1"), intro_p = document.createElement("p"),
        introIMG_container = document.createElement("section"), introIMG_div = document.createElement("div"), introIMG = document.createElement("img"),
    // Main Content    
        main_outer = document.createElement("section"), main_h2 = document.createElement("h2");

    // Add Content / Append
        // Intro
            h1.textContent = "MOJN";
            intro_p.textContent = "";
            introIMG.src = "/assets/images/fluffy_desk.jpg"; // Placeholder!!!!!!!!!!

            intro.appendChild(h1, intro_p);
            introIMG_div.appendChild(introIMG);
            introIMG_container.appendChild(introIMG_div);
            hero.appendChild(intro, introIMG_container);
        
        // Main
            main_outer.appendChild(main_h2);
            // Creates 3 container with "Values" content
                for (let i = 0; i < 3; i++) {
                    let
                    outer = document.createElement("section"), h3 = document.createElement("h3"), p = document.createElement("p"), img = document.createElement("img");
                    //Switch to change content depending where in the loop(i) we are.
                        switch(i) {
                            case 0:
                                h3.textContent = "Udfordringen";
                                p.textContent = "";
                                img.src = "";
                                img.alt = "Billede til " + h3.textContent;
                                break;
                            case 1:
                                h3.textContent = "Scopet og Designet";
                                p.textContent = "";
                                img.src = "";
                                img.alt = "Billede til " + h3.textContent;
                                break;
                            case 2:
                                h3.textContent = "Løsningen";
                                p.textContent = "";
                                img.src = "";
                                img.alt = "Billede til " + h3.textContent;
                                break;
                        }
                    //Add Class
                        outer.classList.add("vaerdiBox");
                    //Append the content
                        outer.appendChild(h3, p, img);
                        main_outer.appendChild(outer);
                }
            main.appendChild(main_outer);
}


























// Fetch Token
// const
//     startURL = "http://aenders.dk/wp-json/jwt-auth/v1/token",

//     login = {
//         "username":"api.user",
//         "password":"API-key-1234#!"
//     };
    
//     fetch("http://aenders.dk/wp-json/jwt-auth/v1/token", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(login)
//     })
//     .then(response => response.json())
//     .then(json => { 
//         window.localStorage.setItem("token", JSON.stringify(json));
//         console.log(window.localStorage.getItem("token"))
//     })




























    console.log("        /\\       _______   ___    __ ")
    console.log("       /  \\     |   ____| |   \\  |  |")
    console.log("      / /\\ \\    |  |____  |    \\ |  |")
    console.log("     / /__\\ \\   |   ____| |  |\\ \\|  |")
    console.log("    / /____\\ \\  |  |____  |  | \\    |")
    console.log("   /_/      \\_\\ |_______| |__|  \\___|")