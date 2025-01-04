import { NextResponse } from "next/server";
import Form from "@/models/Form";
import connectMongo from '@/libs/mongoose';

export async function POST(request) {
    console.log('Iniciando procesamiento de formulario'); // Debug

    try {
        console.log('Intentando conectar a la DB...'); // Debug
        await connectMongo();
        console.log('Conexión a DB exitosa'); // Debug
        
        const body = await request.json();
        console.log('Datos recibidos:', body); // Debug

        // Validación de campos
        const requiredFields = ['nombre', 'apellido', 'email', 'telefono', 'service', 'message'];
        const missingFields = requiredFields.filter(field => !body[field]);
        
        if (missingFields.length > 0) {
            console.log('Campos faltantes:', missingFields); // Debug
            return NextResponse.json(
                { error: `Campos requeridos faltantes: ${missingFields.join(', ')}` },
                { status: 400 }
            );
        }

        console.log('Intentando crear documento...'); // Debug
        const formData = await Form.create({
            nombre: body.nombre,
            apellido: body.apellido,
            email: body.email,
            telefono: body.telefono,
            servicio: body.service,
            mensaje: body.message
        });
        console.log('Documento creado exitosamente:', formData); // Debug

        return NextResponse.json(
            { message: "Formulario enviado exitosamente", data: formData },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error detallado:', {
            name: error.name,
            message: error.message,
            stack: error.stack,
            code: error.code
        });

        return NextResponse.json(
            { 
                error: "Error al procesar el formulario",
                details: error.message,
                type: error.name
            },
            { status: 500 }
        );
    }
}
