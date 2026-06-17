# Handoff — Componente Planes Mascotas SURA
**Versión:** 1.0 · **Fecha:** 2026-06-16 · **Para:** Desarrollador Front (Liferay)

---

## 1. Qué es este componente

Sección de cotización de seguros para mascotas (perros y gatos). Permite al usuario comparar tres planes (Esencial, Clásico, Global) y revisar sus coberturas en un acordeón comparativo. El componente es **autocontenido**: un solo bloque de HTML + CSS + JS sin dependencias de framework.

**Archivo de referencia:** `planes-mascotas-standalone.html`
**Figma Secciones:** `Hrcg0A0z4YT4E0S0g8umjg`

---

## 2. Arquitectura del componente

```
<section class="planes" id="planes">
  ├── .planes__tabs                  → Selector de especie (Perros / Gatos)
  ├── .planes__panel#panel-perros    → Cards de planes — inyectado por JS
  ├── .planes__panel#panel-gatos     → Cards de planes — inyectado por JS
  └── .compare
      ├── .compare__title            → "Compara los beneficios" (desktop)
      └── .acordeon#acordeon-el      → Acordeón comparador — inyectado por JS
```

Todo el contenido es **renderizado por JS en el momento de mount**. El HTML estático solo contiene los contenedores vacíos (`#tabs-el`, `#acordeon-el`). Esto facilita la integración en Liferay ya que el bloque HTML es mínimo.

---

## 3. Implementación en Liferay (Caja de Código)

### 3.1 Estructura del fragmento

Pegar en la caja de código (Custom Code Fragment) en **tres secciones**:

**HTML:**
```html
<section class="planes sura-mascotas" id="planes">
  <div class="planes__tabs" id="tabs-el"></div>
  <div class="compare">
    <h2 class="compare__title">Compara los beneficios</h2>
    <div class="acordeon" id="acordeon-el"></div>
  </div>
</section>
```

**CSS:** Todo el bloque `<style>` del archivo standalone (sin las etiquetas `<style>`).

**JS:** Todo el bloque `<script>` del archivo standalone (sin las etiquetas `<script>`).

### 3.2 Conflictos con Bootstrap / Clay de Liferay

Liferay usa Bootstrap 4/5 y el framework Clay. Las siguientes clases del componente pueden colisionar:

| Clase del componente | Riesgo | Acción recomendada |
|---|---|---|
| `.btn-cotizar` | Bajo — no es clase Bootstrap exacta | Verificar que no hereda estilos de `.btn` |
| `.card-name`, `.card-desc` | Bajo — Bootstrap usa `.card-title`, `.card-text` | Verificar en contexto |
| `.compare` | Bajo | Sin conflicto conocido |
| `.planes__panel` | Ninguno | Safe |
| `.tab-btn` | Medio — Bootstrap tiene `.btn` pero no `.tab-btn` | Añadir `all: unset` si hay herencia indeseada |

**Recomendación general:** Agregar un prefijo `sura-` a las clases raíz si el portal tiene muchos fragmentos y hay riesgo de colisión. La clase `.planes` en `<section>` ya funciona como scope CSS implícito.

### 3.3 Fuente

El componente usa **Nunito** como sustituto de Sura Sans (fuente propietaria). Si el portal de Liferay ya carga Sura Sans globalmente, cambiar en el CSS:

```css
/* Actual */
--f: 'Nunito', sans-serif;

/* Producción (si Sura Sans está disponible globalmente) */
--f: 'Sura Sans', sans-serif;
```

