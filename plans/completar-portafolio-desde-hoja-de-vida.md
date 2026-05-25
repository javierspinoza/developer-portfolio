# Plan: Completar el portafolio desde la hoja de vida

> PRD de origen: `prds/completar-portafolio-desde-hoja-de-vida.md`

## Decisiones arquitectónicas

Decisiones duraderas que aplican a todas las fases:

- **Rutas**: se conserva la pagina principal en `/` y los detalles de casos en `/project/:slug`. Los nuevos casos se integran al mismo patron de navegacion, listado, filtro y siguiente proyecto.
- **Esquema**: el portafolio sigue siendo una aplicacion Vue 3 + Vite sin backend propio. El contenido profesional se mantiene como datos estructurados, tipados y bilingues consumidos por componentes visuales.
- **Modelos clave**: el contenido principal mantiene modelos para perfil, hero, experiencia, habilidades, educacion, certificaciones, contacto, previews de proyectos y detalles de proyectos.
- **Internacionalizacion**: todo contenido visible nuevo debe tener version en espanol e ingles antes de considerarse completo. Las traducciones deben mantenerse sincronizadas en estructura, intencion y nivel de detalle.
- **Casos confidenciales**: los proyectos privados se presentan como estudios de caso sin enlaces publicos de demo, codigo, capturas internas, credenciales ni informacion sensible del cliente.
- **SEO y metadatos**: titulo, descripcion, textos sociales, datos estructurados y textos indexables deben reflejar el posicionamiento completo: Full-Stack empresarial, ERP/e-commerce, cloud, datos, QA e IA aplicada.
- **Calidad visual**: se conserva la identidad interactiva actual, priorizando legibilidad, escaneo, responsive movil y contenido comprensible sin depender de animaciones.
- **Validacion minima**: cada fase debe poder verificarse con typecheck/build y una revision manual de las rutas o secciones afectadas.

---

## Fase 1: Base de contenido profesional verificable

**Historias de usuario**: 1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 24, 25, 26, 27, 28, 31, 34, 35, 40, 42, 53, 54, 55, 57, 58

### Que construir

Actualizar el contenido transversal del portafolio para que la pagina principal represente la hoja de vida completa sin depender todavia de todos los casos nuevos. Esta rebanada debe cubrir hero, perfil, experiencia cronologica, matriz de habilidades, educacion, certificaciones, idioma, contacto y SEO basico de punta a punta en espanol e ingles.

### Criterios de aceptacion

- [ ] El hero comunica Full-Stack empresarial, integracion ERP/e-commerce, cloud, datos, QA e IA aplicada.
- [ ] Las metricas visibles usan cifras verificables del PRD: 5+ anos, 10 anos de datos historicos, 40% menos trabajo manual y 100% de digitalizacion de gestion de clientes/citas.
- [ ] La experiencia de Industrias Bicicletas Milan queda alineada a junio de 2024 - mayo de 2026.
- [ ] El nivel de ingles visible se muestra como A2 si la hoja de vida se mantiene como fuente de verdad.
- [ ] Las certificaciones visibles coinciden con la hoja de vida o separan claramente certificaciones de herramientas de trabajo.
- [ ] Las habilidades quedan agrupadas por impacto: backend empresarial, frontend, datos, DevOps/cloud, QA/testing/seguridad, ERP/e-commerce, IA, analitica y metodologia.
- [ ] La informacion existe en espanol e ingles con la misma estructura y alcance.
- [ ] La pagina principal compila y mantiene legibilidad en movil con listas largas de experiencia, habilidades y certificaciones.

---

## Fase 2: Casos Milan de ERP, e-commerce, datos, QA e IA

**Historias de usuario**: 3, 4, 8, 9, 10, 11, 12, 13, 15, 22, 23, 31, 32, 33, 35, 38, 39, 43, 46, 47, 61

### Que construir

Reforzar los casos existentes de Industrias Bicicletas Milan para que expliquen de extremo a extremo la integracion ERP/e-commerce, la administracion de datos historicos, la automatizacion con IA, QA, analitica y despliegues productivos. Los casos deben ser navegables desde el listado, filtrables por categoria y completos en sus paginas de detalle.

