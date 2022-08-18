<p align="center">
   <img src="https://i.ibb.co/VtVzF88/Logo-fome-solida-ria.png" alt="Logo-fome-solida-ria" border="0" width="200px"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Igor Corbari Brasil-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/igorbrasilc/FomeSolidaria_back?color=4dae71&style=flat-square" />
</p>

<p align = "center">
   <a href="https://github.com/igorbrasilc/FomeSolidaria_front">Front-end repository</a>
   <a href="https://fome-solidaria.vercel.app/">Front-end deploy</a>
</p>

##  :clipboard: Description

This is an authoral project based on <a href="https://igrejacasadooleiro.com.br/fome-solid%C3%A1ria">Fome Solidária charity project</a> from Igreja Casa Do Oleiro. 
People that attend the church donate food to supply people in need, and the control of the inventory was made with an Excel sheet. 
*This app* is meant to replace that for a more user-friendly interface and better organization. Through it, you can keep track of the total amount of donations, register new
people in the database and new donations. Check for family members and get a timeline of the number of donations registered to that family.

**PS.: the project is meant to be used only by admins, so there is no sign up interface. If you want to check it out just login by:**

```
login: admin
password: admin
```
***

## :computer:	 Technologies

- REST APIs
- TypeScript
- JWTs & refresh tokens
- Node.js
- Express.js
- SQL with PostgreSQL
- Prisma

***

## :rocket: Routes

```yml
POST /sign-in
    - Route to make login
    - headers: {}
    - body:{
        "username": "Lorem ipsum",
        "password": "loremipsum"
}
```
    
```yml 
GET /categories/:category (authenticated)
    - Route to get the count of donations by specific category
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /donee/:id/new-donation (authenticated)
    - Route to create a new donation for a specific donee
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        donation: {
        quantity: number;
        description: string | null;
        category: Categories;
        };
      note: {
        note: string | null;
        reminder: Date | null;
      };
    }
``` 

```yml
POST /new-donee (authenticated)
    - Route for creating a new donee
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        donee: {
          name: string;
          birthdate: Date;
          contact: string | null;
          occupation: string | null;
          rg: string | null;
          cpf: string | null;
        };
        spouse: {
          name: string;
          birthdate: Date;
          contact: string | null;
          occupation: string | null;
          rg: string | null;
          cpf: string | null;
        };
        colleagues: {
          name: string;
          contact: string | null;
          occupation: string | null;
          rg: string | null;
          cpf: string | null;
        }[];
        children: {
          name: string;
          birthdate: Date | null;
          contact: string | null;
        }[];
        address: {
          street: string;
          district: string;
          number: string;
          state: string | null;
          city: string | null;
        };
        note: {
          note: string;
          reminder: Date | null;
        };
    }
```
 
```yml
GET /donee/:id || /spouse/:id || /colleague/:id
    - Route to get info from donee, spouse or colleague
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 
```yml
GET /search?input=your_query
    - Route to get info from donee, spouse or colleague
    - headers: { "Authorization": "Bearer $token" }
    - query string
    - body: {}
```
***

## 🏁 Running the application

This project was made using my [TypeScript Template](https://github.com/igorbrasilc/template-ts-prisma-jest)

First, clone this repo into your machine using:

```
git clone https://github.com/igorbrasilc/FomeSolidaria_back.git
```

After, inside the folder created, run the following command to install dependencies: 

```
npm install
```

After that you can run the development server by 
```
npm run dev //or npm start
```

:stop_sign: Don't forget to repeat the above steps with the [Front-end Repository](https://github.com/igorbrasilc/FomeSolidaria_front) which contains the interface of the application.
