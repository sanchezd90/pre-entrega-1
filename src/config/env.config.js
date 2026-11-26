export const validateEnv = () => {
    if (!process.env.PORT || !process.env.NODE_ENV) {
        throw new Error("Variables de entorno no definidas");
    }
    console.log(`Variables de entorno cargadas: Puerto:${process.env.PORT} Entorno:${process.env.NODE_ENV}`);
}