### Criterios de aceptacion

- [x] El caso ERP/e-commerce explica contexto, reto, solucion, arquitectura, stack, responsabilidades, resultados y confidencialidad.
- [x] El caso de IA explica pipelines RAG, agentes autonomos, Vercel AI SDK, CrewAI, PydanticAI, LangGraph y MLOps como uso aplicado, no decorativo.
- [x] Se incluyen Odoo.sh, SAP Business One, Magento 2, PostgreSQL, SQL, Python, Django, FastAPI, Docker, Linux, AWS, SSH y GitHub cuando correspondan.
- [x] QA y analitica quedan visibles con k6, Playwright, Google Tag Manager, Google Analytics, SEO y reduccion de tiempos de carga como resultado cualitativo.
- [x] Los resultados separan metricas cuantificadas de resultados cualitativos o sujetos a confidencialidad.
- [x] Los casos no muestran enlaces de demo o codigo cuando el estado sea privado.
- [x] Los previews, filtros, pagina de detalle y navegacion de siguiente proyecto funcionan en espanol e ingles.

---

## Fase 3: Caso Isavital CRM y portal Java/Spring Boot

**Historias de usuario**: 4, 7, 11, 14, 16, 17, 23, 32, 34, 38, 39, 42, 44, 45, 59

### Que construir

Completar el caso de Soluciones Isavital SAS como una historia de digitalizacion operativa: CRM desde cero, gestion de clientes, citas, roles, permisos, postventa predictiva y despliegues. Incluir un subcaso o caso conectado para el portal secundario con React y Java/Spring Boot, manteniendo la misma experiencia bilingue y confidencial.

### Criterios de aceptacion

- [x] El CRM explica como reemplazo hojas de calculo y registros manuales por flujos trazables.
- [x] El caso muestra la digitalizacion del 100% de gestion de clientes y citas como metrica cuantificada.
- [x] El stack incluye Laravel, Livewire, MySQL, Jira, Git, TypeScript, JavaScript, CSS3, Tailwind CSS, servidores Linux y despliegue continuo.
- [x] El portal Java/Spring Boot queda visible con React, Java, Spring Boot, Lombok, Spring Data JPA, Spring Security, JWT, JUnit y Swagger/OpenAPI.
- [x] La automatizacion postventa con IA se explica como seguimiento predictivo, reduccion de tiempos de respuesta y mejora de retencion/satisfaccion sin inventar metricas no verificadas.
- [x] El caso describe decisiones de arquitectura, seguridad, roles y responsabilidades concretas de Javier.
- [x] El contenido aparece en listado, filtros, detalle y siguiente proyecto en espanol e ingles.

---

## Fase 4: Casos PC Ingenieria de reservas, logistica y sostenibilidad

**Historias de usuario**: 4, 14, 18, 19, 20, 22, 23, 37, 38, 39, 43, 45

### Que construir

Agregar los estudios de caso faltantes de PC Ingenieria de Software SAS para mostrar experiencia en reservas hoteleras, cadena de suministro/importacion y sostenibilidad. Cada caso debe tener una ruta de lectura clara desde preview hasta detalle, con stack por proyecto, resultados, confidencialidad y traduccion completa.

### Criterios de aceptacion

- [x] El caso de reservas hoteleras explica pasarelas de pago, RBAC, Laravel, Livewire y MySQL.
- [x] El caso logistico explica cadena de suministro, importacion de productos, trazabilidad de inventario, Vue.js, JavaScript y Bootstrap.
- [x] El caso de sostenibilidad explica trazabilidad, recoleccion y reutilizacion de residuos con Next.js, React, SSR y experiencia responsive.
- [x] Cada caso separa contexto de negocio, reto, solucion, arquitectura, stack, responsabilidades y resultados.
- [x] Los casos confidenciales no exponen datos sensibles, demos, codigo ni nombres internos innecesarios.
- [x] Los filtros permiten encontrar estos casos por categorias relevantes como full-stack, logistica, sostenibilidad o negocio.
- [x] El layout movil soporta la ampliacion del numero de previews sin perder escaneabilidad.

