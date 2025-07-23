const edad = 18;
const tieneCedula = true;
const extranjero = true;
const ahorroUF = 4;
const titularCuenta = "postulante";
const porcentajeVulnerabilidad = 0;
let mensaje = "";
if (edad >= 18) {
    if (tieneCedula || (extranjero && tieneCedula)) {
        if (ahorroUF >= 4 &&
            ["postulante", "conyuge", "conviviente"].includes(titularCuenta)) {
            if (porcentajeVulnerabilidad >= 0 && porcentajeVulnerabilidad <= 100) {
                if (porcentajeVulnerabilidad <= 70 && porcentajeVulnerabilidad >= 0) {
                    mensaje = " Cumple con todos los requisitos para postular al subsidio de arriendo.";
                } else {
                    mensaje = " No pertenece al 70% más vulnerable según el Registro Social de Hogares.";
                }
            } else {
                mensaje = " El porcentaje de vulnerabilidad debe estar entre 0 y 100.";
            }
        } else {
            mensaje = " No acredita el ahorro mínimo de 4 UF o la cuenta no está a nombre válido.";
        }
    } else {
        mensaje = " No posee cédula de identidad vigente.";
    }
} else {
    mensaje = " Debe ser mayor de 18 años para postular.";
}
console.log(mensaje);