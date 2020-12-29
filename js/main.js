const NAMES = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminium', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Caesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium', 'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury', 'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium', 'Thorium', 'Protactinium', 'Uranium', 'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium', 'Copernicium', 'Nihonium', 'Flerovium', 'Moscovium', 'Livermorium', 'Tennessine', 'Oganesson'];
const SYMBOLS = ['h', 'he', 'li', 'be', 'b', 'c', 'n', 'o', 'f', 'ne', 'na', 'mg', 'al', 'si', 'p', 's', 'cl', 'ar', 'k', 'ca', 'sc', 'ti', 'v', 'cr', 'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'ga', 'ge', 'as', 'se', 'br', 'kr', 'rb', 'sr', 'y', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd', 'ag', 'cd', 'in', 'sn', 'sb', 'te', 'i', 'xe', 'cs', 'ba', 'la', 'ce', 'pr', 'nd', 'pm', 'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu', 'hf', 'ta', 'w', 're', 'os', 'ir', 'pt', 'au', 'hg', 'tl', 'pb', 'bi', 'po', 'at', 'rn', 'fr', 'ra', 'ac', 'th', 'pa', 'u', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 'md', 'no', 'lr', 'rf', 'db', 'sg', 'bh', 'hs', 'mt', 'ds', 'rg', 'cn', 'nh', 'fl', 'mc', 'lv', 'ts', 'og'];
const SPECIAL_NAMES = ['Angstrom', 'Deuterium', 'electron', 'gluon', 'Joule', 'lepton', 'mass', 'quark', 'Resistance', 'Tritium', 'X-ray', 'Z-boson'];
const SPECIAL_SYMBOLS = ['A', 'D', 'e', 'g', 'J', 'l', 'm', 'q', 'R', 'T', 'X', 'Z'];
const ALKALI = ['li', 'na', 'k', 'rb', 'cs', 'fr'];
const ALKALINE = ['be', 'mg', 'ca', 'sr', 'ba', 'ra'];
const HALOGEN = ['f', 'cl', 'br', 'i', 'at', 'ts'];
const NOBLE_GAS = ['he', 'ne', 'ar', 'kr', 'xe', 'rn', 'og'];
const LANTHANIDE = ['la', 'ce', 'pr', 'nd', 'pm', 'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu'];
const ACTINIDE = ['ac', 'th', 'pa', 'u', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 'md', 'no', 'lr'];
const OTHER_METAL = ['al', 'ga', 'ge', 'in', 'sn', 'sb', 'tl', 'pb', 'bi', 'po', 'nh', 'fl', 'mc', 'lv'];
const TRANSITION_METAL = ['sc', 'ti', 'v', 'cr', 'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'y', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd', 'ag', 'cd', 'hf', 'ta', 'w', 're', 'os', 'ir', 'pt', 'au', 'hg', 'rf', 'db', 'sg', 'bh', 'hs', 'mt', 'ds', 'rg', 'cn']
const NON_METAL = ['h', 'b', 'c', 'n', 'o', 'si', 'p', 's', 'as', 'se', 'te'];
const ORDER = ["Zn", "Cf", "Fm", "Bk", "Cm", "Zr", "Mg", "Cd", "Sr", "Pm", "Sg", "Cs", "Md", "Hf", "Lr", "Hg", "Mt", "Mc", "Hs", "Pd", "Gd", "Bh", "Tm", "Pb", "Db", "Cn", "Kr", "Sb", "Yb", "Nh", "Tb", "Rf", "Nb", "Lv", "Mn", "Rh", "Rb", "Xe", "Np", "Fr", "Rg", "Eu", "Dy", "Pt", "Tc", "Fl", "Fe", "Cl", "Br", "Tl", "Pu", "Au", "Rn", "Sn", "Ir", "Ba", "Ds", "Cr", "Be", "Og", "Ga", "Ru", "Sc", "Pa", "Os", "Ag", "Lu", "Cu", "Na", "Bi", "Pr", "He", "Sm", "Po", "Ts", "Ca", "Ce", "Ge", "Am", "Th", "Mo", "Ho", "Ac", "Nd", "Si", "As", "Se", "Ni", "Ne", "No", "W", "Co", "Ta", "In", "La", "Li", "At", "Ra", "V", "Ar", "Te", "K", "F", "Al", "Re", "Y", "B", "Ti", "Es", "H", "Er", "U", "P", "C", "N", "O", "I", "S"];
const LINKS = [""]
ORDER.reverse();
const FREQUENCY = [1, 2, 2, 3, 3, 3, 5, 6, 9, 12, 12, 13, 14, 16, 17, 22, 24, 25, 29, 30, 31, 43, 48, 49, 59, 60, 61, 62, 94, 115, 122, 128, 142, 166, 185, 209, 229, 236, 272, 279, 354, 397, 407, 424, 454, 502, 568, 585, 642, 648, 705, 769, 778, 789, 797, 804, 854, 868, 950, 975, 1030, 1059, 1082, 1092, 1094, 1119, 1149, 1188, 1200, 1415, 1549, 1599, 1606, 1664, 1673, 1674, 1926, 1938, 1939, 2091, 2171, 2181, 2209, 2316, 2357, 2589, 2611, 2743, 2925, 2999, 3438, 3441, 3467, 3985, 4376, 4428, 4457, 4554, 4663, 5133, 5457, 5548, 6268, 6307, 6537, 6956, 7061, 7665, 9626, 10507, 11822, 12655, 13583, 17275, 19705, 20853, 20915, 30042];
FREQUENCY.reverse();
const PERCENT = [0.00030209655005739835, 0.0006041931001147967, 0.0006041931001147967, 0.000906289650172195, 0.000906289650172195, 0.000906289650172195, 0.0015104827502869917, 0.00181257930034439,0.0027188689505165853,0.00362515860068878,0.00362515860068878,0.003927255150746178,0.004229351700803577,0.004833544800918374,0.005135641350975772,0.006646124101262764,0.00725031720137756,0.0075524137514349585,0.008760799951664552,0.009062896501721951,0.009364993051779348,0.01299015165246813,0.01450063440275512,0.01480273095281252,0.017823696453386502,0.018125793003443903,0.0184278895535013,0.018729986103558697,0.028397075705395444,0.03474110325660081,0.0368557791070026,0.03866835840734699,0.042897710108150564,0.05014802730952812,0.0558878617606187,0.06313817896199625,0.06918010996314422,0.07129478581354601,0.08217026161561235,0.08428493746601413,0.10694217872031901,0.11993233037278714,0.12295329587336114,0.1280889372243369,0.13715183372605885,0.15165246812881397,0.17159084043260225,0.17672648178357803,0.19394598513684974,0.1957585644371941,0.21297806779046582,0.23231224699413935,0.23503111594465592,0.2383541779952873,0.24077095039574647,0.24288562624614826,0.2579904537490182,0.26221980544982176,0.28699172255452843,0.2945441363059634,0.31115944655912026,0.3199202465107848,0.326868467162105,0.329889432662679,0.3304936257627938,0.33804603951422874,0.3471089360159507,0.35889070146818924,0.36251586006887804,0.42746661833121863,0.46794755603891003,0.48305238354178,0.4851670593921818,0.5026886592955108,0.5054075282460274,0.5057096247960848,0.5818379554105492,0.585463114011238,0.5857652105612954,0.6316838861700199,0.6558516101746118,0.6588725756751858,0.6673312790767929,0.6996556099329345,0.7120415684852879,0.7821279680986042,0.788774092199867,0.8286508368074437,0.8836324089178902,0.9059875536221377,1.0386079390973355,1.0395142287475077,1.047368739049,1.2038547519787324,1.3219745030511751,1.33768352365416,1.3464443236058243,1.375747688961392,1.4086762129176484,1.5506615914446256,1.6485408736632228,1.676031659718446,1.8935411757597727,1.9053229412120114,1.9748051477252129,2.1013836021992627,2.1331037399552897,2.3155700561899586,2.9079813908525165,3.1741284514530843,3.5713854147785633,3.8230318409763764,4.103377439429642,5.218717902241556,5.952812518881034,6.299619358346928,6.3183493444504855,9.07558455682436];
PERCENT.reverse();

