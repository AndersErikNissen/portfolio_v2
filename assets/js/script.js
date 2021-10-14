//JS by Anders Erik Nissen
//UCN MMDA0920


// ====================
// === Create Sites ===
// ====================
    const
    thisURL = document.location.href,
    hero = document.querySelector("#hero"),
    main = document.querySelector("main"),
    nav = document.querySelector("#globalHeader"),
    // Match Media
    mm_Tablet = window.matchMedia('(max-width: 1024px)'),
    mm_Mobile = window.matchMedia('(max-width: 478px)')
    ;

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

    function burgerIcon() {
        let
        // Create 3 div in a container
        container = document.createElement("section"),
        div1 = document.createElement("div"),
        div2 = document.createElement("div"),
        div3 = document.createElement("div");

        // Add Ids and Class'
        container.id = "burgerContainer";
        container.classList.add("neutral");
        
        div1.id = "burgerDiv1"; div1.classList.add("c_burgerDiv");
        div2.id = "burgerDiv2"; div2.classList.add("c_burgerDiv");
        div3.id = "burgerDiv3"; div3.classList.add("c_burgerDiv");

        container.append(div1,div2,div3);
        nav.appendChild(container);

        container.addEventListener("click", (e) => {
            if (container.classList.contains("neutral")) {
                // Remove
                container.classList.remove("neutral");
                div1.classList.remove("ani_burger1_neutral");
                div2.classList.remove("ani_burger2_neutral");
                div3.classList.remove("ani_burger3_neutral");
                
                // Add
                container.classList.add("animated");
                div1.classList.add("ani_burger1_animated");
                div2.classList.add("ani_burger2_animated");
                div3.classList.add("ani_burger3_animated");
            } else {
                // Remove
                container.classList.remove("animated");
                div1.classList.remove("ani_burger1_animated");
                div2.classList.remove("ani_burger2_animated");
                div3.classList.remove("ani_burger3_animated");
                // Add
                container.classList.add("neutral");
                div1.classList.add("ani_burger1_neutral");
                div2.classList.add("ani_burger2_neutral");
                div3.classList.add("ani_burger3_neutral");
            }
        })
    }

    function NAVcreate () {
        let
        // Logo ( LEFT )
            logo_a = document.createElement("a"), logo_div = document.createElement("div"), logo_img = document.createElement("img"),
        // NAV ( RIGHT )
            desktopNAV = document.createElement("nav"), links = document.createElement("ul"), soMi = document.createElement("ul");
        // Add ID's
            links.id = "globalHeader_links";
            soMi.id = "globalHeader_soMiIcons";
        // Logo
            logo_a.href = "index.html";
            logo_img.src = "assets/images/logo/aen_logo_simple_1.png";
            logo_div.id = "logo_div";
            logo_div.classList.add("flex-center")
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
                            // a.href = "?om-mig";
                            a.href = "om-mig.html"
                            a.textContent = "Om Mig";
                            break;
                        case 1:
                            a.href = "projekter.html";
                            a.textContent = "Projekter";
                            break;
                        case 2:
                            a.href = "kontakt.html";
                            a.textContent = "Kontakt";
                            break;
                    }
                //Append
                    li.appendChild(a);
                    links.appendChild(li);
            }
            for (let i = 0; i < 3; i++) {
                let
                soMi_li = document.createElement("li"), soMi_a = document.createElement("a"), soMi_div = document.createElement("div"), soMi_obj = document.createElement("object");
                //Add class and more
                    
                    switch (i) {
                        case 0:
                            soMi_a.href = "https://github.com/AndersErikNissen";
                            if (mm_Tablet.matches) {
                                soMi_obj.data = "assets/images/icons/github_white_round.svg";
                            } else {
                                soMi_obj.data = "assets/images/icons/github_round_fill.svg";
                            }
                            break;
                        case 1:
                            soMi_a.href = "https://www.instagram.com/aendersledes/";
                            if (mm_Tablet.matches) {
                                soMi_obj.data = "assets/images/icons/instagram_white_round.svg";
                            } else {
                                soMi_obj.data = "assets/images/icons/instagram_round_fill.svg";
                            }
                            break;
                        case 2:
                            soMi_a.href = "https://www.linkedin.com/in/anders-erik-nissen/";
                            if (mm_Tablet.matches) {
                                soMi_obj.data = "assets/images/icons/linkedin_white_round.svg";
                            } else {
                                soMi_obj.data = "assets/images/icons/linkedin_round_fill.svg";
                            }
                            break;
                    }
                    soMi_obj.type = "image/svg+xml";
                //Append
                    soMi_div.appendChild(soMi_obj)
                    soMi_a.appendChild(soMi_div);
                    soMi_li.appendChild(soMi_a);
                    soMi.appendChild(soMi_li);
            }
            //Append all to header
            if (mm_Tablet.matches) {
                let
                // Build Curtain
                    curtain_outer = document.createElement("section"), curtain_main = document.createElement("section");
                
                curtain_main.append(links, soMi);
                curtain_main.id = "burgerCurtain_main";

                curtain_outer.appendChild(curtain_main);
                curtain_outer.id = "burgerCurtain_outer";
                curtain_outer.classList.add("hide_curtain");


                nav.appendChild(logo_a);
                burgerIcon();

                document.querySelector("body").appendChild(curtain_outer);

                // Show / Hide the curtain
                let
                // To check if fadeIn/Out should be used after closing the curtain.
                main = document.querySelector("main"),
                top;

                document.querySelector("#burgerContainer").addEventListener("click", (e)=> {
                    if (curtain_outer.classList.contains("hide_curtain")) {
                        curtain_outer.classList.remove("hide_curtain");
                        curtain_outer.classList.add("show_curtain");

                        setTimeout(()=> {
                            curtain_main.style.display = "flex";
                            curtain_main.classList.remove("hide_curtain_main");
                            curtain_main.classList.add("show_curtain_main");
                        },100)

                        nav.classList.remove("nav_fadeOut");
                        nav.classList.add("nav_fadeIn");
                    } else {
                        curtain_outer.classList.remove("show_curtain");
                        curtain_outer.classList.add("hide_curtain");

                        top = main.getBoundingClientRect().top;

                        curtain_main.classList.remove("show_curtain_main");
                        curtain_main.classList.add("hide_curtain_main");
                        setTimeout(()=> {
                            curtain_main.style.display = "none";
                        }, 1000)
                        
                        nav.classList.remove("nav_fadeIn");
                        nav.classList.remove("nav_fadeOut");
                        
                        if (top < 0) {
                            nav.classList.add("nav_fadeIn");
                        } else {
                            nav.classList.add("nav_fadeOut");
                        }
                    }
                })
            } else {
                desktopNAV.append(links, soMi);
                document.querySelector("#globalHeader").append(logo_a, desktopNAV);
            }
    }

    function globalNAV () {
        let 
        nav = document.querySelector("#globalHeader"),
        main = document.querySelector("main"),
        top = main.getBoundingClientRect().top;
        
        
        if (top < 0) {
            nav.classList.remove("nav_fadeOut");
            nav.classList.add("nav_fadeIn");
        } else {
            nav.classList.remove("nav_fadeIn");
            nav.classList.add("nav_fadeOut");
        }
        // if (top > 0) {
        //     //Prevents JS from adding nav_fadeOut on first scroll down.
        //     if (nav.classList.contains("nav_fadeIn")) {
        //         nav.classList.add("nav_fadeOut");
        //     }
        //     nav.classList.remove("nav_fadeIn");
        // }
    }
    document.addEventListener("scroll", globalNAV);

    function GlobalNAVactive (active) {
        let
        list = document.querySelectorAll(".globalNAVli"),
        act = active;
        //If the the site either SNV or Engelrod set active on "projekter"
        if (act === "snv") {
            act = "projekter";
        } else if (act === "englerod") {
            act = "projekter";
        } else if (act === "pinktree") {
            act = "projekter";
        }
 
        //Check each item in the Array.
        list.forEach( each => {
            let 
            //Check each href + slice "?"
            att = each.getAttribute("href").split(".html"),
            attCut = att[0];
            // First remove if there is any .active_nav, then add to the matching nav-li-element.
            each.classList.remove("active_nav");
            if (attCut === act) {
                each.classList.add("active_nav");
            }
        })
    }

    // --------------------------------------------------------------------
    // ------------------------ CREATE MINI THINGS ------------------------
    // --------------------------------------------------------------------
    function SKYcreate (version) {
        let obj = document.createElement("object"), section = document.createElement("section");

        obj.data = "assets/images/svg/clouds_cover_v1.svg";
        if (version == "white") obj.data = "assets/images/svg/skyline_white_top.svg";
        obj.type = "image/svg+xml";
        
        section.appendChild(obj);
        section.id = "main_skyline";
        main.appendChild(section);
    }
    function SKYcreate_footer (version) {
        let obj = document.createElement("object"), section = document.createElement("section");

        obj.data = "assets/images/svg/bottom_clouds.svg";
        // if (version == "white") obj.data = "assets/images/svg/bottom_clouds.svg";
        obj.type = "image/svg+xml";
        
        section.appendChild(obj);
        section.id = "main_skyline_footer";
        main.appendChild(section);
    }

    function SCROLLDOWNcreate (typeOf) {
        let 
        // Create elements
        outer = document.createElement("section"),
        div = document.createElement("div"),
        obj = document.createElement("object");

        // Content
        let objData;
        if (typeOf == "white") {
            objData = "assets/images/icons/arrow_down_v1_white.svg";
        } else {
            objData = "assets/images/icons/arrow_down_v1.svg";
        }
        obj.data = objData;
        outer.id = "scroll_down";

        // Append
        div.appendChild(obj); outer.appendChild(div); hero.appendChild(outer);
    };




    // --------------------------------------------------------------------
    // ----------------------- CREATE MAIN CONTENT! -----------------------
    // --------------------------------------------------------------------
    function HTMLcreate (check) {
        switch(check) {
            case "om-mig":
                SKYcreate()
                OMMIGcreate(check)
                SKYcreate_footer()
                SCROLLDOWNcreate()
                break;
            case "projekter":
                SKYcreate()
                PROJEKTERcreate ()
                SKYcreate_footer()
                SCROLLDOWNcreate()
                break;

            case "kontakt":
                KONTAKTcreate ()
                // SCROLLDOWNcreate();
                break;

            case "snv":
                SKYcreate()
                PROJEKTcreate_template (check)
                SKYcreate_footer()
                SCROLLDOWNcreate("white")
                break;
            case "englerod":
                SKYcreate()
                PROJEKTcreate_template (check)
                SKYcreate_footer()
                SCROLLDOWNcreate("white")
                break;

            case "pinktree":
                SKYcreate()
                PROJEKTcreate_template (check)
                SKYcreate_footer()
                SCROLLDOWNcreate("white")
                break;

            default:
                SKYcreate()
                FORSIDEcreate()
                SKYcreate_footer()
                SCROLLDOWNcreate()
                console.log("()HTMLcreate using Default-Switch")
        }
    }
    function SITEcreate () {
        let 
        //Check in URL
        checkSplit = thisURL.split("/"),
        checkArray = checkSplit.length - 1, // Should be where the URL name matches. The last in the array.
        splitLast = checkSplit[checkArray].split(".html"),

        check = splitLast[0];
    
        switch (check) {
            // Note to self: Don't use ; in a Case, that is why there is a break. :)

            case "om-mig":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)
                FOOTERcreate ()
                console.log(check)
                break;

            case "projekter":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)
                FOOTERcreate ()
                console.log(check)
                break;

            case "kontakt":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)
                // FOOTERcreate ()
                console.log(check)
                break;

            case "snv":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)
                FOOTERcreate ()
                console.log(check)
                break;

            case "englerod":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)
                FOOTERcreate ()
                console.log(check)
                break;

            case "pinktree":
                titleCreate(check)
                NAVcreate ()
                GlobalNAVactive(check)
                HTMLcreate(check)
                FOOTERcreate ()
                console.log(check)
                break;
                
            default:
                titleCreate("Forside")
                NAVcreate ()
                HTMLcreate()
                FOOTERcreate()
                console.log("()SITEcreate using Default-Switch")
        }
    }
    SITEcreate();

