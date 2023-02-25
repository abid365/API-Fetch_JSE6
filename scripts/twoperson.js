const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
    {
    name: {
    common: "John",
    fullName: ["John", "Doe"]
    },
    age: 32,
    isMale: false,
    address: {
    street: "13/A St Joseph",
    house: 10,
    },
    },
    {
    name: {
    common: "Humayoun",
    fullName: ["Humayoun", "Kabir"]
    },
    age: 33,
    isMale: false,
    address: {
    street: "13/A St Lucia",
    house: 11,
    },
    },
    ]
    };

    console.log(person);

    function onLoad(){
        const numberOfPerson = person.found;
        console.log(numberOfPerson);
        const personCounter = document.getElementById('person-count');
        personCounter.innerText = numberOfPerson ;

    }

    onLoad();

    const personName0 = () => {
       const firstPerson = document.getElementById('person-name');
       const firstPersonName = person.result[0].name.common;
       firstPerson.innerText = firstPersonName;
       console.log(firstPersonName);
       const divOne = document.getElementById('body-text');
       divOne.innerHTML = `
       <p class="card-text">age: ${person.result[0].age}</p>
       <p class="card-text">street: ${person.result[0].address.street}, House No: ${person.result[0].address.house}</p>
       `
    
    }

    personName0();


    const personName1 = () => {
        const secondPerson = document.getElementById('person-name2');
        const secondPersonName = person.result[1].name.common;
        console.log(secondPersonName);
        secondPerson.innerText = secondPersonName;
        const divTwo = document.getElementById('body-text2');
        divTwo.innerHTML = `
        <p class="card-text">age: ${person.result[1].age}</p>
        <p class="card-text">street: ${person.result[1].address.street}, House No: ${person.result[1].address.house}</p>
        `


    }

    personName1();