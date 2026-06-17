# 📱 ISTQB CTFL v4.0 — Simulador de Examen

App móvil para practicar el examen de certificación ISTQB Foundation Level.
**169 preguntas** de los exámenes oficiales A, B, C y D — todas en español.

---

## ✅ Requisitos previos

Instala estos programas en tu PC (en este orden):

1. **Node.js** → https://nodejs.org (descarga la versión LTS)
2. **Git** → https://git-scm.com
3. **Expo Go** en tu celular/tablet → Busca "Expo Go" en Play Store

---

## 🚀 Pasos para instalar y probar en tu celular

### Paso 1 — Sube el código a GitHub

1. Crea una cuenta en https://github.com si no tienes
2. Crea un repositorio nuevo llamado `istqb-simulator`
3. Sube todos los archivos de esta carpeta al repositorio

### Paso 2 — Clona el proyecto en tu PC

Abre una terminal (cmd o PowerShell en Windows) y escribe:

```bash
git clone https://github.com/TU_USUARIO/istqb-simulator.git
cd istqb-simulator
```

### Paso 3 — Instala las dependencias

```bash
npm install
```

Espera a que termine (puede tardar 2-3 minutos la primera vez).

### Paso 4 — Prueba en tu celular con Expo Go

```bash
npx expo start
```

Esto mostrará un **código QR** en la terminal.
- Abre **Expo Go** en tu celular
- Escanea el código QR
- ¡La app se abre directamente en tu celular!

> ⚠️ Tu celular y tu PC deben estar en la **misma red WiFi**

---

## 📦 Generar el APK (para instalar sin Expo Go)

### Paso 1 — Crea una cuenta en Expo

Ve a https://expo.dev y crea una cuenta gratuita.

### Paso 2 — Instala EAS CLI

```bash
npm install -g eas-cli
```

### Paso 3 — Inicia sesión en Expo

```bash
eas login
```

Ingresa tu usuario y contraseña de expo.dev

### Paso 4 — Configura el proyecto

```bash
eas build:configure
```

Cuando pregunte, selecciona **Android**.

### Paso 5 — Genera el APK

```bash
eas build --platform android --profile preview
```

Este comando sube el proyecto a los servidores de Expo y genera el APK.
Tarda entre 5 y 15 minutos. Al terminar te da un **link de descarga**.

### Paso 6 — Instala el APK en tu celular y tablet

1. Descarga el archivo `.apk` desde el link que te dio Expo
2. En tu celular ve a **Configuración → Seguridad → Instalar aplicaciones desconocidas** y actívalo
3. Abre el archivo `.apk` descargado
4. Instala la app
5. Repite en tu tablet

---

## 📂 Estructura del proyecto

```
istqb-simulator/
├── App.js                    # Entrada principal + navegación
├── app.json                  # Configuración de Expo
├── eas.json                  # Configuración para generar APK
├── package.json              # Dependencias
├── src/
│   ├── data/
│   │   └── questions.js      # 169 preguntas ISTQB (¡el corazón!)
│   ├── screens/
│   │   ├── HomeScreen.js     # Pantalla de inicio
│   │   ├── ExamScreen.js     # Pantalla del examen
│   │   └── ResultsScreen.js  # Pantalla de resultados
│   └── constants/
│       └── theme.js          # Colores y estilos globales
└── assets/                   # Íconos de la app
```

---

## 🎯 Características de la app

- ⏱ **Cronómetro de 60 minutos** con alerta visual en rojo
- 💡 **Retroalimentación inmediata** con explicación oficial tras cada respuesta
- 🗺 **Mapa de preguntas** para navegar libremente
- 🔀 **Preguntas aleatorias** — cada examen es diferente
- 📊 **Resultados por capítulo** al finalizar
- 📱 **Optimizado para celular y tablet**
- 🌙 **Modo oscuro** (fondo azul marino + verde)

---

## 📖 Distribución del examen (igual al oficial)

| Capítulo | Tema | Preguntas |
|---|---|---|
| 1 | Fundamentos del Testing | 8 |
| 2 | Testing a lo largo del SDLC | 6 |
| 3 | Pruebas Estáticas | 4 |
| 4 | Técnicas de Prueba | 12 |
| 5 | Gestión de las Pruebas | 8 |
| 6 | Herramientas de Prueba | 2 |
| **Total** | | **40** |

---

## ⚖️ Créditos

Preguntas basadas en los exámenes de muestra oficiales ISTQB® CTFL v4.0 (A, B, C y D),
publicados en istqb.org para uso no comercial con atribución.
