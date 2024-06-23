import { Schema, models, model } from "mongoose"

const situacaoFinalAnimalSchema = new Schema({
  codSituacao: {
    type: Number,
    ref: "Codigo da Situação do Animal",
    // required: true,
  },

  desc: {
    type: String,
    ref: "Descrição da Situação do Animal",
    required: true,
  },
})

export const situacaoFinalAnimal =
  models.situacaoFinalAnimal ||
  model("situacaoFinalAnimal", situacaoFinalAnimalSchema)
