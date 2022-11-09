const { Router } = require("express");
const { Country, Activities } = require("../db");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
let flag = true;
const router = Router();

/*
En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
Obtener un listado de los paises.
*/

router.get("/countries", async (req, res) => {
  try {
    if (flag) {
      let countries = [];
      await axios.get("https://restcountries.com/v3.1/all").then((response) => {
        countries = response.data;
      });
      countries = countries.map((country) => {
        return {
          id: country.cca3,
          name: country.name.common,
          image: country.flags.png,
          continent: country.region,
          capital: country.capital ? country.capital[0] : "N/A",
          subregion: country.subregion ? country.subregion : "N/A",
          area: country.area,
          population: country.population,
        };
      });
      await Country.bulkCreate(countries);
      const response = await Country.findAll({
        attributes: ["name", "continent", "image"],
      });
      flag = false;
      res.status(200).json(response);
    } else {
      const response = await Country.findAll({
        attributes: ["name", "continent", "image"],
      });
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/activities", async (req, res) => {
  try {
    const { name, dificult, duration, temp, idCountries } = req.body;
    const newActivity = await Activities.create({
      name,
      dificult,
      duration,
      temp,
    });
    await newActivity.addCountries(idCountries);
    res.status(200).json(newActivity);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