---

## Fase 5: Caso SENA de control de acceso y asistencia

**Historias de usuario**: 4, 14, 21, 23, 37, 38, 39, 44, 45, 60

### Que construir

Agregar el caso de etapa productiva del SENA como sistema institucional de control de acceso y asistencia estudiantil. La rebanada debe hacerlo visible en la experiencia principal, con detalle suficiente para mostrar impacto operativo, alta concurrencia, digitalizacion administrativa y stack usado.

### Criterios de aceptacion

- [x] El caso explica registro y monitoreo de asistencia estudiantil, control de acceso y digitalizacion administrativa.
- [x] El impacto se describe como reduccion de tiempos de ingreso sin inventar porcentajes no confirmados.
- [x] El stack incluye Laravel, Vue.js, Bootstrap y adaptacion multi-dispositivo.
- [x] El caso menciona operacion en horas pico o alta afluencia como restriccion tecnica.
- [x] La pagina de detalle describe permisos, roles o controles relevantes para datos sensibles.
- [x] El caso aparece en previews, filtros, detalle y navegacion de siguiente proyecto en espanol e ingles.

---

## Fase 6: Exploracion, filtros y navegacion de proyectos

**Historias de usuario**: 22, 23, 36, 37, 38, 40, 48, 49, 50, 51, 53, 56

### Que construir

Ajustar la exploracion general para que el aumento de casos y contenido no vuelva el sitio pesado o disperso. Esta fase debe mejorar filtros, categorias, previews, navegacion interna, contacto visible y escaneabilidad movil, manteniendo el lenguaje visual actual.

### Criterios de aceptacion

- [x] Los filtros cubren categorias utiles del PRD: ERP, CRM, IA, Java, e-commerce, logistica, sostenibilidad, control de acceso, QA o full-stack segun convenga al modelo final.
- [x] Todos los proyectos definidos aparecen en el listado, tienen preview bilingue y resuelven correctamente a `/project/:slug`.
- [x] La navegacion de siguiente proyecto incluye todos los casos en un orden coherente.
- [x] Los proyectos privados muestran estado de confidencialidad claro desde preview y detalle.
- [x] Contacto, LinkedIn, correo y WhatsApp siguen visibles y funcionales tras ampliar el contenido.
- [x] El contenido largo no se sale de tarjetas, etiquetas, botones ni columnas en movil o escritorio.
- [x] La matriz de capacidades conecta tecnologias con experiencias o proyectos sin convertirse en una tabla dificil de leer en movil.

---

## Fase 7: Validacion, accesibilidad y cierre de publicacion local

**Historias de usuario**: 27, 37, 46, 47, 48, 52

### Que construir

Cerrar la implementacion con validacion tecnica, contenido consistente, revision responsive, accesibilidad basica y control de metadatos. Esta fase no publica el sitio en produccion, pero deja el portafolio listo para revision final y despliegue posterior.

### Criterios de aceptacion

- [ ] La aplicacion pasa typecheck y build con todo el contenido ampliado.
- [ ] Las rutas principales, cambio de idioma, apertura de proyectos, filtros y contacto se verifican manualmente o con pruebas ligeras.
- [ ] Los metadatos SEO, textos sociales y datos estructurados reflejan el perfil completo de Javier.
- [ ] La accesibilidad basica cubre orden de encabezados, etiquetas de navegacion, foco visible, contraste suficiente y contenido comprensible sin animaciones.
- [ ] Se revisa desktop y movil para hero, experiencia, matriz de habilidades, listados de proyectos y detalles.
- [ ] Se valida que ningun caso confidencial muestre enlaces publicos, codigo, credenciales, capturas internas o datos sensibles.
- [ ] La version en espanol e ingles queda sincronizada y sin discrepancias evidentes de fechas, certificaciones, idioma o stack.
