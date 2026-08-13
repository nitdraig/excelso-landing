/**
 * Legal copy for /terms and /privacy (EN + ES).
 * Excelso: multiple apps (Open / Vault), Auth0 + Google sign-in, Argentina + international framing.
 * Not a substitute for counsel—review entity name, jurisdiction, and contact before production.
 */

export type LegalArticle = {
  readonly title: string;
  readonly paragraphs: readonly string[];
};

export type LegalTermsPrivacy = {
  readonly termsTitle: string;
  readonly privacyTitle: string;
  readonly termsLastUpdated: string;
  readonly privacyLastUpdated: string;
  readonly termsIntro: string;
  readonly privacyIntro: string;
  readonly supportEmail: string;
  readonly backToHome: string;
  readonly alsoReadIntro: string;
  readonly contactLabel: string;
  readonly termsArticles: readonly LegalArticle[];
  readonly privacyArticles: readonly LegalArticle[];
};

export const legalTermsPrivacyEn: LegalTermsPrivacy = {
  termsTitle: "Terms of Service",
  privacyTitle: "Privacy Policy",
  termsLastUpdated: "Last updated: May 3, 2026",
  privacyLastUpdated: "Last updated: May 3, 2026",
  termsIntro:
    'These Terms of Service (“Terms”) govern your access to and use of websites, applications, APIs, and related digital services operated under the Excelso brand (collectively, the “Services”). The Services may include offerings aimed at the community and open ecosystem (“Excelso Open”) and offerings aimed at private, corporate, or strategic clients (“Excelso Vault”). By signing in (including with Google or other providers we enable through Auth0 or similar identity platforms) or using any Service, you agree to these Terms.',
  privacyIntro:
    'This Privacy Policy explains how Excelso (“we”, “us”, “our”) collects, uses, stores, and shares personal information when you use our websites, applications, and related services—including when you authenticate with Google or other providers for one or more applications under the Excelso umbrella. We do not use your personal information for spam, unsolicited bulk marketing unrelated to your relationship with us, or malicious purposes. This Policy is designed for transparency and aligns with the Argentine Personal Data Protection Act (Law 25.326) and its regulations, as well as principles reflected in the GDPR and comparable frameworks where they apply to you.',
  supportEmail: "admin@excelso.space",
  backToHome: "Back to home",
  alsoReadIntro: "You may also want to read:",
  contactLabel: "Contact:",
  termsArticles: [
    {
      title: "1. Who we are",
      paragraphs: [
        "Excelso is a technology group that delivers digital products, platforms, and related services. Depending on the product, you may interact with community-oriented initiatives (Excelso Open) or with private and corporate solutions (Excelso Vault).",
        "For questions about these Terms: admin@excelso.space",
      ],
    },
    {
      title: "2. Excelso Open vs Excelso Vault",
      paragraphs: [
        "Excelso Open refers to our open-source, community, and publicly oriented initiatives (e.g. collaborative software, education, and ecosystem contributions). These Services are generally aimed at developers, contributors, and the wider public. Content and expectations may emphasize transparency, community norms, and open licensing where stated.",
        "Excelso Vault refers to our private and corporate division: strategic, scalable, and security-conscious IT solutions for organizations and professional clients. These Services may involve stricter access controls, confidentiality obligations, and contractual terms specific to each client or engagement.",
        "The same person may use both types of Services; each product may have additional terms or notices. If there is a conflict between product-specific terms and these Terms, the product-specific terms govern for that product only.",
      ],
    },
    {
      title: "3. Multiple applications and sign-in",
      paragraphs: [
        "We may operate several websites and applications under the Excelso umbrella. To simplify access, we may enable unified authentication (for example through Auth0) with identity providers such as Google (“Sign in with Google”) or others we configure.",
        "When you choose social login, you are also subject to the provider’s terms and privacy policy (e.g. Google, Auth0). We only request the scopes reasonably necessary to create or link your account and secure your session.",
      ],
    },
    {
      title: "4. Eligibility and accounts",
      paragraphs: [
        "You must be at least the age of digital consent in your jurisdiction (typically 16 or older, or 13+ only where local law and our policies explicitly allow with parental consent) to use the Services.",
        "You agree to provide accurate registration information and to keep it up to date. You are responsible for safeguarding your credentials and for activity under your account. Notify us promptly at admin@excelso.space if you suspect unauthorized access.",
      ],
    },
    {
      title: "5. Acceptable use and misuse of information",
      paragraphs: [
        "You will not misuse the Services. Without limitation, you must not: violate applicable law; infringe others’ rights; upload malware or attempt unauthorized access; scrape or overload our systems without permission; harass others; or use the Services to send spam, deceptive communications, or phishing.",
        "Excelso does not use account or personal information for malicious purposes, for unrelated spam, or to sell your contact data to third parties for their own marketing. We process personal information only as described in our Privacy Policy and to operate, secure, and improve the Services.",
        "We may investigate and suspend or terminate accounts that we reasonably believe violate these Terms or pose a risk to the Services or other users.",
      ],
    },
    {
      title: "6. Paid services and commercial terms",
      paragraphs: [
        "Some Vault or other Services may be offered on a paid, subscription, or project basis. Fees, billing cycles, and deliverables will be described in the applicable order form, checkout flow, or agreement. Payments may be processed by third-party providers; their terms apply to payment processing.",
        "Unless required by law or stated otherwise at purchase, fees are non-refundable except as expressly provided in the applicable commercial terms or by your payment provider’s rules.",
      ],
    },
    {
      title: "7. Your content and license to us",
      paragraphs: [
        "You retain ownership of content you submit to the Services (“User Content”), subject to open-source or other licenses you apply where relevant (e.g. in Open repositories).",
        "You grant Excelso a worldwide, non-exclusive license to host, process, transmit, display, and back up User Content solely to operate, secure, improve, and provide the Services to you, and to comply with law.",
        "You represent that you have the rights needed to submit User Content and that doing so does not violate third-party rights or confidentiality obligations.",
      ],
    },
    {
      title: "8. Intellectual property",
      paragraphs: [
        "Excelso and its licensors own the Services, including software, branding, documentation, and proprietary materials, except where open-source or third-party licenses are stated. Except for rights expressly granted to you, no rights are transferred.",
        "Feedback you voluntarily provide may be used by us without obligation or compensation to you.",
      ],
    },
    {
      title: "9. Third-party services (Auth0, Google, infrastructure)",
      paragraphs: [
        "The Services rely on subprocessors such as identity platforms (e.g. Auth0), cloud hosting, email delivery, analytics, and error monitoring. Their processing is subject to their terms and privacy policies. We are not responsible for third-party services we do not control.",
        "If you revoke an OAuth connection with Google or another provider, some features may stop working until you reconnect or use another sign-in method we support.",
      ],
    },
    {
      title: "10. Disclaimers",
      paragraphs: [
        'THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” TO THE MAXIMUM EXTENT PERMITTED BY LAW. WE DISCLAIM IMPLIED WARRANTIES SUCH AS MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT WHERE ALLOWED.',
        "AI-assisted or automated features, where offered, may produce inaccurate outputs. You are responsible for validating results before relying on them for professional, legal, or financial decisions.",
      ],
    },
    {
      title: "11. Limitation of liability",
      paragraphs: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, EXCELSO AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO THE SERVICES OR THESE TERMS.",
        "OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID US FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY US DOLLARS (USD $50), EXCEPT WHERE LIABILITY CANNOT BE LIMITED BY LAW (INCLUDING MANDATORY CONSUMER RIGHTS).",
      ],
    },
    {
      title: "12. Indemnity",
      paragraphs: [
        "You will defend and indemnify Excelso against claims, damages, losses, and expenses (including reasonable attorneys’ fees) arising from your User Content, your use of the Services in violation of these Terms, or your violation of applicable law or third-party rights.",
      ],
    },
    {
      title: "13. Termination",
      paragraphs: [
        "You may stop using the Services at any time. We may suspend or terminate access if you materially breach these Terms, if we are required to do so by law, or if we discontinue a Service with reasonable notice where practicable.",
        "Upon termination, your right to access ceases. Provisions that by their nature should survive (e.g. ownership, disclaimers, limitations, indemnity) will survive.",
      ],
    },
    {
      title: "14. Governing law, Argentina, and international users",
      paragraphs: [
        "If you are a consumer or user located in the Argentine Republic, the laws of Argentina apply to these Terms, without prejudice to mandatory consumer protection rules (including Law 24.240 of Consumer Defense and related regulations) that cannot be waived by contract.",
        "If you are located outside Argentina, these Terms are still governed by the laws of the Argentine Republic for contractual interpretation between you and Excelso, except that nothing in these Terms limits rights that mandatory laws of your country of residence grant you as a consumer (including data protection and consumer protection laws in the EEA, UK, Brazil, or elsewhere).",
        "Unless mandatory law requires a different venue, you and Excelso submit to the jurisdiction of the ordinary courts of the City of Buenos Aires, Argentina, for disputes arising from these Terms, without prejudice to your right to bring claims in your place of habitual residence where applicable consumer law requires it.",
      ],
    },
    {
      title: "15. Changes to these Terms",
      paragraphs: [
        'We may update these Terms from time to time. We will post the updated version on this page and update the “Last updated” date. If changes are material, we will provide additional notice where required by law or reasonably practicable (e.g. email or in-product notice). Continued use after the effective date constitutes acceptance of the updated Terms where permitted by law.',
      ],
    },
    {
      title: "16. Contact",
      paragraphs: ["Questions about these Terms: admin@excelso.space"],
    },
  ],
  privacyArticles: [
    {
      title: "1. Who is responsible for your data?",
      paragraphs: [
        "Excelso is the data controller for personal information processed in connection with accounts, authentication, and use of our public websites and applications described in this Policy, unless we act solely as a processor on behalf of an organization (e.g. a corporate client of Excelso Vault) under a written agreement—in that case, the organization’s privacy notice may also apply.",
        "Contact (privacy requests and general inquiries): admin@excelso.space",
      ],
    },
    {
      title: "2. Excelso Open, Excelso Vault, and multiple apps",
      paragraphs: [
        "We may process similar categories of data across apps (e.g. email, name, technical logs). Excelso Open-related processing typically supports community accounts, repositories, demos, and public-facing content. Excelso Vault-related processing may support contractual delivery, support tickets, billing, and stricter access controls.",
        "Signing in with Google or another provider through Auth0 (or a comparable platform) may allow the same identity to be recognized across multiple Excelso apps you authorize. We do not use that fact to profile you for unrelated third-party advertising.",
      ],
    },
    {
      title: "3. What data we collect",
      paragraphs: [
        "Account and identity data: name, email address, profile image URL if provided by Google or another OAuth provider, internal user identifiers, organization name (if applicable), role, language, and preferences.",
        "Authentication data: tokens and session identifiers managed through Auth0 or our systems; security logs related to sign-in attempts; device and browser metadata needed to protect accounts.",
        "Data you submit in each Service: messages to support, project or application content you create, uploads, and configuration you save—depending on which product you use.",
        "Technical and usage data: IP address, approximate location derived from IP, user agent, timestamps, diagnostic and error logs, cookies or local storage, and product analytics needed to operate and secure the Services.",
        "Payment data: where purchases exist, payment details are processed by payment partners; we typically receive limited metadata (e.g. transaction status) rather than full card numbers.",
        "We do not knowingly collect sensitive categories of data unless a specific Service requires it and we provide a clear, lawful basis.",
      ],
    },
    {
      title: "4. Purposes: why we use data (including non-spam commitment)",
      paragraphs: [
        "To create and maintain your account; authenticate you; link sessions across authorized apps; prevent fraud and abuse.",
        "To provide the features of Excelso Open and/or Excelso Vault that you choose to use; to respond to support requests; to manage subscriptions or contracts where applicable.",
        "To secure the Services, troubleshoot, monitor performance, and improve reliability.",
        "To communicate with you about the Services (transactional messages, security alerts, and—where permitted—product updates relevant to apps you use).",
        "To comply with law and enforce our Terms.",
        "We do not sell your personal information as “sale” is commonly defined in privacy laws, and we do not use your personal data for spam or for malicious purposes. Marketing communications, if any, will relate to Excelso services you use or have requested, and you can opt out where required by law.",
      ],
    },
    {
      title: "5. Legal bases: Argentina, EEA/UK/Switzerland, and beyond",
      paragraphs: [
        "Argentina: where Law 25.326 applies, we process personal data on bases such as your consent (e.g. optional cookies or marketing where required), the performance of a contract or pre-contractual steps, our legitimate interests in securing and improving the Services (balanced against your rights), or legal obligations. You may exercise rights of access, rectification, updating, suppression, confidentiality, and blocking of excessive or unlawful processing, and to withdraw consent where processing is consent-based, as provided by Law 25.326 and regulatory guidance from the enforcement authority (Agency for Access to Public Information / AAIP in its role regarding personal data protection).",
        "EEA/UK/Switzerland: where GDPR-style rules apply, we rely on contract, legitimate interests, consent where required, or legal obligation as appropriate.",
        "Brazil and other regions: where the LGPD or other local laws apply, we align processing with their requirements, including lawful bases and rights described in this Policy and in supplementary notices where needed.",
      ],
    },
    {
      title: "6. Cookies and similar technologies",
      paragraphs: [
        "We use cookies and similar technologies for authentication, session management, security, preferences, and analytics where enabled. You can control some cookies through browser settings; blocking essential cookies may affect functionality.",
      ],
    },
    {
      title: "7. Sharing and subprocessors",
      paragraphs: [
        "We share personal information with service providers who process it on our instructions, including identity (e.g. Auth0), OAuth providers you choose (e.g. Google), hosting, databases, email delivery, payments, analytics, and security vendors.",
        "We may disclose information if required by law, legal process, or to protect rights, safety, and security.",
        "If Excelso is involved in a merger, acquisition, or asset sale, personal information may be transferred as part of that transaction with appropriate safeguards and notice where required.",
      ],
    },
    {
      title: "8. International transfers",
      paragraphs: [
        "Our providers may process data in countries other than your own, including the United States and the European Economic Area. For transfers from Argentina, we adopt measures consistent with Law 25.326 and applicable regulations. For transfers from the EEA/UK/Switzerland, we use appropriate safeguards such as Standard Contractual Clauses where required.",
      ],
    },
    {
      title: "9. Retention",
      paragraphs: [
        "We retain personal information for as long as your account is active and for a reasonable period afterward to resolve disputes, enforce agreements, and comply with legal obligations. Backups may persist for a limited additional period.",
        "You may request deletion of your account or certain data subject to legal retention needs.",
      ],
    },
    {
      title: "10. Security",
      paragraphs: [
        "We implement technical and organizational measures designed to protect personal information. No method of transmission or storage is 100% secure; we cannot guarantee absolute security.",
      ],
    },
    {
      title: "11. Your rights",
      paragraphs: [
        "Argentina: you may exercise the rights recognized under Law 25.326, including access, rectification, updating, suppression, confidentiality, blocking, and objection to unlawful processing, and may lodge a complaint with the AAIP as the enforcement authority, in accordance with current procedures.",
        "EEA/UK/Switzerland and other regions: you may have rights of access, rectification, erasure, restriction, objection, portability, and withdrawal of consent where processing is consent-based, and the right to lodge a complaint with a supervisory authority.",
        "To exercise rights, contact admin@excelso.space. We may need to verify your request.",
      ],
    },
    {
      title: "12. California and other U.S. state privacy laws (summary)",
      paragraphs: [
        "If the CCPA/CPRA or similar U.S. state laws apply, you may have rights regarding access, deletion, correction, and opt-out of certain processing. Contact admin@excelso.space. We do not “sell” or “share” personal information for cross-context behavioral advertising as defined under CPRA in the way we operate the Services today; if that changes, we will update this Policy and provide appropriate choices.",
      ],
    },
    {
      title: "13. Children",
      paragraphs: [
        "The Services are not directed to children under the age of digital consent. We do not knowingly collect personal information from children. If you believe we have collected such information, contact us and we will take appropriate steps to delete it.",
      ],
    },
    {
      title: "14. Changes to this Policy",
      paragraphs: [
        'We may update this Privacy Policy from time to time. We will post the updated version here and update the “Last updated” date. Where changes are material, we will provide additional notice as required by law (including, where applicable, registration with databases or authorities as required in Argentina).',
      ],
    },
    {
      title: "15. Contact",
      paragraphs: ["Privacy questions and requests: admin@excelso.space"],
    },
  ],
};

