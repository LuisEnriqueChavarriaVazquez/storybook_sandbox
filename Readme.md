
# Guía para Actualizar Paquetes y Regenerar el Bundle

Este documento describe los pasos necesarios para actualizar los paquetes de npm a la versión más reciente y generar el bundle de producción correctamente.

## Pasos para Actualizar y Compilar

1. **Instalar la versión más reciente de los paquetes:**

   Utiliza el siguiente comando para instalar la versión más reciente de un paquete específico:

   ```bash
   npm install @luisenriquechavarriavazquez/currency-format@latest
   ```

   Esto se asegura de que siempre tengas la versión más actualizada del paquete.

2. **Limpiar la caché de npm (opcional):**

   Si estás teniendo problemas con la versión instalada, puedes limpiar la caché de npm:

   ```bash
   npm cache clean --force
   ```

3. **Eliminar dependencias antiguas:**

   Si necesitas asegurarte de que no haya dependencias antiguas afectando el proyecto, puedes eliminar la carpeta `node_modules` y el archivo `package-lock.json`:

   ```bash
   rm -rf node_modules package-lock.json
   ```

   Luego reinstala todas las dependencias:

   ```bash
   npm install
   ```

4. **Eliminar la carpeta `dist` (opcional pero recomendado):**

   Si estás generando un bundle para producción, es útil eliminar la carpeta `dist` antes de volver a compilar:

   ```bash
   rm -rf dist
   ```

5. **Generar el bundle:**

   Una vez que todo esté configurado, genera el bundle ejecutando:

   ```bash
   npm run build
   ```

6. **Verificar el despliegue:**

   Después de ejecutar la build, verifica que los archivos en la carpeta `dist` sean los más recientes y estén listos para ser desplegados en producción.

7. **Recarga forzada del navegador (opcional):**

   Para asegurarte de que el navegador no esté utilizando archivos en caché antiguos, realiza una recarga forzada:

   - Windows/Linux: `Ctrl + F5`
   - macOS: `Cmd + Shift + R`

Con estos pasos, deberías poder mantener tu proyecto actualizado y asegurarte de que el bundle refleje los últimos cambios.
