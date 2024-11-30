(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zu="164",xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},h0=0,Dh=1,d0=2,fp=1,pp=2,us=3,xs=0,zn=1,qi=2,Fs=0,$r=1,Oh=2,Uh=3,Fh=4,f0=5,ir=100,p0=101,m0=102,g0=103,_0=104,x0=200,v0=201,y0=202,S0=203,vu=204,yu=205,T0=206,M0=207,E0=208,A0=209,b0=210,w0=211,N0=212,R0=213,C0=214,L0=0,I0=1,P0=2,dc=3,D0=4,O0=5,U0=6,F0=7,Uc=0,V0=1,B0=2,di=0,mp=1,gp=2,_p=3,xp=4,z0=5,vp=6,k0=7,Vh="attached",H0="detached",yp=300,so=301,ro=302,fc=303,Su=304,Fc=306,oo=1e3,$i=1001,pc=1002,pn=1003,Sp=1004,Go=1005,Tn=1006,ac=1007,Ai=1008,Vs=1009,G0=1010,W0=1011,Tp=1012,Mp=1013,ao=1014,qn=1015,ms=1016,Ep=1017,Ap=1018,ca=1020,X0=35902,q0=1021,Y0=1022,hi=1023,$0=1024,j0=1025,jr=1026,Zo=1027,Ju=1028,bp=1029,K0=1030,wp=1031,Np=1033,ul=33776,hl=33777,dl=33778,fl=33779,Bh=35840,zh=35841,kh=35842,Hh=35843,Gh=36196,Wh=37492,Xh=37496,qh=37808,Yh=37809,$h=37810,jh=37811,Kh=37812,Zh=37813,Jh=37814,Qh=37815,ed=37816,td=37817,nd=37818,id=37819,sd=37820,rd=37821,pl=36492,od=36494,ad=36495,Z0=36283,cd=36284,ld=36285,ud=36286,J0=2200,Q0=2201,ex=2202,Jo=2300,co=2301,ml=2302,Vr=2400,Br=2401,mc=2402,Qu=2500,tx=2501,nx=0,Rp=1,Tu=2,ix=3200,sx=3201,cr=0,Cp=1,fs="",yn="srgb",Qt="srgb-linear",eh="display-p3",Vc="display-p3-linear",gc="linear",qt="srgb",_c="rec709",xc="p3",yr=7680,hd=519,rx=512,Lp=513,ox=514,Ip=515,ax=516,cx=517,lx=518,ux=519,vc=35044,Mu=35048,dd="300 es",bi=2e3,lo=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fd=1234567;const Xo=Math.PI/180,uo=180/Math.PI;function Ni(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Sn(s,e,t){return Math.max(e,Math.min(t,s))}function th(s,e){return(s%e+e)%e}function hx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function dx(s,e,t){return s!==e?(t-s)/(e-s):0}function qo(s,e,t){return(1-t)*s+t*e}function fx(s,e,t,n){return qo(s,e,1-Math.exp(-t*n))}function px(s,e=1){return e-Math.abs(th(s,e*2)-e)}function mx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function gx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function _x(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xx(s,e){return s+Math.random()*(e-s)}function vx(s){return s*(.5-Math.random())}function yx(s){s!==void 0&&(fd=s);let e=fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sx(s){return s*Xo}function Tx(s){return s*uo}function Mx(s){return(s&s-1)===0&&s!==0}function Ex(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ax(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bx(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*_,c*p,a*l);break;case"YXY":s.set(c*p,a*u,c*_,a*l);break;case"ZYZ":s.set(c*_,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Bc={DEG2RAD:Xo,RAD2DEG:uo,generateUUID:Ni,clamp:Sn,euclideanModulo:th,mapLinear:hx,inverseLerp:dx,lerp:qo,damp:fx,pingpong:px,smoothstep:mx,smootherstep:gx,randInt:_x,randFloat:xx,randFloatSpread:vx,seededRandom:yx,degToRad:Sx,radToDeg:Tx,isPowerOfTwo:Mx,ceilPowerOfTwo:Ex,floorPowerOfTwo:Ax,setQuaternionFromProperEuler:bx,normalize:Dt,denormalize:Ei};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,n,i,r,o,a,c,l){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],x=i[0],g=i[3],m=i[6],T=i[1],S=i[4],w=i[7],F=i[2],L=i[5],R=i[8];return r[0]=o*x+a*T+c*F,r[3]=o*g+a*S+c*L,r[6]=o*m+a*w+c*R,r[1]=l*x+u*T+h*F,r[4]=l*g+u*S+h*L,r[7]=l*m+u*w+h*R,r[2]=d*x+p*T+_*F,r[5]=d*g+p*S+_*L,r[8]=d*m+p*w+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,_=t*h+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new ct;function Pp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wx(){const s=Qo("canvas");return s.style.display="block",s}const pd={};function Dp(s){s in pd||(pd[s]=!0,console.warn(s))}const md=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gd=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ba={[Qt]:{transfer:gc,primaries:_c,toReference:s=>s,fromReference:s=>s},[yn]:{transfer:qt,primaries:_c,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Vc]:{transfer:gc,primaries:xc,toReference:s=>s.applyMatrix3(gd),fromReference:s=>s.applyMatrix3(md)},[eh]:{transfer:qt,primaries:xc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(gd),fromReference:s=>s.applyMatrix3(md).convertLinearToSRGB()}},Nx=new Set([Qt,Vc]),Lt={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Nx.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ba[e].toReference,i=ba[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ba[s].primaries},getTransfer:function(s){return s===fs?gc:ba[s].transfer}};function Kr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _l(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Sr;class Rx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=Qo("canvas")),Sr.width=e.width,Sr.height=e.height;const n=Sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Kr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kr(t[n]/255)*255):t[n]=Kr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cx=0;class Op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(xl(i[o].image)):r.push(xl(i[o]))}else r=xl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function xl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lx=0;class mn extends Qi{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=$i,i=$i,r=Tn,o=Ai,a=hi,c=Vs,l=mn.DEFAULT_ANISOTROPY,u=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Ni(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=yp;mn.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],_=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+g)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,w=(p+1)/2,F=(m+1)/2,L=(u+d)/4,R=(h+x)/4,Y=(_+g)/4;return S>w&&S>F?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=L/n,r=R/n):w>F?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=L/i,r=Y/i):F<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(F),n=R/r,i=Y/r),this.set(n,i,r,t),this}let T=Math.sqrt((g-_)*(g-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(h-x)/T,this.z=(d-u)/T,this.w=Math.acos((l+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bs extends Qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new mn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Op(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends Bs{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class nh extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ix extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||c!==d||l!==p||u!==_){let g=1-a;const m=c*d+l*p+u*_+h*x,T=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const F=Math.sqrt(S),L=Math.atan2(F,m*T);g=Math.sin(g*L)/F,a=Math.sin(a*L)/F}const w=a*T;if(c=c*g+d*w,l=l*g+p*w,u=u*g+_*w,h=h*g+x*w,g===1-a){const F=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=F,l*=F,u*=F,h*=F}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*p-l*d,e[t+1]=c*_+u*d+l*h-a*p,e[t+2]=l*_+u*p+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),p=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"YZX":this._x=d*u*h+l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h-d*p*_;break;case"XZY":this._x=d*u*h-l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new U,_d=new ti;class Ss{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(r,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),Na.subVectors(this.max,Co),Tr.subVectors(e.a,Co),Mr.subVectors(e.b,Co),Er.subVectors(e.c,Co),Ms.subVectors(Mr,Tr),Es.subVectors(Er,Mr),qs.subVectors(Tr,Er);let t=[0,-Ms.z,Ms.y,0,-Es.z,Es.y,0,-qs.z,qs.y,Ms.z,0,-Ms.x,Es.z,0,-Es.x,qs.z,0,-qs.x,-Ms.y,Ms.x,0,-Es.y,Es.x,0,-qs.y,qs.x,0];return!yl(t,Tr,Mr,Er,Na)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,Tr,Mr,Er,Na))?!1:(Ra.crossVectors(Ms,Es),t=[Ra.x,Ra.y,Ra.z],yl(t,Tr,Mr,Er,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ss=[new U,new U,new U,new U,new U,new U,new U,new U],xi=new U,wa=new Ss,Tr=new U,Mr=new U,Er=new U,Ms=new U,Es=new U,qs=new U,Co=new U,Na=new U,Ra=new U,Ys=new U;function yl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ys.fromArray(s,r);const a=i.x*Math.abs(Ys.x)+i.y*Math.abs(Ys.y)+i.z*Math.abs(Ys.z),c=e.dot(Ys),l=t.dot(Ys),u=n.dot(Ys);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Px=new Ss,Lo=new U,Sl=new U;class es{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Px.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const t=Lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Lo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Sl)),this.expandByPoint(Lo.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rs=new U,Tl=new U,Ca=new U,As=new U,Ml=new U,La=new U,El=new U;class la{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.origin).addScaledVector(this.direction,t),rs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Tl.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),As.copy(this.origin).sub(Tl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ca),a=As.dot(this.direction),c=-As.dot(Ca),l=As.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*c-a,d=o*a-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Tl).addScaledVector(Ca,d),p}intersectSphere(e,t){rs.subVectors(e.center,this.origin);const n=rs.dot(this.direction),i=rs.dot(rs)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,n,i,r){Ml.subVectors(t,e),La.subVectors(n,e),El.crossVectors(Ml,La);let o=this.direction.dot(El),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;As.subVectors(this.origin,e);const c=a*this.direction.dot(La.crossVectors(As,La));if(c<0)return null;const l=a*this.direction.dot(Ml.cross(As));if(l<0||c+l>o)return null;const u=-a*As.dot(El);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,r,o,a,c,l,u,h,d,p,_,x,g){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,p,_,x,g)}set(e,t,n,i,r,o,a,c,l,u,h,d,p,_,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=_,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,_=l*u,x=l*h;t[0]=d+x*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,_=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=_*l-p,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*c,p=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dx,e,Ox)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),bs.crossVectors(n,Kn),bs.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),bs.crossVectors(n,Kn)),bs.normalize(),Ia.crossVectors(Kn,bs),i[0]=bs.x,i[4]=Ia.x,i[8]=Kn.x,i[1]=bs.y,i[5]=Ia.y,i[9]=Kn.y,i[2]=bs.z,i[6]=Ia.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],x=n[6],g=n[10],m=n[14],T=n[3],S=n[7],w=n[11],F=n[15],L=i[0],R=i[4],Y=i[8],A=i[12],M=i[1],q=i[5],ne=i[9],B=i[13],le=i[2],ue=i[6],_e=i[10],Se=i[14],ee=i[3],Te=i[7],xe=i[11],Fe=i[15];return r[0]=o*L+a*M+c*le+l*ee,r[4]=o*R+a*q+c*ue+l*Te,r[8]=o*Y+a*ne+c*_e+l*xe,r[12]=o*A+a*B+c*Se+l*Fe,r[1]=u*L+h*M+d*le+p*ee,r[5]=u*R+h*q+d*ue+p*Te,r[9]=u*Y+h*ne+d*_e+p*xe,r[13]=u*A+h*B+d*Se+p*Fe,r[2]=_*L+x*M+g*le+m*ee,r[6]=_*R+x*q+g*ue+m*Te,r[10]=_*Y+x*ne+g*_e+m*xe,r[14]=_*A+x*B+g*Se+m*Fe,r[3]=T*L+S*M+w*le+F*ee,r[7]=T*R+S*q+w*ue+F*Te,r[11]=T*Y+S*ne+w*_e+F*xe,r[15]=T*A+S*B+w*Se+F*Fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],g=e[11],m=e[15];return _*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*p-n*c*p)+x*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*u-r*c*u)+g*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+m*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],g=e[14],m=e[15],T=h*g*l-x*d*l+x*c*p-a*g*p-h*c*m+a*d*m,S=_*d*l-u*g*l-_*c*p+o*g*p+u*c*m-o*d*m,w=u*x*l-_*h*l+_*a*p-o*x*p-u*a*m+o*h*m,F=_*h*c-u*x*c-_*a*d+o*x*d+u*a*g-o*h*g,L=t*T+n*S+i*w+r*F;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=T*R,e[1]=(x*d*r-h*g*r-x*i*p+n*g*p+h*i*m-n*d*m)*R,e[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*m+n*c*m)*R,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*p-n*c*p)*R,e[4]=S*R,e[5]=(u*g*r-_*d*r+_*i*p-t*g*p-u*i*m+t*d*m)*R,e[6]=(_*c*r-o*g*r-_*i*l+t*g*l+o*i*m-t*c*m)*R,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*p+t*c*p)*R,e[8]=w*R,e[9]=(_*h*r-u*x*r-_*n*p+t*x*p+u*n*m-t*h*m)*R,e[10]=(o*x*r-_*a*r+_*n*l-t*x*l-o*n*m+t*a*m)*R,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*R,e[12]=F*R,e[13]=(u*x*i-_*h*i+_*n*d-t*x*d-u*n*g+t*h*g)*R,e[14]=(_*a*i-o*x*i-_*n*c+t*x*c+o*n*g-t*a*g)*R,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,_=r*h,x=o*u,g=o*h,m=a*h,T=c*l,S=c*u,w=c*h,F=n.x,L=n.y,R=n.z;return i[0]=(1-(x+m))*F,i[1]=(p+w)*F,i[2]=(_-S)*F,i[3]=0,i[4]=(p-w)*L,i[5]=(1-(d+m))*L,i[6]=(g+T)*L,i[7]=0,i[8]=(_+S)*R,i[9]=(g-T)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ar.set(i[0],i[1],i[2]).length();const o=Ar.set(i[4],i[5],i[6]).length(),a=Ar.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],vi.copy(this);const l=1/r,u=1/o,h=1/a;return vi.elements[0]*=l,vi.elements[1]*=l,vi.elements[2]*=l,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=bi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(a===bi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===lo)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=bi){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,p=(n+i)*u;let _,x;if(a===bi)_=(o+r)*h,x=-2*h;else if(a===lo)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ar=new U,vi=new ot,Dx=new U(0,0,0),Ox=new U(1,1,1),bs=new U,Ia=new U,Kn=new U,xd=new ot,vd=new ti;class fi{constructor(e=0,t=0,n=0,i=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vd.setFromEuler(this),this.setFromQuaternion(vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Up{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ux=0;const yd=new U,br=new ti,os=new ot,Pa=new U,Io=new U,Fx=new U,Vx=new ti,Sd=new U(1,0,0),Td=new U(0,1,0),Md=new U(0,0,1),Ed={type:"added"},Bx={type:"removed"},wr={type:"childadded",child:null},Al={type:"childremoved",child:null};class jt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new U,t=new fi,n=new ti,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new ct}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Sd,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,t){return yd.copy(e).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sd,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Io,Pa,this.up):os.lookAt(Pa,Io,this.up),this.quaternion.setFromRotationMatrix(os),i&&(os.extractRotation(i.matrixWorld),br.setFromRotationMatrix(os),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ed),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bx),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ed),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,Fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}jt.DEFAULT_UP=new U(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new U,as=new U,bl=new U,cs=new U,Nr=new U,Rr=new U,Ad=new U,wl=new U,Nl=new U,Rl=new U;class Yi{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yi.subVectors(e,t),i.cross(yi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){yi.subVectors(i,t),as.subVectors(n,t),bl.subVectors(e,t);const o=yi.dot(yi),a=yi.dot(as),c=yi.dot(bl),l=as.dot(as),u=as.dot(bl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,_=(o*u-a*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,cs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cs.x),c.addScaledVector(o,cs.y),c.addScaledVector(a,cs.z),c)}static isFrontFacing(e,t,n,i){return yi.subVectors(n,t),as.subVectors(e,t),yi.cross(as).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),as.subVectors(this.a,this.b),yi.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Yi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Nr.subVectors(i,n),Rr.subVectors(r,n),wl.subVectors(e,n);const c=Nr.dot(wl),l=Rr.dot(wl);if(c<=0&&l<=0)return t.copy(n);Nl.subVectors(e,i);const u=Nr.dot(Nl),h=Rr.dot(Nl);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Nr,o);Rl.subVectors(e,r);const p=Nr.dot(Rl),_=Rr.dot(Rl);if(_>=0&&p<=_)return t.copy(r);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Rr,a);const g=u*_-p*h;if(g<=0&&h-u>=0&&p-_>=0)return Ad.subVectors(r,i),a=(h-u)/(h-u+(p-_)),t.copy(i).addScaledVector(Ad,a);const m=1/(g+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Nr,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Cl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Lt.workingColorSpace){if(e=th(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Cl(o,r,e+1/3),this.g=Cl(o,r,e),this.b=Cl(o,r,e-1/3)}return Lt.toWorkingColorSpace(this,i),this}setStyle(e,t=yn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const n=Fp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=_l(e.r),this.g=_l(e.g),this.b=_l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Lt.fromWorkingColorSpace(In.copy(this),e),Math.round(Sn(In.r*255,0,255))*65536+Math.round(Sn(In.g*255,0,255))*256+Math.round(Sn(In.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(In.copy(this),t);const n=In.r,i=In.g,r=In.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=yn){Lt.fromWorkingColorSpace(In.copy(this),e);const t=In.r,n=In.g,i=In.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ws),this.setHSL(ws.h+e,ws.s+t,ws.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ws),e.getHSL(Da);const n=qo(ws.h,Da.h,t),i=qo(ws.s,Da.s,t),r=qo(ws.l,Da.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new We;We.NAMES=Fp;let zx=0;class Dn extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=$r,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=yu,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(n.blending=this.blending),this.side!==xs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vu&&(n.blendSrc=this.blendSrc),this.blendDst!==yu&&(n.blendDst=this.blendDst),this.blendEquation!==ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==dc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ps extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ps=kx();function kx(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Hx(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Sn(s,-65504,65504),ps.floatView[0]=s;const e=ps.uint32View[0],t=e>>23&511;return ps.baseTable[t]+((e&8388607)>>ps.shiftTable[t])}function Gx(s){const e=s>>10;return ps.uint32View[0]=ps.mantissaTable[ps.offsetTable[e]+(s&1023)]+ps.exponentTable[e],ps.floatView[0]}const bd={toHalfFloat:Hx,fromHalfFloat:Gx},cn=new U,Oa=new Ve;class bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Dp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}}class Vp extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bp extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ri extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wx=0;const oi=new ot,Ll=new jt,Cr=new U,Zn=new Ss,Po=new Ss,xn=new U;class pi extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pp(e)?Bp:Vp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Zn.min,Po.min),Zn.expandByPoint(xn),xn.addVectors(Zn.max,Po.max),Zn.expandByPoint(xn)):(Zn.expandByPoint(Po.min),Zn.expandByPoint(Po.max))}Zn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)xn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(xn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)xn.fromBufferAttribute(a,l),c&&(Cr.fromBufferAttribute(e,l),xn.add(Cr)),i=Math.max(i,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let Y=0;Y<n.count;Y++)a[Y]=new U,c[Y]=new U;const l=new U,u=new U,h=new U,d=new Ve,p=new Ve,_=new Ve,x=new U,g=new U;function m(Y,A,M){l.fromBufferAttribute(n,Y),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,Y),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,M),u.sub(l),h.sub(l),p.sub(d),_.sub(d);const q=1/(p.x*_.y-_.x*p.y);isFinite(q)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(q),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(q),a[Y].add(x),a[A].add(x),a[M].add(x),c[Y].add(g),c[A].add(g),c[M].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let Y=0,A=T.length;Y<A;++Y){const M=T[Y],q=M.start,ne=M.count;for(let B=q,le=q+ne;B<le;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new U,w=new U,F=new U,L=new U;function R(Y){F.fromBufferAttribute(i,Y),L.copy(F);const A=a[Y];S.copy(A),S.sub(F.multiplyScalar(F.dot(A))).normalize(),w.crossVectors(L,A);const q=w.dot(c[Y])<0?-1:1;o.setXYZW(Y,S.x,S.y,S.z,q)}for(let Y=0,A=T.length;Y<A;++Y){const M=T[Y],q=M.start,ne=M.count;for(let B=q,le=q+ne;B<le;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let m=0;m<u;m++)d[_++]=l[p++]}return new bn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wd=new ot,$s=new la,Ua=new es,Nd=new U,Lr=new U,Ir=new U,Pr=new U,Il=new U,Fa=new U,Va=new Ve,Ba=new Ve,za=new Ve,Rd=new U,Cd=new U,Ld=new U,ka=new U,Ha=new U;class Bn extends jt{constructor(e=new pi,t=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Il.fromBufferAttribute(h,e),o?Fa.addScaledVector(Il,u):Fa.addScaledVector(Il.sub(t),u))}t.add(Fa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(r),$s.copy(e.ray).recast(e.near),!(Ua.containsPoint($s.origin)===!1&&($s.intersectSphere(Ua,Nd)===null||$s.origin.distanceToSquared(Nd)>(e.far-e.near)**2))&&(wd.copy(r).invert(),$s.copy(e.ray).applyMatrix4(wd),!(n.boundingBox!==null&&$s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const g=d[_],m=o[g.materialIndex],T=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let w=T,F=S;w<F;w+=3){const L=a.getX(w),R=a.getX(w+1),Y=a.getX(w+2);i=Ga(this,m,e,n,l,u,h,L,R,Y),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){const T=a.getX(g),S=a.getX(g+1),w=a.getX(g+2);i=Ga(this,o,e,n,l,u,h,T,S,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const g=d[_],m=o[g.materialIndex],T=Math.max(g.start,p.start),S=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let w=T,F=S;w<F;w+=3){const L=w,R=w+1,Y=w+2;i=Ga(this,m,e,n,l,u,h,L,R,Y),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){const T=g,S=g+1,w=g+2;i=Ga(this,o,e,n,l,u,h,T,S,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Xx(s,e,t,n,i,r,o,a){let c;if(e.side===zn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===xs,a),c===null)return null;Ha.copy(a),Ha.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ha);return l<t.near||l>t.far?null:{distance:l,point:Ha.clone(),object:s}}function Ga(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Lr),s.getVertexPosition(c,Ir),s.getVertexPosition(l,Pr);const u=Xx(s,e,t,n,Lr,Ir,Pr,ka);if(u){i&&(Va.fromBufferAttribute(i,a),Ba.fromBufferAttribute(i,c),za.fromBufferAttribute(i,l),u.uv=Yi.getInterpolation(ka,Lr,Ir,Pr,Va,Ba,za,new Ve)),r&&(Va.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,c),za.fromBufferAttribute(r,l),u.uv1=Yi.getInterpolation(ka,Lr,Ir,Pr,Va,Ba,za,new Ve)),o&&(Rd.fromBufferAttribute(o,a),Cd.fromBufferAttribute(o,c),Ld.fromBufferAttribute(o,l),u.normal=Yi.getInterpolation(ka,Lr,Ir,Pr,Rd,Cd,Ld,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new U,materialIndex:0};Yi.getNormal(Lr,Ir,Pr,h.normal),u.face=h}return u}class ua extends pi{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ri(l,3)),this.setAttribute("normal",new Ri(u,3)),this.setAttribute("uv",new Ri(h,2));function _(x,g,m,T,S,w,F,L,R,Y,A){const M=w/R,q=F/Y,ne=w/2,B=F/2,le=L/2,ue=R+1,_e=Y+1;let Se=0,ee=0;const Te=new U;for(let xe=0;xe<_e;xe++){const Fe=xe*q-B;for(let Ze=0;Ze<ue;Ze++){const lt=Ze*M-ne;Te[x]=lt*T,Te[g]=Fe*S,Te[m]=le,l.push(Te.x,Te.y,Te.z),Te[x]=0,Te[g]=0,Te[m]=L>0?1:-1,u.push(Te.x,Te.y,Te.z),h.push(Ze/R),h.push(1-xe/Y),Se+=1}}for(let xe=0;xe<Y;xe++)for(let Fe=0;Fe<R;Fe++){const Ze=d+Fe+ue*xe,lt=d+Fe+ue*(xe+1),te=d+(Fe+1)+ue*(xe+1),Me=d+(Fe+1)+ue*xe;c.push(Ze,lt,Me),c.push(lt,te,Me),ee+=6}a.addGroup(p,ee,A),p+=ee,d+=Se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Fn(s){const e={};for(let t=0;t<s.length;t++){const n=ho(s[t]);for(const i in n)e[i]=n[i]}return e}function qx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Yx={clone:ho,merge:Fn};var $x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vs extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$x,this.fragmentShader=jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class kp extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new U,Id=new Ve,Pd=new Ve;class Vn extends kp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,Id,Pd),t.subVectors(Pd,Id)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=-90,Or=1;class Kx extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vn(Dr,Or,e,t);i.layers=this.layers,this.add(i);const r=new Vn(Dr,Or,e,t);r.layers=this.layers,this.add(r);const o=new Vn(Dr,Or,e,t);o.layers=this.layers,this.add(o);const a=new Vn(Dr,Or,e,t);a.layers=this.layers,this.add(a);const c=new Vn(Dr,Or,e,t);c.layers=this.layers,this.add(c);const l=new Vn(Dr,Or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Hp extends mn{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:so,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zx extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ua(5,5,5),r=new vs({name:"CubemapFromEquirect",uniforms:ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Fs});r.uniforms.tEquirect.value=t;const o=new Bn(i,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Tn),new Kx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Pl=new U,Jx=new U,Qx=new ct;class hs{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pl.subVectors(n,t).cross(Jx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qx.getNormalMatrix(e),i=this.coplanarPoint(Pl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new es,Wa=new U;class ih{constructor(e=new hs,t=new hs,n=new hs,i=new hs,r=new hs,o=new hs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],p=i[8],_=i[9],x=i[10],g=i[11],m=i[12],T=i[13],S=i[14],w=i[15];if(n[0].setComponents(c-r,d-l,g-p,w-m).normalize(),n[1].setComponents(c+r,d+l,g+p,w+m).normalize(),n[2].setComponents(c+o,d+u,g+_,w+T).normalize(),n[3].setComponents(c-o,d-u,g-_,w-T).normalize(),n[4].setComponents(c-a,d-h,g-x,w-S).normalize(),t===bi)n[5].setComponents(c+a,d+h,g+x,w+S).normalize();else if(t===lo)n[5].setComponents(a,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){return js.center.set(0,0,0),js.radius=.7071067811865476,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wa.x=i.normal.x>0?e.max.x:e.min.x,Wa.y=i.normal.y>0?e.max.y:e.min.y,Wa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ev(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(s.bindBuffer(l,a),h.count===-1&&d.length===0&&s.bufferSubData(l,0,u),d.length!==0){for(let p=0,_=d.length;p<_;p++){const x=d[p];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class ha extends pi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,p=[],_=[],x=[],g=[];for(let m=0;m<u;m++){const T=m*d-o;for(let S=0;S<l;S++){const w=S*h-r;_.push(w,-T,0),x.push(0,0,1),g.push(S/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<a;T++){const S=T+l*m,w=T+l*(m+1),F=T+1+l*(m+1),L=T+1+l*m;p.push(S,w,L),p.push(w,F,L)}this.setIndex(p),this.setAttribute("position",new Ri(_,3)),this.setAttribute("normal",new Ri(x,3)),this.setAttribute("uv",new Ri(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.widthSegments,e.heightSegments)}}var tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ov=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,av=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ev=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Av=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Pv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ey=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ny=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,py=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ay=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,by=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,By=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:tv,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:sv,alphatest_fragment:rv,alphatest_pars_fragment:ov,aomap_fragment:av,aomap_pars_fragment:cv,batching_pars_vertex:lv,batching_vertex:uv,begin_vertex:hv,beginnormal_vertex:dv,bsdfs:fv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:xv,clipping_planes_vertex:vv,color_fragment:yv,color_pars_fragment:Sv,color_pars_vertex:Tv,color_vertex:Mv,common:Ev,cube_uv_reflection_fragment:Av,defaultnormal_vertex:bv,displacementmap_pars_vertex:wv,displacementmap_vertex:Nv,emissivemap_fragment:Rv,emissivemap_pars_fragment:Cv,colorspace_fragment:Lv,colorspace_pars_fragment:Iv,envmap_fragment:Pv,envmap_common_pars_fragment:Dv,envmap_pars_fragment:Ov,envmap_pars_vertex:Uv,envmap_physical_pars_fragment:Yv,envmap_vertex:Fv,fog_vertex:Vv,fog_pars_vertex:Bv,fog_fragment:zv,fog_pars_fragment:kv,gradientmap_pars_fragment:Hv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Wv,lights_lambert_pars_fragment:Xv,lights_pars_begin:qv,lights_toon_fragment:$v,lights_toon_pars_fragment:jv,lights_phong_fragment:Kv,lights_phong_pars_fragment:Zv,lights_physical_fragment:Jv,lights_physical_pars_fragment:Qv,lights_fragment_begin:ey,lights_fragment_maps:ty,lights_fragment_end:ny,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:sy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:oy,map_fragment:ay,map_pars_fragment:cy,map_particle_fragment:ly,map_particle_pars_fragment:uy,metalnessmap_fragment:hy,metalnessmap_pars_fragment:dy,morphinstance_vertex:fy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:xy,normal_fragment_maps:vy,normal_pars_fragment:yy,normal_pars_vertex:Sy,normal_vertex:Ty,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:Ey,clearcoat_normal_fragment_maps:Ay,clearcoat_pars_fragment:by,iridescence_pars_fragment:wy,opaque_fragment:Ny,packing:Ry,premultiplied_alpha_fragment:Cy,project_vertex:Ly,dithering_fragment:Iy,dithering_pars_fragment:Py,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Oy,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:Fy,shadowmap_vertex:Vy,shadowmask_pars_fragment:By,skinbase_vertex:zy,skinning_pars_vertex:ky,skinning_vertex:Hy,skinnormal_vertex:Gy,specularmap_fragment:Wy,specularmap_pars_fragment:Xy,tonemapping_fragment:qy,tonemapping_pars_fragment:Yy,transmission_fragment:$y,transmission_pars_fragment:jy,uv_pars_fragment:Ky,uv_pars_vertex:Zy,uv_vertex:Jy,worldpos_vertex:Qy,background_vert:eS,background_frag:tS,backgroundCube_vert:nS,backgroundCube_frag:iS,cube_vert:sS,cube_frag:rS,depth_vert:oS,depth_frag:aS,distanceRGBA_vert:cS,distanceRGBA_frag:lS,equirect_vert:uS,equirect_frag:hS,linedashed_vert:dS,linedashed_frag:fS,meshbasic_vert:pS,meshbasic_frag:mS,meshlambert_vert:gS,meshlambert_frag:_S,meshmatcap_vert:xS,meshmatcap_frag:vS,meshnormal_vert:yS,meshnormal_frag:SS,meshphong_vert:TS,meshphong_frag:MS,meshphysical_vert:ES,meshphysical_frag:AS,meshtoon_vert:bS,meshtoon_frag:wS,points_vert:NS,points_frag:RS,shadow_vert:CS,shadow_frag:LS,sprite_vert:IS,sprite_frag:PS},Oe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ki={basic:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new We(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Fn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Fn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new We(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Fn([Oe.points,Oe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Fn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Fn([Oe.common,Oe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Fn([Oe.sprite,Oe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Fn([Oe.common,Oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Fn([Oe.lights,Oe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ki.physical={uniforms:Fn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Xa={r:0,b:0,g:0},Ks=new fi,DS=new ot;function OS(s,e,t,n,i,r,o){const a=new We(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1;const w=_(T);w===null?m(a,c):w&&w.isColor&&(m(w,1),S=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function g(T,S){const w=_(S);w&&(w.isCubeTexture||w.mapping===Fc)?(u===void 0&&(u=new Bn(new ua(1,1,1),new vs({name:"BackgroundCubeMaterial",uniforms:ho(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ks.copy(S.backgroundRotation),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(DS.makeRotationFromEuler(Ks)),u.material.toneMapped=Lt.getTransfer(w.colorSpace)!==qt,(h!==w||d!==w.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,p=s.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Bn(new ha(2,2),new vs({name:"BackgroundMaterial",uniforms:ho(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Lt.getTransfer(w.colorSpace)!==qt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,p=s.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,S){T.getRGB(Xa,zp(s)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),c=S,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,m(a,c)},render:x,addToRenderList:g}}function US(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,q,ne,B,le){let ue=!1;const _e=h(B,ne,q);r!==_e&&(r=_e,l(r.object)),ue=p(M,B,ne,le),ue&&_(M,B,ne,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(ue||o)&&(o=!1,w(M,q,ne,B),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,q,ne){const B=ne.wireframe===!0;let le=n[M.id];le===void 0&&(le={},n[M.id]=le);let ue=le[q.id];ue===void 0&&(ue={},le[q.id]=ue);let _e=ue[B];return _e===void 0&&(_e=d(c()),ue[B]=_e),_e}function d(M){const q=[],ne=[],B=[];for(let le=0;le<t;le++)q[le]=0,ne[le]=0,B[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ne,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,q,ne,B){const le=r.attributes,ue=q.attributes;let _e=0;const Se=ne.getAttributes();for(const ee in Se)if(Se[ee].location>=0){const xe=le[ee];let Fe=ue[ee];if(Fe===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(Fe=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(Fe=M.instanceColor)),xe===void 0||xe.attribute!==Fe||Fe&&xe.data!==Fe.data)return!0;_e++}return r.attributesNum!==_e||r.index!==B}function _(M,q,ne,B){const le={},ue=q.attributes;let _e=0;const Se=ne.getAttributes();for(const ee in Se)if(Se[ee].location>=0){let xe=ue[ee];xe===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor));const Fe={};Fe.attribute=xe,xe&&xe.data&&(Fe.data=xe.data),le[ee]=Fe,_e++}r.attributes=le,r.attributesNum=_e,r.index=B}function x(){const M=r.newAttributes;for(let q=0,ne=M.length;q<ne;q++)M[q]=0}function g(M){m(M,0)}function m(M,q){const ne=r.newAttributes,B=r.enabledAttributes,le=r.attributeDivisors;ne[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),le[M]!==q&&(s.vertexAttribDivisor(M,q),le[M]=q)}function T(){const M=r.newAttributes,q=r.enabledAttributes;for(let ne=0,B=q.length;ne<B;ne++)q[ne]!==M[ne]&&(s.disableVertexAttribArray(ne),q[ne]=0)}function S(M,q,ne,B,le,ue,_e){_e===!0?s.vertexAttribIPointer(M,q,ne,le,ue):s.vertexAttribPointer(M,q,ne,B,le,ue)}function w(M,q,ne,B){x();const le=B.attributes,ue=ne.getAttributes(),_e=q.defaultAttributeValues;for(const Se in ue){const ee=ue[Se];if(ee.location>=0){let Te=le[Se];if(Te===void 0&&(Se==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),Se==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),Te!==void 0){const xe=Te.normalized,Fe=Te.itemSize,Ze=e.get(Te);if(Ze===void 0)continue;const lt=Ze.buffer,te=Ze.type,Me=Ze.bytesPerElement,Ae=te===s.INT||te===s.UNSIGNED_INT||Te.gpuType===Mp;if(Te.isInterleavedBufferAttribute){const be=Te.data,Je=be.stride,nt=Te.offset;if(be.isInstancedInterleavedBuffer){for(let $=0;$<ee.locationSize;$++)m(ee.location+$,be.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let $=0;$<ee.locationSize;$++)g(ee.location+$);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let $=0;$<ee.locationSize;$++)S(ee.location+$,Fe/ee.locationSize,te,xe,Je*Me,(nt+Fe/ee.locationSize*$)*Me,Ae)}else{if(Te.isInstancedBufferAttribute){for(let be=0;be<ee.locationSize;be++)m(ee.location+be,Te.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let be=0;be<ee.locationSize;be++)g(ee.location+be);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let be=0;be<ee.locationSize;be++)S(ee.location+be,Fe/ee.locationSize,te,xe,Fe*Me,Fe/ee.locationSize*be*Me,Ae)}}else if(_e!==void 0){const xe=_e[Se];if(xe!==void 0)switch(xe.length){case 2:s.vertexAttrib2fv(ee.location,xe);break;case 3:s.vertexAttrib3fv(ee.location,xe);break;case 4:s.vertexAttrib4fv(ee.location,xe);break;default:s.vertexAttrib1fv(ee.location,xe)}}}}T()}function F(){Y();for(const M in n){const q=n[M];for(const ne in q){const B=q[ne];for(const le in B)u(B[le].object),delete B[le];delete q[ne]}delete n[M]}}function L(M){if(n[M.id]===void 0)return;const q=n[M.id];for(const ne in q){const B=q[ne];for(const le in B)u(B[le].object),delete B[le];delete q[ne]}delete n[M.id]}function R(M){for(const q in n){const ne=n[q];if(ne[M.id]===void 0)continue;const B=ne[M.id];for(const le in B)u(B[le].object),delete B[le];delete ne[M.id]}}function Y(){A(),o=!0,r!==i&&(r=i,l(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:Y,resetDefaultState:A,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function FS(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h;p++)this.render(l[p],u[p]);else{d.multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x];for(let x=0;x<d.length;x++)t.update(_,n,d[x])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function VS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==hi&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const R=L===ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Vs&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==qn&&!R)}function c(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:w,maxSamples:F}}function BS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new hs,a=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!g)r?u(null):l();else{const T=r?0:n,S=T*4;let w=m.clippingState||null;c.value=w,w=u(_,d,S,p);for(let F=0;F!==S;++F)w[F]=t[F];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=c.value,_!==!0||g===null){const m=p+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,w=p;S!==x;++S,w+=4)o.copy(h[S]).applyMatrix4(T,a),o.normal.toArray(g,w),g[w+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function zS(s){let e=new WeakMap;function t(o,a){return a===fc?o.mapping=so:a===Su&&(o.mapping=ro),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fc||a===Su)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Zx(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class zc extends kp{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zr=4,Dd=[.125,.215,.35,.446,.526,.582],sr=20,Dl=new zc,Od=new We;let Ol=null,Ul=0,Fl=0,Vl=!1;const tr=(1+Math.sqrt(5))/2,Ur=1/tr,Ud=[new U(-tr,Ur,0),new U(tr,Ur,0),new U(-Ur,0,tr),new U(Ur,0,tr),new U(0,tr,-Ur),new U(0,tr,Ur),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Fd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ol=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol,Ul,Fl),this._renderer.xr.enabled=Vl,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ms,format:hi,colorSpace:Qt,depthBuffer:!1},i=Vd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kS(r)),this._blurMaterial=HS(r,e,t)}return i}_compileMaterial(e){const t=new Bn(this._lodPlanes[0],e);this._renderer.compile(t,Dl)}_sceneToCubeUV(e,t,n,i){const a=new Vn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Od),u.toneMapping=di,u.autoClear=!1;const p=new Ps({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),_=new Bn(new ua,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Od),x=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):T===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const S=this._cubeSize;qa(i,T*S,m>2?S:0,S,S),u.setRenderTarget(i),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===so||e.mapping===ro;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Bn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;qa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ud[(i-r-1)%Ud.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bn(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*sr-1),x=r/_,g=isFinite(r)?1+Math.floor(u*x):sr;g>sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${sr}`);const m=[];let T=0;for(let R=0;R<sr;++R){const Y=R/x,A=Math.exp(-Y*Y/2);m.push(A),R===0?T+=A:R<g&&(T+=2*A)}for(let R=0;R<m.length;R++)m[R]=m[R]/T;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const w=this._sizeLods[i],F=3*w*(i>S-zr?i-S+zr:0),L=4*(this._cubeSize-w);qa(t,F,L,3*w,2*w),c.setRenderTarget(t),c.render(h,Dl)}}function kS(s){const e=[],t=[],n=[];let i=s;const r=s-zr+1+Dd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-zr?c=Dd[o-s+zr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,g=2,m=1,T=new Float32Array(x*_*p),S=new Float32Array(g*_*p),w=new Float32Array(m*_*p);for(let L=0;L<p;L++){const R=L%3*2/3-1,Y=L>2?0:-1,A=[R,Y,0,R+2/3,Y,0,R+2/3,Y+1,0,R,Y,0,R+2/3,Y+1,0,R,Y+1,0];T.set(A,x*_*L),S.set(d,g*_*L);const M=[L,L,L,L,L,L];w.set(M,m*_*L)}const F=new pi;F.setAttribute("position",new bn(T,x)),F.setAttribute("uv",new bn(S,g)),F.setAttribute("faceIndex",new bn(w,m)),e.push(F),i>zr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vd(s,e,t){const n=new lr(s,e,t);return n.texture.mapping=Fc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function HS(s,e,t){const n=new Float32Array(sr),i=new U(0,1,0);return new vs({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function Bd(){return new vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function zd(){return new vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GS(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===fc||c===Su,u=c===so||c===ro;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Fd(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Fd(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function WS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function XS(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let g=0,m=x.length;g<m;g++)e.update(x[g],s.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let S=0,w=T.length;S<w;S+=3){const F=T[S+0],L=T[S+1],R=T[S+2];d.push(F,L,L,R,R,F)}}else if(_!==void 0){const T=_.array;x=_.version;for(let S=0,w=T.length/3-1;S<w;S+=3){const F=S+0,L=S+1,R=S+2;d.push(F,L,L,R,R,F)}}else return;const g=new(Pp(d)?Bp:Vp)(d,1);g.version=x;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function qS(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,d*o,_),t.update(p,n,_))}function u(d,p,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<_;g++)this.render(d[g]/o,p[g]);else{x.multiDrawElementsWEBGL(n,p,0,r,d,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];t.update(g,n,1)}}function h(d,p,_,x){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/o,p[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,_);let m=0;for(let T=0;T<_;T++)m+=p[T];for(let T=0;T<x.length;T++)t.update(m,n,x[T])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function YS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $S(s,e,t){const n=new WeakMap,i=new vt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){Y.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),g===!0&&(w=3);let F=a.attributes.position.count*w,L=1;F>e.maxTextureSize&&(L=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const R=new Float32Array(F*L*4*h),Y=new nh(R,F,L,h);Y.type=qn,Y.needsUpdate=!0;const A=w*4;for(let q=0;q<h;q++){const ne=m[q],B=T[q],le=S[q],ue=F*L*4*q;for(let _e=0;_e<ne.count;_e++){const Se=_e*A;_===!0&&(i.fromBufferAttribute(ne,_e),R[ue+Se+0]=i.x,R[ue+Se+1]=i.y,R[ue+Se+2]=i.z,R[ue+Se+3]=0),x===!0&&(i.fromBufferAttribute(B,_e),R[ue+Se+4]=i.x,R[ue+Se+5]=i.y,R[ue+Se+6]=i.z,R[ue+Se+7]=0),g===!0&&(i.fromBufferAttribute(le,_e),R[ue+Se+8]=i.x,R[ue+Se+9]=i.y,R[ue+Se+10]=i.z,R[ue+Se+11]=le.itemSize===4?i.w:1)}}d={count:h,texture:Y,size:new Ve(F,L)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<l.length;g++)_+=l[g];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function jS(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class da extends mn{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:jr,u!==jr&&u!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===jr&&(n=ao),n===void 0&&u===Zo&&(n=ca),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wp=new mn,Xp=new da(1,1);Xp.compareFunction=Ip;const qp=new nh,Yp=new Ix,$p=new Hp,kd=[],Hd=[],Gd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function xo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=kd[i];if(r===void 0&&(r=new Float32Array(i),kd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function gn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function kc(s,e){let t=Hd[e];t===void 0&&(t=new Int32Array(e),Hd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function KS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ZS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function JS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function QS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function eT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Xd.set(n),s.uniformMatrix2fv(this.addr,!1,Xd),_n(t,n)}}function tT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Wd.set(n),s.uniformMatrix3fv(this.addr,!1,Wd),_n(t,n)}}function nT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Gd.set(n),s.uniformMatrix4fv(this.addr,!1,Gd),_n(t,n)}}function iT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function rT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function oT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function aT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function lT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function uT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function hT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Xp:Wp;t.setTexture2D(e||r,i)}function dT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yp,i)}function fT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$p,i)}function pT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qp,i)}function mT(s){switch(s){case 5126:return KS;case 35664:return ZS;case 35665:return JS;case 35666:return QS;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return sT;case 35668:case 35672:return rT;case 35669:case 35673:return oT;case 5125:return aT;case 36294:return cT;case 36295:return lT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return pT}}function gT(s,e){s.uniform1fv(this.addr,e)}function _T(s,e){const t=xo(e,this.size,2);s.uniform2fv(this.addr,t)}function xT(s,e){const t=xo(e,this.size,3);s.uniform3fv(this.addr,t)}function vT(s,e){const t=xo(e,this.size,4);s.uniform4fv(this.addr,t)}function yT(s,e){const t=xo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ST(s,e){const t=xo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function TT(s,e){const t=xo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function MT(s,e){s.uniform1iv(this.addr,e)}function ET(s,e){s.uniform2iv(this.addr,e)}function AT(s,e){s.uniform3iv(this.addr,e)}function bT(s,e){s.uniform4iv(this.addr,e)}function wT(s,e){s.uniform1uiv(this.addr,e)}function NT(s,e){s.uniform2uiv(this.addr,e)}function RT(s,e){s.uniform3uiv(this.addr,e)}function CT(s,e){s.uniform4uiv(this.addr,e)}function LT(s,e,t){const n=this.cache,i=e.length,r=kc(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Wp,r[o])}function IT(s,e,t){const n=this.cache,i=e.length,r=kc(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Yp,r[o])}function PT(s,e,t){const n=this.cache,i=e.length,r=kc(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$p,r[o])}function DT(s,e,t){const n=this.cache,i=e.length,r=kc(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||qp,r[o])}function OT(s){switch(s){case 5126:return gT;case 35664:return _T;case 35665:return xT;case 35666:return vT;case 35674:return yT;case 35675:return ST;case 35676:return TT;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return AT;case 35669:case 35673:return bT;case 5125:return wT;case 36294:return NT;case 36295:return RT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return DT}}class UT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mT(t.type)}}class FT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OT(t.type)}}class VT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function qd(s,e){s.seq.push(e),s.map[e.id]=e}function BT(s,e,t){const n=s.name,i=n.length;for(Bl.lastIndex=0;;){const r=Bl.exec(n),o=Bl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){qd(t,l===void 0?new UT(a,s,e):new FT(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new VT(a),qd(t,h)),t=h}}}class cc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);BT(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Yd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const zT=37297;let kT=0;function HT(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function GT(s){const e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(s);let n;switch(e===t?n="":e===xc&&t===_c?n="LinearDisplayP3ToLinearSRGB":e===_c&&t===xc&&(n="LinearSRGBToLinearDisplayP3"),s){case Qt:case Vc:return[n,"LinearTransferOETF"];case yn:case eh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function $d(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+HT(s.getShaderSource(e),o)}else return i}function WT(s,e){const t=GT(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function XT(s,e){let t;switch(e){case mp:t="Linear";break;case gp:t="Reinhard";break;case _p:t="OptimizedCineon";break;case xp:t="ACESFilmic";break;case vp:t="AgX";break;case k0:t="Neutral";break;case z0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function YT(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $T(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Wo(s){return s!==""}function jd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(s){return s.replace(jT,ZT)}const KT=new Map;function ZT(s,e){let t=dt[e];if(t===void 0){const n=KT.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eu(t)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zd(s){return s.replace(JT,QT)}function QT(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===pp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===us&&(e="SHADOWMAP_TYPE_VSM"),e}function tM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case so:case ro:e="ENVMAP_TYPE_CUBE";break;case Fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function iM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Uc:e="ENVMAP_BLENDING_MULTIPLY";break;case V0:e="ENVMAP_BLENDING_MIX";break;case B0:e="ENVMAP_BLENDING_ADD";break}return e}function sM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=eM(t),l=tM(t),u=nM(t),h=iM(t),d=sM(t),p=qT(t),_=YT(r),x=i.createProgram();let g,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wo).join(`
`),m.length>0&&(m+=`
`)):(g=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),m=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?dt.tonemapping_pars_fragment:"",t.toneMapping!==di?XT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,WT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Eu(o),o=jd(o,t),o=Kd(o,t),a=Eu(a),a=jd(a,t),a=Kd(a,t),o=Zd(o),a=Zd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=T+g+o,w=T+m+a,F=Yd(i,i.VERTEX_SHADER,S),L=Yd(i,i.FRAGMENT_SHADER,w);i.attachShader(x,F),i.attachShader(x,L),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(q){if(s.debug.checkShaderErrors){const ne=i.getProgramInfoLog(x).trim(),B=i.getShaderInfoLog(F).trim(),le=i.getShaderInfoLog(L).trim();let ue=!0,_e=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,F,L);else{const Se=$d(i,F,"vertex"),ee=$d(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+ne+`
`+Se+`
`+ee)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(B===""||le==="")&&(_e=!1);_e&&(q.diagnostics={runnable:ue,programLog:ne,vertexShader:{log:B,prefix:g},fragmentShader:{log:le,prefix:m}})}i.deleteShader(F),i.deleteShader(L),Y=new cc(i,x),A=$T(i,x)}let Y;this.getUniforms=function(){return Y===void 0&&R(this),Y};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,zT)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=L,this}let oM=0;class aM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cM(e),t.set(e,n)),n}}class cM{constructor(e){this.id=oM++,this.code=e,this.usedTimes=0}}function lM(s,e,t,n,i,r,o){const a=new Up,c=new aM,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return l.add(A),A===0?"uv":`uv${A}`}function g(A,M,q,ne,B){const le=ne.fog,ue=B.geometry,_e=A.isMeshStandardMaterial?ne.environment:null,Se=(A.isMeshStandardMaterial?t:e).get(A.envMap||_e),ee=Se&&Se.mapping===Fc?Se.image.height:null,Te=_[A.type];A.precision!==null&&(p=i.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const xe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Fe=xe!==void 0?xe.length:0;let Ze=0;ue.morphAttributes.position!==void 0&&(Ze=1),ue.morphAttributes.normal!==void 0&&(Ze=2),ue.morphAttributes.color!==void 0&&(Ze=3);let lt,te,Me,Ae;if(Te){const Mt=ki[Te];lt=Mt.vertexShader,te=Mt.fragmentShader}else lt=A.vertexShader,te=A.fragmentShader,c.update(A),Me=c.getVertexShaderID(A),Ae=c.getFragmentShaderID(A);const be=s.getRenderTarget(),Je=B.isInstancedMesh===!0,nt=B.isBatchedMesh===!0,$=!!A.map,St=!!A.matcap,qe=!!Se,Tt=!!A.aoMap,je=!!A.lightMap,ut=!!A.bumpMap,it=!!A.normalMap,ft=!!A.displacementMap,Ht=!!A.emissiveMap,I=!!A.metalnessMap,E=!!A.roughnessMap,Q=A.anisotropy>0,fe=A.clearcoat>0,ge=A.dispersion>0,ve=A.iridescence>0,He=A.sheen>0,De=A.transmission>0,Pe=Q&&!!A.anisotropyMap,et=fe&&!!A.clearcoatMap,we=fe&&!!A.clearcoatNormalMap,Ge=fe&&!!A.clearcoatRoughnessMap,pt=ve&&!!A.iridescenceMap,Ke=ve&&!!A.iridescenceThicknessMap,Le=He&&!!A.sheenColorMap,Ye=He&&!!A.sheenRoughnessMap,at=!!A.specularMap,gt=!!A.specularColorMap,$e=!!A.specularIntensityMap,v=De&&!!A.transmissionMap,G=De&&!!A.thicknessMap,D=!!A.gradientMap,me=!!A.alphaMap,Ne=A.alphaTest>0,st=!!A.alphaHash,ht=!!A.extensions;let Xt=di;A.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Xt=s.toneMapping);const on={shaderID:Te,shaderType:A.type,shaderName:A.name,vertexShader:lt,fragmentShader:te,defines:A.defines,customVertexShaderID:Me,customFragmentShaderID:Ae,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:nt,instancing:Je,instancingColor:Je&&B.instanceColor!==null,instancingMorph:Je&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Qt,alphaToCoverage:!!A.alphaToCoverage,map:$,matcap:St,envMap:qe,envMapMode:qe&&Se.mapping,envMapCubeUVHeight:ee,aoMap:Tt,lightMap:je,bumpMap:ut,normalMap:it,displacementMap:d&&ft,emissiveMap:Ht,normalMapObjectSpace:it&&A.normalMapType===Cp,normalMapTangentSpace:it&&A.normalMapType===cr,metalnessMap:I,roughnessMap:E,anisotropy:Q,anisotropyMap:Pe,clearcoat:fe,clearcoatMap:et,clearcoatNormalMap:we,clearcoatRoughnessMap:Ge,dispersion:ge,iridescence:ve,iridescenceMap:pt,iridescenceThicknessMap:Ke,sheen:He,sheenColorMap:Le,sheenRoughnessMap:Ye,specularMap:at,specularColorMap:gt,specularIntensityMap:$e,transmission:De,transmissionMap:v,thicknessMap:G,gradientMap:D,opaque:A.transparent===!1&&A.blending===$r&&A.alphaToCoverage===!1,alphaMap:me,alphaTest:Ne,alphaHash:st,combine:A.combine,mapUv:$&&x(A.map.channel),aoMapUv:Tt&&x(A.aoMap.channel),lightMapUv:je&&x(A.lightMap.channel),bumpMapUv:ut&&x(A.bumpMap.channel),normalMapUv:it&&x(A.normalMap.channel),displacementMapUv:ft&&x(A.displacementMap.channel),emissiveMapUv:Ht&&x(A.emissiveMap.channel),metalnessMapUv:I&&x(A.metalnessMap.channel),roughnessMapUv:E&&x(A.roughnessMap.channel),anisotropyMapUv:Pe&&x(A.anisotropyMap.channel),clearcoatMapUv:et&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:we&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&x(A.sheenRoughnessMap.channel),specularMapUv:at&&x(A.specularMap.channel),specularColorMapUv:gt&&x(A.specularColorMap.channel),specularIntensityMapUv:$e&&x(A.specularIntensityMap.channel),transmissionMapUv:v&&x(A.transmissionMap.channel),thicknessMapUv:G&&x(A.thicknessMap.channel),alphaMapUv:me&&x(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(it||Q),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ue.attributes.uv&&($||me),fog:!!le,useFog:A.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:$&&A.map.isVideoTexture===!0&&Lt.getTransfer(A.map.colorSpace)===qt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===qi,flipSided:A.side===zn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ht&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ht&&A.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return on.vertexUv1s=l.has(1),on.vertexUv2s=l.has(2),on.vertexUv3s=l.has(3),l.clear(),on}function m(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const q in A.defines)M.push(q),M.push(A.defines[q]);return A.isRawShaderMaterial===!1&&(T(M,A),S(M,A),M.push(s.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function T(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function S(A,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),A.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),A.push(a.mask)}function w(A){const M=_[A.type];let q;if(M){const ne=ki[M];q=Yx.clone(ne.uniforms)}else q=A.uniforms;return q}function F(A,M){let q;for(let ne=0,B=u.length;ne<B;ne++){const le=u[ne];if(le.cacheKey===M){q=le,++q.usedTimes;break}}return q===void 0&&(q=new rM(s,M,A,r),u.push(q)),q}function L(A){if(--A.usedTimes===0){const M=u.indexOf(A);u[M]=u[u.length-1],u.pop(),A.destroy()}}function R(A){c.remove(A)}function Y(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:F,releaseProgram:L,releaseShaderCache:R,programs:u,dispose:Y}}function uM(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function hM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ef(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,p,_,x,g){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:g},s[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,d,p,_,x,g){const m=o(h,d,p,_,x,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function c(h,d,p,_,x,g){const m=o(h,d,p,_,x,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||hM),n.length>1&&n.sort(d||Qd),i.length>1&&i.sort(d||Qd)}function u(){for(let h=e,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function dM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ef,s.set(n,[o])):i>=r.length?(o=new ef,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function fM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new We};break;case"SpotLight":t={position:new U,direction:new U,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function pM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let mM=0;function gM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _M(s){const e=new fM,t=pM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const i=new U,r=new ot,o=new ot;function a(l,u){let h=0,d=0,p=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let _=0,x=0,g=0,m=0,T=0,S=0,w=0,F=0,L=0,R=0,Y=0;l.sort(gM);const A=u===!0?Math.PI:1;for(let q=0,ne=l.length;q<ne;q++){const B=l[q],le=B.color,ue=B.intensity,_e=B.distance,Se=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=le.r*ue*A,d+=le.g*ue*A,p+=le.b*ue*A;else if(B.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(B.sh.coefficients[ee],ue);Y++}else if(B.isDirectionalLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity*A),B.castShadow){const Te=B.shadow,xe=t.get(B);xe.shadowBias=Te.bias,xe.shadowNormalBias=Te.normalBias,xe.shadowRadius=Te.radius,xe.shadowMapSize=Te.mapSize,n.directionalShadow[_]=xe,n.directionalShadowMap[_]=Se,n.directionalShadowMatrix[_]=B.shadow.matrix,S++}n.directional[_]=ee,_++}else if(B.isSpotLight){const ee=e.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy(le).multiplyScalar(ue*A),ee.distance=_e,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,n.spot[g]=ee;const Te=B.shadow;if(B.map&&(n.spotLightMap[L]=B.map,L++,Te.updateMatrices(B),B.castShadow&&R++),n.spotLightMatrix[g]=Te.matrix,B.castShadow){const xe=t.get(B);xe.shadowBias=Te.bias,xe.shadowNormalBias=Te.normalBias,xe.shadowRadius=Te.radius,xe.shadowMapSize=Te.mapSize,n.spotShadow[g]=xe,n.spotShadowMap[g]=Se,F++}g++}else if(B.isRectAreaLight){const ee=e.get(B);ee.color.copy(le).multiplyScalar(ue),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),n.rectArea[m]=ee,m++}else if(B.isPointLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity*A),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const Te=B.shadow,xe=t.get(B);xe.shadowBias=Te.bias,xe.shadowNormalBias=Te.normalBias,xe.shadowRadius=Te.radius,xe.shadowMapSize=Te.mapSize,xe.shadowCameraNear=Te.camera.near,xe.shadowCameraFar=Te.camera.far,n.pointShadow[x]=xe,n.pointShadowMap[x]=Se,n.pointShadowMatrix[x]=B.shadow.matrix,w++}n.point[x]=ee,x++}else if(B.isHemisphereLight){const ee=e.get(B);ee.skyColor.copy(B.color).multiplyScalar(ue*A),ee.groundColor.copy(B.groundColor).multiplyScalar(ue*A),n.hemi[T]=ee,T++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const M=n.hash;(M.directionalLength!==_||M.pointLength!==x||M.spotLength!==g||M.rectAreaLength!==m||M.hemiLength!==T||M.numDirectionalShadows!==S||M.numPointShadows!==w||M.numSpotShadows!==F||M.numSpotMaps!==L||M.numLightProbes!==Y)&&(n.directional.length=_,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=T,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=F,n.spotShadowMap.length=F,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=F+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=Y,M.directionalLength=_,M.pointLength=x,M.spotLength=g,M.rectAreaLength=m,M.hemiLength=T,M.numDirectionalShadows=S,M.numPointShadows=w,M.numSpotShadows=F,M.numSpotMaps=L,M.numLightProbes=Y,n.version=mM++)}function c(l,u){let h=0,d=0,p=0,_=0,x=0;const g=u.matrixWorldInverse;for(let m=0,T=l.length;m<T;m++){const S=l[m];if(S.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),h++}else if(S.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function tf(s){const e=new _M(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function xM(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new tf(s),e.set(i,[a])):r>=o.length?(a=new tf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class vM extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yM extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MM(s,e,t){let n=new ih;const i=new Ve,r=new Ve,o=new vt,a=new vM({depthPacking:sx}),c=new yM,l={},u=t.maxTextureSize,h={[xs]:zn,[zn]:xs,[qi]:qi},d=new vs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:SM,fragmentShader:TM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new pi;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Bn(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fp;let m=this.type;this.render=function(L,R,Y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const A=s.getRenderTarget(),M=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Fs),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const B=m!==us&&this.type===us,le=m===us&&this.type!==us;for(let ue=0,_e=L.length;ue<_e;ue++){const Se=L[ue],ee=Se.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",Se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);const Te=ee.getFrameExtents();if(i.multiply(Te),r.copy(ee.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Te.x),i.x=r.x*Te.x,ee.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Te.y),i.y=r.y*Te.y,ee.mapSize.y=r.y)),ee.map===null||B===!0||le===!0){const Fe=this.type!==us?{minFilter:pn,magFilter:pn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new lr(i.x,i.y,Fe),ee.map.texture.name=Se.name+".shadowMap",ee.camera.updateProjectionMatrix()}s.setRenderTarget(ee.map),s.clear();const xe=ee.getViewportCount();for(let Fe=0;Fe<xe;Fe++){const Ze=ee.getViewport(Fe);o.set(r.x*Ze.x,r.y*Ze.y,r.x*Ze.z,r.y*Ze.w),ne.viewport(o),ee.updateMatrices(Se,Fe),n=ee.getFrustum(),w(R,Y,ee.camera,Se,this.type)}ee.isPointLightShadow!==!0&&this.type===us&&T(ee,Y),ee.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(A,M,q)};function T(L,R){const Y=e.update(x);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new lr(i.x,i.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(R,null,Y,d,x,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(R,null,Y,p,x,null)}function S(L,R,Y,A){let M=null;const q=Y.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(q!==void 0)M=q;else if(M=Y.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const ne=M.uuid,B=R.uuid;let le=l[ne];le===void 0&&(le={},l[ne]=le);let ue=le[B];ue===void 0&&(ue=M.clone(),le[B]=ue,R.addEventListener("dispose",F)),M=ue}if(M.visible=R.visible,M.wireframe=R.wireframe,A===us?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,Y.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ne=s.properties.get(M);ne.light=Y}return M}function w(L,R,Y,A,M){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===us)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,L.matrixWorld);const B=e.update(L),le=L.material;if(Array.isArray(le)){const ue=B.groups;for(let _e=0,Se=ue.length;_e<Se;_e++){const ee=ue[_e],Te=le[ee.materialIndex];if(Te&&Te.visible){const xe=S(L,Te,A,M);L.onBeforeShadow(s,L,R,Y,B,xe,ee),s.renderBufferDirect(Y,null,B,xe,L,ee),L.onAfterShadow(s,L,R,Y,B,xe,ee)}}}else if(le.visible){const ue=S(L,le,A,M);L.onBeforeShadow(s,L,R,Y,B,ue,null),s.renderBufferDirect(Y,null,B,ue,L,null),L.onAfterShadow(s,L,R,Y,B,ue,null)}}const ne=L.children;for(let B=0,le=ne.length;B<le;B++)w(ne[B],R,Y,A,M)}function F(L){L.target.removeEventListener("dispose",F);for(const Y in l){const A=l[Y],M=L.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}function EM(s){function e(){let v=!1;const G=new vt;let D=null;const me=new vt(0,0,0,0);return{setMask:function(Ne){D!==Ne&&!v&&(s.colorMask(Ne,Ne,Ne,Ne),D=Ne)},setLocked:function(Ne){v=Ne},setClear:function(Ne,st,ht,Xt,on){on===!0&&(Ne*=Xt,st*=Xt,ht*=Xt),G.set(Ne,st,ht,Xt),me.equals(G)===!1&&(s.clearColor(Ne,st,ht,Xt),me.copy(G))},reset:function(){v=!1,D=null,me.set(-1,0,0,0)}}}function t(){let v=!1,G=null,D=null,me=null;return{setTest:function(Ne){Ne?Ae(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(Ne){G!==Ne&&!v&&(s.depthMask(Ne),G=Ne)},setFunc:function(Ne){if(D!==Ne){switch(Ne){case L0:s.depthFunc(s.NEVER);break;case I0:s.depthFunc(s.ALWAYS);break;case P0:s.depthFunc(s.LESS);break;case dc:s.depthFunc(s.LEQUAL);break;case D0:s.depthFunc(s.EQUAL);break;case O0:s.depthFunc(s.GEQUAL);break;case U0:s.depthFunc(s.GREATER);break;case F0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}D=Ne}},setLocked:function(Ne){v=Ne},setClear:function(Ne){me!==Ne&&(s.clearDepth(Ne),me=Ne)},reset:function(){v=!1,G=null,D=null,me=null}}}function n(){let v=!1,G=null,D=null,me=null,Ne=null,st=null,ht=null,Xt=null,on=null;return{setTest:function(Mt){v||(Mt?Ae(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(Mt){G!==Mt&&!v&&(s.stencilMask(Mt),G=Mt)},setFunc:function(Mt,en,Ut){(D!==Mt||me!==en||Ne!==Ut)&&(s.stencilFunc(Mt,en,Ut),D=Mt,me=en,Ne=Ut)},setOp:function(Mt,en,Ut){(st!==Mt||ht!==en||Xt!==Ut)&&(s.stencilOp(Mt,en,Ut),st=Mt,ht=en,Xt=Ut)},setLocked:function(Mt){v=Mt},setClear:function(Mt){on!==Mt&&(s.clearStencil(Mt),on=Mt)},reset:function(){v=!1,G=null,D=null,me=null,Ne=null,st=null,ht=null,Xt=null,on=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],p=null,_=!1,x=null,g=null,m=null,T=null,S=null,w=null,F=null,L=new We(0,0,0),R=0,Y=!1,A=null,M=null,q=null,ne=null,B=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,_e=0;const Se=s.getParameter(s.VERSION);Se.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(Se)[1]),ue=_e>=1):Se.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),ue=_e>=2);let ee=null,Te={};const xe=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),Ze=new vt().fromArray(xe),lt=new vt().fromArray(Fe);function te(v,G,D,me){const Ne=new Uint8Array(4),st=s.createTexture();s.bindTexture(v,st),s.texParameteri(v,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(v,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<D;ht++)v===s.TEXTURE_3D||v===s.TEXTURE_2D_ARRAY?s.texImage3D(G,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(G+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return st}const Me={};Me[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Ae(s.DEPTH_TEST),r.setFunc(dc),ut(!1),it(Dh),Ae(s.CULL_FACE),Tt(Fs);function Ae(v){l[v]!==!0&&(s.enable(v),l[v]=!0)}function be(v){l[v]!==!1&&(s.disable(v),l[v]=!1)}function Je(v,G){return u[v]!==G?(s.bindFramebuffer(v,G),u[v]=G,v===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=G),v===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=G),!0):!1}function nt(v,G){let D=d,me=!1;if(v){D=h.get(G),D===void 0&&(D=[],h.set(G,D));const Ne=v.textures;if(D.length!==Ne.length||D[0]!==s.COLOR_ATTACHMENT0){for(let st=0,ht=Ne.length;st<ht;st++)D[st]=s.COLOR_ATTACHMENT0+st;D.length=Ne.length,me=!0}}else D[0]!==s.BACK&&(D[0]=s.BACK,me=!0);me&&s.drawBuffers(D)}function $(v){return p!==v?(s.useProgram(v),p=v,!0):!1}const St={[ir]:s.FUNC_ADD,[p0]:s.FUNC_SUBTRACT,[m0]:s.FUNC_REVERSE_SUBTRACT};St[g0]=s.MIN,St[_0]=s.MAX;const qe={[x0]:s.ZERO,[v0]:s.ONE,[y0]:s.SRC_COLOR,[vu]:s.SRC_ALPHA,[b0]:s.SRC_ALPHA_SATURATE,[E0]:s.DST_COLOR,[T0]:s.DST_ALPHA,[S0]:s.ONE_MINUS_SRC_COLOR,[yu]:s.ONE_MINUS_SRC_ALPHA,[A0]:s.ONE_MINUS_DST_COLOR,[M0]:s.ONE_MINUS_DST_ALPHA,[w0]:s.CONSTANT_COLOR,[N0]:s.ONE_MINUS_CONSTANT_COLOR,[R0]:s.CONSTANT_ALPHA,[C0]:s.ONE_MINUS_CONSTANT_ALPHA};function Tt(v,G,D,me,Ne,st,ht,Xt,on,Mt){if(v===Fs){_===!0&&(be(s.BLEND),_=!1);return}if(_===!1&&(Ae(s.BLEND),_=!0),v!==f0){if(v!==x||Mt!==Y){if((g!==ir||S!==ir)&&(s.blendEquation(s.FUNC_ADD),g=ir,S=ir),Mt)switch(v){case $r:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oh:s.blendFunc(s.ONE,s.ONE);break;case Uh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case $r:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Uh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}m=null,T=null,w=null,F=null,L.set(0,0,0),R=0,x=v,Y=Mt}return}Ne=Ne||G,st=st||D,ht=ht||me,(G!==g||Ne!==S)&&(s.blendEquationSeparate(St[G],St[Ne]),g=G,S=Ne),(D!==m||me!==T||st!==w||ht!==F)&&(s.blendFuncSeparate(qe[D],qe[me],qe[st],qe[ht]),m=D,T=me,w=st,F=ht),(Xt.equals(L)===!1||on!==R)&&(s.blendColor(Xt.r,Xt.g,Xt.b,on),L.copy(Xt),R=on),x=v,Y=!1}function je(v,G){v.side===qi?be(s.CULL_FACE):Ae(s.CULL_FACE);let D=v.side===zn;G&&(D=!D),ut(D),v.blending===$r&&v.transparent===!1?Tt(Fs):Tt(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),i.setMask(v.colorWrite);const me=v.stencilWrite;o.setTest(me),me&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Ht(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?Ae(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(v){A!==v&&(v?s.frontFace(s.CW):s.frontFace(s.CCW),A=v)}function it(v){v!==h0?(Ae(s.CULL_FACE),v!==M&&(v===Dh?s.cullFace(s.BACK):v===d0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),M=v}function ft(v){v!==q&&(ue&&s.lineWidth(v),q=v)}function Ht(v,G,D){v?(Ae(s.POLYGON_OFFSET_FILL),(ne!==G||B!==D)&&(s.polygonOffset(G,D),ne=G,B=D)):be(s.POLYGON_OFFSET_FILL)}function I(v){v?Ae(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function E(v){v===void 0&&(v=s.TEXTURE0+le-1),ee!==v&&(s.activeTexture(v),ee=v)}function Q(v,G,D){D===void 0&&(ee===null?D=s.TEXTURE0+le-1:D=ee);let me=Te[D];me===void 0&&(me={type:void 0,texture:void 0},Te[D]=me),(me.type!==v||me.texture!==G)&&(ee!==D&&(s.activeTexture(D),ee=D),s.bindTexture(v,G||Me[v]),me.type=v,me.texture=G)}function fe(){const v=Te[ee];v!==void 0&&v.type!==void 0&&(s.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function He(){try{s.texSubImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function De(){try{s.texSubImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function et(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function we(){try{s.texStorage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ge(){try{s.texStorage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ke(){try{s.texImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Le(v){Ze.equals(v)===!1&&(s.scissor(v.x,v.y,v.z,v.w),Ze.copy(v))}function Ye(v){lt.equals(v)===!1&&(s.viewport(v.x,v.y,v.z,v.w),lt.copy(v))}function at(v,G){let D=c.get(G);D===void 0&&(D=new WeakMap,c.set(G,D));let me=D.get(v);me===void 0&&(me=s.getUniformBlockIndex(G,v.name),D.set(v,me))}function gt(v,G){const me=c.get(G).get(v);a.get(G)!==me&&(s.uniformBlockBinding(G,me,v.__bindingPointIndex),a.set(G,me))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},ee=null,Te={},u={},h=new WeakMap,d=[],p=null,_=!1,x=null,g=null,m=null,T=null,S=null,w=null,F=null,L=new We(0,0,0),R=0,Y=!1,A=null,M=null,q=null,ne=null,B=null,Ze.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Ae,disable:be,bindFramebuffer:Je,drawBuffers:nt,useProgram:$,setBlending:Tt,setMaterial:je,setFlipSided:ut,setCullFace:it,setLineWidth:ft,setPolygonOffset:Ht,setScissorTest:I,activeTexture:E,bindTexture:Q,unbindTexture:fe,compressedTexImage2D:ge,compressedTexImage3D:ve,texImage2D:pt,texImage3D:Ke,updateUBOMapping:at,uniformBlockBinding:gt,texStorage2D:we,texStorage3D:Ge,texSubImage2D:He,texSubImage3D:De,compressedTexSubImage2D:Pe,compressedTexSubImage3D:et,scissor:Le,viewport:Ye,reset:$e}}function AM(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,E){return p?new OffscreenCanvas(I,E):Qo("canvas")}function x(I,E,Q){let fe=1;const ge=Ht(I);if((ge.width>Q||ge.height>Q)&&(fe=Q/Math.max(ge.width,ge.height)),fe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ve=Math.floor(fe*ge.width),He=Math.floor(fe*ge.height);h===void 0&&(h=_(ve,He));const De=E?_(ve,He):h;return De.width=ve,De.height=He,De.getContext("2d").drawImage(I,0,0,ve,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ve+"x"+He+")."),De}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==pn&&I.minFilter!==Tn}function m(I){s.generateMipmap(I)}function T(I,E,Q,fe,ge=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ve=E;if(E===s.RED&&(Q===s.FLOAT&&(ve=s.R32F),Q===s.HALF_FLOAT&&(ve=s.R16F),Q===s.UNSIGNED_BYTE&&(ve=s.R8)),E===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ve=s.R8UI),Q===s.UNSIGNED_SHORT&&(ve=s.R16UI),Q===s.UNSIGNED_INT&&(ve=s.R32UI),Q===s.BYTE&&(ve=s.R8I),Q===s.SHORT&&(ve=s.R16I),Q===s.INT&&(ve=s.R32I)),E===s.RG&&(Q===s.FLOAT&&(ve=s.RG32F),Q===s.HALF_FLOAT&&(ve=s.RG16F),Q===s.UNSIGNED_BYTE&&(ve=s.RG8)),E===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ve=s.RG8UI),Q===s.UNSIGNED_SHORT&&(ve=s.RG16UI),Q===s.UNSIGNED_INT&&(ve=s.RG32UI),Q===s.BYTE&&(ve=s.RG8I),Q===s.SHORT&&(ve=s.RG16I),Q===s.INT&&(ve=s.RG32I)),E===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),E===s.RGBA){const He=ge?gc:Lt.getTransfer(fe);Q===s.FLOAT&&(ve=s.RGBA32F),Q===s.HALF_FLOAT&&(ve=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ve=He===qt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function S(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==pn&&I.minFilter!==Tn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){const E=I.target;E.removeEventListener("dispose",w),L(E),E.isVideoTexture&&u.delete(E)}function F(I){const E=I.target;E.removeEventListener("dispose",F),Y(E)}function L(I){const E=n.get(I);if(E.__webglInit===void 0)return;const Q=I.source,fe=d.get(Q);if(fe){const ge=fe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&R(I),Object.keys(fe).length===0&&d.delete(Q)}n.remove(I)}function R(I){const E=n.get(I);s.deleteTexture(E.__webglTexture);const Q=I.source,fe=d.get(Q);delete fe[E.__cacheKey],o.memory.textures--}function Y(I){const E=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let ge=0;ge<E.__webglFramebuffer[fe].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[fe][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[fe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=I.textures;for(let fe=0,ge=Q.length;fe<ge;fe++){const ve=n.get(Q[fe]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(Q[fe])}n.remove(I)}let A=0;function M(){A=0}function q(){const I=A;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),A+=1,I}function ne(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function B(I,E){const Q=n.get(I);if(I.isVideoTexture&&it(I),I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){const fe=I.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(Q,I,E);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+E)}function le(I,E){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){Ze(Q,I,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+E)}function ue(I,E){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){Ze(Q,I,E);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+E)}function _e(I,E){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){lt(Q,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+E)}const Se={[oo]:s.REPEAT,[$i]:s.CLAMP_TO_EDGE,[pc]:s.MIRRORED_REPEAT},ee={[pn]:s.NEAREST,[Sp]:s.NEAREST_MIPMAP_NEAREST,[Go]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[ac]:s.LINEAR_MIPMAP_NEAREST,[Ai]:s.LINEAR_MIPMAP_LINEAR},Te={[rx]:s.NEVER,[ux]:s.ALWAYS,[Lp]:s.LESS,[Ip]:s.LEQUAL,[ox]:s.EQUAL,[lx]:s.GEQUAL,[ax]:s.GREATER,[cx]:s.NOTEQUAL};function xe(I,E){if(E.type===qn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Tn||E.magFilter===ac||E.magFilter===Go||E.magFilter===Ai||E.minFilter===Tn||E.minFilter===ac||E.minFilter===Go||E.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Se[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Se[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Se[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ee[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ee[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===pn||E.minFilter!==Go&&E.minFilter!==Ai||E.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Fe(I,E){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",w));const fe=E.source;let ge=d.get(fe);ge===void 0&&(ge={},d.set(fe,ge));const ve=ne(E);if(ve!==I.__cacheKey){ge[ve]===void 0&&(ge[ve]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ge[ve].usedTimes++;const He=ge[I.__cacheKey];He!==void 0&&(ge[I.__cacheKey].usedTimes--,He.usedTimes===0&&R(E)),I.__cacheKey=ve,I.__webglTexture=ge[ve].texture}return Q}function Ze(I,E,Q){let fe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=s.TEXTURE_3D);const ge=Fe(I,E),ve=E.source;t.bindTexture(fe,I.__webglTexture,s.TEXTURE0+Q);const He=n.get(ve);if(ve.version!==He.__version||ge===!0){t.activeTexture(s.TEXTURE0+Q);const De=Lt.getPrimaries(Lt.workingColorSpace),Pe=E.colorSpace===fs?null:Lt.getPrimaries(E.colorSpace),et=E.colorSpace===fs||De===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let we=x(E.image,!1,i.maxTextureSize);we=ft(E,we);const Ge=r.convert(E.format,E.colorSpace),pt=r.convert(E.type);let Ke=T(E.internalFormat,Ge,pt,E.colorSpace,E.isVideoTexture);xe(fe,E);let Le;const Ye=E.mipmaps,at=E.isVideoTexture!==!0,gt=He.__version===void 0||ge===!0,$e=ve.dataReady,v=S(E,we);if(E.isDepthTexture)Ke=s.DEPTH_COMPONENT16,E.type===qn?Ke=s.DEPTH_COMPONENT32F:E.type===ao?Ke=s.DEPTH_COMPONENT24:E.type===ca&&(Ke=s.DEPTH24_STENCIL8),gt&&(at?t.texStorage2D(s.TEXTURE_2D,1,Ke,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,Ke,we.width,we.height,0,Ge,pt,null));else if(E.isDataTexture)if(Ye.length>0){at&&gt&&t.texStorage2D(s.TEXTURE_2D,v,Ke,Ye[0].width,Ye[0].height);for(let G=0,D=Ye.length;G<D;G++)Le=Ye[G],at?$e&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,Le.width,Le.height,Ge,pt,Le.data):t.texImage2D(s.TEXTURE_2D,G,Ke,Le.width,Le.height,0,Ge,pt,Le.data);E.generateMipmaps=!1}else at?(gt&&t.texStorage2D(s.TEXTURE_2D,v,Ke,we.width,we.height),$e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,Ge,pt,we.data)):t.texImage2D(s.TEXTURE_2D,0,Ke,we.width,we.height,0,Ge,pt,we.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,v,Ke,Ye[0].width,Ye[0].height,we.depth);for(let G=0,D=Ye.length;G<D;G++)Le=Ye[G],E.format!==hi?Ge!==null?at?$e&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,Le.width,Le.height,we.depth,Ge,Le.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Ke,Le.width,Le.height,we.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?$e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,Le.width,Le.height,we.depth,Ge,pt,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,G,Ke,Le.width,Le.height,we.depth,0,Ge,pt,Le.data)}else{at&&gt&&t.texStorage2D(s.TEXTURE_2D,v,Ke,Ye[0].width,Ye[0].height);for(let G=0,D=Ye.length;G<D;G++)Le=Ye[G],E.format!==hi?Ge!==null?at?$e&&t.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,Le.width,Le.height,Ge,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,G,Ke,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?$e&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,Le.width,Le.height,Ge,pt,Le.data):t.texImage2D(s.TEXTURE_2D,G,Ke,Le.width,Le.height,0,Ge,pt,Le.data)}else if(E.isDataArrayTexture)at?(gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,v,Ke,we.width,we.height,we.depth),$e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ge,pt,we.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ke,we.width,we.height,we.depth,0,Ge,pt,we.data);else if(E.isData3DTexture)at?(gt&&t.texStorage3D(s.TEXTURE_3D,v,Ke,we.width,we.height,we.depth),$e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ge,pt,we.data)):t.texImage3D(s.TEXTURE_3D,0,Ke,we.width,we.height,we.depth,0,Ge,pt,we.data);else if(E.isFramebufferTexture){if(gt)if(at)t.texStorage2D(s.TEXTURE_2D,v,Ke,we.width,we.height);else{let G=we.width,D=we.height;for(let me=0;me<v;me++)t.texImage2D(s.TEXTURE_2D,me,Ke,G,D,0,Ge,pt,null),G>>=1,D>>=1}}else if(Ye.length>0){if(at&&gt){const G=Ht(Ye[0]);t.texStorage2D(s.TEXTURE_2D,v,Ke,G.width,G.height)}for(let G=0,D=Ye.length;G<D;G++)Le=Ye[G],at?$e&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,Ge,pt,Le):t.texImage2D(s.TEXTURE_2D,G,Ke,Ge,pt,Le);E.generateMipmaps=!1}else if(at){if(gt){const G=Ht(we);t.texStorage2D(s.TEXTURE_2D,v,Ke,G.width,G.height)}$e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ge,pt,we)}else t.texImage2D(s.TEXTURE_2D,0,Ke,Ge,pt,we);g(E)&&m(fe),He.__version=ve.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function lt(I,E,Q){if(E.image.length!==6)return;const fe=Fe(I,E),ge=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Q);const ve=n.get(ge);if(ge.version!==ve.__version||fe===!0){t.activeTexture(s.TEXTURE0+Q);const He=Lt.getPrimaries(Lt.workingColorSpace),De=E.colorSpace===fs?null:Lt.getPrimaries(E.colorSpace),Pe=E.colorSpace===fs||He===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const et=E.isCompressedTexture||E.image[0].isCompressedTexture,we=E.image[0]&&E.image[0].isDataTexture,Ge=[];for(let D=0;D<6;D++)!et&&!we?Ge[D]=x(E.image[D],!0,i.maxCubemapSize):Ge[D]=we?E.image[D].image:E.image[D],Ge[D]=ft(E,Ge[D]);const pt=Ge[0],Ke=r.convert(E.format,E.colorSpace),Le=r.convert(E.type),Ye=T(E.internalFormat,Ke,Le,E.colorSpace),at=E.isVideoTexture!==!0,gt=ve.__version===void 0||fe===!0,$e=ge.dataReady;let v=S(E,pt);xe(s.TEXTURE_CUBE_MAP,E);let G;if(et){at&&gt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,v,Ye,pt.width,pt.height);for(let D=0;D<6;D++){G=Ge[D].mipmaps;for(let me=0;me<G.length;me++){const Ne=G[me];E.format!==hi?Ke!==null?at?$e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,me,0,0,Ne.width,Ne.height,Ke,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,me,Ye,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?$e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,me,0,0,Ne.width,Ne.height,Ke,Le,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,me,Ye,Ne.width,Ne.height,0,Ke,Le,Ne.data)}}}else{if(G=E.mipmaps,at&&gt){G.length>0&&v++;const D=Ht(Ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,v,Ye,D.width,D.height)}for(let D=0;D<6;D++)if(we){at?$e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Ge[D].width,Ge[D].height,Ke,Le,Ge[D].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Ye,Ge[D].width,Ge[D].height,0,Ke,Le,Ge[D].data);for(let me=0;me<G.length;me++){const st=G[me].image[D].image;at?$e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,me+1,0,0,st.width,st.height,Ke,Le,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,me+1,Ye,st.width,st.height,0,Ke,Le,st.data)}}else{at?$e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Ke,Le,Ge[D]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Ye,Ke,Le,Ge[D]);for(let me=0;me<G.length;me++){const Ne=G[me];at?$e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,me+1,0,0,Ke,Le,Ne.image[D]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,me+1,Ye,Ke,Le,Ne.image[D])}}}g(E)&&m(s.TEXTURE_CUBE_MAP),ve.__version=ge.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function te(I,E,Q,fe,ge,ve){const He=r.convert(Q.format,Q.colorSpace),De=r.convert(Q.type),Pe=T(Q.internalFormat,He,De,Q.colorSpace);if(!n.get(E).__hasExternalTextures){const we=Math.max(1,E.width>>ve),Ge=Math.max(1,E.height>>ve);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,ve,Pe,we,Ge,E.depth,0,He,De,null):t.texImage2D(ge,ve,Pe,we,Ge,0,He,De,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),ut(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ge,n.get(Q).__webglTexture,0,je(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,ge,n.get(Q).__webglTexture,ve),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(I,E,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer&&!E.stencilBuffer){let fe=s.DEPTH_COMPONENT24;if(Q||ut(E)){const ge=E.depthTexture;ge&&ge.isDepthTexture&&(ge.type===qn?fe=s.DEPTH_COMPONENT32F:ge.type===ao&&(fe=s.DEPTH_COMPONENT24));const ve=je(E);ut(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,fe,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,fe,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(E.depthBuffer&&E.stencilBuffer){const fe=je(E);Q&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,E.width,E.height):ut(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{const fe=E.textures;for(let ge=0;ge<fe.length;ge++){const ve=fe[ge],He=r.convert(ve.format,ve.colorSpace),De=r.convert(ve.type),Pe=T(ve.internalFormat,He,De,ve.colorSpace),et=je(E);Q&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Pe,E.width,E.height):ut(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,Pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const fe=n.get(E.depthTexture).__webglTexture,ge=je(E);if(E.depthTexture.format===jr)ut(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(E.depthTexture.format===Zo)ut(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function be(I){const E=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,I)}else if(Q){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]=s.createRenderbuffer(),Me(E.__webglDepthbuffer[fe],I,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Me(E.__webglDepthbuffer,I,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(I,E,Q){const fe=n.get(I);E!==void 0&&te(fe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&be(I)}function nt(I){const E=I.texture,Q=n.get(I),fe=n.get(E);I.addEventListener("dispose",F);const ge=I.textures,ve=I.isWebGLCubeRenderTarget===!0,He=ge.length>1;if(He||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=E.version,o.memory.textures++),ve){Q.__webglFramebuffer=[];for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[De]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)Q.__webglFramebuffer[De][Pe]=s.createFramebuffer()}else Q.__webglFramebuffer[De]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let De=0;De<E.mipmaps.length;De++)Q.__webglFramebuffer[De]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(He)for(let De=0,Pe=ge.length;De<Pe;De++){const et=n.get(ge[De]);et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&ut(I)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let De=0;De<ge.length;De++){const Pe=ge[De];Q.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[De]);const et=r.convert(Pe.format,Pe.colorSpace),we=r.convert(Pe.type),Ge=T(Pe.internalFormat,et,we,Pe.colorSpace,I.isXRRenderTarget===!0),pt=je(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Ge,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Q.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Me(Q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ve){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),xe(s.TEXTURE_CUBE_MAP,E);for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)te(Q.__webglFramebuffer[De][Pe],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,Pe);else te(Q.__webglFramebuffer[De],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);g(E)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let De=0,Pe=ge.length;De<Pe;De++){const et=ge[De],we=n.get(et);t.bindTexture(s.TEXTURE_2D,we.__webglTexture),xe(s.TEXTURE_2D,et),te(Q.__webglFramebuffer,I,et,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,0),g(et)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let De=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(De=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,fe.__webglTexture),xe(De,E),E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)te(Q.__webglFramebuffer[Pe],I,E,s.COLOR_ATTACHMENT0,De,Pe);else te(Q.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,De,0);g(E)&&m(De),t.unbindTexture()}I.depthBuffer&&be(I)}function $(I){const E=I.textures;for(let Q=0,fe=E.length;Q<fe;Q++){const ge=E[Q];if(g(ge)){const ve=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,He=n.get(ge).__webglTexture;t.bindTexture(ve,He),m(ve),t.unbindTexture()}}}const St=[],qe=[];function Tt(I){if(I.samples>0){if(ut(I)===!1){const E=I.textures,Q=I.width,fe=I.height;let ge=s.COLOR_BUFFER_BIT;const ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=n.get(I),De=E.length>1;if(De)for(let Pe=0;Pe<E.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Pe]);const et=n.get(E[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,Q,fe,0,0,Q,fe,ge,s.NEAREST),c===!0&&(St.length=0,qe.length=0,St.push(s.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(St.push(ve),qe.push(ve),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let Pe=0;Pe<E.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,He.__webglColorRenderbuffer[Pe]);const et=n.get(E[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,et,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function je(I){return Math.min(i.maxSamples,I.samples)}function ut(I){const E=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function it(I){const E=o.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function ft(I,E){const Q=I.colorSpace,fe=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Qt&&Q!==fs&&(Lt.getTransfer(Q)===qt?(fe!==hi||ge!==Vs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}function Ht(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=M,this.setTexture2D=B,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=_e,this.rebindTextures=Je,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ut}function bM(s,e){function t(n,i=fs){let r;const o=Lt.getTransfer(i);if(n===Vs)return s.UNSIGNED_BYTE;if(n===Ep)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ap)return s.UNSIGNED_SHORT_5_5_5_1;if(n===X0)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===G0)return s.BYTE;if(n===W0)return s.SHORT;if(n===Tp)return s.UNSIGNED_SHORT;if(n===Mp)return s.INT;if(n===ao)return s.UNSIGNED_INT;if(n===qn)return s.FLOAT;if(n===ms)return s.HALF_FLOAT;if(n===q0)return s.ALPHA;if(n===Y0)return s.RGB;if(n===hi)return s.RGBA;if(n===$0)return s.LUMINANCE;if(n===j0)return s.LUMINANCE_ALPHA;if(n===jr)return s.DEPTH_COMPONENT;if(n===Zo)return s.DEPTH_STENCIL;if(n===Ju)return s.RED;if(n===bp)return s.RED_INTEGER;if(n===K0)return s.RG;if(n===wp)return s.RG_INTEGER;if(n===Np)return s.RGBA_INTEGER;if(n===ul||n===hl||n===dl||n===fl)if(o===qt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bh||n===zh||n===kh||n===Hh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gh||n===Wh||n===Xh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gh||n===Wh)return o===qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qh||n===Yh||n===$h||n===jh||n===Kh||n===Zh||n===Jh||n===Qh||n===ed||n===td||n===nd||n===id||n===sd||n===rd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$h)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ed)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===td)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nd)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===id)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sd)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rd)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===od||n===ad)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return o===qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===od)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ad)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Z0||n===cd||n===ld||n===ud)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ld)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ud)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ca?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class wM extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class or extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NM={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NM)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new or;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const RM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new mn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new vs({vertexShader:RM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bn(new ha(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class IM extends Qi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,_=null;const x=new LM,g=t.getContextAttributes();let m=null,T=null;const S=[],w=[],F=new Ve;let L=null;const R=new Vn;R.layers.enable(1),R.viewport=new vt;const Y=new Vn;Y.layers.enable(2),Y.viewport=new vt;const A=[R,Y],M=new wM;M.layers.enable(1),M.layers.enable(2);let q=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Me=S[te];return Me===void 0&&(Me=new zl,S[te]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(te){let Me=S[te];return Me===void 0&&(Me=new zl,S[te]=Me),Me.getGripSpace()},this.getHand=function(te){let Me=S[te];return Me===void 0&&(Me=new zl,S[te]=Me),Me.getHandSpace()};function B(te){const Me=w.indexOf(te.inputSource);if(Me===-1)return;const Ae=S[Me];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,l||o),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function le(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",le),i.removeEventListener("inputsourceschange",ue);for(let te=0;te<S.length;te++){const Me=w[te];Me!==null&&(w[te]=null,S[te].disconnect(Me))}q=null,ne=null,x.reset(),e.setRenderTarget(m),p=null,d=null,h=null,i=null,T=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",le),i.addEventListener("inputsourceschange",ue),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(F),i.renderState.layers===void 0){const Me={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new lr(p.framebufferWidth,p.framebufferHeight,{format:hi,type:Vs,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Me=null,Ae=null,be=null;g.depth&&(be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=g.stencil?Zo:jr,Ae=g.stencil?ca:ao);const Je={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Je),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new lr(d.textureWidth,d.textureHeight,{format:hi,type:Vs,depthTexture:new da(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function ue(te){for(let Me=0;Me<te.removed.length;Me++){const Ae=te.removed[Me],be=w.indexOf(Ae);be>=0&&(w[be]=null,S[be].disconnect(Ae))}for(let Me=0;Me<te.added.length;Me++){const Ae=te.added[Me];let be=w.indexOf(Ae);if(be===-1){for(let nt=0;nt<S.length;nt++)if(nt>=w.length){w.push(Ae),be=nt;break}else if(w[nt]===null){w[nt]=Ae,be=nt;break}if(be===-1)break}const Je=S[be];Je&&Je.connect(Ae)}}const _e=new U,Se=new U;function ee(te,Me,Ae){_e.setFromMatrixPosition(Me.matrixWorld),Se.setFromMatrixPosition(Ae.matrixWorld);const be=_e.distanceTo(Se),Je=Me.projectionMatrix.elements,nt=Ae.projectionMatrix.elements,$=Je[14]/(Je[10]-1),St=Je[14]/(Je[10]+1),qe=(Je[9]+1)/Je[5],Tt=(Je[9]-1)/Je[5],je=(Je[8]-1)/Je[0],ut=(nt[8]+1)/nt[0],it=$*je,ft=$*ut,Ht=be/(-je+ut),I=Ht*-je;Me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(I),te.translateZ(Ht),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const E=$+Ht,Q=St+Ht,fe=it-I,ge=ft+(be-I),ve=qe*St/Q*E,He=Tt*St/Q*E;te.projectionMatrix.makePerspective(fe,ge,ve,He,E,Q),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function Te(te,Me){Me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;x.texture!==null&&(te.near=x.depthNear,te.far=x.depthFar),M.near=Y.near=R.near=te.near,M.far=Y.far=R.far=te.far,(q!==M.near||ne!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),q=M.near,ne=M.far,R.near=q,R.far=ne,Y.near=q,Y.far=ne,R.updateProjectionMatrix(),Y.updateProjectionMatrix(),te.updateProjectionMatrix());const Me=te.parent,Ae=M.cameras;Te(M,Me);for(let be=0;be<Ae.length;be++)Te(Ae[be],Me);Ae.length===2?ee(M,R,Y):M.projectionMatrix.copy(R.projectionMatrix),xe(te,M,Me)};function xe(te,Me,Ae){Ae===null?te.matrix.copy(Me.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(Me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Me.projectionMatrix),te.projectionMatrixInverse.copy(Me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=uo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null};let Fe=null;function Ze(te,Me){if(u=Me.getViewerPose(l||o),_=Me,u!==null){const Ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let be=!1;Ae.length!==M.cameras.length&&(M.cameras.length=0,be=!0);for(let nt=0;nt<Ae.length;nt++){const $=Ae[nt];let St=null;if(p!==null)St=p.getViewport($);else{const Tt=h.getViewSubImage(d,$);St=Tt.viewport,nt===0&&(e.setRenderTargetTextures(T,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(T))}let qe=A[nt];qe===void 0&&(qe=new Vn,qe.layers.enable(nt),qe.viewport=new vt,A[nt]=qe),qe.matrix.fromArray($.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray($.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(St.x,St.y,St.width,St.height),nt===0&&(M.matrix.copy(qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),be===!0&&M.cameras.push(qe)}const Je=i.enabledFeatures;if(Je&&Je.includes("depth-sensing")){const nt=h.getDepthInformation(Ae[0]);nt&&nt.isValid&&nt.texture&&x.init(e,nt,i.renderState)}}for(let Ae=0;Ae<S.length;Ae++){const be=w[Ae],Je=S[Ae];be!==null&&Je!==void 0&&Je.update(be,Me,l||o)}x.render(e,M),Fe&&Fe(te,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),_=null}const lt=new Gp;lt.setAnimationLoop(Ze),this.setAnimationLoop=function(te){Fe=te},this.dispose=function(){}}}const Zs=new fi,PM=new ot;function DM(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,zp(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,T,S,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,w)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,T,S):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===zn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===zn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const T=e.get(m),S=T.envMap,w=T.envMapRotation;if(S&&(g.envMap.value=S,Zs.copy(w),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),g.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(Zs)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const F=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*F,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,T,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*T,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,T){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const T=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function OM(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const w=S.program;n.uniformBlockBinding(T,w)}function l(T,S){let w=i[T.id];w===void 0&&(_(T),w=u(T),i[T.id]=w,T.addEventListener("dispose",g));const F=S.program;n.updateUBOMapping(T,F);const L=e.render.frame;r[T.id]!==L&&(d(T),r[T.id]=L)}function u(T){const S=h();T.__bindingPointIndex=S;const w=s.createBuffer(),F=T.__size,L=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,F,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=i[T.id],w=T.uniforms,F=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let L=0,R=w.length;L<R;L++){const Y=Array.isArray(w[L])?w[L]:[w[L]];for(let A=0,M=Y.length;A<M;A++){const q=Y[A];if(p(q,L,A,F)===!0){const ne=q.__offset,B=Array.isArray(q.value)?q.value:[q.value];let le=0;for(let ue=0;ue<B.length;ue++){const _e=B[ue],Se=x(_e);typeof _e=="number"||typeof _e=="boolean"?(q.__data[0]=_e,s.bufferSubData(s.UNIFORM_BUFFER,ne+le,q.__data)):_e.isMatrix3?(q.__data[0]=_e.elements[0],q.__data[1]=_e.elements[1],q.__data[2]=_e.elements[2],q.__data[3]=0,q.__data[4]=_e.elements[3],q.__data[5]=_e.elements[4],q.__data[6]=_e.elements[5],q.__data[7]=0,q.__data[8]=_e.elements[6],q.__data[9]=_e.elements[7],q.__data[10]=_e.elements[8],q.__data[11]=0):(_e.toArray(q.__data,le),le+=Se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,q.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,S,w,F){const L=T.value,R=S+"_"+w;if(F[R]===void 0)return typeof L=="number"||typeof L=="boolean"?F[R]=L:F[R]=L.clone(),!0;{const Y=F[R];if(typeof L=="number"||typeof L=="boolean"){if(Y!==L)return F[R]=L,!0}else if(Y.equals(L)===!1)return Y.copy(L),!0}return!1}function _(T){const S=T.uniforms;let w=0;const F=16;for(let R=0,Y=S.length;R<Y;R++){const A=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,q=A.length;M<q;M++){const ne=A[M],B=Array.isArray(ne.value)?ne.value:[ne.value];for(let le=0,ue=B.length;le<ue;le++){const _e=B[le],Se=x(_e),ee=w%F;ee!==0&&F-ee<Se.boundary&&(w+=F-ee),ne.__data=new Float32Array(Se.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=w,w+=Se.storage}}}const L=w%F;return L>0&&(w+=F-L),T.__size=w,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function g(T){const S=T.target;S.removeEventListener("dispose",g);const w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function m(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class UM{constructor(e={}){const{canvas:t=wx(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,g=null;const m=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;const S=this;let w=!1,F=0,L=0,R=null,Y=-1,A=null;const M=new vt,q=new vt;let ne=null;const B=new We(0);let le=0,ue=t.width,_e=t.height,Se=1,ee=null,Te=null;const xe=new vt(0,0,ue,_e),Fe=new vt(0,0,ue,_e);let Ze=!1;const lt=new ih;let te=!1,Me=!1;const Ae=new ot,be=new U,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return R===null?Se:1}let $=n;function St(N,X){return t.getContext(N,X)}try{const N={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zu}`),t.addEventListener("webglcontextlost",v,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",D,!1),$===null){const X="webgl2";if($=St(X,N),$===null)throw St(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let qe,Tt,je,ut,it,ft,Ht,I,E,Q,fe,ge,ve,He,De,Pe,et,we,Ge,pt,Ke,Le,Ye,at;function gt(){qe=new WS($),qe.init(),Le=new bM($,qe),Tt=new VS($,qe,e,Le),je=new EM($),ut=new YS($),it=new uM,ft=new AM($,qe,je,it,Tt,Le,ut),Ht=new zS(S),I=new GS(S),E=new ev($),Ye=new US($,E),Q=new XS($,E,ut,Ye),fe=new jS($,Q,E,ut),Ge=new $S($,Tt,ft),Pe=new BS(it),ge=new lM(S,Ht,I,qe,Tt,Ye,Pe),ve=new DM(S,it),He=new dM,De=new xM(qe),we=new OS(S,Ht,I,je,fe,d,c),et=new MM(S,fe,Tt),at=new OM($,ut,Tt,je),pt=new FS($,qe,ut),Ke=new qS($,qe,ut),ut.programs=ge.programs,S.capabilities=Tt,S.extensions=qe,S.properties=it,S.renderLists=He,S.shadowMap=et,S.state=je,S.info=ut}gt();const $e=new IM(S,$);this.xr=$e,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const N=qe.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=qe.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(N){N!==void 0&&(Se=N,this.setSize(ue,_e,!1))},this.getSize=function(N){return N.set(ue,_e)},this.setSize=function(N,X,Z=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=N,_e=X,t.width=Math.floor(N*Se),t.height=Math.floor(X*Se),Z===!0&&(t.style.width=N+"px",t.style.height=X+"px"),this.setViewport(0,0,N,X)},this.getDrawingBufferSize=function(N){return N.set(ue*Se,_e*Se).floor()},this.setDrawingBufferSize=function(N,X,Z){ue=N,_e=X,Se=Z,t.width=Math.floor(N*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,N,X)},this.getCurrentViewport=function(N){return N.copy(M)},this.getViewport=function(N){return N.copy(xe)},this.setViewport=function(N,X,Z,j){N.isVector4?xe.set(N.x,N.y,N.z,N.w):xe.set(N,X,Z,j),je.viewport(M.copy(xe).multiplyScalar(Se).round())},this.getScissor=function(N){return N.copy(Fe)},this.setScissor=function(N,X,Z,j){N.isVector4?Fe.set(N.x,N.y,N.z,N.w):Fe.set(N,X,Z,j),je.scissor(q.copy(Fe).multiplyScalar(Se).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(N){je.setScissorTest(Ze=N)},this.setOpaqueSort=function(N){ee=N},this.setTransparentSort=function(N){Te=N},this.getClearColor=function(N){return N.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(N=!0,X=!0,Z=!0){let j=0;if(N){let f=!1;if(R!==null){const y=R.texture.format;f=y===Np||y===wp||y===bp}if(f){const y=R.texture.type,b=y===Vs||y===ao||y===Tp||y===ca||y===Ep||y===Ap,P=we.getClearColor(),W=we.getClearAlpha(),V=P.r,J=P.g,oe=P.b;b?(p[0]=V,p[1]=J,p[2]=oe,p[3]=W,$.clearBufferuiv($.COLOR,0,p)):(_[0]=V,_[1]=J,_[2]=oe,_[3]=W,$.clearBufferiv($.COLOR,0,_))}else j|=$.COLOR_BUFFER_BIT}X&&(j|=$.DEPTH_BUFFER_BIT),Z&&(j|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",v,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",D,!1),He.dispose(),De.dispose(),it.dispose(),Ht.dispose(),I.dispose(),fe.dispose(),Ye.dispose(),at.dispose(),ge.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",Mt),$e.removeEventListener("sessionend",en),Ut.stop()};function v(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const N=ut.autoReset,X=et.enabled,Z=et.autoUpdate,j=et.needsUpdate,f=et.type;gt(),ut.autoReset=N,et.enabled=X,et.autoUpdate=Z,et.needsUpdate=j,et.type=f}function D(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function me(N){const X=N.target;X.removeEventListener("dispose",me),Ne(X)}function Ne(N){st(N),it.remove(N)}function st(N){const X=it.get(N).programs;X!==void 0&&(X.forEach(function(Z){ge.releaseProgram(Z)}),N.isShaderMaterial&&ge.releaseShaderCache(N))}this.renderBufferDirect=function(N,X,Z,j,f,y){X===null&&(X=Je);const b=f.isMesh&&f.matrixWorld.determinant()<0,P=cl(N,X,Z,j,f);je.setMaterial(j,b);let W=Z.index,V=1;if(j.wireframe===!0){if(W=Q.getWireframeAttribute(Z),W===void 0)return;V=2}const J=Z.drawRange,oe=Z.attributes.position;let re=J.start*V,ce=(J.start+J.count)*V;y!==null&&(re=Math.max(re,y.start*V),ce=Math.min(ce,(y.start+y.count)*V)),W!==null?(re=Math.max(re,0),ce=Math.min(ce,W.count)):oe!=null&&(re=Math.max(re,0),ce=Math.min(ce,oe.count));const ae=ce-re;if(ae<0||ae===1/0)return;Ye.setup(f,j,P,Z,W);let Re,ye=pt;if(W!==null&&(Re=E.get(W),ye=Ke,ye.setIndex(Re)),f.isMesh)j.wireframe===!0?(je.setLineWidth(j.wireframeLinewidth*nt()),ye.setMode($.LINES)):ye.setMode($.TRIANGLES);else if(f.isLine){let pe=j.linewidth;pe===void 0&&(pe=1),je.setLineWidth(pe*nt()),f.isLineSegments?ye.setMode($.LINES):f.isLineLoop?ye.setMode($.LINE_LOOP):ye.setMode($.LINE_STRIP)}else f.isPoints?ye.setMode($.POINTS):f.isSprite&&ye.setMode($.TRIANGLES);if(f.isBatchedMesh)f._multiDrawInstances!==null?ye.renderMultiDrawInstances(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount,f._multiDrawInstances):ye.renderMultiDraw(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount);else if(f.isInstancedMesh)ye.renderInstances(re,ae,f.count);else if(Z.isInstancedBufferGeometry){const pe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ze=Math.min(Z.instanceCount,pe);ye.renderInstances(re,ae,ze)}else ye.render(re,ae)};function ht(N,X,Z){N.transparent===!0&&N.side===qi&&N.forceSinglePass===!1?(N.side=zn,N.needsUpdate=!0,Xs(N,X,Z),N.side=xs,N.needsUpdate=!0,Xs(N,X,Z),N.side=qi):Xs(N,X,Z)}this.compile=function(N,X,Z=null){Z===null&&(Z=N),g=De.get(Z),g.init(X),T.push(g),Z.traverseVisible(function(f){f.isLight&&f.layers.test(X.layers)&&(g.pushLight(f),f.castShadow&&g.pushShadow(f))}),N!==Z&&N.traverseVisible(function(f){f.isLight&&f.layers.test(X.layers)&&(g.pushLight(f),f.castShadow&&g.pushShadow(f))}),g.setupLights(S._useLegacyLights);const j=new Set;return N.traverse(function(f){const y=f.material;if(y)if(Array.isArray(y))for(let b=0;b<y.length;b++){const P=y[b];ht(P,Z,f),j.add(P)}else ht(y,Z,f),j.add(y)}),T.pop(),g=null,j},this.compileAsync=function(N,X,Z=null){const j=this.compile(N,X,Z);return new Promise(f=>{function y(){if(j.forEach(function(b){it.get(b).currentProgram.isReady()&&j.delete(b)}),j.size===0){f(N);return}setTimeout(y,10)}qe.get("KHR_parallel_shader_compile")!==null?y():setTimeout(y,10)})};let Xt=null;function on(N){Xt&&Xt(N)}function Mt(){Ut.stop()}function en(){Ut.start()}const Ut=new Gp;Ut.setAnimationLoop(on),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(N){Xt=N,$e.setAnimationLoop(N),N===null?Ut.stop():Ut.start()},$e.addEventListener("sessionstart",Mt),$e.addEventListener("sessionend",en),this.render=function(N,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(X),X=$e.getCamera()),N.isScene===!0&&N.onBeforeRender(S,N,X,R),g=De.get(N,T.length),g.init(X),T.push(g),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),lt.setFromProjectionMatrix(Ae),Me=this.localClippingEnabled,te=Pe.init(this.clippingPlanes,Me),x=He.get(N,m.length),x.init(),m.push(x),Fi(N,X,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(ee,Te);const Z=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1;Z&&we.addToRenderList(x,N),this.info.render.frame++,te===!0&&Pe.beginShadows();const j=g.state.shadowsArray;et.render(j,N,X),te===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const f=x.opaque,y=x.transmissive;if(g.setupLights(S._useLegacyLights),X.isArrayCamera){const b=X.cameras;if(y.length>0)for(let P=0,W=b.length;P<W;P++){const V=b[P];Vi(f,y,N,V)}Z&&we.render(N);for(let P=0,W=b.length;P<W;P++){const V=b[P];Gn(x,N,V,V.viewport)}}else y.length>0&&Vi(f,y,N,X),Z&&we.render(N),Gn(x,N,X);R!==null&&(ft.updateMultisampleRenderTarget(R),ft.updateRenderTargetMipmap(R)),N.isScene===!0&&N.onAfterRender(S,N,X),Ye.resetDefaultState(),Y=-1,A=null,T.pop(),T.length>0?(g=T[T.length-1],te===!0&&Pe.setGlobalState(S.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Fi(N,X,Z,j){if(N.visible===!1)return;if(N.layers.test(X.layers)){if(N.isGroup)Z=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(X);else if(N.isLight)g.pushLight(N),N.castShadow&&g.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||lt.intersectsSprite(N)){j&&be.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ae);const b=fe.update(N),P=N.material;P.visible&&x.push(N,b,P,Z,be.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||lt.intersectsObject(N))){const b=fe.update(N),P=N.material;if(j&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),be.copy(N.boundingSphere.center)):(b.boundingSphere===null&&b.computeBoundingSphere(),be.copy(b.boundingSphere.center)),be.applyMatrix4(N.matrixWorld).applyMatrix4(Ae)),Array.isArray(P)){const W=b.groups;for(let V=0,J=W.length;V<J;V++){const oe=W[V],re=P[oe.materialIndex];re&&re.visible&&x.push(N,b,re,Z,be.z,oe)}}else P.visible&&x.push(N,b,P,Z,be.z,null)}}const y=N.children;for(let b=0,P=y.length;b<P;b++)Fi(y[b],X,Z,j)}function Gn(N,X,Z,j){const f=N.opaque,y=N.transmissive,b=N.transparent;g.setupLightsView(Z),te===!0&&Pe.setGlobalState(S.clippingPlanes,Z),j&&je.viewport(M.copy(j)),f.length>0&&_i(f,X,Z),y.length>0&&_i(y,X,Z),b.length>0&&_i(b,X,Z),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Vi(N,X,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[j.id]===void 0&&(g.state.transmissionRenderTarget[j.id]=new lr(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?ms:Vs,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const y=g.state.transmissionRenderTarget[j.id],b=j.viewport||M;y.setSize(b.z,b.w);const P=S.getRenderTarget();S.setRenderTarget(y),S.getClearColor(B),le=S.getClearAlpha(),le<1&&S.setClearColor(16777215,.5),S.clear();const W=S.toneMapping;S.toneMapping=di;const V=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),g.setupLightsView(j),te===!0&&Pe.setGlobalState(S.clippingPlanes,j),_i(N,Z,j),ft.updateMultisampleRenderTarget(y),ft.updateRenderTargetMipmap(y),qe.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let oe=0,re=X.length;oe<re;oe++){const ce=X[oe],ae=ce.object,Re=ce.geometry,ye=ce.material,pe=ce.group;if(ye.side===qi&&ae.layers.test(j.layers)){const ze=ye.side;ye.side=zn,ye.needsUpdate=!0,Ws(ae,Z,j,Re,ye,pe),ye.side=ze,ye.needsUpdate=!0,J=!0}}J===!0&&(ft.updateMultisampleRenderTarget(y),ft.updateRenderTargetMipmap(y))}S.setRenderTarget(P),S.setClearColor(B,le),V!==void 0&&(j.viewport=V),S.toneMapping=W}function _i(N,X,Z){const j=X.isScene===!0?X.overrideMaterial:null;for(let f=0,y=N.length;f<y;f++){const b=N[f],P=b.object,W=b.geometry,V=j===null?b.material:j,J=b.group;P.layers.test(Z.layers)&&Ws(P,X,Z,W,V,J)}}function Ws(N,X,Z,j,f,y){N.onBeforeRender(S,X,Z,j,f,y),N.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),f.onBeforeRender(S,X,Z,j,N,y),f.transparent===!0&&f.side===qi&&f.forceSinglePass===!1?(f.side=zn,f.needsUpdate=!0,S.renderBufferDirect(Z,X,j,f,N,y),f.side=xs,f.needsUpdate=!0,S.renderBufferDirect(Z,X,j,f,N,y),f.side=qi):S.renderBufferDirect(Z,X,j,f,N,y),N.onAfterRender(S,X,Z,j,f,y)}function Xs(N,X,Z){X.isScene!==!0&&(X=Je);const j=it.get(N),f=g.state.lights,y=g.state.shadowsArray,b=f.state.version,P=ge.getParameters(N,f.state,y,X,Z),W=ge.getProgramCacheKey(P);let V=j.programs;j.environment=N.isMeshStandardMaterial?X.environment:null,j.fog=X.fog,j.envMap=(N.isMeshStandardMaterial?I:Ht).get(N.envMap||j.environment),j.envMapRotation=j.environment!==null&&N.envMap===null?X.environmentRotation:N.envMapRotation,V===void 0&&(N.addEventListener("dispose",me),V=new Map,j.programs=V);let J=V.get(W);if(J!==void 0){if(j.currentProgram===J&&j.lightsStateVersion===b)return Ma(N,P),J}else P.uniforms=ge.getUniforms(N),N.onBuild(Z,P,S),N.onBeforeCompile(P,S),J=ge.acquireProgram(P,W),V.set(W,J),j.uniforms=P.uniforms;const oe=j.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(oe.clippingPlanes=Pe.uniform),Ma(N,P),j.needsLights=Ea(N),j.lightsStateVersion=b,j.needsLights&&(oe.ambientLightColor.value=f.state.ambient,oe.lightProbe.value=f.state.probe,oe.directionalLights.value=f.state.directional,oe.directionalLightShadows.value=f.state.directionalShadow,oe.spotLights.value=f.state.spot,oe.spotLightShadows.value=f.state.spotShadow,oe.rectAreaLights.value=f.state.rectArea,oe.ltc_1.value=f.state.rectAreaLTC1,oe.ltc_2.value=f.state.rectAreaLTC2,oe.pointLights.value=f.state.point,oe.pointLightShadows.value=f.state.pointShadow,oe.hemisphereLights.value=f.state.hemi,oe.directionalShadowMap.value=f.state.directionalShadowMap,oe.directionalShadowMatrix.value=f.state.directionalShadowMatrix,oe.spotShadowMap.value=f.state.spotShadowMap,oe.spotLightMatrix.value=f.state.spotLightMatrix,oe.spotLightMap.value=f.state.spotLightMap,oe.pointShadowMap.value=f.state.pointShadowMap,oe.pointShadowMatrix.value=f.state.pointShadowMatrix),j.currentProgram=J,j.uniformsList=null,J}function Ta(N){if(N.uniformsList===null){const X=N.currentProgram.getUniforms();N.uniformsList=cc.seqWithValue(X.seq,N.uniforms)}return N.uniformsList}function Ma(N,X){const Z=it.get(N);Z.outputColorSpace=X.outputColorSpace,Z.batching=X.batching,Z.instancing=X.instancing,Z.instancingColor=X.instancingColor,Z.instancingMorph=X.instancingMorph,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function cl(N,X,Z,j,f){X.isScene!==!0&&(X=Je),ft.resetTextureUnits();const y=X.fog,b=j.isMeshStandardMaterial?X.environment:null,P=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Qt,W=(j.isMeshStandardMaterial?I:Ht).get(j.envMap||b),V=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,J=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),oe=!!Z.morphAttributes.position,re=!!Z.morphAttributes.normal,ce=!!Z.morphAttributes.color;let ae=di;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ae=S.toneMapping);const Re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ye=Re!==void 0?Re.length:0,pe=it.get(j),ze=g.state.lights;if(te===!0&&(Me===!0||N!==A)){const bt=N===A&&j.id===Y;Pe.setState(j,N,bt)}let Ee=!1;j.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==ze.state.version||pe.outputColorSpace!==P||f.isBatchedMesh&&pe.batching===!1||!f.isBatchedMesh&&pe.batching===!0||f.isInstancedMesh&&pe.instancing===!1||!f.isInstancedMesh&&pe.instancing===!0||f.isSkinnedMesh&&pe.skinning===!1||!f.isSkinnedMesh&&pe.skinning===!0||f.isInstancedMesh&&pe.instancingColor===!0&&f.instanceColor===null||f.isInstancedMesh&&pe.instancingColor===!1&&f.instanceColor!==null||f.isInstancedMesh&&pe.instancingMorph===!0&&f.morphTexture===null||f.isInstancedMesh&&pe.instancingMorph===!1&&f.morphTexture!==null||pe.envMap!==W||j.fog===!0&&pe.fog!==y||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Pe.numPlanes||pe.numIntersection!==Pe.numIntersection)||pe.vertexAlphas!==V||pe.vertexTangents!==J||pe.morphTargets!==oe||pe.morphNormals!==re||pe.morphColors!==ce||pe.toneMapping!==ae||pe.morphTargetsCount!==ye)&&(Ee=!0):(Ee=!0,pe.__version=j.version);let Ue=pe.currentProgram;Ee===!0&&(Ue=Xs(j,X,f));let tt=!1,Et=!1,Ft=!1;const Rt=Ue.getUniforms(),At=pe.uniforms;if(je.useProgram(Ue.program)&&(tt=!0,Et=!0,Ft=!0),j.id!==Y&&(Y=j.id,Et=!0),tt||A!==N){Rt.setValue($,"projectionMatrix",N.projectionMatrix),Rt.setValue($,"viewMatrix",N.matrixWorldInverse);const bt=Rt.map.cameraPosition;bt!==void 0&&bt.setValue($,be.setFromMatrixPosition(N.matrixWorld)),Tt.logarithmicDepthBuffer&&Rt.setValue($,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Rt.setValue($,"isOrthographic",N.isOrthographicCamera===!0),A!==N&&(A=N,Et=!0,Ft=!0)}if(f.isSkinnedMesh){Rt.setOptional($,f,"bindMatrix"),Rt.setOptional($,f,"bindMatrixInverse");const bt=f.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),Rt.setValue($,"boneTexture",bt.boneTexture,ft))}f.isBatchedMesh&&(Rt.setOptional($,f,"batchingTexture"),Rt.setValue($,"batchingTexture",f._matricesTexture,ft));const _t=Z.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&Ge.update(f,Z,Ue),(Et||pe.receiveShadow!==f.receiveShadow)&&(pe.receiveShadow=f.receiveShadow,Rt.setValue($,"receiveShadow",f.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(At.envMap.value=W,At.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&X.environment!==null&&(At.envMapIntensity.value=X.environmentIntensity),Et&&(Rt.setValue($,"toneMappingExposure",S.toneMappingExposure),pe.needsLights&&ll(At,Ft),y&&j.fog===!0&&ve.refreshFogUniforms(At,y),ve.refreshMaterialUniforms(At,j,Se,_e,g.state.transmissionRenderTarget[N.id]),cc.upload($,Ta(pe),At,ft)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(cc.upload($,Ta(pe),At,ft),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Rt.setValue($,"center",f.center),Rt.setValue($,"modelViewMatrix",f.modelViewMatrix),Rt.setValue($,"normalMatrix",f.normalMatrix),Rt.setValue($,"modelMatrix",f.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const bt=j.uniformsGroups;for(let Cn=0,an=bt.length;Cn<an;Cn++){const wt=bt[Cn];at.update(wt,Ue),at.bind(wt,Ue)}}return Ue}function ll(N,X){N.ambientLightColor.needsUpdate=X,N.lightProbe.needsUpdate=X,N.directionalLights.needsUpdate=X,N.directionalLightShadows.needsUpdate=X,N.pointLights.needsUpdate=X,N.pointLightShadows.needsUpdate=X,N.spotLights.needsUpdate=X,N.spotLightShadows.needsUpdate=X,N.rectAreaLights.needsUpdate=X,N.hemisphereLights.needsUpdate=X}function Ea(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(N,X,Z){it.get(N.texture).__webglTexture=X,it.get(N.depthTexture).__webglTexture=Z;const j=it.get(N);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,X){const Z=it.get(N);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(N,X=0,Z=0){R=N,F=X,L=Z;let j=!0,f=null,y=!1,b=!1;if(N){const W=it.get(N);W.__useDefaultFramebuffer!==void 0?(je.bindFramebuffer($.FRAMEBUFFER,null),j=!1):W.__webglFramebuffer===void 0?ft.setupRenderTarget(N):W.__hasExternalTextures&&ft.rebindTextures(N,it.get(N.texture).__webglTexture,it.get(N.depthTexture).__webglTexture);const V=N.texture;(V.isData3DTexture||V.isDataArrayTexture||V.isCompressedArrayTexture)&&(b=!0);const J=it.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(J[X])?f=J[X][Z]:f=J[X],y=!0):N.samples>0&&ft.useMultisampledRTT(N)===!1?f=it.get(N).__webglMultisampledFramebuffer:Array.isArray(J)?f=J[Z]:f=J,M.copy(N.viewport),q.copy(N.scissor),ne=N.scissorTest}else M.copy(xe).multiplyScalar(Se).floor(),q.copy(Fe).multiplyScalar(Se).floor(),ne=Ze;if(je.bindFramebuffer($.FRAMEBUFFER,f)&&j&&je.drawBuffers(N,f),je.viewport(M),je.scissor(q),je.setScissorTest(ne),y){const W=it.get(N.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+X,W.__webglTexture,Z)}else if(b){const W=it.get(N.texture),V=X||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,W.__webglTexture,Z||0,V)}Y=-1},this.readRenderTargetPixels=function(N,X,Z,j,f,y,b){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let P=it.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&b!==void 0&&(P=P[b]),P){je.bindFramebuffer($.FRAMEBUFFER,P);try{const W=N.texture,V=W.format,J=W.type;if(!Tt.textureFormatReadable(V)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=N.width-j&&Z>=0&&Z<=N.height-f&&$.readPixels(X,Z,j,f,Le.convert(V),Le.convert(J),y)}finally{const W=R!==null?it.get(R).__webglFramebuffer:null;je.bindFramebuffer($.FRAMEBUFFER,W)}}},this.copyFramebufferToTexture=function(N,X,Z=0){const j=Math.pow(2,-Z),f=Math.floor(X.image.width*j),y=Math.floor(X.image.height*j);ft.setTexture2D(X,0),$.copyTexSubImage2D($.TEXTURE_2D,Z,0,0,N.x,N.y,f,y),je.unbindTexture()},this.copyTextureToTexture=function(N,X,Z,j=0){const f=X.image.width,y=X.image.height,b=Le.convert(Z.format),P=Le.convert(Z.type);ft.setTexture2D(Z,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Z.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,Z.unpackAlignment),X.isDataTexture?$.texSubImage2D($.TEXTURE_2D,j,N.x,N.y,f,y,b,P,X.image.data):X.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,j,N.x,N.y,X.mipmaps[0].width,X.mipmaps[0].height,b,X.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,j,N.x,N.y,b,P,X.image),j===0&&Z.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),je.unbindTexture()},this.copyTextureToTexture3D=function(N,X,Z,j,f=0){const y=N.max.x-N.min.x,b=N.max.y-N.min.y,P=N.max.z-N.min.z,W=Le.convert(j.format),V=Le.convert(j.type);let J;if(j.isData3DTexture)ft.setTexture3D(j,0),J=$.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)ft.setTexture2DArray(j,0),J=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,j.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,j.unpackAlignment);const oe=$.getParameter($.UNPACK_ROW_LENGTH),re=$.getParameter($.UNPACK_IMAGE_HEIGHT),ce=$.getParameter($.UNPACK_SKIP_PIXELS),ae=$.getParameter($.UNPACK_SKIP_ROWS),Re=$.getParameter($.UNPACK_SKIP_IMAGES),ye=Z.isCompressedTexture?Z.mipmaps[f]:Z.image;$.pixelStorei($.UNPACK_ROW_LENGTH,ye.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,ye.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,N.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,N.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,N.min.z),Z.isDataTexture||Z.isData3DTexture?$.texSubImage3D(J,f,X.x,X.y,X.z,y,b,P,W,V,ye.data):j.isCompressedArrayTexture?$.compressedTexSubImage3D(J,f,X.x,X.y,X.z,y,b,P,W,ye.data):$.texSubImage3D(J,f,X.x,X.y,X.z,y,b,P,W,V,ye),$.pixelStorei($.UNPACK_ROW_LENGTH,oe),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,re),$.pixelStorei($.UNPACK_SKIP_PIXELS,ce),$.pixelStorei($.UNPACK_SKIP_ROWS,ae),$.pixelStorei($.UNPACK_SKIP_IMAGES,Re),f===0&&j.generateMipmaps&&$.generateMipmap(J),je.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?ft.setTextureCube(N,0):N.isData3DTexture?ft.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ft.setTexture2DArray(N,0):ft.setTexture2D(N,0),je.unbindTexture()},this.resetState=function(){F=0,L=0,R=null,je.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eh?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===Vc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class FM extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Dp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new U;class Hc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class VM extends Dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nf=new U,sf=new vt,rf=new vt,BM=new U,of=new ot,Ya=new U,kl=new es,af=new ot,Hl=new la;class zM extends Bn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vh,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ss),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ya),this.boundingBox.expandByPoint(Ya)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new es),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ya),this.boundingSphere.expandByPoint(Ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kl.copy(this.boundingSphere),kl.applyMatrix4(i),e.ray.intersectsSphere(kl)!==!1&&(af.copy(i).invert(),Hl.copy(e.ray).applyMatrix4(af),!(this.boundingBox!==null&&Hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===H0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sf.fromBufferAttribute(i.attributes.skinIndex,e),rf.fromBufferAttribute(i.attributes.skinWeight,e),nf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=rf.getComponent(r);if(o!==0){const a=sf.getComponent(r);of.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(BM.copy(nf).applyMatrix4(of),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class jp extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class oh extends mn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=pn,u=pn,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cf=new ot,kM=new ot;class ah{constructor(e=[],t=[]){this.uuid=Ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:kM;cf.multiplyMatrices(a,t[r]),cf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ah(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new oh(t,e,e,hi,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new jp),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class yc extends bn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fr=new ot,lf=new ot,$a=[],uf=new Ss,HM=new ot,Do=new Bn,Oo=new es;class GM extends Bn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,HM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ss),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),uf.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(uf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Oo.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(Oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Do.geometry=this.geometry,Do.material=this.material,Do.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(n),e.ray.intersectsSphere(Oo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fr),lf.multiplyMatrices(n,Fr),Do.matrixWorld=lf,Do.raycast(e,$a);for(let o=0,a=$a.length;o<a;o++){const c=$a[o];c.instanceId=r,c.object=this,t.push(c)}$a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new oh(new Float32Array(i*this.count),i,this.count,Ju,qn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Gc extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new U,Tc=new U,hf=new ot,Uo=new la,ja=new es,Gl=new U,df=new U;class ch extends jt{constructor(e=new pi,t=new Gc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Sc.fromBufferAttribute(t,i-1),Tc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Sc.distanceTo(Tc);e.setAttribute("lineDistance",new Ri(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;hf.copy(i).invert(),Uo.copy(e.ray).applyMatrix4(hf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,g=_-1;x<g;x+=l){const m=u.getX(x),T=u.getX(x+1),S=Ka(this,e,Uo,c,m,T);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(_-1),g=u.getX(p),m=Ka(this,e,Uo,c,x,g);m&&t.push(m)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=p,g=_-1;x<g;x+=l){const m=Ka(this,e,Uo,c,x,x+1);m&&t.push(m)}if(this.isLineLoop){const x=Ka(this,e,Uo,c,_-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ka(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Sc.fromBufferAttribute(o,i),Tc.fromBufferAttribute(o,r),t.distanceSqToSegment(Sc,Tc,Gl,df)>n)return;Gl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Gl);if(!(c<e.near||c>e.far))return{distance:c,point:df.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const ff=new U,pf=new U;class WM extends ch{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ff.fromBufferAttribute(t,i),pf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ff.distanceTo(pf);e.setAttribute("lineDistance",new Ri(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class XM extends ch{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wc extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mf=new ot,Au=new la,Za=new es,Ja=new U;class qM extends jt{constructor(e=new pi,t=new Wc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(i),Za.radius+=r,e.ray.intersectsSphere(Za)===!1)return;mf.copy(i).invert(),Au.copy(e.ray).applyMatrix4(mf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=d,x=p;_<x;_++){const g=l.getX(_);Ja.fromBufferAttribute(h,g),gf(Ja,g,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,x=p;_<x;_++)Ja.fromBufferAttribute(h,_),gf(Ja,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gf(s,e,t,n,i,r,o){const a=Au.distanceSqToPoint(s);if(a<t){const c=new U;Au.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Kp extends mn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=pn,this.minFilter=pn,this.generateMipmaps=!1,this.needsUpdate=!0}}class YM extends Dn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class fa extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ui extends fa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $M extends Dn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jM extends Dn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class KM extends Dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zp extends Gc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Qa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ZM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function JM(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _f(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Jp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class pa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class QM extends pa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vr,endingEnd:Vr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Br:r=e,a=2*t-n;break;case mc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Br:o=e,c=2*n-t;break;case mc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),x=_*_,g=x*_,m=-d*g+2*d*x-d*_,T=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*_+1,S=(-1-p)*g+(1.5+p)*x+.5*_,w=p*g-p*x;for(let F=0;F!==a;++F)r[F]=m*o[u+F]+T*o[l+F]+S*o[c+F]+w*o[h+F];return r}}class Qp extends pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class eE extends pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ts{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qa(t,this.TimeBufferType),this.values=Qa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qa(e.times,Array),values:Qa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new QM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jo:t=this.InterpolantFactoryMethodDiscrete;break;case co:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jo;case this.InterpolantFactoryMethodLinear:return co;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&ZM(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ml,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,p=h+n;for(let _=0;_!==n;++_){const x=t[h+_];if(x!==t[d+_]||x!==t[p+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ts.prototype.TimeBufferType=Float32Array;ts.prototype.ValueBufferType=Float32Array;ts.prototype.DefaultInterpolation=co;class vo extends ts{}vo.prototype.ValueTypeName="bool";vo.prototype.ValueBufferType=Array;vo.prototype.DefaultInterpolation=Jo;vo.prototype.InterpolantFactoryMethodLinear=void 0;vo.prototype.InterpolantFactoryMethodSmooth=void 0;class em extends ts{}em.prototype.ValueTypeName="color";class fo extends ts{}fo.prototype.ValueTypeName="number";class tE extends pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)ti.slerpFlat(r,0,o,l-a,o,l,c);return r}}class ur extends ts{InterpolantFactoryMethodLinear(e){return new tE(this.times,this.values,this.getValueSize(),e)}}ur.prototype.ValueTypeName="quaternion";ur.prototype.DefaultInterpolation=co;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends ts{}yo.prototype.ValueTypeName="string";yo.prototype.ValueBufferType=Array;yo.prototype.DefaultInterpolation=Jo;yo.prototype.InterpolantFactoryMethodLinear=void 0;yo.prototype.InterpolantFactoryMethodSmooth=void 0;class po extends ts{}po.prototype.ValueTypeName="vector";class bu{constructor(e="",t=-1,n=[],i=Qu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ni(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(iE(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ts.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=JM(c);c=_f(c,1,u),l=_f(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new fo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,_,x){if(p.length!==0){const g=[],m=[];Jp(p,g,m,_),g.length!==0&&x.push(new h(d,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)p[d[_].morphTargets[x]]=-1;for(const x in p){const g=[],m=[];for(let T=0;T!==d[_].morphTargets.length;++T){const S=d[_];g.push(S.time),m.push(S.morphTarget===x?1:0)}i.push(new fo(".morphTargetInfluence["+x+"]",g,m))}c=p.length*o}else{const p=".bones["+t[h].name+"]";n(po,p+".position",d,"pos",i),n(ur,p+".quaternion",d,"rot",i),n(po,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nE(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fo;case"vector":case"vector2":case"vector3":case"vector4":return po;case"color":return em;case"quaternion":return ur;case"bool":case"boolean":return vo;case"string":return yo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function iE(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=nE(s.type);if(s.times===void 0){const t=[],n=[];Jp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ds={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class sE{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const rE=new sE;class Gs{constructor(e){this.manager=e!==void 0?e:rE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ls={};class oE extends Error{constructor(e,t){super(e),this.response=t}}class ea extends Gs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ls[e]!==void 0){ls[e].push({onLoad:t,onProgress:n,onError:i});return}ls[e]=[],ls[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ls[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let x=0;const g=new ReadableStream({start(m){T();function T(){h.read().then(({done:S,value:w})=>{if(S)m.close();else{x+=w.byteLength;const F=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let L=0,R=u.length;L<R;L++){const Y=u[L];Y.onProgress&&Y.onProgress(F)}m.enqueue(w),T()}})}}});return new Response(g)}else throw new oE(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{Ds.add(e,l);const u=ls[e];delete ls[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=ls[e];if(u===void 0)throw this.manager.itemError(e),l;delete ls[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class aE extends Gs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ds.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Qo("img");function c(){u(),Ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class cE extends Gs{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new oh,a=new ea(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:$i,o.wrapT=l.wrapT!==void 0?l.wrapT:$i,o.magFilter=l.magFilter!==void 0?l.magFilter:Tn,o.minFilter=l.minFilter!==void 0?l.minFilter:Tn,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Ai),l.mipmapCount===1&&(o.minFilter=Tn),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class lE extends Gs{constructor(e){super(e)}load(e,t,n,i){const r=new mn,o=new aE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ma extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class uE extends ma{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wl=new ot,xf=new U,vf=new U;class lh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ih,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),Wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hE extends lh{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=uo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class uh extends ma{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yf=new ot,Fo=new U,Xl=new U;class dE extends lh{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fo),Xl.copy(n.position),Xl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xl),n.updateMatrixWorld(),i.makeTranslation(-Fo.x,-Fo.y,-Fo.z),yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf)}}class tm extends ma{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fE extends lh{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nm extends ma{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new fE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class im extends ma{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class pE extends Gs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ds.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ds.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ds.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ds.add(e,c),r.manager.itemStart(e)}}class mE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Sf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Sf(){return(typeof performance>"u"?Date:performance).now()}class gE{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){ti.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;ti.multiplyQuaternionsFlat(e,o,e,t,e,n),ti.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const hh="\\[\\]\\.:\\/",_E=new RegExp("["+hh+"]","g"),dh="[^"+hh+"]",xE="[^"+hh.replace("\\.","")+"]",vE=/((?:WC+[\/:])*)/.source.replace("WC",dh),yE=/(WCOD+)?/.source.replace("WCOD",xE),SE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),TE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),ME=new RegExp("^"+vE+yE+SE+TE+"$"),EE=["material","materials","bones","map"];class AE{constructor(e,t,n){const i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ct{constructor(e,t,n){this.path=t,this.parsedPath=n||Ct.parseTrackName(t),this.node=Ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ct.Composite(e,t,n):new Ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_E,"")}static parseTrackName(e){const t=ME.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);EE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ct.Composite=AE;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bE{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Vr,endingEnd:Vr};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Q0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case tx:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Qu:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===ex;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===J0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Br,i.endingEnd=Br):(e?i.endingStart=this.zeroSlopeAtStart?Br:Vr:i.endingStart=mc,t?i.endingEnd=this.zeroSlopeAtEnd?Br:Vr:i.endingEnd=mc)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const wE=new Float32Array(1);class NE extends Qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=i[h],p=d.name;let _=u[p];if(_!==void 0)++_.referenceCount,o[h]=_;else{if(_=o[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,p));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;_=new gE(Ct.create(n,p,x),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,p),o[h]=_}a[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Qp(new Float32Array(2),new Float32Array(2),1,wE),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?bu.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Qu),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new bE(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?bu.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class RE extends rh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Tf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Sn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zu);const Mf={type:"change"},ql={type:"start"},Ef={type:"end"},ec=new la,Af=new hs,CE=Math.cos(70*Bc.DEG2RAD);class LE extends Qi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:vr.ROTATE,TWO:vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",et),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",et),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mf),n.update(),r=i.NONE},this.update=function(){const v=new U,G=new ti().setFromUnitVectors(e.up,new U(0,1,0)),D=G.clone().invert(),me=new U,Ne=new ti,st=new U,ht=2*Math.PI;return function(on=null){const Mt=n.object.position;v.copy(Mt).sub(n.target),v.applyQuaternion(G),a.setFromVector3(v),n.autoRotate&&r===i.NONE&&ne(M(on)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let en=n.minAzimuthAngle,Ut=n.maxAzimuthAngle;isFinite(en)&&isFinite(Ut)&&(en<-Math.PI?en+=ht:en>Math.PI&&(en-=ht),Ut<-Math.PI?Ut+=ht:Ut>Math.PI&&(Ut-=ht),en<=Ut?a.theta=Math.max(en,Math.min(Ut,a.theta)):a.theta=a.theta>(en+Ut)/2?Math.max(en,a.theta):Math.min(Ut,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Fi=!1;if(n.zoomToCursor&&L||n.object.isOrthographicCamera)a.radius=xe(a.radius);else{const Gn=a.radius;a.radius=xe(a.radius*l),Fi=Gn!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(D),Mt.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&L){let Gn=null;if(n.object.isPerspectiveCamera){const Vi=v.length();Gn=xe(Vi*l);const _i=Vi-Gn;n.object.position.addScaledVector(w,_i),n.object.updateMatrixWorld(),Fi=!!_i}else if(n.object.isOrthographicCamera){const Vi=new U(F.x,F.y,0);Vi.unproject(n.object);const _i=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Fi=_i!==n.object.zoom;const Ws=new U(F.x,F.y,0);Ws.unproject(n.object),n.object.position.sub(Ws).add(Vi),n.object.updateMatrixWorld(),Gn=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Gn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Gn).add(n.object.position):(ec.origin.copy(n.object.position),ec.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ec.direction))<CE?e.lookAt(n.target):(Af.setFromNormalAndCoplanarPoint(n.object.up,n.target),ec.intersectPlane(Af,n.target))))}else if(n.object.isOrthographicCamera){const Gn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Gn!==n.object.zoom&&(n.object.updateProjectionMatrix(),Fi=!0)}return l=1,L=!1,Fi||me.distanceToSquared(n.object.position)>o||8*(1-Ne.dot(n.object.quaternion))>o||st.distanceToSquared(n.target)>o?(n.dispatchEvent(Mf),me.copy(n.object.position),Ne.copy(n.object.quaternion),st.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",pt),n.domElement.removeEventListener("pointerdown",I),n.domElement.removeEventListener("pointercancel",Q),n.domElement.removeEventListener("wheel",ve),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",Q),n.domElement.getRootNode().removeEventListener("keydown",De,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",et),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Tf,c=new Tf;let l=1;const u=new U,h=new Ve,d=new Ve,p=new Ve,_=new Ve,x=new Ve,g=new Ve,m=new Ve,T=new Ve,S=new Ve,w=new U,F=new Ve;let L=!1;const R=[],Y={};let A=!1;function M(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function q(v){const G=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*G)}function ne(v){c.theta-=v}function B(v){c.phi-=v}const le=function(){const v=new U;return function(D,me){v.setFromMatrixColumn(me,0),v.multiplyScalar(-D),u.add(v)}}(),ue=function(){const v=new U;return function(D,me){n.screenSpacePanning===!0?v.setFromMatrixColumn(me,1):(v.setFromMatrixColumn(me,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(D),u.add(v)}}(),_e=function(){const v=new U;return function(D,me){const Ne=n.domElement;if(n.object.isPerspectiveCamera){const st=n.object.position;v.copy(st).sub(n.target);let ht=v.length();ht*=Math.tan(n.object.fov/2*Math.PI/180),le(2*D*ht/Ne.clientHeight,n.object.matrix),ue(2*me*ht/Ne.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(le(D*(n.object.right-n.object.left)/n.object.zoom/Ne.clientWidth,n.object.matrix),ue(me*(n.object.top-n.object.bottom)/n.object.zoom/Ne.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Se(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Te(v,G){if(!n.zoomToCursor)return;L=!0;const D=n.domElement.getBoundingClientRect(),me=v-D.left,Ne=G-D.top,st=D.width,ht=D.height;F.x=me/st*2-1,F.y=-(Ne/ht)*2+1,w.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function xe(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function Fe(v){h.set(v.clientX,v.clientY)}function Ze(v){Te(v.clientX,v.clientX),m.set(v.clientX,v.clientY)}function lt(v){_.set(v.clientX,v.clientY)}function te(v){d.set(v.clientX,v.clientY),p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const G=n.domElement;ne(2*Math.PI*p.x/G.clientHeight),B(2*Math.PI*p.y/G.clientHeight),h.copy(d),n.update()}function Me(v){T.set(v.clientX,v.clientY),S.subVectors(T,m),S.y>0?Se(q(S.y)):S.y<0&&ee(q(S.y)),m.copy(T),n.update()}function Ae(v){x.set(v.clientX,v.clientY),g.subVectors(x,_).multiplyScalar(n.panSpeed),_e(g.x,g.y),_.copy(x),n.update()}function be(v){Te(v.clientX,v.clientY),v.deltaY<0?ee(q(v.deltaY)):v.deltaY>0&&Se(q(v.deltaY)),n.update()}function Je(v){let G=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):_e(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):_e(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?ne(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):_e(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?ne(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):_e(-n.keyPanSpeed,0),G=!0;break}G&&(v.preventDefault(),n.update())}function nt(v){if(R.length===1)h.set(v.pageX,v.pageY);else{const G=gt(v),D=.5*(v.pageX+G.x),me=.5*(v.pageY+G.y);h.set(D,me)}}function $(v){if(R.length===1)_.set(v.pageX,v.pageY);else{const G=gt(v),D=.5*(v.pageX+G.x),me=.5*(v.pageY+G.y);_.set(D,me)}}function St(v){const G=gt(v),D=v.pageX-G.x,me=v.pageY-G.y,Ne=Math.sqrt(D*D+me*me);m.set(0,Ne)}function qe(v){n.enableZoom&&St(v),n.enablePan&&$(v)}function Tt(v){n.enableZoom&&St(v),n.enableRotate&&nt(v)}function je(v){if(R.length==1)d.set(v.pageX,v.pageY);else{const D=gt(v),me=.5*(v.pageX+D.x),Ne=.5*(v.pageY+D.y);d.set(me,Ne)}p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const G=n.domElement;ne(2*Math.PI*p.x/G.clientHeight),B(2*Math.PI*p.y/G.clientHeight),h.copy(d)}function ut(v){if(R.length===1)x.set(v.pageX,v.pageY);else{const G=gt(v),D=.5*(v.pageX+G.x),me=.5*(v.pageY+G.y);x.set(D,me)}g.subVectors(x,_).multiplyScalar(n.panSpeed),_e(g.x,g.y),_.copy(x)}function it(v){const G=gt(v),D=v.pageX-G.x,me=v.pageY-G.y,Ne=Math.sqrt(D*D+me*me);T.set(0,Ne),S.set(0,Math.pow(T.y/m.y,n.zoomSpeed)),Se(S.y),m.copy(T);const st=(v.pageX+G.x)*.5,ht=(v.pageY+G.y)*.5;Te(st,ht)}function ft(v){n.enableZoom&&it(v),n.enablePan&&ut(v)}function Ht(v){n.enableZoom&&it(v),n.enableRotate&&je(v)}function I(v){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",Q)),!Ye(v)&&(Ke(v),v.pointerType==="touch"?we(v):fe(v)))}function E(v){n.enabled!==!1&&(v.pointerType==="touch"?Ge(v):ge(v))}function Q(v){switch(Le(v),R.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",Q),n.dispatchEvent(Ef),r=i.NONE;break;case 1:const G=R[0],D=Y[G];we({pointerId:G,pageX:D.x,pageY:D.y});break}}function fe(v){let G;switch(v.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case xr.DOLLY:if(n.enableZoom===!1)return;Ze(v),r=i.DOLLY;break;case xr.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;lt(v),r=i.PAN}else{if(n.enableRotate===!1)return;Fe(v),r=i.ROTATE}break;case xr.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;Fe(v),r=i.ROTATE}else{if(n.enablePan===!1)return;lt(v),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ql)}function ge(v){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;te(v);break;case i.DOLLY:if(n.enableZoom===!1)return;Me(v);break;case i.PAN:if(n.enablePan===!1)return;Ae(v);break}}function ve(v){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(v.preventDefault(),n.dispatchEvent(ql),be(He(v)),n.dispatchEvent(Ef))}function He(v){const G=v.deltaMode,D={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(G){case 1:D.deltaY*=16;break;case 2:D.deltaY*=100;break}return v.ctrlKey&&!A&&(D.deltaY*=10),D}function De(v){v.key==="Control"&&(A=!0,n.domElement.getRootNode().addEventListener("keyup",Pe,{passive:!0,capture:!0}))}function Pe(v){v.key==="Control"&&(A=!1,n.domElement.getRootNode().removeEventListener("keyup",Pe,{passive:!0,capture:!0}))}function et(v){n.enabled===!1||n.enablePan===!1||Je(v)}function we(v){switch(at(v),R.length){case 1:switch(n.touches.ONE){case vr.ROTATE:if(n.enableRotate===!1)return;nt(v),r=i.TOUCH_ROTATE;break;case vr.PAN:if(n.enablePan===!1)return;$(v),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case vr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qe(v),r=i.TOUCH_DOLLY_PAN;break;case vr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(v),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ql)}function Ge(v){switch(at(v),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;je(v),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ut(v),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ft(v),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ht(v),n.update();break;default:r=i.NONE}}function pt(v){n.enabled!==!1&&v.preventDefault()}function Ke(v){R.push(v.pointerId)}function Le(v){delete Y[v.pointerId];for(let G=0;G<R.length;G++)if(R[G]==v.pointerId){R.splice(G,1);return}}function Ye(v){for(let G=0;G<R.length;G++)if(R[G]==v.pointerId)return!0;return!1}function at(v){let G=Y[v.pointerId];G===void 0&&(G=new Ve,Y[v.pointerId]=G),G.set(v.pageX,v.pageY)}function gt(v){const G=v.pointerId===R[0]?R[1]:R[0];return Y[G]}n.domElement.addEventListener("contextmenu",pt),n.domElement.addEventListener("pointerdown",I),n.domElement.addEventListener("pointercancel",Q),n.domElement.addEventListener("wheel",ve,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",De,{passive:!0,capture:!0}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Ki{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ki.nextNameID=Ki.nextNameID||0,this.$name.id=`lil-gui-name-${++Ki.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class IE extends Ki{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function wu(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const PE={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:wu,toHexString:wu},ta={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},DE={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const n=ta.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return ta.toHexString(i)}},OE={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=ta.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return ta.toHexString(i)}},UE=[PE,ta,DE,OE];function FE(s){return UE.find(e=>e.match(s))}class VE extends Ki{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=FE(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=wu(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Yl extends Ki{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class BE extends Ki{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let T=parseFloat(this.$input.value);isNaN(T)||(this._stepExplicit&&(T=this._snap(T)),this.setValue(this._clamp(T)))},n=T=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+T),this.$input.value=this.getValue())},i=T=>{T.key==="Enter"&&this.$input.blur(),T.code==="ArrowUp"&&(T.preventDefault(),n(this._step*this._arrowKeyMultiplier(T))),T.code==="ArrowDown"&&(T.preventDefault(),n(this._step*this._arrowKeyMultiplier(T)*-1))},r=T=>{this._inputFocused&&(T.preventDefault(),n(this._step*this._normalizeMouseWheel(T)))};let o=!1,a,c,l,u,h;const d=5,p=T=>{a=T.clientX,c=l=T.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",x)},_=T=>{if(o){const S=T.clientX-a,w=T.clientY-c;Math.abs(w)>d?(T.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>d&&x()}if(!o){const S=T.clientY-l;h-=S*this._step*this._arrowKeyMultiplier(T),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}l=T.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",x)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,T,S,w,F)=>(m-T)/(S-T)*(F-w)+w,t=m=>{const T=this.$slider.getBoundingClientRect();let S=e(m,T.left,T.right,this._min,this._max);this._snapClampSetValue(S)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=m=>{t(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,c;const l=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,c=m.touches[0].clientY,o=!0):l(m),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=m=>{if(o){const T=m.touches[0].clientX-a,S=m.touches[0].clientY-c;Math.abs(T)>Math.abs(S)?l(m):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else m.preventDefault(),t(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),_=400;let x;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const S=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(p,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class zE extends Ki{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class kE extends Ki{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const HE=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function GE(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let bf=!1;class fh{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!bf&&a&&(GE(HE),bf=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,r){if(Object(n)===n)return new zE(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new BE(this,e,t,n,i,r);case"boolean":return new IE(this,e,t);case"string":return new kE(this,e,t);case"function":return new Yl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new VE(this,e,t,n)}addFolder(e){const t=new fh({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Yl||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Yl)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function wf(s,e){if(e===nx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Tu||e===Rp){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Tu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class WE extends Gs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jE(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new rA(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new aA(t)}),this.register(function(t){return new JE(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new eA(t)}),this.register(function(t){return new tA(t)}),this.register(function(t){return new $E(t)}),this.register(function(t){return new nA(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new sA(t)}),this.register(function(t){return new iA(t)}),this.register(function(t){return new qE(t)}),this.register(function(t){return new cA(t)}),this.register(function(t){return new lA(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Yo.extractUrlBase(e);o=Yo.resolveURL(l,this.path)}else o=Yo.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ea(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===sm){try{o[xt.KHR_BINARY_GLTF]=new uA(e)}catch(h){i&&i(h);return}r=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new MA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:o[h]=new YE;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[h]=new hA(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[h]=new dA;break;case xt.KHR_MESH_QUANTIZATION:o[h]=new fA;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function XE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qE{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new We(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Qt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new nm(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new tm(u),l.distance=h;break;case"spot":l=new uh(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ls(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class YE{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ps}extendParams(e,t,n){const i=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,yn))}return Promise.all(i)}}class $E{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jE{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(r)}}class KE{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ZE{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class JE{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yn)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class QE{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class eA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(a[0],a[1],a[2],Qt),Promise.all(r)}}class tA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class nA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yn)),Promise.all(r)}}class iA{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class sA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class rA{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class oA{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aA{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cA{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class lA{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==ai.TRIANGLES&&l.mode!==ai.TRIANGLE_STRIP&&l.mode!==ai.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(const _ of h){const x=new ot,g=new U,m=new ti,T=new U(1,1,1),S=new GM(_.geometry,_.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,w),c.SCALE&&T.fromBufferAttribute(c.SCALE,w),S.setMatrixAt(w,x.compose(g,m,T));for(const w in c)if(w==="_COLOR_0"){const F=c[w];S.instanceColor=new yc(F.array,F.itemSize,F.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&_.geometry.setAttribute(w,c[w]);jt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const sm="glTF",Vo=12,Nf={JSON:1313821514,BIN:5130562};class uA{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Vo,r=new DataView(e,Vo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Nf.JSON){const l=new Uint8Array(e,Vo+o,a);this.content=n.decode(l)}else if(c===Nf.BIN){const l=Vo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class hA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Nu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Nu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=Zr[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(p){for(const _ in p.attributes){const x=p.attributes[_],g=c[_];g!==void 0&&(x.normalized=g)}h(p)},a,l,Qt,d)})})}}class dA{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class fA{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class rm extends pa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,_=e*l,x=_-l,g=-2*p+3*d,m=p-d,T=1-g,S=m-d+h;for(let w=0;w!==a;w++){const F=o[x+w+a],L=o[x+w+c]*u,R=o[_+w+a],Y=o[_+w]*u;r[w]=T*F+S*L+g*R+m*Y}return r}}const pA=new ti;class mA extends rm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return pA.fromArray(r).normalize().toArray(r),r}}const ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rf={9728:pn,9729:Tn,9984:Sp,9985:ac,9986:Go,9987:Ai},Cf={33071:$i,33648:pc,10497:oo},$l={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gA={CUBICSPLINE:void 0,LINEAR:co,STEP:Jo},jl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _A(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new fa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xs})),s.DefaultMaterial}function Js(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ls(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xA(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function vA(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yA(s){let e;const t=s.extensions&&s.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kl(t.attributes):e=s.indices+":"+Kl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Kl(s.targets[n]);return e}function Kl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ru(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SA(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const TA=new ot;class MA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new XE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new lE(this.options.manager):this.textureLoader=new pE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ea(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Js(r,a,i),Ls(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Yo.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=$l[i.type],a=Zr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new bn(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=$l[i.type],l=Zr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let x,g;if(p&&p!==h){const m=Math.floor(d/p),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let S=t.cache.get(T);S||(x=new l(a,m*p,i.count*p/u),S=new rh(x,p/u),t.cache.add(T,S)),g=new Hc(S,c,d%p/u,_)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),g=new bn(x,c,_);if(i.sparse!==void 0){const m=$l.SCALAR,T=Zr[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,F=new T(o[1],S,i.sparse.count*m),L=new l(o[2],w,i.sparse.count*c);a!==null&&(g=new bn(g.array.slice(),g.itemSize,g.normalized));for(let R=0,Y=F.length;R<Y;R++){const A=F[R];if(g.setX(A,L[R*c]),c>=2&&g.setY(A,L[R*c+1]),c>=3&&g.setZ(A,L[R*c+2]),c>=4&&g.setW(A,L[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Rf[d.magFilter]||Tn,u.minFilter=Rf[d.minFilter]||Ai,u.wrapS=Cf[d.wrapS]||oo,u.wrapT=Cf[d.wrapT]||oo,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(x){const g=new mn(x);g.needsUpdate=!0,d(g)}),t.load(Yo.resolveURL(h,r.path),_,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||SA(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Wc,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Gc,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return fa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[xt.KHR_MATERIALS_UNLIT]){const h=i[xt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,yn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=qi);const u=r.alphaMode||jl.OPAQUE;if(u===jl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===jl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ps&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ps&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ps){const h=r.emissiveFactor;a.emissive=new We().setRGB(h[0],h[1],h[2],Qt)}return r.emissiveTexture!==void 0&&o!==Ps&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yn)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Ls(h,r),t.associations.set(h,{materials:e}),r.extensions&&Js(i,h,r),h})}createUniqueName(e){const t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Lf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=yA(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Lf(new pi,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?_A(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const x=u[p],g=o[p];let m;const T=l[p];if(g.mode===ai.TRIANGLES||g.mode===ai.TRIANGLE_STRIP||g.mode===ai.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new zM(x,T):new Bn(x,T),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===ai.TRIANGLE_STRIP?m.geometry=wf(m.geometry,Rp):g.mode===ai.TRIANGLE_FAN&&(m.geometry=wf(m.geometry,Tu));else if(g.mode===ai.LINES)m=new WM(x,T);else if(g.mode===ai.LINE_STRIP)m=new ch(x,T);else if(g.mode===ai.LINE_LOOP)m=new XM(x,T);else if(g.mode===ai.POINTS)m=new qM(x,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&vA(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ls(m,r),g.extensions&&Js(i,m,g),t.assignFinalMaterial(m),h.push(m)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Js(i,h[0],r),h[0];const d=new or;r.extensions&&Js(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,_=h.length;p<_;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vn(Bc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new zc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ls(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new ot;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ah(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const p=i.channels[h],_=i.samplers[p.sampler],x=p.target,g=x.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,T=i.parameters!==void 0?i.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",T)),l.push(_),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],_=h[2],x=h[3],g=h[4],m=[];for(let T=0,S=d.length;T<S;T++){const w=d[T],F=p[T],L=_[T],R=x[T],Y=g[T];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const A=n._createAnimationTracks(w,F,L,R,Y);if(A)for(let M=0;M<A.length;M++)m.push(A[M])}return new bu(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,TA)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new jp:l.length>1?u=new or:l.length===1?u=l[0]:u=new jt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ls(u,r),r.extensions&&Js(n,u,r),r.matrix!==void 0){const h=new ot;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new or;n.name&&(r.name=i.createUniqueName(n.name)),Ls(r,n),n.extensions&&Js(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof Dn||d instanceof mn)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Rs[r.path]===Rs.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Rs[r.path]){case Rs.weights:l=fo;break;case Rs.rotation:l=ur;break;case Rs.position:case Rs.scale:l=po;break;default:switch(n.itemSize){case 1:l=fo;break;case 2:case 3:default:l=po;break}break}const u=i.interpolation!==void 0?gA[i.interpolation]:co,h=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const _=new l(c[d]+"."+Rs[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ru(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ur?mA:rm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function EA(s,e,t){const n=e.attributes,i=new Ss;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){const u=Ru(Zr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,c=new U;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const x=Ru(Zr[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new es;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Lf(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Nu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Lt.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Lt.workingColorSpace}" not supported.`),Ls(s,e),EA(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xA(s,e.targets,t):s})}const Zl=new WeakMap;class AA extends Gs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new ea(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,yn).catch(n)}decodeDracoFile(e,t,n,i,r=Qt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Zl.has(e)){const c=Zl.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[r]={resolve:l,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Zl.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new pi;e.index&&t.setIndex(new bn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,c=new bn(o,a);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==yn)return;const n=new We;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ea(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=bA.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function bA(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const p=t(h,d,new Int8Array(c),l),_=p.attributes.map(x=>x.array.buffer);p.index&&_.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},_)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{h.destroy(d)}});break}};function t(o,a,c,l){const u=l.attributeIDs,h=l.attributeTypes;let d,p;const _=a.GetEncodedGeometryType(c);if(_===o.TRIANGULAR_MESH)d=new o.Mesh,p=a.DecodeArrayToMesh(c,c.byteLength,d);else if(_===o.POINT_CLOUD)d=new o.PointCloud,p=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const x={index:null,attributes:[]};for(const g in u){const m=self[h[g]];let T,S;if(l.useUniqueIDs)S=u[g],T=a.GetAttributeByUniqueId(d,S);else{if(S=a.GetAttributeId(d,o[u[g]]),S===-1)continue;T=a.GetAttribute(d,S)}const w=i(o,a,d,g,m,T);g==="color"&&(w.vertexColorSpace=l.vertexColorSpace),x.attributes.push(w)}return _===o.TRIANGULAR_MESH&&(x.index=n(o,a,d)),o.destroy(d),x}function n(o,a,c){const u=c.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(c,h,d);const p=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:p,itemSize:1}}function i(o,a,c,l,u,h){const d=h.num_components(),_=c.num_points()*d,x=_*u.BYTES_PER_ELEMENT,g=r(o,u),m=o._malloc(x);a.GetAttributeDataArrayForAllPoints(c,h,g,x,m);const T=new u(o.HEAPF32.buffer,m,_).slice();return o._free(m),{name:l,array:T,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ui=Uint8Array,kr=Uint16Array,wA=Int32Array,om=new ui([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),am=new ui([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),NA=new ui([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),cm=function(s,e){for(var t=new kr(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new wA(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},lm=cm(om,2),um=lm.b,RA=lm.r;um[28]=258,RA[258]=28;var CA=cm(am,0),LA=CA.b,Cu=new kr(32768);for(var Yt=0;Yt<32768;++Yt){var Cs=(Yt&43690)>>1|(Yt&21845)<<1;Cs=(Cs&52428)>>2|(Cs&13107)<<2,Cs=(Cs&61680)>>4|(Cs&3855)<<4,Cu[Yt]=((Cs&65280)>>8|(Cs&255)<<8)>>1}var $o=function(s,e,t){for(var n=s.length,i=0,r=new kr(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new kr(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new kr(1<<e);var c=15-e;for(i=0;i<n;++i)if(s[i])for(var l=i<<4|s[i],u=e-s[i],h=o[s[i]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[Cu[h]>>c]=l}else for(a=new kr(n),i=0;i<n;++i)s[i]&&(a[i]=Cu[o[s[i]-1]++]>>15-s[i]);return a},ga=new ui(288);for(var Yt=0;Yt<144;++Yt)ga[Yt]=8;for(var Yt=144;Yt<256;++Yt)ga[Yt]=9;for(var Yt=256;Yt<280;++Yt)ga[Yt]=7;for(var Yt=280;Yt<288;++Yt)ga[Yt]=8;var hm=new ui(32);for(var Yt=0;Yt<32;++Yt)hm[Yt]=5;var IA=$o(ga,9,1),PA=$o(hm,5,1),Jl=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Si=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Ql=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},DA=function(s){return(s+7)/8|0},OA=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new ui(s.subarray(e,t))},UA=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ti=function(s,e,t){var n=new Error(e||UA[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,Ti),!t)throw n;return n},FA=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new ui(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new ui(i*3));var l=function(St){var qe=t.length;if(St>qe){var Tt=new ui(Math.max(qe*2,St));Tt.set(t),t=Tt}},u=e.f||0,h=e.p||0,d=e.b||0,p=e.l,_=e.d,x=e.m,g=e.n,m=i*8;do{if(!p){u=Si(s,h,1);var T=Si(s,h+1,3);if(h+=3,T)if(T==1)p=IA,_=PA,x=9,g=5;else if(T==2){var L=Si(s,h,31)+257,R=Si(s,h+10,15)+4,Y=L+Si(s,h+5,31)+1;h+=14;for(var A=new ui(Y),M=new ui(19),q=0;q<R;++q)M[NA[q]]=Si(s,h+q*3,7);h+=R*3;for(var ne=Jl(M),B=(1<<ne)-1,le=$o(M,ne,1),q=0;q<Y;){var ue=le[Si(s,h,B)];h+=ue&15;var S=ue>>4;if(S<16)A[q++]=S;else{var _e=0,Se=0;for(S==16?(Se=3+Si(s,h,3),h+=2,_e=A[q-1]):S==17?(Se=3+Si(s,h,7),h+=3):S==18&&(Se=11+Si(s,h,127),h+=7);Se--;)A[q++]=_e}}var ee=A.subarray(0,L),Te=A.subarray(L);x=Jl(ee),g=Jl(Te),p=$o(ee,x,1),_=$o(Te,g,1)}else Ti(1);else{var S=DA(h)+4,w=s[S-4]|s[S-3]<<8,F=S+w;if(F>i){c&&Ti(0);break}a&&l(d+w),t.set(s.subarray(S,F),d),e.b=d+=w,e.p=h=F*8,e.f=u;continue}if(h>m){c&&Ti(0);break}}a&&l(d+131072);for(var xe=(1<<x)-1,Fe=(1<<g)-1,Ze=h;;Ze=h){var _e=p[Ql(s,h)&xe],lt=_e>>4;if(h+=_e&15,h>m){c&&Ti(0);break}if(_e||Ti(2),lt<256)t[d++]=lt;else if(lt==256){Ze=h,p=null;break}else{var te=lt-254;if(lt>264){var q=lt-257,Me=om[q];te=Si(s,h,(1<<Me)-1)+um[q],h+=Me}var Ae=_[Ql(s,h)&Fe],be=Ae>>4;Ae||Ti(3),h+=Ae&15;var Te=LA[be];if(be>3){var Me=am[be];Te+=Ql(s,h)&(1<<Me)-1,h+=Me}if(h>m){c&&Ti(0);break}a&&l(d+131072);var Je=d+te;if(d<Te){var nt=r-Te,$=Math.min(Te,Je);for(nt+d<0&&Ti(3);d<$;++d)t[d]=n[nt+d]}for(;d<Je;++d)t[d]=t[d-Te]}}e.l=p,e.p=Ze,e.b=d,e.f=u,p&&(u=1,e.m=x,e.d=_,e.n=g)}while(!u);return d!=t.length&&o?OA(t,0,d):t.subarray(0,d)},VA=new ui(0),BA=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&Ti(6,"invalid zlib data"),(s[1]>>5&1)==+!e&&Ti(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function tc(s,e){return FA(s.subarray(BA(s,e),-4),{i:2},e,e)}var zA=typeof TextDecoder<"u"&&new TextDecoder,kA=0;try{zA.decode(VA,{stream:!0}),kA=1}catch{}class HA extends cE{constructor(e){super(e),this.type=ms}parse(e){const A=Math.pow(2.7182818,2.2);function M(f,y){let b=0;for(let W=0;W<65536;++W)(W==0||f[W>>3]&1<<(W&7))&&(y[b++]=W);const P=b-1;for(;b<65536;)y[b++]=0;return P}function q(f){for(let y=0;y<16384;y++)f[y]={},f[y].len=0,f[y].lit=0,f[y].p=null}const ne={l:0,c:0,lc:0};function B(f,y,b,P,W){for(;b<f;)y=y<<8|at(P,W),b+=8;b-=f,ne.l=y>>b&(1<<f)-1,ne.c=y,ne.lc=b}const le=new Array(59);function ue(f){for(let b=0;b<=58;++b)le[b]=0;for(let b=0;b<65537;++b)le[f[b]]+=1;let y=0;for(let b=58;b>0;--b){const P=y+le[b]>>1;le[b]=y,y=P}for(let b=0;b<65537;++b){const P=f[b];P>0&&(f[b]=P|le[P]++<<6)}}function _e(f,y,b,P,W,V){const J=y;let oe=0,re=0;for(;P<=W;P++){if(J.value-y.value>b)return!1;B(6,oe,re,f,J);const ce=ne.l;if(oe=ne.c,re=ne.lc,V[P]=ce,ce==63){if(J.value-y.value>b)throw new Error("Something wrong with hufUnpackEncTable");B(8,oe,re,f,J);let ae=ne.l+6;if(oe=ne.c,re=ne.lc,P+ae>W+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ae--;)V[P++]=0;P--}else if(ce>=59){let ae=ce-59+2;if(P+ae>W+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ae--;)V[P++]=0;P--}}ue(V)}function Se(f){return f&63}function ee(f){return f>>6}function Te(f,y,b,P){for(;y<=b;y++){const W=ee(f[y]),V=Se(f[y]);if(W>>V)throw new Error("Invalid table entry");if(V>14){const J=P[W>>V-14];if(J.len)throw new Error("Invalid table entry");if(J.lit++,J.p){const oe=J.p;J.p=new Array(J.lit);for(let re=0;re<J.lit-1;++re)J.p[re]=oe[re]}else J.p=new Array(1);J.p[J.lit-1]=y}else if(V){let J=0;for(let oe=1<<14-V;oe>0;oe--){const re=P[(W<<14-V)+J];if(re.len||re.p)throw new Error("Invalid table entry");re.len=V,re.lit=y,J++}}}return!0}const xe={c:0,lc:0};function Fe(f,y,b,P){f=f<<8|at(b,P),y+=8,xe.c=f,xe.lc=y}const Ze={c:0,lc:0};function lt(f,y,b,P,W,V,J,oe,re){if(f==y){P<8&&(Fe(b,P,W,V),b=xe.c,P=xe.lc),P-=8;let ce=b>>P;if(ce=new Uint8Array([ce])[0],oe.value+ce>re)return!1;const ae=J[oe.value-1];for(;ce-- >0;)J[oe.value++]=ae}else if(oe.value<re)J[oe.value++]=f;else return!1;Ze.c=b,Ze.lc=P}function te(f){return f&65535}function Me(f){const y=te(f);return y>32767?y-65536:y}const Ae={a:0,b:0};function be(f,y){const b=Me(f),W=Me(y),V=b+(W&1)+(W>>1),J=V,oe=V-W;Ae.a=J,Ae.b=oe}function Je(f,y){const b=te(f),P=te(y),W=b-(P>>1)&65535,V=P+W-32768&65535;Ae.a=V,Ae.b=W}function nt(f,y,b,P,W,V,J){const oe=J<16384,re=b>W?W:b;let ce=1,ae,Re;for(;ce<=re;)ce<<=1;for(ce>>=1,ae=ce,ce>>=1;ce>=1;){Re=0;const ye=Re+V*(W-ae),pe=V*ce,ze=V*ae,Ee=P*ce,Ue=P*ae;let tt,Et,Ft,Rt;for(;Re<=ye;Re+=ze){let At=Re;const _t=Re+P*(b-ae);for(;At<=_t;At+=Ue){const bt=At+Ee,Cn=At+pe,an=Cn+Ee;oe?(be(f[At+y],f[Cn+y]),tt=Ae.a,Ft=Ae.b,be(f[bt+y],f[an+y]),Et=Ae.a,Rt=Ae.b,be(tt,Et),f[At+y]=Ae.a,f[bt+y]=Ae.b,be(Ft,Rt),f[Cn+y]=Ae.a,f[an+y]=Ae.b):(Je(f[At+y],f[Cn+y]),tt=Ae.a,Ft=Ae.b,Je(f[bt+y],f[an+y]),Et=Ae.a,Rt=Ae.b,Je(tt,Et),f[At+y]=Ae.a,f[bt+y]=Ae.b,Je(Ft,Rt),f[Cn+y]=Ae.a,f[an+y]=Ae.b)}if(b&ce){const bt=At+pe;oe?be(f[At+y],f[bt+y]):Je(f[At+y],f[bt+y]),tt=Ae.a,f[bt+y]=Ae.b,f[At+y]=tt}}if(W&ce){let At=Re;const _t=Re+P*(b-ae);for(;At<=_t;At+=Ue){const bt=At+Ee;oe?be(f[At+y],f[bt+y]):Je(f[At+y],f[bt+y]),tt=Ae.a,f[bt+y]=Ae.b,f[At+y]=tt}}ae=ce,ce>>=1}return Re}function $(f,y,b,P,W,V,J,oe,re){let ce=0,ae=0;const Re=J,ye=Math.trunc(P.value+(W+7)/8);for(;P.value<ye;)for(Fe(ce,ae,b,P),ce=xe.c,ae=xe.lc;ae>=14;){const ze=ce>>ae-14&16383,Ee=y[ze];if(Ee.len)ae-=Ee.len,lt(Ee.lit,V,ce,ae,b,P,oe,re,Re),ce=Ze.c,ae=Ze.lc;else{if(!Ee.p)throw new Error("hufDecode issues");let Ue;for(Ue=0;Ue<Ee.lit;Ue++){const tt=Se(f[Ee.p[Ue]]);for(;ae<tt&&P.value<ye;)Fe(ce,ae,b,P),ce=xe.c,ae=xe.lc;if(ae>=tt&&ee(f[Ee.p[Ue]])==(ce>>ae-tt&(1<<tt)-1)){ae-=tt,lt(Ee.p[Ue],V,ce,ae,b,P,oe,re,Re),ce=Ze.c,ae=Ze.lc;break}}if(Ue==Ee.lit)throw new Error("hufDecode issues")}}const pe=8-W&7;for(ce>>=pe,ae-=pe;ae>0;){const ze=y[ce<<14-ae&16383];if(ze.len)ae-=ze.len,lt(ze.lit,V,ce,ae,b,P,oe,re,Re),ce=Ze.c,ae=Ze.lc;else throw new Error("hufDecode issues")}return!0}function St(f,y,b,P,W,V){const J={value:0},oe=b.value,re=Ye(y,b),ce=Ye(y,b);b.value+=4;const ae=Ye(y,b);if(b.value+=4,re<0||re>=65537||ce<0||ce>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const Re=new Array(65537),ye=new Array(16384);q(ye);const pe=P-(b.value-oe);if(_e(f,b,pe,re,ce,Re),ae>8*(P-(b.value-oe)))throw new Error("Something wrong with hufUncompress");Te(Re,re,ce,ye),$(Re,ye,f,b,ae,ce,V,W,J)}function qe(f,y,b){for(let P=0;P<b;++P)y[P]=f[y[P]]}function Tt(f){for(let y=1;y<f.length;y++){const b=f[y-1]+f[y]-128;f[y]=b}}function je(f,y){let b=0,P=Math.floor((f.length+1)/2),W=0;const V=f.length-1;for(;!(W>V||(y[W++]=f[b++],W>V));)y[W++]=f[P++]}function ut(f){let y=f.byteLength;const b=new Array;let P=0;const W=new DataView(f);for(;y>0;){const V=W.getInt8(P++);if(V<0){const J=-V;y-=J+1;for(let oe=0;oe<J;oe++)b.push(W.getUint8(P++))}else{const J=V;y-=2;const oe=W.getUint8(P++);for(let re=0;re<J+1;re++)b.push(oe)}}return b}function it(f,y,b,P,W,V){let J=new DataView(V.buffer);const oe=b[f.idx[0]].width,re=b[f.idx[0]].height,ce=3,ae=Math.floor(oe/8),Re=Math.ceil(oe/8),ye=Math.ceil(re/8),pe=oe-(Re-1)*8,ze=re-(ye-1)*8,Ee={value:0},Ue=new Array(ce),tt=new Array(ce),Et=new Array(ce),Ft=new Array(ce),Rt=new Array(ce);for(let _t=0;_t<ce;++_t)Rt[_t]=y[f.idx[_t]],Ue[_t]=_t<1?0:Ue[_t-1]+Re*ye,tt[_t]=new Float32Array(64),Et[_t]=new Uint16Array(64),Ft[_t]=new Uint16Array(Re*64);for(let _t=0;_t<ye;++_t){let bt=8;_t==ye-1&&(bt=ze);let Cn=8;for(let wt=0;wt<Re;++wt){wt==Re-1&&(Cn=pe);for(let Gt=0;Gt<ce;++Gt)Et[Gt].fill(0),Et[Gt][0]=W[Ue[Gt]++],ft(Ee,P,Et[Gt]),Ht(Et[Gt],tt[Gt]),I(tt[Gt]);E(tt);for(let Gt=0;Gt<ce;++Gt)Q(tt[Gt],Ft[Gt],wt*64)}let an=0;for(let wt=0;wt<ce;++wt){const Gt=b[f.idx[wt]].type;for(let is=8*_t;is<8*_t+bt;++is){an=Rt[wt][is];for(let Ro=0;Ro<ae;++Ro){const Bi=Ro*64+(is&7)*8;J.setUint16(an+0*2*Gt,Ft[wt][Bi+0],!0),J.setUint16(an+1*2*Gt,Ft[wt][Bi+1],!0),J.setUint16(an+2*2*Gt,Ft[wt][Bi+2],!0),J.setUint16(an+3*2*Gt,Ft[wt][Bi+3],!0),J.setUint16(an+4*2*Gt,Ft[wt][Bi+4],!0),J.setUint16(an+5*2*Gt,Ft[wt][Bi+5],!0),J.setUint16(an+6*2*Gt,Ft[wt][Bi+6],!0),J.setUint16(an+7*2*Gt,Ft[wt][Bi+7],!0),an+=8*2*Gt}}if(ae!=Re)for(let is=8*_t;is<8*_t+bt;++is){const Ro=Rt[wt][is]+8*ae*2*Gt,Bi=ae*64+(is&7)*8;for(let Aa=0;Aa<Cn;++Aa)J.setUint16(Ro+Aa*2*Gt,Ft[wt][Bi+Aa],!0)}}}const At=new Uint16Array(oe);J=new DataView(V.buffer);for(let _t=0;_t<ce;++_t){b[f.idx[_t]].decoded=!0;const bt=b[f.idx[_t]].type;if(b[_t].type==2)for(let Cn=0;Cn<re;++Cn){const an=Rt[_t][Cn];for(let wt=0;wt<oe;++wt)At[wt]=J.getUint16(an+wt*2*bt,!0);for(let wt=0;wt<oe;++wt)J.setFloat32(an+wt*2*bt,D(At[wt]),!0)}}}function ft(f,y,b){let P,W=1;for(;W<64;)P=y[f.value],P==65280?W=64:P>>8==255?W+=P&255:(b[W]=P,W++),f.value++}function Ht(f,y){y[0]=D(f[0]),y[1]=D(f[1]),y[2]=D(f[5]),y[3]=D(f[6]),y[4]=D(f[14]),y[5]=D(f[15]),y[6]=D(f[27]),y[7]=D(f[28]),y[8]=D(f[2]),y[9]=D(f[4]),y[10]=D(f[7]),y[11]=D(f[13]),y[12]=D(f[16]),y[13]=D(f[26]),y[14]=D(f[29]),y[15]=D(f[42]),y[16]=D(f[3]),y[17]=D(f[8]),y[18]=D(f[12]),y[19]=D(f[17]),y[20]=D(f[25]),y[21]=D(f[30]),y[22]=D(f[41]),y[23]=D(f[43]),y[24]=D(f[9]),y[25]=D(f[11]),y[26]=D(f[18]),y[27]=D(f[24]),y[28]=D(f[31]),y[29]=D(f[40]),y[30]=D(f[44]),y[31]=D(f[53]),y[32]=D(f[10]),y[33]=D(f[19]),y[34]=D(f[23]),y[35]=D(f[32]),y[36]=D(f[39]),y[37]=D(f[45]),y[38]=D(f[52]),y[39]=D(f[54]),y[40]=D(f[20]),y[41]=D(f[22]),y[42]=D(f[33]),y[43]=D(f[38]),y[44]=D(f[46]),y[45]=D(f[51]),y[46]=D(f[55]),y[47]=D(f[60]),y[48]=D(f[21]),y[49]=D(f[34]),y[50]=D(f[37]),y[51]=D(f[47]),y[52]=D(f[50]),y[53]=D(f[56]),y[54]=D(f[59]),y[55]=D(f[61]),y[56]=D(f[35]),y[57]=D(f[36]),y[58]=D(f[48]),y[59]=D(f[49]),y[60]=D(f[57]),y[61]=D(f[58]),y[62]=D(f[62]),y[63]=D(f[63])}function I(f){const y=.5*Math.cos(.7853975),b=.5*Math.cos(3.14159/16),P=.5*Math.cos(3.14159/8),W=.5*Math.cos(3*3.14159/16),V=.5*Math.cos(5*3.14159/16),J=.5*Math.cos(3*3.14159/8),oe=.5*Math.cos(7*3.14159/16),re=new Array(4),ce=new Array(4),ae=new Array(4),Re=new Array(4);for(let ye=0;ye<8;++ye){const pe=ye*8;re[0]=P*f[pe+2],re[1]=J*f[pe+2],re[2]=P*f[pe+6],re[3]=J*f[pe+6],ce[0]=b*f[pe+1]+W*f[pe+3]+V*f[pe+5]+oe*f[pe+7],ce[1]=W*f[pe+1]-oe*f[pe+3]-b*f[pe+5]-V*f[pe+7],ce[2]=V*f[pe+1]-b*f[pe+3]+oe*f[pe+5]+W*f[pe+7],ce[3]=oe*f[pe+1]-V*f[pe+3]+W*f[pe+5]-b*f[pe+7],ae[0]=y*(f[pe+0]+f[pe+4]),ae[3]=y*(f[pe+0]-f[pe+4]),ae[1]=re[0]+re[3],ae[2]=re[1]-re[2],Re[0]=ae[0]+ae[1],Re[1]=ae[3]+ae[2],Re[2]=ae[3]-ae[2],Re[3]=ae[0]-ae[1],f[pe+0]=Re[0]+ce[0],f[pe+1]=Re[1]+ce[1],f[pe+2]=Re[2]+ce[2],f[pe+3]=Re[3]+ce[3],f[pe+4]=Re[3]-ce[3],f[pe+5]=Re[2]-ce[2],f[pe+6]=Re[1]-ce[1],f[pe+7]=Re[0]-ce[0]}for(let ye=0;ye<8;++ye)re[0]=P*f[16+ye],re[1]=J*f[16+ye],re[2]=P*f[48+ye],re[3]=J*f[48+ye],ce[0]=b*f[8+ye]+W*f[24+ye]+V*f[40+ye]+oe*f[56+ye],ce[1]=W*f[8+ye]-oe*f[24+ye]-b*f[40+ye]-V*f[56+ye],ce[2]=V*f[8+ye]-b*f[24+ye]+oe*f[40+ye]+W*f[56+ye],ce[3]=oe*f[8+ye]-V*f[24+ye]+W*f[40+ye]-b*f[56+ye],ae[0]=y*(f[ye]+f[32+ye]),ae[3]=y*(f[ye]-f[32+ye]),ae[1]=re[0]+re[3],ae[2]=re[1]-re[2],Re[0]=ae[0]+ae[1],Re[1]=ae[3]+ae[2],Re[2]=ae[3]-ae[2],Re[3]=ae[0]-ae[1],f[0+ye]=Re[0]+ce[0],f[8+ye]=Re[1]+ce[1],f[16+ye]=Re[2]+ce[2],f[24+ye]=Re[3]+ce[3],f[32+ye]=Re[3]-ce[3],f[40+ye]=Re[2]-ce[2],f[48+ye]=Re[1]-ce[1],f[56+ye]=Re[0]-ce[0]}function E(f){for(let y=0;y<64;++y){const b=f[0][y],P=f[1][y],W=f[2][y];f[0][y]=b+1.5747*W,f[1][y]=b-.1873*P-.4682*W,f[2][y]=b+1.8556*P}}function Q(f,y,b){for(let P=0;P<64;++P)y[b+P]=bd.toHalfFloat(fe(f[P]))}function fe(f){return f<=1?Math.sign(f)*Math.pow(Math.abs(f),2.2):Math.sign(f)*Math.pow(A,Math.abs(f)-1)}function ge(f){return new DataView(f.array.buffer,f.offset.value,f.size)}function ve(f){const y=f.viewer.buffer.slice(f.offset.value,f.offset.value+f.size),b=new Uint8Array(ut(y)),P=new Uint8Array(b.length);return Tt(b),je(b,P),new DataView(P.buffer)}function He(f){const y=f.array.slice(f.offset.value,f.offset.value+f.size),b=tc(y),P=new Uint8Array(b.length);return Tt(b),je(b,P),new DataView(P.buffer)}function De(f){const y=f.viewer,b={value:f.offset.value},P=new Uint16Array(f.columns*f.lines*(f.inputChannels.length*f.type)),W=new Uint8Array(8192);let V=0;const J=new Array(f.inputChannels.length);for(let ze=0,Ee=f.inputChannels.length;ze<Ee;ze++)J[ze]={},J[ze].start=V,J[ze].end=J[ze].start,J[ze].nx=f.columns,J[ze].ny=f.lines,J[ze].size=f.type,V+=J[ze].nx*J[ze].ny*J[ze].size;const oe=me(y,b),re=me(y,b);if(re>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(oe<=re)for(let ze=0;ze<re-oe+1;ze++)W[ze+oe]=gt(y,b);const ce=new Uint16Array(65536),ae=M(W,ce),Re=Ye(y,b);St(f.array,y,b,Re,P,V);for(let ze=0;ze<f.inputChannels.length;++ze){const Ee=J[ze];for(let Ue=0;Ue<J[ze].size;++Ue)nt(P,Ee.start+Ue,Ee.nx,Ee.size,Ee.ny,Ee.nx*Ee.size,ae)}qe(ce,P,V);let ye=0;const pe=new Uint8Array(P.buffer.byteLength);for(let ze=0;ze<f.lines;ze++)for(let Ee=0;Ee<f.inputChannels.length;Ee++){const Ue=J[Ee],tt=Ue.nx*Ue.size,Et=new Uint8Array(P.buffer,Ue.end*2,tt*2);pe.set(Et,ye),ye+=tt*2,Ue.end+=tt}return new DataView(pe.buffer)}function Pe(f){const y=f.array.slice(f.offset.value,f.offset.value+f.size),b=tc(y),P=f.inputChannels.length*f.lines*f.columns*f.totalBytes,W=new ArrayBuffer(P),V=new DataView(W);let J=0,oe=0;const re=new Array(4);for(let ce=0;ce<f.lines;ce++)for(let ae=0;ae<f.inputChannels.length;ae++){let Re=0;switch(f.inputChannels[ae].pixelType){case 1:re[0]=J,re[1]=re[0]+f.columns,J=re[1]+f.columns;for(let pe=0;pe<f.columns;++pe){const ze=b[re[0]++]<<8|b[re[1]++];Re+=ze,V.setUint16(oe,Re,!0),oe+=2}break;case 2:re[0]=J,re[1]=re[0]+f.columns,re[2]=re[1]+f.columns,J=re[2]+f.columns;for(let pe=0;pe<f.columns;++pe){const ze=b[re[0]++]<<24|b[re[1]++]<<16|b[re[2]++]<<8;Re+=ze,V.setUint32(oe,Re,!0),oe+=4}break}}return V}function et(f){const y=f.viewer,b={value:f.offset.value},P=new Uint8Array(f.columns*f.lines*(f.inputChannels.length*f.type*2)),W={version:$e(y,b),unknownUncompressedSize:$e(y,b),unknownCompressedSize:$e(y,b),acCompressedSize:$e(y,b),dcCompressedSize:$e(y,b),rleCompressedSize:$e(y,b),rleUncompressedSize:$e(y,b),rleRawSize:$e(y,b),totalAcUncompressedCount:$e(y,b),totalDcUncompressedCount:$e(y,b),acCompression:$e(y,b)};if(W.version<2)throw new Error("EXRLoader.parse: "+Z.compression+" version "+W.version+" is unsupported");const V=new Array;let J=me(y,b)-2;for(;J>0;){const Ee=we(y.buffer,b),Ue=gt(y,b),tt=Ue>>2&3,Et=(Ue>>4)-1,Ft=new Int8Array([Et])[0],Rt=gt(y,b);V.push({name:Ee,index:Ft,type:Rt,compression:tt}),J-=Ee.length+3}const oe=Z.channels,re=new Array(f.inputChannels.length);for(let Ee=0;Ee<f.inputChannels.length;++Ee){const Ue=re[Ee]={},tt=oe[Ee];Ue.name=tt.name,Ue.compression=0,Ue.decoded=!1,Ue.type=tt.pixelType,Ue.pLinear=tt.pLinear,Ue.width=f.columns,Ue.height=f.lines}const ce={idx:new Array(3)};for(let Ee=0;Ee<f.inputChannels.length;++Ee){const Ue=re[Ee];for(let tt=0;tt<V.length;++tt){const Et=V[tt];Ue.name==Et.name&&(Ue.compression=Et.compression,Et.index>=0&&(ce.idx[Et.index]=Ee),Ue.offset=Ee)}}let ae,Re,ye;if(W.acCompressedSize>0)switch(W.acCompression){case 0:ae=new Uint16Array(W.totalAcUncompressedCount),St(f.array,y,b,W.acCompressedSize,ae,W.totalAcUncompressedCount);break;case 1:const Ee=f.array.slice(b.value,b.value+W.totalAcUncompressedCount),Ue=tc(Ee);ae=new Uint16Array(Ue.buffer),b.value+=W.totalAcUncompressedCount;break}if(W.dcCompressedSize>0){const Ee={array:f.array,offset:b,size:W.dcCompressedSize};Re=new Uint16Array(He(Ee).buffer),b.value+=W.dcCompressedSize}if(W.rleRawSize>0){const Ee=f.array.slice(b.value,b.value+W.rleCompressedSize),Ue=tc(Ee);ye=ut(Ue.buffer),b.value+=W.rleCompressedSize}let pe=0;const ze=new Array(re.length);for(let Ee=0;Ee<ze.length;++Ee)ze[Ee]=new Array;for(let Ee=0;Ee<f.lines;++Ee)for(let Ue=0;Ue<re.length;++Ue)ze[Ue].push(pe),pe+=re[Ue].width*f.type*2;it(ce,ze,re,ae,Re,P);for(let Ee=0;Ee<re.length;++Ee){const Ue=re[Ee];if(!Ue.decoded)switch(Ue.compression){case 2:let tt=0,Et=0;for(let Ft=0;Ft<f.lines;++Ft){let Rt=ze[Ee][tt];for(let At=0;At<Ue.width;++At){for(let _t=0;_t<2*Ue.type;++_t)P[Rt++]=ye[Et+_t*Ue.width*Ue.height];Et++}tt++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(P.buffer)}function we(f,y){const b=new Uint8Array(f);let P=0;for(;b[y.value+P]!=0;)P+=1;const W=new TextDecoder().decode(b.slice(y.value,y.value+P));return y.value=y.value+P+1,W}function Ge(f,y,b){const P=new TextDecoder().decode(new Uint8Array(f).slice(y.value,y.value+b));return y.value=y.value+b,P}function pt(f,y){const b=Le(f,y),P=Ye(f,y);return[b,P]}function Ke(f,y){const b=Ye(f,y),P=Ye(f,y);return[b,P]}function Le(f,y){const b=f.getInt32(y.value,!0);return y.value=y.value+4,b}function Ye(f,y){const b=f.getUint32(y.value,!0);return y.value=y.value+4,b}function at(f,y){const b=f[y.value];return y.value=y.value+1,b}function gt(f,y){const b=f.getUint8(y.value);return y.value=y.value+1,b}const $e=function(f,y){let b;return"getBigInt64"in DataView.prototype?b=Number(f.getBigInt64(y.value,!0)):b=f.getUint32(y.value+4,!0)+Number(f.getUint32(y.value,!0)<<32),y.value+=8,b};function v(f,y){const b=f.getFloat32(y.value,!0);return y.value+=4,b}function G(f,y){return bd.toHalfFloat(v(f,y))}function D(f){const y=(f&31744)>>10,b=f&1023;return(f>>15?-1:1)*(y?y===31?b?NaN:1/0:Math.pow(2,y-15)*(1+b/1024):6103515625e-14*(b/1024))}function me(f,y){const b=f.getUint16(y.value,!0);return y.value+=2,b}function Ne(f,y){return D(me(f,y))}function st(f,y,b,P){const W=b.value,V=[];for(;b.value<W+P-1;){const J=we(y,b),oe=Le(f,b),re=gt(f,b);b.value+=3;const ce=Le(f,b),ae=Le(f,b);V.push({name:J,pixelType:oe,pLinear:re,xSampling:ce,ySampling:ae})}return b.value+=1,V}function ht(f,y){const b=v(f,y),P=v(f,y),W=v(f,y),V=v(f,y),J=v(f,y),oe=v(f,y),re=v(f,y),ce=v(f,y);return{redX:b,redY:P,greenX:W,greenY:V,blueX:J,blueY:oe,whiteX:re,whiteY:ce}}function Xt(f,y){const b=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],P=gt(f,y);return b[P]}function on(f,y){const b=Le(f,y),P=Le(f,y),W=Le(f,y),V=Le(f,y);return{xMin:b,yMin:P,xMax:W,yMax:V}}function Mt(f,y){const b=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],P=gt(f,y);return b[P]}function en(f,y){const b=["ENVMAP_LATLONG","ENVMAP_CUBE"],P=gt(f,y);return b[P]}function Ut(f,y){const b=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],P=["ROUND_DOWN","ROUND_UP"],W=Ye(f,y),V=Ye(f,y),J=gt(f,y);return{xSize:W,ySize:V,levelMode:b[J&15],roundingMode:P[J>>4]}}function Fi(f,y){const b=v(f,y),P=v(f,y);return[b,P]}function Gn(f,y){const b=v(f,y),P=v(f,y),W=v(f,y);return[b,P,W]}function Vi(f,y,b,P,W){if(P==="string"||P==="stringvector"||P==="iccProfile")return Ge(y,b,W);if(P==="chlist")return st(f,y,b,W);if(P==="chromaticities")return ht(f,b);if(P==="compression")return Xt(f,b);if(P==="box2i")return on(f,b);if(P==="envmap")return en(f,b);if(P==="tiledesc")return Ut(f,b);if(P==="lineOrder")return Mt(f,b);if(P==="float")return v(f,b);if(P==="v2f")return Fi(f,b);if(P==="v3f")return Gn(f,b);if(P==="int")return Le(f,b);if(P==="rational")return pt(f,b);if(P==="timecode")return Ke(f,b);if(P==="preview")return b.value+=W,"skipped";b.value+=W}function _i(f,y){const b=Math.log2(f);return y=="ROUND_DOWN"?Math.floor(b):Math.ceil(b)}function Ws(f,y,b){let P=0;switch(f.levelMode){case"ONE_LEVEL":P=1;break;case"MIPMAP_LEVELS":P=_i(Math.max(y,b),f.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return P}function Xs(f,y,b,P){const W=new Array(f);for(let V=0;V<f;V++){const J=1<<V;let oe=y/J|0;P=="ROUND_UP"&&oe*J<y&&(oe+=1);const re=Math.max(oe,1);W[V]=(re+b-1)/b|0}return W}function Ta(){const f=this,y=f.offset,b={value:0};for(let P=0;P<f.tileCount;P++){const W=Le(f.viewer,y),V=Le(f.viewer,y);y.value+=8,f.size=Ye(f.viewer,y);const J=W*f.blockWidth,oe=V*f.blockHeight;f.columns=J+f.blockWidth>f.width?f.width-J:f.blockWidth,f.lines=oe+f.blockHeight>f.height?f.height-oe:f.blockHeight;const re=f.columns*f.totalBytes,ae=f.size<f.lines*re?f.uncompress(f):ge(f);y.value+=f.size;for(let Re=0;Re<f.lines;Re++){const ye=Re*f.columns*f.totalBytes;for(let pe=0;pe<f.inputChannels.length;pe++){const ze=Z.channels[pe].name,Ee=f.channelByteOffsets[ze]*f.columns,Ue=f.decodeChannels[ze];if(Ue===void 0)continue;b.value=ye+Ee;const tt=(f.height-(1+oe+Re))*f.outLineWidth;for(let Et=0;Et<f.columns;Et++){const Ft=tt+(Et+J)*f.outputChannels+Ue;f.byteArray[Ft]=f.getter(ae,b)}}}}}function Ma(){const f=this,y=f.offset,b={value:0};for(let P=0;P<f.height/f.blockHeight;P++){const W=Le(f.viewer,y)-Z.dataWindow.yMin;f.size=Ye(f.viewer,y),f.lines=W+f.blockHeight>f.height?f.height-W:f.blockHeight;const V=f.columns*f.totalBytes,oe=f.size<f.lines*V?f.uncompress(f):ge(f);y.value+=f.size;for(let re=0;re<f.blockHeight;re++){const ce=P*f.blockHeight,ae=re+f.scanOrder(ce);if(ae>=f.height)continue;const Re=re*V,ye=(f.height-1-ae)*f.outLineWidth;for(let pe=0;pe<f.inputChannels.length;pe++){const ze=Z.channels[pe].name,Ee=f.channelByteOffsets[ze]*f.columns,Ue=f.decodeChannels[ze];if(Ue!==void 0){b.value=Re+Ee;for(let tt=0;tt<f.columns;tt++){const Et=ye+tt*f.outputChannels+Ue;f.byteArray[Et]=f.getter(oe,b)}}}}}}function cl(f,y,b){const P={};if(f.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");P.version=f.getUint8(4);const W=f.getUint8(5);P.spec={singleTile:!!(W&2),longName:!!(W&4),deepFormat:!!(W&8),multiPart:!!(W&16)},b.value=8;let V=!0;for(;V;){const J=we(y,b);if(J==0)V=!1;else{const oe=we(y,b),re=Ye(f,b),ce=Vi(f,y,b,oe,re);ce===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${oe}'.`):P[J]=ce}}if(W&-7)throw console.error("THREE.EXRHeader:",P),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return P}function ll(f,y,b,P,W){const V={size:0,viewer:y,array:b,offset:P,width:f.dataWindow.xMax-f.dataWindow.xMin+1,height:f.dataWindow.yMax-f.dataWindow.yMin+1,inputChannels:f.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Qt};switch(f.compression){case"NO_COMPRESSION":V.blockHeight=1,V.uncompress=ge;break;case"RLE_COMPRESSION":V.blockHeight=1,V.uncompress=ve;break;case"ZIPS_COMPRESSION":V.blockHeight=1,V.uncompress=He;break;case"ZIP_COMPRESSION":V.blockHeight=16,V.uncompress=He;break;case"PIZ_COMPRESSION":V.blockHeight=32,V.uncompress=De;break;case"PXR24_COMPRESSION":V.blockHeight=16,V.uncompress=Pe;break;case"DWAA_COMPRESSION":V.blockHeight=32,V.uncompress=et;break;case"DWAB_COMPRESSION":V.blockHeight=256,V.uncompress=et;break;default:throw new Error("EXRLoader.parse: "+f.compression+" is unsupported")}const J={};for(const ae of f.channels)switch(ae.name){case"Y":case"R":case"G":case"B":case"A":J[ae.name]=!0,V.type=ae.pixelType}let oe=!1;if(J.R&&J.G&&J.B)oe=!J.A,V.outputChannels=4,V.decodeChannels={R:0,G:1,B:2,A:3};else if(J.Y)V.outputChannels=1,V.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(V.type==1)switch(W){case qn:V.getter=Ne;break;case ms:V.getter=me;break}else if(V.type==2)switch(W){case qn:V.getter=v;break;case ms:V.getter=G}else throw new Error("EXRLoader.parse: unsupported pixelType "+V.type+" for "+f.compression+".");V.columns=V.width;const re=V.width*V.height*V.outputChannels;switch(W){case qn:V.byteArray=new Float32Array(re),oe&&V.byteArray.fill(1,0,re);break;case ms:V.byteArray=new Uint16Array(re),oe&&V.byteArray.fill(15360,0,re);break;default:console.error("THREE.EXRLoader: unsupported type: ",W);break}let ce=0;for(const ae of f.channels)V.decodeChannels[ae.name]!==void 0&&(V.channelByteOffsets[ae.name]=ce),ce+=ae.pixelType*2;if(V.totalBytes=ce,V.outLineWidth=V.width*V.outputChannels,f.lineOrder==="INCREASING_Y"?V.scanOrder=ae=>ae:V.scanOrder=ae=>V.height-1-ae,V.outputChannels==4?(V.format=hi,V.colorSpace=Qt):(V.format=Ju,V.colorSpace=fs),f.spec.singleTile){V.blockHeight=f.tiles.ySize,V.blockWidth=f.tiles.xSize;const ae=Ws(f.tiles,V.width,V.height),Re=Xs(ae,V.width,f.tiles.xSize,f.tiles.roundingMode),ye=Xs(ae,V.height,f.tiles.ySize,f.tiles.roundingMode);V.tileCount=Re[0]*ye[0];for(let pe=0;pe<ae;pe++)for(let ze=0;ze<ye[pe];ze++)for(let Ee=0;Ee<Re[pe];Ee++)$e(y,P);V.decode=Ta.bind(V)}else{V.blockWidth=V.width;const ae=Math.ceil(V.height/V.blockHeight);for(let Re=0;Re<ae;Re++)$e(y,P);V.decode=Ma.bind(V)}return V}const Ea={value:0},N=new DataView(e),X=new Uint8Array(e),Z=cl(N,e,Ea),j=ll(Z,N,X,Ea,this.type);return j.decode(),{header:Z,width:j.width,height:j.height,data:j.byteArray,format:j.format,colorSpace:j.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=Tn,o.magFilter=Tn,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,i)}}const If={VERTEX:"vertex",FRAGMENT:"fragment"},Bt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},Xc=["x","y","z","w"];function dm(s,e=!1){let t="{";s.isNode===!0&&(t+=s.id);for(const{property:n,childNode:i}of Mc(s))t+=","+n.slice(0,-4)+":"+i.getCacheKey(e);return t+="}",t}function*Mc(s,e=!1){for(const t in s){if(t.startsWith("_")===!0)continue;const n=s[t];if(Array.isArray(n)===!0)for(let i=0;i<n.length;i++){const r=n[i];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:i,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const i in n){const r=n[i];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:i,childNode:r})}}}function Os(s){if(s==null)return null;const e=typeof s;return s.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":s.isVector2===!0?"vec2":s.isVector3===!0?"vec3":s.isVector4===!0?"vec4":s.isMatrix3===!0?"mat3":s.isMatrix4===!0?"mat4":s.isColor===!0?"color":s instanceof ArrayBuffer?"ArrayBuffer":null}function fm(s,...e){const t=s?s.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),s==="color"?new We(...e):t==="vec2"?new Ve(...e):t==="vec3"?new U(...e):t==="vec4"?new vt(...e):t==="mat3"?new ct(...e):t==="mat4"?new ot(...e):s==="bool"?e[0]||!1:s==="float"||s==="int"||s==="uint"?e[0]||0:s==="string"?e[0]||"":s==="ArrayBuffer"?mm(e[0]):null}function pm(s){let e="";const t=new Uint8Array(s);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function mm(s){return Uint8Array.from(atob(s),e=>e.charCodeAt(0)).buffer}const Pf=new Map;let GA=0;class Xe extends Qi{constructor(e=null){super(),this.nodeType=e,this.updateType=Bt.NONE,this.updateBeforeType=Bt.NONE,this.uuid=Bc.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.isNode=!0,Object.defineProperty(this,"id",{value:GA++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,Bt.FRAME)}onRenderUpdate(e){return this.onUpdate(e,Bt.RENDER)}onObjectUpdate(e){return this.onUpdate(e,Bt.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:e}of Mc(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=dm(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const i of Object.values(n))i&&i.isNode===!0&&i.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let i=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0||e.context.tempRead===!1){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const c of Object.values(o))c&&c.isNode===!0&&c.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);i=c.snippet,i===void 0&&(i=this.generate(e)||"",c.snippet=i),i=e.format(i,a,t)}else i=this.generate(e,t)||"";return e.removeChain(this),i}getSerializeChildren(){return Mc(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:i,index:r,childNode:o}of t)r!==void 0?(n[i]===void 0&&(n[i]=Number.isInteger(r)?[]:{}),n[i][r]=o.toJSON(e.meta).uuid):n[i]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const i=[];for(const r of e.inputNodes[n])i.push(t[r]);this[n]=i}else if(typeof e.inputNodes[n]=="object"){const i={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];i[r]=t[o]}this[n]=i}else{const i=e.inputNodes[n];this[n]=t[i]}}}toJSON(e){const{uuid:t,type:n}=this,i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},i!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(i){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function he(s,e){if(typeof e!="function"||!s)throw new Error(`Node class ${s} is not a class`);if(Pf.has(s)){console.warn(`Redefinition of node class ${s}`);return}Pf.set(s,e),e.type=s}class kt extends Xe{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const i=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(e.context.tempRead!==!1&&r.propertyName!==void 0)return e.format(r.propertyName,i,t);if(e.context.tempWrite!==!1&&i!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,i),a=e.getVarFromNode(this,null,i),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),r.snippet=o,r.propertyName=c,e.format(r.propertyName,i,t)}}return super.build(e,t)}}he("TempNode",kt);class So extends Xe{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}he("ArrayElementNode",So);class ph extends Xe{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const i of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(i))&&(n=i);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,i=this.getNodeType(e),r=n.build(e,i);return e.format(r,i,t)}}he("ConvertNode",ph);class gm extends kt{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),i=this.nodes,r=e.getComponentType(n),o=[];for(const c of i){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),o.push(l)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}he("JoinNode",gm);const WA=Xc.join("");class Lu extends Xe{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(Xc.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,i=e.getTypeLength(n.getNodeType(e));let r=null;if(i>1){let o=null;this.getVectorLength()>=i&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,o);this.components.length===i&&this.components===WA.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}he("SplitNode",Lu);class _m extends kt{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:i}=this,r=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=i.build(e,o),c=t.build(e,r),l=e.getTypeLength(r),u=[];for(let h=0;h<l;h++){const d=Xc[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(r)}( ${u.join(", ")} )`}}he("SetNode",_m);class qc extends Xe{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?Os(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=Os(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=pm(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?fm(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}he("InputNode",qc);class mi extends qc{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}he("ConstNode",mi);let mo=null;const Hr=new Map;function H(s,e){if(Hr.has(s)){console.warn(`Redefinition of node element ${s}`);return}if(typeof e!="function")throw new Error(`Node element ${s} is not a function`);Hr.set(s,e)}const Df=s=>s.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),xm={setup(s,e){const t=e.shift();return s(jc(t),...e)},get(s,e,t){if(typeof e=="string"&&s[e]===void 0){if(s.isStackNode!==!0&&e==="assign")return(...n)=>(mo.assign(t,...n),t);if(Hr.has(e)){const n=Hr.get(e);return s.isStackNode?(...i)=>t.add(n(...i)):(...i)=>n(t,...i)}else{if(e==="self")return s;if(e.endsWith("Assign")&&Hr.has(e.slice(0,e.length-6))){const n=Hr.get(e.slice(0,e.length-6));return s.isStackNode?(...i)=>t.assign(i[0],n(...i)):(...i)=>t.assign(n(t,...i))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=Df(e),Ce(new Lu(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Df(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>Ce(new _m(s,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),Ce(new Lu(s,e));if(/^\d+$/.test(e)===!0)return Ce(new So(t,new mi(Number(e),"uint")))}}}return Reflect.get(s,e,t)},set(s,e,t,n){return typeof e=="string"&&s[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(s,e,t,n)}},eu=new WeakMap,Of=new WeakMap,XA=function(s,e=null){const t=Os(s);if(t==="node"){let n=eu.get(s);return n===void 0&&(n=new Proxy(s,xm),eu.set(s,n),eu.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return Ce(Iu(s,e));if(t==="shader")return ie(s)}return s},qA=function(s,e=null){for(const t in s)s[t]=Ce(s[t],e);return s},YA=function(s,e=null){const t=s.length;for(let n=0;n<t;n++)s[n]=Ce(s[n],e);return s},$A=function(s,e=null,t=null,n=null){const i=r=>Ce(n!==null?Object.assign(r,n):r);return e===null?(...r)=>i(new s(...Jr(r))):t!==null?(t=Ce(t),(...r)=>i(new s(e,...Jr(r),t))):(...r)=>i(new s(e,...Jr(r)))},jA=function(s,...e){return Ce(new s(...Jr(e)))};class KA extends Xe{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=Of.get(e.constructor);o===void 0&&(o=new WeakMap,Of.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=Ce(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),Ce(a.call(n))}const i=t.jsFunc,r=n!==null?i(n,e.stack,e):i(e.stack,e);return Ce(r)}setup(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class ZA extends Xe{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return jc(e),Ce(new KA(this,e))}setup(){return this.call()}}const JA=[!1,!0],QA=[0,1,2,3],eb=[-1,-2],vm=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],mh=new Map;for(const s of JA)mh.set(s,new mi(s));const gh=new Map;for(const s of QA)gh.set(s,new mi(s,"uint"));const _h=new Map([...gh].map(s=>new mi(s.value,"int")));for(const s of eb)_h.set(s,new mi(s,"int"));const Yc=new Map([..._h].map(s=>new mi(s.value)));for(const s of vm)Yc.set(s,new mi(s));for(const s of vm)Yc.set(-s,new mi(-s));const $c={bool:mh,uint:gh,ints:_h,float:Yc},Uf=new Map([...mh,...Yc]),Iu=(s,e)=>Uf.has(s)?Uf.get(s):s.isNode===!0?s:new mi(s,e),tb=s=>{try{return s.getNodeType()}catch{return}},Ot=function(s,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(s)&&t.every(i=>typeof i!="object"))&&(t=[fm(s,...t)]),t.length===1&&e!==null&&e.has(t[0]))return Ce(e.get(t[0]));if(t.length===1){const i=Iu(t[0],s);return tb(i)===s?Ce(i):Ce(new ph(i,s))}const n=t.map(i=>Iu(i));return Ce(new gm(n,s))}},Ff=s=>s&&s.value,nb=s=>s!=null?s.nodeType||s.convertTo||(typeof s=="string"?s:null):null;function jo(s){return new Proxy(new ZA(s),xm)}const Ce=(s,e=null)=>XA(s,e),jc=(s,e=null)=>new qA(s,e),Jr=(s,e=null)=>new YA(s,e),K=(...s)=>new $A(...s),de=(...s)=>new jA(...s),ie=s=>{const e=new jo(s),t=(...n)=>{let i;return jc(n),n[0]&&n[0].isNode?i=[...n]:i=n[0],e.call(i)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};he("ShaderNode",jo);const Vf=s=>{mo=s},ib=()=>mo,mt=(...s)=>mo.if(...s);function sb(s){return mo&&mo.add(s),s}H("append",sb);const rb=new Ot("color"),C=new Ot("float",$c.float),O=new Ot("int",$c.ints),Ie=new Ot("uint",$c.uint),hr=new Ot("bool",$c.bool),ke=new Ot("vec2"),ar=new Ot("ivec2"),ob=new Ot("uvec2"),ab=new Ot("bvec2"),k=new Ot("vec3"),cb=new Ot("ivec3"),_a=new Ot("uvec3"),ym=new Ot("bvec3"),Be=new Ot("vec4"),lb=new Ot("ivec4"),ub=new Ot("uvec4"),hb=new Ot("bvec4"),xh=new Ot("mat2"),db=new Ot("imat2"),fb=new Ot("umat2"),pb=new Ot("bmat2"),Pi=new Ot("mat3"),mb=new Ot("imat3"),gb=new Ot("umat3"),_b=new Ot("bmat3"),Qr=new Ot("mat4"),xb=new Ot("imat4"),vb=new Ot("umat4"),yb=new Ot("bmat4"),Sb=(s="")=>Ce(new mi(s,"string")),Tb=s=>Ce(new mi(s,"ArrayBuffer"));H("color",rb);H("float",C);H("int",O);H("uint",Ie);H("bool",hr);H("vec2",ke);H("ivec2",ar);H("uvec2",ob);H("bvec2",ab);H("vec3",k);H("ivec3",cb);H("uvec3",_a);H("bvec3",ym);H("vec4",Be);H("ivec4",lb);H("uvec4",ub);H("bvec4",hb);H("mat2",xh);H("imat2",db);H("umat2",fb);H("bmat2",pb);H("mat3",Pi);H("imat3",mb);H("umat3",gb);H("bmat3",_b);H("mat4",Qr);H("imat4",xb);H("umat4",vb);H("bmat4",yb);H("string",Sb);H("arrayBuffer",Tb);const Mb=K(So),Eb=(s,e)=>Ce(new ph(Ce(s),e));H("element",Mb);H("convert",Eb);class Sm extends kt{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return Xc.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:i}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=i.build(e,o),l=i.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(r){const d=e.getVarFromNode(this,null,o),p=e.getPropertyName(d);e.addLineFlowCode(`${p} = ${c}`);const _=n.node.context({assign:!0}).build(e);for(let x=0;x<n.components.length;x++){const g=n.components[x];e.addLineFlowCode(`${_}.${g} = ${p}[ ${x} ]`)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,o,t)}}const Ab=K(Sm);he("AssignNode",Sm);H("assign",Ab);class Tm extends Xe{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,i=this.getNodeType(e),r=e.getVaryingFromNode(this,t,i);r.needsInterpolation||(r.needsInterpolation=e.shaderStage==="fragment");const o=e.getPropertyName(r,If.VERTEX);return e.flowNodeFromShaderStage(If.VERTEX,n,i,o),e.getPropertyName(r)}}const tn=K(Tm);H("varying",tn);he("VaryingNode",Tm);class Kc extends Xe{constructor(e,t=null){super(t),this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const i=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(i)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):tn(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}}const Pn=(s,e)=>Ce(new Kc(s,e));he("AttributeNode",Kc);class Mm extends Xe{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const Em=K(Mm);H("bypass",Em);he("BypassNode",Mm);let bb=0;class wb{constructor(){this.id=bb++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class Am extends Xe{constructor(e,t=new wb){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),i=this.cache||e.globalCache;e.setCache(i);const r=this.node.build(e,...t);return e.setCache(n),r}}const Ec=K(Am),Nb=s=>Ec(s,null);H("cache",Ec);H("globalCache",Nb);he("CacheNode",Am);class vh extends Xe{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const i=this.node.build(e,t);return e.setContext(n),i}}const _s=K(vh),Rb=(s,e)=>_s(s,{label:e});H("context",_s);H("label",Rb);he("ContextNode",vh);class Zi extends Xe{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let i;if(n===Zi.VERTEX)i=e.getVertexIndex();else if(n===Zi.INSTANCE)i=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=i:r=tn(this).build(e,t),r}}Zi.VERTEX="vertex";Zi.INSTANCE="instance";const Cb=de(Zi,Zi.VERTEX),bm=de(Zi,Zi.INSTANCE);he("IndexNode",Zi);class yh{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class wm extends Xe{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,i=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(i),o=t.build(e,i.type);return e.addLineFlowCode(`${r} = ${o}`),r}}const na=K(wm);H("temp",na);H("toVar",(...s)=>na(...s).append());he("VarNode",wm);class Pt extends Xe{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const En=(s,e)=>Ce(new Pt(s,e)),zi=(s,e)=>Ce(new Pt(s,e,!0)),Zt=de(Pt,"vec4","DiffuseColor"),Us=de(Pt,"float","Roughness"),Ac=de(Pt,"float","Metalness"),Pu=de(Pt,"float","Clearcoat"),bc=de(Pt,"float","ClearcoatRoughness"),Gr=de(Pt,"vec3","Sheen"),Sh=de(Pt,"float","SheenRoughness"),Th=de(Pt,"float","Iridescence"),Nm=de(Pt,"float","IridescenceIOR"),Rm=de(Pt,"float","IridescenceThickness"),Du=de(Pt,"float","AlphaT"),nr=de(Pt,"float","Anisotropy"),lc=de(Pt,"vec3","AnisotropyT"),eo=de(Pt,"vec3","AnisotropyB"),Mi=de(Pt,"color","SpecularColor"),wc=de(Pt,"float","SpecularF90"),Ou=de(Pt,"float","Shininess"),Lb=de(Pt,"vec4","Output"),to=de(Pt,"float","dashSize"),Nc=de(Pt,"float","gapSize");de(Pt,"float","pointWidth");const uc=de(Pt,"float","IOR"),Uu=de(Pt,"float","Transmission"),Cm=de(Pt,"float","Thickness"),Lm=de(Pt,"float","AttenuationDistance"),Im=de(Pt,"color","AttenuationColor");he("PropertyNode",Pt);class Ib extends Pt{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}he("ParameterNode",Ib);class Mh extends Xe{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const i of t)i.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}K(Mh);he("CodeNode",Mh);class Pb extends Mh{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),i=n.name,r=n.type,o=e.getCodeFromNode(this,r);i!==""&&(o.name=i);const a=e.getPropertyName(o);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),p=l[h].build(e,"property");c=c.replace(d,p)}return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}he("FunctionNode",Pb);class Eh extends Xe{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const Db=s=>new Eh(s),Pm=s=>new Eh(s,!0);Pm("frame");Pm("render");const Ob=Db("object");he("UniformGroupNode",Eh);class mr extends qc{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=Ob}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(i=>{const r=e(i,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),i=this.getUniformHash(e);let r=e.getNodeFromHash(i);r===void 0&&(e.setHashNode(this,i),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const zt=(s,e)=>{const t=nb(e||s),n=s&&s.isNode===!0?s.node&&s.node.value||s.value:s;return Ce(new mr(n,t))};he("UniformNode",mr);class Dm extends Kc{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const ns=(...s)=>Ce(new Dm(...s));he("UVNode",Dm);class Om extends Xe{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),i=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${i} )`,this.getNodeType(e),t)}}const Ah=K(Om);H("textureSize",Ah);he("TextureSizeNode",Om);class Kt extends kt{constructor(e,t,n,...i){if(super(),this.op=e,i.length>0){let r=n;for(let o=0;o<i.length;o++)r=new Kt(e,r,i[o]);n=r}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,i=this.aNode,r=this.bNode,o=i.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,i=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=i.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=i.build(e,a),u=typeof r<"u"?r.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const ii=K(Kt,"+"),rn=K(Kt,"-"),yt=K(Kt,"*"),zs=K(Kt,"/"),Ub=K(Kt,"%"),Fb=K(Kt,"=="),Vb=K(Kt,"!="),Bb=K(Kt,"<"),Um=K(Kt,">"),zb=K(Kt,"<="),kb=K(Kt,">="),Hb=K(Kt,"&&"),Gb=K(Kt,"||"),Wb=K(Kt,"!"),Xb=K(Kt,"^^"),qb=K(Kt,"&"),Yb=K(Kt,"~"),$b=K(Kt,"|"),jb=K(Kt,"^"),Kb=K(Kt,"<<"),Zb=K(Kt,">>");H("add",ii);H("sub",rn);H("mul",yt);H("div",zs);H("remainder",Ub);H("equal",Fb);H("notEqual",Vb);H("lessThan",Bb);H("greaterThan",Um);H("lessThanEqual",zb);H("greaterThanEqual",kb);H("and",Hb);H("or",Gb);H("not",Wb);H("xor",Xb);H("bitAnd",qb);H("bitNot",Yb);H("bitOr",$b);H("bitXor",jb);H("shiftLeft",Kb);H("shiftRight",Zb);he("OperatorNode",Kt);class z extends kt{constructor(e,t,n=null,i=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=i}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,i=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(i)?0:e.getTypeLength(i);return r>o&&r>a?t:o>a?n:a>r?i:t}getNodeType(e){const t=this.method;return t===z.LENGTH||t===z.DISTANCE||t===z.DOT?"float":t===z.CROSS?"vec3":t===z.ALL?"bool":t===z.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===z.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,i=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===z.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=Be(k(h),0):u=Be(k(u),0);const d=yt(u,h).xyz;return kn(d).build(e,t)}else{if(n===z.NEGATE)return e.format("( - "+o.build(e,r)+" )",i,t);if(n===z.ONE_MINUS)return rn(1,o).build(e,t);if(n===z.RECIPROCAL)return zs(1,o).build(e,t);if(n===z.DIFFERENCE)return ln(rn(o,a)).build(e,t);{const u=[];return n===z.CROSS||n===z.MOD?u.push(o.build(e,i),a.build(e,i)):n===z.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l&&(n===z.MIN||n===z.MAX)||n===z.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===z.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===z.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,i)}( ${u.join(", ")} )`,i,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}z.ALL="all";z.ANY="any";z.EQUALS="equals";z.RADIANS="radians";z.DEGREES="degrees";z.EXP="exp";z.EXP2="exp2";z.LOG="log";z.LOG2="log2";z.SQRT="sqrt";z.INVERSE_SQRT="inversesqrt";z.FLOOR="floor";z.CEIL="ceil";z.NORMALIZE="normalize";z.FRACT="fract";z.SIN="sin";z.COS="cos";z.TAN="tan";z.ASIN="asin";z.ACOS="acos";z.ATAN="atan";z.ABS="abs";z.SIGN="sign";z.LENGTH="length";z.NEGATE="negate";z.ONE_MINUS="oneMinus";z.DFDX="dFdx";z.DFDY="dFdy";z.ROUND="round";z.RECIPROCAL="reciprocal";z.TRUNC="trunc";z.FWIDTH="fwidth";z.BITCAST="bitcast";z.ATAN2="atan2";z.MIN="min";z.MAX="max";z.MOD="mod";z.STEP="step";z.REFLECT="reflect";z.DISTANCE="distance";z.DIFFERENCE="difference";z.DOT="dot";z.CROSS="cross";z.POW="pow";z.TRANSFORM_DIRECTION="transformDirection";z.MIX="mix";z.CLAMP="clamp";z.REFRACT="refract";z.SMOOTHSTEP="smoothstep";z.FACEFORWARD="faceforward";const Fm=C(1e-6);C(1e6);const Bf=C(Math.PI);C(Math.PI*2);const Vm=K(z,z.ALL),Jb=K(z,z.ANY),Qb=K(z,z.EQUALS),ew=K(z,z.RADIANS),tw=K(z,z.DEGREES),Bm=K(z,z.EXP),Fu=K(z,z.EXP2),zm=K(z,z.LOG),Zc=K(z,z.LOG2),gr=K(z,z.SQRT),nw=K(z,z.INVERSE_SQRT),To=K(z,z.FLOOR),km=K(z,z.CEIL),kn=K(z,z.NORMALIZE),Jc=K(z,z.FRACT),ds=K(z,z.SIN),Is=K(z,z.COS),iw=K(z,z.TAN),sw=K(z,z.ASIN),rw=K(z,z.ACOS),ow=K(z,z.ATAN),ln=K(z,z.ABS),bh=K(z,z.SIGN),Ko=K(z,z.LENGTH),aw=K(z,z.NEGATE),cw=K(z,z.ONE_MINUS),lw=K(z,z.DFDX),uw=K(z,z.DFDY),hw=K(z,z.ROUND),dw=K(z,z.RECIPROCAL),Hm=K(z,z.TRUNC),fw=K(z,z.FWIDTH);K(z,z.BITCAST);const pw=K(z,z.ATAN2),go=K(z,z.MIN),si=K(z,z.MAX),mw=K(z,z.MOD),gw=K(z,z.STEP),_w=K(z,z.REFLECT),xw=K(z,z.DISTANCE),vw=K(z,z.DIFFERENCE),Mo=K(z,z.DOT),Gm=K(z,z.CROSS),ji=K(z,z.POW),Wm=K(z,z.POW,2),yw=K(z,z.POW,3),Sw=K(z,z.POW,4),Tw=K(z,z.TRANSFORM_DIRECTION),Mw=s=>yt(bh(s),ji(ln(s),1/3)),Ew=s=>Mo(s,s),Nn=K(z,z.MIX),_o=(s,e=0,t=1)=>Ce(new z(z.CLAMP,Ce(s),Ce(e),Ce(t))),Aw=s=>_o(s),Xm=K(z,z.REFRACT),ys=K(z,z.SMOOTHSTEP),bw=K(z,z.FACEFORWARD),ww=(s,e,t)=>Nn(e,t,s),Nw=(s,e,t)=>ys(e,t,s);H("all",Vm);H("any",Jb);H("equals",Qb);H("radians",ew);H("degrees",tw);H("exp",Bm);H("exp2",Fu);H("log",zm);H("log2",Zc);H("sqrt",gr);H("inverseSqrt",nw);H("floor",To);H("ceil",km);H("normalize",kn);H("fract",Jc);H("sin",ds);H("cos",Is);H("tan",iw);H("asin",sw);H("acos",rw);H("atan",ow);H("abs",ln);H("sign",bh);H("length",Ko);H("lengthSq",Ew);H("negate",aw);H("oneMinus",cw);H("dFdx",lw);H("dFdy",uw);H("round",hw);H("reciprocal",dw);H("trunc",Hm);H("fwidth",fw);H("atan2",pw);H("min",go);H("max",si);H("mod",mw);H("step",gw);H("reflect",_w);H("distance",xw);H("dot",Mo);H("cross",Gm);H("pow",ji);H("pow2",Wm);H("pow3",yw);H("pow4",Sw);H("transformDirection",Tw);H("mix",ww);H("clamp",_o);H("refract",Xm);H("smoothstep",Nw);H("faceForward",bw);H("difference",vw);H("saturate",Aw);H("cbrt",Mw);he("MathNode",z);const Rw=ie(s=>{const{value:e}=s,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),i=t.mul(.0773993808),r=t.lessThanEqual(.04045),o=Nn(n,i,r);return Be(o,e.a)}),Cw=ie(s=>{const{value:e}=s,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),i=t.mul(12.92),r=t.lessThanEqual(.0031308),o=Nn(n,i,r);return Be(o,e.a)}),zf=s=>{let e=null;return s===Qt?e="Linear":s===yn&&(e="sRGB"),e},qm=(s,e)=>zf(s)+"To"+zf(e);class jn extends kt{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===jn.LINEAR_TO_LINEAR?t:Lw[e]({value:t})}}jn.LINEAR_TO_LINEAR="LinearToLinear";jn.LINEAR_TO_sRGB="LinearTosRGB";jn.sRGB_TO_LINEAR="sRGBToLinear";const Lw={[jn.LINEAR_TO_sRGB]:Cw,[jn.sRGB_TO_LINEAR]:Rw},Iw=(s,e)=>Ce(new jn(qm(Qt,e),Ce(s))),Ym=(s,e)=>Ce(new jn(qm(e,Qt),Ce(s))),Pw=K(jn,jn.LINEAR_TO_sRGB),Dw=K(jn,jn.sRGB_TO_LINEAR);H("linearTosRGB",Pw);H("sRGBToLinear",Dw);H("linearToColorSpace",Iw);H("colorSpaceToLinear",Ym);he("ColorSpaceNode",jn);class $m extends Xe{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),i=this.snippet;if(n==="void")e.addLineFlowCode(i);else return e.format(`( ${i} )`,n,t)}}const Qc=K($m);he("ExpressionNode",$m);class jm extends mr{constructor(e){super(0),this.textureNode=e,this.updateType=Bt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:i,height:r}=n;this.value=Math.log2(Math.max(i,r))}}}const Ow=K(jm);he("MaxMipLevelNode",jm);class Eo extends mr{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=Bt.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return ns(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return zt(t.matrix).mul(k(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?Bt.FRAME:Bt.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let i=this.levelNode;i===null&&e.context.getTextureLevel&&(i=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=i,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,i,r,o,a){const c=this.value;let l;return i?l=e.generateTextureLevel(c,t,n,i,r):a?l=e.generateTextureGrad(c,t,n,a,r):o?l=e.generateTextureCompare(c,t,n,o,r):this.sampler===!1?l=e.generateTextureLoad(c,t,n,r):l=e.generateTexture(c,t,n,r),l}generate(e,t){const n=e.getNodeProperties(this),i=this.value;if(!i||i.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:p,gradNode:_}=n,x=this.generateUV(e,u),g=h?h.build(e,"float"):null,m=p?p.build(e,"int"):null,T=d?d.build(e,"float"):null,S=_?[_[0].build(e,"vec2"),_[1].build(e,"vec2")]:null,w=e.getVarFromNode(this);a=e.getPropertyName(w);const F=this.generateSnippet(e,r,x,g,m,T,S);e.addLineFlowCode(`${a} = ${F}`),e.context.tempWrite!==!1&&(o.snippet=F,o.propertyName=a)}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(i)&&(c=Ym(Qc(c,l),i.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,Ce(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(Ow(t)),t.referenceNode=this,Ce(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return Ah(this,e)}compare(e){const t=this.clone();return t.compareNode=Ce(e),t.referenceNode=this,Ce(t)}grad(e,t){const n=this.clone();return n.gradNode=[Ce(e),Ce(t)],n.referenceNode=this,Ce(n)}depth(e){const t=this.clone();return t.depthNode=Ce(e),t.referenceNode=this,Ce(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const ni=K(Eo),rr=(...s)=>ni(...s).setSampler(!1);H("texture",ni);he("TextureNode",Eo);class el extends mr{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const wh=(s,e,t)=>Ce(new el(s,e,t));he("BufferNode",el);class Uw extends So{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class Km extends el{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=Bt.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),i=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const o=r*4;t[o]=e[r]}else if(i==="color")for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.r,t[o+1]=a.g,t[o+2]=a.b||0}else for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z||0,t[o+3]=a.w||0}}setup(e){const t=this.array.length;return this._elementType=this.elementType===null?Os(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType),this.value=new Float32Array(t*4),this.bufferCount=t,super.setup(e)}element(e){return Ce(new Uw(this,Ce(e)))}}const Vu=(s,e)=>Ce(new Km(s,e));he("UniformsNode",Km);class Fw extends So{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),i=this.getNodeType();return e.format(t,n,i)}}class Ao extends Xe{constructor(e,t,n=null,i=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=i,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=Bt.OBJECT}element(e){return Ce(new Fw(this,Ce(e)))}setNodeType(e){let t=null;this.count!==null?t=wh(null,e,this.count):Array.isArray(this.getValueFromReference())?t=Vu(null,e):e==="texture"?t=ni(null):t=zt(null,e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let i=1;i<t.length;i++)n=n[t[i]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const Di=(s,e,t)=>Ce(new Ao(s,e,t)),Vw=(s,e,t,n)=>Ce(new Ao(s,e,n,t));he("ReferenceNode",Ao);class Zm extends Ao{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const Jm=(s,e,t)=>Ce(new Zm(s,e,t));he("MaterialReferenceNode",Zm);class Qe extends Xe{constructor(e=Qe.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=Bt.OBJECT,this._uniformNode=new mr(null)}getNodeType(){const e=this.scope;if(e===Qe.WORLD_MATRIX||e===Qe.VIEW_MATRIX)return"mat4";if(e===Qe.NORMAL_MATRIX)return"mat3";if(e===Qe.POSITION||e===Qe.VIEW_POSITION||e===Qe.DIRECTION||e===Qe.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,i=this.scope;if(i===Qe.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(i===Qe.NORMAL_MATRIX)n.value=t.normalMatrix;else if(i===Qe.WORLD_MATRIX)n.value=t.matrixWorld;else if(i===Qe.POSITION)n.value=n.value||new U,n.value.setFromMatrixPosition(t.matrixWorld);else if(i===Qe.SCALE)n.value=n.value||new U,n.value.setFromMatrixScale(t.matrixWorld);else if(i===Qe.DIRECTION)n.value=n.value||new U,t.getWorldDirection(n.value);else if(i===Qe.VIEW_POSITION){const r=e.camera;n.value=n.value||new U,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Qe.WORLD_MATRIX||t===Qe.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Qe.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Qe.POSITION||t===Qe.VIEW_POSITION||t===Qe.DIRECTION||t===Qe.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Qe.VIEW_MATRIX="viewMatrix";Qe.NORMAL_MATRIX="normalMatrix";Qe.WORLD_MATRIX="worldMatrix";Qe.POSITION="position";Qe.SCALE="scale";Qe.VIEW_POSITION="viewPosition";Qe.DIRECTION="direction";K(Qe,Qe.DIRECTION);K(Qe,Qe.VIEW_MATRIX);K(Qe,Qe.NORMAL_MATRIX);K(Qe,Qe.WORLD_MATRIX);const Bu=K(Qe,Qe.POSITION);K(Qe,Qe.SCALE);const Qm=K(Qe,Qe.VIEW_POSITION);he("Object3DNode",Qe);class rt extends Qe{constructor(e=rt.POSITION){super(e),this.updateType=Bt.RENDER}getNodeType(e){const t=this.scope;return t===rt.PROJECTION_MATRIX||t===rt.PROJECTION_MATRIX_INVERSE?"mat4":t===rt.NEAR||t===rt.FAR||t===rt.LOG_DEPTH?"float":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,i=this.scope;i===rt.VIEW_MATRIX?n.value=t.matrixWorldInverse:i===rt.PROJECTION_MATRIX?n.value=t.projectionMatrix:i===rt.PROJECTION_MATRIX_INVERSE?n.value=t.projectionMatrixInverse:i===rt.NEAR?n.value=t.near:i===rt.FAR?n.value=t.far:i===rt.LOG_DEPTH?n.value=2/(Math.log(t.far+1)/Math.LN2):(this.object3d=t,super.update(e))}generate(e){const t=this.scope;return t===rt.PROJECTION_MATRIX||t===rt.PROJECTION_MATRIX_INVERSE?this._uniformNode.nodeType="mat4":(t===rt.NEAR||t===rt.FAR||t===rt.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(e)}}rt.PROJECTION_MATRIX="projectionMatrix";rt.PROJECTION_MATRIX_INVERSE="projectionMatrixInverse";rt.NEAR="near";rt.FAR="far";rt.LOG_DEPTH="logDepth";const Hi=de(rt,rt.PROJECTION_MATRIX);de(rt,rt.PROJECTION_MATRIX_INVERSE);const tu=de(rt,rt.NEAR),nu=de(rt,rt.FAR),Bw=de(rt,rt.LOG_DEPTH),Ts=de(rt,rt.VIEW_MATRIX);de(rt,rt.NORMAL_MATRIX);de(rt,rt.WORLD_MATRIX);const zw=de(rt,rt.POSITION);he("CameraNode",rt);class Rn extends Qe{constructor(e=Rn.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}de(Rn,Rn.DIRECTION);const dr=de(Rn,Rn.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),eg=de(Rn,Rn.NORMAL_MATRIX),ia=de(Rn,Rn.WORLD_MATRIX);de(Rn,Rn.POSITION);de(Rn,Rn.SCALE);de(Rn,Rn.VIEW_POSITION);he("ModelNode",Rn);class hn extends Xe{constructor(e=hn.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===hn.GEOMETRY)e.hasGeometryAttribute("normal")===!1?n=k(0,1,0):n=Pn("normal","vec3");else if(t===hn.LOCAL)n=tn(Rc);else if(t===hn.VIEW){const i=eg.mul(Oi);n=kn(tn(i))}else if(t===hn.WORLD){const i=ks.transformDirection(Ts);n=kn(tn(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}hn.GEOMETRY="geometry";hn.LOCAL="local";hn.VIEW="view";hn.WORLD="world";const Rc=de(hn,hn.GEOMETRY),Oi=de(hn,hn.LOCAL).temp("Normal"),ks=de(hn,hn.VIEW),tg=de(hn,hn.WORLD),nn=En("vec3","TransformedNormalView"),ng=nn.transformDirection(Ts).normalize(),Wr=En("vec3","TransformedClearcoatNormalView");he("NormalNode",hn);const kf=new Map;class se extends Xe{constructor(e){super(),this.scope=e}getCache(e,t){let n=kf.get(e);return n===void 0&&(n=Jm(e,t),kf.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let i=null;if(n===se.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?i=r.mul(this.getTexture("map")):i=r}else if(n===se.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?i=r.mul(this.getTexture("alpha")):i=r}else if(n===se.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?i=this.getTexture("specular").r:i=C(1);else if(n===se.SPECULAR_INTENSITY){const r=this.getFloat(n);t.specularMap?i=r.mul(this.getTexture(n).a):i=r}else if(n===se.SPECULAR_COLOR){const r=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?i=r.mul(this.getTexture(n).rgb):i=r}else if(n===se.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).g):i=r}else if(n===se.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?i=r.mul(this.getTexture(n).b):i=r}else if(n===se.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?i=r.mul(this.getTexture(n)):i=r}else if(n===se.NORMAL)t.normalMap?i=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?i=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):i=ks;else if(n===se.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===se.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===se.CLEARCOAT_NORMAL)t.clearcoatNormalMap?i=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):i=ks;else if(n===se.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?i=r.mul(this.getTexture("sheenColor").rgb):i=r}else if(n===se.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).a):i=r,i=i.clamp(.07,1)}else if(n===se.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const r=this.getTexture(n);i=xh(Bo.x,Bo.y,Bo.y.negate(),Bo.x).mul(r.rg.mul(2).sub(ke(1)).normalize().mul(r.b))}else i=Bo;else if(n===se.IRIDESCENCE_THICKNESS){const r=Di("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=Di("0","float",t.iridescenceThicknessRange);i=r.sub(o).mul(this.getTexture(n).g).add(o)}else i=r}else if(n===se.TRANSMISSION){const r=this.getFloat(n);t.transmissionMap?i=r.mul(this.getTexture(n).r):i=r}else if(n===se.THICKNESS){const r=this.getFloat(n);t.thicknessMap?i=r.mul(this.getTexture(n).g):i=r}else if(n===se.IOR)i=this.getFloat(n);else{const r=this.getNodeType(e);i=this.getCache(n,r)}return i}}se.ALPHA_TEST="alphaTest";se.COLOR="color";se.OPACITY="opacity";se.SHININESS="shininess";se.SPECULAR="specular";se.SPECULAR_STRENGTH="specularStrength";se.SPECULAR_INTENSITY="specularIntensity";se.SPECULAR_COLOR="specularColor";se.REFLECTIVITY="reflectivity";se.ROUGHNESS="roughness";se.METALNESS="metalness";se.NORMAL="normal";se.CLEARCOAT="clearcoat";se.CLEARCOAT_ROUGHNESS="clearcoatRoughness";se.CLEARCOAT_NORMAL="clearcoatNormal";se.EMISSIVE="emissive";se.ROTATION="rotation";se.SHEEN="sheen";se.SHEEN_ROUGHNESS="sheenRoughness";se.ANISOTROPY="anisotropy";se.IRIDESCENCE="iridescence";se.IRIDESCENCE_IOR="iridescenceIOR";se.IRIDESCENCE_THICKNESS="iridescenceThickness";se.IOR="ior";se.TRANSMISSION="transmission";se.THICKNESS="thickness";se.ATTENUATION_DISTANCE="attenuationDistance";se.ATTENUATION_COLOR="attenuationColor";se.LINE_SCALE="scale";se.LINE_DASH_SIZE="dashSize";se.LINE_GAP_SIZE="gapSize";se.LINE_WIDTH="linewidth";se.LINE_DASH_OFFSET="dashOffset";se.POINT_WIDTH="pointWidth";const kw=de(se,se.ALPHA_TEST),sa=de(se,se.COLOR),Hw=de(se,se.SHININESS),Gw=de(se,se.EMISSIVE),ig=de(se,se.OPACITY),Ww=de(se,se.SPECULAR),Hf=de(se,se.SPECULAR_INTENSITY),Xw=de(se,se.SPECULAR_COLOR),qw=de(se,se.SPECULAR_STRENGTH);de(se,se.REFLECTIVITY);const Yw=de(se,se.ROUGHNESS),$w=de(se,se.METALNESS),jw=de(se,se.NORMAL),Kw=de(se,se.CLEARCOAT),Zw=de(se,se.CLEARCOAT_ROUGHNESS),Jw=de(se,se.CLEARCOAT_NORMAL),Qw=de(se,se.ROTATION),eN=de(se,se.SHEEN),tN=de(se,se.SHEEN_ROUGHNESS),nN=de(se,se.ANISOTROPY),iN=de(se,se.IRIDESCENCE),sN=de(se,se.IRIDESCENCE_IOR),rN=de(se,se.IRIDESCENCE_THICKNESS),oN=de(se,se.TRANSMISSION),aN=de(se,se.THICKNESS),cN=de(se,se.IOR),lN=de(se,se.ATTENUATION_DISTANCE),uN=de(se,se.ATTENUATION_COLOR),zu=de(se,se.LINE_SCALE),sg=de(se,se.LINE_DASH_SIZE),rg=de(se,se.LINE_GAP_SIZE),iu=de(se,se.LINE_WIDTH),Gf=de(se,se.LINE_DASH_OFFSET),hN=de(se,se.POINT_WIDTH),Bo=zt(new Ve).onReference(function(s){return s.material}).onRenderUpdate(function({material:s}){this.value.set(s.anisotropy*Math.cos(s.anisotropyRotation),s.anisotropy*Math.sin(s.anisotropyRotation))});he("MaterialNode",se);class Vt extends Xe{constructor(e=Vt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Vt.GEOMETRY)n=Pn("position","vec3");else if(t===Vt.LOCAL)n=tn(Wn);else if(t===Vt.WORLD){const i=ia.mul(On);n=tn(i)}else if(t===Vt.VIEW){const i=dr.mul(On);n=tn(i)}else if(t===Vt.VIEW_DIRECTION){const i=Qn.negate();n=kn(tn(i))}else if(t===Vt.WORLD_DIRECTION){const i=On.transformDirection(ia);n=kn(tn(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Vt.GEOMETRY="geometry";Vt.LOCAL="local";Vt.WORLD="world";Vt.WORLD_DIRECTION="worldDirection";Vt.VIEW="view";Vt.VIEW_DIRECTION="viewDirection";const Wn=de(Vt,Vt.GEOMETRY),On=de(Vt,Vt.LOCAL).temp("Position"),ku=de(Vt,Vt.WORLD),dN=de(Vt,Vt.WORLD_DIRECTION),Qn=de(Vt,Vt.VIEW),Jt=de(Vt,Vt.VIEW_DIRECTION);he("PositionNode",Vt);class og extends kt{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return tn(e.context.mvp);const t=this.positionNode||On;return Hi.mul(dr).mul(t)}}const Wf=K(og);he("ModelViewProjectionNode",og);class ag extends qc{constructor(e,t=null,n=0,i=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=i,this.usage=vc,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,i=e.getTypeLength(t),r=this.bufferStride||i,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new rh(n,r),c=new Hc(a,i,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),i=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=i,r=i):r=tn(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const tl=(s,e,t,n)=>Ce(new ag(s,e,t,n)),fN=(s,e,t,n)=>tl(s,e,t,n).setUsage(Mu),Xf=(s,e,t,n)=>tl(s,e,t,n).setInstanced(!0),qf=(s,e,t,n)=>fN(s,e,t,n).setInstanced(!0);H("toAttribute",s=>tl(s.value));he("BufferAttributeNode",ag);class cg extends Xe{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new RE(c.array,16,1),u=c.usage===Mu?qf:Xf,h=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=Qr(...h),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new yc(n.array,3),l=n.usage===Mu?qf:Xf;this.instanceColorNode=k(l(c,"vec3",3,0))}const i=e.mul(On).xyz,r=Pi(e[0].xyz,e[1].xyz,e[2].xyz),o=Oi.div(k(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;On.assign(i),Oi.assign(a),this.instanceColorNode!==null&&zi("vec3","vInstanceColor").assign(this.instanceColorNode)}}const pN=K(cg);he("InstanceNode",cg);class un extends Xe{constructor(e=un.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===un.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===un.GEOMETRY)n=Pn("tangent","vec4"),e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents();else if(t===un.LOCAL)n=tn(Cc.xyz);else if(t===un.VIEW){const i=dr.mul(Be(nl,0)).xyz;n=kn(tn(i))}else if(t===un.WORLD){const i=il.transformDirection(Ts);n=kn(tn(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}un.GEOMETRY="geometry";un.LOCAL="local";un.VIEW="view";un.WORLD="world";const Cc=de(un,un.GEOMETRY),nl=de(un,un.LOCAL),il=de(un,un.VIEW),mN=de(un,un.WORLD),lg=na(il,"TransformedTangentView");kn(lg.transformDirection(Ts));he("TangentNode",un);class ug extends Xe{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(this.batchingIdNode=Pn("batchId"));const t=this.batchMesh._matricesTexture,n=Ah(rr(t),0),i=C(O(this.batchingIdNode)).mul(4).toVar(),r=O(i.mod(n)),o=O(i).div(O(n)),a=Qr(rr(t,ar(r,o)),rr(t,ar(r.add(1),o)),rr(t,ar(r.add(2),o)),rr(t,ar(r.add(3),o))),c=Pi(a[0].xyz,a[1].xyz,a[2].xyz);On.assign(a.mul(On));const l=Oi.div(k(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),u=c.mul(l).xyz;Oi.assign(u),e.hasGeometryAttribute("tangent")&&nl.mulAssign(c)}}const gN=K(ug);he("batch",ug);class hg extends Xe{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=Bt.OBJECT,this.skinIndexNode=Pn("skinIndex","uvec4"),this.skinWeightNode=Pn("skinWeight","vec4");let n,i,r;t?(n=Di("bindMatrix","mat4"),i=Di("bindMatrixInverse","mat4"),r=Vw("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=zt(e.bindMatrix,"mat4"),i=zt(e.bindMatrixInverse,"mat4"),r=wh(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=i,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:i,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),h=i.mul(On),d=ii(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),p=r.mul(d).xyz;let _=ii(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));_=r.mul(_).mul(i);const x=_.transformDirection(Oi).xyz;On.assign(p),Oi.assign(x),e.hasGeometryAttribute("tangent")&&nl.assign(x)}generate(e,t){if(t!=="void")return On.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const _N=s=>Ce(new hg(s,!0));he("SkinningNode",hg);class dg extends Xe{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let i=0,r=this.params.length-1;i<r;i++){const o=this.params[i],a=o.isNode!==!0&&o.name||this.getVarName(i),c=o.isNode!==!0&&o.type||"int";n[a]=Qc(a,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},i=this.params,r=t.stackNode;for(let c=0,l=i.length-1;c<l;c++){const u=i[c];let h=null,d=null,p=null,_=null,x=null,g=null;u.isNode?(_="int",p=this.getVarName(c),h="0",d=u.build(e,_),x="<"):(_=u.type||"int",p=u.name||this.getVarName(c),h=u.start,d=u.end,x=u.condition,g=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,_)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,_)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",x=">="):d!==void 0&&h===void 0&&(h="0",x="<"),x===void 0&&(Number(h)>Number(d)?x=">=":x="<"));const m={start:h,end:d,condition:x},T=m.start,S=m.end;let w="",F="",L="";g||(_==="int"||_==="uint"?x.includes("<")?g="++":g="--":x.includes("<")?g="+= 1.":g="-= 1."),w+=e.getVar(_,p)+" = "+T,F+=p+" "+x+" "+S,L+=p+" "+g;const R=`for ( ${w}; ${F}; ${L} )`;e.addFlowCode((c===0?`
`:"")+e.tab+R+` {

`).addFlowTab()}const o=_s(r,n).build(e,"void"),a=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+o);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),a}}const Wt=(...s)=>Ce(new dg(Jr(s,"int"))).append(),xN=()=>Qc("break").append();H("loop",(s,...e)=>Em(s,Wt(...e)));he("LoopNode",dg);const su=new WeakMap,Jn=new vt,Yf=ie(({bufferMap:s,influence:e,stride:t,width:n,depth:i,offset:r})=>{const o=O(Cb).mul(t).add(r),a=o.div(n),c=o.sub(a.mul(n));return rr(s,ar(c,a)).depth(i).mul(e)});function vN(s){const e=s.morphAttributes.position!==void 0,t=s.morphAttributes.normal!==void 0,n=s.morphAttributes.color!==void 0,i=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,r=i!==void 0?i.length:0;let o=su.get(s);if(o===void 0||o.count!==r){let T=function(){g.dispose(),su.delete(s),s.removeEventListener("dispose",T)};var a=T;o!==void 0&&o.texture.dispose();const c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=s.attributes.position.count*h,p=1;const _=4096;d>_&&(p=Math.ceil(d/_),d=_);const x=new Float32Array(d*p*4*r),g=new nh(x,d,p,r);g.type=qn,g.needsUpdate=!0;const m=h*4;for(let S=0;S<r;S++){const w=c[S],F=l[S],L=u[S],R=d*p*4*S;for(let Y=0;Y<w.count;Y++){const A=Y*m;e===!0&&(Jn.fromBufferAttribute(w,Y),x[R+A+0]=Jn.x,x[R+A+1]=Jn.y,x[R+A+2]=Jn.z,x[R+A+3]=0),t===!0&&(Jn.fromBufferAttribute(F,Y),x[R+A+4]=Jn.x,x[R+A+5]=Jn.y,x[R+A+6]=Jn.z,x[R+A+7]=0),n===!0&&(Jn.fromBufferAttribute(L,Y),x[R+A+8]=Jn.x,x[R+A+9]=Jn.y,x[R+A+10]=Jn.z,x[R+A+11]=L.itemSize===4?Jn.w:1)}}o={count:r,texture:g,stride:h,size:new Ve(d,p)},su.set(s,o),s.addEventListener("dispose",T)}return o}class fg extends Xe{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=zt(1),this.updateType=Bt.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,i=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=vN(t);n===!0&&On.mulAssign(this.morphBaseInfluence),i===!0&&Oi.mulAssign(this.morphBaseInfluence);const u=O(l.width);Wt(o,({i:h})=>{const d=C(0).toVar();this.mesh.isInstancedMesh===!0&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(rr(this.mesh.morphTexture,ar(O(h).add(1),O(bm))).r):d.assign(Di("morphTargetInfluences","float").element(h).toVar()),n===!0&&On.addAssign(Yf({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:O(0)})),i===!0&&Oi.addAssign(Yf({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:O(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const yN=K(fg);he("MorphNode",fg);class pg extends Xe{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return Jt.negate().reflect(nn).transformDirection(Ts)}}const SN=de(pg);he("ReflectVectorNode",pg);class mg extends Eo{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return SN}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===lo||!n.isRenderTargetTexture?k(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const gg=K(mg);H("cubeTexture",gg);he("CubeTextureNode",mg);class xa extends Xe{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}he("LightingNode",xa);let zo=null;class _r extends xa{constructor(e=null){super(),this.updateType=Bt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new We,this._defaultColorNode=zt(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){const{object:t}=e;if(t.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){zo===null&&(zo=e.createNodeMaterial(),zo.fragmentNode=Be(0,0,0,1),zo.isShadowNodeMaterial=!0);const i=this.light.shadow,r=e.createRenderTarget(i.mapSize.width,i.mapSize.height),o=new da;o.minFilter=pn,o.magFilter=pn,o.image.width=i.mapSize.width,o.image.height=i.mapSize.height,o.compareFunction=Lp,r.depthTexture=o,i.camera.updateProjectionMatrix();const a=Di("bias","float",i),c=Di("normalBias","float",i),l=t.material.shadowPositionNode||ku;let u=zt(i.matrix).mul(l.add(tg.mul(c)));u=u.xyz.div(u.w);const h=u.x.greaterThanEqual(0).and(u.x.lessThanEqual(1)).and(u.y.greaterThanEqual(0)).and(u.y.lessThanEqual(1)).and(u.z.lessThanEqual(1));let d=u.z.add(a);e.renderer.coordinateSystem===lo&&(d=d.mul(2).sub(1)),u=k(u.x,u.y.oneMinus(),d),n=((g,m,T)=>ni(g,m).compare(T))(o,u.xy,u.z);const _=ni(r.texture,u),x=h.mix(1,n.mix(_.a.mix(1,_),1));this.rtt=r,this.colorNode=this.colorNode.mul(x),this.shadowNode=n,this.shadowMaskNode=x,this.updateBeforeType=Bt.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:i,scene:r}=e,o=r.overrideMaterial;r.overrideMaterial=zo,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const a=i.toneMapping,c=i.getRenderTarget(),l=i.getRenderObjectFunction();i.setRenderObjectFunction((u,...h)=>{u.castShadow===!0&&i.renderObject(u,...h)}),i.setRenderTarget(t),i.toneMapping=di,i.render(r,n.shadow.camera),i.setRenderTarget(c),i.setRenderObjectFunction(l),i.toneMapping=a,r.overrideMaterial=o}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}he("AnalyticLightNode",_r);const Lc=new WeakMap,TN=s=>s.sort((e,t)=>e.id-t.id);class MN extends Xe{constructor(e=[]){super("vec3"),this.totalDiffuseNode=k().temp("totalDiffuse"),this.totalSpecularNode=k().temp("totalSpecular"),this.outgoingLightNode=k().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}setup(e){const t=e.context,n=t.lightingModel;let i=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=i;const c=e.addStack();n.start(t,c,e);for(const g of r)g.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:l,backdropAlpha:u}=t,{directDiffuse:h,directSpecular:d,indirectDiffuse:p,indirectSpecular:_}=t.reflectedLight;let x=h.add(p);l!==null&&(u!==null?x=k(u.mix(x,l)):x=k(l),t.material.transparent=!0),o.assign(x),a.assign(d.add(_)),i.assign(o.add(a)),n.finish(t,c,e),i=i.bypass(e.removeStack())}return i}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=TN(e);for(const n of e){let i=this._getLightNodeById(n.id);if(i===null){const r=n.constructor,o=Lc.has(r)?Lc.get(r):_r;i=Ce(new o(n))}t.push(i)}return this.lightNodes=t,this._hash=null,this}}const EN=K(MN);function bo(s,e){if(Lc.has(s)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof s!="function")throw new Error(`Light ${s.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);Lc.set(s,e)}class _g extends xa{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}he("AONode",_g);class xg extends vh{constructor(e,t=null,n=null,i=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=i,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=k().temp("directDiffuse"),i=k().temp("directSpecular"),r=k().temp("indirectDiffuse"),o=k().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:i,indirectDiffuse:r,indirectSpecular:o};return{radiance:k().temp("radiance"),irradiance:k().temp("irradiance"),iblIrradiance:k().temp("iblIrradiance"),ambientOcclusion:C(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const vg=K(xg);H("lightingContext",vg);he("LightingContextNode",xg);class dn extends Xe{constructor(e=dn.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===dn.GEOMETRY?n=Rc.cross(Cc):t===dn.LOCAL?n=Oi.cross(nl):t===dn.VIEW?n=ks.cross(il):t===dn.WORLD&&(n=tg.cross(mN));const i=n.mul(Cc.w).xyz;return kn(tn(i)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}dn.GEOMETRY="geometry";dn.LOCAL="local";dn.VIEW="view";dn.WORLD="world";de(dn,dn.GEOMETRY);de(dn,dn.LOCAL);const AN=de(dn,dn.VIEW);de(dn,dn.WORLD);const bN=kn(nn.cross(lg).mul(Cc.w));kn(bN.transformDirection(Ts));he("BitangentNode",dn);const Xr=Pi(il,AN,ks);Jt.mul(Xr);const wN=(()=>{let s=eo.cross(Jt);return s=s.cross(eo).normalize(),s=Nn(s,nn,nr.mul(Us.oneMinus()).oneMinus().pow2().pow2()).normalize(),s})();class Nh extends Xe{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e,t){const n=this.getNodeType(e),i={tempWrite:!1},r=e.getDataFromNode(this);if(r.nodeProperty!==void 0)return r.nodeProperty;const{ifNode:o,elseNode:a}=this,c=t!=="void",l=c?En(n).build(e):"";r.nodeProperty=l;const u=_s(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=_s(o,i).build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=_s(a,i).build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const ei=K(Nh);H("cond",ei);he("CondNode",Nh);const $f=C(1),Hu=C(-2),nc=C(.8),ru=C(-1),ic=C(.4),ou=C(2),sc=C(.305),au=C(3),jf=C(.21),NN=C(4),Kf=C(4),RN=C(16),CN=ie(([s])=>{const e=k(ln(s)).toVar(),t=C(-1).toVar();return mt(e.x.greaterThan(e.z),()=>{mt(e.x.greaterThan(e.y),()=>{t.assign(ei(s.x.greaterThan(0),0,3))}).else(()=>{t.assign(ei(s.y.greaterThan(0),1,4))})}).else(()=>{mt(e.z.greaterThan(e.y),()=>{t.assign(ei(s.z.greaterThan(0),2,5))}).else(()=>{t.assign(ei(s.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),LN=ie(([s,e])=>{const t=ke().toVar();return mt(e.equal(0),()=>{t.assign(ke(s.z,s.y).div(ln(s.x)))}).elseif(e.equal(1),()=>{t.assign(ke(s.x.negate(),s.z.negate()).div(ln(s.y)))}).elseif(e.equal(2),()=>{t.assign(ke(s.x.negate(),s.y).div(ln(s.z)))}).elseif(e.equal(3),()=>{t.assign(ke(s.z.negate(),s.y).div(ln(s.x)))}).elseif(e.equal(4),()=>{t.assign(ke(s.x.negate(),s.z).div(ln(s.y)))}).else(()=>{t.assign(ke(s.x,s.y).div(ln(s.z)))}),yt(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),IN=ie(([s])=>{const e=C(0).toVar();return mt(s.greaterThanEqual(nc),()=>{e.assign($f.sub(s).mul(ru.sub(Hu)).div($f.sub(nc)).add(Hu))}).elseif(s.greaterThanEqual(ic),()=>{e.assign(nc.sub(s).mul(ou.sub(ru)).div(nc.sub(ic)).add(ru))}).elseif(s.greaterThanEqual(sc),()=>{e.assign(ic.sub(s).mul(au.sub(ou)).div(ic.sub(sc)).add(ou))}).elseif(s.greaterThanEqual(jf),()=>{e.assign(sc.sub(s).mul(NN.sub(au)).div(sc.sub(jf)).add(au))}).else(()=>{e.assign(C(-2).mul(Zc(yt(1.16,s))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});ie(([s,e])=>{const t=s.toVar();t.assign(yt(2,t).sub(1));const n=k(t,1).toVar();return mt(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const PN=ie(([s,e,t,n,i,r])=>{const o=C(t),a=k(e),c=_o(IN(o),Hu,r),l=Jc(c),u=To(c),h=k(Gu(s,a,u,n,i,r)).toVar();return mt(l.notEqual(0),()=>{const d=k(Gu(s,a,u.add(1),n,i,r)).toVar();h.assign(Nn(h,d,l))}),h}),Gu=ie(([s,e,t,n,i,r])=>{const o=C(t).toVar(),a=k(e),c=C(CN(a)).toVar(),l=C(si(Kf.sub(o),0)).toVar();o.assign(si(o,Kf));const u=C(Fu(o)).toVar(),h=ke(LN(a,c).mul(u.sub(2)).add(1)).toVar();return mt(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(yt(3,RN))),h.y.addAssign(yt(4,Fu(r).sub(u))),h.x.mulAssign(n),h.y.mulAssign(i),s.uv(h).grad(ke(),ke())}),cu=ie(({envMap:s,mipInt:e,outputDirection:t,theta:n,axis:i,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const c=Is(n),l=t.mul(c).add(i.cross(t).mul(ds(n))).add(i.mul(i.dot(t).mul(c.oneMinus())));return Gu(s,l,e,r,o,a)});ie(({n:s,latitudinal:e,poleAxis:t,outputDirection:n,weights:i,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=k(ei(e,t,Gm(t,n))).toVar();mt(Vm(d.equals(k(0))),()=>{d.assign(k(n.z,0,n.x.negate()))}),d.assign(kn(d));const p=k().toVar();return p.addAssign(i.element(O(0)).mul(cu({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),Wt({start:O(1),end:s},({i:_})=>{mt(_.greaterThanEqual(r),()=>{xN()});const x=C(o.mul(C(_))).toVar();p.addAssign(i.element(_).mul(cu({theta:x.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),p.addAssign(i.element(_).mul(cu({theta:x,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),Be(p,1)});let Ic=null;const Zf=new WeakMap;function DN(s){const e=Math.log2(s)-2,t=1/s;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function ON(s){let e=Zf.get(s);if((e!==void 0?e.pmremVersion:-1)!==s.pmremVersion){if(s.isCubeTexture){if(s.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=Ic.fromCubemap(s,e)}else{if(s.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=Ic.fromEquirectangular(s,e)}e.pmremVersion=s.pmremVersion,Zf.set(s,e)}return e.texture}class yg extends kt{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=ni(null),this._width=zt(0),this._height=zt(0),this._maxMip=zt(0),this.updateBeforeType=Bt.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=DN(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=ON(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){Ic===null&&(Ic=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===bi&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=k(t.x.negate(),t.yz));let i=this.levelNode;return i===null&&e.context.getTextureLevel&&(i=e.context.getTextureLevel(this)),PN(this._texture,t,i,this._width,this._height,this._maxMip)}}const UN=K(yg);he("PMREMNode",yg);const Jf=new WeakMap;class Sg extends xa{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let d=Jf.get(t.value);d===void 0&&(d=UN(t.value),Jf.set(t.value,d)),t=d}const{material:n}=e,r=n.envMap?Di("envMapIntensity","float",e.material):Di("environmentIntensity","float",e.scene),a=n.useAnisotropy===!0||n.anisotropy>0?wN:nn,c=_s(t,Qf(Us,a)).mul(r),l=_s(t,FN(ng)).mul(Math.PI).mul(r),u=Ec(c);e.context.radiance.addAssign(u),e.context.iblIrradiance.addAssign(l);const h=e.context.lightingModel.clearcoatRadiance;if(h){const d=_s(t,Qf(bc,Wr)).mul(r),p=Ec(d);h.addAssign(p)}}}const Qf=(s,e)=>{let t=null;return{getUV:()=>(t===null&&(t=Jt.negate().reflect(e),t=s.mul(s).mix(t,e).normalize(),t=t.transformDirection(Ts)),t),getTextureLevel:()=>s}},FN=s=>({getUV:()=>s,getTextureLevel:()=>C(1)});he("EnvironmentNode",Sg);class Tg extends xa{constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}he("IrradianceNode",Tg);let lu,uu;class Nt extends Xe{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===Nt.VIEWPORT?"vec4":this.scope===Nt.COORDINATE?"vec3":"vec2"}getUpdateType(){let e=Bt.NONE;return(this.scope===Nt.RESOLUTION||this.scope===Nt.VIEWPORT)&&(e=Bt.FRAME),this.updateType=e,e}update({renderer:e}){this.scope===Nt.VIEWPORT?e.getViewport(uu):e.getDrawingBufferSize(lu)}setup(){const e=this.scope;let t=null;if(e===Nt.RESOLUTION)t=zt(lu||(lu=new Ve));else if(e===Nt.VIEWPORT)t=zt(uu||(uu=new vt));else{t=VN.div(Wu);let n=t.x,i=t.y;/bottom/i.test(e)&&(i=i.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=ke(n,i)}return t}generate(e){if(this.scope===Nt.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(Wu).outputNode.build(e);t=`${e.getType("vec3")}( ${t}.x, ${n}.y - ${t}.y, ${t}.z )`}return t}return super.generate(e)}}Nt.COORDINATE="coordinate";Nt.RESOLUTION="resolution";Nt.VIEWPORT="viewport";Nt.TOP_LEFT="topLeft";Nt.BOTTOM_LEFT="bottomLeft";Nt.TOP_RIGHT="topRight";Nt.BOTTOM_RIGHT="bottomRight";const VN=de(Nt,Nt.COORDINATE),Wu=de(Nt,Nt.RESOLUTION),no=de(Nt,Nt.VIEWPORT),ra=de(Nt,Nt.TOP_LEFT);de(Nt,Nt.BOTTOM_LEFT);de(Nt,Nt.TOP_RIGHT);de(Nt,Nt.BOTTOM_RIGHT);he("ViewportNode",Nt);const ko=new Ve;class va extends Eo{constructor(e=ra,t=null,n=null){n===null&&(n=new Kp,n.minFilter=Ai),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=Bt.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(ko);const n=this.value;(n.image.width!==ko.width||n.image.height!==ko.height)&&(n.image.width=ko.width,n.image.height=ko.height,n.needsUpdate=!0);const i=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=i}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const BN=K(va),Mg=K(va,null,null,{generateMipmaps:!0});H("viewportTexture",BN);H("viewportMipTexture",Mg);he("ViewportTextureNode",va);let hu=null;class Eg extends va{constructor(e=ra,t=null){hu===null&&(hu=new da),super(e,t,hu)}}const Ag=K(Eg);H("viewportDepthTexture",Ag);he("ViewportDepthTextureNode",Eg);class An extends Xe{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===An.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===An.DEPTH)t=Xu(Qn.z,tu,nu);else if(e===An.DEPTH_TEXTURE){const n=this.valueNode||Ag(),i=bg(n,tu,nu);t=Xu(i,tu,nu)}else e===An.DEPTH_PIXEL&&this.valueNode!==null&&(t=wg().assign(this.valueNode));return t}}const Xu=(s,e,t)=>s.add(e).div(e.sub(t)),bg=(s,e,t)=>e.mul(t).div(t.sub(e).mul(s).sub(t));An.DEPTH="depth";An.DEPTH_TEXTURE="depthTexture";An.DEPTH_PIXEL="depthPixel";const wg=K(An,An.DEPTH_PIXEL);de(An,An.DEPTH);K(An,An.DEPTH_TEXTURE);const Ng=de(An,An.DEPTH_PIXEL);Ng.assign=s=>wg(s);he("ViewportDepthNode",An);class Hs extends Xe{constructor(e=Hs.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:i,globalClippingCount:r}=t,o=r+i,a=n?o-i:o;return this.scope===Hs.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,o,a):this.setupDefault(t.planes,o,a)}setupAlphaToCoverage(e,t,n){return ie(()=>{const i=Vu(e),r=En("float","distanceToPlane"),o=En("float","distanceToGradient"),a=En("float","clipOpacity");a.assign(1);let c;if(Wt(n,({i:l})=>{c=i.element(l),r.assign(Qn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),a.mulAssign(ys(o.negate(),o,r)),a.equal(0).discard()}),n<t){const l=En("float","unionclipOpacity");l.assign(1),Wt({start:n,end:t},({i:u})=>{c=i.element(u),r.assign(Qn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),l.mulAssign(ys(o.negate(),o,r).oneMinus())}),a.mulAssign(l.oneMinus())}Zt.a.mulAssign(a),Zt.a.equal(0).discard()})()}setupDefault(e,t,n){return ie(()=>{const i=Vu(e);let r;if(Wt(n,({i:o})=>{r=i.element(o),Qn.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const o=En("bool","clipped");o.assign(!0),Wt({start:n,end:t},({i:a})=>{r=i.element(a),o.assign(Qn.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}Hs.ALPHA_TO_COVERAGE="alphaToCoverage";Hs.DEFAULT="default";const zN=()=>Ce(new Hs),kN=()=>Ce(new Hs(Hs.ALPHA_TO_COVERAGE));class Rg extends Xe{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===bi&&n.side===zn?"false":e.getFrontFacing()}}const HN=de(Rg),Pc=C(HN).mul(2).sub(1);he("FrontFacingNode",Rg);const qu=new Map;class ri extends vs{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+dm(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.depthWrite===!0&&this.setupDepth(e),this.fragmentNode===null){this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const i=this.setupLighting(e);n!==null&&e.stack.add(n);const r=Be(i,Zt.a).max(0);t=this.setupOutput(e,r),Lb.assign(t),this.outputNode!==null&&(t=this.outputNode)}else{let i=this.fragmentNode;i.isOutputStructNode!==!0&&(i=Be(i)),t=this.setupOutput(e,i)}e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){if(e.clippingContext===null)return null;const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let i=null;return(t||n)&&(this.alphaToCoverage?i=kN():e.stack.add(zN())),i}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=Wf().w.add(1).log2().mul(Bw).mul(.5)),n!==null&&Ng.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&yN(t).append(),t.isSkinnedMesh===!0&&_N(t).append(),t.isBatchedMesh&&gN(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&pN(t).append(),this.positionNode!==null&&On.assign(this.positionNode);const i=Wf();return e.context.vertex=e.removeStack(),e.context.mvp=i,i}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Be(this.colorNode):sa;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Be(n.xyz.mul(Pn("color","vec3")),n.a)),e.instanceColor&&(n=zi("vec3","vInstanceColor").mul(n)),Zt.assign(n);const i=this.opacityNode?C(this.opacityNode):ig;if(Zt.a.assign(Zt.a.mul(i)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?C(this.alphaTestNode):kw;Zt.a.lessThanEqual(r).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=Qn.dFdx().cross(Qn.dFdy()).normalize();nn.assign(e.mul(Pc))}else{const e=this.normalNode?k(this.normalNode):jw;nn.assign(e.mul(Pc))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?gg(this.envMap):ni(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];if(t&&n.push(new Sg(t)),e.material.lightMap&&n.push(new Tg(Jm("lightMap","texture"))),this.aoNode!==null||e.material.aoMap){const r=this.aoNode!==null?this.aoNode:ni(e.material.aoMap);n.push(new _g(r))}let i=this.lightsNode||e.lightsNode;return n.length>0&&(i=EN([...i.lightNodes,...n])),i}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:i,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=Zt.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=vg(a,l,n,i)}else n!==null&&(c=k(i!==null?Nn(c,n,i):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(k(r||Gw))),c}setupOutput(e,t){const n=e.fogNode;return n&&(t=Be(n.mix(t.rgb,n.colorNode),t.a)),t}setDefaultValues(e){for(const n in e){const i=e[n];this[n]===void 0&&(this[n]=i,i&&i.clone&&(this[n]=i.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=Dn.prototype.toJSON.call(this,e),i=Mc(this);n.inputNodes={};for(const{property:o,childNode:a}of i)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.shadowPositionNode=e.shadowPositionNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=GN(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const i in e)n[i]=e[i];return n}}function Hn(s,e){if(typeof e!="function"||!s)throw new Error(`Node material ${s} is not a class`);if(qu.has(s)){console.warn(`Redefinition of node material ${s}`);return}qu.set(s,e),e.type=s}function GN(s){const e=qu.get(s);if(e!==void 0)return new e}Hn("NodeMaterial",ri);class Cg extends Xe{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new jo(t);return this._currentCond=ei(e,n),this.add(this._currentCond)}elseif(e,t){const n=new jo(t),i=ei(e,n);return this._currentCond.elseNode=i,this._currentCond=i,this}else(e){return this._currentCond.elseNode=new jo(e),this}build(e,...t){const n=ib();Vf(this);for(const i of this.nodes)i.build(e,"void");return Vf(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}K(Cg);he("StackNode",Cg);class Lg extends kt{constructor(e=dN){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return ke(t,n)}}K(Lg);he("EquirectUVNode",Lg);class Ig extends Xe{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}he("StructTypeNode",Ig);class Pg extends Xe{constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let i=0;i<t.length;i++)n.push(t[i].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new Ig(n)).name}generate(e,t){const n=e.getVarFromNode(this);n.isOutputStructVar=!0;const i=e.getPropertyName(n),r=this.members,o=i!==""?i+".":"";for(let a=0;a<r.length;a++){const c=r[a].build(e,t);e.addLineFlowCode(`${o}m${a} = ${c}`)}return i}}K(Pg);he("OutputStructNode",Pg);class Dg extends Xe{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.uint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).float().mul(1/2**32)}}const WN=K(Dg);H("hash",WN);he("HashNode",Dg);const Yu=(s,e)=>ji(yt(4,s.mul(rn(1,s))),e),XN=(s,e)=>s.lessThan(.5)?Yu(s.mul(2),e).div(2):rn(1,Yu(yt(rn(1,s),2),e).div(2)),qN=(s,e,t)=>ji(zs(ji(s,e),ii(ji(s,e),ji(rn(1,s),t))),1/e),YN=(s,e)=>ds(Bf.mul(e.mul(s).sub(1))).div(Bf.mul(e.mul(s).sub(1)));H("parabola",Yu);H("gain",XN);H("pcurve",qN);H("sinc",YN);const Gi=ie(([s])=>s.fract().sub(.5).abs()),Og=ie(([s])=>k(Gi(s.z.add(Gi(s.y.mul(1)))),Gi(s.z.add(Gi(s.x.mul(1)))),Gi(s.y.add(Gi(s.x.mul(1)))))),$N=ie(([s,e,t])=>{const n=k(s).toVar(),i=C(1.4).toVar(),r=C(0).toVar(),o=k(n).toVar();return Wt({start:C(0),end:C(3),type:"float",condition:"<="},()=>{const a=k(Og(o.mul(2))).toVar();n.addAssign(a.add(t.mul(C(.1).mul(e)))),o.mulAssign(1.8),i.mulAssign(1.5),n.mulAssign(1.2);const c=C(Gi(n.z.add(Gi(n.x.add(Gi(n.y)))))).toVar();r.addAssign(c.div(i)),o.addAssign(.14)}),r});Gi.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});Og.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});$N.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let du;class Ug extends Nh{constructor(e){du=du||Qc("discard"),super(e,du)}}const jN=K(Ug),KN=s=>jN(s).append();H("discard",KN);he("DiscardNode",Ug);class Fg extends Xe{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let i=null,r=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],p=l[h];d.getNodeType(e)===p.type?u++:u=0}u>r&&(i=o,r=u)}}this._candidateFnCall=n=i(...t)}return n}}const ZN=K(Fg),gi=s=>(...e)=>ZN(s,...e);he("FunctionOverloadingNode",Fg);class Vg extends kt{constructor(){super("vec2")}setup(){const e=k(Jt.z,0,Jt.x.negate()).normalize(),t=Jt.cross(e);return ke(e.dot(nn),t.dot(nn)).mul(.495).add(.5)}}de(Vg);he("MatcapUVNode",Vg);class Yn extends mr{constructor(e=Yn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=Bt.FRAME}update(e){const t=this.scope,n=this.scale;t===Yn.LOCAL?this.value+=e.deltaTime*n:t===Yn.DELTA?this.value=e.deltaTime*n:t===Yn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}Yn.LOCAL="local";Yn.GLOBAL="global";Yn.DELTA="delta";Yn.FRAME="frame";const JN=(s,e=0)=>Ce(new Yn(Yn.LOCAL,s,e));de(Yn,Yn.FRAME).uint();he("TimerNode",Yn);class fn extends Xe{constructor(e=fn.SINE,t=JN()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=Ce(this.timeNode);let n=null;return e===fn.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===fn.SQUARE?n=t.fract().round():e===fn.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===fn.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}fn.SINE="sine";fn.SQUARE="square";fn.TRIANGLE="triangle";fn.SAWTOOTH="sawtooth";K(fn,fn.SINE);K(fn,fn.SQUARE);K(fn,fn.TRIANGLE);K(fn,fn.SAWTOOTH);he("OscNode",fn);class Ji extends kt{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===Ji.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===Ji.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}Ji.DIRECTION_TO_COLOR="directionToColor";Ji.COLOR_TO_DIRECTION="colorToDirection";const Bg=K(Ji,Ji.DIRECTION_TO_COLOR),QN=K(Ji,Ji.COLOR_TO_DIRECTION);H("directionToColor",Bg);H("colorToDirection",QN);he("PackingNode",Ji);class Rh extends Xe{constructor(e,t,n,i=C(0),r=C(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=i,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:i,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(i)).add(i)}}const eR=K(Rh,null,null,{doClamp:!1}),tR=K(Rh);H("remap",eR);H("remapClamp",tR);he("RemapNode",Rh);class zg extends kt{constructor(e,t,n=ke(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const nR=K(zg);H("rotateUV",nR);he("RotateUVNode",zg);class kg extends kt{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return xh(r,o,o.negate(),r).mul(n)}else{const r=t,o=Qr(Be(1,0,0,0),Be(0,Is(r.x),ds(r.x).negate(),0),Be(0,ds(r.x),Is(r.x),0),Be(0,0,0,1)),a=Qr(Be(Is(r.y),0,ds(r.y),0),Be(0,1,0,0),Be(ds(r.y).negate(),0,Is(r.y),0),Be(0,0,0,1)),c=Qr(Be(Is(r.z),ds(r.z).negate(),0,0),Be(ds(r.z),Is(r.z),0,0),Be(0,0,1,0),Be(0,0,0,1));return o.mul(a).mul(c).mul(Be(n,1)).xyz}}}const iR=K(kg);H("rotate",iR);he("RotateNode",kg);class Hg extends Xe{constructor(e,t=ns(),n=C(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:i,height:r}=n,o=e.mod(i.mul(r)).floor(),a=o.mod(i),c=r.sub(o.add(1).div(i).ceil()),l=n.reciprocal(),u=ke(a,c);return t.add(u).mul(l)}}K(Hg);he("SpriteSheetUVNode",Hg);class Gg extends So{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const i=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&i!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(i!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const Wg=K(Gg);H("storageElement",Wg);he("StorageArrayElementNode",Gg);class Xg extends Xe{constructor(e,t=null,n=null,i=C(1),r=On,o=Oi){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=i,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:i,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(k(1)));const c=r.yz.mul(i),l=r.zx.mul(i),u=r.xy.mul(i),h=e.value,d=t!==null?t.value:h,p=n!==null?n.value:h,_=ni(h,c).mul(a.x),x=ni(d,l).mul(a.y),g=ni(p,u).mul(a.z);return ii(_,x,g)}}const sR=K(Xg),rR=(...s)=>sR(...s);H("triplanarTexture",rR);he("TriplanarTexturesNode",Xg);new hs;new U;new U;new U;new ot;new U(0,0,-1);new vt;new U;new U;new vt;new Ve;new Bs;ke(ra.x.oneMinus(),ra.y);class oR extends Kc{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let i;return n===!0?i=super.generate(e):i=e.generateConst(this.nodeType,new vt(1,1,1,1)),i}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}he("VertexColorNode",oR);class qg extends Ao{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const aR=(s,e,t)=>Ce(new qg(s,e,t));he("RendererReferenceNode",qg);const sl=1/6,Yg=s=>yt(sl,yt(s,yt(s,s.negate().add(3)).sub(3)).add(1)),$u=s=>yt(sl,yt(s,yt(s,yt(3,s).sub(6))).add(4)),$g=s=>yt(sl,yt(s,yt(s,yt(-3,s).add(3)).add(3)).add(1)),ju=s=>yt(sl,ji(s,3)),ep=s=>Yg(s).add($u(s)),tp=s=>$g(s).add(ju(s)),np=s=>ii(-1,$u(s).div(Yg(s).add($u(s)))),ip=s=>ii(1,ju(s).div($g(s).add(ju(s)))),sp=(s,e,t)=>{const n=s.uvNode,i=yt(n,e.zw).add(.5),r=To(i),o=Jc(i),a=ep(o.x),c=tp(o.x),l=np(o.x),u=ip(o.x),h=np(o.y),d=ip(o.y),p=ke(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),_=ke(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),x=ke(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),g=ke(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),m=ep(o.y).mul(ii(a.mul(s.uv(p).level(t)),c.mul(s.uv(_).level(t)))),T=tp(o.y).mul(ii(a.mul(s.uv(x).level(t)),c.mul(s.uv(g).level(t))));return m.add(T)},cR=(s,e)=>{const t=ke(s.size(O(e))),n=ke(s.size(O(e.add(1)))),i=zs(1,t),r=zs(1,n),o=sp(s,Be(i,t),To(e)),a=sp(s,Be(r,n),km(e));return Jc(e).mix(o,a)};class jg extends kt{constructor(e,t=C(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return cR(this.textureNode,this.blurNode)}}const lR=K(jg);H("bicubic",lR);he("TextureBicubicNode",jg);class Kg extends Xe{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}de(Kg);he("PointUVNode",Kg);class Ci extends Xe{constructor(e=Ci.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let i;return t===Ci.BACKGROUND_BLURRINESS?i=Di("backgroundBlurriness","float",n):t===Ci.BACKGROUND_INTENSITY?i=Di("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),i}}Ci.BACKGROUND_BLURRINESS="backgroundBlurriness";Ci.BACKGROUND_INTENSITY="backgroundIntensity";de(Ci,Ci.BACKGROUND_BLURRINESS);de(Ci,Ci.BACKGROUND_INTENSITY);he("SceneNode",Ci);class uR extends el{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getInputType(){return"storageBuffer"}element(e){return Wg(this,e)}setBufferObject(e){return this.bufferObject=e,this}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=tl(this.value),this._varying=tn(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}he("StorageBufferNode",uR);class Zg extends Eo{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStoreTextureNode=!0}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:i}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=i.build(e,"vec4"),c=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(c)}}K(Zg);he("TextureStoreNode",Zg);class hR extends Ao{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}he("UserDataNode",hR);const dR=ie(({base:s,blend:e})=>{const t=n=>e[n].lessThan(Fm).cond(e[n],s[n].oneMinus().div(e[n]).oneMinus().max(0));return k(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),fR=ie(({base:s,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],s[n].div(e[n].oneMinus()).max(0));return k(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),pR=ie(({base:s,blend:e})=>{const t=n=>s[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return k(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),mR=ie(({base:s,blend:e})=>{const t=n=>s[n].lessThan(.5).cond(s[n].mul(e[n],2),s[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return k(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class Mn extends kt{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,i={base:t,blend:n};let r=null;return e===Mn.BURN?r=dR(i):e===Mn.DODGE?r=fR(i):e===Mn.SCREEN?r=pR(i):e===Mn.OVERLAY&&(r=mR(i)),r}}Mn.BURN="burn";Mn.DODGE="dodge";Mn.SCREEN="screen";Mn.OVERLAY="overlay";const gR=K(Mn,Mn.BURN),_R=K(Mn,Mn.DODGE),xR=K(Mn,Mn.OVERLAY),vR=K(Mn,Mn.SCREEN);H("burn",gR);H("dodge",_R);H("overlay",xR);H("screen",vR);he("BlendModeNode",Mn);const yR=ie(({textureNode:s,bumpScale:e})=>{const t=i=>s.cache().context({getUV:r=>i(r.uvNode||ns()),forceUVContext:!0}),n=C(t(i=>i));return ke(C(t(i=>i.add(i.dFdx()))).sub(n),C(t(i=>i.add(i.dFdy()))).sub(n)).mul(e)}),SR=ie(s=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=s,i=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),c=o.cross(i),l=i.dot(a).mul(Pc),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class Jg extends kt{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=yR({textureNode:this.textureNode,bumpScale:e});return SR({surf_pos:Qn,surf_norm:ks,dHdxy:t})}}const TR=K(Jg);H("bumpMap",TR);he("BumpMapNode",Jg);const MR=ie(({color:s,adjustment:e})=>e.mix(Qg(s.rgb),s.rgb)),ER=ie(({color:s,adjustment:e})=>{const t=ii(s.r,s.g,s.b).div(3),n=s.r.max(s.g.max(s.b)),i=n.sub(t).mul(e).mul(-3);return Nn(s.rgb,n,i)}),AR=ie(({color:s,adjustment:e})=>{const t=k(.57735,.57735,.57735),n=e.cos();return k(s.rgb.mul(n).add(t.cross(s.rgb).mul(e.sin()).add(t.mul(Mo(t,s.rgb).mul(n.oneMinus())))))});class $n extends kt{constructor(e,t,n=C(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,i={color:t,adjustment:n};let r=null;return e===$n.SATURATION?r=MR(i):e===$n.VIBRANCE?r=ER(i):e===$n.HUE?r=AR(i):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}$n.SATURATION="saturation";$n.VIBRANCE="vibrance";$n.HUE="hue";const bR=K($n,$n.SATURATION),wR=K($n,$n.VIBRANCE),NR=K($n,$n.HUE),RR=k(.2125,.7154,.0721),Qg=(s,e=RR)=>Mo(s,e),e_=(s,e)=>Nn(k(0),s,Qg(s).sub(e).max(0));H("saturation",bR);H("vibrance",wR);H("hue",NR);H("threshold",e_);he("ColorAdjustmentNode",$n);const CR=ie(s=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:i}=s,r=e.dFdx(),o=e.dFdy(),a=i.dFdx(),c=i.dFdy(),l=t,u=o.cross(l),h=l.cross(r),d=u.mul(a.x).add(h.mul(c.x)),p=u.mul(a.y).add(h.mul(c.y)),_=d.dot(d).max(p.dot(p)),x=Pc.mul(_.inverseSqrt());return ii(d.mul(n.x,x),p.mul(n.y,x),l.mul(n.z)).normalize()});class t_ extends kt{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=cr}setup(e){const{normalMapType:t,scaleNode:n}=this;let i=this.node.mul(2).sub(1);n!==null&&(i=k(i.xy.mul(n),i.z));let r=null;return t===Cp?r=eg.mul(i).normalize():t===cr&&(e.hasGeometryAttribute("tangent")===!0?r=Xr.mul(i).normalize():r=CR({eye_pos:Qn,surf_norm:ks,mapN:i,uv:ns()})),r}}const LR=K(t_);H("normalMap",LR);he("NormalMapNode",t_);class n_ extends kt{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const IR=K(n_);H("posterize",IR);he("PosterizeNode",n_);const PR=ie(({color:s,exposure:e})=>s.mul(e).clamp()),DR=ie(({color:s,exposure:e})=>(s=s.mul(e),s.div(s.add(1)).clamp())),OR=ie(({color:s,exposure:e})=>{s=s.mul(e),s=s.sub(.004).max(0);const t=s.mul(s.mul(6.2).add(.5)),n=s.mul(s.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),UR=ie(({color:s})=>{const e=s.mul(s.add(.0245786)).sub(90537e-9),t=s.mul(s.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),FR=ie(({color:s,exposure:e})=>{const t=Pi(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=Pi(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return s=s.mul(e).div(.6),s=t.mul(s),s=UR({color:s}),s=n.mul(s),s.clamp()}),VR=Pi(k(1.6605,-.1246,-.0182),k(-.5876,1.1329,-.1006),k(-.0728,-.0083,1.1187)),BR=Pi(k(.6274,.0691,.0164),k(.3293,.9195,.088),k(.0433,.0113,.8956)),zR=ie(([s])=>{const e=k(s).toVar(),t=k(e.mul(e)).toVar(),n=k(t.mul(t)).toVar();return C(15.5).mul(n.mul(t)).sub(yt(40.14,n.mul(e))).add(yt(31.96,n).sub(yt(6.868,t.mul(e))).add(yt(.4298,t).add(yt(.1191,e).sub(.00232))))}),kR=ie(({color:s,exposure:e})=>{const t=k(s).toVar(),n=Pi(k(.856627153315983,.137318972929847,.11189821299995),k(.0951212405381588,.761241990602591,.0767994186031903),k(.0482516061458583,.101439036467562,.811302368396859)),i=Pi(k(1.1271005818144368,-.1413297634984383,-.14132976349843826),k(-.11060664309660323,1.157823702216272,-.11060664309660294),k(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=C(-12.47393),o=C(4.026069);return t.mulAssign(e),t.assign(BR.mul(t)),t.assign(n.mul(t)),t.assign(si(t,1e-10)),t.assign(Zc(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(_o(t,0,1)),t.assign(zR(t)),t.assign(i.mul(t)),t.assign(ji(si(k(0),t),k(2.2))),t.assign(VR.mul(t)),t.assign(_o(t,0,1)),t}),HR={[mp]:PR,[gp]:DR,[_p]:OR,[xp]:FR,[vp]:kR};class i_ extends kt{constructor(e=di,t=WR,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===di)return t;const i={exposure:this.exposureNode,color:t},r=HR[n];let o=null;return r?o=r(i):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const GR=(s,e,t)=>Ce(new i_(s,Ce(e),Ce(t))),WR=aR("toneMappingExposure","float");H("toneMapping",(s,e,t)=>GR(e,t,s));he("ToneMappingNode",i_);let fu=null;class s_ extends va{constructor(e=ra,t=null){fu===null&&(fu=new Kp),super(e,t,fu)}updateReference(){return this}}const XR=K(s_);H("viewportSharedTexture",XR);he("ViewportSharedTextureNode",s_);class Ku extends Eo{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class ya extends kt{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const i=new da;i.isRenderTargetTexture=!0,i.name="PostProcessingDepth";const r=new Bs(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ms});r.texture.name="PostProcessing",r.depthTexture=i,this.renderTarget=r,this.updateBeforeType=Bt.FRAME,this._textureNode=Ce(new Ku(this,r.texture)),this._depthTextureNode=Ce(new Ku(this,i)),this._depthNode=null,this._viewZNode=null,this._cameraNear=zt(0),this._cameraFar=zt(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=bg(this._depthTextureNode,e,t)}return this._viewZNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=Xu(this.getViewZNode(),e,t)}return this._depthNode}setup(){return this.scope===ya.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:i}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(new Ve);this.setSize(r.width,r.height);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=i.near,this._cameraFar.value=i.far,t.toneMapping=di,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,i),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget.setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}ya.COLOR="color";ya.DEPTH="depth";const Ch=(s,e)=>Ce(new Ku(s,e));he("PassNode",ya);const pu=new zc(-1,1,1,-1,0,1);class qR extends pi{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new Ri([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ri(t,2))}}const YR=new qR;class rl extends Bn{constructor(e=null){super(YR,e),this.camera=pu}renderAsync(e){return e.renderAsync(this,pu)}render(e){e.render(this,pu)}}const rp=new rl,op=new rl;class $R extends kt{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=ke(1),this._invSize=zt(new Ve),this._passDirection=zt(new Ve),this._horizontalRT=new Bs,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new Bs,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=Ch(this,this._verticalRT.texture),this.updateBeforeType=Bt.RENDER,this.resolution=new Ve(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value,r=t.getRenderTarget(),o=n.value;rp.material=this._material,op.material=this._material,this.setSize(i.image.width,i.image.height);const a=i.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),rp.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),op.render(t),t.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Be();const n=t.uvNode||ns(),i=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=ie(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=ke(this.directionNode).mul(this._passDirection),d=C(l[0]).toVar(),p=Be(i(n).mul(d)).toVar();for(let _=1;_<c;_++){const x=C(_),g=C(l[_]),m=ke(h.mul(u.mul(x))).toVar(),T=Be(i(n.add(m))),S=Be(i(n.sub(m)));p.addAssign(T.add(S).mul(g)),d.addAssign(yt(2,g))}return p.div(d)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const jR=(s,e)=>Ce(new $R(Ce(s),e));H("gaussianBlur",jR);const ap=new rl;class KR extends kt{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=ni(),this.damp=zt(t),this._compRT=new Bs,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new Bs,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=Ch(this,this._compRT.texture),this.updateBeforeType=Bt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value,r=i.type;this._compRT.texture.type=r,this._oldRT.texture.type=r;const o=t.getRenderTarget(),a=n.value;this.textureNodeOld.value=this._oldRT.texture,t.setRenderTarget(this._compRT),ap.render(t);const c=this._oldRT;this._oldRT=this._compRT,this._compRT=c,this.setSize(i.image.width,i.image.height),t.setRenderTarget(o),n.value=a}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Be();const i=t.uvNode||ns();n.uvNode=i;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),o=ie(([u,h])=>{const d=C(h).toVar(),p=Be(u).toVar();return si(bh(p.sub(d)),0)}),a=ie(()=>{const u=Be(n),h=Be(r(i));return u.mulAssign(this.damp.mul(o(u,.1))),si(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),ap.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const ZR=(s,e)=>Ce(new KR(Ce(s),e));H("afterImage",ZR);const cp=new rl;class JR extends kt{constructor(e,t,n,i){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=k(.1,0,1),this.samples=i,this.resolution=new Ve(1,1),this._renderTarget=new Bs,this._renderTarget.texture.name="anamorphic",this._invSize=zt(new Ve),this._textureNode=Ch(this,this._renderTarget.texture),this.updateBeforeType=Bt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value;this._renderTarget.texture.type=i.type;const r=t.getRenderTarget(),o=n.value;cp.material=this._material,this.setSize(i.image.width,i.image.height),t.setRenderTarget(this._renderTarget),cp.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Be();const n=t.uvNode||ns(),i=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=ie(()=>{const c=this.samples,l=Math.floor(c/2),u=k(0).toVar();return Wt({start:-l,end:l},({i:h})=>{const d=C(h).abs().div(l).oneMinus(),p=ke(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),_=i(p),x=e_(_,this.tresholdNode).mul(d);u.addAssign(x)}),u.mul(this.colorNode)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const QR=(s,e=.9,t=3,n=32)=>Ce(new JR(Ce(s),Ce(e),Ce(t),n));H("anamorphic",QR);class r_ extends kt{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,i=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const c=i[a],l=r[a];t.push(l.build(e,c.type))}else for(const a of i){const c=r[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const e1=(s,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?Jr(e):jc(e[0]),Ce(new r_(Ce(s),e)));H("call",e1);he("FunctionCallNode",r_);class o_ extends Xe{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new Qi,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:C()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=pm(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=mm(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const hc=K(o_);H("scriptableValue",hc);he("ScriptableValueNode",o_);class a_ extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const i=t(...n);return this.set(e,i),i}}}class t1{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const mu=new a_;class c_ extends Xe{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new a_,this._output=hc(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=hc(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=hc(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const i=this.getObject()[e];if(typeof i=="function")return i(...t)}async callAsync(e,...t){const i=this.getObject()[e];if(typeof i=="function")return i.constructor.name==="AsyncFunction"?await i(...t):i(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new t1(this),i=mu.get("THREE"),r=mu.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,mu,e,t,i,r];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:C()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),i="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=i+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const n1=K(c_);H("scriptable",n1);he("ScriptableNode",c_);class ol extends Xe{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||Qn.z).negate()}setup(){return this.factorNode}}const i1=K(ol);H("fog",i1);he("FogNode",ol);class l_ extends ol{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return ys(this.nearNode,this.farNode,t)}}const s1=K(l_);H("rangeFog",s1);he("FogRangeNode",l_);class u_ extends ol{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const r1=K(u_);H("densityFog",r1);he("FogExp2Node",u_);let Qs=null,er=null;class h_ extends Xe{constructor(e=C(),t=C()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(Os(this.minNode.value)),n=e.getTypeLength(Os(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const i=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(Os(i)),a=e.getTypeLength(Os(r));Qs=Qs||new vt,er=er||new vt,Qs.setScalar(0),er.setScalar(0),o===1?Qs.setScalar(i):i.isColor?Qs.set(i.r,i.g,i.b):Qs.set(i.x,i.y,i.z||0,i.w||0),a===1?er.setScalar(r):r.isColor?er.set(r.r,r.g,r.b):er.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const p=d%c,_=Qs.getComponent(p),x=er.getComponent(p);u[d]=Bc.lerp(_,x,Math.random())}const h=this.getNodeType(e);n=wh(u,"vec4",t.count).element(bm).convert(h)}else n=C(0);return n}}K(h_);he("RangeNode",h_);class d_ extends Xe{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=Bt.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let i=1;i<t.length;i++)n*=t[i];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const o1=(s,e,t)=>Ce(new d_(Ce(s),e,t));H("compute",o1);he("ComputeNode",d_);class fr extends Xe{constructor(e=fr.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===fr.TARGET_DIRECTION&&(n=Ts.transformDirection(Bu(t).sub(Bu(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}fr.TARGET_DIRECTION="targetDirection";const f_=K(fr,fr.TARGET_DIRECTION);he("LightNode",fr);const p_=ie(s=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=s,i=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(i.mul(e.div(t).pow4().oneMinus().clamp().pow2()),i)});class m_ extends _r{constructor(e=null){super(e),this.cutoffDistanceNode=zt(0),this.decayExponentNode=zt(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:i,light:r}=this,o=e.context.lightingModel,a=Qm(r).sub(Qn),c=a.normalize(),l=a.length(),u=p_({lightDistance:l,cutoffDistance:n,decayExponent:i}),h=t.mul(u),d=e.context.reflectedLight;o.direct({lightDirection:c,lightColor:h,reflectedLight:d,shadowMask:this.shadowMaskNode},e.stack,e)}}he("PointLightNode",m_);bo(tm,m_);class g_ extends _r{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,i=f_(this.light),r=e.context.reflectedLight;t.direct({lightDirection:i,lightColor:n,reflectedLight:r,shadowMask:this.shadowMaskNode},e.stack,e)}}he("DirectionalLightNode",g_);bo(nm,g_);class Lh extends _r{constructor(e=null){super(e),this.coneCosNode=zt(0),this.penumbraCosNode=zt(0),this.cutoffDistanceNode=zt(0),this.decayExponentNode=zt(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return ys(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:i,decayExponentNode:r,light:o}=this,a=Qm(o).sub(Qn),c=a.normalize(),l=c.dot(f_(o)),u=this.getSpotAttenuation(l),h=a.length(),d=p_({lightDistance:h,cutoffDistance:i,decayExponent:r}),p=n.mul(u).mul(d),_=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:p,reflectedLight:_,shadowMask:this.shadowMaskNode},e.stack,e)}}he("SpotLightNode",Lh);bo(uh,Lh);class a1 extends uh{constructor(e,t,n,i,r,o){super(e,t,n,i,r,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}class __ extends Lh{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const i=e.acos().mul(1/Math.PI);n=ni(t,ke(i,0),0).r}else n=super.getSpotAttenuation(e);return n}}he("IESSpotLightNode",__);bo(a1,__);class x_ extends _r{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}he("AmbientLightNode",x_);bo(im,x_);class v_ extends _r{constructor(e=null){super(e),this.lightPositionNode=Bu(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=zt(new We)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:i}=this,o=ks.dot(i).mul(.5).add(.5),a=Nn(n,t,o);e.context.irradiance.addAssign(a)}}he("HemisphereLightNode",v_);bo(uE,v_);const c1=ie(s=>{const e=s.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class y_ extends kt{constructor(e=ns()){super("float"),this.uvNode=e}setup(){return c1({uv:this.uvNode})}}const l1=K(y_);H("checker",l1);he("CheckerNode",y_);const u1=new Wc;class h1 extends ri{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(u1),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=ie(()=>{tn(ke(),"vUv").assign(ns());const n=Pn("instancePosition"),i=En("vec4","mvPos");i.assign(dr.mul(Be(n,1)));const r=no.z.div(no.w),o=Hi.mul(i),a=En("vec2","offset");return a.assign(Wn.xy),a.assign(a.mul(hN)),a.assign(a.div(no.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(Be(a,0,0))),o})(),this.fragmentNode=ie(()=>{const n=tn(ke(),"vUv"),i=En("float","alpha");i.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(e){const l=En("float","dlen");l.assign(a.fwidth()),i.assign(ys(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=Pn("instanceColor").mul(sa):c=sa,Be(c,i)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Hn("InstancedPointsNodeMaterial",h1);const d1=new Gc;class f1 extends ri{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(d1),this.setValues(e)}}Hn("LineBasicNodeMaterial",f1);const p1=new Zp;class m1 extends ri{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(p1),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?C(this.dashScaleNode):zu,n=this.dashSizeNode?C(this.dashSizeNode):sg,i=this.dashSizeNode?C(this.dashGapNode):rg;to.assign(n),Nc.assign(i);const r=tn(Pn("lineDistance").mul(t));(e?r.add(e):r).mod(to.add(Nc)).greaterThan(to).discard()}}Hn("LineDashedNodeMaterial",m1);const g1=new Zp;class _1 extends ri{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(g1),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setup(e){this.setupShaders(),super.setup(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,i=this.worldUnits,r=ie(({start:a,end:c})=>{const l=Hi.element(2).element(2),d=Hi.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Be(Nn(a.xyz,c.xyz,d),c.w)});this.vertexNode=ie(()=>{zi("vec2","vUv").assign(ns());const a=Pn("instanceStart"),c=Pn("instanceEnd"),l=En("vec4","start"),u=En("vec4","end");l.assign(dr.mul(Be(a,1))),u.assign(dr.mul(Be(c,1))),i&&(zi("vec3","worldStart").assign(l.xyz),zi("vec3","worldEnd").assign(u.xyz));const h=no.z.div(no.w),d=Hi.element(2).element(3).equal(-1);mt(d,()=>{mt(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const p=Hi.mul(l),_=Hi.mul(u),x=p.xyz.div(p.w),g=_.xyz.div(_.w),m=g.xy.sub(x.xy).temp();m.x.assign(m.x.mul(h)),m.assign(m.normalize());const T=na(Be());if(i){const S=u.xyz.sub(l.xyz).normalize(),w=Nn(l.xyz,u.xyz,.5).normalize(),F=S.cross(w).normalize(),L=S.cross(F),R=zi("vec4","worldPos");R.assign(Wn.y.lessThan(.5).cond(l,u));const Y=iu.mul(.5);R.addAssign(Be(Wn.x.lessThan(0).cond(F.mul(Y),F.mul(Y).negate()),0)),n||(R.addAssign(Be(Wn.y.lessThan(.5).cond(S.mul(Y).negate(),S.mul(Y)),0)),R.addAssign(Be(L.mul(Y),0)),mt(Wn.y.greaterThan(1).or(Wn.y.lessThan(0)),()=>{R.subAssign(Be(L.mul(2).mul(Y),0))})),T.assign(Hi.mul(R));const A=na(k());A.assign(Wn.y.lessThan(.5).cond(x,g)),T.z.assign(A.z.mul(T.w))}else{const S=En("vec2","offset");S.assign(ke(m.y,m.x.negate())),m.x.assign(m.x.div(h)),S.x.assign(S.x.div(h)),S.assign(Wn.x.lessThan(0).cond(S.negate(),S)),mt(Wn.y.lessThan(0),()=>{S.assign(S.sub(m))}).elseif(Wn.y.greaterThan(1),()=>{S.assign(S.add(m))}),S.assign(S.mul(iu)),S.assign(S.div(no.w)),T.assign(Wn.y.lessThan(.5).cond(p,_)),S.assign(S.mul(T.w)),T.assign(T.add(Be(S,0,0)))}return T})();const o=ie(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),p=c.sub(a),_=h.dot(d),x=d.dot(p),g=h.dot(p),m=d.dot(d),S=p.dot(p).mul(m).sub(x.mul(x)),F=_.mul(x).sub(g.mul(m)).div(S).clamp(),L=_.add(x.mul(F)).div(m).clamp();return ke(F,L)});this.fragmentNode=ie(()=>{const a=zi("vec2","vUv");if(n){const u=this.offsetNode?C(this.offsetNodeNode):Gf,h=this.dashScaleNode?C(this.dashScaleNode):zu,d=this.dashSizeNode?C(this.dashSizeNode):sg,p=this.dashSizeNode?C(this.dashGapNode):rg;to.assign(d),Nc.assign(p);const _=Pn("instanceDistanceStart"),x=Pn("instanceDistanceEnd"),g=Wn.y.lessThan(.5).cond(h.mul(_),zu.mul(x)),m=tn(g.add(Gf)),T=u?m.add(u):m;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),T.mod(to.add(Nc)).greaterThan(to).discard()}const c=En("float","alpha");if(c.assign(1),i){const u=zi("vec3","worldStart"),h=zi("vec3","worldEnd"),d=zi("vec4","worldPos").xyz.normalize().mul(1e5),p=h.sub(u),_=o({p1:u,p2:h,p3:k(0,0,0),p4:d}),x=u.add(p.mul(_.x)),g=d.mul(_.y),S=x.sub(g).length().div(iu);if(!n)if(e){const w=S.fwidth();c.assign(ys(w.negate().add(.5),w.add(.5),S).oneMinus())}else S.greaterThan(.5).discard()}else if(e){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),p=En("float","dlen");p.assign(d.fwidth()),mt(a.y.abs().greaterThan(1),()=>{c.assign(ys(p.oneMinus(),p.add(1),d).oneMinus())})}else mt(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=Pn("instanceColorStart"),h=Pn("instanceColorEnd");l=Wn.y.lessThan(.5).cond(u,h).mul(sa)}else l=sa;return Be(l,c)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.needsUpdate=!0)}}Hn("Line2NodeMaterial",_1);const x1=new jM;class v1 extends ri{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(x1),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?C(this.opacityNode):ig;Zt.assign(Be(Bg(nn),e))}}Hn("MeshNormalNodeMaterial",v1);const y1=new Ps;class S1 extends ri{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(y1),this.setValues(e)}}Hn("MeshBasicNodeMaterial",S1);const oa=ie(({f0:s,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return s.mul(n.oneMinus()).add(e.mul(n))}),Dc=ie(s=>s.diffuseColor.mul(1/Math.PI)),T1=()=>C(.25),M1=ie(({dotNH:s})=>Ou.mul(C(.5)).add(1).mul(C(1/Math.PI)).mul(s.pow(Ou))),E1=ie(({lightDirection:s})=>{const e=s.add(Jt).normalize(),t=nn.dot(e).clamp(),n=Jt.dot(e).clamp(),i=oa({f0:Mi,f90:1,dotVH:n}),r=T1(),o=M1({dotNH:t});return i.mul(r).mul(o)});class S_ extends yh{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=nn.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(Dc({diffuseColor:Zt.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(E1({lightDirection:e})).mul(qw))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(Dc({diffuseColor:Zt})))}}const A1=new KM;class b1 extends ri{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(A1),this.setValues(e)}setupLightingModel(){return new S_(!1)}}Hn("MeshLambertNodeMaterial",b1);const w1=new $M;class N1 extends ri{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(w1),this.setValues(e)}setupLightingModel(){return new S_}setupVariants(){const e=(this.shininessNode?C(this.shininessNode):Hw).max(1e-4);Ou.assign(e);const t=this.specularNode||Ww;Mi.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}Hn("MeshPhongNodeMaterial",N1);const R1=ie(()=>{const s=Rc.dFdx().abs().max(Rc.dFdy().abs());return s.x.max(s.y).max(s.z)}),C1=ie(s=>{const{roughness:e}=s,t=R1();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),L1=ie(({alpha:s,dotNL:e,dotNV:t})=>{const n=s.pow2(),i=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),r=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return zs(.5,i.add(r).max(Fm))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),I1=ie(({alphaT:s,alphaB:e,dotTV:t,dotBV:n,dotTL:i,dotBL:r,dotNV:o,dotNL:a})=>{const c=a.mul(k(s.mul(t),e.mul(n),o).length()),l=o.mul(k(s.mul(i),e.mul(r),a).length());return zs(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),P1=ie(({alpha:s,dotNH:e})=>{const t=s.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),D1=C(1/Math.PI),O1=ie(({alphaT:s,alphaB:e,dotNH:t,dotTH:n,dotBH:i})=>{const r=s.mul(e),o=k(e.mul(n),s.mul(i),r.mul(t)),a=o.dot(o),c=r.div(a);return D1.mul(r.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),lp=ie(s=>{const{lightDirection:e,f0:t,f90:n,roughness:i,f:r,USE_IRIDESCENCE:o,USE_ANISOTROPY:a}=s,c=s.normalView||nn,l=i.pow2(),u=e.add(Jt).normalize(),h=c.dot(e).clamp(),d=c.dot(Jt).clamp(),p=c.dot(u).clamp(),_=Jt.dot(u).clamp();let x=oa({f0:t,f90:n,dotVH:_}),g,m;if(Ff(o)&&(x=Th.mix(x,r)),Ff(a)){const T=lc.dot(e),S=lc.dot(Jt),w=lc.dot(u),F=eo.dot(e),L=eo.dot(Jt),R=eo.dot(u);g=I1({alphaT:Du,alphaB:l,dotTV:S,dotBV:L,dotTL:T,dotBL:F,dotNV:d,dotNL:h}),m=O1({alphaT:Du,alphaB:l,dotNH:p,dotTH:w,dotBH:R})}else g=L1({alpha:l,dotNL:h,dotNV:d}),m=P1({alpha:l,dotNH:p});return x.mul(g).mul(m)}),T_=ie(({roughness:s,dotNV:e})=>{const t=Be(-1,-.0275,-.572,.022),n=Be(1,.0425,1.04,-.04),i=s.mul(t).add(n),r=i.x.mul(i.x).min(e.mul(-9.28).exp2()).mul(i.x).add(i.y);return ke(-1.04,1.04).mul(r).add(i.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),M_=ie(s=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:i}=s,r=T_({dotNV:e,roughness:i});return t.mul(r.x).add(n.mul(r.y))}),U1=ie(({f:s,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),i=n.mul(n),r=n.mul(i,i).clamp(0,.9999);return s.sub(k(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),F1=ie(({roughness:s,dotNH:e})=>{const t=s.pow2(),n=C(1).div(t),r=e.pow2().oneMinus().max(.0078125);return C(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),V1=ie(({dotNV:s,dotNL:e})=>C(1).div(C(4).mul(e.add(s).sub(e.mul(s))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),B1=ie(({lightDirection:s})=>{const e=s.add(Jt).normalize(),t=nn.dot(s).clamp(),n=nn.dot(Jt).clamp(),i=nn.dot(e).clamp(),r=F1({roughness:Sh,dotNH:i}),o=V1({dotNV:n,dotNL:t});return Gr.mul(r).mul(o)}),z1=ie(([s,e,t,n,i])=>{const r=k(Xm(e.negate(),kn(s),zs(1,n))),o=k(Ko(i[0].xyz),Ko(i[1].xyz),Ko(i[2].xyz));return kn(r).mul(t.mul(o))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),k1=ie(([s,e])=>s.mul(_o(e.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),H1=Mg(),G1=ie(([s,e,t])=>{const n=H1.uv(s),i=Zc(C(Wu.x)).mul(k1(e,t));return n.bicubic(i)}),W1=ie(([s,e,t])=>(mt(t.notEqual(0),()=>{const n=zm(e).negate().div(t);return Bm(n.negate().mul(s))}),k(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),X1=ie(([s,e,t,n,i,r,o,a,c,l,u,h,d,p])=>{const _=z1(s,e,h,u,a),x=o.add(_),g=l.mul(c.mul(Be(x,1))),m=ke(g.xy.div(g.w)).toVar();m.addAssign(1),m.divAssign(2),m.assign(ke(m.x,m.y.oneMinus()));const T=G1(m,t,u),S=n.mul(W1(Ko(_),d,p)),w=S.rgb.mul(T.rgb),F=s.dot(e).clamp(),L=k(M_({dotNV:F,specularColor:i,specularF90:r,roughness:t})),R=S.r.add(S.g,S.b).div(3);return Be(L.oneMinus().mul(w),T.a.oneMinus().mul(R).oneMinus())}),q1=Pi(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),Y1=s=>{const e=s.sqrt();return k(1).add(e).div(k(1).sub(e))},up=(s,e)=>s.sub(e).div(s.add(e)).pow2(),$1=(s,e)=>{const t=s.mul(2*Math.PI*1e-9),n=k(54856e-17,44201e-17,52481e-17),i=k(1681e3,1795300,2208400),r=k(43278e5,93046e5,66121e5),o=C(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(i.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return a=k(a.x.add(o),a.y,a.z).div(10685e-11),q1.mul(a)},j1=ie(({outsideIOR:s,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:i})=>{const r=Nn(s,e,ys(0,.03,n)),o=s.div(r).pow2().mul(C(1).sub(t.pow2())),c=C(1).sub(o).sqrt(),l=up(r,s),u=oa({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=r.lessThan(s).cond(Math.PI,0),p=C(Math.PI).sub(d),_=Y1(i.clamp(0,.9999)),x=up(_,r.vec3()),g=oa({f0:x,f90:1,dotVH:c}),m=k(_.x.lessThan(r).cond(Math.PI,0),_.y.lessThan(r).cond(Math.PI,0),_.z.lessThan(r).cond(Math.PI,0)),T=r.mul(n,c,2),S=k(p).add(m),w=u.mul(g).clamp(1e-5,.9999),F=w.sqrt(),L=h.pow2().mul(g).div(k(1).sub(w));let Y=u.add(L),A=L.sub(h);for(let M=1;M<=2;++M){A=A.mul(F);const q=$1(C(M).mul(T),C(M).mul(S)).mul(2);Y=Y.add(A.mul(q))}return Y.max(k(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),K1=ie(({normal:s,viewDir:e,roughness:t})=>{const n=s.dot(e).saturate(),i=t.pow2(),r=ei(t.lessThan(.25),C(-339.2).mul(i).add(C(161.4).mul(t)).sub(25.9),C(-8.48).mul(i).add(C(14.3).mul(t)).sub(9.95)),o=ei(t.lessThan(.25),C(44).mul(i).sub(C(23.7).mul(t)).add(3.26),C(1.97).mul(i).sub(C(3.27).mul(t)).add(.72));return ei(t.lessThan(.25),0,C(.1).mul(t).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),gu=k(.04),_u=k(1);class Ih extends yh{constructor(e=!1,t=!1,n=!1,i=!1,r=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.anisotropy=i,this.transmission=r,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(e){if(this.clearcoat===!0&&(this.clearcoatRadiance=k().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=k().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=k().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=k().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=k().temp("sheenSpecularIndirect")),this.iridescence===!0){const t=nn.dot(Jt).clamp();this.iridescenceFresnel=j1({outsideIOR:C(1),eta2:Nm,cosTheta1:t,thinFilmThickness:Rm,baseF0:Mi}),this.iridescenceF0=U1({f:this.iridescenceFresnel,f90:1,dotVH:t})}if(this.transmission===!0){const t=ku,n=zw.sub(ku).normalize(),i=ng;e.backdrop=X1(i,n,Us,Zt,Mi,wc,t,ia,Ts,Hi,uc,Cm,Im,Lm),e.backdropAlpha=Uu,Zt.a.mulAssign(Nn(1,e.backdrop.a,Uu))}}computeMultiscattering(e,t,n){const i=nn.dot(Jt).clamp(),r=T_({roughness:Us,dotNV:i}),a=(this.iridescenceF0?Th.mix(Mi,this.iridescenceF0):Mi).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=Mi.add(Mi.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=nn.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(B1({lightDirection:e}))),this.clearcoat===!0){const a=Wr.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(lp({lightDirection:e,f0:gu,f90:_u,roughness:bc,normalView:Wr})))}n.directDiffuse.addAssign(r.mul(Dc({diffuseColor:Zt.rgb}))),n.directSpecular.addAssign(r.mul(lp({lightDirection:e,f0:Mi,f90:1,roughness:Us,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(Dc({diffuseColor:Zt})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(Gr,K1({normal:nn,viewDir:Jt,roughness:Sh}))),this.clearcoat===!0){const l=Wr.dot(Jt).clamp(),u=M_({dotNV:l,specularColor:gu,specularF90:_u,roughness:bc});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const i=k().temp("singleScattering"),r=k().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(i,r,wc);const a=i.add(r),c=Zt.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(i)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(c.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const i=nn.dot(Jt).clamp().add(e),r=Us.mul(-16).oneMinus().negate().exp2(),o=e.sub(i.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=Wr.dot(Jt).clamp(),i=oa({dotVH:n,f0:gu,f90:_u}),r=t.mul(Pu.mul(i).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(Pu));t.assign(r)}if(this.sheen===!0){const n=Gr.r.max(Gr.g).max(Gr.b).mul(.157).oneMinus(),i=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(i)}}}const Z1=new fa;class E_ extends ri{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(Z1),this.setValues(e)}setupLightingModel(){return new Ih}setupSpecular(){const e=Nn(k(.04),Zt.rgb,Ac);Mi.assign(e),wc.assign(1)}setupVariants(){const e=this.metalnessNode?C(this.metalnessNode):$w;Ac.assign(e);let t=this.roughnessNode?C(this.roughnessNode):Yw;t=C1({roughness:t}),Us.assign(t),this.setupSpecular(),Zt.assign(Be(Zt.rgb.mul(e.oneMinus()),Zt.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}Hn("MeshStandardNodeMaterial",E_);const J1=new Ui;class A_ extends E_{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.anisotropyNode=null,this.setDefaultValues(J1),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}setupSpecular(){const e=this.iorNode?C(this.iorNode):cN;uc.assign(e),Mi.assign(Nn(go(Wm(uc.sub(1).div(uc.add(1))).mul(Xw),k(1)).mul(Hf),Zt.rgb,Ac)),wc.assign(Nn(Hf,1,Ac))}setupLightingModel(){return new Ih(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?C(this.clearcoatNode):Kw,n=this.clearcoatRoughnessNode?C(this.clearcoatRoughnessNode):Zw;Pu.assign(t),bc.assign(n)}if(this.useSheen){const t=this.sheenNode?k(this.sheenNode):eN,n=this.sheenRoughnessNode?C(this.sheenRoughnessNode):tN;Gr.assign(t),Sh.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?C(this.iridescenceNode):iN,n=this.iridescenceIORNode?C(this.iridescenceIORNode):sN,i=this.iridescenceThicknessNode?C(this.iridescenceThicknessNode):rN;Th.assign(t),Nm.assign(n),Rm.assign(i)}if(this.useAnisotropy){const t=(this.anisotropyNode?ke(this.anisotropyNode):nN).toVar();nr.assign(t.length()),mt(nr.equal(0),()=>{t.assign(ke(1,0))}).else(()=>{t.divAssign(nr),nr.assign(nr.saturate())}),Du.assign(nr.pow2().mix(Us.pow2(),1)),lc.assign(Xr[0].mul(t.x).add(Xr[1].mul(t.y))),eo.assign(Xr[1].mul(t.x).sub(Xr[0].mul(t.y)))}if(this.useTransmission){const t=this.transmissionNode?C(this.transmissionNode):oN,n=this.thicknessNode?C(this.thicknessNode):aN,i=this.attenuationDistanceNode?C(this.attenuationDistanceNode):lN,r=this.attenuationColorNode?k(this.attenuationColorNode):uN;Uu.assign(t),Cm.assign(n),Lm.assign(i),Im.assign(r)}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?k(this.clearcoatNormalNode):Jw;Wr.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,this.anisotropyNode=e.anisotropyNode,super.copy(e)}}Hn("MeshPhysicalNodeMaterial",A_);class Q1 extends Ih{constructor(e,t,n,i){super(e,t,n),this.useSSS=i}direct({lightDirection:e,lightColor:t,reflectedLight:n},i,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=o,p=e.add(nn.mul(c)).normalize(),_=C(Jt.dot(p.negate()).saturate().pow(h).mul(d)),x=k(_.add(l).mul(a));n.directDiffuse.addAssign(x.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},i,r)}}class eC extends A_{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=C(.1),this.thicknessAmbientNode=C(0),this.thicknessAttenuationNode=C(.1),this.thicknessPowerNode=C(2),this.thicknessScaleNode=C(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new Q1(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}Hn("MeshSSSNodeMaterial",eC);const tC=new Wc;class nC extends ri{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(tC),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}Hn("PointsNodeMaterial",nC);const iC=new VM;class sC extends ri{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(iC),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:i,scaleNode:r}=this,o=On;let a=dr.mul(k(n||0)),c=ke(ia[0].xyz.length(),ia[1].xyz.length());r!==null&&(c=c.mul(r));let l=o.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(zt(e.center).sub(.5))),l=l.mul(c);const u=C(i||Qw),h=l.rotate(u);a=Be(a.xy.add(h),a.zw);const d=Hi.mul(a);return t.vertex=o,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}Hn("SpriteNodeMaterial",sC);class rC extends yh{constructor(){super(),this.shadowNode=C(1).toVar("shadowMask")}direct({shadowMask:e}){this.shadowNode.mulAssign(e)}finish(e){Zt.a.mulAssign(this.shadowNode.oneMinus()),e.outgoingLight.rgb.assign(Zt.rgb)}}const oC=new YM;class aC extends ri{constructor(e){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues(oC),this.setValues(e)}setupLightingModel(){return new rC}}Hn("ShadowNodeMaterial",aC);const io=ie(([s,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),r=hr(s).toVar();return ei(r,i,n)}),aa=ie(([s,e])=>{const t=hr(e).toVar(),n=C(s).toVar();return ei(t,n.negate(),n)}),sn=ie(([s])=>{const e=C(s).toVar();return O(To(e))}),$t=ie(([s,e])=>{const t=C(s).toVar();return e.assign(sn(t)),t.sub(C(e))}),b_=ie(([s,e,t,n,i,r])=>{const o=C(r).toVar(),a=C(i).toVar(),c=C(n).toVar(),l=C(t).toVar(),u=C(e).toVar(),h=C(s).toVar(),d=C(rn(1,a)).toVar();return rn(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),w_=ie(([s,e,t,n,i,r])=>{const o=C(r).toVar(),a=C(i).toVar(),c=k(n).toVar(),l=k(t).toVar(),u=k(e).toVar(),h=k(s).toVar(),d=C(rn(1,a)).toVar();return rn(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),N_=gi([b_,w_]),R_=ie(([s,e,t,n,i,r,o,a,c,l,u])=>{const h=C(u).toVar(),d=C(l).toVar(),p=C(c).toVar(),_=C(a).toVar(),x=C(o).toVar(),g=C(r).toVar(),m=C(i).toVar(),T=C(n).toVar(),S=C(t).toVar(),w=C(e).toVar(),F=C(s).toVar(),L=C(rn(1,p)).toVar(),R=C(rn(1,d)).toVar();return C(rn(1,h)).toVar().mul(R.mul(F.mul(L).add(w.mul(p))).add(d.mul(S.mul(L).add(T.mul(p))))).add(h.mul(R.mul(m.mul(L).add(g.mul(p))).add(d.mul(x.mul(L).add(_.mul(p))))))}),C_=ie(([s,e,t,n,i,r,o,a,c,l,u])=>{const h=C(u).toVar(),d=C(l).toVar(),p=C(c).toVar(),_=k(a).toVar(),x=k(o).toVar(),g=k(r).toVar(),m=k(i).toVar(),T=k(n).toVar(),S=k(t).toVar(),w=k(e).toVar(),F=k(s).toVar(),L=C(rn(1,p)).toVar(),R=C(rn(1,d)).toVar();return C(rn(1,h)).toVar().mul(R.mul(F.mul(L).add(w.mul(p))).add(d.mul(S.mul(L).add(T.mul(p))))).add(h.mul(R.mul(m.mul(L).add(g.mul(p))).add(d.mul(x.mul(L).add(_.mul(p))))))}),L_=gi([R_,C_]),I_=ie(([s,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),r=Ie(s).toVar(),o=Ie(r.bitAnd(Ie(7))).toVar(),a=C(io(o.lessThan(Ie(4)),i,n)).toVar(),c=C(yt(2,io(o.lessThan(Ie(4)),n,i))).toVar();return aa(a,hr(o.bitAnd(Ie(1)))).add(aa(c,hr(o.bitAnd(Ie(2)))))}),P_=ie(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=C(e).toVar(),a=Ie(s).toVar(),c=Ie(a.bitAnd(Ie(15))).toVar(),l=C(io(c.lessThan(Ie(8)),o,r)).toVar(),u=C(io(c.lessThan(Ie(4)),r,io(c.equal(Ie(12)).or(c.equal(Ie(14))),o,i))).toVar();return aa(l,hr(c.bitAnd(Ie(1)))).add(aa(u,hr(c.bitAnd(Ie(2)))))}),vn=gi([I_,P_]),D_=ie(([s,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),r=_a(s).toVar();return k(vn(r.x,i,n),vn(r.y,i,n),vn(r.z,i,n))}),O_=ie(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=C(e).toVar(),a=_a(s).toVar();return k(vn(a.x,o,r,i),vn(a.y,o,r,i),vn(a.z,o,r,i))}),ci=gi([D_,O_]),U_=ie(([s])=>{const e=C(s).toVar();return yt(.6616,e)}),F_=ie(([s])=>{const e=C(s).toVar();return yt(.982,e)}),V_=ie(([s])=>{const e=k(s).toVar();return yt(.6616,e)}),B_=gi([U_,V_]),z_=ie(([s])=>{const e=k(s).toVar();return yt(.982,e)}),k_=gi([F_,z_]),Xn=ie(([s,e])=>{const t=O(e).toVar(),n=Ie(s).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(O(32).sub(t)))}),H_=ie(([s,e,t])=>{s.subAssign(t),s.bitXorAssign(Xn(t,O(4))),t.addAssign(e),e.subAssign(s),e.bitXorAssign(Xn(s,O(6))),s.addAssign(t),t.subAssign(e),t.bitXorAssign(Xn(e,O(8))),e.addAssign(s),s.subAssign(t),s.bitXorAssign(Xn(t,O(16))),t.addAssign(e),e.subAssign(s),e.bitXorAssign(Xn(s,O(19))),s.addAssign(t),t.subAssign(e),t.bitXorAssign(Xn(e,O(4))),e.addAssign(s)}),wo=ie(([s,e,t])=>{const n=Ie(t).toVar(),i=Ie(e).toVar(),r=Ie(s).toVar();return n.bitXorAssign(i),n.subAssign(Xn(i,O(14))),r.bitXorAssign(n),r.subAssign(Xn(n,O(11))),i.bitXorAssign(r),i.subAssign(Xn(r,O(25))),n.bitXorAssign(i),n.subAssign(Xn(i,O(16))),r.bitXorAssign(n),r.subAssign(Xn(n,O(4))),i.bitXorAssign(r),i.subAssign(Xn(r,O(14))),n.bitXorAssign(i),n.subAssign(Xn(i,O(24))),n}),wn=ie(([s])=>{const e=Ie(s).toVar();return C(e).div(C(Ie(O(4294967295))))}),Li=ie(([s])=>{const e=C(s).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),G_=ie(([s])=>{const e=O(s).toVar(),t=Ie(Ie(1)).toVar(),n=Ie(Ie(O(3735928559)).add(t.shiftLeft(Ie(2)).add(Ie(13)))).toVar();return wo(n.add(Ie(e)),n,n)}),W_=ie(([s,e])=>{const t=O(e).toVar(),n=O(s).toVar(),i=Ie(Ie(2)).toVar(),r=Ie().toVar(),o=Ie().toVar(),a=Ie().toVar();return r.assign(o.assign(a.assign(Ie(O(3735928559)).add(i.shiftLeft(Ie(2)).add(Ie(13)))))),r.addAssign(Ie(n)),o.addAssign(Ie(t)),wo(r,o,a)}),X_=ie(([s,e,t])=>{const n=O(t).toVar(),i=O(e).toVar(),r=O(s).toVar(),o=Ie(Ie(3)).toVar(),a=Ie().toVar(),c=Ie().toVar(),l=Ie().toVar();return a.assign(c.assign(l.assign(Ie(O(3735928559)).add(o.shiftLeft(Ie(2)).add(Ie(13)))))),a.addAssign(Ie(r)),c.addAssign(Ie(i)),l.addAssign(Ie(n)),wo(a,c,l)}),q_=ie(([s,e,t,n])=>{const i=O(n).toVar(),r=O(t).toVar(),o=O(e).toVar(),a=O(s).toVar(),c=Ie(Ie(4)).toVar(),l=Ie().toVar(),u=Ie().toVar(),h=Ie().toVar();return l.assign(u.assign(h.assign(Ie(O(3735928559)).add(c.shiftLeft(Ie(2)).add(Ie(13)))))),l.addAssign(Ie(a)),u.addAssign(Ie(o)),h.addAssign(Ie(r)),H_(l,u,h),l.addAssign(Ie(i)),wo(l,u,h)}),Y_=ie(([s,e,t,n,i])=>{const r=O(i).toVar(),o=O(n).toVar(),a=O(t).toVar(),c=O(e).toVar(),l=O(s).toVar(),u=Ie(Ie(5)).toVar(),h=Ie().toVar(),d=Ie().toVar(),p=Ie().toVar();return h.assign(d.assign(p.assign(Ie(O(3735928559)).add(u.shiftLeft(Ie(2)).add(Ie(13)))))),h.addAssign(Ie(l)),d.addAssign(Ie(c)),p.addAssign(Ie(a)),H_(h,d,p),h.addAssign(Ie(o)),d.addAssign(Ie(r)),wo(h,d,p)}),It=gi([G_,W_,X_,q_,Y_]),$_=ie(([s,e])=>{const t=O(e).toVar(),n=O(s).toVar(),i=Ie(It(n,t)).toVar(),r=_a().toVar();return r.x.assign(i.bitAnd(O(255))),r.y.assign(i.shiftRight(O(8)).bitAnd(O(255))),r.z.assign(i.shiftRight(O(16)).bitAnd(O(255))),r}),j_=ie(([s,e,t])=>{const n=O(t).toVar(),i=O(e).toVar(),r=O(s).toVar(),o=Ie(It(r,i,n)).toVar(),a=_a().toVar();return a.x.assign(o.bitAnd(O(255))),a.y.assign(o.shiftRight(O(8)).bitAnd(O(255))),a.z.assign(o.shiftRight(O(16)).bitAnd(O(255))),a}),li=gi([$_,j_]),K_=ie(([s])=>{const e=ke(s).toVar(),t=O().toVar(),n=O().toVar(),i=C($t(e.x,t)).toVar(),r=C($t(e.y,n)).toVar(),o=C(Li(i)).toVar(),a=C(Li(r)).toVar(),c=C(N_(vn(It(t,n),i,r),vn(It(t.add(O(1)),n),i.sub(1),r),vn(It(t,n.add(O(1))),i,r.sub(1)),vn(It(t.add(O(1)),n.add(O(1))),i.sub(1),r.sub(1)),o,a)).toVar();return B_(c)}),Z_=ie(([s])=>{const e=k(s).toVar(),t=O().toVar(),n=O().toVar(),i=O().toVar(),r=C($t(e.x,t)).toVar(),o=C($t(e.y,n)).toVar(),a=C($t(e.z,i)).toVar(),c=C(Li(r)).toVar(),l=C(Li(o)).toVar(),u=C(Li(a)).toVar(),h=C(L_(vn(It(t,n,i),r,o,a),vn(It(t.add(O(1)),n,i),r.sub(1),o,a),vn(It(t,n.add(O(1)),i),r,o.sub(1),a),vn(It(t.add(O(1)),n.add(O(1)),i),r.sub(1),o.sub(1),a),vn(It(t,n,i.add(O(1))),r,o,a.sub(1)),vn(It(t.add(O(1)),n,i.add(O(1))),r.sub(1),o,a.sub(1)),vn(It(t,n.add(O(1)),i.add(O(1))),r,o.sub(1),a.sub(1)),vn(It(t.add(O(1)),n.add(O(1)),i.add(O(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return k_(h)}),cC=gi([K_,Z_]),J_=ie(([s])=>{const e=ke(s).toVar(),t=O().toVar(),n=O().toVar(),i=C($t(e.x,t)).toVar(),r=C($t(e.y,n)).toVar(),o=C(Li(i)).toVar(),a=C(Li(r)).toVar(),c=k(N_(ci(li(t,n),i,r),ci(li(t.add(O(1)),n),i.sub(1),r),ci(li(t,n.add(O(1))),i,r.sub(1)),ci(li(t.add(O(1)),n.add(O(1))),i.sub(1),r.sub(1)),o,a)).toVar();return B_(c)}),Q_=ie(([s])=>{const e=k(s).toVar(),t=O().toVar(),n=O().toVar(),i=O().toVar(),r=C($t(e.x,t)).toVar(),o=C($t(e.y,n)).toVar(),a=C($t(e.z,i)).toVar(),c=C(Li(r)).toVar(),l=C(Li(o)).toVar(),u=C(Li(a)).toVar(),h=k(L_(ci(li(t,n,i),r,o,a),ci(li(t.add(O(1)),n,i),r.sub(1),o,a),ci(li(t,n.add(O(1)),i),r,o.sub(1),a),ci(li(t.add(O(1)),n.add(O(1)),i),r.sub(1),o.sub(1),a),ci(li(t,n,i.add(O(1))),r,o,a.sub(1)),ci(li(t.add(O(1)),n,i.add(O(1))),r.sub(1),o,a.sub(1)),ci(li(t,n.add(O(1)),i.add(O(1))),r,o.sub(1),a.sub(1)),ci(li(t.add(O(1)),n.add(O(1)),i.add(O(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return k_(h)}),lC=gi([J_,Q_]),uC=ie(([s])=>{const e=C(s).toVar(),t=O(sn(e)).toVar();return wn(It(t))}),hC=ie(([s])=>{const e=ke(s).toVar(),t=O(sn(e.x)).toVar(),n=O(sn(e.y)).toVar();return wn(It(t,n))}),dC=ie(([s])=>{const e=k(s).toVar(),t=O(sn(e.x)).toVar(),n=O(sn(e.y)).toVar(),i=O(sn(e.z)).toVar();return wn(It(t,n,i))}),fC=ie(([s])=>{const e=Be(s).toVar(),t=O(sn(e.x)).toVar(),n=O(sn(e.y)).toVar(),i=O(sn(e.z)).toVar(),r=O(sn(e.w)).toVar();return wn(It(t,n,i,r))}),e0=ie(([s])=>{const e=C(s).toVar(),t=O(sn(e)).toVar();return k(wn(It(t,O(0))),wn(It(t,O(1))),wn(It(t,O(2))))}),t0=ie(([s])=>{const e=ke(s).toVar(),t=O(sn(e.x)).toVar(),n=O(sn(e.y)).toVar();return k(wn(It(t,n,O(0))),wn(It(t,n,O(1))),wn(It(t,n,O(2))))}),n0=ie(([s])=>{const e=k(s).toVar(),t=O(sn(e.x)).toVar(),n=O(sn(e.y)).toVar(),i=O(sn(e.z)).toVar();return k(wn(It(t,n,i,O(0))),wn(It(t,n,i,O(1))),wn(It(t,n,i,O(2))))}),i0=ie(([s])=>{const e=Be(s).toVar(),t=O(sn(e.x)).toVar(),n=O(sn(e.y)).toVar(),i=O(sn(e.z)).toVar(),r=O(sn(e.w)).toVar();return k(wn(It(t,n,i,r,O(0))),wn(It(t,n,i,r,O(1))),wn(It(t,n,i,r,O(2))))}),s0=gi([e0,t0,n0,i0]),Oc=ie(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=O(e).toVar(),a=k(s).toVar(),c=C(0).toVar(),l=C(1).toVar();return Wt({start:O(0),end:o},({i:u})=>{c.addAssign(l.mul(cC(a))),l.mulAssign(i),a.mulAssign(r)}),c}),r0=ie(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=O(e).toVar(),a=k(s).toVar(),c=k(0).toVar(),l=C(1).toVar();return Wt({start:O(0),end:o},({i:u})=>{c.addAssign(l.mul(lC(a))),l.mulAssign(i),a.mulAssign(r)}),c}),pC=ie(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=O(e).toVar(),a=k(s).toVar();return ke(Oc(a,o,r,i),Oc(a.add(k(O(19),O(193),O(17))),o,r,i))}),mC=ie(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=O(e).toVar(),a=k(s).toVar(),c=k(r0(a,o,r,i)).toVar(),l=C(Oc(a.add(k(O(19),O(193),O(17))),o,r,i)).toVar();return Be(c,l)}),o0=ie(([s,e,t,n,i,r,o])=>{const a=O(o).toVar(),c=C(r).toVar(),l=O(i).toVar(),u=O(n).toVar(),h=O(t).toVar(),d=O(e).toVar(),p=ke(s).toVar(),_=k(s0(ke(d.add(u),h.add(l)))).toVar(),x=ke(_.x,_.y).toVar();x.subAssign(.5),x.mulAssign(c),x.addAssign(.5);const g=ke(ke(C(d),C(h)).add(x)).toVar(),m=ke(g.sub(p)).toVar();return mt(a.equal(O(2)),()=>ln(m.x).add(ln(m.y))),mt(a.equal(O(3)),()=>si(ln(m.x),ln(m.y))),Mo(m,m)}),a0=ie(([s,e,t,n,i,r,o,a,c])=>{const l=O(c).toVar(),u=C(a).toVar(),h=O(o).toVar(),d=O(r).toVar(),p=O(i).toVar(),_=O(n).toVar(),x=O(t).toVar(),g=O(e).toVar(),m=k(s).toVar(),T=k(s0(k(g.add(p),x.add(d),_.add(h)))).toVar();T.subAssign(.5),T.mulAssign(u),T.addAssign(.5);const S=k(k(C(g),C(x),C(_)).add(T)).toVar(),w=k(S.sub(m)).toVar();return mt(l.equal(O(2)),()=>ln(w.x).add(ln(w.y).add(ln(w.z)))),mt(l.equal(O(3)),()=>si(si(ln(w.x),ln(w.y)),ln(w.z))),Mo(w,w)}),No=gi([o0,a0]),gC=ie(([s,e,t])=>{const n=O(t).toVar(),i=C(e).toVar(),r=ke(s).toVar(),o=O().toVar(),a=O().toVar(),c=ke($t(r.x,o),$t(r.y,a)).toVar(),l=C(1e6).toVar();return Wt({start:-1,end:O(1),name:"x",condition:"<="},({x:u})=>{Wt({start:-1,end:O(1),name:"y",condition:"<="},({y:h})=>{const d=C(No(c,u,h,o,a,i,n)).toVar();l.assign(go(l,d))})}),mt(n.equal(O(0)),()=>{l.assign(gr(l))}),l}),_C=ie(([s,e,t])=>{const n=O(t).toVar(),i=C(e).toVar(),r=ke(s).toVar(),o=O().toVar(),a=O().toVar(),c=ke($t(r.x,o),$t(r.y,a)).toVar(),l=ke(1e6,1e6).toVar();return Wt({start:-1,end:O(1),name:"x",condition:"<="},({x:u})=>{Wt({start:-1,end:O(1),name:"y",condition:"<="},({y:h})=>{const d=C(No(c,u,h,o,a,i,n)).toVar();mt(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),mt(n.equal(O(0)),()=>{l.assign(gr(l))}),l}),xC=ie(([s,e,t])=>{const n=O(t).toVar(),i=C(e).toVar(),r=ke(s).toVar(),o=O().toVar(),a=O().toVar(),c=ke($t(r.x,o),$t(r.y,a)).toVar(),l=k(1e6,1e6,1e6).toVar();return Wt({start:-1,end:O(1),name:"x",condition:"<="},({x:u})=>{Wt({start:-1,end:O(1),name:"y",condition:"<="},({y:h})=>{const d=C(No(c,u,h,o,a,i,n)).toVar();mt(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),mt(n.equal(O(0)),()=>{l.assign(gr(l))}),l}),vC=ie(([s,e,t])=>{const n=O(t).toVar(),i=C(e).toVar(),r=k(s).toVar(),o=O().toVar(),a=O().toVar(),c=O().toVar(),l=k($t(r.x,o),$t(r.y,a),$t(r.z,c)).toVar(),u=C(1e6).toVar();return Wt({start:-1,end:O(1),name:"x",condition:"<="},({x:h})=>{Wt({start:-1,end:O(1),name:"y",condition:"<="},({y:d})=>{Wt({start:-1,end:O(1),name:"z",condition:"<="},({z:p})=>{const _=C(No(l,h,d,p,o,a,c,i,n)).toVar();u.assign(go(u,_))})})}),mt(n.equal(O(0)),()=>{u.assign(gr(u))}),u}),yC=ie(([s,e,t])=>{const n=O(t).toVar(),i=C(e).toVar(),r=k(s).toVar(),o=O().toVar(),a=O().toVar(),c=O().toVar(),l=k($t(r.x,o),$t(r.y,a),$t(r.z,c)).toVar(),u=ke(1e6,1e6).toVar();return Wt({start:-1,end:O(1),name:"x",condition:"<="},({x:h})=>{Wt({start:-1,end:O(1),name:"y",condition:"<="},({y:d})=>{Wt({start:-1,end:O(1),name:"z",condition:"<="},({z:p})=>{const _=C(No(l,h,d,p,o,a,c,i,n)).toVar();mt(_.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(_)}).elseif(_.lessThan(u.y),()=>{u.y.assign(_)})})})}),mt(n.equal(O(0)),()=>{u.assign(gr(u))}),u}),SC=ie(([s,e,t])=>{const n=O(t).toVar(),i=C(e).toVar(),r=k(s).toVar(),o=O().toVar(),a=O().toVar(),c=O().toVar(),l=k($t(r.x,o),$t(r.y,a),$t(r.z,c)).toVar(),u=k(1e6,1e6,1e6).toVar();return Wt({start:-1,end:O(1),name:"x",condition:"<="},({x:h})=>{Wt({start:-1,end:O(1),name:"y",condition:"<="},({y:d})=>{Wt({start:-1,end:O(1),name:"z",condition:"<="},({z:p})=>{const _=C(No(l,h,d,p,o,a,c,i,n)).toVar();mt(_.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(_)}).elseif(_.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(_)}).elseif(_.lessThan(u.z),()=>{u.z.assign(_)})})})}),mt(n.equal(O(0)),()=>{u.assign(gr(u))}),u});io.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});aa.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});sn.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});b_.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});w_.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});R_.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});C_.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});I_.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});P_.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});D_.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});O_.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});U_.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});F_.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});V_.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});z_.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Xn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});wo.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});wn.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});Li.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});G_.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});W_.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});X_.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});q_.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});Y_.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});$_.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});j_.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});K_.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});Z_.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});J_.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});Q_.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});uC.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});hC.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});dC.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});fC.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});e0.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});t0.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});n0.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});i0.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});Oc.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});r0.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});pC.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});mC.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});o0.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});a0.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});gC.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});_C.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});xC.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});vC.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});yC.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});SC.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const TC=ie(([s])=>{const e=k(s).toVar(),t=C(e.x).toVar(),n=C(e.y).toVar(),i=C(e.z).toVar();mt(n.lessThan(1e-4),()=>k(i,i,i)).else(()=>{t.assign(yt(6,t.sub(To(t))));const r=O(Hm(t)).toVar(),o=C(t.sub(C(r))).toVar(),a=C(i.mul(rn(1,n))).toVar(),c=C(i.mul(rn(1,n.mul(o)))).toVar(),l=C(i.mul(rn(1,n.mul(rn(1,o))))).toVar();return mt(r.equal(O(0)),()=>k(i,l,a)).elseif(r.equal(O(1)),()=>k(c,i,a)).elseif(r.equal(O(2)),()=>k(a,i,l)).elseif(r.equal(O(3)),()=>k(a,c,i)).elseif(r.equal(O(4)),()=>k(l,a,i)),k(i,a,c)})}),MC=ie(([s])=>{const e=k(s).toVar(),t=C(e.x).toVar(),n=C(e.y).toVar(),i=C(e.z).toVar(),r=C(go(t,go(n,i))).toVar(),o=C(si(t,si(n,i))).toVar(),a=C(o.sub(r)).toVar(),c=C().toVar(),l=C().toVar(),u=C().toVar();return u.assign(o),mt(o.greaterThan(0),()=>{l.assign(a.div(o))}).else(()=>{l.assign(0)}),mt(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{mt(t.greaterThanEqual(o),()=>{c.assign(n.sub(i).div(a))}).elseif(n.greaterThanEqual(o),()=>{c.assign(ii(2,i.sub(t).div(a)))}).else(()=>{c.assign(ii(4,t.sub(n).div(a)))}),c.mulAssign(1/6),mt(c.lessThan(0),()=>{c.addAssign(1)})}),k(c,l,u)});TC.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});MC.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const EC=ie(([s])=>{const e=k(s).toVar(),t=ym(Um(e,k(.04045))).toVar(),n=k(e.div(12.92)).toVar(),i=k(ji(si(e.add(k(.055)),k(0)).div(1.055),k(2.4))).toVar();return Nn(n,i,t)});EC.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});var qr,xu,rc=!1,Ho=!1,hp;const Sa=new fh,c0=document.querySelector("canvas.webgl"),wi=new FM,AC=new HA;AC.load("environment/forest.exr",s=>{console.log(s),s.mapping=fc,wi.background=new We(16316921),wi.environment=s});const l0=new AA;l0.setDecoderPath("/draco/");const Ph=new WE;Ph.setDRACOLoader(l0);let oc=null;Ph.load("/models/Uaz/uaz-base.glb",s=>{s.scene.scale.set(1,1,1),qr=s.scene,qr.name="base_car",console.log(qr.name),wi.add(qr),s.animations,s.scene,s.scenes,s.cameras});const al=new Bn(new ha(100,100),new fa({color:"#F8F9F9",metalness:0,roughness:.5}));al.receiveShadow=!0;al.rotation.x=-Math.PI*.5;al.name="floor";wi.add(al);const bC=new im(16777215,2.4);wi.add(bC);const Wi={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Wi.width=window.innerWidth,Wi.height=window.innerHeight,gs.aspect=Wi.width/Wi.height,gs.updateProjectionMatrix(),pr.setSize(Wi.width,Wi.height),pr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const gs=new Vn(75,Wi.width/Wi.height,.1,100);gs.position.set(2,8,2);wi.add(gs);const Xi={roof_rack:!0,roof:"roof",two_tone_paint:!1,color_primary:"rgb(56, 111, 89)"};Sa.add(Xi,"roof",{Standard:0,"High roof":1,"Folding roof":2});Sa.add(Xi,"roof_rack");Sa.add(Xi,"two_tone_paint");Sa.addColor(Xi,"color_primary");const Ii=new LE(gs,c0);Ii.target.set(0,.75,0);Ii.enableDamping=!0;Ii.screenSpacePanning=!1;Ii.minDistance=4;Ii.maxDistance=8;Ii.rotateSpeed=.5;Ii.panSpeed=0;Ii.minPolarAngle=0;const pr=new UM({antialias:!0,canvas:c0});pr.shadowMap.enabled=!0;pr.shadowMap.type=pp;pr.setSize(Wi.width,Wi.height);pr.setPixelRatio(Math.min(window.devicePixelRatio,2));const wC=new mE;let dp=0;document.addEventListener("keydown",function(s){switch(s.keyCode){case 65:qr.rotation.y-=.05;break;case 68:qr.rotation.y+=.05;break}});var Yr=wi.children;for(let s=0;s<Yr.length;s++)console.log(Yr[s]);const u0=()=>{const s=wC.getElapsedTime(),e=s-dp;if(dp=s,oc&&oc.update(e),Ii.update(),Xi.two_tone_paint==!0&&rc==!1&&(Xi.color_secondary="rgb(56, 111, 89)",hp=Sa.addColor(Xi,"color_secondary"),rc=!0),Xi.two_tone_paint==!1&&rc==!0&&(hp.hide(),rc=!1),Xi.roof==1&&Ho==!1&&Ph.load("/models/Uaz/highroof.glb",t=>{t.scene.scale.set(1,1,1),xu=t.scene,xu.name="high_roof",wi.add(xu),Ho=!0,oc=new NE(t.scene),oc.clipAction(t.animations[2]).play()}),Ho==!0&&Xi.roof==0){Ho=!1,Yr=wi.children;for(let t=0;t<Yr.length;t++)Yr[t].name=="high_roof"&&wi.remove(Yr[t]);console.log(Ho)}pr.render(wi,gs),gs.lookAt(0,10,0),gs.position.y<1.2&&(gs.position.y=1.2),Ii.target.set(0,0,0),Ii.update(),window.requestAnimationFrame(u0)};u0();
//# sourceMappingURL=index-DiaBR5eA.js.map
