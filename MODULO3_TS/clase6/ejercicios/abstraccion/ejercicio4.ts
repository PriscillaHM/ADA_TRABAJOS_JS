// Ejercicio 4: Comparación - Clases Abstractas vs Interfaces 
// Crea una interfaz PagoOnline con un método procesarPago(). 
// Crea una clase abstracta Pago con un método concreto validarMonto() y un 
// método abstracto completarPago(). 
// Implementa ambas estructuras en una clase concreta PagoConTarjeta.
interface PagoOnline{
    procesoPago(): void
}

abstract class Pago{
    validarMonto(): void{
        console.log('Monto validado.')
    }

    abstract completarPago(): void
}

class PagoConTarjeta extends Pago implements PagoOnline{
    procesoPago(): void {
        console.log('Procesando pago...')
    }

    completarPago(): void {
        console.log('Pago completado correctamente.')
    }
}

const pago = new PagoConTarjeta()
pago.validarMonto()
pago.procesoPago()
pago.completarPago()