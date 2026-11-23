import{readFileSync as R,readdirSync as D,mkdirSync as M,writeFileSync as W}from'fs'
let{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env,E=c=>{throw c},d
for(d of D(I)){
d='/'+d+'/'
let p=R(I+d+'program.bin'),i=R(I+d+'input.bin'),o='',e,S=[],C=[],m=[],c=0,t,k=0,n=p.length,a,b,r,s,A,B,q,P=x=>S.push(x)>256&&E(3),Y=()=>S.pop()??E(2)
try{for(t=1e6;t--;){
c>>>0>=n&&E(9)
q=p[c]
c+=q==2?5:q>>2==12?3:q==1?2:1
c>n&&E(9)
q<3?!q?E(0):P(q<2?p[c-1]<<24>>24:p.readInt32LE(c-4))
:q<8?S.length<q-1>>1?E(2):q==3?Y():q==4?P(S.at(-1)):q==5?P(...S.splice(-2,1)):q==6?P(S.at(-2)):P(...S.splice(-3,1))
:q<35?q<16|q==31?E(5):(b=Y(),a=q==23|q==27?0:Y(),A=a>>>0,B=b>>>0,!b&q>18&q<23?E(4):P([a+b,a-b,Math.imul(a,b),a/b,a%b,A/B,A%B,-b,a&b,a|b,a^b,~b,a<<b,a>>b,a>>>b,,a==b,a<b,A<B][q-16]|0))
:q<53?q<48?E(5):q==52?C.length?c=C.pop():E(8):(r=p.readInt16LE(c-2),q<51?(q==48||!Y()==q%2)&&(c+=r):C.length>63?E(7):(C.push(c),c=r&65535))
:q<66?q<64?E(5):(a=Y(),b=q<65?0:Y(),a<0|a>255?E(6):q<65?P(m[a]|0):m[a]=b)
:q<80|q>83?E(5):q<82?(s=q==80?''+Y():String.fromCharCode(Y()&255),o.length+s.length>65536?E(11):o+=s):q==82?P(i[k++]??-1):E(Y()&255)
}E(10)}catch(z){e=z}
M(O+d,{recursive:!0}),W(O+d+'stdout.bin',o,'latin1'),W(O+d+'exit.txt',''+e)
}