const dynamic_spell_input = document.getElementById("dynamic-spell");
const enter_input = document.getElementById("enter");
const random_input = document.getElementById("random");


function keepLettersOnly(word) {
    let newWord = "";
    for (var i = 0; i < word.length; i++) {
        if ((/[a-zA-Z]/).test(word[i])) {
            newWord += word[i];
        }
    }
    return newWord;
}

function chemspell(Word) {
    let word = keepLettersOnly(Word);
    word = word.toString().toLowerCase();
    let word_vector = [], location = 0, word_index = 0;
    while (word_index < word.length) {
        let newWord = word.substring(word_index);
        let Single = newWord[0]
        let next;
        let Double;
        if (newWord.length > 1 && word_index < word.length) {
            next = newWord[1];
            Double = Single + next;
        }
        else {
            Double = Single;
        }
        if (SYMBOLS.includes(Single)) {
            word_vector.push(Single);
            location++;
            word_index++;
        }
        else if (SYMBOLS.includes(Double)) {
            word_vector.push(Double);
            location++;
            word_index += 2;
        }
        else if (location > 0 && SYMBOLS.includes(word_vector[location - 1] + Single)) {
            word_vector[location - 1] = word_vector[location - 1] + Single;
            word_index++;
        }
        else if (location > 0 && word_vector[location - 1].length === 2 && word_index < word.length) {
            let prior = word_vector[location - 1][1];
            let attempt = prior + Single;
            if (location > 1 && SYMBOLS.includes((word_vector[location - 2] + word_vector[location - 1][0])) && SYMBOLS.includes(attempt)) {
                word_vector[location - 2] = word_vector[location - 2] + word_vector[location - 1][0];
                word_vector[location - 1] = attempt;
                word_index++;
            }
            else {
                word_vector.push("(" + Single + ")");
                location++;
                word_index++;
            }
        }
        else {
            word_vector.push("(" + Single + ")");
            location++;
            word_index++;
        }
    }
    if (changeToDouble) {
    // changes singles to doubles if possible (CO --> Co, SI --> Si, etc.)
        for (var i = 0; i < word_vector.length; i++) {
            if (i < word_vector.length - 1 && word_vector[i].length === 1 && word_vector[i + 1].length === 1) {
                change = word_vector[i] + word_vector[i + 1];
                if (SYMBOLS.includes(change)) {
                    word_vector[i] = change;
                    word_vector.splice(i + 1, 1);
                    i--;
                }
            }
        }
    }
    for (var i = 0; i < word_vector.length; i++) {
        word_vector[i] = word_vector[i][0].toString().toUpperCase() + word_vector[i].substring(1);
    }
    return word_vector;
}