export const legalTermsPrivacyEs: LegalTermsPrivacy = {
  termsTitle: "Términos de Servicio",
  privacyTitle: "Política de Privacidad",
  termsLastUpdated: "Última actualización: 3 de mayo de 2026",
  privacyLastUpdated: "Última actualización: 3 de mayo de 2026",
  termsIntro:
    'Estos Términos de Servicio («Términos») regulan el acceso y uso de sitios web, aplicaciones, APIs y servicios digitales relacionados operados bajo la marca Excelso (conjuntamente, los «Servicios»). Los Servicios pueden incluir iniciativas orientadas a la comunidad y al ecosistema abierto («Excelso Open») y soluciones orientadas a clientes privados, corporativos o estratégicos («Excelso Vault»). Al iniciar sesión (incluido con Google u otros proveedores que habilitemos mediante Auth0 u otras plataformas de identidad) o al usar cualquier Servicio, aceptas estos Términos.',
  privacyIntro:
    'Esta Política de Privacidad explica cómo Excelso («nosotros», «nos») recopila, usa, conserva y comparte información personal cuando utilizas nuestros sitios web, aplicaciones y servicios relacionados, incluso cuando te autenticas con Google u otros proveedores en una o más aplicaciones bajo el paraguas Excelso. No utilizamos tu información personal para spam, marketing masivo no solicitado ajeno a tu relación con nosotros ni con fines maliciosos. Esta Política busca transparencia y se alinea con la Ley Argentina 25.326 de Protección de Datos Personales y su normativa, así como con principios similares al RGPD y marcos comparables cuando te resulten aplicables.',
  supportEmail: "admin@excelso.space",
  backToHome: "Volver al inicio",
  alsoReadIntro: "También te puede interesar:",
  contactLabel: "Contacto:",
  termsArticles: [
    {
      title: "1. Quiénes somos",
      paragraphs: [
        "Excelso es un grupo tecnológico que ofrece productos digitales, plataformas y servicios relacionados. Según el producto, puedes interactuar con iniciativas orientadas a la comunidad (Excelso Open) o con soluciones privadas y corporativas (Excelso Vault).",
        "Consultas sobre estos Términos: admin@excelso.space",
      ],
    },
    {
      title: "2. Excelso Open vs Excelso Vault",
      paragraphs: [
        "Excelso Open se refiere a nuestras iniciativas de código abierto, comunidad y orientación pública (p. ej. software colaborativo, educación y aportes al ecosistema). Estos Servicios suelen dirigirse a desarrolladores, colaboradores y al público en general. El contenido y las expectativas pueden enfatizar la transparencia, normas de comunidad y licencias abiertas cuando se indique.",
        "Excelso Vault es nuestra división privada y corporativa: soluciones de TI estratégicas, escalables y conscientes de la seguridad para organizaciones y clientes profesionales. Estos Servicios pueden implicar controles de acceso más estrictos, obligaciones de confidencialidad y condiciones contractuales propias de cada cliente o encargo.",
        "La misma persona puede usar ambos tipos de Servicios; cada producto puede tener términos o avisos adicionales. Si hubiera conflicto entre términos específicos del producto y estos Términos, prevalecen los términos específicos de ese producto únicamente respecto de dicho producto.",
      ],
    },
    {
      title: "3. Varias aplicaciones e inicio de sesión",
      paragraphs: [
        "Podemos operar varios sitios y aplicaciones bajo el paraguas Excelso. Para simplificar el acceso, podemos habilitar autenticación unificada (por ejemplo mediante Auth0) con proveedores de identidad como Google («Iniciar sesión con Google») u otros que configuremos.",
        "Cuando eliges inicio de sesión social, también te aplican los términos y la política de privacidad del proveedor (p. ej. Google, Auth0). Solo solicitamos los permisos razonablemente necesarios para crear o vincular tu cuenta y asegurar tu sesión.",
      ],
    },
    {
      title: "4. Elegibilidad y cuentas",
      paragraphs: [
        "Debes tener al menos la edad de consentimiento digital en tu jurisdicción (habitualmente 16 años o más, o 13+ solo donde la ley local y nuestras políticas lo permitan expresamente con consentimiento parental) para usar los Servicios.",
        "Te comprometes a facilitar datos de registro veraces y mantenerlos actualizados. Eres responsable de proteger tus credenciales y de la actividad bajo tu cuenta. Notifícanos de inmediato a admin@excelso.space si sospechas acceso no autorizado.",
      ],
    },
    {
      title: "5. Uso aceptable y uso indebido de la información",
      paragraphs: [
        "No harás un uso indebido de los Servicios. Sin carácter limitativo, no debes: vulnerar la ley aplicable; infringir derechos de terceros; subir malware o intentar accesos no autorizados; extraer datos o sobrecargar nuestros sistemas sin permiso; acosar a terceros; ni usar los Servicios para enviar spam, comunicaciones engañosas o phishing.",
        "Excelso no utiliza la cuenta ni la información personal con fines maliciosos, para spam no relacionado ni para vender tus datos de contacto a terceros para su propio marketing. Tratamos datos personales solo según esta Política de Privacidad y para operar, asegurar y mejorar los Servicios.",
        "Podremos investigar y suspender o cancelar cuentas que razonablemente consideremos que incumplen estos Términos o suponen un riesgo para los Servicios u otros usuarios.",
      ],
    },
    {
      title: "6. Servicios de pago y condiciones comerciales",
      paragraphs: [
        "Algunos Servicios de Vault u otros pueden ofrecerse de forma paga, por suscripción o por proyecto. Tarifas, ciclos de facturación y entregables se describirán en el pedido, checkout o contrato aplicable. Los pagos pueden procesarse mediante terceros; sus términos rigen el procesamiento del pago.",
        "Salvo que la ley exija lo contrario o se indique en la compra, las tarifas no son reembolsables salvo lo previsto en las condiciones comerciales aplicables o en las normas de tu proveedor de pago.",
      ],
    },
    {
      title: "7. Tu contenido y licencia a favor nuestro",
      paragraphs: [
        "Conservas la titularidad del contenido que envías a los Servicios («Contenido del usuario»), sin perjuicio de licencias de código abierto u otras que apliques donde corresponda (p. ej. en repositorios Open).",
        "Otorgas a Excelso una licencia mundial y no exclusiva para alojar, procesar, transmitir, mostrar y respaldar el Contenido del usuario únicamente para operar, asegurar, mejorar y prestarte los Servicios, y para cumplir la ley.",
        "Declaras que tienes los derechos necesarios para enviar dicho contenido y que ello no vulnera derechos de terceros ni obligaciones de confidencialidad.",
      ],
    },
    {
      title: "8. Propiedad intelectual",
      paragraphs: [
        "Excelso y sus licenciantes son titulares de los Servicios, incluido software, marca, documentación y materiales propietarios, salvo donde se indiquen licencias de código abierto o de terceros. Salvo los derechos concedidos expresamente, no se transfiere titularidad adicional.",
        "Las sugerencias que voluntariamente nos proporciones podrán ser utilizadas sin obligación ni contraprestación.",
      ],
    },
    {
      title: "9. Servicios de terceros (Auth0, Google, infraestructura)",
      paragraphs: [
        "Los Servicios dependen de encargados como plataformas de identidad (p. ej. Auth0), hosting en la nube, envío de correo, analítica y monitorización de errores. Su tratamiento se rige por sus términos y políticas de privacidad. No somos responsables de servicios de terceros que no controlamos.",
        "Si revocas la conexión OAuth con Google u otro proveedor, algunas funciones pueden dejar de operar hasta que vuelvas a conectar o uses otro método de acceso que admitamos.",
      ],
    },
    {
      title: "10. Exclusión de garantías",
      paragraphs: [
        'LOS SERVICIOS SE PRESTAN «TAL CUAL» Y «SEGÚN DISPONIBILIDAD» EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY. RENUNCIAMOS A GARANTÍAS IMPLÍCITAS COMO LAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN CONCRETO Y NO VIOLACIÓN, DONDE ELLO SEA PERMITIDO.',
        "Las funciones asistidas por IA o automatizadas, cuando se ofrezcan, pueden producir resultados inexactos. Eres responsable de validar los resultados antes de basarte en ellos para decisiones profesionales, legales o financieras.",
      ],
    },
    {
      title: "11. Limitación de responsabilidad",
      paragraphs: [
        "EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, EXCELSO Y SUS AFILIADAS, ADMINISTRADORES, EMPLEADOS Y PROVEEDORES NO SERÁN RESPONSABLES POR DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENCIALES O PUNITIVOS, NI POR PÉRDIDA DE BENEFICIOS, DATOS, FONDO DE COMERCIO U OPORTUNIDADES DE NEGOCIO, DERIVADOS DE LOS SERVICIOS O DE ESTOS TÉRMINOS.",
        "NUESTRA RESPONSABILIDAD TOTAL POR CUALQUIER RECLAMACIÓN RELACIONADA CON LOS SERVICIOS O ESTOS TÉRMINOS NO SUPERARÁ EL MAYOR DE (A) LAS CANTIDADES QUE NOS HAYAS PAGADO POR EL SERVICIO ESPECÍFICO QUE ORIGINE LA RECLAMACIÓN EN LOS DOCE (12) MESES ANTERIORES, O (B) CINCUENTA DÓLARES ESTADOUNIDENSES (50 USD), SALVO DONDE LA LEY NO PERMITA DICHA LIMITACIÓN (INCLUIDOS DERECHOS IMPERATIVOS DEL CONSUMIDOR).",
      ],
    },
    {
      title: "12. Indemnización",
      paragraphs: [
        "Nos defenderás e indemnizarás frente a reclamaciones, daños, pérdidas y gastos (incluidos honorarios razonables de abogados) derivados de tu Contenido del usuario, de tu uso de los Servicios en violación de estos Términos o de tu incumplimiento de la ley o derechos de terceros.",
      ],
    },
    {
      title: "13. Resolución",
      paragraphs: [
        "Puedes dejar de usar los Servicios en cualquier momento. Podremos suspender o terminar el acceso si incumples materialmente estos Términos, si la ley lo exige o si discontinuamos un Servicio con aviso razonable cuando sea posible.",
        "Tras la terminación, cesa tu derecho de acceso. Permanecerán las cláusulas que por su naturaleza deban subsistir (p. ej. titularidad, exclusiones, limitaciones, indemnización).",
      ],
    },
    {
      title: "14. Ley aplicable, Argentina y usuarios internacionales",
      paragraphs: [
        "Si eres consumidor o usuario con domicilio en la República Argentina, rigen para estos Términos las leyes de la Argentina, sin perjuicio de las normas imperativas de defensa del consumidor (incluida la Ley 24.240 de Defensa del Consumidor y normativa conexa) que no puedan renunciarse por contrato.",
        "Si te encuentras fuera de la Argentina, estos Términos se interpretan también según las leyes de la República Argentina en lo contractual entre tú y Excelso, sin que ello limite derechos que las leyes imperativas de tu país de residencia te otorguen como consumidor (incluidas normas de protección de datos y del consumidor en el EEE, Reino Unido, Brasil u otros).",
        "Salvo que la ley imperativa exija otro fuero, tú y Excelso se someten a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Argentina, para controversias derivadas de estos Términos, sin perjuicio de tu derecho a interponer reclamaciones en tu lugar de residencia habitual cuando la ley del consumidor aplicable lo exija.",
      ],
    },
    {
      title: "15. Cambios en los Términos",
      paragraphs: [
        'Podemos actualizar estos Términos ocasionalmente. Publicaremos la versión actualizada en esta página y actualizaremos la fecha de «Última actualización». Si los cambios son sustanciales, daremos aviso adicional cuando la ley lo exija o sea razonablemente posible (p. ej. correo o aviso en el producto). El uso continuado tras la fecha de vigor implica la aceptación de los Términos actualizados cuando la ley lo permita.',
      ],
    },
    {
      title: "16. Contacto",
      paragraphs: ["Consultas sobre estos Términos: admin@excelso.space"],
    },
  ],
  privacyArticles: [
    {
      title: "1. ¿Quién es responsable de tus datos?",
      paragraphs: [
        "Excelso es responsable del tratamiento de la información personal relacionada con cuentas, autenticación y uso de nuestros sitios y aplicaciones públicas descritos en esta Política, salvo que actuemos únicamente como encargados por cuenta de una organización (p. ej. un cliente corporativo de Excelso Vault) según un acuerdo por escrito—en ese caso puede aplicarse también el aviso de privacidad de dicha organización.",
        "Contacto (solicitudes de privacidad y consultas generales): admin@excelso.space",
      ],
    },
    {
      title: "2. Excelso Open, Excelso Vault y varias aplicaciones",
      paragraphs: [
        "Podemos tratar categorías similares de datos en distintas apps (p. ej. correo, nombre, registros técnicos). El tratamiento vinculado a Excelso Open suele respaldar cuentas de comunidad, repositorios, demos y contenido de cara al público. El vinculado a Excelso Vault puede respaldar entrega contractual, tickets de soporte, facturación y controles de acceso más estrictos.",
        "Iniciar sesión con Google u otro proveedor mediante Auth0 (o plataforma comparable) puede permitir que la misma identidad se reconozca en varias aplicaciones Excelso que autorices. No usamos ese hecho para elaborar perfiles con fines de publicidad de terceros no relacionada con Excelso.",
      ],
    },
    {
      title: "3. Qué datos recopilamos",
      paragraphs: [
        "Cuenta e identidad: nombre, correo electrónico, URL de imagen de perfil si la proporciona Google u otro proveedor OAuth, identificadores internos de usuario, nombre de organización (si aplica), rol, idioma y preferencias.",
        "Datos de autenticación: tokens e identificadores de sesión gestionados por Auth0 o nuestros sistemas; registros de seguridad de intentos de acceso; metadatos de dispositivo y navegador necesarios para proteger cuentas.",
        "Datos que envías en cada Servicio: mensajes al soporte, contenido de proyecto o aplicación que crees, cargas y configuración que guardes, según el producto que uses.",
        "Datos técnicos y de uso: dirección IP, ubicación aproximada derivada de la IP, agente de usuario, marcas de tiempo, registros de diagnóstico y error, cookies o almacenamiento local, y analítica del producto necesaria para operar y asegurar los Servicios.",
        "Datos de pago: cuando existan compras, los datos de pago los tratan partners de pago; habitualmente recibimos metadatos limitados (p. ej. estado de la transacción) y no el número completo de tarjeta.",
        "No recopilamos a sabiendas categorías sensibles salvo que un Servicio específico lo requiera y exista base legal clara.",
      ],
    },
    {
      title: "4. Finalidades: por qué usamos los datos (incluido el compromiso de no spam)",
      paragraphs: [
        "Crear y mantener tu cuenta; autenticarte; vincular sesiones entre apps autorizadas; prevenir fraude y abusos.",
        "Prestar las funciones de Excelso Open y/o Excelso Vault que elijas; responder solicitudes de soporte; gestionar suscripciones o contratos cuando corresponda.",
        "Proteger los Servicios, resolver incidencias, monitorizar el rendimiento y mejorar la fiabilidad.",
        "Comunicarnos contigo sobre los Servicios (mensajes transaccionales, alertas de seguridad y, cuando esté permitido, novedades del producto relevantes para las apps que usas).",
        "Cumplir la ley y hacer valer nuestros Términos.",
        "No vendemos tu información personal en el sentido habitual de «venta» en leyes de privacidad, y no usamos tus datos personales para spam ni con fines maliciosos. Las comunicaciones de marketing, si las hubiera, se relacionarán con servicios Excelso que uses o hayas solicitado, y podrás darte de baja cuando la ley lo exija.",
      ],
    },
    {
      title: "5. Bases legales: Argentina, EEE/Reino Unido/Suiza y más allá",
      paragraphs: [
        "Argentina: cuando resulte aplicable la Ley 25.326, tratamos datos personales sobre bases como tu consentimiento (p. ej. cookies opcionales o marketing cuando sea exigido), la ejecución de un contrato o medidas precontractuales, nuestros intereses legítimos en asegurar y mejorar los Servicios (ponderados con tus derechos) u obligación legal. Puedes ejercer derechos de acceso, rectificación, actualización, supresión, confidencialidad y bloqueo de datos incompletos, inexactos o no lícitos, y oponerte al tratamiento ilícito, así como retirar el consentimiento cuando el tratamiento se base en él, conforme a la Ley 25.326 y la orientación de la autoridad de aplicación (la Agencia de Acceso a la Información Pública / AAIP en su rol en materia de protección de datos personales).",
        "EEE/Reino Unido/Suiza: cuando resulte aplicable normativa tipo RGPD, nos basamos en contrato, intereses legítimos, consentimiento cuando sea necesario u obligación legal según corresponda.",
        "Brasil y otras regiones: cuando resulte aplicable la LGPD u otras leyes locales, alineamos el tratamiento con sus requisitos, incluidas bases lícitas y derechos descritos en esta Política y en avisos complementarios cuando sea necesario.",
      ],
    },
    {
      title: "6. Cookies y tecnologías similares",
      paragraphs: [
        "Usamos cookies y tecnologías similares para autenticación, sesión, seguridad, preferencias y analítica cuando esté habilitada. Puedes controlar parte de las cookies desde el navegador; bloquear cookies esenciales puede afectar a la funcionalidad.",
      ],
    },
    {
      title: "7. Cesiones y encargados del tratamiento",
      paragraphs: [
        "Compartimos información personal con proveedores que tratan datos por nuestras instrucciones, incluidos identidad (p. ej. Auth0), proveedores OAuth que elijas (p. ej. Google), alojamiento, bases de datos, envío de correo, pagos, analítica y proveedores de seguridad.",
        "Podremos revelar información si la ley, un procedimiento legal o la protección de derechos, seguridad e integridad lo exigen.",
        "Si Excelso participa en una fusión, adquisición o venta de activos, la información personal podrá transferirse como parte de la operación, con las salvaguardas y avisos que exija la ley.",
      ],
    },
    {
      title: "8. Transferencias internacionales",
      paragraphs: [
        "Nuestros proveedores pueden tratar datos en países distintos al tuyo, incluidos Estados Unidos y el Espacio Económico Europeo. Para transferencias desde Argentina adoptamos medidas coherentes con la Ley 25.326 y la normativa aplicable. Para transferencias desde el EEE/Reino Unido/Suiza utilizamos garantías apropiadas, como las Cláusulas Contractuales Tipo cuando sea necesario.",
      ],
    },
    {
      title: "9. Conservación",
      paragraphs: [
        "Conservamos la información personal mientras tu cuenta esté activa y un periodo razonable después para resolver disputas, hacer valer acuerdos y cumplir obligaciones legales. Las copias de seguridad pueden persistir un tiempo adicional limitado.",
        "Puedes solicitar la eliminación de tu cuenta o de ciertos datos, sujeto a necesidades legales de conservación.",
      ],
    },
    {
      title: "10. Seguridad",
      paragraphs: [
        "Aplicamos medidas técnicas y organizativas destinadas a proteger la información personal. Ningún método de transmisión o almacenamiento es 100% seguro; no podemos garantizar una seguridad absoluta.",
      ],
    },
    {
      title: "11. Tus derechos",
      paragraphs: [
        "Argentina: puedes ejercer los derechos reconocidos por la Ley 25.326, incluidos acceso, rectificación, actualización, supresión, confidencialidad, bloqueo y oposición al tratamiento ilícito, y presentar reclamación ante la AAIP conforme a los procedimientos vigentes.",
        "EEE/Reino Unido/Suiza y otras regiones: puedes tener derechos de acceso, rectificación, supresión, limitación, oposición, portabilidad y retirada del consentimiento cuando el tratamiento se base en él, y el derecho a reclamar ante una autoridad de control.",
        "Para ejercer derechos: admin@excelso.space. Podremos necesitar verificar tu identidad.",
      ],
    },
    {
      title: "12. California y otras leyes estatales de privacidad en EE.UU. (resumen)",
      paragraphs: [
        "Si te aplica la CCPA/CPRA u otras leyes estatales similares en EE.UU., puedes tener derechos respecto de acceso, supresión, rectificación y oposición a ciertos tratamientos. Envía solicitudes a admin@excelso.space. No «vendemos» ni «compartimos» información personal para publicidad conductual entre contextos según la CPRA en la forma en que operamos los Servicios en la actualidad; si esto cambiara, actualizaremos esta Política y ofreceremos las opciones oportunas.",
      ],
    },
    {
      title: "13. Menores",
      paragraphs: [
        "Los Servicios no están dirigidos a menores por debajo de la edad de consentimiento digital. No recopilamos a sabiendas datos personales de menores. Si crees que hemos recopilado dichos datos, contáctanos y adoptaremos medidas para eliminarlos.",
      ],
    },
    {
      title: "14. Cambios en esta Política",
      paragraphs: [
        'Podemos actualizar esta Política de Privacidad ocasionalmente. Publicaremos la versión actualizada aquí y actualizaremos la fecha de «Última actualización». Si los cambios son sustanciales, daremos aviso adicional cuando la ley lo exija (incluido, cuando corresponda, el registro en bases o autoridades según lo exija la normativa argentina).',
      ],
    },
    {
      title: "15. Contacto",
      paragraphs: [
        "Consultas y solicitudes de privacidad: admin@excelso.space",
      ],
    },
  ],
};
