import { Schema, models, model } from "mongoose"

const tipoPavimentoSchema = new Schema({
  
  codTipoPavi: {
    
    type: Number,
    ref: "Codigo do Tipo de Pavimento",
    // required: true,

  },

  desc: {
    
    type: String,
    ref: "Descrição do Tipo de Pavimento",
    required: true

  }

})

export const tipoPavimento = models.tipoPavimentoSchema || model("tipoPavimento", tipoPavimentoSchema)
