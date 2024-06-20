export const handleErrorDatabase = (error) => {
    if (error.code) {
        switch (error.code) {
            case "23502":
                return {
                    code: 400,
                    msg: "Campo obligatorio",
                };
            case "23505":
                return {
                    code: 400,
                    msg: " Registro ya existe",
                };
            case "22P02":
                return {
                    code: 400,
                    msg: "DatoS no compatible",
                };
            default:
                return {
                    code: 500,
                    msg: "ERROR postgres",
                };
        }
    }

    return {
        code: 500,
        msg: "ERROR de servidor",
    };
};
