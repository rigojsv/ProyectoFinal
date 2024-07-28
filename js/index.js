const handlerBarsContext = {
    "title": "Campus Santa Clara",
    "description": "Evento realizado el 14 de febrero mostrando nuestro producto.",
    "gallery": [
        {
            "video": "resources/events/video.mp4"
        },
        {
            "image": "resources/events/img1.jpg",
            "alt": "Event img 1"
        },
        {
            "image": "resources/events/img2.jpg",
            "alt": "Event img 2"
        },
        {
            "image": "resources/events/img3.jpg",
            "alt": "Event img 3"
        },
        {
            "image": "resources/events/img4.jpg",
            "alt": "Event img 4"
        },
        {
            "image": "resources/events/img5.jpg",
            "alt": "Event img 5"
        }
    ],
    "faqs": [
        {
            "question": "¿Cuál es la política de devoluciones?",
            "answer": "Nuestra política de devoluciones permite que los clientes devuelvan los productos dentro de los 30 días siguientes a la compra, siempre que los artículos estén en su embalaje original y en condiciones de reventa."
        },
        {
            "question": "¿Cuáles son los métodos de pago aceptados?",
            "answer": "Aceptamos efectivo, tarjetas de crédito, débito y transferencias bancarias."
        },
        {
            "question": "¿Cuentan con envío a domicilio?",
            "answer": "Si, tenemos envíos gratis a su domicilio en la ciudad de Juticalpa, y hacemos envíos a todo el país con la agencia de logística C807Xpress."
        },
        {
            "question": "¿Cuánto tarda y cuál es el costo de envío?",
            "answer": "El costo de envío es de Lps.90 y tarda de 1-3 días en llegar a su domicilio."
        }
    ]
};

const pageContext = () => {
    return handlerBarsContext;
};

export default pageContext;

