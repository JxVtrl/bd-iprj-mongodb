import { Schema, models, model } from "mongoose"

const rodoviaSchema = new Schema({
  
  codRodovia: {
    
    type: Number,
    ref: "Codigo da Rodovia",
    // required: true,

  },

  nome: {
    
    type: String,
    ref: "Nome da Rodovia",
    required: true

  }

})

export const situacaoFinalAnimal = models.situacaoFinalAnimal || model("situacaoFinalAnimal", rodoviaSchema)