//JS by Anders Erik Nissen
//UCN MMDA0920


                            // IKKE NØDVENDIG, MEN NICE!
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

// ====================
// === Create Sites ===
// ====================
    const
    thisURL = document.location.href,
    hero = document.querySelector("#hero"),
    main = document.querySelector("main"),
    nav = document.querySelector("#globalHeader");

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

    function NAVcreate () {
        let
        // Logo ( LEFT )
            logo_a = document.createElement("a"), logo_div = document.querySelector("div"), logo_img = document.querySelector("img"),
        // NAV ( RIGHT )
            gNAV = document.querySelector("nav"), links = document.querySelector("ul"), soMi = document.querySelector("ul");
        // Add ID's
            links.id = "globalHeader_links";
            soMi.id = "globalHeader_soMiIcons";
        // Create Links / SoMi (LI's)
            for (let i = 0; i < 3; i++) {
                let
                li = document.querySelector("li"), a = document.querySelector("a");
                //Add class and more
                    a.classList.add("globalNAVli");
                    switch (i) {
                        case 0:
                            a.href = "?om-mig";
                            a.textContent = "Om Mig";
                            break;
                        case 1:
                            a.href = "?projekter";
                            a.textContent = "projekter";
                            break;
                        case 2:
                            a.href = "?kontakt";
                            a.textContent = "kontakt";
                            break;
                    }
                //Append
                    li.appendChild(a);
                    links.appendChild(li);
            }
            for (let i = 0; i < 3; i++) {
                let
                li = document.querySelector("li"), a = document.querySelector("a"), div = document.querySelector("div"), img = document.querySelector("img");
                //Add class and more
                    
                    switch (i) {
                        case 0:
                            a.href = "https://github.com/AndersErikNissen";
                            img.src = "/assets/images/icons/github_round_white.png";
                            img.alt = "Link og Billede til Github";
                            break;
                        case 1:
                            a.href = "https://www.instagram.com/aendersledes/";
                            img.src = "/assets/images/icons/instagram_round_white.png";
                            img.alt = "Link og Billede til Instagram";
                            break;
                        case 2:
                            a.href = "https://www.linkedin.com/in/anders-erik-nissen/";
                            img.src = "/assets/images/icons/linkedin_round_white.png";
                            img.alt = "Link og Billede til LinkedIn";
                            break;
                    }
                //Append
                    div.appendChild(img)
                    a.appendChild(div);
                    li.appendChild(a);
                    soMi.appendChild(li);
            }
            //Append all to header
                gNAV.appendChild(links, soMi);
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
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)
                console.log("SITEcreate",check)
                break;

            case "projekter":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)
                console.log(check)
                break;

            case "kontakt":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)
                console.log(check)
                break;

            case "snv":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)
                console.log(check)
                break;

            case "englerod":
                titleCreate(check)
                NAVcreate ()
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

function FORSIDEcreate () {
    let
    //Hero Area
    hero_section = document.querySelector("section"), h1 = document.querySelector("h1"), hero_h2 = document.querySelector("h2"), cv = document.querySelector("a"),
    // Main Area
        // Personlig
            forPer_section = document.querySelector("section"), forPer_cover = document.querySelector("section"), forPer_textBox = document.querySelector("section"), forPer_h2 = document.querySelector("h2"), forPer_p = document.querySelector("p"), forPer_obj = document.querySelector("object"), link_ommig = document.querySelector("a"),
        // Projekter
            forPro_section = document.querySelector("section"), forPro_info = document.querySelector("section"), forPro_info_h2 = document.querySelector("h2"), forPro_info_p = document.querySelector("p"), forPro_alle = document.querySelector("a");
    
        // Loop to make 2 projekt containers with content.
            for (let i = 0; i < 2; i++) {
                let
                section = document.querySelector("section"), pMain = document.querySelector("section"), h2 = document.querySelector("h2"), h4 = document.querySelector("h4"), imgLogo_box = document.querySelector("section"), logo = document.querySelector("img"), img = document.querySelector("img"), a = document.querySelector("a");
                // Changes content after point in loop(i).
                switch (i) {
                    case 0:
                        section.id = "snv";
                        h2.textContent = "SNV.dk";
                        h4.textContent = "MAJ - JUNI 2021";
                        
                        logo.src = "";
                        img.src = "";
                        a.href = "?snv";
                        break;
                    case 1:
                        section.id = "englerod";
                        h2.textContent = "Englerod.dk";
                        h4.textContent = "APRIL 2021";
                        
                        logo.src = "";
                        img.src = "";
                        a.href = "?englerod";
                        break;
                    }
                //General Items Content
                    a.textContent = "SE PROJEKTET";
                    section.classList.add("flex-center");
                    pMain.classList.add("projektMain");

                //Append 
                    imgLogo_box.appendChild(logo, img);
                    pMain.appendChild(h2, h4, imgLogo_box, a);
                    section.appendChild(pMain);
            }
    // Personlig Append + Content
        // Personlig
            forPer_h2.textContent = "Slow is smooth, smooth is fast!";
            forPer_p.textContent = "Mauris ac pretium turpis. Aenean pharetra condimentum felis, eu iaculis massa. Mauris in vestibulum libero. Maecenas blandit hendrerit libero, id dignissim nisi malesuada et. Nulla ipsum dui, aliquam bibendum lacus id, fermentum cursus massa. Quisque diam nisl, congue sed arcu in, vestibulum tristique mi. In posuere egestas sapien id pellentesque. Donec varius risus suscipit dapibus viverra. Duis ultrices feugiat sollicitudin. Nulla efficitur ornare ante, at eleifend purus. Fusce massa risus, interdum nec interdum sit amet, faucibus non dolor. Nulla facilisi. Nulla vel luctus erat, vel fringilla turpis. Ut vitae malesuada augue. Curabitur non sollicitudin augue.";
            forPer_obj.data = "";
            link_ommig.href = "?om-mig";
            link_ommig.textContent = "LÆS MERE";

            forPer_textBox.appendChild(forPer_h2, forPer_p, link_ommig);
            forPer_cover.appendChild(forPer_textBox, forPer_obj,);
            forPer_section.appendChild(forPer_cover);
        // Projekter

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