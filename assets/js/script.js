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
            logo_a = document.createElement("a"), logo_div = document.createElement("div"), logo_img = document.createElement("img"),
        // NAV ( RIGHT )
            gNAV = document.createElement("nav"), links = document.createElement("ul"), soMi = document.createElement("ul");
        // Add ID's
            links.id = "globalHeader_links";
            soMi.id = "globalHeader_soMiIcons";
        // Logo
            logo_a.href = "index.html";
            logo_img.src = "";
            logo_div.appendChild(logo_img);
            logo_a.appendChild(logo_div);

        // Create Links / SoMi (LI's)
            for (let i = 0; i < 3; i++) {
                let
                li = document.createElement("li"), a = document.createElement("a");
                //Add class and more
                    a.classList.add("globalNAVli");
                    switch (i) {
                        case 0:
                            a.href = "?om-mig";
                            a.textContent = "Om Mig";
                            break;
                        case 1:
                            a.href = "?projekter";
                            a.textContent = "Projekter";
                            break;
                        case 2:
                            a.href = "?kontakt";
                            a.textContent = "Kontakt";
                            break;
                    }
                //Append
                    li.appendChild(a);
                    links.appendChild(li);
            }
            for (let i = 0; i < 3; i++) {
                let
                soMi_li = document.createElement("li"), soMi_a = document.createElement("a"), soMi_div = document.createElement("div"), soMi_img = document.createElement("img");
                //Add class and more
                    
                    switch (i) {
                        case 0:
                            soMi_a.href = "https://github.com/AndersErikNissen";
                            soMi_img.src = "/assets/images/icons/github_round_white.png";
                            soMi_img.alt = "Link og Billede til Github";
                            break;
                        case 1:
                            soMi_a.href = "https://www.instagram.com/aendersledes/";
                            soMi_img.src = "/assets/images/icons/instagram_round_white.png";
                            soMi_img.alt = "Link og Billede til Instagram";
                            break;
                        case 2:
                            soMi_a.href = "https://www.linkedin.com/in/anders-erik-nissen/";
                            soMi_img.src = "/assets/images/icons/linkedin_round_white.png";
                            soMi_img.alt = "Link og Billede til LinkedIn";
                            break;
                    }
                //Append
                    soMi_div.appendChild(soMi_img)
                    soMi_a.appendChild(soMi_div);
                    soMi_li.appendChild(soMi_a);
                    soMi.appendChild(soMi_li);
            }
            //Append all to header
                gNAV.append(links, soMi);
                document.querySelector("#globalHeader").append(logo_a, gNAV);
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
                PROJEKTcreate_template ()
                break;
            case "englerod":
                PROJEKTcreate_template ()
                break;

            default:
                FORSIDEcreate();
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
                NAVcreate ()
                GlobalNAVactive()
                HTMLcreate()

                footerPosition()
                console.log("false!!")
                break;

            case "om-mig":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)

                footerPosition()
                console.log("SITEcreate",check)
                break;

            case "projekter":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)

                footerPosition()
                console.log(check)
                break;

            case "kontakt":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)

                footerPosition()
                console.log(check)
                break;

            case "snv":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)

                footerPosition()
                console.log(check)
                break;

            case "englerod":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)

                footerPosition()
                console.log(check)
                break;
                
            default:
                titleCreate("Forside")
                NAVcreate ()
                HTMLcreate()

                footerPosition()
                console.log("DEFAULT: HTML-CREATE")
        }
        // "Forside", ommig, projekter, kontakt, snv, englerod
        
    }
    SITEcreate();

// window.addEventListener("load", ()=> {console.log(document.querySelector("main").scrollTop)})

// Fades out Hero Content with the scrollY.
document.addEventListener("scroll", ()=> {
    let 
    heroo = document.querySelector("#heroTextSection");
    //Stops when going below 0.
    if (window.scrollY < 400) {
        heroo.style.opacity = 1 - (window.scrollY / 400);
    }
})










// Create HTML for EACH page
function OMMIGcreate (check) {
    let
    // Hero Content
        intro = document.createElement("section"), h1 = document.createElement("h1"), intro_p = document.createElement("p"),
        introIMG_container = document.createElement("section"), introIMG_div = document.createElement("div"), introIMG = document.createElement("img"),
        intro_section = document.createElement("section"),
    // Main Content    
        main_outer = document.createElement("section"), main_h2 = document.createElement("h2");

    // Add Content / Append
        // Intro
            h1.textContent = "MOJN";
            intro_p.textContent = "";
            introIMG.src = "/assets/images/fluffy_desk.jpg"; // Placeholder!!!!!!!!!!

            intro.append(h1, intro_p);
            introIMG_div.appendChild(introIMG);
            introIMG_container.appendChild(introIMG_div);
            introIMG_container.id = "om-mig_intro_img";
            intro_section.append(intro, introIMG_container);
            intro_section.id = "heroTextSection";
            hero.append(intro_section);
        
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
                        outer.append(h3, p, img);
                        main_outer.appendChild(outer);
                }
            //Append and Add Id
            main_outer.id = "om-mig_main";
            main.appendChild(main_outer);

    // Add ID to Body for dynamic styling.
        document.querySelector("body").id = "om-mig";
}

