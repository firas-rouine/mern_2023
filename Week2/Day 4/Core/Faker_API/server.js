const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const { faker } = require('@faker-js/faker');

const userObject = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastName:faker.person.lastName(),
        firstName:faker.person.firstName(),
        _id: faker.string.uuid(),
    };
    return newFake;
};

const companyObject =()=>{
    
    const newFake = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address :{
            street: faker.location.street(),
            city:faker.location.city(),
            state:faker.location.state(),
            zipCode:faker.location.zipCode(),
            country:faker.location.country()
        }
    };
    return newFake;
}

function createUserCompany(userObject, companyObject) {
    const userCompany = { ...userObject, ...companyObject };
    return userCompany;
  }
  


const newFakeUserObject = userObject();
// console.log(newFakeUserObject);
const newFakeCompany = companyObject();
// console.log(newFakeCompany);
const newUserCompany = createUserCompany(newFakeUserObject, newFakeCompany);
console.log(newUserCompany);

// READ new User
app.get("/api/users/new", (req, res)=>{
    res.json(newUserCompany)
 })
// READ new Company
app.get("/api/companies/new", (req, res)=>{
    res.json(newFakeCompany)
 })
 // READ new User/Company
 app.get("/api/user/company", (req, res)=>{
    res.json(newUserCompany)
 })


app.listen(port, () => console.log(`Listening on port: ${port} 🚀`));