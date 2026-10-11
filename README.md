<div align="center">

<img src="assets/hero.svg" width="100%" alt="Mario Ibarra · automatización · backend · frontend" />

<h1>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=24&duration=2800&pause=900&color=2EE65C&center=true&vCenter=true&width=640&lines=Hola%2C+soy+Mario+%E2%9C%A6;Automatizo+procesos+de+punta+a+punta;APIs%2C+backend+y+frontend;Del+circuito+a+la+nube;Del+proceso+manual+al+flujo+autom%C3%A1tico" alt="typing" />

</h1>

<p>
<img src="https://img.shields.io/badge/automatización-0D1117?style=for-the-badge&logo=n8n&logoColor=2EE65C" alt="automatización" />
<img src="https://img.shields.io/badge/backend-0D1117?style=for-the-badge&logo=nodedotjs&logoColor=6EE7B7" alt="backend" />
<img src="https://img.shields.io/badge/frontend-0D1117?style=for-the-badge&logo=html5&logoColor=2EE65C" alt="frontend" />
<img src="https://img.shields.io/badge/electrónica-0D1117?style=for-the-badge&logo=espressif&logoColor=A855F7" alt="electrónica" />
<img src="https://img.shields.io/badge/telecomunicaciones-0D1117?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkVFN0I3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTQuOSAxNi4xQzEgMTIuMiAxIDUuOCA0LjkgMS45Ii8+PHBhdGggZD0iTTcuOCA0LjdhNi4xNCA2LjE0IDAgMCAwLS44IDcuNSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iOSIgcj0iMiIvPjxwYXRoIGQ9Ik0xNi4yIDQuOGMyIDIgMi4yNiA1LjExLjggNy40NyIvPjxwYXRoIGQ9Ik0xOS4xIDEuOWE5Ljk2IDkuOTYgMCAwIDEgMCAxNC4xIi8+PHBhdGggZD0iTTkuNSAxOGg1Ii8+PHBhdGggZD0ibTggMjIgNC0xMSA0IDExIi8+PC9zdmc+" alt="telecomunicaciones" />
<img src="https://komarev.com/ghpvc/?username=Mario-IY&color=2EE65C&style=for-the-badge&label=visitas" alt="visitas" />
</p>

<img src="assets/divider.svg" width="100%" alt="" />

</div>

## <img src="assets/icons/terminal.svg" height="36" align="top" alt="" /> &nbsp;01 — Quién soy

Ingeniero en Telecomunicaciones, Sistemas y Electrónica por la UNAM. Desarrollo soluciones que unen software y hardware: automatización de procesos, APIs e interfaces web, y sistemas electrónicos. Me interesa llevar una idea hasta el sistema funcionando, integrando cada una de sus partes.

```txt
▸ Flujos de automatización     n8n · webhooks · agentes de IA
▸ APIs y servicios backend     Node.js · Express · bases de datos
▸ Frontend e interfaces web    HTML · CSS · JavaScript · WebSocket
▸ Electrónica y embebidos      Microcontroladores · FPGA · PCB
▸ Redes neuronales             Visión artificial · datos de sensores
▸ Diseño y modelado 3D         Modelado e impresión 3D
```

<details>
<summary><b>Publicaciones</b></summary>

<br/>