function dynamic_chemspell(entry) {
    for (var i = 0; i < SYMBOLS.length; i++) {
        var elem = SYMBOLS[i][0].toString().toUpperCase() + SYMBOLS[i].substring(1);
        var id = document.getElementById(elem);
        var val = id.id;
        if (entry.includes(val)) {
            if (ALKALI.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #7e2525";
                id.style.background = "#7e2525";
                id.style.transition = "0.3s";
            }
            if (ALKALINE.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #7a4205";
                id.style.background = "#7a4205";
                id.style.transition = "0.3s";
            }
            if (HALOGEN.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #796900";
                id.style.background = "#796900";
                id.style.transition = "0.3s";
            }
            if (NOBLE_GAS.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #3d0e5f";
                id.style.background = "#3d0e5f";
                id.style.transition = "0.3s";
            }
            if (LANTHANIDE.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #6a0888";
                id.style.background = "#6a0888";
                id.style.transition = "0.3s";
            }
            if (ACTINIDE.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #6e1a55";
                id.style.background = "#6e1a55";
                id.style.transition = "0.3s";
            }
            if (OTHER_METAL.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #254e44";
                id.style.background = "#254e44";
                id.style.transition = "0.3s";
            }
            if (TRANSITION_METAL.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #102f64";
                id.style.background = "#102f64";
                id.style.transition = "0.3s";
            }
            if (NON_METAL.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #044712";
                id.style.background = "#044712";
                id.style.transition = "0.3s";
            }
        }
        else {
            if (ALKALI.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #FF4E4E";
                id.style.background = "#FF4E4E";
            }
            if (ALKALINE.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #FFA94E";
                id.style.background = "#FFA94E";
            }
            if (HALOGEN.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #F3D200";
                id.style.background = "#F3D200";
            }
            if (NOBLE_GAS.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #A326FF";
                id.style.background = "#A326FF";
            }
            if (LANTHANIDE.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #d23fff";
                id.style.background = "#d23fff";
            }
            if (ACTINIDE.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #ff3fc5";
                id.style.background = "#ff3fc5";
            }
            if (OTHER_METAL.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #61cab0";
                id.style.background = "#61cab0";
            }
            if (TRANSITION_METAL.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #2675FF";
                id.style.background = "#2675FF";
            }
            if (NON_METAL.includes(val.toString().toLowerCase())) {
                id.style.border =  "3px solid #0CD033";
                id.style.background = "#0CD033";
            }
        }
    }
}

