# Contenido del portafolio

El contenido principal vive en `src/content/portfolio.ts`.

Para editar un bloque, cambia la misma estructura en `es` y `en`. TypeScript valida campos críticos como perfil, hero, navegación, experiencia, habilidades, educación, certificaciones y contacto. Si falta una propiedad requerida en un idioma, `npm run typecheck` falla.

Reglas rápidas:

- Mantén `profile.email`, `profile.linkedin` y `profile.whatsapp` como fuente única para enlaces de contacto.
- Agrega habilidades dentro de uno de los grupos existentes para conservar filtros y lectura consistente.
- Agrega casos en `src/content/projects/es` y `src/content/projects/en`, usando el mismo slug en ambos idiomas y actualizando `src/content/projects/previews`.
- Si añades educación o certificaciones, crea la entrada equivalente en español e inglés.
- No pongas textos críticos directamente en componentes si pertenecen al perfil profesional.
