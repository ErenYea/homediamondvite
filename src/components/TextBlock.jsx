import React from "react";
import { useAppStore } from "../lib/store";
const translations = {
  en: {
    navbar: {
      products: "Products",
      faq: "FAQ",
      contact: "Contact Us",
      company: "Your Company Here",
      removeMyData: "Remove My Data",
    },
    inputForm: {
      title: "Get your warranty now!",
      firstNameLabel: "First Name:",
      lastNameLabel: "Last Name:",
      emailLabel: "Email:",
      phoneLabel: "Phone:",
      zipLabel: "Zip Code:",
      submitButton: "Free Quote",
    },
    homeInfoText: {
      aboutUs: "About Us",
      bbbRating: "BBB Rating of A+",
      licensedProvider:
        "Fully licensed service contract provider of home warranties",
      leadershipExperience:
        "Our Leadership Team has over 110 years of experience",
      partnerValues: "Honest, Transparent, Innovative, and Responsive partner",
      partneringWith:
        "We are proud to be partnering with Global Home USA to administer our home warranties and Fortegra to insure our home warranties",
      aboutGlobalHomeUSA: "About Global Home USA:",
      globalHomeBbbRating: "BBB Rating of A+",
      globalHomeExperience: "Over 20 years experience",
      globalHomeAdministered:
        "Global Home USA has administered millions of home warranties",
      globalHomeCustomerService:
        "Claims and Customer Service Specialists have been thoroughly trained to exceed customer expectations",
      fortegraBacked:
        "Home warranties are backed by an insurance policy issued by Fortegra",
      aboutFortegra: "About Fortegra:",
      fortegraRating: "A- rated (Excellent) from A.M. Best",
      fortegraYears: "45 years in business",
      fortegraAssets:
        "$33,700,000,000 in total assets (as of 2022 company-wide)",
      mainHomePageHeading: "NEW Premium Home Warranty Option:",
      mainHomePageParagraph:
        "Gain Peace of Mind When Your Home Systems or Appliances Break Down",
      mainHomePageFirstBullet: "Cost-Effective Group Discount",
      mainHomePageSecondBullet:
        "Comprehensive Coverage Beyond Typical Insurance",
      mainHomePageThirdBullet: "Hassle-Free Claims Processing",
    },
    footer: {
      termsAndConditions: "Terms and Conditions",
      privacy: "Privacy",
      copyright: "© 2024 Diamond Home Protection. All rights reserved.",
    },
    inputForm2: {
      firstName: "First Name:",
      lastName: "Last Name:",
      phone: "Phone:",
      email: "Email:",
      zipCode: "Zip Code:",
      propertyType: "Property Type:",
      propertyAddress1: "Property Address 1:",
      propertyAddress2: "Property Address 2:",
      city: "City:",
      state: "State:",
      selectState: "Select State",
      sqFt: "Square Feet:",
      submit: "Next",
    },
    inputForm3: {
      baseWarrantyRate: "Base Warranty Rate:",
      total: "Total:",
      submit: "Next",
      additionaloptions: "Additional Options",
    },
    inputForm4: {
      billingFirstName: "First Name:",
      billingLastName: "Last Name:",
      billingAddress1: "Billing Address 1:",
      billingAddress2: "Billing Address 2:",
      billingCity: "Billing City:",
      billingStateID: "Billing State:",
      selectState: "Select State",
      billingZip: "Billing Zip:",
      billingPhone: "Billing Phone:",
      billingEmail: "Billing Email:",
      creditCardNumber: "Credit Card Number:",
      expirationDate: "Expiration Date:",
      cvvCode: "CVV Code:",
      submit: "Next",
    },
    processCompleted: {
      title: "Process Completed",
      orderID: "Order ID",
      transactionID: "Transaction ID",
      amountPaid: "Amount Paid",
      congratsMessage:
        "Congratulations! Welcome to Diamond Home Protection's Premium Home Warranty Program.",
      ThanksMessage:
        "Thank you for subscribing to our premium home warranty coverage. We are delighted to have you as part of the Diamond Home Protection family. Your coverage is now active (or being processed?), providing you with peace of mind and financial protection against unexpected home repair costs.",
      subHeading: "Your Receipt and Policy",
      subHeadingText:
        "You can view your receipt and access your policy details using the links below:",
      subHeadingLink1: "[View Receipt]",
      subHeadingLink2: "[View Policy]",
      furtherAssistanceText:
        "If you have any questions or need further assistance, please don't hesitate to reach out to our support team.",
    },
    quotes: {
      quote1:
        "Diamond Home Protection is affordable and provides great peace of mind. - John D.",
      quote2:
        "I feel so safe knowing my home is protected by Diamond Home Protection. - Jane S.",
      quote3:
        "The best investment I made for my home. Thank you, Diamond Home Protection! - Michael R.",
      quote4:
        "Affordable and reliable home warranty service. Highly recommend! - Emma L.",
      quote5:
        "Diamond Home Protection saved me a lot of money on repairs. - William P.",
      quote6: "Quick and efficient service, very satisfied! - Olivia M.",
      quote7: "A must-have for every homeowner. - Noah K.",
      quote8:
        "Excellent coverage and support from Diamond Home Protection. - Ava T.",
      quote9: "So glad I chose Diamond Home Protection. - Sophia B.",
      quote10: "Best home warranty service around! - Lucas J.",
      quote11:
        "Diamond Home Protection is a game-changer for homeowners. - Mia N.",
      quote12: "Affordable and comprehensive coverage. - Liam H.",
      quote13: "Great customer service and quick response time. - Charlotte C.",
      quote14:
        "I highly recommend Diamond Home Protection to all my friends. - Benjamin A.",
      quote15: "Peace of mind knowing my home is covered. - Amelia G.",
      quote16: "Fantastic service and great value. - Harper F.",
      quote17: "Easy to sign up and hassle-free service. - Elijah W.",
      quote18:
        "Diamond Home Protection has exceeded my expectations. - Evelyn E.",
      quote19: "Reliable and trustworthy home warranty provider. - James V.",
      quote20: "Best decision I made for my home. - Abigail Z.",
      quote21: "Affordable plans with excellent coverage. - Henry U.",
      quote22: "Quick resolution to all my home issues. - Grace D.",
      quote23:
        "Diamond Home Protection makes home ownership stress-free. - Jackson I.",
      quote24: "Very happy with the service and support. - Scarlett R.",
      quote25:
        "Thank you, Diamond Home Protection, for keeping my home safe! - Daniel O.",
    },
    premiumHomeText: {
      title: "Premium Home Warranty Coverage Your Can Depend On",
      bbbRating: "BBB Rating of A+",
      licensedProvider:
        "Fully licensed service contract provider of home warranties",
      customerService:
        "Claims and Customer Service Specialists have been thoroughly trained to exceed customer expectations",
    },
    warrantyBenefits: {
      title: "Top reasons for having a DHP Warranty!",
      financialProtection:
        "Financial Protection: A home warranty can save you from unexpected repair costs. For example, the average repair cost for a heating system can range from $600 to $2,400.",
      comprehensiveCoverage:
        "Comprehensive Coverage: Home warranties often cover a wide range of home systems and appliances, such as electrical systems, plumbing, and major kitchen appliances. This comprehensive coverage ensures peace of mind.",
      costSavings:
        "Cost Savings: Homeowners can save significantly on repairs and replacements. For instance, repairing a pool pump can cost around $1,200 to $2,400 without a warranty.",
      convenience:
        "Convenience: With a home warranty, you only need to contact your warranty provider to schedule a repair. They handle finding a qualified technician, saving you time and hassle.",
      increasedHomeValue:
        "Increased Home Value: Having a home warranty can make your property more attractive to potential buyers, as it offers them protection and reduces their risk of unexpected repair costs. Replacing a central air conditioning system can cost between $7,000 and $15,000 on average, which can be a selling point for buyers if covered by a warranty.",
    },
    checkboxContainer: {
      title: "Click To Select Additional Coverage Options:",
    },
    progressBanner: {
      step2: "Enter Your Personal Info",
      step3: "Select Your Premium Plan Options",
      step4: "Complete your Order",
      step5: "Confirm your Order",
    },
    premiumCoverage: {
      title: "Coverage Included in your PREMIUM Warranty",
      plumbingSystem: "Plumbing System",
      electricalSystem: "Electrical System",
      centralHeating: "Central Heating",
      centralAir: "Central Air",
      kitchenAppliances: "Kitchen Appliances",
      hotWaterHeater: "Hot Water Heater",
    },
    contactUsPage: {
      contactUsHeading: "contact us",
      contactUsParagraph:
        "For any query or suggestion, feel free to reach out!",
      contactUsName: "Name",
      contactUsEmail: "Email",
      contactUsPhone: "Phone",
      contactUsMessage: "Message",
      contactUsSend: "Send",
    },
    removeMyDataPage: {
      removeMyDataHeading: "Remove My Data",
      removeMyDataParagraph: "Fill out the form to remove your data",
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Phone",
      email: "Email",
      zipCode: "Zip Code",
      homeState: "Home State",
      homeZipCode: "Home Zip Code",
      homeCity: "Home City",
      homeAddress: "Home Address",
    },
    productsPage: {
      mainText:
        "A Home Warranty PROTECTS Your Time and Money from Unexpected Repair Costs . . .",
    },
    noWarrantiesPage: {
      title: "No Warranties Available at This Time",
      sorryMessage:
        "We are Sorry, We Can't Present an Offer for You at This Time",
      sorryDescription:
        "Unfortunately, we are unable to provide a warranty offer for your home based on the information submitted. But don't worry, we're here to help!",
      contactMessage: "Connect with Our Support Team",
      contactDescription:
        "For personalized assistance and to explore other coverage options, please click the button below to contact our support representatives.",
      contactButtonText: "Contact Us",
    },
    enrollementpage: {
      question: "Have Any Questions Or Concerns Feel Free To Contact Us Below",
      quote: "Testimonial Quote. . . . . Tiffany to provide",
    },
    errorpage: {
      title: "Something went wrong",
    },

    // Add other sections here...
  },
  es: {
    navbar: {
      products: "Productos",
      faq: "Preguntas Frecuentes",
      contact: "Contáctenos",
      company: "Tu Empresa Aquí",
      removeMyData: "Eliminar mis datos",
    },
    inputForm: {
      title: "¡Obtén tu garantía ahora!",
      firstNameLabel: "Nombre:",
      lastNameLabel: "Apellido:",
      emailLabel: "Correo Electrónico:",
      phoneLabel: "Teléfono:",
      zipLabel: "Código Postal:",
      submitButton: "Cotización Gratis",
    },
    homeInfoText: {
      aboutUs: "Sobre Nosotros",
      bbbRating: "Calificación BBB de A+",
      licensedProvider:
        "Proveedor de contratos de servicio completamente autorizado de garantías para el hogar",
      leadershipExperience:
        "Nuestro equipo de liderazgo tiene más de 110 años de experiencia",
      partnerValues: "Socio honesto, transparente, innovador y receptivo",
      partneringWith:
        "Estamos orgullosos de asociarnos con Global Home USA para administrar nuestras garantías de hogar y Fortegra para asegurar nuestras garantías de hogar",
      aboutGlobalHomeUSA: "Sobre Global Home USA:",
      globalHomeBbbRating: "Calificación BBB de A+",
      globalHomeExperience: "Más de 20 años de experiencia",
      globalHomeAdministered:
        "Global Home USA ha administrado millones de garantías de hogar",
      globalHomeCustomerService:
        "Los especialistas en reclamos y servicio al cliente han sido completamente capacitados para superar las expectativas de los clientes",
      fortegraBacked:
        "Las garantías para el hogar están respaldadas por una póliza de seguro emitida por Fortegra",
      aboutFortegra: "Sobre Fortegra:",
      fortegraRating: "Calificación A- (Excelente) de A.M. Best",
      fortegraYears: "45 años en el negocio",
      fortegraAssets:
        "$33,700,000,000 en activos totales (a partir de 2022 en toda la empresa)",
      mainHomePageHeading: "NUEVA opción de garantía premium para el hogar:",
      mainHomePageParagraph:
        "Obtenga tranquilidad cuando los sistemas o electrodomésticos de su hogar se estropeen",
      mainHomePageFirstBullet: "Descuento grupal rentable",
      mainHomePageSecondBullet: "Cobertura integral más allá del seguro típico",
      mainHomePageThirdBullet:
        "Procesamiento de reclamaciones sin complicaciones",
    },
    footer: {
      termsAndConditions: "Términos y Condiciones",
      privacy: "Privacidad",
      copyright:
        "© 2024 Diamond Home Protection. Todos los derechos reservados.",
    },
    inputForm2: {
      firstName: "Nombre:",
      lastName: "Apellido:",
      phone: "Teléfono:",
      email: "Correo Electrónico:",
      zipCode: "Código Postal:",
      propertyType: "Tipo de Propiedad:",
      propertyAddress1: "Dirección de la Propiedad 1:",
      propertyAddress2: "Dirección de la Propiedad 2:",
      city: "Ciudad:",
      state: "Estado:",
      selectState: "Seleccione Estado",
      sqFt: "Pies Cuadrados:",
      submit: "Siguiente",
    },
    inputForm3: {
      baseWarrantyRate: "Tarifa de Garantía Base:",
      total: "Total:",
      submit: "Siguiente",
      additionaloptions: "Opciones adicionales",
    },
    inputForm4: {
      billingFirstName: "Nombre:",
      billingLastName: "Apellido:",
      billingAddress1: "Dirección de Facturación 1:",
      billingAddress2: "Dirección de Facturación 2:",
      billingCity: "Ciudad de Facturación:",
      billingStateID: "Estado de Facturación:",
      selectState: "Seleccionar Estado",
      billingZip: "Código Postal de Facturación:",
      billingPhone: "Teléfono de Facturación:",
      billingEmail: "Correo Electrónico de Facturación:",
      creditCardNumber: "Número de Tarjeta de Crédito:",
      expirationDate: "Fecha de Expiración:",
      cvvCode: "Código CVV:",
      submit: "Siguiente",
    },
    processCompleted: {
      title: "Proceso Completado",
      orderID: "ID de Orden",
      transactionID: "ID de Transacción",
      amountPaid: "Cantidad Pagada",
      congratsMessage:
        "¡Felicidades! Bienvenido al programa de garantía premium para el hogar de Diamond Home Protection.",
      ThanksMessage:
        "Gracias por suscribirse a nuestra cobertura de garantía premium para el hogar. Somos Encantado de tenerlo como parte de la familia Diamond Home Protection. Sula cobertura ahora está activa (¿o en proceso?), brindándole tranquilidad mente y protección financiera contra costos inesperados de reparación del hogar.",
      subHeading: "Su recibo y póliza",
      subHeadingText:
        "Puede ver su recibo y acceder a los detalles de su póliza utilizando los enlaces a continuación:",
      subHeadingLink1: "[Ver recibo]",
      subHeadingLink2: "[Ver política]",
      furtherAssistanceText:
        "Si tiene alguna pregunta o necesita más ayuda, no dude en comunicarse con nuestro equipo de soporte.",
    },
    quotes: {
      quote1:
        "Diamond Home Protection es asequible y proporciona una gran tranquilidad. - John D.",
      quote2:
        "Me siento tan seguro sabiendo que mi hogar está protegido por Diamond Home Protection. - Jane S.",
      quote3:
        "La mejor inversión que hice para mi hogar. ¡Gracias, Diamond Home Protection! - Michael R.",
      quote4:
        "Servicio de garantía del hogar asequible y confiable. ¡Muy recomendable! - Emma L.",
      quote5:
        "Diamond Home Protection me ahorró mucho dinero en reparaciones. - William P.",
      quote6: "Servicio rápido y eficiente, ¡muy satisfecho! - Olivia M.",
      quote7: "Un imprescindible para cada propietario. - Noah K.",
      quote8:
        "Excelente cobertura y apoyo de Diamond Home Protection. - Ava T.",
      quote9:
        "Me alegro mucho de haber elegido Diamond Home Protection. - Sophia B.",
      quote10: "¡El mejor servicio de garantía del hogar! - Lucas J.",
      quote11:
        "Diamond Home Protection es un cambio de juego para los propietarios. - Mia N.",
      quote12: "Cobertura asequible y completa. - Liam H.",
      quote13:
        "Gran servicio al cliente y tiempo de respuesta rápido. - Charlotte C.",
      quote14:
        "Recomiendo mucho Diamond Home Protection a todos mis amigos. - Benjamin A.",
      quote15: "Tranquilidad al saber que mi hogar está cubierto. - Amelia G.",
      quote16: "Servicio fantástico y gran valor. - Harper F.",
      quote17: "Fácil de registrarse y servicio sin problemas. - Elijah W.",
      quote18:
        "Diamond Home Protection ha superado mis expectativas. - Evelyn E.",
      quote19:
        "Proveedor de garantía del hogar confiable y digno de confianza. - James V.",
      quote20: "La mejor decisión que tomé para mi hogar. - Abigail Z.",
      quote21: "Planes asequibles con excelente cobertura. - Henry U.",
      quote22:
        "Resolución rápida de todos mis problemas en el hogar. - Grace D.",
      quote23:
        "Diamond Home Protection hace que ser propietario de una casa sea libre de estrés. - Jackson I.",
      quote24: "Muy contento con el servicio y el apoyo. - Scarlett R.",
      quote25:
        "¡Gracias, Diamond Home Protection, por mantener mi hogar seguro! - Daniel O.",
    },
    premiumHomeText: {
      title:
        "Cobertura de Garantía para el Hogar Premium en la que Puede Confiar",
      bbbRating: "Calificación BBB de A+",
      licensedProvider:
        "Proveedor de contratos de servicio completamente autorizado de garantías para el hogar",
      customerService:
        "Los especialistas en reclamos y servicio al cliente han sido completamente capacitados para superar las expectativas de los clientes",
    },
    warrantyBenefits: {
      title: "¡Razones principales para tener una garantía de DHP!",
      financialProtection:
        "Protección Financiera: Una garantía para el hogar puede ahorrarle costos de reparación inesperados. Por ejemplo, el costo promedio de reparación de un sistema de calefacción puede variar de $600 a $2,400.",
      comprehensiveCoverage:
        "Cobertura Integral: Las garantías para el hogar suelen cubrir una amplia gama de sistemas y electrodomésticos, como sistemas eléctricos, plomería y electrodomésticos principales. Esta cobertura integral asegura tranquilidad.",
      costSavings:
        "Ahorro de Costos: Los propietarios pueden ahorrar significativamente en reparaciones y reemplazos. Por ejemplo, reparar una bomba de piscina puede costar entre $1,200 y $2,400 sin una garantía.",
      convenience:
        "Comodidad: Con una garantía para el hogar, solo necesita contactar a su proveedor de garantía para programar una reparación. Ellos se encargan de encontrar un técnico calificado, ahorrándole tiempo y molestias.",
      increasedHomeValue:
        "Aumento del Valor de la Vivienda: Tener una garantía para el hogar puede hacer que su propiedad sea más atractiva para los posibles compradores, ya que les ofrece protección y reduce su riesgo de costos de reparación inesperados. Reemplazar un sistema de aire acondicionado central puede costar entre $7,000 y $15,000 en promedio, lo cual puede ser un punto de venta para los compradores si está cubierto por una garantía.",
    },

    checkboxContainer: {
      title: "Haga clic para seleccionar opciones de cobertura adicionales:",
    },
    progressBanner: {
      step2: "Ingrese su información personal",
      step3: "Seleccione las opciones de su plan premium",
      step4: "Completa tu pedido",
      step5: "Confirma tu pedido",
    },
    premiumCoverage: {
      title: "Cobertura Incluida en su Garantía PREMIUM",
      plumbingSystem: "Sistema de Plomería",
      electricalSystem: "Sistema Eléctrico",
      centralHeating: "Calefacción Central",
      centralAir: "Aire Central",
      kitchenAppliances: "Electrodomésticos de Cocina",
      hotWaterHeater: "Calentador de Agua",
    },
    contactUsPage: {
      contactUsHeading: "contáctenos",
      contactUsParagraph:
        "Para cualquier consulta o sugerencia, ¡no dude en comunicarse!",
      contactUsName: "Nombre",
      contactUsEmail: "Correo electrónico",
      contactUsPhone: "Teléfono",
      contactUsMessage: "Mensaje",
      contactUsSend: "Enviar",
    },
    removeMyDataPage: {
      removeMyDataHeading: "Eliminar mis datos",
      removeMyDataParagraph: "Rellena el formulario para eliminar tus datos",
      firstName: "Nombre de pila",
      lastName: "Apellido",
      phone: "Teléfono",
      email: "Correo electrónico",
      zipCode: "Código postal",
      homeState: "Estado de origen",
      homeZipCode: "Código postal de casa",
      homeCity: "Ciudad natal",
      homeAddress: "Dirección de casa",
    },
    productsPage: {
      mainText:
        "Una garantía para el hogar PROTEGE su tiempo y dinero contra costos de reparación inesperados. . .",
    },
    enrollementpage: {
      question:
        "Si tiene alguna pregunta o inquietud, no dude en contactarnos a continuación",
      quote: "Testimonial Quote. . . . . Tiffany to provide",
    },
    errorpage: {
      title: "Algo salió mal",
    },
    // Add other sections here...
  },
};
const TextBlock = ({ section, element }) => {
  const { language } = useAppStore();
  return (
    translations[language]?.[section]?.[element] ||
    translations.en[section][element] ||
    "Text not found"
  );
};

export default TextBlock;
