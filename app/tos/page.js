import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Términos y Condiciones de CodexiaDDS

Fecha de vigencia: ${new Date().toISOString().split('T')[0]}

Bienvenido a CodexiaDDS. Estos Términos y Condiciones regulan el acceso y uso de nuestros servicios de desarrollo web profesional, inteligencia artificial, aprendizaje automático (Machine Learning), desarrollo de aplicaciones y consultoría tecnológica. Al utilizar nuestros servicios, usted acepta los presentes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, le solicitamos no utilizar nuestros servicios.

1. Definiciones

- "CodexiaDDS": Se refiere a nuestra empresa, sus empleados, contratistas, afiliados y representantes.
- "Usuario": Toda persona o entidad que accede o utiliza nuestros servicios.
- "Servicios": Todos los productos y servicios proporcionados por CodexiaDDS, incluidos desarrollo de software, consultoría tecnológica y soluciones personalizadas.

2. Uso de los servicios

2.1. Elegibilidad
Para utilizar nuestros servicios, debe:
- Tener al menos 18 años o la edad legal aplicable en su jurisdicción.
- Proporcionar información verídica y completa al registrarse o interactuar con nuestros servicios.

2.2. Uso permitido
El usuario se compromete a:
- Utilizar los servicios solo para fines legales y de acuerdo con estos términos.
- No reproducir, duplicar, vender o explotar cualquier parte de nuestros servicios sin nuestro consentimiento expreso.
- No realizar actividades que interfieran con la funcionalidad de nuestros servicios o violen derechos de terceros.

3. Proyectos y entregables

3.1. Descripción de servicios
CodexiaDDS proporcionará servicios según lo especificado en acuerdos individuales con cada cliente. Los términos específicos de los proyectos serán detallados en contratos o propuestas separados.

3.2. Modificaciones
Cualquier modificación a los entregables o servicios contratados deberá ser acordada por ambas partes y podría generar costos adicionales.

3.3. Propiedad intelectual
Salvo acuerdo en contrario, todo el software, código, diseños y otros materiales creados por CodexiaDDS son de nuestra propiedad intelectual hasta que el cliente realice el pago completo y final.

4. Tarifas y pagos

4.1. Facturación
CodexiaDDS proporcionará facturas claras y detalladas antes o después de la entrega de los servicios, según lo acordado.

4.2. Retrasos en pagos
Los pagos atrasados podrán estar sujetos a cargos por mora. CodexiaDDS se reserva el derecho de suspender los servicios en caso de impago.

4.3. Reembolsos
No se ofrecerán reembolsos por servicios completados, salvo que se especifique lo contrario en el contrato correspondiente.

5. Limitaciones de responsabilidad

5.1. Exclusión de garantías
CodexiaDDS proporciona sus servicios "tal cual" y no garantiza resultados específicos, salvo los expresamente indicados en los contratos.

5.2. Límites de responsabilidad
CodexiaDDS no será responsable de:
- Daños indirectos, incidentales o consecuenciales derivados del uso de nuestros servicios.
- Pérdida de datos, ingresos o negocios por causas fuera de nuestro control razonable.

6. Terminación

6.1. Por el usuario
El usuario puede terminar su relación con CodexiaDDS notificándolo por escrito. Las tarifas pendientes seguirán siendo exigibles.

6.2. Por CodexiaDDS
CodexiaDDS puede suspender o terminar el acceso a los servicios si el usuario incumple estos Términos y Condiciones.

7. Confidencialidad
CodexiaDDS y el usuario se comprometen a proteger cualquier información confidencial compartida durante la relación comercial.

8. Ley aplicable
Estos Términos y Condiciones se regirán por las leyes de [país o estado correspondiente]. Cualquier disputa será resuelta en los tribunales competentes de dicha jurisdicción.

9. Cambios a los términos y condiciones
CodexiaDDS se reserva el derecho de actualizar estos Términos y Condiciones en cualquier momento. Notificaremos a los usuarios sobre cambios significativos a través de nuestro sitio web o por correo electrónico.

10. Contacto
Para cualquier duda sobre estos Términos y Condiciones, contáctenos en:

- Correo electrónico: contact@codexiadds.com
- Dirección: [Su dirección física]
- Teléfono: [Su número de teléfono]

Gracias por elegir a CodexiaDDS. Valoramos su confianza y estamos comprometidos con su éxito.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
