import { Schema, models, model } from "mongoose"

const categoriaLocalSchema = new Schema({
  codCategoriaLocal: {
    type: Number,
    ref: "Codigo da Categoria Local",
    required: true,
  },
})

export const categoriaLocal =
  models.categoriaLocal || model("categoriaLocal", categoriaLocalSchema)
