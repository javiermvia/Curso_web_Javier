# Ejercicios del curso 2013 (Frontend) #

## Configuración del Entorno ##

- Navegador (F12)
- Editor de código (Visual Studio Code)
- NodeJS / npm
- Servidor Web de desarrollo: e.g. http-server 
    ```shell
    npm install -g http-server
    ```
    <https://git-scm.com/>

## Configuración de Git ##

- Definir usuario / correo
    ```shell
    git config --global user.name <userName>
    git config --global user.email <userMail>
    ```
- Comprobar la configuración
    ```shell
    git config -l --global
    ```

- Crear un repositorio

- De local a remoto

    - Inicializo el repositorio
        ```shell
        git init <carpeta>
        ```
    - Opcionalmente, hacemos un primer commit, e.g desde VSC
    - Comprobamos el commit
        ```shell 
        git log
        ```
     - Creamos un repositorio VACIO en GitHub, preferiblemente con el mismo nombre
     - Siguiendo las intruccione de GitHub, sincronizamos los repositorios
        ```shell
        git remote add origin https://github.com/<repositorio>.git
        git push -u origin master
        ```
- De remoto a local
    ```shell
    git clone <repositorio>.git
    ```