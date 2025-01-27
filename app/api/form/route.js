import { NextResponse } from "next/server";
import Form from "@/models/Form";
import connectMongo from '@/libs/mongoose';

export async function POST(request) {
    try {
        await connectMongo();
        
        const body = await request.json();

        // Validación más estricta de campos
        const requiredFields = ['nombre', 'apellido', 'email', 'telefono', 'service', 'message'];
        for (const field of requiredFields) {
            if (!body[field] || body[field].trim() === '') {
                return NextResponse.json(
                    { error: `El campo ${field} es requerido` },
                    { status: 400 }
                );
            }
        }

        // Validación básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: "Formato de email inválido" },
                { status: 400 }
            );
        }

        const formData = new Form({
            nombre: body.nombre.trim(),
            apellido: body.apellido.trim(),
            email: body.email.trim().toLowerCase(),
            telefono: body.telefono.trim(),
            servicio: body.service.trim(),
            mensaje: body.message.trim()
        });

        await formData.save();

        return NextResponse.json(
            { message: "Formulario enviado exitosamente", data: formData },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error en el servidor:', error);
        
        // Manejo específico de errores de MongoDB
        if (error.name === 'MongooseError' || error.name === 'MongoError') {
            return NextResponse.json(
                { error: "Error de conexión con la base de datos" },
                { status: 503 }
            );
        }

        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}

// Agregar configuración de CORS
export async function OPTIONS(request) {
    return NextResponse.json(
        {},
        {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        }
    );
}

// Configuración de runtime
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
