/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.get("api/v1/resources", async () => {
  return {
    data: [
      {
        id: 1,
        name: "Covid19 Tracker",
        url: "https://rapidapi.com/atc-atc-default/api/covid19-tracker"
      },
      {
        id: 2,
        name: "COVID-19 Coronavirus Statistics",
        url: "https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics"
      },
      {
        id: 3,
        name:
          "Coronavirus stats by country, collected from several reliable sources",
        url: "https://rapidapi.com/Gramzivi/api/covid-19-data"
      },
      {
        id: 4,
        name: "AI based diagnosis endpoint",
        url: "http://www.endlessmedical.com/"
      }
    ]
  };
});

Route.resource("post", "PostController");
