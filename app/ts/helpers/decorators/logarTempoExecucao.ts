export function logarTempoExecucao(emSegundos : boolean = false){

    return function (target : any, propertyKey : string , descriptor : PropertyDescriptor){
        let divisor = 1;
        let unidade = 'ms';
        if(emSegundos){
            divisor = 1000;
            unidade = 's';
        }
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args : any[]){
            console.log('---------------------------');
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const resultado = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Resultado do método : ${JSON.stringify(resultado)}`);
            console.log(`O método ${propertyKey} demorou ${(t2-t1)/divisor} ${unidade}`);
            return resultado;
        };
        return descriptor;
    }
}