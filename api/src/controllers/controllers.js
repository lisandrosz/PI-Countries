const axios = require("axios");
const { Country, Activities } = require("../db");
const { Sequelize, Op } = require("sequelize");

const cargaBaseDatos = async () => {
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
};

const buscarPaisQuery = async (name) => {
  let response = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return response;
  /* Otra opcion era usar el endpoint que proporciona la API, la cual tal vez nos da la posibilidad de un matcheo menos exacto, pero me gusto la idea de hacer todo desde la base de datos (para algo la tengo :) )
   */
};

const buscarPaises = async () => {
  let response = await Country.findAll({
    attributes: ["name", "continent", "image"],
  });
  return response;
};

const crearActividad = async (name, dificult, duration, temp, idCountries) => {
  const newActivity = await Activities.create({
    name,
    dificult,
    duration,
    temp,
  });
  await newActivity.addCountries(idCountries);
  return newActivity;
};

const buscarPaisPk = async (PK) => {
  const countryDetail = await Country.findByPk(PK, {
    include: {
      model: Activities,
      through: {
        attributes: [],
      },
    },
  });
  return countryDetail;
};

module.exports = {
  cargaBaseDatos,
  buscarPaisQuery,
  buscarPaises,
  crearActividad,
  buscarPaisPk,
};