// window.addEventListener("load", ()=> {console.log(document.querySelector("main").scrollTop)})

// Fades out Hero Content with the scrollY.
document.addEventListener("scroll", ()=> {
    let 
    heroo = document.querySelector("#heroTextSection"),
    half = (window.innerHeight / 2);
    //Stops when going below 0.
    if (document.querySelector("#heroTextSection")) {
        if (window.scrollY < half) {
            heroo.style.opacity = 1 - (window.scrollY / half);
            if (document.querySelector("#forsideHeroObjBox")) {
                document.querySelector("#forsideHeroObjBox").style.opacity = 1 - (window.scrollY / half);
            }
            if (document.querySelector("#om-mig_intro_img")) {
                document.querySelector("#om-mig_intro_img").style.opacity = 1 - (window.scrollY / half);
            }
        }
    }
})


// Create HTML for EACH page
function OMMIGcreate (check) {
    let
    // Hero Content
        h1 = document.createElement("h1"), intro_p = document.createElement("p"),
        introIMG_container = document.createElement("section"), introIMG_div = document.createElement("div"), introIMG = document.createElement("img"),
        intro_section = document.createElement("section"), intro_inner = document.createElement("section"), hero_frame = document.createElement("section"),
    // Main Content    
        main_outer = document.createElement("section"), main_h2 = document.createElement("h2");

    // Add Content / Append
        // Intro
            h1.textContent = "MOJN.";
            intro_p.textContent = "Jeg hedder Anders Erik Nissen, jeg er 27 år gammel og er opvokset i Sønderjylland. I 2020 begyndte jeg at studere hos UCN – Aalborg, som Multimediedesigner. I foråret 2022 skal jeg i praktik i en virksomhed, hvor jeg håber på, at jeg kan komme til at lære mere inden for faget og lære at bruge min viden, fra studietiden i praksis.";
            introIMG.src = "assets/images/new_profil.jpg"; 

            introIMG.id = "ommig_profile_picture";
            introIMG_div.appendChild(introIMG);
            introIMG_container.appendChild(introIMG_div);
            introIMG_container.id = "om-mig_intro_img";
            

            intro_inner.append(h1, intro_p);
            intro_section.appendChild(intro_inner);
            intro_section.id = "heroTextSection";
            hero_frame.id = "hero_frame_ommig";

            hero_frame.append(intro_section, introIMG_container);
            hero.appendChild(hero_frame);

            // Remove Flex-center
                hero.classList.remove("flex-center");
        
        // Main
            // main_outer.appendChild(main_h2);
            main_h2.textContent = "Kærneværdier";
            // Creates 3 container with "Values" content
                for (let i = 0; i < 3; i++) {
                    let
                    outer = document.createElement("section"), inner = document.createElement("section"), h2 = document.createElement("h2"), p = document.createElement("p"), img = document.createElement("img");
                    //Switch to change content depending where in the loop(i) we are.
                        switch(i) {
                            case 0:
                                h2.textContent = "Inden studiet.";
                                p.textContent = "Inden jeg søgte ind på studiet, gik jeg længe og var i tvivl om hvad jeg ville studere, men Multimediedesigner var en af de uddannelser, som jeg ofte havde spekuleret på. Efter studiestart gik der ikke længe før, at jeg fandt ud af at det var den rette uddannelse for mig. Jeg gik først ind med en tro om at, det var design delen som ville interessere mig mest, men det er endt med at blive front-end delen som jeg er mest nysgerrig på og noget som nu bringer mig en stor glæde at arbejde med.";
                                break;
                            case 1:
                                h2.textContent = "Et fundament, at bygge på.";
                                p.innerHTML = "Jeg finder stor glæde i at lære tingene fra bunden af, så når jeg får ny viden har jeg et stærkt fundament at bygge det ovenpå samt en dybere forståelse af de processer som ligger bag. Derfor har jeg ikke stiftet meget bekendtskab med andet end <b>HTML</b>, <b>CSS</b> og <b>JavaScript</b> endnu. På 3. Semester har vi på et valgfag haft om <b>Node / Express</b> som har givet indblik i hvad der sker bagved Front-enden, samt givet mig lidt erfaring med at bygge vores egen API sammen med <b>MSSQL</b>. Vi kommer også til at arbejde med frameworket Vue.js, som jeg ser meget frem til lære om og komme til at arbejde med.";
                                break;
                            case 2:
                                h2.textContent = "I fritiden.";
                                p.textContent = "Når jeg ikke er i skole eller laver lektier, laver jeg nogle gange mine egne små kode projekter og animationer. Meget af min fritid bruger jeg sammen med mine venner og familie, men jeg nyder også at cykle lange ture, både i Aalborg by og udenfor byen, så jeg kan komme ud og nyde naturen. Om aftenen bruger jeg gerne tid i køkkenet og bagefter spiller jeg ofte PC-spil med mine venner online.";
                                break;
                        }
                    //Add Class
                        inner.classList.add("vaerdiBox", "flex-center");
                    //Append the content
                        inner.append(h2, p); // Left out, img.
                        outer.appendChild(inner);
                        outer.classList.add("outer_vaerdiBox");


                        main_outer.appendChild(outer);
                }
            //Append and Add Id
            main_outer.id = "om-mig_main";
            main_outer.classList.add("flex-center");
            main.appendChild(main_outer);

    // Add ID to Body for dynamic styling.
        document.querySelector("body").id = "om-mig";
}

