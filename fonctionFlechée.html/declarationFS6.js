function exempleVar() {
    var x=5
    if(true){
        var x=10
        console.log(x,'exempleVar')
    }
    console.log(x)
}
exempleVar()

function exempleLet() {
       let y=5
    if(true){
        let y=10
        console.log(y,'exempleLet')
    }
    console.log(y)
}
exempleLet()

function exempleConst() {
    const z=5

    console.log(z)  
}
exempleConst()
