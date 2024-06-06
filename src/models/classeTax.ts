import { Schema, models, model } from "mongoose"

const classeTaxonomicaSchema = new Schema({
  
  codClasseTax: {
    
    type: Number,
    ref: "Codigo da Classe Taxonômica",
    // required: true,

  },

  nome: {
    
    type: String,
    ref: "Nome da Classe Taxonômica",
    required: true

  }

})

export const classeTaxonomica = models.classeTaxonomica || model("classeTaxonomica", classeTaxonomicaSchema)