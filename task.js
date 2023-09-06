console.group('slaptazodis')
// SLAPTAZODIS


function checkPassword() {
    let password ='sdfgdggdasdadad#agdgdgdgdgf'
    let originalPassword = password.trim()   
     
    if (!password.includes('#')){
        console.log('Slaptazodis privalo tureti grotazymes')
    } else if (password.length < 16){
        console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
    } else if (password.length > 20){
        console.log('Slaptažodis tinkamas')
    } else {
        console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
    }

}

checkPassword()

console.groupEnd()

console.group('amzius')
//AMZIUS

function checkAge(age) {

    // let age = 121
    
    if (isNaN(age)){
        console.log('Netinkamai nurodytas amzius, amzius privalo buti skaicius')
    } else if(age < 0){
        console.log('Ivestas amzius yra per mazas')
    } else if (age < 6){
        console.log(' I mokykla neina')
    } else if (age === 6){
        console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
    } else if (age < 10){
        console.log('Eina i pradine klase')
    } else if (age === 10){
        console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
    } else if (age < 14){
        console.log('Eina i pagrindine')
    } else if (age === 14){
        console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
    } else if (age < 18){
        console.log('Eina i gimnazija')
    } else if (age === 18){
        console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
    } else if (age >= 19){
        console.log('Mokykla baige')
    } else if (age >= 120){
        console.log('Ivestas amzius yra per didelis')
    } else {
        console.log('Nurodytas amzius nera tinkamas')
    }
}

checkAge(18)
checkAge(6)
checkAge(22)


console.groupEnd()

console.group('galvosukis')
//GALVOSUKIS

function yourAnswer1(playerAnswer11, playerAnswer12) {
    // Artimiausia nuo Žemės esanti Žvaigždė?
    let correctAnswer11 = 'sun'
    // let playerAnswer11 = 'sun'
    
    // 123 + 456 = 579
    let correctAnswer12 = 579
    // let playerAnswer12 = 579
    
    //PIRMAS LYGIS
    if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
        console.log('Patekai i kita lygi: abu atsakymai teisingi.')
    } else if(correctAnswer11 === playerAnswer11){
        console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
    } else if(correctAnswer12 === playerAnswer12){
        console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
    } else{
        console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
    }

}

yourAnswer1('sun', 579)


function yourAnswer2(playerAnswer21, playerAnswer22) {
    //ANTRAS LYGIS
    // Farthest planet from the sun in the solar system
    let correctAnswer21 = 'neptune'
    
    // 100 x 100
    let correctAnswer22 = 10000
    
    if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
        console.log('Patekai į kitą lygį, abu atsakymai buvo teisingi')
    } else if(correctAnswer21 === playerAnswer21){
        console.log('Nepatekai į kitą lygį, antras atsakymas buvo neteisingas')
    } else if( playerAnswer22 === correctAnswer22){
        console.log('Nepatekai į kitą lygį, pirmas atsakymas buvo neteisingas')
    } else{
        console.log('Nepatekai į kitą lygį, abu atsakymai buvo neteisingi')
    }

}
yourAnswer2('neptune', 10000)


function yourAnswer3(playerAnswer31, playerAnswer32, playerAnswer33) {
    /// TRECIAS LYGIS
    // 10 x 10 x 10
    let correctAnswer31 = 1000
    
    // Closest planet to the sun
    let correctAnswer32 = 'mercury'
    
    // Which planet has the largest volcano in the solar system?
    let correctAnswer33 = 'mars'
    
    if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33){
        console.log('Pateikai į kitą lygį, visi atsakymai buvo teisingi')
    } else if( correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32){
        console.log('Pateikai į kitą lygį, trečias atsakymas buvo neteisingas')
    } else if(correctAnswer31 === playerAnswer31 && correctAnswer33 === playerAnswer33){
        console.log('Pateikai į kitą lygį, antras atsakymas buvo neteisingas')
    } else if(correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33){
        console.log('Pateikai į kitą lygį, pirmas atsakymas buvo neteisingas')
    } else if(correctAnswer31 === playerAnswer31){
        console.log('Tik pirmas klausimas buvo atsakytas teisingai')
    } else if(correctAnswer32 === playerAnswer32){
        console.log('Tik antras klausimas buvo atsakytas teisingai')
    } else if(correctAnswer33 === playerAnswer33){
        console.log('Tik trečias klausimas buvo atsakytas teisingai')
    } 
    else{
        console.log('Nepatekai į kitą lygį, visi atsakymai buvo neteisingi')
    }

}
yourAnswer3(1000, 'mercury', 'mars')

console.groupEnd()


console.group('pasisveikinimas')
//PASISVEIKINIMAS

function greeting() {
    let isLoggedIn = true
    let userName = 'John'
    let time = 13
    let isBirthday = true
    
    if (isLoggedIn && isBirthday ){
        if (time > 4 && time < 13){
            console.log('Good Morning, ' + userName , 'and have a great Birthday!')
        } else if (time > 12 && time < 19){
            console.log('Good Afternoon, ' + userName , 'and have a great Birthday!')
        } else if (time > 18 && time < 24 && time || time > -1 && time < 5){
            console.log('Good Evening, ' + userName , 'and have a great Birthday!')
        }
    } else if (isLoggedIn){
        if (time > 4 && time < 13){
            console.log('Good Morning, ' + userName)
        } else if (time > 12 && time < 19){
            console.log('Good Afternoon, ' + userName)
        } else if (time > 18 && time < 24 && time || time > -1 && time < 5){
            console.log('Good Evening, ' + userName)
        }
    }
    
    if (!isLoggedIn){
        if (time > 4 && time < 13){
            console.log('Good Morning,')
        } else if (time > 12 && time < 19){
            console.log('Good Afternoon,')
        } else if (time > 18 && time < 24 && time || time > -1 && time < 5){
            console.log('Good Evening,')
        }
    }

}

greeting()

console.groupEnd()