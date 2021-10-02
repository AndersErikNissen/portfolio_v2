//JS by Anders Erik Nissen
//UCN MMDA0920


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
            logo_img.src = "assets/images/logo/aen_logo_underedge_black_1.png";
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
                            a.href = "../om-mig.html"
                            a.textContent = "Om Mig";
                            break;
                        case 1:
                            a.href = "../projekter.html";
                            a.textContent = "Projekter";
                            break;
                        case 2:
                            a.href = "../kontakt.html";
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
                            soMi_img.src = "assets/images/icons/github_round_black.png";
                            soMi_img.alt = "Link og Billede til Github";
                            break;
                        case 1:
                            soMi_a.href = "https://www.instagram.com/aendersledes/";
                            soMi_img.src = "assets/images/icons/instagram_round_black.png";
                            soMi_img.alt = "Link og Billede til Instagram";
                            break;
                        case 2:
                            soMi_a.href = "https://www.linkedin.com/in/anders-erik-nissen/";
                            soMi_img.src = "assets/images/icons/linkedin_round_black.png";
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
            //Prevents JS from adding nav_fadeOut on first scroll down.
            if (nav.classList.contains("nav_fadeIn")) {
                nav.classList.add("nav_fadeOut");
            }
            nav.classList.remove("nav_fadeIn");
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
                SKYcreate_footer("white")
                SCROLLDOWNcreate()
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
        }
    }
})




