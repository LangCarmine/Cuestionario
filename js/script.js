const ap1 = Vue.createApp({
    data() {
        return {
            titulo: '¿Qué facción de transformers perteneces?'
        };
    }
});

const ap2 = Vue.createApp({
    data() {
        return {
            valores_Respuesta: '',
            planeta_Respuesta: '',
            lider_Respuesta: '',
            vehiculo_Respuesta: '',
            cooperacion_Respuesta: '',
            habilidades_Respuesta: '',
            transformacion_Respuesta: '',
            rol_Respuesta: '',
            color_Respuesta: '',
            lema_Respuesta: '',

            Valores_deshabilitado: false,
            planeta_deshabilitado: false,
            lider_deshabilitado: false,
            vehiculo_deshabilitado: false,
            cooperacion_deshabilitado: false,
            habilidades_deshabilitado: false,
            transformacion_deshabilitado: false,
            rol_deshabilitado: false,
            color_deshabilitado: false,
            lema_deshabilitado: false,

            resultadoFinal: ''
        };
    },
    
    methods: {
        cambiarEstado1() {
            this.Valores_deshabilitado = true;
            this.calcularResultado();
        },
        cambiarEstado2() {
            this.planeta_deshabilitado = true;
            this.calcularResultado();
        },
        cambiarEstado3() {
            this.lider_deshabilitado = true;
            this.calcularResultado();
        },
        cambiarEstado4() {
            this.vehiculo_deshabilitado = true;
            this.calcularResultado();
        },
        cambiarEstado5() {
            this.cooperacion_deshabilitado = true;
            this.calcularResultado();
        },
        cambiarEstado6() {
            this.habilidades_deshabilitado = true;
            this.calcularResultado();
        },
        cambiarEstado7() {
            this.transformacion_deshabilitado = true;
            this.calcularResultado();
        },
        cambiarEstado8() {
            this.rol_deshabilitado = true;
            this.calcularResultado();
        },
        cambiarEstado9() {
            this.color_deshabilitado = true;
            this.calcularResultado();
        },
        cambiarEstado10() {
            this.lema_deshabilitado = true;
            this.calcularResultado();
        },



        calcularResultado() {
            let autobot = 0;
            let decepticon = 0;
            let maximal = 0;
            let predacon = 0;
        
            const respuestas = [
                this.valores_Respuesta,
                this.planeta_Respuesta,
                this.lider_Respuesta,
                this.vehiculo_Respuesta,
                this.cooperacion_Respuesta,
                this.habilidades_Respuesta,
                this.transformacion_Respuesta,
                this.rol_Respuesta,
                this.color_Respuesta,
                this.lema_Respuesta
            ];
        
            respuestas.forEach(faccion => {
                if (faccion === 'Autobot') autobot++;
                if (faccion === 'Decepticon') decepticon++;
                if (faccion === 'Maximal') maximal++;
                if (faccion === 'Predacon') predacon++;
            });
        
            // calcula la facción que más veces aparece 
            if (autobot >= decepticon && autobot >= maximal && autobot >= predacon) {
                this.resultadoFinal = 'Autobot';
                this.imagen = './resources/autobot.png';
                this.alterno = 'Logo Autobot';
                this.desc = 'Descripción: Los Autobots son los héroes clásicos en el universo de Transformers. Luchan por la paz y la libertad de todos los seres, siempre dispuestos a proteger y ayudar a los más débiles. Su líder es Optimus Prime, un noble y poderoso guerrero que valora la justicia y el trabajo en equipo.';
                this.principios = 'Valores clave: Justicia, cooperación, sacrificio.';
                this.altmode = 'Modo alterno tipico: Vehículos terrestres como autos, camiones y vehículos de emergencia.';
                this.lema = 'Lema: “Hasta que todos seamos uno”.';

            } else if (decepticon >= autobot && decepticon >= maximal && decepticon >= predacon) {
                this.resultadoFinal = 'Decepticon';
                this.imagen = './resources/decepticon.png';
                this.alterno = 'Logo Decepticon';
                this.desc = 'Descripción: Los Decepticons son los eternos rivales de los Autobots y buscan poder y dominación. Liderados por el astuto y despiadado Megatron, están dispuestos a utilizar cualquier medio para alcanzar sus objetivos. Son conocidos por su fuerza y determinación, pero también por ser implacables y calculadores.';
                this.principios = 'Valores clave: Poder, control, supervivencia del más fuerte.';
                this.altmode = 'Modo alterno tipico: Vehículos militares, jets, tanques y maquinaria pesada.';
                this.lema = 'Lema: “La fuerza por encima de todo”.';

            } else if (maximal >= autobot && maximal >= decepticon && maximal >= predacon) {
                this.resultadoFinal = 'Maximal';
                this.imagen = './resources/maximal.png';
                this.alterno = 'Logo Maximal';
                this.desc = 'Descripción: Los Maximals son descendientes de los Autobots y se destacan por su afinidad con la naturaleza y el equilibrio ecológico. Surgieron en una época de paz y evolución, con formas de animales. Liderados generalmente por figuras como Optimus Primal, los Maximals se esfuerzan por proteger los ecosistemas y respetan todas las formas de vida.';
                this.principios = 'Valores clave: Armonía, respeto por la naturaleza, sabiduría.';
                this.altmode = 'Modo alterno tipico: Animales y criaturas de la naturaleza.';
                this.lema = 'Lema: “Protejamos el equilibrio natural”.';

            } else {
                this.resultadoFinal = 'Predacon';
                this.imagen = './resources/predacon.png';
                this.alterno = 'Logo Predacon';
                this.desc = 'Descripción: Los Predacons, descendientes de los Decepticons, son seres astutos y adaptables que también adoptan formas de animales, aunque con un enfoque más salvaje y predatorio. Son conocidos por su versatilidad y sus tácticas de guerrilla. Bajo el liderazgo de Megatron (una versión descendiente), buscan evolucionar y dominar usando su capacidad de adaptación.';
                this.principios = 'Valores clave: Evolución, adaptabilidad, fuerza bruta.';
                this.altmode = 'Modo alterno tipico: Criaturas bestiales y reptiles.';
                this.lema = 'Lema: “Evolucionar o morir”.';
            }
        }
    }
});