function FORSIDEcreate () {
    let
    //Hero Area
        outer_hero = document.createElement("section"), hero_section = document.createElement("section"), h1 = document.createElement("h1"), hero_h2 = document.createElement("h2"), cv = document.createElement("a"),
        obj_box = document.createElement("section"), obj_div = document.createElement("div"), obj = document.createElement("object");
    // Main Area
        // Personlig
            forPer_section = document.createElement("section"), forPer_cover = document.createElement("section"), forPer_textBox = document.createElement("section"), 
            forPer_h2 = document.createElement("h2"), forPer_p = document.createElement("p"), forPer_obj = document.createElement("object"), link_ommig = document.createElement("a"),
        // Projekter
            forPro_section = document.createElement("section"), forPro_info = document.createElement("section"), forPro_info_h2 = document.createElement("h2"), 
            forPro_info_p = document.createElement("p"), forPro_alle = document.createElement("a"), forPro_alle_container = document.createElement("section");
    //Append + Content
        // Hero
            h1.textContent = "Nysgerig Webudvikling";
            h1.textContent = "HOKUS POKUS, FRONT-END I FOKUS";
            // h1.textContent = "Hokus Pokus, Front-end i fokus";
            // h1.textContent = "Strukturet, Kreativitet";

            // hero_h2.textContent = "Mit navn er Anders Erik Nissen, og jeg studerer til Multimediedesigner hos UCN i Aalborg.";
            hero_h2.textContent = "En webportfolio af Anders Erik Nissen.";
            cv.href = "assets/download/aen_cv_v1.pdf";
            cv.textContent = "DOWNLOAD CV"
            cv.download;
            cv.classList.add("button");
            hero_section.id = "heroTextSection";
            hero_section.classList.add("flex-center");
            hero_section.append(h1, hero_h2, cv);
            outer_hero.appendChild(hero_section);
            outer_hero.id = "outer_hero";
            // Object
                obj_div.appendChild(obj);
                obj_box.appendChild(obj_div);
                obj_div.id = "forsideHeroObjDiv";
                obj.data = "assets/images/svg/code_city_v3.svg";
                obj.type = "image/svg+xml";
                obj_box.id = "forsideHeroObjBox";
                
                outer_hero.appendChild(obj_box)

        // Personlig
            forPer_h2.innerHTML = '<i>"Slow is smooth, smooth is fast."</i>';
            forPer_p.innerHTML = "Mit navn er <b>Anders Erik Nissen</b>, og jeg læser til Multimediedesigner hos UCN – Aalborg. Jeg søger en praktikplads til foråret 2022, hovedsageligt med fokus på front-end.";
            
            forPer_obj.data = "assets/images/svg/flyingDesk_v3_1.svg";
            forPer_obj.type = "image/svg+xml";
            forPer_obj.id = "obj_desk";
            
            link_ommig.href = "om-mig.html";
            link_ommig.textContent = "LÆS MERE";

            forPer_textBox.append(forPer_h2, forPer_p, link_ommig);
            forPer_cover.append(forPer_textBox, forPer_obj);
            forPer_section.appendChild(forPer_cover);

            link_ommig.classList.add("button");
            forPer_cover.id = "forPer_cover";
            forPer_section.id = "forsidePersonlig";
            // forPer_section.classList.add("flex-center");
        // Projekter
            forPro_info_h2.textContent = "TIDLIGERE PROJEKTER";
            forPro_info_p.textContent = "Mauris ac pretium turpis. Aenean pharetra condimentum felis, eu iaculis massa. Mauris in vestibulum libero. Maecenas blandit hendrerit libero, id dignissim nisi malesuada et.";
            forPro_info.append(forPro_info_h2);
        
            forPro_info.id = "forPro_info";
            forPro_info.classList.add("flex-center");
            forPro_section.id = "forsideProjekter";

            forPro_section.appendChild(forPro_info);

        // Loop to make 2 projekt containers with content.
        for (let i = 0; i < 2; i++) {
            let
            section = document.createElement("section"), pMain = document.createElement("section"), h2 = document.createElement("h2"), h4 = document.createElement("h4"), 
            imgLogo_box = document.createElement("section"), logo = document.createElement("object"), img = document.createElement("img"), a = document.createElement("a");
            // Changes content after point in loop(i).
            switch (i) {
                case 0:
                    section.id = "snv";
                    h2.textContent = "SNV.dk";
                    h4.textContent = "MAJ - JUNI 2021";
                    
                    logo.data = "assets/images/svg/snv_logo_white.svg";
                    logo.type = "image/svg+xml";
                    img.src = "assets/images/images_projekter/snvdk_small.png";
                    a.href = "snv.html";
                    imgLogo_box.id = "snv_imgBox";
                    break;
                case 1:
                    section.id = "englerod";
                    h2.textContent = "Englerod.dk";
                    h4.textContent = "APRIL 2021";
                    
                    logo.data = "assets/images/svg/englerod_logo_white.svg";
                    logo.type = "image/svg+xml";
                    img.src = "assets/images/images_projekter/englerod_small.png";
                    a.href = "englerod.html";
                    imgLogo_box.id = "englerod_imgBox";
                    break;
            }
            //General Items Content
                section.classList.add("flex-center");
                pMain.classList.add("projektMain");

            //Append 
                imgLogo_box.append(logo, img);
                a.appendChild(imgLogo_box);
                pMain.appendChild(a);
                section.appendChild(pMain);
                forPro_section.appendChild(section);
        }
        // View all project link.
            forPro_alle.href = "projekter.html";
            forPro_alle.classList.add("button");
            forPro_alle.textContent = "SE ALLE PROJEKTER";
            forPro_alle_container.id = "forsideSeAlleProjekter";
            forPro_alle_container.classList.add("flex-center");
            forPro_alle_container.appendChild(forPro_alle);
            forPro_section.appendChild(forPro_alle_container);
        // Append to Hero / Main
        hero.appendChild(outer_hero);
        main.append(forPer_section, forPro_section);

    // Add ID to Body for dynamic styling.
        document.querySelector("body").id = "forside";
}