function returnInfo(chemspelling) {
    let number_symbol_element = [];
    for (var i = 0; i < chemspelling.length; i++) {
        if (chemspelling[i].length === 3) {
            chemspelling[i] = chemspelling[i][1];
        }
        let symbol = chemspelling[i];
        let number;
        let element;
        if (SYMBOLS.includes(symbol.toString().toLowerCase())) {
            for (var j = 0; j < SYMBOLS.length; j++) {
                if (symbol.toString().toLowerCase() === SYMBOLS[j]) {
                    number = j + 1;
                    element = NAMES[j];
                    number_symbol_element.push([number, symbol, element]);
                    break;
                }
            }
        }
        else if (SPECIAL_SYMBOLS.includes(symbol.toString().toLowerCase()) || SPECIAL_SYMBOLS.includes(symbol.toString().toUpperCase())) {
            for (var k = 0; k < SPECIAL_SYMBOLS.length; k++) {
                if (symbol === SPECIAL_SYMBOLS[k].toString().toLowerCase()) {
                    number = "-";
                    element = SPECIAL_NAMES[k];
                    if (symbol === "a") {
                        symbol = "\u00C5";
                    }
                    else {
                        symbol = SPECIAL_SYMBOLS[k];
                    }
                    number_symbol_element.push([number, symbol, element]);
                    break;
                }
            }
        }
        else if (symbol === " ") {
            number = " ";
            element = "SPACE";
            symbol = " ";
            number_symbol_element.push([number, symbol, element]);
        }
        else {
            chemspelling.splice(i, 1);
            i--;
        }
    }
    return number_symbol_element;
}

function returnPerfects(symbol) {
    var allPerfects = [];
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "../other/perfect_words.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var perfects = allText.split("\n");
                for (var i = 0; i < perfects.length; i++) {
                    if (chemspell(perfects[i]).includes(symbol)) {
                        allPerfects.push(perfects[i]);
                    }
                }
            }
        }
    }
    rawFile.send(null);
    return allPerfects;

}

let isPerfect = true;

