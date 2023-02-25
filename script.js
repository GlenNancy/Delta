function calcular(){
    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)
    let c = Number(document.getElementById('c').value)
    let delta = document.getElementById('delta')
    let x1 = document.getElementById('x1')
    let x2 = document.getElementById('x2')
    let z = document.getElementById('z')
    let zz = document.getElementById('zz')
    let zzz = document.getElementById('zzz')

    z.innerHTML = a
    zz.innerHTML = b
    zzz.innerHTML = c
    if(a === 0){
        window.alert(`ERRO! Coeficiente A precisa ser um número diferente de 0`)
        
    } else{
        let del = Math.pow(b,2) - 4*a*c 
        delta.innerHTML = `Delta = ${del}`
        
        if (b === 0 || c === 0 || c === 0 && b === 0){
            window.alert('Equação de segundo grau incompleta')
        }
        if(del > 0){
            let v1 = ((-b + Math.sqrt(del)) / (2*a));
            let v2 = ((-b - Math.sqrt(del)) / (2*a));
            x1.innerHTML = `X¹ = ${v1}`;
            x2.innerHTML = `X² = ${v2}`;
        }  if (del === 0){
            let xunica = (-b + Math.sqrt(del) / (2*a))
            window.alert(`raiz única = ${xunica}`)
            x1.innerHTML = `raiz única = ${xunica}`
            x2.innerHTML = `raiz única = ${xunica}`
        }  if (del < 0){
            window.alert('Delta < 0, não existe raízes no conjunto dos números reais')
        }
    }
}

function limpar(){
    document.getElementById('a').value = ' '
    document.getElementById('b').value = ' '
    document.getElementById('c').value = ' '
    document.getElementById('res').innerHTML = 'Resultado'
    document.getElementById('delta').innerHTML = 'Δ= X'
    document.getElementById('x1').innerHTML = 'x¹'
    document.getElementById('x2').innerHTML = 'x²'
    document.getElementById('z').innerHTML = 'A'
    document.getElementById('zz').innerHTML = 'B'
    document.getElementById('zzz').innerHTML = 'C'
}