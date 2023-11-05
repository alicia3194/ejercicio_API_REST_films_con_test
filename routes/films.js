const express = require("express");
const router = express.Router();
const getFilms = require("../utils/fetchFilms");

const filmsData = [];

router.get("/api/films/:title", async (req, res) => {
  const title = req.params;
  try {
    const filmsDetails = await getFilms(title);
    if (filmsDetails && filmsDetails.Title) {
      res.status(200).json(filmsDetails);
    } else {
      res.status(404).json();
    }
  } catch (error) {
    res.status(500).json();
  }
});

// POST
router.post("/api/films", (req, res) => {
  const newFilm = req.body;
  filmsData.push(newFilm);
  res.status(200).json();
});