function FORSIDEcreate () {
    let
    //Hero Area
    hero_section = document.createElement("section"), h1 = document.createElement("h1"), hero_h2 = document.createElement("h2"), cv = document.createElement("a"),
    // Main Area
        // Personlig
            forPer_section = document.createElement("section"), forPer_cover = document.createElement("section"), forPer_textBox = document.createElement("section"), forPer_h2 = document.createElement("h2"), forPer_p = document.createElement("p"), forPer_obj = document.createElement("object"), link_ommig = document.createElement("a"),
        // Projekter
            forPro_section = document.createElement("section"), forPro_info = document.createElement("section"), forPro_info_h2 = document.createElement("h2"), forPro_info_p = document.createElement("p"), forPro_alle = document.createElement("a"), forPro_alle_container = document.createElement("section");
    //Append + Content
        // Hero
            h1.textContent = "FRONT-END PÅ ET STÆRKT FUNDAMENT";
            hero_h2.textContent = "Mit navn er Anders Erik Nissen, og jeg studere til Multimediedesigner hos UCN i Aalborg.";
            cv.href = "";
            cv.textContent = "DOWNLOAD CV"
            cv.download;
            cv.classList.add("button");
            hero_section.id = "heroTextSection";
            hero_section.classList.add("flex-center");
            hero_section.append(h1, hero_h2, cv);

        // Personlig
            forPer_h2.textContent = "Slow is smooth, smooth is fast!";
            forPer_p.textContent = "Mauris ac pretium turpis. Aenean pharetra condimentum felis, eu iaculis massa. Mauris in vestibulum libero. Maecenas blandit hendrerit libero, id dignissim nisi malesuada et. Nulla ipsum dui, aliquam bibendum lacus id, fermentum cursus massa. Quisque diam nisl, congue sed arcu in, vestibulum tristique mi. In posuere egestas sapien id pellentesque. Donec varius risus suscipit dapibus viverra. Duis ultrices feugiat sollicitudin. Nulla efficitur ornare ante, at eleifend purus. Fusce massa risus, interdum nec interdum sit amet, faucibus non dolor. Nulla facilisi. Nulla vel luctus erat, vel fringilla turpis. Ut vitae malesuada augue. Curabitur non sollicitudin augue.";
            forPer_obj.data = "";
            link_ommig.href = "?om-mig";
            link_ommig.textContent = "LÆS MERE";

            forPer_textBox.append(forPer_h2, forPer_p, link_ommig);
            forPer_cover.append(forPer_textBox, forPer_obj);
            forPer_section.appendChild(forPer_cover);

            link_ommig.classList.add("button");
            forPer_cover.id = "forPer_cover";
            forPer_section.id = "forsidePersonlig";
            forPer_section.classList.add("flex-center");
        // Projekter
            forPro_info_h2.textContent = "SE SKOLE PROJEKTER";
            forPro_info_p.textContent = "Mauris ac pretium turpis. Aenean pharetra condimentum felis, eu iaculis massa. Mauris in vestibulum libero. Maecenas blandit hendrerit libero, id dignissim nisi malesuada et.";
            forPro_info.append(forPro_info_h2, forPro_info_p);
        
            forPro_info.id = "forPro_info";
            forPro_info.classList.add("flex-center");
            forPro_section.id = "forsideProjekter";

        // Loop to make 2 projekt containers with content.
        for (let i = 0; i < 2; i++) {
            let
            section = document.createElement("section"), pMain = document.createElement("section"), h2 = document.createElement("h2"), h4 = document.createElement("h4"), imgLogo_box = document.createElement("section"), logo = document.createElement("img"), img = document.createElement("img"), a = document.createElement("a");
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
                a.classList.add("button");
                section.classList.add("flex-center");
                pMain.classList.add("projektMain");

            //Append 
                imgLogo_box.append(logo, img);
                pMain.append(h2, h4, imgLogo_box, a);
                section.appendChild(pMain);
                forPro_section.appendChild(section);
        }
        // View all project link.
            forPro_alle.href = "?projekter";
            forPro_alle.classList.add("button");
            forPro_alle.textContent = "SE ALLE PROJEKTER";
            forPro_alle_container.id = "forsideSeAlleProjekter";
            forPro_alle_container.classList.add("flex-center");
            forPro_alle_container.appendChild(forPro_alle);
            forPro_section.appendChild(forPro_alle_container);
        // Append to Hero / Main
        hero.appendChild(hero_section);
        main.append(forPer_section, forPro_section);

    // Add ID to Body for dynamic styling.
        document.querySelector("body").id = "forside";
}

