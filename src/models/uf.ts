import { Schema, models, model } from "mongoose"

const ufSchema = new Schema({
  codUf: {
    type: Number,
    ref: "Codigo da UF",
    // required: true,
  },

  nome: {
    type: String,
    ref: "Nome da UF",
    required: true,
  },
})

export const uf = models.uf || model("UF", ufSchema)
// export const Ticket = models.Ticket || model("Ticket", ticketSchema)