function displaySpelling(text) {
    let chemspelling = chemspell(text);
    let parent = document.getElementById("display-spell");
    if (Array.isArray(text)) {
        chemspelling = text;
    }
    isPerfect = true;
    for (var i = 0; i < chemspelling.length; i++) {
        if (!SYMBOLS.includes(chemspelling[i].toString().toLowerCase())) {
            isPerfect = false;
            break;
        }
    }
    let allInfo = returnInfo(chemspelling);
    parent.style.marginTop = "20px";
    parent.style.marginBottom = "50px";
    for (var i = 0; i < allInfo.length + 1; i++) {
        let span = document.createElement("span");
        span.animate ([
            { opacity: "0" },
            { opacity: "100" },
        ], {
            iterations: 1,
            duration: 350,
            delay: i*350,
            fill: "forwards"
        });
        if (i === allInfo.length) {
            text = keepLettersOnly(text);
            span.style.display = "inline-block";
            span.style.position = "relative";
            span.style.textAlign = "center";
            if (isPerfect && text.length > 0) {
                span.style.color = "gold";
                span.innerHTML = text.toString().toLowerCase() + " \u2713";
            }
            else {
                span.style.color = "white";
                span.innerHTML = text.toString().toLowerCase();
            }
            span.style.opacity = "0";
            span.style.marginLeft = "50px";
            span.style.fontSize = "25px";
            span.style.fontFamily = "'Numans', sans-serif";
        }
        else {
            let divNumber = document.createElement("div");
            let divSymbol = document.createElement("div");
            let divElement = document.createElement("div");
            let number = allInfo[i][0];
            let symbol = allInfo[i][1];
            let element = allInfo[i][2];

            span.style.display = "inline-block";
            span.style.position = "relative";
            span.style.textAlign = "center";
            span.style.width = "90px";
            span.style.height = "90px";
            span.style.borderRadius = "0.4em";
            span.style.border = "3px solid #A5A5A5";
            span.style.background = "transparent";
            span.style.margin = "5px";
            span.style.opacity = "0";

            if (SYMBOLS.includes(symbol.toString().toLowerCase()) && text.length > 0) {
                span.style.border = "3px solid #0CD033";
                span.style.cursor = "pointer";
                span.onmouseover = function() {
                    this.style.background = "#0CD033";
                    this.style.transition = "0.3s";
                }
                span.onmouseleave = function() {
                    this.style.background = "transparent";
                    this.style.transition = "0.3s";
                }
                span.onclick = function() {
                    var h1 = document.getElementById("element-name");
                    h1.innerHTML = element;
                    h1.style.textAlign = "center";
                    h1.style.fontSize = "50px";
                    h1.style.fontFamily = 'Numans, sans-serif';

                    if(myChart!=null){
                        myChart.destroy();
                    }
                    var zerosArray = [];
                    for (var i = 0; i < 30; i++) {
                        zerosArray.push(0);
                    }
                    var modal = document.getElementById("myModal");
                    modal.style.display = "block";

                    var close = document.getElementsByClassName("close")[0];
                    close.onclick = function() {
                        modal.style.display = "none";
                        myChart.destroy();
                    }

                    // window.onclick = function(event) {
                    //     if (event.target == modal) {
                    //       modal.style.display = "none";
                    //       myChart.destroy();
                    //     }
                    // }
                    
                    Chart.defaults.global.defaultFontColor = 'white';
                    Chart.defaults.global.defaultFontFamily = 'Numans, sans-serif';
                    var ctx = document.getElementById('myChart').getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: zerosArray,
                            datasets: [{
                                label: '# occurrences',
                                data: zerosArray,
                                backgroundColor: [
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)'
                                ],
                                borderColor: [
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)',
                                    'rgba(122, 209, 255, 0.8)'
                                ],
                                borderWidth: 1,
                            }]
                        },
                        options: {
                            scaleShowValues: true,
                            scales: {
                                xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: "",
                                    fontSize: 20,
                                    fontColor: 'rgb(196, 196, 196)',
                                    fontWeight: "bold"
                                },
                                ticks: {
                                    autoSkip: false,
                                }
                                }]
                            }
                        }
                    });
                    if (ORDER.indexOf(symbol) < 30) {
                        myChart.data.labels = ORDER.slice(0, 30);
                        myChart.data.datasets[0].data = FREQUENCY.slice(0, 30);
                        myChart.options.scales.xAxes[0].scaleLabel.labelString = "1st-30th most common elements";
                    }
                    else if (ORDER.indexOf(symbol) > 29 && ORDER.indexOf(symbol) < 60) {
                        myChart.data.labels = ORDER.slice(30, 60);
                        myChart.data.datasets[0].data = FREQUENCY.slice(30, 60);
                        myChart.options.scales.xAxes[0].scaleLabel.labelString = "31st-60th most common elements";
                    }
                    else if (ORDER.indexOf(symbol) > 59 && ORDER.indexOf(symbol) < 90) {
                        myChart.data.labels = ORDER.slice(60, 90);
                        myChart.data.datasets[0].data = FREQUENCY.slice(60, 90);
                        myChart.options.scales.xAxes[0].scaleLabel.labelString = "61st-90th most common elements";
                    }
                    else if (ORDER.indexOf(symbol) > 89) {
                        myChart.data.labels = ORDER.slice(90, 118);
                        myChart.data.datasets[0].data = FREQUENCY.slice(90, 118);
                        myChart.options.scales.xAxes[0].scaleLabel.labelString = "91st-118th most common elements";
                    }
                    myChart.data.datasets[0].backgroundColor[ORDER.indexOf(symbol) % 30] = 'gold';
                    myChart.data.datasets[0].borderColor[ORDER.indexOf(symbol) % 30] = 'gold';
                    myChart.update();

                    var text1 = document.getElementById("span1");
                    text1.innerHTML = symbol + " is the ";
                    var text2 = document.getElementById("span2");
                    var text3 = document.getElementById("span3");
                    var text4 = document.getElementById("occurrences");
                    text3.innerHTML = "most common element in the English language";
                    text4.innerHTML = FREQUENCY[ORDER.indexOf(symbol)].toString() + " occurrences";
                    if (FREQUENCY[ORDER.indexOf(symbol)] === 1) {
                        text4.innerHTML = FREQUENCY[ORDER.indexOf(symbol)].toString() + " occurrence";
                    }
                    if (ORDER.indexOf(symbol) % 10 === 0) {
                        text2.innerHTML = (ORDER.indexOf(symbol) + 1).toString() + "st ";
                    }
                    else if (ORDER.indexOf(symbol) % 10 === 1) {
                        text2.innerHTML = (ORDER.indexOf(symbol) + 1).toString() + "nd ";
                    }
                    else if (ORDER.indexOf(symbol) % 10 === 2) {
                        text2.innerHTML = (ORDER.indexOf(symbol) + 1).toString() + "rd ";
                    }
                    else {
                        text2.innerHTML = (ORDER.indexOf(symbol) + 1).toString() + "th ";
                    }
                    if (ORDER.indexOf(symbol) > 9 && ORDER.indexOf(symbol) < 13) {
                        text2.innerHTML = (ORDER.indexOf(symbol) + 1).toString() + "st ";
                    }

                    var word_block = document.getElementById("word-block");
                    if (word_block.hasChildNodes()) {
                        while (word_block.hasChildNodes()) {
                            word_block.removeChild(word_block.firstChild)
                        }
                    }
                    var dottie = returnPerfects(symbol);
                    var random100 = [];
                    var size = 0;
                    if (dottie.length > 100) {
                        while (size < 100) {
                            var randomNumber = Math.floor(Math.random() * dottie.length);
                            if (!random100.includes(dottie[randomNumber])) {
                                random100.push(dottie[randomNumber]);
                                size++;
                            }
                        }
                    }
                    else {
                        random100 = dottie;
                    }
                    var hello = random100.length;
                    for (var i = 0; i < random100.length; i++) {
                        var word = document.createElement("span");
                        word.className = "word-format";
                        var notHighlighted1 = document.createElement("span");
                        notHighlighted1.style.color = "white";
                        notHighlighted1.innerHTML = "";
                        var notHighlighted2 = document.createElement("span");
                        notHighlighted2.style.color = "white";
                        notHighlighted2.innerHTML = "";
                        var highlighted = document.createElement("span");
                        highlighted.style.color = "gold";
                        highlighted.style.fontWeight = "bold";
                        var chemspelling = chemspell(random100[i].toString());
                        var indexSymbol = chemspelling.indexOf(symbol);
                        for (var j = 0; j < chemspelling.length; j++) {
                            if (j < indexSymbol) {
                                notHighlighted1.innerHTML += chemspelling[j];
                            }
                            if (j > indexSymbol) {
                                notHighlighted2.innerHTML += chemspelling[j];
                            }
                            else {
                                highlighted.innerHTML = chemspelling[j];
                            }
                        }
                        word.appendChild(notHighlighted1);
                        word.appendChild(highlighted);
                        word.appendChild(notHighlighted2);
                        word_block.appendChild(word);
                    }
                    
                    var andMore = document.createElement("div");
                    andMore.style.fontSize = "25px";
                    andMore.style.margin = "10px";
                    andMore.innerHTML = "... and more!";
                    if (hello === 100) {
                        word_block.appendChild(andMore);
                    }
                    var learnMore = document.getElementById("learn-more");
                    learnMore.innerHTML = "Click here to learn more about " + element + "!";
                }
            }
            if (isPerfect) {
                span.style.border = "3px solid gold";
                span.style.cursor = "pointer";
                span.onmouseover = function() {
                    this.style.background = "gold";
                    this.style.transition = "0.3s";
                }
                span.onmouseleave = function() {
                    this.style.background = "transparent";
                    this.style.transition = "0.3s";
                }
            }
            divNumber.style.position = "relative";
            divNumber.style.fontSize = "12px";
            divNumber.style.top = "5%";
            divNumber.innerHTML = number;
            span.appendChild(divNumber);

            divSymbol.style.position = "relative";
            divSymbol.style.fontSize = "30px";
            divSymbol.style.top = "17.5%";
            divSymbol.innerHTML = symbol;
            span.appendChild(divSymbol);

            divElement.style.position = "relative";
            divElement.style.fontSize = "12px";
            divElement.style.top = "25%";
            divElement.innerHTML = element;

            span.appendChild(divElement);
        }
        parent.appendChild(span);
    }

    if (text.length === 0) {
        parent.style.marginTop = "0px";
        parent.style.marginBottom = "0px";
        parent.style.height = "0";
    }
}

