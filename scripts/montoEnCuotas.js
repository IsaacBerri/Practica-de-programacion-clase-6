// Dado un número real que representa el valor total de una compra, informar
// las posibles formas de pago según la siguiente tabla. Específica los datos de
// entrada, de salida, estrategia.
// 1 cuota de $................. (0% de recargo)
// 2 cuotas de $................. total $................. ( 5% de recargo)
// 6 cuotas de $................. total $................. ( 20% de recargo)
// 12 cuotas de $................. total $................. ( 40% de recargo)

const moto = Number(
  prompt(`Ingrese el numero de la moto que le interesa \n
1- Yamaha MT-09
2- Pulsar rs 200
3- Kawasaki Ninja 300
4- Victory Venom 400
5- Suzuki GSX-R150`)
);

const controladorCuotas = (monto) => {
    const totalConRecargo = (monto2, recargo) => {
        return Math.floor(monto2 + ((monto2 * recargo) / 100))
    }
    
    alert(`1 cuota de $${monto} (0% de recargo)
2 cuotas de $${Math.floor(monto / 2)}, total $${totalConRecargo(monto, 5)} ( 5% de recargo)
6 cuotas de $${Math.floor(monto / 6)}, total $${totalConRecargo(monto, 20)} ( 20% de recargo)
12 cuotas de $${Math.floor(monto / 12)}, total $${totalConRecargo(monto, 40)} ( 40% de recargo)`)
}


switch (moto) {
  case 1:
    alert(`Yamaha MT-09 \n
Cilindraje: 890 cc
Peso (tanque de gasolina lleno): 189 Kg
Potencia: 117.3 Hp a 10000 rpm
Torque: 93.0 Nm a 7000 rpm
Precio: $57.500.000 COP`);
    controladorCuotas(57500000)
    break;
  case 2:
    alert(`Pulsar rs 200 \n
Cilindraje: 199.50 cc
Peso (tanque de gasolina lleno): 177 kg
Potencia: 24.50 Hp a 9,750 rpm
Torque:  18.30 Nm a 8,000 rpm
Precio: $13.999.000 COP`);
    controladorCuotas(13999000)
    break;
  case 3:
    alert(`Kawasaki Ninja 300 \n
Cilindraje: 296 cc
Peso (tanque de gasolina lleno): 180 kg
Potencia: 39 Hp a 11.000 rpm
Torque:  27 Nm a 10.000 rpm
Precio: $21.940.464 COP`);
    controladorCuotas(21940464)
    break;
  case 4:
    alert(`Victory Venom 400 \n
Cilindraje: 378 cc
Peso (tanque de gasolina lleno): 141 kg
Potencia: 18.9 Hp a 10500 rpm
Torque:  14.0 Nm a 9000 rpm
Precio: $17.990.000 COP`);
    controladorCuotas(17990000)
    break;
  case 5:
    alert(`Suzuki GSX-R150 \n
Cilindraje: 150 cc
Peso (tanque de gasolina lleno): 185 kg
Potencia: 36.2 Hp a 9000 rpm
Torque:  35 Nm a 6500 rpm
Precio: $15.260.000 COP`);
    controladorCuotas(15260000)
    break;
  default:
    alert("No tenemos esa moto disponible")
    break;
}



