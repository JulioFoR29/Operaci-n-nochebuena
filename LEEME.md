# Operación Nochebuena — Entrega 2

Esta versión acumula las Entregas 1 y 2. Mantiene las clases GameState, WorkshopSystem, SleighPhysics, StealthEngine, AudioSynth, UIManager, World, ChimneyScene y Game; todo el contenido visual y sonoro sigue siendo procedural.

## Uso

Sube todos los archivos de la carpeta a la raíz de un sitio HTTPS. El service worker requiere HTTPS o localhost. Three.js 0.160 se descarga por CDN en la primera visita; Three.js local y el modo sin conexión total quedan programados para la Entrega 4.

## Entrega 2

- Cuatro cámaras de vuelo: cercana, normal, lejana y cabina. Cambia con V, el botón táctil de cámara o Y/Triángulo en mando.
- Turbo con F, botón táctil o X/Cuadrado. Tiene energía, recuperación, aumento de velocidad máxima, ampliación dinámica del FOV, inclinación y estelas ligeras. En móvil reduce el número de partículas.
- Colisiones con casas, árboles y farolas, con reducción de velocidad, elevación y rebote suave. La zona de aterrizaje queda excluida de la colisión del edificio.
- Flecha hacia la casa pendiente más cercana y minimapa con las cuatro casas, estados y orientación del trineo.
- Cuatro planos interiores rotados según la noche: clásico, dos pisos con escalera y planta superior, casa larga con pasillos y casa con garaje. Cada uno define muros, muebles, juguetes, árbol, salida y rutas de guardias.
- Cuatro exteriores procedurales: clásico, cabaña con porche, torre y bungaló con cochera. Conservan puntos de aterrizaje y chimenea.
- Gamepad API: sticks para vuelo/sigilo, A/Cruz interactúa, X/Cuadrado usa turbo o galleta, B/Círculo vuelve al taller o usa señuelo, Y/Triángulo cambia cámara y Menú pausa. En menús, cruceta/stick mueve el foco y A/Cruz activa.
- Caché actualizada a nochebuena-entrega2-v5.

## Verificación efectuada

- Sintaxis del módulo ES y del service worker.
- Persistencia compatible con guardados de la Entrega 1; los guardados antiguos reciben plano y exterior válidos.
- Pruebas de las cuatro dificultades, cuatro planos, cuatro exteriores, rotación al avanzar de noche, top 10 y paridad completa de cadenas ES/EN.
- Manifest válido e iconos PNG de 180, 192 y 512 px.
- El navegador de prueba descargó el módulo, pero tiene WebGL deshabilitado. El manejo de error mostró correctamente el mensaje y Reintentar.

## No verificado en este entorno

No fue posible ejecutar el recorrido 3D completo, medir 60 FPS, escuchar el audio, probar un mando físico, Safari/iPhone, la instalación PWA o el modo sin conexión después de la primera carga. El navegador remoto genera errores de contexto WebGL por una restricción propia; por ello no se afirma que la consola esté limpia durante una partida real.

## Ajustes recomendados

Prueba primero en Fácil y cámara normal. El turbo consume 28 puntos/s y recupera 11 puntos/s; si hace trivial el vuelo, reduce el multiplicador 1.38 a 1.25. Para las colisiones, conserva el rebote actual hasta probarlo en iPhone; si se siente brusco, sube el factor de velocidad de 0.48 a 0.58. Evalúa los interiores en Relajado y luego en Normal para ajustar rutas y visión sin presión del reloj.

Antes de publicar, completa dos noches en ordenador y iPhone, visita los cuatro planos, provoca una colisión de cada tipo, cambia las cuatro cámaras, agota y recarga el turbo, conecta un mando, provoca una alerta, entrega correctamente, deja amanecer y continúa un guardado.

## Siguiente entrega

Entrega 3: eventos nocturnos, gadgets y mejoras, economía centralizada, jefe basado en datos y retos diarios.
