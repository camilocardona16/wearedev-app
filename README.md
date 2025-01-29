# wearedev-app

Este es el README para la aplicación Ionic **wearedev-app**.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de empezar:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Ionic CLI](https://ionicframework.com/docs/cli) (versión 6 o superior)
- [Angular CLI](https://angular.io/cli)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/wearedev-app.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd wearedev-app
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

## Ejecución de la Aplicación

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
ionic serve
```

Esto iniciará un servidor local y abrirá la aplicación en tu navegador predeterminado. La aplicación se recargará automáticamente si realizas cambios en el código fuente.

## Generar una Build para Producción

Para generar una build optimizada para producción, ejecuta:

```bash
ionic build --prod
```

Los archivos generados estarán en el directorio `www`.

## Desplegar la Aplicación

Puedes desplegar la aplicación usando Capacitor o Cordova en dispositivos móviles. Asegúrate de tener configurados los entornos nativos antes de proceder.

Para Android:

```bash
ionic cap add android
ionic cap open android
```

Para iOS:

```bash
ionic cap add ios
ionic cap open ios
```

Sigue las instrucciones en Android Studio o Xcode para compilar y ejecutar la aplicación en un dispositivo o emulador.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva característica (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---
