const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const moreThanOneLang = users.filter((user) => user.languages.length >= 3)
// console.log(moreThanOneLang);

const emailAddresses = users.map((user) => user.email)
// console.log(emailAddresses);

const totalYearsOfExperience = users.reduce((previousValue, currentValue) => previousValue + currentValue.yearsOfExperience,0)
// console.log(totalYearsOfExperience);

const averageYearsOfExperience = totalYearsOfExperience / users.length;
// console.log(averageYearsOfExperience);

const longestEmailAddress = users.reduce((previousValue, currentValue) => {
    if(currentValue.email.length > previousValue.length)
        previousValue = currentValue.email
    return previousValue
    },"")
// console.log(longestEmailAddress);

const allInstructors = users.reduce((previousValue,currentValue) => previousValue + currentValue.name,"");
console.log(allInstructors);