Si no se carga globalmente, agregar en el `<head>` del portal o como CSS Resource del fragmento:
```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

---

## 4. Assets — REEMPLAZAR ANTES DE PRODUCCIÓN

Las imágenes actuales provienen de la API temporal de Figma MCP y **expiran en ~7 días**. El desarrollador debe exportar o solicitar las versiones definitivas al equipo de diseño.

| Variable | Descripción | Nodo Figma DS | Formato sugerido |
|---|---|---|---|
| `A.dog` | Ícono perro DS SURA 2024 | `4498:358` | SVG o PNG @2x |
| `A.cat` | Ícono gato DS SURA 2024 | `4498:359` | SVG o PNG @2x |
| `A.paw` | Ícono huella DS SURA 2024 | `4498:360` | SVG o PNG @2x |
| `DS_CHECK` `src` | Check círculo azul | DS: Iconos/Stepper/Check_círculo-azul | SVG o PNG 24×24 |
| `DS_DASH` `src` | Equis círculo gris | DS: Iconos/Toast_Tags/Equis_círculo | SVG o PNG 24×24 |

**Archivo Figma DS:** `xpi5O20E2XSRtReYDF46lV` (Sistema de Diseño SURA 2024)

En el JS, reemplazar las URLs en el objeto `A` y en las constantes `DS_CHECK` / `DS_DASH`:

```javascript
const A = {
  dog: '/o/sura-theme/images/icons/icon-perro.svg',   // ← ruta definitiva
  cat: '/o/sura-theme/images/icons/icon-gato.svg',
  paw: '/o/sura-theme/images/icons/icon-huella.svg',
};
```

> Los íconos del DS usan una estructura de contenedor con `overflow: hidden` e insets exactos. El CSS ya maneja esto con `.tab-icon-wrap` / `.tab-icon-inner`. **No cambiar las proporciones de los íconos.**

---

## 5. Tokens de diseño (CSS Custom Properties)

Definidos en `:root`. Si el portal ya tiene estas variables globales, pueden eliminarse del fragmento y dejar que hereden.

```css
--azul-vivo:     #2D6DF6   /* Azul principal SURA */
--azul-profundo: #0033A0   /* Azul oscuro / headings */
--fondo-azul:    #DFEAFF   /* Fondo tab activo */
--borde-azul:    #81B1FF   /* Bordes cards acordeón */
--negro:         #0D0D0D
--gris-500:      #3F3F41   /* Texto principal dark */
--gris:          #888B8D   /* Texto secundario / bordes */
--gris-palido:   #B4B4B5
--blanco:        #FFFFFF
--texto-desc:    #606060
--texto-sec:     #5A5A5A
--divider:       #E8ECF2
```

---

## 6. Breakpoints y comportamiento responsivo

| Breakpoint | Comportamiento |
|---|---|
| `< 1024px` (mobile) | Tabs en columna (ícono + texto corto), cards apiladas, toggle "Ver detalles" visible, título comparador visible (24px, flex centrado, height 36px), badges sin ícono (texto 2 líneas) |
| `≥ 1024px` (desktop) | Tabs en fila (ícono + texto largo), cards en 3 columnas, "Ver detalles" oculto (contenido siempre visible), título comparador visible (36px), badges con ícono huella + texto en una línea |

No hay breakpoint intermedio. El salto es directo en 1024px.

---

## 7. Comportamiento interactivo

### Selector de especie (Tabs)
- Click en tab → activa la tab → muestra el panel de planes correspondiente → **re-renderiza el acordeón** con los datos de la especie seleccionada
- La función clave es `switchTab(key, btn)` en el JS

### Cards de planes — "Ver detalles"
- Solo visible en mobile
- Click en botón → expande/colapsa la sección "Por qué elegir" con `max-height` animation
- Función: `toggleWhy(btn, id)`

### Acordeón comparador
- Inicia **colapsado** (sin clase `open`)
- Click en header → toggle clase `open` en `.ac-item`
- La clase `open` controla: visibilidad del body (`display: block`), rotación del chevron (`rotate(180deg)`), eliminación de sombra

---

## 8. Datos — Dónde están y cómo modificarlos

Todos los datos están en el JS como objetos literales. No hay llamadas a API.

| Objeto | Contenido | Cuándo modificar |
|---|---|---|
| `TABS` | Tabs perros/gatos (label, ícono, key) | Si se agregan más especies |
| `PLANES.perros` / `PLANES.gatos` | Nombre, precio, coberturas, secciones "por qué" | Cuando cambien precios o coberturas |
| `ACCORDION_DATA.perros` / `.gatos` | Filas del comparador por especie | Cuando cambien las coberturas comparativas |

**Precios actuales del prototipo:**

| Plan | Perros | Gatos |
|---|---|---|
| Esencial | $46.500/mes | $38.300/mes |
| Clásico | $96.200/mes | $90.600/mes |
| Global | $157.400/mes | $152.100/mes |

> Confirmar precios vigentes con el equipo de producto antes de publicar.

---

## 9. Diferencias entre Perros y Gatos en el comparador

La única diferencia en el comparador es la fila **"Consulta domiciliaria"**:

| Fila | Perros | Gatos |
|---|---|---|
| Consulta domiciliaria | ✗ Esencial · ✗ Clásico · ✓ Global | ✓ Esencial · ✓ Clásico · ✓ Global |

Y la vacuna anual:
- Perros: "(Pentavalente + Rabia)"
- Gatos: "(Triple felina + Rabia)"

---

## 10. Checklist de QA antes de publicar en Liferay

- [ ] Reemplazar las 5 URLs de assets Figma MCP por rutas definitivas
- [ ] Verificar que la fuente Sura Sans carga correctamente (o que Nunito está disponible)
- [ ] Probar en Chrome, Safari, Firefox (mobile y desktop)
- [ ] Verificar que no hay herencia de estilos Bootstrap en `.btn-cotizar` y `.tab-btn`
- [ ] Confirmar precios con el equipo de producto
- [ ] Asignar la función del botón "Cotizar" (actualmente no tiene acción — añadir URL o flujo de cotización)
- [ ] Revisar accesibilidad: `aria-expanded` en toggles ya está implementado; verificar foco de teclado
- [ ] Probar scroll horizontal en mobile con el acordeón abierto

---

## 11. Lo que NO hace este componente (fuera de scope)

- No llama a ninguna API ni servicio
- El botón "Cotizar" no tiene acción — el dev debe conectarlo al flujo de cotización de SURA
- No hay validaciones ni formularios
- No incluye el header/footer de la página — es un fragmento embebible
