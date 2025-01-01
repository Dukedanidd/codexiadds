import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Volver
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Políticas de Privacidad de {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Políticas de Privacidad de CodexiaDDS

Fecha de vigencia: ${new Date().toISOString().split('T')[0]}

En CodexiaDDS, nos comprometemos a proteger la privacidad y seguridad de la información de nuestros clientes, usuarios y socios comerciales. Estas políticas de privacidad describen cómo recopilamos, utilizamos, compartimos y protegemos la información que obtenemos a través de nuestros servicios de desarrollo web profesional, inteligencia artificial, aprendizaje automático (Machine Learning), desarrollo de aplicaciones y consultoría tecnológica.

1. Información que recopilamos

Recopilamos información de diferentes maneras para ofrecer servicios personalizados y de alta calidad. Esta información incluye:

1.1. Información proporcionada por el usuario
- Nombre, dirección de correo electrónico, número de teléfono y otros datos de contacto.
- Información relacionada con su empresa o proyecto.
- Datos de pago o facturación.

1.2. Información recopilada automáticamente
- Direcciones IP.
- Datos sobre el uso de nuestros sitios web o aplicaciones.
- Cookies y tecnologías similares para rastrear el comportamiento del usuario en nuestro sitio web.

1.3. Información de terceros
Podemos recibir información de socios comerciales o proveedores externos, siempre cumpliendo con las leyes aplicables.

2. Cómo usamos la información
Utilizamos la información recopilada para:

- Proporcionar y mejorar nuestros servicios.
- Personalizar la experiencia del usuario.
- Gestionar pagos y facturación.
- Responder a consultas y proporcionar soporte al cliente.
- Enviar comunicaciones relacionadas con nuestros servicios, incluidas ofertas y actualizaciones.
- Cumplir con obligaciones legales y prevenir actividades fraudulentas.

3. Compartir información
CodexiaDDS no venderá, alquilará ni compartirá su información personal con terceros para fines comerciales sin su consentimiento, salvo en los siguientes casos:

- Proveedores de servicios: Compartimos información con terceros que nos ayudan a ofrecer nuestros servicios, como procesadores de pago, servicios de alojamiento web y herramientas de análisis.
- Cumplimiento legal: Divulgaremos información si es requerido por la ley o para proteger nuestros derechos legales.
- Fusiones o adquisiciones: En caso de una fusión, adquisición o venta de activos, su información podría transferirse a la nueva entidad.

4. Seguridad de la información
Utilizamos medidas de seguridad técnicas, administrativas y físicas para proteger su información contra accesos no autorizados, pérdida, robo o alteración. Sin embargo, ningún sistema de transmisión o almacenamiento es completamente seguro.

5. Derechos del usuario

Como usuario, usted tiene derecho a:
- Acceder, actualizar o corregir su información personal.
- Solicitar la eliminación de sus datos personales, sujeto a las obligaciones legales y contractuales.
- Optar por no recibir comunicaciones promocionales.

Para ejercer estos derechos, contáctenos en contact@codexiadds.com.

6. Uso de cookies y tecnologías similares
Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el rendimiento del sitio. Puede ajustar las configuraciones de cookies en su navegador en cualquier momento.

7. Transferencias internacionales de datos
CodexiaDDS podría transferir su información a servidores ubicados fuera de su país de residencia. Nos aseguramos de que estas transferencias cumplan con las leyes de protección de datos aplicables.

8. Políticas de privacidad de terceros
Nuestra plataforma podría contener enlaces a sitios web o servicios de terceros. No somos responsables de las prácticas de privacidad de estos terceros y recomendamos revisar sus políticas de privacidad.

9. Cambios a estas políticas de privacidad
CodexiaDDS se reserva el derecho de actualizar estas políticas de privacidad en cualquier momento. Notificaremos cualquier cambio significativo a través de nuestro sitio web o por correo electrónico.

10. Contacto
Si tiene preguntas o inquietudes sobre nuestras políticas de privacidad, puede contactarnos en:

- Correo electrónico: contact@codexiadds.com
- Dirección: [Su dirección física]
- Teléfono: [Su número de teléfono]

CodexiaDDS agradece su confianza y se compromete a proteger su información. ¡Gracias por trabajar con nosotros!`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
