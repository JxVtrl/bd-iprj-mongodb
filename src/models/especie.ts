import { Schema, models, model } from "mongoose"

const especieSchema = new Schema({
  codEspecie: {
    type: Number,
    ref: "Codigo da Espécie",
    // required: true,
  },

  nomeComum: {
    type: String,
    ref: "Nome da Espécie",
    required: true,
  },

  nomeCientifico: {
    type: String,
    ref: "Nome Científico da Espécie",
    required: true,
  },

  valor: {
    type: Number,
    ref: "Valor da Espécie",
    required: true,
  },
})

export const especie = models.especie || model("especie", especieSchema)
