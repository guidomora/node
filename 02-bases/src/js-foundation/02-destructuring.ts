
// const {SHELL, HOMEBREW_PREFIX } = process.env;
// console.table(["batman", "superman", "wonderwoman"]);

const characters = ["batman", "superman","flash", "wonderwoman" ];

// Poner un breakpoint en vs (puntito rojo), hace que se detenga la ejecución del programa
// en donde lo pusimos, y podemos ver el valor de las variables en ese momento.
const [, , , wonderwoman] = characters;