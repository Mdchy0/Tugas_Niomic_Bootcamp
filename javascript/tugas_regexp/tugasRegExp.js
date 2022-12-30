function panggilRegexp(value) {
 let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z"; 
  var ambilData = value.match(/[a-z]/g)
   console.log(ambilData)
}

panggilRegexp()