import { Schema, models, model } from "mongoose"

const ocorrenciaSchema = new Schema({
  codOcorrencia: {
    type: Number,
    ref: "Codigo da Ocorrencia",
    // required: true,
  },

  km: {
    type: Number,
    ref: "KM em que ocorreu o atropelamento",
    required: true,
  },

  numeroDaPista: {
    type: Number,
    ref: "Número da Pista",
    required: true,
  },

  velocidadeMaxima: {
    type: Number,
    ref: "Velocida Máxima Permitida naquele trecho",
    required: true,
  },

  dataHora: {
    type: Date,
    ref: "Momento em que ocorreu o atropelamento",
    required: true,
  },

  haviaAgua: {
    type: Boolean,
    ref: "Presença de água no local",
    required: true,
  },

  codCategoriaLocal: {
    type: Number,
    ref: "Codigo da Categoria Local",
    required: true,
  },

  codSituacao: {
    type: Number,
    ref: "Codigo da Situação do Animal",
    required: true,
  },

  codRodovia: {
    type: Number,
    ref: "Codigo da Rodovia",
    required: true,
  },

  codTipoLocal: {
    type: Number,
    ref: "Codigo do Tipo de Local",
    required: true,
  },

  codTipoPavi: {
    type: Number,
    ref: "Codigo do Tipo de Pavimento",
    required: true,
  },
})

export const ocorrencia =
  models.ocorrencia || model("ocorrencia", ocorrenciaSchema)