function PROJEKTcreate_template (check) {
    // ---------------
    // Create Elements
    // ---------------
    let
    // Hero
        hero_section = document.createElement("section"), hero_color_cover = document.createElement("div"), hero_h2 = document.createElement("h2"), hero_kode_block = document.createElement("section"),
    // Projekt - Intro
        intro_section = document.createElement("section"), intro_block = document.createElement("section"), intro_h2 = document.createElement("h2"), intro_p = document.createElement("p"),
        // Links
        a_github = document.createElement("a"), a_live = document.createElement("a"), a_container = document.createElement("section"),
    // Projekt - Værdier
        step_section = document.createElement("section"), step_h1 = document.createElement("h2"), 
    // Projekt - Galleri
        galleri_section = document.createElement("section"), galleri_h2 = document.createElement("h2"), 
    // Næste Projekt
        next_section = document.createElement("section"), next_a = document.createElement("a"), next_h3 = document.createElement("h3"), next_div = document.createElement("div"), next_arrow = document.createElement("object");
    
    // First round of Append (Need to add some elements before, the loops create elements in the same parents).
        hero_section.appendChild(hero_h2);
        step_section.appendChild(step_h1);
        // galleri_section.appendChild(galleri_h2);

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
    function steps(p1,p2,p3) {
        // Forløb - Steps
            for (let i = 0; i < 3; i++) {
                let section = document.createElement("section"), h3 = document.createElement("h3"), p = document.createElement("p"), obj = document.createElement("object");
                // Content
                section.classList.add("projektStepBox");
                obj.type = "image/svg+xml";
                obj.classList.add("step_obj");
    
                switch (i) {
                    case 0:
                        h3.textContent = "Udfordringen";
                        p.textContent = p1;
                        obj.data = "assets/images/icons/challenge_icon.svg";
                        break;
                    case 1:
                        h3.textContent = "Designet";
                        p.textContent = p2;
                        obj.data = "assets/images/icons/design_icon.svg";
                        break;
                    case 2:
                        h3.textContent = "Løsningen";
                        p.textContent = p3;
                        obj.data = "assets/images/icons/process_icon_v3.svg";
                        break;
                }
                // Append
                section.append(obj, h3, p);
                section.classList.add("flex-center")
                step_section.appendChild(section);
            }
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
            section.classList.add("template_galleri_outer");
            galleri_section.appendChild(section);
        });
    //2nd round of Append and Content
        // Hero
            hero_section.id = "heroTextSection";
            hero_h2.classList.add("template_hero_h2");
            hero_section.classList.add("flex-center"); 
            hero_section.appendChild(hero_kode_block);

            hero_color_cover.id = "template_color_cover";

            hero.append(hero_section, hero_color_cover);
        // Intro
            // Links            
                a_live.textContent = "SE PROJEKTET ONLINE"
                a_github.textContent = "SE PROJEKTET PÅ GITHUB"
                a_live.classList.add("button");
                a_github.classList.add("button");

                a_container.id = "intro_a_container";

            intro_block.append(intro_h2, intro_p, a_container); intro_section.appendChild(intro_block);
            intro_section.id = "template_intro";
            intro_section.classList.add("flex-center");
            main.appendChild(intro_section);
        // Step
            step_h1.textContent = "Forløb";

            step_section.id = "step_section";
            step_section.classList.add("flex-center")

            main.appendChild(step_section);
        // Galleri
            galleri_h2.textContent = "Galleri";

            galleri_section.id = "template_galleri";
            galleri_section.classList.add("flex-center");

            main.appendChild(galleri_section);
        // Next
            next_h3.textContent = "NÆSTE PROJEKT";
            next_arrow.data = "assets/images/icons/arrow_down_v1.svg";
            
            next_section.id = "template_next";
            next_arrow.id = "next_project_arrow";
            next_section.classList.add("flex-center");
            
            // Append
            next_div.append(next_h3, next_arrow);
            next_a.appendChild(next_div);
            next_section.appendChild(next_a);
            
            main.appendChild(next_section);

        // Switch content depending on URL.
        class Steps {
            constructor (intro, udfordring, design, kode) {
                this.intro = intro;
                this.udfordring = udfordring;
                this.design = design;
                this.kode = kode;
            }
        }

        const
        snv_obj = new Steps(
            "For enden af Vejle fjord holder den frivillige Sejlklubben Neptun Vejle til hvor den har hørt til siden 1881. Vejle havn danner rammerne for mange forskellige begivenheder, og tiltrækker mange gæster. SNV er tilholdssted for mange lystbåds-ejere og sejlentusiaster, og har i dag 507 medlemmer. SNV tilbyder også ting som undervisning, og et sted for unge samt ældre at mødes over deres fælles interesse.",

            "Det har længe været tydeligt for SNV at deres hjemmeside ikke afspejler deres værdier og engagement, og trængte derfor til et re-design. Den nuværende hjemmeside er uoverskuelig og forvirre både nye, gamle og potentielle medlemmer. Derfor er nuværende medlemmer blevet nød til at bruge Facebook til at kommunikere relevante ting med klubben.",

            "I gruppen valgte vi at indsnævre scopet og derfor ikke tage alt indhold med fra den nuværende hjemmeside, og dermed kunne fokusere på et nyt design og informations arkitektur. Vi ville gerne vise med designet at det var en sejlklub, derfor valgte vi at bruge en bølge i footeren samt en skrå vinkel som skulle forstille et sejl.",

            "Jeg stod for største delen af kodningen af produktet, med fokus på vores JS og API. Jeg valgte at lave en slags 1-page hjemmeside, hvor alt indholdet bliver udskiftet i 1 HTML-fil alt efter URL’et. Alt data blev samlet i vores WordPress Headless RESTful API, og det skabte forskellige problemer hen ad vejen, blandt andet hvordan WordPress plugin’en ACF strukturere data og dermed lave ændringer alt efter behovet fra Front-enden. Jeg endte med at bruge meget tid på vigtige funktioner på hjemmesiden, som f.eks. et slideshow på forsiden og en funktion til at kunne bladre igennem et array 6 objekter ad gangen. Det var svært men krævede også at jeg fik en god forståelse for JS."
        ),
        englerod_obj = new Steps (
            "Johanne driver virksomheden Englerod, som er en madblok med niche inden for vegansk mad. På Englerod.dk deler Johanne veganske opskrifter, samt tips til at implementere den grønne livsstil i hverdagen. Desuden har Johanne udgivet 3 kogebøger med veganske opskrifter. For Johanne handler det ikke om at gøre det at spise vegansk til en religion, hendes fokus er på grøntsagerne, det at spise grønt og dyrke sine egne grøntsager. ",

            "Problemet for Englerod var at det er en hjemmeside som indeholder rigtig meget indhold, af forskellige typer som f.eks. guides til food-prep og en opskriftsoversigt. Derfor var det vigtig at komme frem til en løsning som ville skabe overblik for brugeren og have en hjemmeside med nem navigation.",

            "Efter at have lavet vores analyse af vores interviews og kigget på en konkurrent analyse, gav gruppen sig i kast med at skabe wireframes. I gruppen valgte vi et simpelt og overskueligt design som bruger de 2 farver fra Englerod logoet. Jeg var i starten af processen med til at designe vores produkt, men måtte hurtigt ligge mit fokus på vores API og hjemmeside. ",

            "Imens gruppen arbejdede med designet, gav jeg mig i kast med at opbygge vores Headless WordPress RESTFUL API, som skulle indeholde alt vores data. Meget af tiden gik med at forstå hvordan JSON og JavaScript objekter/arrays kunne bruges til at dynamisk skabe vores hjemmeside. Hjemmesidens struktur bliver styret via URL’et og ville hver gang bruge en XMLHttprequest til at hente data fra vores RESTful API. Jeg følte at det var bedst at hente alt indholdet hver gang, også fordi det var først gang jeg rigtigt skulle arbejde med JavaScript og WordPress som API. "
        ),
        pinktree_obj = new Steps (
            "PINKTREE er et lille projekt jeg endte med at lave i min sommerferie, for at holde en pause fra denne portofolie som du ser. Den havde til formål at skulle være en hjemmeside hvor en bruger kunne skabe noter og fjerne dem igen. På tidspunktet havde jeg ikke noget kendskab til back-end og servere, så hjemmesiden kunne ikke huske noter fra tidligere brug af hjemmesiden. Jeg havde også til formål med projektet at øve mig på JS og at arbejde med SVG'er.",

            "Meget af arbejdet lå i at komme op med et design som kunne gøre hjemmesiden mere interessant og for at jeg kunne få erfaring med ting som SVG’er og animationer. Som projektet skred frem, valgte jeg også at lave det til en hjemmeside uden en scrolle-funktion udover på listen af noter, så jeg fik lov til at arbejde meget med at kunne få de forskellige elementer til at passe.",

            "Det først jeg endte med at gøre var at prøve og komme på noget design som kunne være et centerstykke for mit projekt. Jeg prøvede først med forskellige karakterer, men endte med at lave det træ som du kan se på hjemmesiden. Jeg prøvede at skabe dybde i billedet ved at arbejde med flere lag og gøre de bagerste elementer utydelig og mindre end de andre. Derefter var det med at få en forståelse for hvordan SVG’er fungere for at jeg kunne begynde at animere min SVG. Designet af siden blev skabt hen af vejen imens jeg kodede projektet, med ting som farver og temaer.",

            "I koden arbejde jeg med at brugeren først skulle kunne tage nogle valg som ville ændre på udseendet af hjemmesiden når vi kom til siden med noterne. Derfor valgte jeg at kigge på ting som custom-attributes og arbejde med CSS :root variabler. Disse ville blive ændre alt efter hvilket element brugeren trykkede på, og kunne lade sig gøre fordi hjemmesiden er en 1-page hjemmesiden så der er ikke nogen links som ville genindlæse siden.  Til sidst arbejde jeg med at bruge animationer for at gøre hjemmesiden mere levende og interessant at interagere med."
        );

        let intro_h2_start = "Hvad er ";
        switch (check) {
            case "snv":
                // Hero
                    hero_h2.textContent = "MAJ - JUNI 2021";
                // Intro
                    intro_h2.textContent = intro_h2_start + "SNV.dk?";
                    intro_p.textContent = snv_obj.intro;

                    steps(snv_obj.udfordring, snv_obj.design, snv_obj.kode);

                    a_github.href = "https://github.com/AndersErikNissen/MMD2-Gruppe3";
                    a_live.href = "https://mmd.ucn.dk/class/mmda0920/1086088/Sem2/eksamen/Rubrics/Gruppe3-MMDA0920-MMD2/";
                
                // Add ID to Body for dynamic styling.
                    document.querySelector("body").id = "template_snv";
                // Links
                a_live.href = "https://mmd.ucn.dk/class/mmda0920/1086088/Sem2/eksamen/Rubrics/Gruppe3-MMDA0920-MMD2/";
                a_github.href = "https://github.com/AndersErikNissen/MMD2-Gruppe3";
                next_a.href = "englerod.html";

                a_container.append(a_github, a_live);
                break;
            case "englerod":
                // Hero
                    hero_h2.textContent = "APRIL 2021";
                 // Intro
                     intro_h2.textContent = intro_h2_start + "Englerod.dk?";
                     intro_p.textContent = englerod_obj.intro;

                     steps(englerod_obj.udfordring, englerod_obj.design, englerod_obj.kode);

                     a_live.href = "https://mmd.ucn.dk/class/mmda0920/1086088/Sem2/Tem3/Rubrics/Englerod-Gruppe3/";
                // Add ID to Body for dynamic styling.
                    document.querySelector("body").id = "template_englerod";

                next_a.href = "pinktree.html";

                a_container.appendChild(a_live);
                break;
            case "pinktree":
                //Hero
                    hero_h2.textContent = "AUGUST 2021";
                // Intro
                    intro_h2.textContent = intro_h2_start + "PINKTREE?";
                    intro_p.textContent = pinktree_obj.intro;

                    steps(pinktree_obj.udfordring, pinktree_obj.design, pinktree_obj.kode);

                    a_github.href = "https://github.com/AndersErikNissen/mini_pinkTree";
                    a_live.href = "https://mini-pink-tree.vercel.app/";
                // Add ID to Body for dynamic styling.
                    document.querySelector("body").id = "template_pinktree";
                next_a.href = "snv.html";

                a_container.append(a_github, a_live);
                break;
        }
}   

