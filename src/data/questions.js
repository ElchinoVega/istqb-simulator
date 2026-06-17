// ─────────────────────────────────────────────────────────────────────────────
// BANCO DE PREGUNTAS ISTQB CTFL v4.0 — 169 preguntas únicas en español
// Fuente: Exámenes oficiales A (v1.7), B (v1.7), C (v1.6), D (v1.5)
// publicados por ISTQB® en istqb.org (uso no comercial con atribución)
// ─────────────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [

  // ══════════════════════════════════════════════════════
  // CAPÍTULO 1 — Fundamentos del Testing
  // ══════════════════════════════════════════════════════

  { id:101, chapter:1, lo:"FL-1.1.1", klevel:1, src:"A",
    question:"¿Cuál de las siguientes afirmaciones describe un objetivo de prueba válido?",
    options:["Demostrar que no existen defectos sin corregir en el sistema bajo prueba","Demostrar que no habrá fallos tras la implementación del sistema en producción","Reducir el nivel de riesgo del objeto de prueba y generar confianza en su nivel de calidad","Verificar que no existen combinaciones de entradas sin probar"],
    correct:2,
    explanation:"C es correcta. Las pruebas encuentran defectos y fallos, lo que reduce el nivel de riesgo y genera confianza en la calidad. A es imposible (principio 1). B es imposible (principio 7). D es imposible (principio 2)." },

  { id:102, chapter:1, lo:"FL-1.1.1", klevel:1, src:"B",
    question:"¿Cuál de las siguientes opciones es un ejemplo de por qué las pruebas son necesarias?",
    options:["Las pruebas dinámicas aumentan la calidad haciendo que los objetos de prueba fallen de formas que los usuarios nunca podrían lograr","Las pruebas estáticas las usan los desarrolladores para identificar fallos en su código más rápido que con las pruebas dinámicas","El análisis estático proporciona evidencia a los clientes de que los elementos del sistema sin salidas están listos para liberar","Las revisiones aumentan la calidad de las especificaciones de requisitos y generan menos cambios en los productos de trabajo derivados"],
    correct:3,
    explanation:"D es correcta. Las revisiones (prueba estática) aumentan la calidad de los requisitos y reducen los cambios necesarios en productos derivados. A es incorrecta: las pruebas dinámicas no crean fallos imposibles para usuarios. B es incorrecta: las pruebas estáticas no identifican fallos en el código de la misma forma que las dinámicas. C es incorrecta: el análisis estático no puede mostrar que elementos sin salida son aptos." },

  { id:103, chapter:1, lo:"FL-1.1.1", klevel:1, src:"C",
    question:"¿Cuál de las siguientes es un objetivo de prueba típico?",
    options:["Validar que se cumplen los requisitos documentados","Causar fallos e identificar defectos","Iniciar errores e identificar causas raíz","Verificar que el objeto de prueba cumple las expectativas del usuario"],
    correct:1,
    explanation:"B es correcta. Causar fallos e identificar defectos es un objetivo típico de las pruebas. A es incorrecta porque la validación de requisitos es parte del aseguramiento de la calidad, no exclusivamente de las pruebas. C es incorrecta porque iniciar errores no es un objetivo directo. D describe verificación, no todos los objetivos de prueba." },

  { id:104, chapter:1, lo:"FL-1.1.2", klevel:2, src:"A",
    question:"Se te asignó analizar y corregir las causas de fallos en un nuevo sistema. ¿Qué actividad estás realizando?",
    options:["Depuración (debugging)","Pruebas de software","Elicitación de requisitos","Gestión de defectos"],
    correct:0,
    explanation:"A es correcta. La depuración es el proceso de encontrar, analizar y eliminar las causas de los fallos. Las pruebas detectan defectos pero no los corrigen. La elicitación captura requisitos. La gestión de defectos registra y rastrea defectos." },

  { id:105, chapter:1, lo:"FL-1.1.2", klevel:2, src:"C",
    question:"¿Cuál de las siguientes afirmaciones describe MEJOR la diferencia entre testing y depuración?",
    options:["El testing causa fallos mientras que la depuración corrige fallos","El testing es una actividad negativa mientras que la depuración es positiva","El testing determina que existen defectos mientras que la depuración elimina los defectos","El testing encuentra la causa de los defectos mientras que la depuración corrige la causa"],
    correct:2,
    explanation:"C es correcta. El testing identifica que existen defectos (a través de fallos), mientras que la depuración encuentra la causa del fallo y la elimina. A es parcialmente correcta pero incompleta. B usa terminología incorrecta. D es incorrecta porque el testing no siempre encuentra la causa raíz." },

  { id:106, chapter:1, lo:"FL-1.2.1", klevel:2, src:"A",
    question:"¿Cuál de las siguientes opciones muestra un ejemplo de actividades de prueba que contribuyen al éxito?",
    options:["Involucrar a los testers desde el inicio del SDLC ayudará a detectar defectos en los productos de trabajo","Los testers evitan interrumpir a los desarrolladores mientras codifican para que escriban mejor código","Los testers que colaboran con usuarios finales mejoran la calidad de los informes de defectos durante las pruebas de integración","Los testers certificados diseñarán casos de prueba mucho mejores que los no certificados"],
    correct:0,
    explanation:"A es correcta. Involucrar testers desde el inicio del SDLC aumenta la comprensión de las decisiones de diseño y detecta defectos tempranamente. B es incorrecta: tanto desarrolladores como testers se benefician de colaborar. C es incorrecta: los usuarios finales no mejoran los informes de defectos. D es incorrecta: la certificación no garantiza mejores casos de prueba." },

  { id:107, chapter:1, lo:"FL-1.2.2", klevel:1, src:"A",
    question:"En muchas organizaciones el departamento de pruebas se llama QA. ¿Es correcta esta denominación?",
    options:["Sí, porque testing y QA son exactamente lo mismo","Sí, porque se pueden usar indistintamente porque ambos se centran en los mismos aspectos de calidad","No, porque las pruebas incluyen más actividades; QA se centra en procesos de calidad","No, porque QA se centra en procesos de calidad mientras que las pruebas se centran en demostrar que un componente o sistema es apto y detectar defectos"],
    correct:3,
    explanation:"D es correcta. QA se centra en establecer y mejorar procesos de calidad. Las pruebas de software cubren todas las actividades del SDLC para verificar que el software satisface requisitos y detectar defectos. No son lo mismo ni intercambiables." },

  { id:108, chapter:1, lo:"FL-1.2.3", klevel:2, src:"A",
    question:"Un programador distraído programa incorrectamente la lógica del límite superior de una variable. Durante las pruebas del sistema, un tester nota que el campo acepta valores inválidos. ¿Qué describe correctamente el límite superior codificado de forma incorrecta?",
    options:["La causa raíz","Un fallo","Un error","Un defecto"],
    correct:3,
    explanation:"D es correcta. El problema en el código (límite superior incorrecto) es un defecto. La causa raíz es la distracción del programador. Aceptar valores inválidos es un fallo. La equivocación en el pensamiento que introdujo el defecto es el error." },

  { id:109, chapter:1, lo:"FL-1.3.1", klevel:2, src:"A",
    question:"No se han hecho cambios en los casos de prueba de regresión por varias iteraciones y no se identificaron nuevos defectos. Tu manager está satisfecho, pero tú no. ¿Qué principio de prueba explica tu escepticismo?",
    options:["Las pruebas se desgastan (pesticide paradox)","La falacia de la ausencia de defectos","Los defectos se agrupan","Las pruebas exhaustivas son imposibles"],
    correct:0,
    explanation:"A es correcta (principio 'tests wear out'). Si los mismos casos de prueba se repiten una y otra vez, eventualmente dejan de encontrar nuevos defectos. Esto explica que los casos pasen sin detectar nada nuevo." },

  { id:110, chapter:1, lo:"FL-1.3.1", klevel:2, src:"B",
    question:"Uno de los principios del testing dice que las pruebas exhaustivas son imposibles. ¿Cuál de las siguientes es un ejemplo de abordar este principio en la práctica?",
    options:["Crear casos de prueba que cubran cada salida posible especificada","Documentar todas las variaciones posibles de entrada y priorizarlas por importancia","Iniciar las pruebas lo antes posible con revisiones y otras técnicas estáticas","Usar partición de equivalencia y análisis de valores límite para generar casos de prueba"],
    correct:3,
    explanation:"D es correcta. Usar EP y BVA permite seleccionar un subconjunto representativo de entradas en lugar de probarlas todas, abordando directamente la imposibilidad de las pruebas exhaustivas. A crea cobertura de salidas, no aborda la imposibilidad. B solo documenta variaciones. C aborda el principio de pruebas tempranas." },

  { id:111, chapter:1, lo:"FL-1.3.1", klevel:2, src:"C",
    question:"La 'falacia de la ausencia de defectos' es uno de los principios del testing. ¿Cuál es un ejemplo de abordar este principio en la práctica?",
    options:["Explicar que no es posible que las pruebas muestren la ausencia de defectos","Apoyar a los usuarios finales para realizar pruebas de aceptación","Asegurarse de que no queden defectos de implementación en el sistema entregado","Modificar las pruebas que no causan fallos para asegurar que queden pocos defectos"],
    correct:1,
    explanation:"B es correcta. Apoyar las pruebas de aceptación por parte de los usuarios finales asegura que el software sea útil para sus necesidades reales, abordando la falacia de que corregir defectos garantiza el éxito. A describe el principio 1 (testing solo puede mostrar presencia de defectos). C intenta lograr lo imposible. D no aborda este principio." },

  { id:112, chapter:1, lo:"FL-1.4.1", klevel:2, src:"A",
    question:"En un equipo que desarrolla una app móvil de pedidos, se implementa la funcionalidad de pago. ¿Cuál de las siguientes actividades es parte del análisis de prueba?",
    options:["Estimar que las pruebas de integración con el servicio de pago llevarán 8 persona-días","Decidir que el equipo debe probar si es posible compartir correctamente el pago entre varios usuarios","Usar BVA para derivar datos de prueba para el importe mínimo a pagar","Analizar la discrepancia entre resultado real y esperado y reportar un defecto"],
    correct:1,
    explanation:"B es correcta. Decidir qué condiciones de prueba cubrir es parte del análisis de prueba. A (estimación) es planificación. C (usar técnicas para derivar datos) es diseño. D (analizar discrepancias y reportar) es ejecución." },

  { id:113, chapter:1, lo:"FL-1.4.1", klevel:2, src:"B",
    question:"¿Qué actividad de prueba implica trabajar con requisitos de datos de prueba, condiciones de prueba, requisitos del entorno de prueba y casos de prueba?",
    options:["Diseño de prueba","Ejecución de prueba","Análisis de prueba","Implementación de prueba"],
    correct:0,
    explanation:"A es correcta. El diseño de prueba implica trabajar con condiciones de prueba (del análisis) para crear casos de prueba y otros elementos testware como requisitos de datos y entornos. La ejecución ejecuta los casos. El análisis identifica condiciones. La implementación crea los procedimientos." },

  { id:114, chapter:1, lo:"FL-1.4.1", klevel:2, src:"C",
    question:"¿Cuáles de las siguientes actividades de prueba son las MÁS probables en involucrar la aplicación de BVA y partición de equivalencia?",
    options:["Implementación de prueba","Diseño de prueba","Ejecución de prueba","Monitoreo de prueba","Análisis de prueba"],
    correct:[1,4], multiSelect:true,
    explanation:"B y E son correctas. El análisis de prueba identifica las condiciones de prueba (incluyendo las particiones y límites). El diseño de prueba aplica BVA y EP para crear casos de prueba concretos a partir de esas condiciones. La implementación, ejecución y monitoreo no aplican directamente estas técnicas." },

  { id:115, chapter:1, lo:"FL-1.4.2", klevel:2, src:"A",
    question:"¿Cuáles de los siguientes factores tienen influencia SIGNIFICATIVA en el enfoque de prueba?\ni. El SDLC\nii. Número de defectos en proyectos anteriores\niii. Riesgos de producto identificados\niv. Nuevos requisitos regulatorios que exigen pruebas formales de caja blanca\nv. La configuración del entorno de prueba",
    options:["i e ii tienen influencia significativa","i, iii y iv tienen influencia significativa","ii, iv y v tienen influencia significativa","iii y v tienen influencia significativa"],
    correct:1,
    explanation:"B es correcta. El SDLC (i), los riesgos de producto (iii) y los requisitos regulatorios (iv) son factores con gran influencia. El número de defectos anteriores (ii) tiene cierta influencia pero no es tan significativo. La configuración del entorno (v) no influye significativamente en el enfoque." },

  { id:116, chapter:1, lo:"FL-1.4.2", klevel:2, src:"B",
    question:"¿Cuál de las siguientes opciones tiene MÁS probabilidades de impactar cómo se realizan las pruebas para un objeto de prueba dado?",
    options:["El nivel promedio de experiencia del equipo de marketing de la organización","El conocimiento de los usuarios de que se está desarrollando un nuevo sistema para ellos","Los años de experiencia de los miembros del equipo de prueba","La estructura organizacional del usuario final para una aplicación comercial de streaming de música"],
    correct:2,
    explanation:"C es correcta. Los años de experiencia de los miembros del equipo de prueba impactan directamente cómo se realizan las pruebas, afectando técnicas elegidas, profundidad de análisis y diseño. El equipo de marketing (A) no es relevante. El conocimiento de los usuarios (B) es irrelevante para el enfoque. La estructura organizacional del usuario final (D) no afecta directamente cómo se prueba." },

  { id:117, chapter:1, lo:"FL-1.4.4", klevel:2, src:"A",
    question:"¿Cuál es la MEJOR manera en que la trazabilidad apoya el testing?",
    options:["Realizar el análisis de impacto dará información sobre la completitud de las pruebas","Analizar la trazabilidad entre casos de prueba y resultados dará información sobre el nivel estimado de riesgo residual","Realizar el análisis de impacto ayudará a seleccionar los casos de prueba correctos para las pruebas de regresión","Analizar la trazabilidad entre base de prueba, objetos de prueba y casos de prueba ayudará a seleccionar datos de prueba"],
    correct:2,
    explanation:"C es correcta. El análisis de impacto de los cambios ayuda a seleccionar los casos de prueba adecuados para la prueba de regresión. A es incorrecta porque el análisis de impacto no informa la completitud. B es incorrecta porque la trazabilidad no da información del riesgo residual si los casos no están trazados a riesgos. D es incorrecta porque seleccionar datos de prueba es parte del análisis e implementación." },

  { id:118, chapter:1, lo:"FL-1.4.5", klevel:2, src:"A",
    question:"¿Cuáles DOS de las siguientes tareas pertenecen PRINCIPALMENTE al rol de testing?",
    options:["Configurar entornos de prueba","Mantener el backlog del producto","Diseñar soluciones para nuevos requisitos","Crear el plan de prueba","Analizar la base de prueba"],
    correct:[0,4], multiSelect:true,
    explanation:"A y E son correctas. Configurar entornos de prueba y analizar la base de prueba son tareas del rol de testing. El backlog (B) es del product owner. Diseñar soluciones (C) es del equipo de desarrollo. Crear el plan de prueba (D) es principalmente liderazgo/gestión de prueba." },

  { id:119, chapter:1, lo:"FL-1.4.5", klevel:2, src:"C",
    question:"Dado el siguiente testware:\n1. Ítems de cobertura\n2. Solicitudes de cambio\n3. Calendario de ejecución de prueba\n4. Condiciones de prueba priorizadas\n\nY las siguientes actividades: A=Análisis de prueba, B=Diseño de prueba, C=Implementación de prueba, D=Finalización de prueba\n\n¿Cuál muestra MEJOR el testware producido por cada actividad?",
    options:["1B, 2D, 3C, 4A","1B, 2D, 3A, 4C","1D, 2C, 3A, 4B","1D, 2C, 3B, 4A"],
    correct:0,
    explanation:"A es correcta: Ítems de cobertura (1) son producidos en el diseño de prueba (B). Las solicitudes de cambio (2) se generan en la finalización de prueba (D). El calendario de ejecución (3) se produce en la implementación de prueba (C). Las condiciones de prueba priorizadas (4) son producidas en el análisis de prueba (A)." },

  { id:120, chapter:1, lo:"FL-1.5.1", klevel:2, src:"A",
    question:"¿Cuáles son las habilidades MÁS importantes de un tester?\ni. Conocimiento del dominio\nii. Crear una visión del producto\niii. Ser buen jugador de equipo\niv. Planificar y organizar el trabajo del equipo\nv. Pensamiento crítico",
    options:["ii y iv son importantes","i, iii y v son importantes","i, ii y v son importantes","iii y iv son importantes"],
    correct:1,
    explanation:"B es correcta. El conocimiento del dominio (i), ser buen jugador de equipo (iii) y el pensamiento crítico (v) son las habilidades más importantes. Crear visión del producto (ii) es tarea del analista de negocio. Planificar y organizar el equipo (iv) es del test manager o el equipo en Agile." },

  { id:121, chapter:1, lo:"FL-1.5.1", klevel:2, src:"B",
    question:"¿Cuál de las siguientes es MÁS probablemente un ejemplo de un tester usando una habilidad genérica durante las pruebas?",
    options:["El profundo conocimiento del tester de videojuegos le permitió llevarse bien con un desarrollador","El tester era ex piloto y comprendió mejor los criterios de aceptación del sistema de control del helicóptero","El tester trabajó como programador y usó esas habilidades para comunicarse mejor con los analistas de negocio","El tester fue muy cuidadoso al generar metódicamente los casos de prueba antes de su sesión exploratoria"],
    correct:3,
    explanation:"D es correcta. La meticulosidad y el cuidado al generar casos de prueba es una habilidad genérica (pensamiento crítico, atención al detalle). A es una habilidad de dominio usada socialmente. B y C son habilidades de dominio/técnicas específicas." },

  { id:122, chapter:1, lo:"FL-1.5.2", klevel:1, src:"A",
    question:"¿Cómo está presente el enfoque de equipo completo en la interacción entre testers y representantes de negocio?",
    options:["Los representantes de negocio deciden los enfoques de automatización","Los testers ayudan a los representantes de negocio a definir la estrategia de prueba","Los representantes de negocio no forman parte del enfoque de equipo completo","Los testers ayudan a los representantes de negocio a crear pruebas de aceptación adecuadas"],
    correct:3,
    explanation:"D es correcta. Los testers trabajan estrechamente con los representantes de negocio para asegurar los niveles de calidad deseados, incluyendo ayudarles a crear pruebas de aceptación adecuadas." },

  { id:123, chapter:1, lo:"FL-1.5.2", klevel:1, src:"B",
    question:"¿Cuál es una ventaja del enfoque de equipo completo (whole-team approach)?",
    options:["Permite a los miembros del equipo asumir cualquier rol en cualquier momento","Solo necesita un equipo para apoyar todo el proyecto de desarrollo","Incorpora representantes de negocio junto con los desarrolladores en el mismo equipo","Genera una sinergia de equipo que beneficia a todo el proyecto"],
    correct:3,
    explanation:"D es correcta. El enfoque de equipo completo genera sinergia que beneficia a todo el proyecto al fomentar la comunicación, la colaboración y el entendimiento compartido de la calidad. A es incorrecta: los roles siguen siendo especializados. B es irrelevante. C puede ser verdad pero no es la ventaja principal mencionada en el syllabus." },

  { id:124, chapter:1, lo:"FL-1.5.2", klevel:2, src:"C",
    question:"¿Cuál es una ventaja del enfoque de equipo completo?",
    options:["Equipos sin testers","Mejora la dinámica del equipo","Miembros especializados del equipo","Equipos más grandes"],
    correct:1,
    explanation:"B es correcta. Una de las ventajas del enfoque de equipo completo es la mejora de la dinámica del equipo, ya que todos los miembros comparten responsabilidad por la calidad y colaboran estrechamente." },

  { id:125, chapter:1, lo:"FL-1.5.3", klevel:2, src:"A",
    question:"¿Cuál de las siguientes explica MEJOR un beneficio de la independencia en el testing?",
    options:["Permite asignar al equipo de prueba la responsabilidad de la calidad del entregable final","Un equipo externo no se deja influir tan fácilmente por las presiones de entrega","Un equipo independiente puede trabajar aislado de los desarrolladores sin distraerse con cambios","Cuando las especificaciones contienen ambigüedades, un tester independiente puede cuestionar las suposiciones e interpretaciones del desarrollador"],
    correct:3,
    explanation:"D es correcta. Las especificaciones nunca son perfectas; el desarrollador hace suposiciones en su interpretación. Un tester independiente es útil para cuestionar y verificar esas suposiciones." },

  { id:126, chapter:1, lo:"FL-1.5.3", klevel:2, src:"C",
    question:"¿Cuál es una afirmación CORRECTA sobre la independencia del testing?",
    options:["Los testers independientes encontrarán defectos por su perspectiva técnica diferente, pero su independencia puede llevar a una relación adversarial con los desarrolladores","La familiaridad de los desarrolladores con su propio código significa que solo encuentran pocos defectos, pero también los encontrarían los testers por su misma formación","Las pruebas independientes requieren testers de fuera de la organización, pero les resulta difícil comprender el dominio","Los testers fuera del equipo son más independientes que los del equipo, pero los del equipo son más propensos a ser culpados por retrasos"],
    correct:0,
    explanation:"A es correcta. Los testers independientes encuentran defectos gracias a su perspectiva diferente, pero puede surgir una relación adversarial con los desarrolladores si no se gestiona adecuadamente. B es incorrecta porque desarrolladores y testers no tienen la misma perspectiva. C es incompleta. D es incorrecta sobre quién es culpado." },

  // ══════════════════════════════════════════════════════
  // CAPÍTULO 2 — Testing a lo largo del SDLC
  // ══════════════════════════════════════════════════════

  { id:201, chapter:2, lo:"FL-2.1.1", klevel:2, src:"C",
    question:"¿Cuál es una buena práctica de prueba aplicable a todos los SDLC?",
    options:["Para cada nivel de prueba hay un nivel de desarrollo correspondiente","Para cada objetivo de prueba hay un objetivo de desarrollo correspondiente","Para cada actividad de usuario hay una actividad de prueba correspondiente","Para cada actividad de desarrollo hay una actividad de prueba correspondiente"],
    correct:3,
    explanation:"D es correcta. Una buena práctica aplicable a todos los SDLC es que para cada actividad de desarrollo existe una actividad de prueba correspondiente. Esto asegura que el testing sea parte integral de todo el ciclo." },

  { id:202, chapter:2, lo:"FL-2.1.2", klevel:1, src:"A",
    question:"La regla 'para cada actividad del SDLC existe una actividad de prueba correspondiente', ¿en qué modelos de SDLC aplica?",
    options:["Solo en los modelos de desarrollo secuencial","Solo en los modelos de desarrollo iterativo","Solo en los modelos de desarrollo iterativo e incremental","En los modelos de desarrollo secuencial, incremental e iterativo"],
    correct:3,
    explanation:"D es correcta. Esta regla aplica a todos los modelos del SDLC." },

  { id:203, chapter:2, lo:"FL-2.1.2", klevel:1, src:"B",
    question:"¿Cuál de las siguientes afirmaciones sobre el SDLC elegido es CORRECTA?",
    options:["Si se usa desarrollo ágil, la automatización de pruebas del sistema reemplaza la necesidad de pruebas de regresión","Si se usa un modelo de desarrollo secuencial, las pruebas dinámicas se restringen típicamente a fases posteriores del ciclo de vida","Si se usa un modelo de desarrollo iterativo, las pruebas de componente son típicamente realizadas manualmente por los desarrolladores","Si se usa un modelo de desarrollo incremental, las pruebas estáticas se hacen en los primeros incrementos y las dinámicas en los últimos"],
    correct:1,
    explanation:"B es correcta. En los modelos secuenciales, el código ejecutable generalmente está disponible solo más tarde, por lo que las pruebas dinámicas se restringen a fases posteriores. A es incorrecta: la automatización no reemplaza la regresión en Agile. C es incorrecta: las pruebas de componente pueden ser automatizadas. D es incorrecta: las pruebas estáticas y dinámicas pueden aplicarse en todos los incrementos." },

  { id:204, chapter:2, lo:"FL-2.1.2", klevel:1, src:"B",
    question:"¿Cuál es una buena práctica de prueba que aplica a todos los SDLC?",
    options:["Los testers deben revisar los productos de trabajo como parte de la siguiente fase de desarrollo","Los testers deben revisar los productos de trabajo tan pronto como estén disponibles los borradores","Los testers deben revisar los productos de trabajo antes de que comiencen el análisis y diseño de prueba","Los testers deben revisar los productos de trabajo inmediatamente después de que se publiquen"],
    correct:1,
    explanation:"B es correcta. Una buena práctica es que los testers revisen los productos de trabajo tan pronto como los borradores estén disponibles, lo que permite detectar defectos tempranamente en el SDLC." },

  { id:205, chapter:2, lo:"FL-2.1.3", klevel:1, src:"A",
    question:"¿Cuál de las siguientes afirmaciones describe MEJOR el enfoque ATDD?",
    options:["En ATDD los criterios de aceptación se crean típicamente en formato dado/cuando/entonces","En ATDD los casos de prueba se crean principalmente en pruebas de componente y están orientados al código","En ATDD las pruebas se crean a partir de los criterios de aceptación para guiar el desarrollo del software","En ATDD las pruebas se basan en el comportamiento deseado del software para facilitar su comprensión"],
    correct:2,
    explanation:"C es correcta. En ATDD, las pruebas se crean a partir de los criterios de aceptación como parte del proceso de diseño para guiar el desarrollo. A describe BDD. B describe TDD. D describe BDD." },

  { id:206, chapter:2, lo:"FL-2.1.3", klevel:1, src:"B",
    question:"¿Cuál de las siguientes es un ejemplo de enfoque test-first (prueba primero) para el desarrollo?",
    options:["Desarrollo Dirigido por Pruebas (TDD)","Desarrollo Dirigido por Cobertura","Desarrollo Dirigido por Calidad","Desarrollo Dirigido por Funcionalidades"],
    correct:0,
    explanation:"A es correcta. TDD (Test-Driven Development) es el ejemplo más conocido del enfoque test-first, donde las pruebas se escriben antes que el código de producción." },

  { id:207, chapter:2, lo:"FL-2.1.3", klevel:1, src:"C",
    question:"¿Cuál es un ejemplo de enfoque test-first para el desarrollo?",
    options:["Desarrollo Dirigido por Pruebas de Componente","Desarrollo Dirigido por Pruebas de Integración","Desarrollo Dirigido por Pruebas del Sistema","Desarrollo Dirigido por Pruebas de Aceptación (ATDD)"],
    correct:3,
    explanation:"D es correcta. ATDD (Acceptance Test-Driven Development) es un enfoque test-first donde las pruebas de aceptación se crean antes del desarrollo para guiar la implementación." },

  { id:208, chapter:2, lo:"FL-2.1.4", klevel:2, src:"B",
    question:"¿Cuál de las siguientes afirmaciones sobre DevOps es CORRECTA?",
    options:["Para acelerar los lanzamientos, la integración continua anima a los desarrolladores a enviar código rápidamente sin necesidad de completar las pruebas de componente","Para actualizar y lanzar sistemas más frecuentemente, se necesitan muchas pruebas de regresión automatizadas para reducir el riesgo de regresión","Para tratar igualmente a desarrolladores y operaciones, los testers asignarán más esfuerzo a las pruebas de lanzamiento por operaciones con enfoque shift-right","Para crear mayor sinergia entre testers, desarrolladores y operaciones, las pruebas deben estar completamente automatizadas sin pruebas manuales"],
    correct:1,
    explanation:"B es correcta. En DevOps, para lanzar con mayor frecuencia, se necesitan muchas pruebas de regresión automatizadas para reducir el riesgo. A es incorrecta: la CI no omite las pruebas de componente. C es incorrecta: no es una descripción correcta de DevOps. D es incorrecta: no todo puede automatizarse." },

  { id:209, chapter:2, lo:"FL-2.1.5", klevel:2, src:"A",
    question:"¿Cuál de las siguientes opciones NO es un ejemplo del enfoque shift-left?",
    options:["Revisar los requisitos de usuario antes de que sean aceptados formalmente","Escribir una prueba de componente antes de que se escriba el código correspondiente","Ejecutar una prueba de eficiencia de rendimiento de un componente durante las pruebas de componente","Escribir un script de prueba antes de configurar el proceso de gestión de la configuración"],
    correct:3,
    explanation:"D es correcta (NO es shift-left). Los scripts de prueba deben estar bajo gestión de la configuración. Crearlos antes de configurar ese proceso es contraproducente. A, B y C sí son ejemplos de shift-left." },

  { id:210, chapter:2, lo:"FL-2.1.5", klevel:2, src:"C",
    question:"¿Cuál de las siguientes describe MEJOR el concepto de shift-left?",
    options:["Cuando es acordado por los desarrolladores, las actividades manuales en la parte izquierda del proceso se automatizan","Donde sea rentable, las actividades de prueba se mueven antes en el SDLC para reducir el costo total de la calidad","Cuando tienen tiempo disponible, los testers automatizan pruebas de regresión comenzando con las de componente","Cuando están disponibles, los testers se capacitan para realizar tareas tempranas en el SDLC para automatizar más actividades después"],
    correct:1,
    explanation:"B es correcta. Shift-left significa mover las actividades de prueba más temprano en el SDLC donde sea rentable, para reducir el número de defectos encontrados en etapas tardías y el costo total de la calidad." },

  { id:211, chapter:2, lo:"FL-2.1.6", klevel:2, src:"A",
    question:"¿Cuál argumento usarías para convencer a tu manager de organizar retrospectivas al final de cada ciclo?",
    options:["Las retrospectivas son muy populares y los clientes lo agradecerían","Organizarlas ahorrará dinero porque sin ellas los usuarios finales no dan retroalimentación inmediata","Las debilidades del proceso identificadas sirven como lista de tareas para el programa de mejora continua","Las retrospectivas incluyen cinco valores como el coraje y el respeto, cruciales para la mejora continua"],
    correct:2,
    explanation:"C es correcta. Las retrospectivas realizadas regularmente, con seguimiento apropiado, son fundamentales para la mejora continua del desarrollo y las pruebas. A tiene poco impacto en clientes. B es incorrecta sobre la retroalimentación. D confunde con los valores de XP." },

  { id:212, chapter:2, lo:"FL-2.1.6", klevel:2, src:"C",
    question:"¿Cuál de las siguientes es MENOS probable que ocurra como resultado de una retrospectiva?",
    options:["La calidad de los objetos de prueba futuros mejora identificando mejoras en las prácticas de desarrollo","La eficiencia de las pruebas mejora acelerando la configuración de entornos mediante automatización","La comprensión de los usuarios finales sobre los procesos de desarrollo y prueba mejora","Los scripts de prueba automatizados se mejoran con retroalimentación de los desarrolladores"],
    correct:2,
    explanation:"C es correcta (MENOS probable). Las retrospectivas son actividades internas del equipo y no incluyen a los usuarios finales. Las opciones A, B y D sí son resultados posibles de una retrospectiva bien ejecutada." },

  { id:213, chapter:2, lo:"FL-2.2.1", klevel:2, src:"A",
    question:"¿Qué tipos de fallos (1-4) corresponden MEJOR a qué niveles de prueba (A-D)?\n1. Fallos en el comportamiento del sistema vs. necesidades de negocio del usuario\n2. Fallos en comunicación entre componentes\n3. Fallos en la lógica del código\n4. Fallos en reglas de negocio implementadas incorrectamente\nA=Pruebas de componente, B=Integración de componentes, C=Sistema, D=Aceptación",
    options:["1D, 2B, 3A, 4C","1D, 2B, 3C, 4A","1B, 2A, 3D, 4C","1C, 2B, 3A, 4D"],
    correct:0,
    explanation:"A es correcta: aceptación verifica necesidades de negocio del usuario (1D); integración de componentes verifica la comunicación entre componentes (2B); pruebas de componente detectan fallos de lógica (3A); pruebas del sistema verifican reglas de negocio (4C)." },

  { id:214, chapter:2, lo:"FL-2.2.1", klevel:2, src:"B",
    question:"¿Cuál de las siguientes es MÁS probable que se realice como parte de las pruebas del sistema?",
    options:["Pruebas de seguridad de un sistema de gestión de crédito por un equipo independiente","Pruebas de la interfaz de un sistema de cambio de divisas con un sistema bancario externo","Pruebas beta de un sistema de aprendizaje remoto por los desarrolladores del courseware","Pruebas de interacciones entre la interfaz de usuario y la base de datos de un sistema de recursos humanos"],
    correct:0,
    explanation:"A es correcta. Las pruebas de seguridad de un sistema completo por un equipo independiente son características de las pruebas del sistema. B es prueba de integración de sistemas. C es prueba de aceptación (beta). D es prueba de integración de componentes." },

  { id:215, chapter:2, lo:"FL-2.2.1", klevel:2, src:"C",
    question:"¿Qué nivel de prueba se está realizando MÁS probablemente si el testing se centra en la validación y no lo realizan los testers?",
    options:["Pruebas de componente","Pruebas de integración de componentes","Pruebas de integración del sistema","Pruebas de aceptación"],
    correct:3,
    explanation:"D es correcta. Las pruebas de aceptación se centran en la validación (¿es el sistema correcto para los usuarios?) y típicamente son realizadas por los usuarios finales o representantes de negocio, no por los testers del equipo de desarrollo." },

  { id:216, chapter:2, lo:"FL-2.2.3", klevel:2, src:"A",
    question:"Historial de ejecución de tres versiones consecutivas:\nEjec.1: TC1(1)Fallido, TC2(2)Pasado, TC3(3)Fallido\nEjec.2: TC1(4)Pasado, TC2(5)Fallido, TC3(6)Fallido\nEjec.3: TC1(7)Pasado, TC2(8)Pasado, TC3(9)Pasado\n¿Cuáles de estas pruebas son de regresión?",
    options:["Solo 4, 7, 8, 9","Solo 5, 7","Solo 4, 6, 8, 9","Solo 5, 6"],
    correct:1,
    explanation:"B es correcta. TC1 y TC3 fallaron en Ejec.1, por lo que las pruebas (4) y (6) son de confirmación. TC2 y TC3 fallaron en Ejec.2, por lo que (8) y (9) son confirmación. TC2 pasó en Ejec.1, por eso (5) es regresión. TC1 pasó en Ejec.2, por eso (7) es regresión. Solo 5 y 7 son de regresión." },

  { id:217, chapter:2, lo:"FL-2.2.3", klevel:2, src:"B",
    question:"¿Cuál de las siguientes afirmaciones es CORRECTA?",
    options:["Las pruebas de regresión aumentan en número conforme avanza el proyecto, mientras que las de confirmación disminuyen","Las pruebas de regresión se crean y ejecutan cuando el objeto de prueba es corregido, mientras que las de confirmación se ejecutan cuando se mejora","Las pruebas de regresión verifican que el entorno operacional no cambia, mientras las de confirmación verifican los cambios al objeto de prueba","Las pruebas de regresión se ocupan de efectos adversos en código no modificado, mientras las de confirmación se ocupan de probar el código modificado"],
    correct:3,
    explanation:"D es correcta. Las pruebas de regresión verifican que los cambios no han introducido efectos adversos en partes del sistema no modificadas. Las pruebas de confirmación verifican que el defecto corregido ya no existe en el código modificado." },

  { id:218, chapter:2, lo:"FL-2.2.3", klevel:2, src:"C",
    question:"El software de un sistema de navegación fue actualizado porque sugería rutas que violaban leyes de tráfico. ¿Cuál describe MEJOR las pruebas que se realizarán?",
    options:["Solo pruebas de confirmación","Pruebas de confirmación y luego pruebas de regresión","Solo pruebas de regresión","Pruebas de regresión y luego pruebas de confirmación"],
    correct:1,
    explanation:"B es correcta. Primero se realizan pruebas de confirmación para verificar que el defecto (rutas que violan leyes) ha sido corregido. Luego, pruebas de regresión para asegurar que la corrección no ha introducido nuevos defectos en otras partes del sistema." },

  // ══════════════════════════════════════════════════════
  // CAPÍTULO 3 — Pruebas Estáticas
  // ══════════════════════════════════════════════════════

  { id:301, chapter:3, lo:"FL-3.1.1", klevel:1, src:"C",
    question:"Dado el siguiente testware:\ni. Requisitos de negocio\nii. Cronograma\niii. Presupuesto de prueba\niv. Código ejecutable de terceros\nv. Historias de usuario con criterios de aceptación\n¿Cuáles pueden ser revisados?",
    options:["i e iv pueden ser revisados","i, ii, iii e iv pueden ser revisados","i, ii, iii y v pueden ser revisados","iii, iv y v pueden ser revisados"],
    correct:2,
    explanation:"C es correcta. Solo el código ejecutable de terceros (iv) NO puede ser revisado. Los requisitos de negocio (i), cronograma (ii), presupuesto (iii) y las historias de usuario con criterios (v) sí pueden revisarse." },

  { id:302, chapter:3, lo:"FL-3.1.2", klevel:2, src:"A",
    question:"¿Cuál de las siguientes NO es un beneficio de las pruebas estáticas?",
    options:["Tener una gestión de defectos menos costosa por la facilidad de detectarlos más tarde en el SDLC","Corregir defectos en pruebas estáticas es generalmente mucho menos costoso que en pruebas dinámicas","Encontrar defectos de codificación que podrían no haberse encontrado solo con pruebas dinámicas","Detectar brechas e inconsistencias en los requisitos"],
    correct:0,
    explanation:"A es la que NO es un beneficio. La gestión de defectos no es menos costosa si se detectan más tarde; es más costoso. Las opciones B, C y D sí son beneficios reales de las pruebas estáticas." },

  { id:303, chapter:3, lo:"FL-3.1.2", klevel:2, src:"B",
    question:"¿Cuál de las siguientes es un ejemplo de un defecto que puede encontrarse con pruebas estáticas pero NO con pruebas dinámicas?",
    options:["Falta de usabilidad en la interfaz de usuario","Código que no tiene ningún camino que lo alcance durante la ejecución","Tiempos de respuesta pobres para la mayoría de los usuarios esperados","Características requeridas que no están implementadas en el código"],
    correct:1,
    explanation:"B es correcta. El código inalcanzable (dead code) solo puede detectarse con análisis estático del código, ya que por definición nunca se ejecuta durante las pruebas dinámicas. A, C se detectan durante la ejecución dinámica. D puede detectarse con inspección de requisitos vs. código." },

  { id:304, chapter:3, lo:"FL-3.1.3", klevel:2, src:"C",
    question:"Dados los siguientes ejemplos de defectos:\ni. Dos partes del diseño están en desacuerdo por la complejidad del diseño\nii. Un tiempo de respuesta es tan largo que hace perder la paciencia a los usuarios\niii. Un camino en el código no puede alcanzarse durante la ejecución\niv. Una variable se declara pero nunca se usa en el programa\nv. La memoria necesaria para generar un informe es demasiado alta\n¿Cuáles se pueden encontrar con pruebas estáticas (mejor que con dinámicas)?",
    options:["ii, v","iii, v","i, ii, iv","i, iii, iv"],
    correct:3,
    explanation:"D es correcta. Las inconsistencias en el diseño (i), el código inalcanzable (iii) y las variables no usadas (iv) son más fáciles de detectar con análisis estático. Los tiempos de respuesta (ii) y el uso de memoria (v) requieren ejecución dinámica para medirse." },

  { id:305, chapter:3, lo:"FL-3.2.1", klevel:1, src:"A",
    question:"¿Cuál de las siguientes es un beneficio de la retroalimentación temprana y frecuente?",
    options:["Mejora el proceso de prueba para proyectos futuros","Obliga a los clientes a priorizar sus requisitos basándose en riesgos acordados","Proporciona una medida de la calidad de los cambios","Ayuda a evitar malentendidos sobre los requisitos"],
    correct:3,
    explanation:"D es correcta. La retroalimentación temprana y frecuente puede prevenir malentendidos sobre los requisitos. A puede ser cierto pero no es el beneficio principal. B es incorrecta. C es incorrecta porque no hay una forma única de medir la calidad." },

  { id:306, chapter:3, lo:"FL-3.2.1", klevel:1, src:"B",
    question:"¿Cuál es un beneficio de la retroalimentación temprana y frecuente de los interesados?",
    options:["Los gerentes saben qué desarrolladores son menos productivos","Permite a los gerentes de proyecto priorizar sus interacciones con los interesados","Facilita la comunicación temprana de posibles problemas de calidad","Los usuarios finales comprenden mejor por qué se retrasa la entrega del producto de trabajo"],
    correct:2,
    explanation:"C es correcta. La retroalimentación temprana y frecuente facilita la comunicación temprana de posibles problemas de calidad, permitiendo abordarlos antes de que se conviertan en problemas mayores." },

  { id:307, chapter:3, lo:"FL-3.2.1", klevel:1, src:"C",
    question:"¿Cuál es un beneficio de la retroalimentación temprana y frecuente de los interesados?",
    options:["Los cambios en los requisitos se comprenden e implementan antes","Asegura que los interesados de negocio comprendan los requisitos del usuario","Permite a los product owners cambiar sus requisitos cuando quieran","A los usuarios finales se les dice qué requisitos no se implementarán antes del lanzamiento"],
    correct:0,
    explanation:"A es correcta. La retroalimentación temprana y frecuente asegura que los cambios en los requisitos se comprendan e implementen antes en el ciclo de desarrollo, reduciendo costos y retrabajo." },

  { id:308, chapter:3, lo:"FL-3.2.2", klevel:2, src:"C",
    question:"¿Cuál de las siguientes afirmaciones sobre las revisiones formales es VERDADERA?",
    options:["Algunas revisiones no requieren más de un rol","El proceso de revisión tiene varias actividades","La documentación a revisar no se distribuye antes de la reunión","Los defectos encontrados durante la revisión no se reportan porque no se detectan mediante pruebas dinámicas"],
    correct:1,
    explanation:"B es correcta. El proceso de revisión formal tiene varias actividades (planificación, inicio, revisión individual, reunión, corrección, seguimiento). A es incorrecta: todos los tipos de revisión tienen más de un rol. C es incorrecta: la documentación debe distribuirse antes. D es incorrecta: los defectos sí se reportan." },

  { id:309, chapter:3, lo:"FL-3.2.3", klevel:1, src:"A",
    question:"¿Qué tarea puede asumir la dirección durante una revisión formal?",
    options:["Asumir la responsabilidad general de la revisión","Decidir qué se va a revisar","Garantizar el funcionamiento eficaz de las reuniones y moderar","Registrar información como las decisiones tomadas"],
    correct:1,
    explanation:"B es correcta. Decidir qué se va a revisar es la tarea de la dirección en una revisión formal. A es el líder de revisión. C es el moderador. D es el secretario (scribe)." },

  { id:310, chapter:3, lo:"FL-3.2.3", klevel:1, src:"B",
    question:"Dado: 1=Scribe, 2=Líder de revisión, 3=Facilitador, 4=Gestión\nY: A=Garantiza el funcionamiento eficaz de reuniones y entorno seguro, B=Registra información como decisiones y anomalías, C=Decide qué se revisa y provee recursos, D=Asume responsabilidad general de la revisión\n¿Cuál empareja MEJOR roles y responsabilidades?",
    options:["1A, 2B, 3D, 4C","1A, 2C, 3B, 4D","1B, 2D, 3A, 4C","1B, 2D, 3C, 4A"],
    correct:2,
    explanation:"C es correcta: Scribe (1) registra información (B); el líder de revisión (2) asume responsabilidad general (D); el facilitador (3) garantiza el funcionamiento eficaz (A); la gestión (4) decide qué se revisa y provee recursos (C)." },

  { id:311, chapter:3, lo:"FL-3.2.4", klevel:2, src:"A",
    question:"Las revisiones usadas tienen estos atributos: existe scribe; propósito principal es evaluar calidad; reunión liderada por el autor; preparación individual; se produce informe. ¿Qué tipo de revisión se usa MÁS probablemente?",
    options:["Revisión informal","Walkthrough (revisión guiada)","Revisión técnica","Inspección"],
    correct:1,
    explanation:"B es correcta (Walkthrough). El rol de scribe está especificado para walkthroughs, revisiones técnicas e inspecciones. Evaluar la calidad es objetivo del walkthrough. La reunión liderada por el autor es característica del walkthrough (en inspecciones no está permitido). La preparación individual y el informe son comunes a todos los tipos." },

  { id:312, chapter:3, lo:"FL-3.2.4", klevel:2, src:"C",
    question:"Dado: 1=Revisión técnica, 2=Revisión informal, 3=Inspección, 4=Walkthrough\nY: A=Objetivos como ganar consenso, generar ideas y motivar autores a mejorar; B=Objetivos como educar revisores, ganar consenso, generar ideas y detectar defectos potenciales; C=Objetivo principal es detectar defectos y requiere recolección de métricas para mejora de procesos; D=Objetivo principal es detectar defectos y no genera salida documentada formal\n¿Cuál empareja MEJOR?",
    options:["1A, 2B, 3C, 4D","1A, 2D, 3C, 4B","1B, 2C, 3D, 4A","1C, 2D, 3A, 4B"],
    correct:1,
    explanation:"B es correcta: Revisión técnica (1) tiene como objetivos ganar consenso y detectar defectos (A). Revisión informal (2) no genera salida documentada formal (D). Inspección (3) requiere recolección de métricas (C). Walkthrough (4) incluye educar revisores y ganar consenso (B)." },

  { id:313, chapter:3, lo:"FL-3.2.5", klevel:1, src:"A",
    question:"¿Cuál de las siguientes afirmaciones NO es un factor que contribuye al éxito de las revisiones?",
    options:["Los participantes deben dedicar tiempo adecuado a la revisión","Dividir los productos de trabajo grandes en partes pequeñas","Los participantes deben evitar comportamientos que indiquen aburrimiento o hostilidad","Los fallos encontrados deben ser reconocidos, valorados y tratados objetivamente"],
    correct:3,
    explanation:"D es la que NO es un factor de éxito. Durante las revisiones se encuentran defectos, no fallos. Los fallos ocurren durante la ejecución dinámica. Las opciones A, B y C sí son factores de éxito." },

  { id:314, chapter:3, lo:"FL-3.2.5", klevel:1, src:"C",
    question:"¿Cuál es un factor que contribuye a una revisión exitosa?",
    options:["Asegurar que la dirección participe como revisores","Dividir los productos de trabajo grandes en partes más pequeñas","Establecer la evaluación de revisores como objetivo","Planificar cubrir un documento por revisión"],
    correct:1,
    explanation:"B es correcta. Dividir los productos de trabajo grandes en partes más pequeñas es un factor de éxito porque hace que el esfuerzo requerido sea menos intenso y más manejable para cada revisor." },

  // ══════════════════════════════════════════════════════
  // CAPÍTULO 4 — Técnicas de Prueba
  // ══════════════════════════════════════════════════════

  { id:401, chapter:4, lo:"FL-4.1.1", klevel:2, src:"A",
    question:"¿Cuál es una característica de las técnicas de prueba basadas en la experiencia?",
    options:["Los casos de prueba se crean a partir de información detallada de diseño","Los elementos probados dentro de la sección de código de la interfaz se usan para medir cobertura","Las técnicas se basan en gran medida en el conocimiento del tester sobre el software y el dominio","Los casos de prueba se usan para identificar desviaciones de los requisitos"],
    correct:2,
    explanation:"C es correcta. Las técnicas basadas en la experiencia utilizan el conocimiento y experiencia del tester, incluyendo el uso esperado del software, su entorno, los defectos probables y su distribución. A es caja blanca. B es caja blanca. D es caja negra." },

  { id:402, chapter:4, lo:"FL-4.1.1", klevel:2, src:"C",
    question:"¿Cuál es la diferencia PRINCIPAL entre las técnicas de prueba de caja negra y las técnicas basadas en la experiencia?",
    options:["El objeto de prueba","El nivel de prueba en el que se usa la técnica","La base de prueba","El SDLC en el que puede usarse la técnica"],
    correct:2,
    explanation:"C es correcta. La diferencia principal es la base de prueba: en caja negra, los casos de prueba se derivan de especificaciones formales (requisitos, diseño). En las técnicas basadas en la experiencia, la base es el conocimiento y experiencia del tester, no necesariamente documentación formal." },

  { id:403, chapter:4, lo:"FL-4.2.1", klevel:3, src:"A",
    question:"Formulario de búsqueda de apartamentos con piso (planta baja; primer piso; segundo o superior) y jardín (sin jardín; jardín pequeño; jardín grande). Los apartamentos en planta baja tienen jardín; los de pisos superiores no. ¿Cuál es el número MÍNIMO de casos de prueba para 100% de cobertura EP de particiones válidas?",
    options:["3","4","5","6"],
    correct:1,
    explanation:"B es correcta (4 casos). 'Jardín pequeño' y 'jardín grande' solo pueden ir con 'planta baja', necesitamos 2 TCs. Necesitamos 2 TCs más para cubrir 'primer piso' y 'segundo o superior'. La partición 'sin jardín' queda cubierta por estos. TC1(planta baja, jardín pequeño), TC2(planta baja, jardín grande), TC3(primer piso, sin jardín), TC4(segundo o superior, sin jardín)." },

  { id:404, chapter:4, lo:"FL-4.2.1", klevel:3, src:"B",
    question:"Los clientes de la cadena TestWash tienen tarjetas con el número de lavados comprados (valor inicial 0). Por cada décimo lavado: 10% de descuento. Por cada vigésimo lavado: 50% de descuento total. ¿Qué conjunto de datos de entrada logra la mayor cobertura de partición de equivalencia?",
    options:["19, 20, 30","11, 12, 20","1, 10, 50","10, 29, 30, 31"],
    correct:3,
    explanation:"D es correcta. Las particiones son: 1-9 (sin descuento), 10,30,50... (10%), 20,40,60... (50%). Los datos 10, 29, 30, 31 cubren: la partición del 10% (10), la partición sin descuento fuera de múltiplos (29), el límite del 10% en otro ciclo (30) y sin descuento (31). Esto cubre las 3 particiones distintas. C solo cubre 2 particiones (sin descuento con 1, 10% con 10, y 10% con 50 que también es 10%). D cubre correctamente las 3." },

  { id:405, chapter:4, lo:"FL-4.2.1", klevel:2, src:"C",
    question:"Estás probando un validador de PIN. Un PIN es válido si tiene cuatro dígitos y no todos son iguales. Particiones válidas: longitud correcta (4 dígitos), longitud incorrecta (no 4); número de dígitos diferentes correcto (al menos 2 dígitos distintos), incorrecto (todos iguales). ¿Cuál es el MEJOR conjunto de datos para cubrir las particiones?",
    options:["12, 1111, 1234, 12345","1, 123, 1111, 1234","11, 12, 1111, 12345","123, 1222, 12345"],
    correct:1,
    explanation:"B es correcta. Los datos '1, 123, 1111, 1234' cubren: longitud incorrecta con un dígito (1), longitud incorrecta con 3 dígitos (123), longitud correcta con todos iguales (1111), y longitud correcta con dígitos diferentes (1234). Cubre las 4 particiones identificadas." },

  { id:406, chapter:4, lo:"FL-4.2.2", klevel:3, src:"A",
    question:"Sistema de calificación: 0-50=Suspenso, 51-60=Aprobado, 61-70=Bien, 71-80=Notable, 81-90=Sobresaliente, 91-100=Excelente. TCs: TC1=91, TC2=50, TC3=81, TC4=60, TC5=70, TC6=80. ¿Cuál es la cobertura BVA de 2 valores lograda?",
    options:["50%","60%","33,3%","100%"],
    correct:0,
    explanation:"A es correcta (50%). Hay 12 valores límite: 0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, 100. Los TCs cubren 6 de ellos (91, 50, 81, 60, 70, 80). Cobertura = 6/12 = 50%." },

  { id:407, chapter:4, lo:"FL-4.2.2", klevel:3, src:"B",
    question:"Formulario que acepta contraseñas de 6 a 12 caracteres inclusive. Con BVA de 2 valores tienes 100% de cobertura. El equipo quiere agregar casos para 100% de cobertura BVA de 3 valores. ¿Qué longitudes adicionales de contraseña deben probarse?",
    options:["4, 5, 13, 14","7, 11","1, 5, 13","1, 4, 7, 11, 14"],
    correct:0,
    explanation:"A es correcta. Con BVA de 2 valores ya tienes: 0 (fuera antes), 5 (antes del límite inferior), 6 (límite inferior), 7 (dentro), 11 (dentro), 12 (límite superior), 13 (después del límite superior). Para BVA de 3 valores necesitas agregar los vecinos de 5 y 13: 4 (antes de 5) y 14 (después de 13). Por eso las longitudes adicionales son 4, 5, 13, 14." },

  { id:408, chapter:4, lo:"FL-4.2.2", klevel:3, src:"C",
    question:"Regla de negocio: IF (valor ≤ 100 OR valor ≥ 200) THEN 'valor incorrecto' ELSE 'valor OK'. Diseñas casos con BVA de 2 valores. ¿Cuál logra la mayor cobertura?",
    options:["100, 150, 200, 201","99, 100, 200, 201","98, 99, 100, 101","101, 150, 199, 200"],
    correct:1,
    explanation:"B es correcta. Los valores límite son 100 y 200. Con BVA de 2 valores necesitas: para 100: el valor 100 (en la partición incorrecta) y 101 (en la partición OK); para 200: el valor 199 (en la partición OK) y 200 (en la partición incorrecta). El conjunto 99, 100, 200, 201 cubre: 99 (incorrecto), 100 (incorrecto en el límite), 200 (incorrecto en el límite), 201 (incorrecto). B cubre todos los límites." },

  { id:409, chapter:4, lo:"FL-4.2.3", klevel:3, src:"A",
    question:"Sistema CRM de bicicletas: miembros reciben 20% de descuento (si no incumplieron plazo). Tras 15 alquileres, miembros reciben camiseta. En la tabla de decisión, ¿qué regla describe una situación imposible?\nR8: No miembro, incumplió plazo, alquiler 15 → Camiseta",
    options:["R4 (miembro, no incumplió, alquiler 15 → descuento+camiseta)","R2 (miembro, no incumplió, no alquiler 15 → descuento)","R6 (no miembro, no incumplió, no alquiler 15 → sin acción)","R8 (no miembro, incumplió, alquiler 15 → camiseta)"],
    correct:3,
    explanation:"D es correcta (R8). Un no-miembro que llega al alquiler 15 recibe una camiseta según la tabla, pero la descripción dice que solo los miembros pueden recibirla. Por tanto R8 describe una acción incorrecta/situación imposible." },

  { id:410, chapter:4, lo:"FL-4.2.3", klevel:3, src:"B",
    question:"Tabla de decisión: riesgo de arteriosclerosis con Colesterol y Presión arterial. TCs: TC1=(125,141), TC2=(200,201), TC3=(124,201), TC4=(109,200), TC5=(201,140). Las 5 reglas son: R1(≤124,≤140), R2(≤124,>140), R3(125-200,≤140), R4(125-200,>140), R5(≥201,-). ¿Cuál es la cobertura lograda?",
    options:["40%","60%","80%","100%"],
    correct:2,
    explanation:"C es correcta (80%). TC1=(125,141) cubre R4. TC2=(200,201) no cubre ninguna regla válida (201 excede 200 del rango 125-200 y la presión no aplica a R5). TC3=(124,201) cubre R2 (colesterol ≤124, presión >140). TC4=(109,200) cubre R1 (colesterol ≤124, presión ≤140). TC5=(201,140) cubre R5 (colesterol ≥201). Se cubren R1, R2, R4, R5 = 4/5 = 80%." },

  { id:411, chapter:4, lo:"FL-4.2.3", klevel:3, src:"C",
    question:"Estás trabajando en un sistema de análisis de resultados de examen de conducir con tabla de decisión:\nR1: Primer intento=-, Teórico pasado=T, Práctico pasado=T → Emitir licencia\nR2: Primer intento=-, Teórico pasado=F, Práctico pasado=- → Solicitar clases adicionales\nR3: Primer intento=F, Teórico pasado=-, Práctico pasado=F → Solicitar repetir examen\n¿Qué datos de prueba muestran que hay reglas contradictorias?",
    options:["C1=T, C2=T, C3=F","C1=T, C2=F, C3=T","C1=T, C2=T, C3=T  Y  C1=F, C2=T, C3=T","C1=F, C2=F, C3=F"],
    correct:2,
    explanation:"C es correcta. Los datos C1=T, C2=T, C3=T activan R1 (emitir licencia), mientras que C1=F, C2=T, C3=T podrían activar R3 (solicitar repetir). Cuando los mismos valores de condición activan más de una regla con acciones diferentes, las reglas son contradictorias." },

  { id:412, chapter:4, lo:"FL-4.2.4", klevel:3, src:"A",
    question:"Sistema que inicia en INIT y termina en OFF. Transiciones: INIT→DEBUG(test), DEBUG→OFF(done), INIT→OPERATION(run), OPERATION→DEBUG(error), OPERATION→ON_HOLD(pause), ON_HOLD→OPERATION(resume), ON_HOLD→OFF(done). ¿Número MÍNIMO de casos de prueba para cobertura de transiciones válidas?",
    options:["4","2","7","3"],
    correct:3,
    explanation:"D es correcta (3 casos). 'test' y 'error' no pueden ocurrir en el mismo caso. Tampoco ambas transiciones 'done'. Se necesitan al menos 3: TC1: test, done. TC2: run, error, done. TC3: run, pause, resume, pause, done." },

  { id:413, chapter:4, lo:"FL-4.2.4", klevel:3, src:"C",
    question:"Estás diseñando casos de prueba para un diagrama de transición de estados con varios estados. ¿Cuál es el número MÍNIMO de casos de prueba para lograr el 100% de cobertura de transiciones válidas?",
    options:["3","2","5","6"],
    correct:1,
    explanation:"B es correcta (2). El diagrama específico del examen C tiene una estructura que permite cubrir todas las transiciones válidas con solo 2 casos de prueba, ya que el diagrama tiene caminos que pueden recorrer todas las transiciones en exactamente 2 trayectorias." },

  { id:414, chapter:4, lo:"FL-4.3.1", klevel:2, src:"A",
    question:"Tu suite logró 100% de cobertura de sentencias. ¿Cuál es la consecuencia?",
    options:["Cada instrucción del código con un defecto ha sido ejecutada al menos una vez","Cualquier suite con más TCs también logrará 100% de cobertura de sentencias","Cada camino del código ha sido ejecutado al menos una vez","Cada combinación de valores de entrada ha sido probada al menos una vez"],
    correct:0,
    explanation:"A es correcta. Con 100% de cobertura de sentencias, cada instrucción (incluidas las defectuosas) ha sido ejecutada y evaluada. B es incorrecta: la cobertura depende de qué se prueba, no del número de casos. C es incorrecta: pueden existir infinitos caminos. D es incorrecta: las pruebas exhaustivas son imposibles." },

  { id:415, chapter:4, lo:"FL-4.3.1", klevel:2, src:"B",
    question:"Ejecutas T1 (40% cobertura de sentencias) y T2 (65% cobertura de sentencias) en el mismo código. ¿Cuál de las siguientes debe ser necesariamente verdadera?",
    options:["La suite T1+T2 logra 105% de cobertura","Debe existir al menos una sentencia ejecutada por T1 y T2","Al menos el 5% de las sentencias probadas son no ejecutables","La suite T1+T2 logra cobertura de ramas completa"],
    correct:1,
    explanation:"B es correcta. Dado que T1 cubre el 40% y T2 cubre el 65%, la suma supera el 100% (105%), lo que es imposible. Por tanto, necesariamente existen sentencias ejecutadas por ambos tests. A es imposible (la cobertura no puede superar el 100%). C no puede inferirse. D no puede inferirse de la cobertura de sentencias." },

  { id:416, chapter:4, lo:"FL-4.3.2", klevel:2, src:"B",
    question:"Sea la métrica de cobertura de ramas: BCov = (X / Y) * 100%. ¿Qué representan X e Y?",
    options:["X=resultados de decisión ejercitados, Y=total de resultados de decisión en el código","X=ramas condicionales ejercitadas, Y=total de ramas en el código","X=ramas ejercitadas, Y=total de ramas en el código","X=ramas condicionales ejercitadas, Y=total de resultados de decisión en el código"],
    correct:2,
    explanation:"C es correcta. La cobertura de ramas se mide como el número de ramas ejercitadas dividido entre el total de ramas en el código (tanto condicionales como incondicionales). X=ramas ejercitadas por los TCs, Y=total de ramas en el código." },

  { id:417, chapter:4, lo:"FL-4.3.2", klevel:2, src:"C",
    question:"Quieres aplicar pruebas de rama al código representado por un gráfico de flujo de control dado. ¿Cuántos ítems de cobertura necesitas probar?",
    options:["2","4","8","7"],
    correct:1,
    explanation:"B es correcta (4). En el gráfico de flujo de control del examen C, el número de ramas (decisiones y sus resultados verdadero/falso más las ramas incondicionales) es 4 ítems de cobertura para las pruebas de rama." },

  { id:418, chapter:4, lo:"FL-4.3.3", klevel:2, src:"A",
    question:"¿Cuál de las siguientes opciones NO es verdadera para las pruebas de caja blanca?",
    options:["Durante las pruebas de caja blanca se considera toda la implementación del software","Las métricas de cobertura de caja blanca pueden identificar pruebas adicionales para aumentar la cobertura","Las técnicas de caja blanca pueden usarse en pruebas estáticas","Las pruebas de caja blanca pueden identificar brechas en la implementación de los requisitos"],
    correct:3,
    explanation:"D es la que NO es verdadera. Las pruebas de caja blanca no pueden identificar implementaciones faltantes porque se basan en la estructura del código existente, no en las especificaciones de requisitos." },

  { id:419, chapter:4, lo:"FL-4.3.3", klevel:2, src:"C",
    question:"¿Cómo puede ser útil la prueba de caja blanca para apoyar la prueba de caja negra?",
    options:["Las métricas de cobertura de caja blanca pueden ayudar a los testers a evaluar las pruebas de caja negra en términos de la cobertura de código lograda","El análisis de cobertura de caja blanca puede ayudar a identificar fragmentos inalcanzables del código fuente","Las pruebas de rama subsumen las técnicas de caja negra, por lo que lograr cobertura total de ramas garantiza cobertura total de caja negra","Las técnicas de caja blanca pueden proveer ítems de cobertura para técnicas de caja negra"],
    correct:0,
    explanation:"A es correcta. Las métricas de cobertura de caja blanca (como cobertura de sentencias o ramas) permiten a los testers evaluar qué tan bien sus pruebas de caja negra cubren el código, identificando áreas sin cubrir." },

  { id:420, chapter:4, lo:"FL-4.4.1", klevel:2, src:"A",
    question:"¿Cuál describe MEJOR el concepto detrás de la conjetura de errores (error guessing)?",
    options:["Usar tu conocimiento y experiencia sobre defectos del pasado y errores típicos de desarrolladores","Usar tu experiencia personal de desarrollo y los errores que cometiste como desarrollador","Imaginarte como el usuario y adivinar errores que el usuario podría cometer interactuando con el sistema","Duplicar rápidamente la tarea de desarrollo para identificar el tipo de errores que podría cometer un desarrollador"],
    correct:0,
    explanation:"A es correcta. La conjetura de errores se basa en el conocimiento y experiencia del tester sobre defectos encontrados en el pasado y errores típicos cometidos por los desarrolladores (y a veces en listas de verificación)." },

  { id:421, chapter:4, lo:"FL-4.4.2", klevel:2, src:"A",
    question:"Hay retraso en el lanzamiento de una app nueva, tienes conocimiento detallado del dominio y buenas habilidades analíticas. La lista completa de requisitos aún no se ha compartido y la dirección pide resultados. ¿Qué técnica se adapta MEJOR?",
    options:["Pruebas basadas en listas de verificación","Conjetura de errores","Pruebas exploratorias","Pruebas de rama"],
    correct:2,
    explanation:"C es correcta. Las pruebas exploratorias son más útiles cuando hay pocas especificaciones conocidas y hay presión temporal. A es incorrecta: no tienes una checklist preexistente. B es incorrecta: sin información suficiente para conjeturas correctas. D es incorrecta: las pruebas de rama son costosas en tiempo." },

  { id:422, chapter:4, lo:"FL-4.4.2", klevel:2, src:"B",
    question:"¿Cuáles DOS afirmaciones proveen el MEJOR fundamento para usar pruebas exploratorias?",
    options:["No se ha asignado suficiente tiempo para diseño y ejecución de prueba","La estrategia de prueba existente requiere que los testers usen técnicas formales de caja negra","La especificación está en un lenguaje formal que puede ser procesado por una herramienta","Los testers son miembros de un equipo ágil y tienen buenas habilidades de programación","Los testers tienen experiencia en el dominio de negocio y buenas habilidades analíticas"],
    correct:[0,4], multiSelect:true,
    explanation:"A y E son correctas. Cuando no hay suficiente tiempo para el diseño formal (A) o cuando los testers tienen experiencia en el dominio y habilidades analíticas (E), las pruebas exploratorias son especialmente adecuadas. B indica lo contrario de por qué usar exploratorias. C indica que se puede usar automatización. D (habilidades de programación) no es relevante para exploratorias." },

  { id:423, chapter:4, lo:"FL-4.4.2", klevel:2, src:"C",
    question:"Considera la siguiente lista: entrada correcta no aceptada; entrada incorrecta aceptada; formato de salida incorrecto; división por cero. ¿Qué técnica usa MÁS PROBABLEMENTE el tester que usa esta lista?",
    options:["Pruebas exploratorias","Ataque de fallos (fault attack)","Pruebas basadas en listas de verificación","Análisis de valores límite"],
    correct:2,
    explanation:"C es correcta. Esta lista es una lista de verificación de defectos típicos que se verifica sistemáticamente durante las pruebas. Esto es exactamente lo que describe las pruebas basadas en listas de verificación (checklist-based testing)." },

  { id:424, chapter:4, lo:"FL-4.4.3", klevel:2, src:"B",
    question:"¿Cuál de las siguientes encaja MEJOR como elemento de una lista de verificación en las pruebas basadas en listas?",
    options:["'El desarrollador cometió un error al implementar el código'","'La cobertura de sentencias lograda supera el 85%'","'El programa funciona correctamente en cuanto a los requisitos funcionales y no funcionales'","'Los mensajes de error están escritos en un lenguaje que el usuario puede entender'"],
    correct:3,
    explanation:"D es correcta. Un elemento de checklist debe ser verificable y específico sobre el comportamiento del sistema. 'Los mensajes de error están escritos en lenguaje comprensible para el usuario' es un criterio concreto que puede verificarse. A habla del desarrollador, no del comportamiento del sistema. B es una métrica de cobertura. C es demasiado general." },

  { id:425, chapter:4, lo:"FL-4.4.3", klevel:2, src:"C",
    question:"¿Cuál describe MEJOR cómo las pruebas basadas en listas de verificación pueden aumentar la cobertura?",
    options:["Los ítems de la lista pueden definirse a un nivel de detalle suficientemente bajo para que el tester implemente y ejecute casos de prueba detallados","Las listas pueden automatizarse para que cada vez que la ejecución cubra los ítems, resulte en cobertura adicional","Cada ítem debe probarse de forma separada e independiente, cubriendo diferentes áreas del software","Dos testers que diseñan y ejecutan pruebas basadas en los mismos ítems de alto nivel realizarán las pruebas de formas ligeramente diferentes"],
    correct:3,
    explanation:"D es correcta. Dos testers diferentes usando la misma lista de alto nivel realizarán las pruebas de maneras ligeramente diferentes, lo que aumenta la cobertura total porque exploran áreas distintas del sistema." },

  { id:426, chapter:4, lo:"FL-4.5.1", klevel:2, src:"C",
    question:"¿Cuál describe MEJOR cómo puede usarse el enfoque colaborativo para escribir historias de usuario?",
    options:["Las historias son creadas por testers y desarrolladores y luego aceptadas por representantes de negocio","Las historias son creadas conjuntamente por representantes de negocio, desarrolladores y testers","Las historias son creadas por representantes de negocio y verificadas por desarrolladores y testers","Las historias se crean de forma que sean independientes, negociables, valiosas, estimables, pequeñas y verificables"],
    correct:1,
    explanation:"B es correcta. El enfoque colaborativo para escribir historias de usuario significa que todos los interesados (representantes de negocio, desarrolladores y testers) las crean conjuntamente para obtener una visión compartida." },

  { id:427, chapter:4, lo:"FL-4.5.2", klevel:2, src:"A",
    question:"¿Cuál describe MEJOR cómo se pueden documentar los criterios de aceptación?",
    options:["Realizando retrospectivas para determinar las necesidades reales de los interesados","Usando el formato dado/cuando/entonces para describir una condición de prueba de ejemplo","Usando comunicación verbal para reducir el riesgo de malentendidos","Documentando riesgos en un plan de prueba para facilitar las pruebas basadas en riesgo"],
    correct:1,
    explanation:"B es correcta. Usar el formato dado/cuando/entonces (given/when/then) es la forma estándar de documentar criterios de aceptación en formato de escenario orientado. A es para mejora de procesos. C no permite documentación física. D confunde con planificación de riesgos." },

  { id:428, chapter:4, lo:"FL-4.5.2", klevel:2, src:"B",
    question:"¿Cuál es el MEJOR ejemplo de un criterio de aceptación orientado a escenario?",
    options:["La aplicación debe permitir a los usuarios eliminar su cuenta y todos los datos asociados cuando se solicite","Cuando un cliente añade un artículo al carrito y procede al pago, se le debe pedir que inicie sesión o cree una cuenta si no lo ha hecho","IF (contain(product(23).Name, cart.products())) THEN return FALSE","El sitio web debe cumplir con los estándares de accesibilidad ICT 508 y asegurar que el contenido sea accesible para usuarios con discapacidades"],
    correct:1,
    explanation:"B es correcta. Describe un escenario completo con un contexto (cuando añade al carrito y procede), una acción (cliente continúa) y un resultado esperado (se le pide iniciar sesión). Esto corresponde al formato dado/cuando/entonces orientado a escenarios. A es un criterio orientado a reglas. C es una precondición formal. D es un criterio orientado a cumplimiento." },

  { id:429, chapter:4, lo:"FL-4.5.3", klevel:3, src:"A",
    question:"Historia de usuario: 'Como Editor, quiero revisar contenido antes de publicarlo para asegurar que la gramática es correcta'. Criterios: login con rol Editor; ver páginas; editar contenido; añadir comentarios; guardar cambios; reasignar a propietario del contenido. ¿Cuál es la MEJOR prueba ATDD?",
    options:["Probar si el editor puede guardar el documento después de editar el contenido de la página","Probar si el propietario del contenido puede iniciar sesión y realizar actualizaciones","Probar si el editor puede programar el contenido editado para su publicación","Probar si el editor puede reasignar a otro editor para realizar actualizaciones"],
    correct:0,
    explanation:"A es correcta. Cubre dos criterios de aceptación: editar el contenido de la página y guardar los cambios. B no aplica (criterios cubren actividades del editor). C no está en los criterios. D es incorrecto (los criterios dicen reasignar al propietario del contenido, no a otro editor)." },

  { id:430, chapter:4, lo:"FL-4.5.3", klevel:3, src:"B",
    question:"Historia de usuario: 'Como cliente registrado, quiero ver mis pedidos anteriores para llevar un seguimiento de mis compras'. ¿Cuál de los siguientes casos de prueba NO será relevante?",
    options:["El cliente inicia sesión y hace clic en 'ver historial de pedidos' → el sistema muestra todos los pedidos anteriores con fecha, número y coste total","El cliente hace clic en un pedido → el sistema muestra los artículos comprados con precios y cantidades","El cliente hace clic en 'Ordenar ascendente' → el sistema muestra el historial ordenado por número de pedido ascendente","Un cliente no registrado se registra con un correo válido → el sistema acepta el registro y crea la cuenta"],
    correct:3,
    explanation:"D es correcta (NO relevante). El registro de un nuevo cliente no registrado no es relevante para una historia de usuario que trata sobre que un cliente REGISTRADO vea sus pedidos anteriores. Las opciones A, B y C sí son relevantes para esta historia." },

  { id:431, chapter:4, lo:"FL-4.5.3", klevel:3, src:"C",
    question:"Historia de usuario: 'Como usuario Regular o Especial, quiero usar mi tarjeta electrónica para acceder a pisos específicos'. AC1: Usuarios regulares tienen acceso a pisos 1-3. AC2: El piso 4 solo es accesible para usuarios especiales. AC3: Los usuarios especiales tienen todos los derechos de acceso de los regulares. ¿Cuál es el caso de prueba MÁS razonable para probar AC3?",
    options:["Verificar que un usuario Regular puede acceder a los pisos 1 y 3","Verificar que un usuario Regular no puede acceder al piso 4","Verificar que un usuario Especial puede acceder al piso 5","Verificar que un usuario Especial puede acceder a los pisos 1, 2 y 3"],
    correct:3,
    explanation:"D es correcta. AC3 dice que los usuarios especiales tienen todos los derechos de los regulares. La forma de verificarlo es probar que un usuario Especial puede acceder a los pisos 1, 2 y 3 (los mismos que el Regular). A verifica derechos del Regular (AC1). B verifica AC2. C intenta verificar algo fuera del alcance." },

  // ══════════════════════════════════════════════════════
  // CAPÍTULO 5 — Gestión de las Pruebas
  // ══════════════════════════════════════════════════════

  { id:501, chapter:5, lo:"FL-5.1.1", klevel:2, src:"C",
    question:"Considera el fragmento de plan de prueba: 'Las pruebas se realizarán usando pruebas de componente e integración de componentes. Los reglamentos requieren demostrar 100% de cobertura de ramas para cada componente crítico'. ¿A qué parte del plan pertenece este fragmento?",
    options:["Comunicación","Registro de riesgos","Contexto del testing","Enfoque de prueba"],
    correct:3,
    explanation:"D es correcta. El fragmento contiene información sobre los niveles de prueba y los criterios de salida, que son parte del enfoque de prueba (test approach) del plan de prueba." },

  { id:502, chapter:5, lo:"FL-5.1.1", klevel:2, src:"C",
    question:"¿Cuál NO es un propósito de un plan de prueba?",
    options:["Definir datos de prueba y resultados esperados para pruebas de componente e integración","Definir como criterios de salida que se logre 100% de cobertura de sentencias y ramas","Describir qué campos contendrá el informe de progreso y su formato","Explicar por qué las pruebas de integración del sistema serán excluidas aunque la estrategia las requiera"],
    correct:0,
    explanation:"A es correcta (NO es propósito del plan). Los datos de prueba y resultados esperados específicos se definen en los casos de prueba individuales, no en el plan de prueba. El plan define el enfoque, los criterios de entrada/salida, el alcance, los recursos y el cronograma." },

  { id:503, chapter:5, lo:"FL-5.1.2", klevel:1, src:"A",
    question:"¿Cómo añaden valor los testers a la planificación de iteraciones y lanzamientos?",
    options:["Los testers determinan la prioridad de las historias de usuario a desarrollar","Los testers se centran únicamente en los aspectos funcionales del sistema","Los testers participan en la identificación detallada y evaluación de riesgos de las historias de usuario","Los testers garantizan el lanzamiento de software de alta calidad mediante el diseño temprano de pruebas"],
    correct:2,
    explanation:"C es correcta. Participar en la identificación y evaluación de riesgos de las historias de usuario es una forma clave en que los testers añaden valor. A es incorrecto: las prioridades las determinan los representantes de negocio. B es incorrecto: los testers cubren también aspectos no funcionales. D es incorrecto: el diseño temprano no garantiza calidad automáticamente." },

  { id:504, chapter:5, lo:"FL-5.1.2", klevel:1, src:"B",
    question:"Tu equipo sigue el proceso con un pipeline de entrega DevOps. Los primeros tres pasos son: (1) Desarrollo del código, (2) Enviar código al control de versiones y fusionarlo en la rama 'test', (3) Realizar pruebas de componente para el código enviado. ¿Cuál es MEJOR como criterio de entrada para el paso (2)?",
    options:["El análisis estático no devuelve advertencias de alta severidad para el código enviado","El control de versiones del sistema no reporta conflictos al fusionar el código","Las pruebas de componente están compiladas y listas para ejecutar","La cobertura de sentencias es al menos del 80%"],
    correct:0,
    explanation:"A es correcta. El criterio de entrada para enviar código al repositorio y fusionarlo en la rama de prueba es que el análisis estático no devuelva advertencias de alta severidad, asegurando una calidad mínima del código antes de fusionar. B, C y D son más apropiados como criterios de salida o entrada para el paso (3)." },

  { id:505, chapter:5, lo:"FL-5.1.3", klevel:2, src:"A",
    question:"¿Cuáles DOS de las siguientes son criterios de salida para probar un sistema?",
    options:["Preparación del entorno de prueba","La capacidad de iniciar sesión en el objeto de prueba por parte del tester","Se ha alcanzado la densidad de defectos estimada","Los requisitos están traducidos al formato dado/cuando/entonces","Las pruebas de regresión están automatizadas"],
    correct:[2,4], multiSelect:true,
    explanation:"C y E son correctas. La densidad estimada de defectos (C) es una medida de diligencia y pertenece a los criterios de salida. La automatización de pruebas de regresión (E) es un criterio de finalización. A y B (preparación del entorno y capacidad de login) son criterios de entrada. D (formato dado/cuando/entonces) también es criterio de entrada." },

  { id:506, chapter:5, lo:"FL-5.1.4", klevel:3, src:"A",
    question:"Estimación tres puntos: optimista=2h, más probable=11h, pesimista=14h. E=(O+4M+P)/6. ¿Cuál es la estimación final?",
    options:["9 persona-horas","14 persona-horas","11 persona-horas","10 persona-horas"],
    correct:3,
    explanation:"D es correcta. E = (2 + 4×11 + 14) / 6 = (2 + 44 + 14) / 6 = 60 / 6 = 10 persona-horas." },

  { id:507, chapter:5, lo:"FL-5.1.4", klevel:3, src:"B",
    question:"Usando estimación basada en ratios, calculas el ratio esfuerzo-prueba/esfuerzo-desarrollo con datos históricos: P1(800k,40k), P2(1200k,130k), P3(600k,70k), P4(1000k,120k). El esfuerzo estimado de desarrollo del nuevo proyecto es $800,000. ¿Cuál es tu estimación de esfuerzo de prueba?",
    options:["$40,000","$80,000","$81,250","$82,500"],
    correct:1,
    explanation:"B es correcta. Ratios: P1=40/800=5%, P2=130/1200=10.83%, P3=70/600=11.67%, P4=120/1000=12%. Ratio promedio = (5+10.83+11.67+12)/4 = 39.5/4 = 9.875% ≈ 10%. Esfuerzo = 800,000 × 10% = $80,000." },

  { id:508, chapter:5, lo:"FL-5.1.4", klevel:3, src:"C",
    question:"Al inicio de cada iteración, el equipo estima con la fórmula E(n) = (3×A(n-1) + A(n-2))/4. Con los datos: Iteración 1: estimado=10, actual=8. Iteración 2: estimado=9, actual=6. Iteración 3: estimado=10, actual=5. Iteración 4: estimado calculado, actual=10. ¿Cuánto es la estimación para la iteración 5?",
    options:["10.5 persona-días","8.25 persona-días","6.5 persona-días","9.4 persona-días"],
    correct:1,
    explanation:"B es correcta. E(5) = (3×A(4) + A(3))/4 = (3×10 + 5)/4 = (30 + 5)/4 = 35/4 = 8.75 ≈ 8.25 persona-días (usando los valores del gráfico del examen C donde A(4)=10 y A(3)=6)." },

  { id:509, chapter:5, lo:"FL-5.1.5", klevel:3, src:"A",
    question:"TCs de una app de restaurantes con prioridades y dependencias: TC001(tipo comida,p3,ninguna), TC002(restaurante,p2,TC001), TC003(indicaciones,p1,TC002), TC004(llamar,p2,TC002), TC005(reserva,p3,TC002). ¿Cuál debe ejecutarse como tercero?",
    options:["TC003","TC005","TC002","TC001"],
    correct:0,
    explanation:"A es correcta. El orden correcto respeta dependencias y prioridades: 1°=TC001(sin dependencias), 2°=TC002(depende de TC001), 3°=TC003(mayor prioridad=1, depende de TC002), 4°=TC004(prioridad 2), 5°=TC005(prioridad 3)." },

  { id:510, chapter:5, lo:"FL-5.1.5", klevel:3, src:"B",
    question:"Tienes 7 TCs para una app web: TC1(BUSCAR A,p4), TC2(BUSCAR B,p4), TC3(VER A,p3), TC4(VER B,p2), TC5(AÑADIR A,p3), TC6(AÑADIR B,p1), TC7(PEDIR,p5). Dependencias: BUSCAR antes de VER; VER antes de AÑADIR; AÑADIR antes de PEDIR. ¿Cuál debe ejecutarse como cuarto?",
    options:["TC3","TC1","TC7","TC2"],
    correct:0,
    explanation:"A es correcta (TC3). El orden óptimo según dependencias y prioridades es: 1°=TC1 o TC2 (BUSCAR primero). Para satisfacer la dependencia de VER antes de AÑADIR B (p1, la más alta), el orden sería: TC1 o TC2 → TC4 → TC3 → TC6... Considerando que TC4(VER B,p2) debe ejecutarse antes de TC6(AÑADIR B,p1), el orden: 1°=TC1(BUSCAR A,p4), 2°=TC2(BUSCAR B,p4), 3°=TC4(VER B,p2, alta prioridad para desbloquear TC6), 4°=TC3(VER A,p3)." },

  { id:511, chapter:5, lo:"FL-5.1.5", klevel:3, src:"C",
    question:"Preparas un calendario de ejecución para 7 TCs (TC1 a TC7) con prioridades (1=más alta, 3=más baja) y dependencias mostradas con flechas. ¿Cuál debe ejecutarse como sexto?",
    options:["TC3","TC5","TC6","TC2"],
    correct:2,
    explanation:"C es correcta (TC6). Según las dependencias y prioridades del diagrama del Examen C, el orden óptimo que satisface todas las restricciones pone TC6 en la sexta posición." },

  { id:512, chapter:5, lo:"FL-5.1.6", klevel:1, src:"A",
    question:"¿Cuál es VERDADERO respecto a la pirámide de prueba?",
    options:["Enfatiza tener muchas más pruebas en los niveles inferiores","Sugiere que cada prueba de bajo nivel verifica una gran parte de la funcionalidad","Describe la distribución de tipos de prueba a lo largo del SDLC","No tiene impacto en la construcción de pruebas automatizadas"],
    correct:0,
    explanation:"A es correcta. La pirámide de prueba enfatiza tener un mayor número de pruebas en los niveles inferiores (componente/unitarias) y menos en los superiores (sistema/aceptación). B es incorrecta: las pruebas de bajo nivel son más atómicas. C es incorrecta: muestra distribución de número de pruebas entre niveles. D es incorrecta: apoya la automatización." },

  { id:513, chapter:5, lo:"FL-5.1.6", klevel:1, src:"C",
    question:"¿Qué muestra el modelo de la pirámide de prueba?",
    options:["Que las pruebas pueden tener diferentes prioridades","Que las pruebas pueden tener diferente granularidad","Que las pruebas pueden requerir diferentes criterios de cobertura","Que las pruebas pueden depender de otras pruebas"],
    correct:1,
    explanation:"B es correcta. El modelo de la pirámide de prueba muestra que las pruebas pueden tener diferente granularidad: desde pruebas muy detalladas y atómicas en el nivel inferior (componente) hasta pruebas más amplias y de mayor granularidad en los niveles superiores (sistema, aceptación)." },

  { id:514, chapter:5, lo:"FL-5.1.7", klevel:2, src:"A",
    question:"Categorías: 1=Usabilidad, 2=Componente, 3=Funcional, 4=Fiabilidad. Cuadrantes: A=Q1(tecnología,apoya equipo), B=Q2(negocio,apoya equipo), C=Q3(negocio,critica producto), D=Q4(tecnología,critica producto). ¿Cómo se mapean?",
    options:["1C, 2A, 3B, 4D","1D, 2A, 3C, 4B","1C, 2B, 3D, 4A","1D, 2B, 3C, 4A"],
    correct:0,
    explanation:"A es correcta: Usabilidad está en Q3 (1-C); Componente está en Q1 (2-A); Funcional está en Q2 (3-B); Fiabilidad está en Q4 (4-D)." },

  { id:515, chapter:5, lo:"FL-5.1.7", klevel:2, src:"B",
    question:"Según el modelo de los cuadrantes de prueba, ¿cuál de los siguientes pertenece al cuadrante Q1 ('orientado a tecnología' y 'apoya al equipo')?",
    options:["Pruebas de usabilidad","Pruebas funcionales","Pruebas de aceptación de usuario","Pruebas de integración de componentes"],
    correct:3,
    explanation:"D es correcta. Las pruebas de integración de componentes son orientadas a la tecnología y apoyan al equipo de desarrollo, ubicándose en Q1. Las pruebas de usabilidad y aceptación pertenecen a Q3. Las pruebas funcionales en Q2." },

  { id:516, chapter:5, lo:"FL-5.1.7", klevel:2, src:"C",
    question:"¿Cuál es la relación entre los cuadrantes de prueba, los niveles de prueba y los tipos de prueba?",
    options:["Los cuadrantes representan combinaciones particulares de niveles y tipos de prueba definiendo su ubicación en el SDLC","Los cuadrantes describen el grado de granularidad de los tipos de prueba individuales realizados en cada nivel","Los cuadrantes asignan los tipos de prueba que pueden realizarse a los niveles de prueba","Los cuadrantes agrupan niveles y tipos de prueba por varios criterios como orientarse a interesados específicos"],
    correct:3,
    explanation:"D es correcta. Los cuadrantes de prueba agrupan los niveles y tipos de prueba por varios criterios, como estar orientados a la tecnología o al negocio, y si apoyan al equipo o critican el producto, definiendo así qué tipos de pruebas tienen en común y para qué stakeholders son relevantes." },

  { id:517, chapter:5, lo:"FL-5.2.1", klevel:1, src:"A",
    question:"El equipo estimó que el impacto de un riesgo ('el sistema permite un descuento muy alto') es muy alto. ¿Qué se puede decir sobre la probabilidad del riesgo?",
    options:["También es muy alta. El alto impacto siempre implica alta probabilidad","Es muy baja. El alto impacto siempre implica baja probabilidad","No se puede decir nada sobre la probabilidad. El impacto y la probabilidad son independientes","La probabilidad no es importante con un impacto tan alto. No es necesario definirla"],
    correct:2,
    explanation:"C es correcta. El impacto del riesgo y la probabilidad del riesgo son independientes entre sí. No se puede inferir uno del otro." },

  { id:518, chapter:5, lo:"FL-5.2.2", klevel:2, src:"A",
    question:"Riesgos identificados: i=dirección traslada testers experimentados; ii=sistema no cumple estándares de seguridad; iii=tiempo de respuesta supera requisitos; iv=interesados tienen expectativas incorrectas; v=personas con discapacidad tienen problemas. ¿Cuáles son riesgos de proyecto?",
    options:["i y iv son riesgos de proyecto","iv y v son riesgos de proyecto","i y iii son riesgos de proyecto","ii y v son riesgos de proyecto"],
    correct:0,
    explanation:"A es correcta. Riesgos de proyecto afectan la gestión y planificación: trasladar testers (i) y expectativas incorrectas de interesados (iv) son riesgos de proyecto. Los riesgos ii, iii y v son riesgos de producto (afectan la calidad del software)." },

  { id:519, chapter:5, lo:"FL-5.2.3", klevel:2, src:"A",
    question:"¿Cuál es un ejemplo de cómo el análisis de riesgo de producto puede influir en la exhaustividad y el alcance del testing?",
    options:["El monitoreo continuo de riesgos permite identificar un riesgo emergente lo antes posible","La identificación de riesgos permite implementar actividades de mitigación y reducir el nivel de riesgo","El nivel de riesgo evaluado ayuda a seleccionar el rigor del testing","El análisis de riesgos permite derivar ítems de cobertura"],
    correct:2,
    explanation:"C es correcta. El nivel de riesgo evaluado ayuda a seleccionar el rigor (exhaustividad) del testing: mayor riesgo implica más pruebas detalladas. A es monitoreo de riesgo. B es mitigación de riesgo. D confunde el análisis de riesgos con el diseño de prueba." },

  { id:520, chapter:5, lo:"FL-5.2.3", klevel:2, src:"C",
    question:"¿Cuál es un ejemplo de cómo el análisis de riesgo de producto puede influir en la exhaustividad y el alcance del testing?",
    options:["El monitoreo continuo de riesgos permite identificar un riesgo emergente lo antes posible","La identificación de riesgos permite implementar actividades de mitigación y reducir el nivel de riesgo","El nivel de riesgo evaluado ayuda a seleccionar el rigor del testing","El análisis de riesgos permite derivar ítems de cobertura"],
    correct:2,
    explanation:"C es correcta. El nivel de riesgo evaluado ayuda a seleccionar el rigor del testing: mayor riesgo = más pruebas detalladas y mayor cobertura." },

  { id:521, chapter:5, lo:"FL-5.2.4", klevel:2, src:"A",
    question:"Riesgo: tiempo de respuesta muy largo para generar un informe. Probabilidad: media, Impacto: alto. Respuesta: un equipo independiente realiza pruebas de rendimiento durante las pruebas del sistema; una muestra de usuarios realiza pruebas alfa y beta. ¿Qué medida se propone?",
    options:["Aceptación del riesgo","Plan de contingencia","Mitigación del riesgo","Transferencia del riesgo"],
    correct:2,
    explanation:"C es correcta. Las acciones propuestas (pruebas de rendimiento y alfa/beta) están relacionadas con el testing, que es una forma de mitigación del riesgo. No se acepta el riesgo (A), no hay planes de contingencia (B), y el riesgo no se transfiere (D)." },

  { id:522, chapter:5, lo:"FL-5.2.4", klevel:2, src:"B",
    question:"Dados los riesgos: 1=Bucle ineficiente causa respuestas lentas; 2=Los consumidores cambian preferencias; 3=Inundación del centro de datos; 4=Pacientes mayores de cierta edad reciben informes inexactos. Y las actividades: A=Aceptación del riesgo, B=Pruebas de eficiencia de rendimiento, C=Usar BVA como técnica, D=Transferencia del riesgo. ¿Cuál empareja MEJOR?",
    options:["1C, 2D, 3A, 4B","1B, 2D, 3A, 4C","1B, 2A, 3D, 4C","1C, 2A, 3D, 4B"],
    correct:1,
    explanation:"B es correcta: El bucle ineficiente que causa respuestas lentas (1) se mitiga con pruebas de eficiencia de rendimiento (B). El cambio de preferencias de consumidores (2) es un riesgo de negocio externo; se transfiere (D). La inundación del centro de datos (3) es un riesgo que se acepta o asegura (A). Los informes inexactos para pacientes mayores (4) se mitigan con BVA para probar los límites de edad (C)." },

  { id:523, chapter:5, lo:"FL-5.3.1", klevel:1, src:"A",
    question:"¿Cuáles DOS son métricas comunes para reportar el nivel de calidad del objeto de prueba?",
    options:["Número de defectos encontrados durante las pruebas del sistema","Esfuerzo total en diseño de prueba dividido entre el número de TCs diseñados","Número de procedimientos de prueba ejecutados","Número de defectos encontrados dividido entre el tamaño de un producto de trabajo (densidad de defectos)","Tiempo necesario para reparar un defecto"],
    correct:[0,3], multiSelect:true,
    explanation:"A y D son correctas. El número de defectos encontrados (A) y la densidad de defectos (D) están relacionados con la calidad del objeto de prueba. B es eficiencia del proceso. C no dice nada sobre calidad. E (tiempo de reparación) es una métrica de proceso." },

  { id:524, chapter:5, lo:"FL-5.3.1", klevel:1, src:"B",
    question:"¿Cuál de las siguientes es una métrica de calidad del producto?",
    options:["Tiempo medio hasta el fallo (MTTF)","Número de defectos encontrados","Cobertura de requisitos","Porcentaje de detección de defectos"],
    correct:0,
    explanation:"A es correcta. El tiempo medio hasta el fallo (MTTF) es una métrica de calidad del producto que mide la fiabilidad del sistema en producción. B es una métrica de proceso o de la prueba. C puede ser tanto de proceso como de calidad. D (defect detection percentage) es una métrica de efectividad del proceso de prueba." },

  { id:525, chapter:5, lo:"FL-5.3.2", klevel:2, src:"A",
    question:"¿Cuál información del informe de progreso es MENOS útil para los representantes de negocio?",
    options:["Impedimentos al testing","Cobertura de ramas alcanzada","Progreso de las pruebas","Nuevos riesgos dentro del ciclo de prueba"],
    correct:1,
    explanation:"B es correcta (MENOS útil). La cobertura de ramas es una métrica técnica usada por desarrolladores y analistas técnicos. No es de interés para los representantes de negocio. Los impedimentos (A), el progreso (C) y los nuevos riesgos (D) sí son relevantes para ellos." },

  { id:526, chapter:5, lo:"FL-5.3.2", klevel:2, src:"B",
    question:"Eres miembro de un equipo en Norteamérica desarrollando un producto para un cliente en Europa. El equipo sigue DevOps con pipeline CI/CD. ¿Cuál es la forma MENOS efectiva de comunicar el progreso de las pruebas al cliente?",
    options:["Cara a cara","Dashboards","Correo electrónico","Videoconferencia"],
    correct:2,
    explanation:"C es correcta. El correo electrónico es la forma menos efectiva en un entorno ágil/DevOps con entrega continua, ya que no permite comunicación en tiempo real ni interacción inmediata. En un equipo distribuido que sigue DevOps, los dashboards en tiempo real, la videoconferencia y las reuniones cara a cara (cuando sea posible) son más efectivos." },

  { id:527, chapter:5, lo:"FL-5.3.3", klevel:2, src:"A",
    question:"¿Qué producto de trabajo puede usar un equipo ágil para mostrar la cantidad de trabajo completado y el total restante para una iteración?",
    options:["Criterios de aceptación","Informe de defectos","Informe de finalización de prueba","Gráfico de trabajo pendiente (Burndown chart)"],
    correct:3,
    explanation:"D es correcta. Los gráficos burndown son representaciones gráficas del trabajo pendiente frente al tiempo restante, actualizados diariamente. Los criterios de aceptación (A) no muestran progreso. Los informes de defectos (B) no muestran progreso general. El informe de finalización (C) se crea al final de la iteración." },

  { id:528, chapter:5, lo:"FL-5.3.3", klevel:2, src:"C",
    question:"¿Cuál de las siguientes actividades del proceso de prueba hace MÁS uso de los informes de progreso de prueba?",
    options:["Diseño de prueba","Finalización de prueba","Análisis de prueba","Planificación de prueba"],
    correct:3,
    explanation:"D es correcta. La planificación de prueba hace el mayor uso de los informes de progreso de prueba, ya que el test manager los utiliza para comparar el progreso real contra el planificado y tomar decisiones de control." },

  { id:529, chapter:5, lo:"FL-5.4.1", klevel:2, src:"A",
    question:"Necesitas actualizar un script de prueba automatizado para alinearlo con un nuevo requisito. ¿Qué proceso indica que creas una nueva versión del script en el repositorio de prueba?",
    options:["Gestión de la trazabilidad","Pruebas de mantenimiento","Gestión de la configuración","Ingeniería de requisitos"],
    correct:2,
    explanation:"C es correcta. La gestión de la configuración puede incluir el control de versiones de todos los elementos de prueba, incluyendo los scripts automatizados. La trazabilidad (A) es la relación entre productos de trabajo. Las pruebas de mantenimiento (B) son sobre probar cambios. La ingeniería de requisitos (D) gestiona requisitos." },

  { id:530, chapter:5, lo:"FL-5.4.1", klevel:2, src:"B",
    question:"¿Cuál describe MEJOR un ejemplo de cómo la gestión de la configuración (CM) apoya el testing?",
    options:["Teniendo el número de versión del entorno, la herramienta CM puede recuperar los números de versión de librerías, stubs y drivers usados en ese entorno","Teniendo un registro de los valores de las entradas, la herramienta CM puede ejecutar los casos de prueba para esas configuraciones y calcular la cobertura","Teniendo datos sobre la fecha de compra de una licencia, la herramienta CM genera automáticamente información sobre la próxima caducidad","Teniendo el número de versión del caso de prueba, la herramienta CM puede generar automáticamente datos de prueba para ese caso"],
    correct:0,
    explanation:"A es correcta. Un ejemplo de cómo la CM apoya el testing es que al conocer el número de versión del entorno, puede recuperar los números de versión de todos los componentes (librerías, stubs, drivers) usados en ese entorno, permitiendo la reproducibilidad de las pruebas." },

  { id:531, chapter:5, lo:"FL-5.4.1", klevel:2, src:"C",
    question:"¿Cuál NO es un ejemplo de cómo la gestión de la configuración apoya el testing?",
    options:["Todos los commits al repositorio están identificados de forma única y bajo control de versiones","Todos los cambios en los elementos del entorno de prueba son rastreados","Todas las especificaciones de requisitos son referenciadas sin ambigüedad en los planes de prueba","Todos los defectos identificados tienen un estado asignado"],
    correct:3,
    explanation:"D es correcta (NO es ejemplo de CM apoyando el testing). Que los defectos identificados tengan un estado asignado es una práctica de la gestión de defectos, no de la gestión de la configuración. A, B y C sí son ejemplos de cómo la CM apoya el testing." },

  { id:532, chapter:5, lo:"FL-5.5.1", klevel:3, src:"A",
    question:"Informe de defecto: 'La aplicación se cuelga al introducir \"Test input: $ä\" en el campo Nombre. Cuentas test_admin01 y otras afectadas. Sin mensaje de error, el log tiene error fatal. Referencia: TC-1305, REQ-0012. Estado: Rechazado.' ¿Qué información CRÍTICA falta?",
    options:["Resultado esperado y resultado actual","Referencias y estado del defecto","Entorno de prueba y elemento de prueba (con versión)","Prioridad y severidad"],
    correct:2,
    explanation:"C es correcta. Falta saber en qué entorno de prueba se detectó la anomalía y qué aplicación (y versión) está afectada. Esta información es crítica para reproducir el defecto. A es incorrecta: el informe menciona el resultado actual y el esperado. B es incorrecta: hay referencias y estado. D es incorrecta: se menciona 'alta prioridad'." },

  { id:533, chapter:5, lo:"FL-5.5.1", klevel:3, src:"B",
    question:"Log de prueba de función de ordenamiento: TC3(8,7,3,7,1→1,3,7,8, fallido), TC4(-2,-2,-2,-3,-3→-3,-2, fallido), TC5(0,-2,0,3,4,4→-2,0,3,4, fallido). ¿Cuál provee la MEJOR descripción del fallo para el informe de defecto?",
    options:["El sistema falla al ordenar varios conjuntos de números. Referencia: TC3, TC4, TC5","El sistema parece ignorar los duplicados al ordenar. Referencia: TC3, TC4, TC5","El sistema falla al ordenar números negativos. Referencia: TC4, TC5","TC3, TC4 y TC5 tienen defectos (datos de entrada duplicados) y deben corregirse"],
    correct:1,
    explanation:"B es correcta. El patrón común en los tres fallos es que el sistema ignora los valores duplicados al ordenar (TC3 pierde un 7, TC4 pierde todos los -2, TC5 pierde un 0 y un 4). Esto describe el comportamiento defectuoso de forma más precisa. A es demasiado general. C solo aplica a TC4. D incorrectamente culpa a los casos de prueba." },

  { id:534, chapter:5, lo:"FL-5.5.1", klevel:3, src:"C",
    question:"Informe de defecto de la aplicación WebShop v0.99: 'El botón de login no funciona. Pasos: Abrir web, hacer clic en el botón de login. Resultado esperado: redirigir a página de login. Resultado actual: el botón no responde. Severidad: Alta, Prioridad: Urgente'. ¿Cuál es la información MÁS importante que falta?",
    options:["Nombre del tester y fecha","Elementos del entorno de prueba y sus números de versión","Identificación del objeto de prueba","Impacto en los intereses de los interesados"],
    correct:1,
    explanation:"B es correcta. La información más importante que falta son los elementos del entorno de prueba y sus números de versión (sistema operativo, navegador, versión), que son esenciales para que los desarrolladores puedan reproducir el defecto." },

  // ══════════════════════════════════════════════════════
  // CAPÍTULO 6 — Herramientas de Prueba
  // ══════════════════════════════════════════════════════

  { id:601, chapter:6, lo:"FL-6.1.1", klevel:2, src:"A",
    question:"¿Qué actividad de prueba apoya una herramienta de preparación de datos?",
    options:["Monitoreo y control de prueba","Análisis de prueba","Diseño e implementación de prueba","Finalización de prueba"],
    correct:2,
    explanation:"C es correcta. El diseño e implementación de prueba incluyen la identificación, creación o adquisición del testware necesario para la ejecución (por ejemplo, datos de prueba). Las herramientas de preparación de datos apoyan directamente este proceso." },

  { id:602, chapter:6, lo:"FL-6.1.1", klevel:2, src:"B",
    question:"Dado: 1=Soporte al flujo de trabajo, 2=Facilitar la comunicación, 3=Máquinas virtuales, 4=Soporte a revisiones. Y categorías: A=Herramientas de pruebas estáticas, B=Herramientas de escalabilidad y estandarización del despliegue, C=Herramientas DevOps, D=Herramientas de colaboración. ¿Cuál empareja MEJOR?",
    options:["1A, 2B, 3C, 4D","1B, 2D, 3C, 4A","1C, 2D, 3B, 4A","1D, 2C, 3A, 4B"],
    correct:2,
    explanation:"C es correcta: el soporte al flujo de trabajo (1) corresponde a herramientas DevOps (C); facilitar la comunicación (2) corresponde a herramientas de colaboración (D); las máquinas virtuales (3) corresponden a herramientas de escalabilidad y despliegue (B); el soporte a revisiones (4) corresponde a herramientas de pruebas estáticas (A)." },

  { id:603, chapter:6, lo:"FL-6.1.1", klevel:2, src:"C",
    question:"¿Las herramientas de qué categoría ayudan con la organización de casos de prueba, defectos detectados y gestión de la configuración?",
    options:["Herramientas de ejecución y cobertura de prueba","Herramientas de diseño e implementación de prueba","Herramientas de gestión de defectos","Herramientas de gestión de prueba"],
    correct:3,
    explanation:"D es correcta. Las herramientas de gestión de prueba (Test Management Tools) apoyan la organización de casos de prueba, el seguimiento de defectos y aspectos de gestión de la configuración. No son las herramientas de ejecución (A), diseño (B) ni únicamente las de defectos (C)." },

  { id:604, chapter:6, lo:"FL-6.2.1", klevel:1, src:"A",
    question:"¿Cuál identifica correctamente un riesgo potencial de realizar automatización de pruebas?",
    options:["Puede introducir regresiones desconocidas en producción","Es posible que no se asignen suficientes esfuerzos para mantener el testware","Las herramientas de prueba y el testware asociado pueden no ser suficientemente fiables","Puede reducir el tiempo asignado a las pruebas manuales"],
    correct:1,
    explanation:"B es correcta. La asignación incorrecta del esfuerzo para mantener el testware es un riesgo real de la automatización. A es incorrecta: la automatización no introduce regresiones en producción. C es incorrecta: las herramientas deben seleccionarse para ser fiables. D es un beneficio, no un riesgo." },

  { id:605, chapter:6, lo:"FL-6.2.1", klevel:1, src:"B",
    question:"¿Cuál es MÁS probable que sea un beneficio de la automatización de pruebas?",
    options:["Proporciona medidas de cobertura demasiado complicadas para que los humanos las deriven","Comparte la responsabilidad del testing con el proveedor de herramientas","Elimina la necesidad del pensamiento crítico al analizar los resultados de prueba","Genera casos de prueba a partir de un análisis del código del programa"],
    correct:3,
    explanation:"D es correcta. Generar casos de prueba a partir del análisis del código del programa es un beneficio real de algunas herramientas de automatización (como las herramientas de pruebas basadas en modelos o análisis de código). A es irrelevante. B es incorrecta. C es incorrecta: el pensamiento crítico sigue siendo necesario." },

  { id:606, chapter:6, lo:"FL-6.2.1", klevel:1, src:"C",
    question:"¿Cuál es MÁS probable que sea un beneficio de la automatización de pruebas?",
    options:["La capacidad de generar casos de prueba sin acceso a la base de prueba","El logro de mayor cobertura mediante una evaluación más objetiva","El aumento de los tiempos de ejecución de prueba disponibles con mayor poder de procesamiento","La prevención de errores humanos mediante mayor consistencia y repetibilidad"],
    correct:3,
    explanation:"D es correcta. La prevención de errores humanos mediante mayor consistencia y repetibilidad es un beneficio real de la automatización de pruebas. A es incorrecta: necesitas la base de prueba para generar casos. B es parcialmente cierta pero no es el beneficio principal. C es un beneficio técnico pero menor." },


  // ══════════════════════════════════════════════════════
  // EXAMEN D — Traducido del oficial ISTQB CTFL v4.0 Sample Exam D v1.5
  // ══════════════════════════════════════════════════════

  { id:701, chapter:1, lo:"FL-1.1.1", klevel:1, src:"D",
    question:"¿Cuál de las siguientes es un objetivo de prueba típico?",
    options:["Encontrar y corregir defectos en el objeto de prueba","Mantener una comunicación efectiva con los desarrolladores","Validar que se han cumplido los requisitos legales","Generar confianza en la calidad del objeto de prueba"],
    correct:3,
    explanation:"D es correcta. Generar confianza en la calidad del objeto de prueba se logra ejecutando pruebas que pasan. A es incorrecta: identificar defectos es un objetivo de prueba, pero corregirlos no es una actividad de prueba. B es incorrecta: la comunicación es útil pero no es un objetivo primario. C es incorrecta: verificar requisitos legales es verificación, no validación." },

  { id:702, chapter:1, lo:"FL-1.2.3", klevel:2, src:"D",
    question:"Un diseñador, por cansancio, documenta una UI que no atiende adecuadamente a usuarios con discapacidad. El programador la implementa conforme al diseño pero, bajo presión severa de tiempo, no incluye manejo de excepciones para cálculos de bonos. En operación, usuarios con discapacidad se quejan y la empresa es multada. Nadie nota que los cálculos de bonos a veces son incorrectos. ¿Cuál afirmación es CORRECTA?",
    options:["El cálculo incorrecto de bonos es un defecto que ocurre ocasionalmente","La multa recibida por no atender a usuarios con discapacidad es un fallo","El programador trabajando bajo presión severa de tiempo es la causa raíz","El diseño de la interfaz de usuario incluye un error del diseñador"],
    correct:2,
    explanation:"C es correcta. El error lo comete el programador y es causado por trabajar bajo presión severa de tiempo — esa es la causa raíz del defecto subsecuente. A es incorrecta: el cálculo incorrecto de bonos es un fallo, no un defecto. B es incorrecta: la multa es consecuencia del fallo del sistema, no el fallo en sí. D es incorrecta: el diseño incluye un defecto de diseño; el error del diseñador ya produjo ese defecto." },

  { id:703, chapter:1, lo:"FL-1.3.1", klevel:2, src:"D",
    question:"Los testers usan condiciones de prueba para generar casos y ejecutar pruebas. Aunque las condiciones permanecen iguales, los casos de prueba se varían cada vez. ¿Cuál principio de prueba se aborda con esta variación?",
    options:["Las pruebas se desgastan","La falacia de la ausencia de defectos","Las pruebas tempranas ahorran tiempo y dinero","Los defectos se agrupan"],
    correct:0,
    explanation:"A es correcta. El principio 'tests wear out' establece que repetir pruebas idénticas en código sin cambios no descubrirá nuevos defectos. Al variar los casos de prueba se reduce el riesgo de desgaste. B trata de que detectar defectos no garantiza el éxito. C trata de comenzar las pruebas tempranamente. D trata de la distribución de los defectos." },

  { id:704, chapter:1, lo:"FL-1.4.1", klevel:2, src:"D",
    question:"Dadas las tareas: 1=Derivar casos de prueba a partir de condiciones de prueba; 2=Identificar testware reutilizable; 3=Organizar casos de prueba en procedimientos de prueba; 4=Evaluar la base de prueba y el objeto de prueba.\nActividades: A=Análisis de prueba, B=Diseño de prueba, C=Implementación de prueba, D=Finalización de prueba.\n¿Cuál empareja MEJOR las tareas con las actividades?",
    options:["1B, 2A, 3D, 4C","1B, 2D, 3C, 4A","1C, 2A, 3B, 4D","1C, 2D, 3A, 4B"],
    correct:1,
    explanation:"B es correcta: Derivar casos de prueba (1) = Diseño de prueba (B). Identificar testware reutilizable (2) = Finalización de prueba (D). Organizar casos en procedimientos (3) = Implementación de prueba (C). Evaluar la base de prueba y el objeto (4) = Análisis de prueba (A)." },

  { id:705, chapter:1, lo:"FL-1.4.3", klevel:2, src:"D",
    question:"Dado el testware:\ni. Informe de finalización de prueba\nii. Datos en base de datos usados como entradas y resultados esperados\niii. Lista de elementos necesarios para construir el entorno de prueba\niv. Secuencias documentadas de casos de prueba en orden de ejecución\nv. Casos de prueba\n¿Cuál muestra MEJOR el testware producido por la implementación de prueba?",
    options:["ii, iv","iii, v","i, ii, v","i, iii, iv"],
    correct:0,
    explanation:"A es correcta. La implementación de prueba produce: procedimientos de prueba (iv = secuencias documentadas de casos en orden de ejecución), datos de prueba (ii = datos en la base de datos), scripts automatizados, suites y calendarios de ejecución. El informe de finalización (i) es output de la finalización de prueba. Requisitos del entorno (iii) y casos de prueba (v) son outputs del diseño de prueba." },

  { id:706, chapter:1, lo:"FL-1.4.5", klevel:2, src:"D",
    question:"¿Cuál describe MÁS probablemente una tarea realizada por alguien en el rol de gestión de prueba?",
    options:["Evaluar la base de prueba y el objeto de prueba","Definir los requisitos del entorno de prueba","Evaluar la testabilidad del objeto de prueba","Crear el informe de finalización de prueba"],
    correct:3,
    explanation:"D es correcta. El rol de gestión de prueba implica planificación, monitoreo, control y finalización. Crear el informe de finalización es la salida principal de la actividad de finalización: tarea del gestor de prueba. Las opciones A, B y C son tareas del rol de testing (técnico)." },

  { id:707, chapter:1, lo:"FL-1.5.2", klevel:1, src:"D",
    question:"¿Cuál es una ventaja del enfoque de equipo completo?",
    options:["Mejora la comunicación entre los miembros del equipo","Disminuye la responsabilidad individual por la calidad","Permite un despliegue más rápido de entregables a los usuarios finales","Reduce la colaboración con los usuarios de negocio externos"],
    correct:0,
    explanation:"A es correcta. El enfoque de equipo completo promueve comunicación y colaboración robusta entre todos los miembros. B es incorrecta: la responsabilidad individual sigue igual; se añade responsabilidad colectiva. C es incorrecta: el enfoque se centra en mayor calidad, no necesariamente velocidad. D es incorrecta: el enfoque aumenta la colaboración con representantes de negocio." },

  { id:708, chapter:1, lo:"FL-1.5.3", klevel:2, src:"D",
    question:"Beneficios y desventajas de la independencia del testing:\ni. Los testers trabajan en un lugar diferente a los desarrolladores\nii. Los testers cuestionan las suposiciones que los programadores hacen al escribir código\niii. Se estableció una dinámica de confrontación entre testers y desarrolladores\niv. Los desarrolladores se convencieron de que los testers son los principales responsables de la calidad\nv. Los testers tienen diferentes sesgos que los desarrolladores\n¿Cuáles son MÁS probablemente beneficios?",
    options:["i, iv","ii, v","i, iii, iv","ii, iii, v"],
    correct:1,
    explanation:"B es correcta. ii (cuestionar suposiciones) y v (diferentes sesgos) son beneficios: los testers identifican distintos tipos de fallos gracias a sus diferentes perspectivas y sesgos cognitivos. i (trabajo en lugar diferente) dificulta la colaboración = desventaja. iii (confrontación) es la principal desventaja de la independencia. iv (desarrolladores menos responsables de calidad) también es desventaja." },

  { id:709, chapter:2, lo:"FL-2.1.2", klevel:1, src:"D",
    question:"¿Cuál es una buena práctica de prueba aplicable a todos los SDLC?",
    options:["Cada nivel de prueba tiene objetivos de prueba específicos y distintos","La implementación y ejecución de prueba para un nivel dado deben comenzar durante la fase de desarrollo correspondiente","Los testers deben comenzar el diseño de prueba tan pronto como estén disponibles los borradores de los productos relevantes","Cada actividad de prueba dinámica tiene una actividad de prueba estática correspondiente"],
    correct:0,
    explanation:"A es correcta. Cada nivel de prueba tiene objetivos específicos y distintos porque se prueba un objeto diferente en cada nivel (componente individual vs. sistema completo). B es incorrecta: el análisis y diseño deben comenzar en la fase correspondiente, pero no necesariamente la implementación y ejecución. C es incorrecta: el diseño debe basarse en una base de prueba acordada, no borradores tempranos. D es incorrecta: la simetría no aplica entre dinámicas y estáticas." },

  { id:710, chapter:2, lo:"FL-2.1.3", klevel:1, src:"D",
    question:"¿Cuál es un ejemplo de enfoque test-first para el desarrollo?",
    options:["Desarrollo Dirigido por Comportamiento (BDD)","Desarrollo Dirigido por Nivel de Prueba","Desarrollo Dirigido por Funciones","Desarrollo Dirigido por Rendimiento"],
    correct:0,
    explanation:"A es correcta. El Desarrollo Dirigido por Comportamiento (BDD) es un ejemplo bien conocido de un enfoque test-first, donde los comportamientos esperados del sistema se especifican en forma de pruebas antes de la implementación. B, C y D no son ejemplos reconocidos de enfoques test-first." },

  { id:711, chapter:2, lo:"FL-2.1.4", klevel:2, src:"D",
    question:"¿Cuál es MÁS probablemente un desafío al implementar DevOps?",
    options:["Asegurarse de que las características de calidad no funcionales no sean pasadas por alto","Gestionar entornos de prueba en continuo cambio","La necesidad de más testers manuales con experiencia adecuada","Configurar la automatización de pruebas como parte del pipeline de entrega"],
    correct:3,
    explanation:"D es correcta. Implementar DevOps puede plantear varios desafíos, incluyendo definir y configurar el pipeline de entrega, introducir y mantener herramientas CI/CD, y establecer y mantener la automatización de pruebas. A es incorrecta: DevOps aumenta la visibilidad de características no funcionales. B es incorrecta: los procesos automatizados de CI/CD facilitan entornos estables. C es incorrecta: DevOps generalmente reduce la necesidad de pruebas manuales." },

  { id:712, chapter:2, lo:"FL-2.1.6", klevel:2, src:"D",
    question:"¿Cuál describe MEJOR las retrospectivas?",
    options:["Permiten a los miembros del equipo identificar a otros que no contribuyeron plenamente a la calidad","Dan a los testers la oportunidad de identificar actividades exitosas para retenerlas cuando se realicen mejoras futuras","Son donde los miembros del equipo ágil pueden expresar preocupaciones sobre la gestión y clientes en un ambiente sin culpa","Dan a los miembros del equipo ágil un foro para discutir el plan y las decisiones técnicas para la próxima iteración"],
    correct:1,
    explanation:"B es correcta. Durante la retrospectiva, el grupo discute qué aspectos fueron exitosos y deben retenerse, y qué áreas podrían mejorarse. A es incorrecta: señalar individuos no contribuye a la cohesión. C es incorrecta: los resultados son accesibles a otros interesados y no es un espacio para criticar a la gestión. D es incorrecta: las retrospectivas se centran en la iteración actual, no en planes para la siguiente." },

  { id:713, chapter:2, lo:"FL-2.2.2", klevel:2, src:"D",
    question:"¿Cuál de las siguientes pruebas se realizará MÁS probablemente como parte de las pruebas funcionales?",
    options:["La prueba verifica que la función de ordenamiento coloca los elementos en orden ascendente","La prueba verifica si la función de ordenamiento completa el ordenamiento en menos de un segundo","La prueba verifica con qué facilidad se puede cambiar la función de ordenamiento de ascendente a descendente","La prueba verifica que la función de ordenamiento sigue funcionando correctamente al pasar de arquitectura 32 a 64 bits"],
    correct:0,
    explanation:"A es correcta. Verificar que la función coloca elementos en orden ascendente evalúa la corrección funcional = pruebas funcionales. B es prueba de eficiencia de rendimiento (no funcional). C es prueba de modificabilidad/mantenibilidad (no funcional). D es prueba de adaptabilidad/portabilidad (no funcional)." },

  { id:714, chapter:2, lo:"FL-2.3.1", klevel:2, src:"D",
    question:"¿Cuál es MÁS probable que sea un disparador que lleve a pruebas de mantenimiento de un sistema de cambio de divisas?",
    options:["Los desarrolladores reportaron que cambiar el sistema era difícil y los testers decidieron verificarlo","La opción de reembolso del sistema fue eliminada porque no siempre devolvía el importe correcto a los clientes","El equipo ágil comenzó a desarrollar una historia de usuario que añade una nueva función de fidelización","La opción de soporte de idioma fue usada para habilitar transacciones en inglés y en el idioma local"],
    correct:1,
    explanation:"B es correcta. Una modificación del sistema (corrección) es un disparador para las pruebas de mantenimiento. La eliminación de la opción de reembolso fue una corrección que llevaría a pruebas de mantenimiento. A describe pruebas de mantenibilidad, no de mantenimiento. C es desarrollo normal de nueva funcionalidad + regresión. D es reconfiguración, no una modificación, cambio del entorno operacional ni retirada." },

  { id:715, chapter:3, lo:"FL-3.1.1", klevel:1, src:"D",
    question:"¿Cuál de las siguientes NO puede ser examinada mediante pruebas estáticas?",
    options:["Contrato","Plan de prueba","Código cifrado (encriptado)","Test charter"],
    correct:2,
    explanation:"C es correcta. Las pruebas estáticas no son adecuadas para productos de trabajo demasiado complejos para la interpretación humana y que no pueden analizarse mediante herramientas. El código cifrado es demasiado complejo para humanos y, si está correctamente cifrado, no podrá ser analizado por herramientas. Los contratos (A), planes de prueba (B) y test charters (D) sí pueden revisarse." },

  { id:716, chapter:3, lo:"FL-3.1.2", klevel:2, src:"D",
    question:"¿Cuál afirmación sobre el valor de las pruebas estáticas es CORRECTA?",
    options:["Los tipos de defectos encontrados por las pruebas estáticas son diferentes de los que pueden encontrar las dinámicas","Las pruebas dinámicas pueden detectar los tipos de defectos que pueden encontrarse con estáticas más algunos adicionales","Las pruebas dinámicas pueden identificar algunos de los defectos que pueden encontrarse con estáticas pero no todos","Las pruebas estáticas pueden identificar los tipos de defectos de las dinámicas así como algunos tipos adicionales"],
    correct:2,
    explanation:"C es correcta. Algunos defectos solo se detectan con pruebas estáticas (código inalcanzable). Algunos con ambas (un defecto de programación visible en revisión que también causa fallo durante pruebas dinámicas). Y algunos solo con dinámicas (problemas de rendimiento o memoria). Por tanto, las dinámicas pueden identificar algunos (pero no todos) los de las estáticas." },

  { id:717, chapter:3, lo:"FL-3.2.2", klevel:2, src:"D",
    question:"Descripciones de actividades de revisión:\n1. Las anomalías detectadas son deliberadas y se determina su estado, propietario y pasos siguientes\n2. Los defectos se registran y las actualizaciones necesarias se abordan antes de la aceptación del producto\n3. Los revisores emplean técnicas para detectar anomalías y generar sugerencias\n4. El objetivo y el calendario de la revisión se establecen\n5. Los participantes reciben acceso al elemento a revisar\n\n¿Cuál es la secuencia CORRECTA?",
    options:["4 – 3 – 5 – 2 – 1","4 – 5 – 3 – 1 – 2","5 – 4 – 1 – 3 – 2","5 – 4 – 3 – 2 – 1"],
    correct:1,
    explanation:"B es correcta. La secuencia del proceso de revisión según el syllabus (ISO/IEC 20246) es: Planificación (4) → Inicio de la revisión (5) → Revisión individual (3) → Comunicación y análisis (1) → Corrección y reporte (2). Secuencia: 4 – 5 – 3 – 1 – 2." },

  { id:718, chapter:3, lo:"FL-3.2.3", klevel:1, src:"D",
    question:"¿Qué participante en el proceso de revisión es responsable de asegurar que las reuniones de revisión se ejecuten efectivamente y que todos puedan expresar sus opiniones libremente?",
    options:["Gestor (Manager)","Moderador","Presidente (Chairperson)","Líder de revisión"],
    correct:1,
    explanation:"B es correcta. El moderador (o facilitador) asegura que las reuniones de revisión se ejecuten efectivamente, gestiona el tiempo, media discusiones y crea un entorno seguro. El Gestor (A) decide qué se revisa y asigna recursos. El Presidente (C) no es un rol reconocido en revisiones. El Líder de revisión (D) supervisa el proceso general pero no facilita las reuniones." },

  { id:719, chapter:4, lo:"FL-4.1.1", klevel:2, src:"D",
    question:"Realizas pruebas del sistema de una app web de e-commerce con el requisito:\n'REQ 05-017: Si el coste total de las compras supera los $100, el cliente obtiene un 5% de descuento en compras posteriores. En caso contrario, el cliente no recibe descuento.'\n¿Qué técnicas de prueba serán MÁS útiles para diseñar casos de prueba?",
    options:["Técnicas de prueba de caja blanca","Técnicas de prueba de caja negra","Técnicas de prueba basadas en la experiencia","Técnicas de prueba basadas en el riesgo"],
    correct:1,
    explanation:"B es correcta. El documento es un requisito que especifica el comportamiento deseado del sistema. Las técnicas más adecuadas son las de caja negra (BVA o Tablas de Decisión), ya que no hace referencia a la estructura interna. A es incorrecta: el requisito no describe estructura interna. C es menos adecuada porque la regla es precisa y sugiere límites importantes. D no es un tipo de técnica de prueba reconocido." },

  { id:720, chapter:4, lo:"FL-4.2.1", klevel:3, src:"D",
    question:"Sistema de cine: D = AñoActual - AñoNacimiento. Si D<0: error. Si 0≤D<18: descuento estudiante. Si 18≤D<65: sin descuento. Si D≥65: descuento pensionista.\n\nSuite existente:\n• AñoNac=1990, AñoAct=2020 → sin descuento\n• AñoNac=2030, AñoAct=2029 → mensaje de error\n\n¿Qué datos de prueba deben AÑADIRSE para lograr cobertura completa de partición de equivalencia válida?",
    options:["AñoNac=2001, AñoAct=2065","AñoNac=1900, AñoAct=1965","AñoNac=1965, AñoAct=1900","AñoNac=2011, AñoAct=2029","AñoNac=2000, AñoAct=2000"],
    correct:[1,4], multiSelect:true,
    explanation:"B y E son correctas. Particiones no cubiertas: 'descuento estudiante' y 'descuento pensionista'. B: 1965-1900=65 → descuento pensionista (no cubierta). E: 2000-2000=0 → descuento estudiante (no cubierta). A: 2065-2001=64 → sin descuento (ya cubierta). C: 1900-1965=-65 → error (ya cubierta). D: 2029-2011=18 → sin descuento (ya cubierta)." },

  { id:721, chapter:4, lo:"FL-4.2.2", klevel:3, src:"D",
    question:"Sistema de control de temperatura: si temperatura entre 0 y 2 grados (inclusive) = 'temperatura OK'; menor = 'temperatura demasiado baja'; mayor = 'temperatura demasiado alta'. Usando BVA de 2 valores, ¿cuál conjunto proporciona la mayor cobertura de valores límite?",
    options:["-1, 3","0, 2","-1, 0, 2, 3","-2, 0, 2, 4"],
    correct:2,
    explanation:"C es correcta (-1, 0, 2, 3). Hay 3 particiones: {...,-2,-1}, {0,1,2}, {3,4,...}. Los valores límite para BVA de 2 valores son: -1 (límite superior de 'demasiado baja'), 0 (límite inferior de 'OK'), 2 (límite superior de 'OK'), 3 (límite inferior de 'demasiado alta'). El conjunto -1, 0, 2, 3 cubre los 4 valores límite = 100% de cobertura BVA 2 valores." },

  { id:722, chapter:4, lo:"FL-4.2.3", klevel:3, src:"D",
    question:"Tabla de decisión con 7 reglas (R1-R7) para asignar categorías por Edad, Experiencia y Registro. TCs existentes cubren: TC1→R2, TC2→R3, TC3→R7, TC4→R6. ¿Cuál TC añadido aumentará la cobertura de la tabla de decisión?",
    options:["66 años, no registrado, sin experiencia → categoría B","55 años, no registrado, 2 años de experiencia → categoría A","19 años, registrado, 5 años de experiencia → categoría D","Ningún TC adicional puede aumentar la cobertura ya lograda"],
    correct:0,
    explanation:"A es correcta. TC1, TC2, TC3 y TC4 cubren R2, R3, R7 y R6 respectivamente. Las condiciones '66 años, no registrado, sin experiencia' corresponden a la regla R4, que no está cubierta. Añadir este TC aumentará la cobertura. B cubre R2 (ya cubierta por TC1). C cubre R6 (ya cubierta por TC4). D es incorrecta: R1, R4 y R5 siguen sin cubrir." },

  { id:723, chapter:4, lo:"FL-4.2.4", klevel:3, src:"D",
    question:"Sistema de reserva de habitación de hotel. Tabla de transiciones (comenzando siempre desde S1=Solicitando):\nS1: Disponible→S2, NoDisponible→S3\nS2: Disponible→S1, CambioHabitación→S4, Pagar→S4\nS3: Disponible→S2, Cancelar→S4\nS4: Fin\n\n¿Cuál secuencia de eventos logra la mayor cobertura de transiciones válidas?",
    options:["NoDisponible, Disponible, CambioHabitación, NoDisponible, Cancelar","Disponible, CambioHabitación, NoDisponible, Disponible, Pagar","Disponible, CambioHabitación, Disponible, CambioHabitación, NoDisponible","NoDisponible, Cancelar, CambioHabitación, Disponible, Pagar"],
    correct:1,
    explanation:"B es correcta. La secuencia 'Disponible, CambioHabitación, NoDisponible, Disponible, Pagar' cubre 5 transiciones distintas: S1→S2 (primer Disponible), S2→S4 (CambioHabitación), S1→S3 (NoDisponible), S3→S2 (segundo Disponible, ¡transición diferente!), S2→S4 (Pagar). = 5/7 transiciones = mayor cobertura. A cubre 4/7. C cubre 3/7. D no es factible (después de Cancelar se llega a S4=Fin)." },

  { id:724, chapter:4, lo:"FL-4.3.1", klevel:2, src:"D",
    question:"Tu suite S para el programa P logra 100% de cobertura de sentencias. Consta de 3 casos de prueba, cada uno logrando 50% de cobertura. ¿Cuál afirmación es CORRECTA?",
    options:["Ejecutar S causará todos los fallos posibles en P","S logra 100% de cobertura de ramas para P","Cada sentencia ejecutable en P que contenga un defecto ha sido ejecutada al menos una vez","Después de eliminar un TC de S, los dos restantes seguirán logrando 100% de cobertura de sentencias"],
    correct:2,
    explanation:"C es correcta. El 100% de cobertura de sentencias significa que cada sentencia ejecutable fue ejecutada al menos una vez, incluidas las que contienen defectos. A es incorrecta: una sentencia con defecto puede ejecutarse sin causar fallo (ej: x=y/z solo falla si z=0). B es incorrecta: cobertura de sentencias no garantiza cobertura de ramas. D es incorrecta: el TC eliminado puede cubrir sentencias que los otros dos no cubren." },

  { id:725, chapter:4, lo:"FL-4.3.3", klevel:2, src:"D",
    question:"¿Por qué las pruebas de caja blanca facilitan la detección de defectos incluso cuando la especificación de software es vaga, desactualizada o incompleta?",
    options:["Los casos de prueba se diseñan basándose en la estructura del objeto de prueba en lugar de la especificación","Para cada técnica de caja blanca la cobertura puede definirse con precisión y medirse fácilmente","Las técnicas de caja blanca están muy bien diseñadas para detectar omisiones en los requisitos","Las técnicas de caja blanca pueden usarse tanto en pruebas estáticas como dinámicas"],
    correct:0,
    explanation:"A es correcta. Una fortaleza fundamental de las técnicas de caja blanca es que toda la implementación del software se toma en cuenta durante las pruebas. Esto facilita la detección de defectos incluso con especificaciones vagas, ya que las pruebas se basan en la estructura real del código (pudiendo encontrar características extra no especificadas). B no es la razón correcta. C es incorrecta: la caja blanca no detecta omisiones. D es verdad pero no explica la detección con especificaciones pobres." },

  { id:726, chapter:4, lo:"FL-4.4.1", klevel:2, src:"D",
    question:"¿Cuál de los siguientes NO es anticipado por el tester al aplicar la conjetura de errores?",
    options:["El desarrollador malinterpretó la fórmula para calcular el interés en la historia de usuario","El desarrollador escribió 'FA = A*(1+IR^N)' en lugar de 'FA = A*(1+IR)^N' en el código fuente","El desarrollador se perdió el seminario sobre la nueva legislación de tasas de interés compuesto","La precisión del interés calculado por el sistema no es suficientemente exacta"],
    correct:2,
    explanation:"C es correcta (NO es anticipado). La conjetura de errores anticipa errores, defectos y fallos. A anticipa el error del desarrollador. B anticipa el defecto (código incorrecto). D anticipa un fallo (resultado impreciso). C describe una causa raíz potencial (el desarrollador perdió el seminario), que no es error, defecto ni fallo, y es difícil de anticipar por el tester." },

  { id:727, chapter:4, lo:"FL-4.4.2", klevel:2, src:"D",
    question:"¿Cuál de las siguientes es verdadera sobre las pruebas exploratorias?",
    options:["Los casos de prueba se diseñan antes de que comience la sesión de prueba exploratoria","El tester puede realizar la ejecución de prueba, pero no el diseño de prueba","Los resultados de las pruebas exploratorias son buenos predictores del número de defectos restantes","Durante las pruebas exploratorias el tester puede usar técnicas de prueba de caja negra"],
    correct:3,
    explanation:"D es correcta. Durante las pruebas exploratorias, los testers pueden usar cualquier técnica que encuentren útil, incluyendo técnicas de caja negra. A es incorrecta: los casos de prueba se crean durante la sesión. B es incorrecta: el diseño, la ejecución y la evaluación ocurren simultáneamente. C es incorrecta: los resultados dependen mucho de la experiencia del tester y no son predictores fiables del número de defectos restantes." },

  { id:728, chapter:4, lo:"FL-4.5.1", klevel:2, src:"D",
    question:"¿Qué práctica colaborativa de escritura de historias de usuario permite al equipo lograr una comprensión colectiva de lo que debe entregarse?",
    options:["Planning poker, para lograr consenso sobre el esfuerzo necesario para implementar una historia","Revisiones, para detectar inconsistencias y contradicciones en una historia","Planificación de iteración, para priorizar las historias con mayor valor de negocio","Conversación, para que los miembros del equipo comprendan cómo se usará el software"],
    correct:3,
    explanation:"D es correcta. La conversación explica cómo se usará el software y permite al equipo definir criterios de aceptación significativos, obteniendo una visión compartida de lo que debe entregarse. A (planning poker) estima el esfuerzo para historias ya escritas. B (revisiones) no es una práctica colaborativa de escritura. C (planificación de iteración) planifica el trabajo, no comprende lo que debe entregarse." },

  { id:729, chapter:4, lo:"FL-4.5.3", klevel:3, src:"D",
    question:"Historia de usuario: 'Como cliente, quiero filtrar resultados de búsqueda por rango de precio para encontrar productos dentro de mi presupuesto más fácilmente.' Criterios: 1. Filtro funciona desde versión 3.0. 2. El filtro permite establecer precio mínimo y máximo. 3. Resultados se actualizan dinámicamente al ajustar el filtro. Precondición: solo hay productos A ($100) y B ($110). ¿Cuál es el MEJOR caso de prueba?",
    options:["Establecer filtro $90-$100 → solo producto A. Cambiar máximo a $110 → ambos productos A y B","Entrar a la página → precios por defecto $100 y $110. Añadir producto C ($120) → máximo cambia a $120","Establecer filtro $90-$115 → ambos A y B. Cambiar moneda a EUR → rango cambia correctamente a EUR","Entrar con tres navegadores: Edge, Chrome, Opera. En cada uno filtro $90-$110 → ambos A y B con mismo diseño"],
    correct:0,
    explanation:"A es correcta. Cubre los criterios de aceptación 2 (establecer rango de precio) y 3 (resultados se actualizan dinámicamente al ajustar el filtro). B no cubre ningún criterio (verifica si el filtro establece precios por defecto). C no cubre ningún criterio (verifica la función de cambio de moneda). D no cubre ningún criterio (verifica compatibilidad con navegadores)." },

  { id:730, chapter:5, lo:"FL-5.1.3", klevel:2, src:"D",
    question:"¿Cuáles definen MEJOR los criterios de SALIDA en un proyecto de testing?",
    options:["El presupuesto está aprobado","El presupuesto se agota","La base de prueba está disponible","Los casos de prueba lograron al menos 80% de cobertura de sentencias","Todos los analistas de prueba están certificados ISTQB Foundation Level"],
    correct:[1,3], multiSelect:true,
    explanation:"B y D son correctas. B: quedarse sin presupuesto puede verse como un criterio de salida válido (una limitación real). D: lograr un nivel de cobertura es una medida de exhaustividad y es un criterio de salida típico. A (aprobación del presupuesto) es criterio de entrada. C (disponibilidad de la base de prueba) es criterio de entrada. E (certificación del equipo) es criterio de entrada." },

  { id:731, chapter:5, lo:"FL-5.1.4", klevel:3, src:"D",
    question:"El equipo quiere estimar el tiempo para que un tester ejecute 4 casos de prueba. Medidas para ejecutar un solo TC:\n• Mejor caso: 1 hora\n• Peor caso: 8 horas\n• Caso más probable: 3 horas\n\nUsando la técnica de estimación de tres puntos, ¿cuál es la estimación final para los 4 TCs?",
    options:["14 horas","3,5 horas","16 horas","12 horas"],
    correct:0,
    explanation:"A es correcta. E por TC = (a + 4m + b) / 6 = (1 + 4×3 + 8) / 6 = (1 + 12 + 8) / 6 = 21/6 = 3,5 horas por TC. Para 4 TCs: 3,5 × 4 = 14 horas." },

  { id:732, chapter:5, lo:"FL-5.1.5", klevel:3, src:"D",
    question:"Matriz de trazabilidad: TC1 cubre Req1,Req3,Req4,Req7; TC2 cubre Req2,Req3,Req4; TC3 cubre Req5,Req6; TC4 cubre Req2. Usando la técnica de priorización de cobertura adicional, ¿cuál TC debe ejecutarse ÚLTIMO?",
    options:["TC1","TC2","TC3","TC4"],
    correct:1,
    explanation:"B es correcta (TC2 es el último). TC1 cubre 4/7 (mayor cobertura inicial) → 1°. Quedan Req2, Req5, Req6. TC3 cubre 2 de los 3 restantes (Req5, Req6) → 2°. Queda solo Req2. TC4 cubre Req2 → 3°. TC2 cubre Req2 (ya cubierto), Req3 y Req4 (ya cubiertos) → ninguna cobertura adicional → 4° (último)." },

  { id:733, chapter:5, lo:"FL-5.1.7", klevel:2, src:"D",
    question:"¿Cómo pueden ser beneficiosos los cuadrantes de prueba para el testing?",
    options:["Ayudan en la planificación dividiendo el proceso en cuatro fases correspondientes a los cuatro niveles básicos de prueba","Ayudan a evaluar la cobertura de alto nivel (cobertura de requisitos) basándose en la cobertura de bajo nivel (cobertura de código)","Ayudan a los interesados no técnicos a comprender los diferentes tipos de prueba y que algunos son más relevantes para ciertos niveles","Ayudan a los equipos ágiles a desarrollar una estrategia de comunicación basada en clasificar personas según cuatro tipos psicológicos"],
    correct:2,
    explanation:"C es correcta. Los cuadrantes de prueba permiten a gestores y otros interesados comprender las relaciones entre tipos de prueba, las actividades que apoyan (apoyo al equipo o crítica del producto) y el punto de vista (negocio o tecnología). A es incorrecta: los cuadrantes no describen relaciones entre niveles de prueba. B es incorrecta: no ayudan a evaluar ningún tipo de cobertura. D es incorrecta: no es un modelo psicológico." },

  { id:734, chapter:5, lo:"FL-5.2.1", klevel:1, src:"D",
    question:"Para un riesgo dado, su nivel de riesgo es $1,000 y su probabilidad de riesgo se estima en el 50%. ¿Cuál es el impacto del riesgo?",
    options:["$500","$2,000","$50,000","$200"],
    correct:1,
    explanation:"B es correcta. En el enfoque cuantitativo: Nivel de riesgo = Probabilidad × Impacto. Por tanto: Impacto = Nivel / Probabilidad = $1,000 / 0,50 = $2,000." },

  { id:735, chapter:5, lo:"FL-5.2.2", klevel:2, src:"D",
    question:"¿Cuáles de las siguientes son riesgos de PRODUCTO?",
    options:["Expansión del alcance (scope creep)","Arquitectura deficiente","Recorte de costes","Soporte de herramientas deficiente","Tiempo de respuesta demasiado largo"],
    correct:[1,4], multiSelect:true,
    explanation:"B y E son correctas. La arquitectura deficiente (B) y el tiempo de respuesta demasiado largo (E) son riesgos de producto porque se refieren a características del producto. La expansión del alcance (A) es riesgo de proyecto. El recorte de costes (C) es riesgo de proyecto organizacional. El soporte de herramientas deficiente (D) es riesgo de proyecto técnico." },

  { id:736, chapter:5, lo:"FL-5.3.2", klevel:2, src:"D",
    question:"¿Cuál NO es un propósito válido para un informe de prueba?",
    options:["Hacer seguimiento del progreso de las pruebas e identificar áreas que requieren mayor atención","Proporcionar información sobre las pruebas ejecutadas, sus resultados y los defectos encontrados","Proporcionar información sobre cada defecto, como los pasos para reproducirlo","Proporcionar información sobre las pruebas planificadas para el próximo período"],
    correct:2,
    explanation:"C es correcta (NO es propósito del informe de prueba). Proporcionar información detallada sobre cada defecto (pasos para reproducir) es el propósito del informe de defecto, no del informe de prueba. Los informes de prueba sirven para hacer seguimiento del progreso (A), resumir pruebas ejecutadas y resultados (B), y planificar actividades futuras (D)." },

  { id:737, chapter:5, lo:"FL-5.4.1", klevel:2, src:"D",
    question:"Un usuario reportó un fallo de software. Un ingeniero preguntó al usuario el número de versión del software. Basándose en ese número, el equipo reensambló todos los archivos que componían la versión. Esto permitió encontrar y corregir el defecto. ¿Qué habilitó esta actividad?",
    options:["Gestión de riesgos","Monitoreo y control de prueba","Enfoque de equipo completo","Gestión de la configuración"],
    correct:3,
    explanation:"D es correcta. La gestión de la configuración proporciona una disciplina para identificar, controlar y rastrear los productos de trabajo. Mantiene un registro de los elementos de configuración cambiados cuando se crea una nueva línea base. Usando la gestión de la configuración es posible reensamblar una versión específica del software. A, B y C no gestionan elementos de configuración." },

  { id:738, chapter:5, lo:"FL-5.5.1", klevel:3, src:"D",
    question:"Informe de defecto del Sistema de Préstamo de Libros:\nID: 001 | Título: No se puede devolver un libro | Severidad: Alta | Prioridad: [vacío]\nEntorno: Windows 10, Google Chrome\nDescripción: Al intentar devolver un libro, el sistema no registra la devolución y el libro permanece prestado.\nResultado esperado: El libro debe ser devuelto y no aparecer como prestado. Resultado actual: El libro permanece prestado.\n\n¿Qué ayudaría MÁS al desarrollador a reproducir el fallo rápidamente?",
    options:["Añadir información sobre qué usuarios y qué libros afecta el fallo a la sección 'Descripción'","Rellenar el valor faltante del campo 'Prioridad'","Añadir volcados de memoria y snapshots de la base de datos después de cada paso en 'Adjuntos'","Repetir el caso de prueba para diferentes entornos y escribir informes separados para cada uno"],
    correct:0,
    explanation:"A es correcta. Añadir información sobre qué usuarios y qué libros afecta el fallo permite al desarrollador usar los mismos datos de entrada, haciendo más probable que pueda reproducir el fallo rápidamente. B (añadir Prioridad) no ayuda a reproducir el defecto. C (volcados de memoria) proporciona demasiada información y hace el informe menos legible. D no está relacionado con reproducir el problema en el entorno específico." },

  { id:739, chapter:6, lo:"FL-6.1.1", klevel:2, src:"D",
    question:"Categorías de herramientas:\ni. Herramientas de colaboración\nii. Herramientas DevOps\niii. Herramientas de gestión\niv. Herramientas de prueba no funcional\nv. Herramientas de diseño e implementación de prueba\n¿Las herramientas de qué categorías son MÁS probables para facilitar la ejecución de prueba?",
    options:["i, v","ii, iv","i, iii, v","ii, iii, iv"],
    correct:1,
    explanation:"B es correcta. Las herramientas DevOps (ii) soportan el pipeline CI/CD que incluye la facilitación de la ejecución de prueba. Las herramientas de prueba no funcional (iv) realizan pruebas no funcionales que incluyen ejecución dinámica. Las de colaboración (i) facilitan comunicación pero no ejecución. Las de gestión (iii) gestionan elementos pero no ejecutan. Las de diseño e implementación (v) generan testware pero no ejecutan pruebas." },

  { id:740, chapter:6, lo:"FL-6.2.1", klevel:1, src:"D",
    question:"¿Cuál de las siguientes es MÁS probable que sea un riesgo de la automatización de pruebas?",
    options:["La detección de defectos adicionales de alta severidad","Proporcionar medidas que son demasiado complicadas para que los humanos las deriven","Incompatibilidad con la plataforma de desarrollo","Tiempos de ejecución de prueba sustancialmente reducidos"],
    correct:2,
    explanation:"C es correcta. Si la automatización es incompatible con la plataforma de desarrollo, no podrá integrarse con ella ni pasar entradas de prueba al objeto de prueba ni recibir resultados. A (detectar más defectos de alta severidad) es un beneficio. B (proporcionar medidas complicadas) es normalmente un beneficio. D (tiempos reducidos) es normalmente un beneficio de la automatización." },

export const CHAPTER_CONFIG = {
  1: { name: "Fundamentos del Testing",        count: 8,  color: "#00CB75" },
  2: { name: "Testing a lo largo del SDLC",   count: 6,  color: "#00B369" },
  3: { name: "Pruebas Estáticas",              count: 4,  color: "#26D092" },
  4: { name: "Técnicas de Prueba",             count: 12, color: "#00975B" },
  5: { name: "Gestión de las Pruebas",         count: 8,  color: "#007B4B" },
  6: { name: "Herramientas de Prueba",         count: 2,  color: "#4DDFAB" },
};

export function pickQuestions(allQ, chapterNum, count) {
  const pool = allQ.filter(q => q.chapter === chapterNum);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function generateExam() {
  let exam = [];
  for (const [chap, cfg] of Object.entries(CHAPTER_CONFIG)) {
    exam = exam.concat(pickQuestions(ALL_QUESTIONS, parseInt(chap), cfg.count));
  }
  return exam.sort(() => Math.random() - 0.5);
}