function displaySpellingMulti(text, fromDynamic) {
    let parent = document.getElementById("display-spell");
    if (parent.hasChildNodes()) {
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild)
        }
    }
    if (text.length > 0) {
        let tip = document.createElement("div");
        tip.style.textAlign = "center";
        tip.style.marginTop = "30px";
        tip.style.marginBottom = "20px";
        tip.style.fontSize = "15px";
        tip.style.color = "white";
        tip.innerHTML = "*Click an element to see which English words it appears in!*";
        parent.appendChild(tip);
    }

    if (fromDynamic) {
        displaySpelling(text);
    }
    else {
        let text_array = text.split(" ");
        for (var i = 0; i < text_array.length; i++) {
            let div = document.createElement("div");
            div.style.marginBottom = "25px";
            parent.appendChild(div);
            displaySpelling(text_array[i], false);
        }
    }

}

function expand_retract(arg) {
    if (arg === "e") {
        document.getElementById("display-spell").className = "expand";
    }
    else if (arg === "r") {
        document.getElementById("display-spell").className = "retract";
    }
}

function returnRandom() {
    var randomWord;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "../other/perfect_words.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var perfects = allText.split("\n");
                randomWord = perfects[Math.floor(Math.random() * perfects.length)];
            }
        }
    }
    rawFile.send(null);
    return randomWord;
}