- **Web Interface Design for the Intelligent Management of a Differential Robot Applied to IoT Systems** — XXVII Robotics Mexican Congress (COMRob), 2025. Interfaz web en tiempo real sobre ESP32 y WebSocket, con control manual, navegación autónoma y seguimiento de trayectorias. [DOI](https://doi.org/10.1109/COMRob68109.2025.11264804)
- **Red neuronal convolucional para control de activación y paro de un dispositivo electrónico** — visión artificial con ESP32-CAM y una CNN entrenada con base de datos propia, con una eficacia del 85 % al 90 %. Pädi, Boletín Científico de Ciencias Básicas e Ingenierías del ICBI, vol. 14, núm. 27, 2026.

</details>

## <img src="assets/icons/flow.svg" height="36" align="top" alt="" /> &nbsp;02 — Cómo trabajo

<img src="assets/pipeline.svg" width="100%" alt="Entiendo, construyo, entrego" />

## <img src="assets/icons/stack.svg" height="36" align="top" alt="" /> &nbsp;03 — En lo que he trabajado

| Tipo | Proyecto | Qué involucra | Stack |
|---|---|---|---|
| 🟢 Frontend | **Portal de levantamientos y documentos** | Aplicación web donde el personal en campo captura levantamientos y los equipos consultan documentos. Vistas por rol, carga de archivos, conexión directa con flujos de n8n y despliegue automático en cada versión. | Node.js · Tailwind · n8n |
| 🟢 Backend | **API de solicitudes y visitadores** | Servicio que gobierna el ciclo completo de una solicitud: alta, estados, órdenes de trabajo y asignación de visitadores. Concentra las reglas de negocio que consumen el portal y los flujos. | Node.js · REST · base de datos |
| 🟢 Automatización | **Reclutamiento automatizado** | Un solo webhook recibe todos los eventos del sistema de reclutamiento y los enruta por recurso, vacante y acción hacia subflujos. Crea carpetas en Drive por tipo de vacante, valida requisitos en vivo y avisa por Slack. | n8n · Teamtailor · Drive · Slack |
| 🟢 Automatización | **Descarga de archivos por orden de trabajo** | El portal funciona como puente transparente hacia un flujo que reúne los archivos de cada orden y los entrega paginados en bloques de 20 MB, sin exponer identificadores internos. | n8n · Drive · portal web |
| 🟢 Automatización | **Viáticos y tiempos de traslado** | Calcula distancia y tiempo de cada visita con Distance Matrix, tiene cálculo alterno cuando el dato no llega y verifica los requisitos del visitador antes de autorizar el viático. | n8n · Distance Matrix · Teamtailor |
| 🟢 Agentes de IA | **Asistentes de WhatsApp y de voz** | Conversaciones automatizadas por WhatsApp con Treble y por llamada con bots de Vapi, conectadas a flujos que consultan datos, registran la información y derivan a una persona cuando hace falta. | Treble · Vapi · n8n |
| 🟣 Electrónica | **Robot diferencial con interfaz web** | Diseño completo del sistema: chasis modelado e impreso en 3D, circuito, firmware en MicroPython e interfaz web en tiempo real. Opera de forma manual, navega a coordenadas o sigue una trayectoria dibujada en pantalla, con odometría e IMU.<br/><sub>Publicado en IEEE COMRob 2025.</sub> | ESP32 · MicroPython · WebSocket · JavaScript |
| 🟣 Modelado 3D | **Diseño e impresión 3D** | Piezas y objetos diseñados desde cero e impresos por cuenta propia, como trabajo independiente: de la idea al objeto físico, con modelado paramétrico y orgánico, y laminado para impresión. | Shapr3D · Blender · Nomad Sculpt · Bambu Studio |
| 🟣 Redes neuronales | **Visión artificial y redes pequeñas** | Una ESP32-CAM envía imágenes a una CNN que decide si activar o detener un robot, con 85 % a 90 % de eficacia sobre una base de datos propia. También entrené redes neuronales compactas que interpretan información de sensores.<br/><sub>Publicado en Pädi, Boletín Científico de Ciencias Básicas e Ingenierías del ICBI, vol. 14, núm. 27, 2026.</sub> | ESP32-CAM · MATLAB · CNN |

<sub>🟢 trabajo profesional en producción · 🟣 proyectos académicos, de investigación y trabajo independiente. El código de los proyectos profesionales es privado.</sub>

## <img src="assets/icons/stack.svg" height="36" align="top" alt="" /> &nbsp;04 — Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,python,cpp,mongodb,docker,git,github,linux,blender&theme=dark" alt="stack" />

<br/><br/>

<img src="https://img.shields.io/badge/n8n-161B22?style=for-the-badge&logo=n8n&logoColor=2EE65C" alt="n8n" />
<img src="https://img.shields.io/badge/webhooks-161B22?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMkVFNjVDIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTQuODc2IDEzLjYxYTQgNCAwIDEgMCA2LjEyNCAzLjM5aDYiLz48cGF0aCBkPSJNMTUuMDY2IDIwLjUwMmE0IDQgMCAxIDAgMS45MzQgLTcuNTAyYy0uNzA2IDAgLTEuNDI0IC4xNzkgLTIgLjVsLTMgLTUuNSIvPjxwYXRoIGQ9Ik0xNiA4YTQgNCAwIDEgMCAtOCAwYzAgMS41MDYgLjc3IDIuODE4IDIgMy41bC0zIDUuNSIvPjwvc3ZnPg==" alt="webhooks" />
<img src="https://img.shields.io/badge/REST_APIs-161B22?style=for-the-badge&logo=swagger&logoColor=6EE7B7" alt="REST APIs" />
<img src="https://img.shields.io/badge/Slack-161B22?style=for-the-badge" alt="Slack" />
<img src="https://img.shields.io/badge/Treble-161B22?style=for-the-badge" alt="Treble" />
<img src="https://img.shields.io/badge/Vapi-161B22?style=for-the-badge" alt="Vapi" />
<img src="https://img.shields.io/badge/Teamtailor-161B22?style=for-the-badge" alt="Teamtailor" />
<img src="https://img.shields.io/badge/WhatsApp_API-161B22?style=for-the-badge&logo=whatsapp&logoColor=2EE65C" alt="WhatsApp API" />
<img src="https://img.shields.io/badge/Google_Workspace-161B22?style=for-the-badge&logo=google&logoColor=6EE7B7" alt="Google Workspace" />
<img src="https://img.shields.io/badge/Jira-161B22?style=for-the-badge&logo=jira&logoColor=A855F7" alt="Jira" />
<img src="https://img.shields.io/badge/Flet-161B22?style=for-the-badge" alt="Flet" />
<img src="https://img.shields.io/badge/WebSocket-161B22?style=for-the-badge" alt="WebSocket" />
<img src="https://img.shields.io/badge/ESP32-161B22?style=for-the-badge&logo=espressif&logoColor=2EE65C" alt="ESP32" />
<img src="https://img.shields.io/badge/MicroPython-161B22?style=for-the-badge&logo=micropython&logoColor=6EE7B7" alt="MicroPython" />
<img src="https://img.shields.io/badge/Proteus-161B22?style=for-the-badge&logo=proteus&logoColor=A855F7" alt="Proteus" />
<img src="https://img.shields.io/badge/MATLAB-161B22?style=for-the-badge" alt="MATLAB" />
<img src="https://img.shields.io/badge/VHDL-161B22?style=for-the-badge" alt="VHDL" />
<img src="https://img.shields.io/badge/SystemVerilog-161B22?style=for-the-badge" alt="SystemVerilog" />
<img src="https://img.shields.io/badge/Vivado-161B22?style=for-the-badge&logo=amd&logoColor=2EE65C" alt="Vivado" />
<img src="https://img.shields.io/badge/Quartus-161B22?style=for-the-badge&logo=intel&logoColor=6EE7B7" alt="Quartus" />
<img src="https://img.shields.io/badge/Nomad_Sculpt-161B22?style=for-the-badge" alt="Nomad Sculpt" />
<img src="https://img.shields.io/badge/Shapr3D-161B22?style=for-the-badge" alt="Shapr3D" />
<img src="https://img.shields.io/badge/Bambu_Studio-161B22?style=for-the-badge&logo=bambulab&logoColor=6EE7B7" alt="Bambu Studio" />

</div>

## <img src="assets/icons/pulse.svg" height="36" align="top" alt="" /> &nbsp;05 — Actividad

<div align="center">

<img src="https://raw.githubusercontent.com/Mario-IY/Mario-IY/output/stats.svg" width="100%" alt="actividad" />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Mario-IY/Mario-IY/output/snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Mario-IY/Mario-IY/output/snake.svg" />
  <img src="https://raw.githubusercontent.com/Mario-IY/Mario-IY/output/snake-dark.svg" width="100%" alt="snake" />
</picture>

<img src="assets/divider.svg" width="100%" alt="" />

<sub><i>Thought creates; the act inscribes it in time.</i></sub>

<img src="assets/wave.svg" width="100%" height="120" alt="" />

</div>
