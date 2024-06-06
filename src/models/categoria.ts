import { Schema, models, model } from "mongoose"

const categoriaSchema = new Schema({
  
  codCategoria: {
    
    type: Number,
    ref: "Codigo da Categoria",
    required: true,

  },

  nome: {

    type: String,
    ref: "Nome da Categoria"
    
  }


})

export const categoria = models.categoria || model("categoria", categoriaSchema)