function KONTAKTcreate () {
    let
    //Create Elements
        outer = document.createElement("section"), non_img = document.createElement("section"),
        //Text Area
            text_area = document.createElement("section"), h1 = document.createElement("h1"), p = document.createElement("p"), h2 = document.createElement("h2"),
        // SoMi
            soMi = document.createElement("section"), soMi_ul = document.createElement("ul"), soMi_h2 = document.createElement("h2"),
        // Img
            img_outer = document.createElement("section"), object = document.createElement("object");
        // Add and Append
            // Text Area
                h1.textContent = "LAD OS TAGE EN SNAK.";
                p.textContent = "Hvis du har spørgsmål, eller bare gerne vil i kontakt med mig, så send mig gerne en e-mail. Jeg svare tilbage så hurtigt som jeg kan.";
                // Obfuscate Email
                    h2.innerHTML = '<a id="aen_email" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#97;&#110;&#100;&#101;&#114;&#115;&#101;&#114;&#105;&#107;&#110;&#105;&#115;&#115;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#97;&#110;&#100;&#101;&#114;&#115;&#101;&#114;&#105;&#107;&#110;&#105;&#115;&#115;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>';
                text_area.append(h1, p, h2);
                non_img.appendChild(text_area);
                non_img.id = "kontakt-info_box";
                outer.id = "kontakt-outer_container";
      
                object.data = "assets/images/svg/balloon_with_clouds.svg";
                object.type = "image/svg+xml";
                object.id = "kontakt-object";


                img_outer.appendChild(object);
                img_outer.id = "kontakt-object_container";
                outer.appendChild(img_outer);
            
                outer.appendChild(non_img);
            hero.appendChild(outer);
    // Add ID to Body for dynamic styling.
        document.querySelector("body").id = "kontakt";
    
    // Remove Footer
        document.querySelector("footer").remove();
}

