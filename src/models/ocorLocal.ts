import { Schema, models, model } from "mongoose"

const ocorrenciaLocalSchema = new Schema({
  
  codTipoLocal: {
    
    type: Number,
    ref: "Codigo do Tipo de Local",
    required: true,

  },

  codOcorrencia: {
    
    type: Number,
    ref: "Codigo de Identificação da Ocorrência",
    required: true

  }

})

export const ocorrenciaLocal = models.ocorrenciaLocal || model("ocorrenciaLocal", ocorrenciaLocalSchema)