function PROJEKTcreate_template () {
    // ---------------
    // Create Elements
    // ---------------
    let
    // Hero
        hero_section = document.createElement("section"), hero_h2 = document.createElement("h2"), hero_kode_block = document.createElement("section"), hero_arrow_block = document.createElement("section"), hero_arrow_div = document.createElement("div"), hero_arrow_img = document.createElement("img"),
    // Projekt - Intro
        intro_section = document.createElement("section"), intro_block = document.createElement("section"), intro_h2 = document.createElement("h2"), intro_p = document.createElement("p"),
    // Projekt - Værdier
        step_section = document.createElement("section"), step_h1 = document.createElement("h2"), 
    // Projekt - Galleri
        galleri_section = document.createElement("section"), galleri_h2 = document.createElement("h2"), 
    // Næste Projekt
        next_section = document.createElement("section"), next_a = document.createElement("a");
    
    // First round of Append (Need to add some elements before, the loops create elements in the same parents).
        hero_section.appendChild(hero_h2);
        step_section.appendChild(step_h1);
        galleri_section.appendChild(galleri_h2);

    // Hero - Sprog Box's
        for (let i = 0; i < 3; i++) {
            let h5 = document.createElement("h5");
            h5.classList.add("kodeSprogBox");
            switch (i) {
                case 0:
                    h5.textContent = "HTML"
                    break;
                case 1:
                    h5.textContent = "CSS"
                    break;
                case 2:
                    h5.textContent = "JS"
                    break;
            }
            // Append
            hero_kode_block.appendChild(h5);
        }
    // Forløb - Steps
        for (let i = 0; i < 3; i++) {
            let section = document.createElement("section"), h3 = document.createElement("h3"), p = document.createElement("p");
            section.classList.add("projektStepBox");
            switch (i) {
                case 0:
                    h3.textContent = "Udfordringen"
                    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et justo est. Phasellus nec nibh metus. Proin nec semper purus."
                    break;
                case 1:
                    h3.textContent = "Scopet og Designet"
                    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et justo est. Phasellus nec nibh metus. Proin nec semper purus."
                    break;
                case 2:
                    h3.textContent = "Løsningen"
                    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et justo est. Phasellus nec nibh metus. Proin nec semper purus."
                    break;
            }
            // Append
            section.append(h3, p);
            step_section.appendChild(section);
        }
    // For Each IMG
        let
        arr_galleri = [];

        arr_galleri.forEach(each => {
            let
            section = document.createElement("section"), div = document.createElement("div"), img = document.createElement("img");

            img.src = each.img;
            div.appendChild(img);
            section.appendChild(div);
            galleri_section.appendChild(section);
        });
    //2nd round of Append and Content
        // Hero
            hero_h2.textContent = "MÅNED????"
            hero_arrow_img.src = "/assets/images/icons/arrow_down_white.png";
            hero_arrow_img.alt = "Nedad vendende pil";
            hero_arrow_div.appendChild(hero_arrow_img); 
            hero_arrow_block.appendChild(hero_arrow_div);
            hero_section.id = "heroTextSection";
            hero_section.classList.add("flex-center"); 
            hero_section.append(hero_kode_block, hero_arrow_block);

            hero.appendChild(hero_section)
        // Intro
            intro_h2.textContent = "PLACEHOLDER: HVAD ER????";
            intro_p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et justo est. Phasellus nec nibh metus. Proin nec semper purus.";
            
            intro_block.append(intro_h2, intro_p); intro_section.appendChild(intro_block);
            main.appendChild(intro_section);
        // Step
            step_h1.textContent = "Forløb";
            main.appendChild(step_section);
        // Galleri
            galleri_h2.textContent = "Galleri";
            main.appendChild(galleri_section);
        // Next
            next_a.href = "";
            next_a.textContent = "NÆSTE PROJEKT";
            next_section.appendChild(next_a);
            main.appendChild(next_section);

    // Add ID to Body for dynamic styling.
        document.querySelector("body").id = "";
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