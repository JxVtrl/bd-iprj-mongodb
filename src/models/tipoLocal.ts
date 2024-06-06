import { Schema, models, model } from "mongoose"

const tipoLocalSchema = new Schema({
  
  codTipoLocal: {
    
    type: Number,
    ref: "Codigo do Tipo de Local",
    // required: true,

  },

  desc: {
    
    type: String,
    ref: "Descrição do Tipo de Local",
    required: true

  }

})

export const tipoLocal = models.tipoLocal || model("tipoPavimento", tipoLocalSchema)