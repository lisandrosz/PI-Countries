const { Router } = require("express");
const {
  cargaBaseDatos,
  buscarPaisQuery,
  buscarPaises,
  crearActividad,
  buscarPaisPk,
} = require("../functions/utilities");
//////////////////////////////////////////////////////////////////////////////////////////////////////

let flag = true;
const router = Router();

router.get("/countries", async (req, res) => {
  const { name } = req.query;
  let response;
  try {
    // Me pregunto si hay info en la db
    if (flag) {
      await cargaBaseDatos();
      // Me pregunto si me pasaron el nombre por query
      if (name) {
        response = await buscarPaisQuery(name);
        flag = false;
        if (response.length < 1) throw new Error("Pais no encontrado");
      } else {
        response = await buscarPaises();
        flag = false;
      }
      res.status(200).json(response);
    } else {
      // Me pregunto si me pasaron el nombre por query
      if (name) {
        response = await buscarPaisQuery(name);
        if (response.length < 1) throw new Error("Pais no encontrado");
      } else {
        response = await buscarPaises();
      }
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/activities", async (req, res) => {
  try {
    const { name, dificult, duration, temp, idCountries } = req.body;
    const newActivity = await crearActividad(
      name,
      dificult,
      duration,
      temp,
      idCountries
    );
    res.status(200).json(newActivity);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/countries/:idPais", async (req, res) => {
  try {
    const { idPais } = req.params;
    const countryDetail = await buscarPaisPk(idPais);
    res.status(200).json(countryDetail);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
