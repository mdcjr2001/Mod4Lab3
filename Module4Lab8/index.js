// Lab 8


// function brth(s1, s2) {
//     const [birthDay, birthMonth] = s1.split(".");
 
//     const [currentDay, currentMonth, currentYear] = s2.split(".");
 
//     const currentDate = new Date(currentYear, currentMonth - 1, currentDay);
 
//     const nextBirthday = new Date(currentYear, birthMonth - 1, birthDay);
 
//     const timeDifference = nextBirthday.getTime() - currentDate.getTime();
 
//     const daysUntilBirthday = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
 
//     return daysUntilBirthday;
// }
 
// const daysUntilBirthday = brth("02.07", "21.11.2023");
// console.log(`The number of days until the birthday is: ${daysUntilBirthday}`);


function birthDate(s1, s2) {
    const [birthYear, birthDay, birthMonth] = s1.split(".");

    const [currentDay, currentMonth, currentYear] = s2.split(".");

    const currentDate = new Date(currentYear, currentMonth - 1, currentDay);

    const birthDate = new Date(birthYear, birthDay, birthMonth);

    const timeDifference = birthDate.getTime() - currentDate.getTime()

    const timeDiff = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));


    return timeDifference;
}

const timeDiff = birthDate("2001.02.07", "22.11.2023");
console.log(`The number of days since my birthday is: ${timeDiff}`)