function PROJEKTERcreate () {
    let
    // Hero
        hero_section = document.createElement("section"), h1 = document.createElement("h1"), hero_h2 = document.createElement("h2"),
    // Skoleprojekter
        sko_section = document.createElement("section"), sko_h2 = document.createElement("h2"), sko_h2_box = document.createElement ("section"),
    // Mini Projekter
        mini_section = document.createElement("section"), mini_h2 = document.createElement("h2"), mini_h2_box = document.createElement("section");
        // pink_section = document.createElement("section"), pink_main = document.createElement("section"), pink_h2 = document.createElement("h2"), pink_h4 = document.createElement("h4"), 
        // pink_box = document.createElement("section"), pink_logo = document.createElement("object"), pink_img = document.createElement("img"), pink_a = document.createElement("a");

    //Append H2
        sko_h2_box.appendChild(sko_h2);
        sko_section.appendChild(sko_h2_box);
    //Same loop from Index(Forside), will be a forEach loop later on. 
        for (let i = 0; i < 2; i++) {
            let
            section = document.createElement("section"), pMain = document.createElement("section"), h2 = document.createElement("h2"), h4 = document.createElement("h4"), 
            imgLogo_box = document.createElement("section"), logo = document.createElement("object"), img = document.createElement("img"), a = document.createElement("a");
            // Changes content after point in loop(i).
            switch (i) {
                case 0:
                    section.id = "snv";
                    h2.textContent = "SNV.dk";
                    h4.textContent = "MAJ - JUNI 2021";
                    
                    logo.data = "assets/images/svg/snv_logo_white.svg";
                    logo.type = "image/svg+xml";
                    img.src = "assets/images/images_projekter/snvdk_small.png";
                    a.href = "snv.html";
                    imgLogo_box.id = "snv_imgBox";
                    break;
                case 1:
                    section.id = "englerod";
                    h2.textContent = "Englerod.dk";
                    h4.textContent = "APRIL 2021";
                    
                    logo.data = "assets/images/svg/englerod_logo_white.svg";
                    logo.type = "image/svg+xml";
                    img.src = "assets/images/images_projekter/englerod_small.png";
                    a.href = "englerod.html";
                    imgLogo_box.id = "englerod_imgBox";
                    break;
            }
            //General Items Content
                section.classList.add("flex-center");
                pMain.classList.add("projektMain");

            //Append 
                imgLogo_box.append(logo, img);
                a.appendChild(imgLogo_box);
                pMain.appendChild(a);
                section.appendChild(pMain);
                sko_section.appendChild(section);
        }

    // Add / Append
        // Hero
            h1.textContent = "PROJEKTER";
            h1.classList.add("orange")
            hero_h2.textContent = "Fra skole og fritid";

            hero_section.append(h1, hero_h2);
            hero_section.classList.add("flex-center")
            hero_section.id = "heroTextSection";
            hero.appendChild(hero_section);
        // Skole
            sko_h2.textContent = "SKOLE PROJEKTER";
            sko_h2.classList.add("pro_h2s");
            sko_h2_box.classList.add("pro_h2_box", "flex-center")
            sko_section.classList.add("flex-center");
            main.appendChild(sko_section);

        // Mini
            mini_section.id = "mini_projekter";
            mini_section.classList.add("flex-center")
            mini_h2.textContent = "FRITIDS PROJEKTER";
            mini_h2.classList.add("pro_h2s");
            mini_h2_box.classList.add("pro_h2_box", "flex-center");
        
            // pink_box.append(pink_logo, pink_img);
            // pink_main.append(pink_h2, pink_h4, pink_box, pink_a);
            // pink_section.appendChild(pink_main);
            mini_h2_box.appendChild(mini_h2);
            mini_section.append(mini_h2_box);
            main.appendChild(mini_section);
            for (let i = 0; i < 1; i++) {
                let
                section = document.createElement("section"), pMain = document.createElement("section"), h2 = document.createElement("h2"), h4 = document.createElement("h4"), 
                imgLogo_box = document.createElement("section"), logo = document.createElement("object"), img = document.createElement("img"), a = document.createElement("a");
                // Changes content after point in loop(i).
                switch (i) {
                    case 0:
                        section.id = "pinkTree";
                        h2.textContent = "PINKTREE";
                        h4.textContent = "AUGUST 2021";
                     
                        img.src = "assets/images/images_projekter/PINKTREE_small.png";
                        logo.type = "image/svg+xml";
                        logo.data = "assets/images/svg/pinktree_logo_1white.svg";
                        a.href = "pinktree.html";
                        imgLogo_box.id = "pinktree_imgBox";
                    break;
                }
                //General Items Content
                    section.classList.add("flex-center");
                    pMain.classList.add("projektMain");
    
                //Append 
                    imgLogo_box.append(logo, img);
                    a.appendChild(imgLogo_box);
                    pMain.appendChild(a);
                    section.appendChild(pMain);
                    mini_section.appendChild(section);
            }

    // Add ID to Body for dynamic styling.
    document.querySelector("body").id = "projekter";
}

