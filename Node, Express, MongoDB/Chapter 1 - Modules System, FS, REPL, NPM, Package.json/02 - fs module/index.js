const fs=require('fs')

/*Sync Wise*/
// const t1=performance.now()
// const txt = fs.readFileSync('demo.txt', 'utf-8')
// const t2=performance.now()

/*Async Wise*/
const t1=performance.now()
fs.readFile('demo.txt', 'utf-8', (err, txt)=>{
    console.log(txt)
})
const t2=performance.now()
console.log(txt, t2-t1)