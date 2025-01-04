import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true
  },
  apellido: {
    type: String,
    required: [true, 'El apellido es requerido'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'El email es requerido'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Por favor ingrese un email válido']
  },
  telefono: {
    type: String,
    required: [true, 'El teléfono es requerido'],
    trim: true
  },
  servicio: {
    type: String,
    required: [true, 'El servicio es requerido'],
    enum: [
      'Desarrollo web profesional',
      'Inteligencia artificial y ML',
      'Desarrollo de aplicaciones',
      'Consulta tecnológica'
    ]
  },
  mensaje: {
    type: String,
    required: [true, 'El mensaje es requerido'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);

export default Form;