var symbolsList = []

function dynamicDisplay(symbol) {
    changeToDouble = false;
    expand_retract("e");
    if (dynamic_spell_input.value.length === 0) {
        symbolsList = [];
    }
    let symbolsListString = "";
    symbolsList.push(symbol);
    dynamic_spell_input.value += symbolsList[symbolsList.length - 1];
    for (var i = 0; i < symbolsList.length; i++) {
        symbolsListString += symbolsList[i];
    }
    if (symbolsListString === dynamic_spell_input.value) {
        displaySpellingMulti(symbolsList, fromDynamic = true);
        dynamic_chemspell(symbolsList);
    }
    else {
        changetoDouble = true;
        displaySpellingMulti(chemspell(dynamic_spell_input.value), fromDynamic = true);
        dynamic_chemspell(chemspell(dynamic_spell_input.value));
    }
    changeToDouble = true;
}

function main() {
    dynamic_spell_input.addEventListener("keyup", function(e) {
        const entry = chemspell(dynamic_spell_input.value);
        dynamic_chemspell(entry);
        if (e.key === "Enter") {
            var arg;
            if (dynamic_spell_input.value.length === 0) {
                expand_retract("r");
                symbolsList = [];
            }
            else {
                expand_retract("e");
            }
            displaySpellingMulti(dynamic_spell_input.value);
        }
    })
    
    enter_input.addEventListener("click", function(e) {
        if (dynamic_spell_input.value.length === 0) {
            expand_retract("r");
        }
        else {
            expand_retract("e");
        }
        displaySpellingMulti(dynamic_spell_input.value);
    })

    random_input.addEventListener("click", function(e) {
        var randomWord = returnRandom();
        randomWord = randomWord.toString().toLowerCase();
        expand_retract("e");
        dynamic_spell_input.value = randomWord;
        dynamic_chemspell(chemspell(randomWord));
        displaySpellingMulti(randomWord);
    })
    symbolsList = [];
}

main();