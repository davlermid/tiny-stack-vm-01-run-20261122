import{readFileSync as R,readdirSync as D,mkdirSync as M,writeFileSync as W}from'fs'
let{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env,T='01146abfxxxxxxxx999999959995999x999xxxxxxxxxxxxx04400xxxxxxxxxxx58xxxxxxxxxxxxxx4414',E=c=>{throw c},d
for(d of D(I)){
d='/'+d+'/'
let g=I+d,h=O+d,p=R(g+'program.bin'),i=R(g+'input.bin'),o='',e=0,S=[],C=[],m=[],c=0,t=0,k=0,n=p.length,a,b,r,s,P=(...v)=>S.push(...v),Y=()=>S.pop()
try{for(;;){
if(t++==1e6)E(10)
if(c<0|c>=n)E(9)
let q=p[c],v=+('0x'+T[q])
if(v!=v)E(5)
let u=q==1?1:q==2?4:q>>2==12?2:0
c+=1+u
if(c>n)E(9)
S.length<v>>2?E(2):S.length-(v>>2)+(v&3)>256&&E(3)
q<3?!q?E(0):P(q<2?p[c-1]<<24>>24:p[c-4]|p[c-3]<<8|p[c-2]<<16|p[c-1]<<24)
:q<8?q==3?Y():q==4?P(S.at(-1)):q==5?P(...S.splice(-2,1)):q==6?P(S.at(-2)):P(...S.splice(-3,1))
:q<35?q==23?P(-Y()|0):q==27?P(~Y()):(b=Y(),a=Y(),!b&q>18&q<23?E(4):P([a+b|0,a-b|0,Math.imul(a,b),a/b|0,a%b|0,(a>>>0)/(b>>>0)|0,(a>>>0)%(b>>>0)|0,,a&b,a|b,a^b,,a<<b,a>>b,a>>>b|0,,a==b|0,a<b|0,a>>>0<b>>>0|0][q-16]))
:q<53?(r=(p[c-2]|p[c-1]<<8)<<16>>16,q==48?c+=r:q==49?Y()||(c+=r):q==50?Y()&&(c+=r):q==51?C.length>63?E(7):(C.push(c),c=p[c-2]|p[c-1]<<8):C.length?c=C.pop():E(8))
:q<66?(a=Y(),a<0|a>255?E(6):q<65?P(m[a]|0):m[a]=Y())
:q==80?(s=''+Y(),o.length+s.length>65536?E(11):o+=s):q==81?o.length>65535?E(11):o+=String.fromCharCode(Y()&255):q==82?P(k<i.length?i[k++]:-1):E(Y()&255)
}}catch(z){e=z}
M(h,{recursive:!0}),W(h+'stdout.bin',o,'latin1'),W(h+'exit.txt',''+e)
}