// --------------------------------
// ----------- FOOTER -------------
// --------------------------------
function FOOTERcreate () {
    let
    // Create Elements
        section = document.createElement("section"), h2 = document.createElement("h2"), a = document.createElement("a");
    // Finish    
        section.classList.add("flex-center");
        h2.textContent = "Vil du vide mere om mig, eller i kontakt?";
        a.href = "kontakt.html";
        a.textContent = "KONTAKT";
        a.classList.add("button");
        section.append(h2, a);
        document.querySelector("footer").appendChild(section);
}
function footerPosition() {
    let
    mainn = document.querySelector("main"),
    mainH = mainn.offsetHeight,
    windowH = window.innerHeight;



    document.documentElement.style.setProperty("--footer-position", (mainH + windowH) + "px");
    // document.querySelector("footer").style.top = mainH + windowH * 1.5 + "px";
    console.log(mainH);
    console.log(windowH)
}

// Set position after every item has been created and has the right height.
// Didn't work when used together with HTMLcreate, unless I set the height to something specific in CSS. 
// I think it has something to do in what order HTML is drawn and the height of elements are calculated(? Might be wrong).
window.addEventListener("load", ()=> {
    footerPosition();

    let h1Height = document.querySelector("#globalHeader").offsetHeight;

    document.documentElement.style.setProperty('--mobile-h1-margin-top', h1Height + "px");

})


// Loading Screen
window.onload = () => {
    // To do:
    // After fully loading, stay for 1sec to make sure footer have been placed.
    // After the loading is done remove the div, after the animation
    const loadingClass = ()=> document.querySelector("#loading_div").classList.add("loading");
    loadingClass();
    setTimeout(()=> document.querySelector("#loading_clouds").style.display = "none", 1000);
    setTimeout(()=> document.querySelector("#loading_div").remove(), 2000);

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