// Create HTML for EACH page
function OMMIGcreate (check) {
    let
    // Hero Content
        h1 = document.createElement("h1"), intro_p = document.createElement("p"),
        introIMG_container = document.createElement("section"), introIMG_div = document.createElement("div"), introIMG = document.createElement("img"),
        intro_section = document.createElement("section"),
    // Main Content    
        main_outer = document.createElement("section"), main_h2 = document.createElement("h2");

    // Add Content / Append
        // Intro
            h1.textContent = "MOJN";
            intro_p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dolor id justo luctus euismod. Aliquam sem urna, sollicitudin in lobortis et, aliquet eget mi. Pellentesque maximus tempus quam id venenatis. Vivamus feugiat elit ac velit consequat, eu pellentesque velit condimentum. ";
            introIMG.src = "assets/images/fluffy_desk.jpg"; // Placeholder!!!!!!!!!!


            introIMG_div.appendChild(introIMG);
            introIMG_container.appendChild(introIMG_div);
            introIMG_container.id = "om-mig_intro_img";
            

            intro_section.append(h1, intro_p);
            intro_section.id = "heroTextSection";

            hero.append(intro_section, introIMG_container);

            // Remove Flex-center
                hero.classList.remove("flex-center");
        
        // Main
            main_outer.appendChild(main_h2);
            main_h2.textContent = "Kærneværdier";
            // Creates 3 container with "Values" content
                for (let i = 0; i < 3; i++) {
                    let
                    outer = document.createElement("section"), inner = document.createElement("section"), h3 = document.createElement("h3"), p = document.createElement("p"), img = document.createElement("img");
                    //Switch to change content depending where in the loop(i) we are.
                        switch(i) {
                            case 0:
                                h3.textContent = "Fundamentet";
                                p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dolor id justo luctus euismod. Aliquam sem urna, sollicitudin in lobortis et, aliquet eget mi. Pellentesque maximus tempus quam id venenatis. Vivamus feugiat elit ac velit consequat, eu pellentesque velit condimentum. ";
                                img.src = "assets/images/svg/puzzle_1.svg";
                                img.alt = "Billede til " + h3.textContent;
                                break;
                            case 1:
                                h3.textContent = "Filosofi";
                                p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dolor id justo luctus euismod. Aliquam sem urna, sollicitudin in lobortis et, aliquet eget mi. Pellentesque maximus tempus quam id venenatis. Vivamus feugiat elit ac velit consequat, eu pellentesque velit condimentum. ";
                                img.src = "assets/images/svg/puzzle_1.svg";
                                img.alt = "Billede til " + h3.textContent;
                                break;
                            case 2:
                                h3.textContent = "Nysgerrighed";
                                p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dolor id justo luctus euismod. Aliquam sem urna, sollicitudin in lobortis et, aliquet eget mi. Pellentesque maximus tempus quam id venenatis. Vivamus feugiat elit ac velit consequat, eu pellentesque velit condimentum. ";
                                img.src = "assets/images/svg/puzzle_1.svg";
                                img.alt = "Billede til " + h3.textContent;
                                break;
                        }
                    //Add Class
                        inner.classList.add("vaerdiBox", "flex-center");
                    //Append the content
                        inner.append(h3, p, img);
                        outer.appendChild(inner);
                        outer.classList.add("outer_vaerdiBox","flex-center");


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
            cv.href = "";
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
            forPer_h2.textContent = "Slow is smooth, smooth is fast!";
            forPer_p.textContent = "Mauris ac pretium turpis. Aenean pharetra condimentum felis, eu iaculis massa. Mauris in vestibulum libero. Maecenas blandit hendrerit libero, id dignissim nisi malesuada et. Nulla ipsum dui, aliquam bibendum lacus id, fermentum cursus massa. Quisque diam nisl, congue sed arcu in, vestibulum tristique mi. In posuere egestas sapien id pellentesque. Donec varius risus suscipit dapibus viverra. Duis ultrices feugiat sollicitudin. Nulla efficitur ornare ante, at eleifend purus. Fusce massa risus, interdum nec interdum sit amet, faucibus non dolor. Nulla facilisi. Nulla vel luctus erat, vel fringilla turpis. Ut vitae malesuada augue. Curabitur non sollicitudin augue.";
            
            forPer_obj.data = "assets/images/svg/flyingDesk_v3_1.svg";
            forPer_obj.type = "image/svg+xml";
            forPer_obj.id = "obj_desk";
            
            link_ommig.href = "?om-mig";
            link_ommig.textContent = "LÆS MERE";

            forPer_textBox.append(forPer_h2, forPer_p, link_ommig);
            forPer_cover.append(forPer_textBox, forPer_obj);
            forPer_section.appendChild(forPer_cover);

            link_ommig.classList.add("button");
            forPer_cover.id = "forPer_cover";
            forPer_section.id = "forsidePersonlig";
            // forPer_section.classList.add("flex-center");
        // Projekter
            forPro_info_h2.textContent = "PROJEKTER";
            forPro_info_p.textContent = "Mauris ac pretium turpis. Aenean pharetra condimentum felis, eu iaculis massa. Mauris in vestibulum libero. Maecenas blandit hendrerit libero, id dignissim nisi malesuada et.";
            forPro_info.append(forPro_info_h2, forPro_info_p);
        
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
                    a.href = "../snv.html";
                    imgLogo_box.id = "snv_imgBox";
                    break;
                case 1:
                    section.id = "englerod";
                    h2.textContent = "Englerod.dk";
                    h4.textContent = "APRIL 2021";
                    
                    logo.data = "assets/images/svg/englerod_logo_white.svg";
                    logo.type = "image/svg+xml";
                    img.src = "assets/images/images_projekter/englerod_small.png";
                    a.href = "../englerod.html";
                    imgLogo_box.id = "englerod_imgBox";
                    break;
            }
            //General Items Content
                section.classList.add("flex-center");
                pMain.classList.add("projektMain");

            //Append 
                imgLogo_box.append(logo, img);
                a.appendChild(imgLogo_box);
                pMain.append(h2, h4, a);
                section.appendChild(pMain);
                forPro_section.appendChild(section);
        }
        // View all project link.
            forPro_alle.href = "../projekter.html";
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
    // Projekt - Værdier
        step_section = document.createElement("section"), step_h1 = document.createElement("h2"), 
    // Projekt - Galleri
        galleri_section = document.createElement("section"), galleri_h2 = document.createElement("h2"), 
    // Næste Projekt
        next_section = document.createElement("section"), next_a = document.createElement("a"), next_h3 = document.createElement("h3"), next_div = document.createElement("div"), next_arrow = document.createElement("object");
    
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
            let section = document.createElement("section"), h3 = document.createElement("h3"), p = document.createElement("p"), obj = document.createElement("object");
            // Content
            section.classList.add("projektStepBox");
            obj.type = "image/svg+xml";
            obj.classList.add("step_obj");

            switch (i) {
                case 0:
                    h3.textContent = "Udfordringen";
                    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et justo est. Phasellus nec nibh metus. Proin nec semper purus.";
                    obj.data = "assets/images/icons/challenge_icon.svg";
                    break;
                case 1:
                    h3.textContent = "Scopet og Designet";
                    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et justo est. Phasellus nec nibh metus. Proin nec semper purus.";
                    obj.data = "assets/images/icons/design_icon.svg";
                    break;
                case 2:
                    h3.textContent = "Løsningen";
                    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et justo est. Phasellus nec nibh metus. Proin nec semper purus.";
                    obj.data = "assets/images/icons/process_icon_v3.svg";
                    break;
            }
            // Append
            section.append(obj, h3, p);
            section.classList.add("flex-center")
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
            hero_section.id = "heroTextSection";
            hero_section.classList.add("flex-center"); 
            hero_section.appendChild(hero_kode_block);

            hero_color_cover.id = "template_color_cover";

            hero.append(hero_section, hero_color_cover)
        // Intro
            intro_h2.textContent = "PLACEHOLDER: HVAD ER????";
            intro_p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et justo est. Phasellus nec nibh metus. Proin nec semper purus.";
            
            intro_block.append(intro_h2, intro_p); intro_section.appendChild(intro_block);
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
        switch (check) {
            case "snv":
                hero_h2.textContent = "MAJ - JUNI 2021";
                // Add ID to Body for dynamic styling.
                    document.querySelector("body").id = "template_snv";

                next_a.href = "../englerod.html";
                break;
            case "englerod":
                hero_h2.textContent = "APRIL 2021";
                // Add ID to Body for dynamic styling.
                    document.querySelector("body").id = "template_englerod";

                next_a.href = "../pinktree.html";
                break;
            case "pinktree":
                hero_h2.textContent = "AUGUST 2021";
                // Add ID to Body for dynamic styling.
                    document.querySelector("body").id = "template_pinktree";
                next_a.href = "../englerod.html";
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
            img_outer = document.createElement("section"), img_div = document.createElement("div"), img_img = document.createElement("img");
        // SoMI LI   
            for (let i = 0; i < 3; i++) {
                let
                soMi_li = document.createElement("li"), soMi_a = document.createElement("a"), soMi_div = document.createElement("div"), soMi_img = document.createElement("img");
                //Add class and more
                    
                    switch (i) {
                        case 0:
                            soMi_a.href = "https://github.com/AndersErikNissen";
                            soMi_img.src = "assets/images/icons/github_round_black.png";
                            soMi_img.alt = "Link og Billede til Github";
                            break;
                        case 1:
                            soMi_a.href = "https://www.instagram.com/aendersledes/";
                            soMi_img.src = "assets/images/icons/instagram_round_black.png";
                            soMi_img.alt = "Link og Billede til Instagram";
                            break;
                        case 2:
                            soMi_a.href = "https://www.linkedin.com/in/anders-erik-nissen/";
                            soMi_img.src = "assets/images/icons/linkedin_round_black.png";
                            soMi_img.alt = "Link og Billede til LinkedIn";
                            break;
                    }
                //Append
                    soMi_div.appendChild(soMi_img)
                    soMi_a.appendChild(soMi_div);
                    soMi_li.appendChild(soMi_a);
                    soMi_ul.appendChild(soMi_li);
            }
        // Add and Append
            // Text Area
                h1.textContent = "LAD OS TAGE EN SNAK!";
                p.textContent = "Hvis du har spørgsmål, eller bare gerne vil i kontakt med mig, så send mig gerne en e-mail. Jeg svare tilbage så hurtigt som jeg kan!";
                // Obfuscate Email
                    h2.innerHTML = '<a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#97;&#110;&#100;&#101;&#114;&#115;&#101;&#114;&#105;&#107;&#110;&#105;&#115;&#115;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#97;&#110;&#100;&#101;&#114;&#115;&#101;&#114;&#105;&#107;&#110;&#105;&#115;&#115;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>';
                text_area.append(h1, p, h2);
                non_img.appendChild(text_area);
                non_img.id = "kontakt-info_box";
                outer.id = "kontakt-outer_container";
            // SoMi
                soMi_h2.textContent = "Følg mig på:";
                soMi.append(soMi_h2, soMi_ul);
                soMi.id = "kontakt-soMi";
                soMi_ul.id = "kontakt-soMi_ul";
                non_img.appendChild(soMi);
            // SoMi Li
                img_img.src = "assets/images/fluffy_desk.jpg";
                img_img.id = "kontakt-img";

                img_div.appendChild(img_img);
                img_outer.appendChild(img_div);
                img_outer.id = "kontakt-img_container";
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
        hero_section = document.createElement("section"), h1 = document.createElement("h1"), hero_p = document.createElement("p"),
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
                    a.href = "../snv.html";
                    imgLogo_box.id = "snv_imgBox";
                    break;
                case 1:
                    section.id = "englerod";
                    h2.textContent = "Englerod.dk";
                    h4.textContent = "APRIL 2021";
                    
                    logo.data = "assets/images/svg/englerod_logo_white.svg";
                    logo.type = "image/svg+xml";
                    img.src = "assets/images/images_projekter/englerod_small.png";
                    a.href = "../englerod.html";
                    imgLogo_box.id = "englerod_imgBox";
                    break;
            }
            //General Items Content
                section.classList.add("flex-center");
                pMain.classList.add("projektMain");

            //Append 
                imgLogo_box.append(logo, img);
                a.appendChild(imgLogo_box);
                pMain.append(h2, h4, a);
                section.appendChild(pMain);
                sko_section.appendChild(section);
        }

    // Add / Append
        // Hero
            h1.textContent = "Projekter";
            hero_p.textContent = "Her kan du se mine seneste projekter, fra mit studie og nogle som jeg har lavet i min fritid!";

            hero_section.append(h1, hero_p);
            hero_section.classList.add("flex-center")
            hero_section.id = "heroTextSection";
            hero.appendChild(hero_section);
        // Skole
            sko_h2.textContent = "Skoleprojekter";
            sko_h2.classList.add("pro_h2s");
            sko_h2_box.classList.add("pro_h2_box", "flex-center")
            sko_section.classList.add("flex-center");
            main.appendChild(sko_section);

        // Mini
            mini_section.id = "mini_projekter";
            mini_section.classList.add("flex-center")
            mini_h2.textContent = "Mini Projekter";
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
                        a.href = "../pinktree.html";
                        imgLogo_box.id = "pinktree_imgBox";
                    break;
                }
                //General Items Content
                    section.classList.add("flex-center");
                    pMain.classList.add("projektMain");
    
                //Append 
                    imgLogo_box.append(logo, img);
                    a.appendChild(imgLogo_box);
                    pMain.append(h2, h4, a);
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
        a.href = "../kontakt.html";
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
})


// Loading Screen
window.onload = () => {
    // To do:
    // After fully loading, stay for 1sec to make sure footer have been placed.
    // After the loading is done remove the div, after the animation
    const loadingClass = ()=> document.querySelector("#loading_div").classList.add("loading");
    loadingClass();
    setTimeout(()=> document.querySelector("#loading_dots").style.display = "none", 1000);
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