import{A as r,B as u,C as v,D as C,E as I,F as f,G as y,H as s,I as _,J as F,K as g,L as A,M as te,N as ne,O as D,P as M,Q as ie,R as oe,S as re,W as ae,Y as le,Z as se,a as S,b as w,ba as me,c as P,ca as T,d as $,da as ce,e as G,ea as pe,f as H,fa as ue,g as U,ga as de,h as W,ha as fe,i as E,ia as he,j as h,ja as be,k as Z,ka as ge,l as N,la as ke,m as B,n as J,o as K,p as Q,q as X,r as L,s as m,t as b,u as R,v as Y,w as p,x as ee,y as d,z as l}from"./chunk-X5AV6XZR.js";var O=(()=>{let e=class e{constructor(){this.customStyle={color:"#064D9E",fontWeight:600},this.sanitizer=E(ae),this.detailClick=new Y}set content(i){typeof i.abstract=="string"?this.book=w(S({},i),{abstract:this.sanitizer.bypassSecurityTrustHtml(i.abstract)}):this.book=i}handleDetailClick(i){i.preventDefault(),console.log("Click Details-Link:",i),this.detailClick.emit(this.book)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-book-card"]],inputs:{content:"content"},outputs:{detailClick:"detailClick"},standalone:!0,features:[g],decls:7,vars:5,consts:[["href","",3,"click"],[3,"innerHTML"]],template:function(n,a){n&1&&(l(0,"h3"),s(1),r(),l(2,"h4"),s(3),r(),l(4,"a",0),f("click",function(j){return a.handleDetailClick(j)}),s(5,"Details"),r(),u(6,"p",1)),n&2&&(m(1),_(a.book.title),m(1),ee(a.customStyle),m(1),_(a.book.author),m(3),p("innerHTML",a.book.abstract,K))},styles:["[_nghost-%COMP%]{display:inline-block;border-radius:2px;margin:1rem;padding:1rem;width:300px;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d;transition:all .3s cubic-bezier(.25,.8,.25,1)}[_nghost-%COMP%]:hover{box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}"]});let t=e;return t})();var ve=(()=>{let e=class e{transform(i,n){return n?i?i.filter(a=>a.title.toLocaleLowerCase().includes(n.toLocaleLowerCase())):[]:i||[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=Z({name:"bookFilter",type:e,pure:!0,standalone:!0});let t=e;return t})();function V(t,e){let o=!e?.manualCleanup;o&&!e?.injector&&J(V);let i=o?e?.injector?.get(R)??E(R):null,n;e?.requireSync?n=L({kind:0}):n=L({kind:1,value:e?.initialValue});let a=t.subscribe({next:c=>n.set({kind:1,value:c}),error:c=>{if(e?.rejectErrors)throw c;n.set({kind:2,error:c})}});return i?.onDestroy(a.unsubscribe.bind(a)),X(()=>{let c=n();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new H(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var k=(()=>{var e;let o=class o{constructor(n){$(this,e,"http://localhost:4730");this.http=n}getAll(){return this.http.get(`${P(this,e)}/books`)}getByIsbn(n){return this.http.get(`${P(this,e)}/books/${n}`)}create(n){return this.http.post("http://localhost:4730/books",n)}};e=new WeakMap,o.\u0275fac=function(a){return new(a||o)(W(re))},o.\u0275prov=U({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();function Se(t,e){if(t&1){let o=I();l(0,"app-book-card",3),f("detailClick",function(n){N(o);let a=y();return B(a.goToBookDetails(n))}),r()}if(t&2){let o=e.$implicit;p("content",o)}}var Ce=(()=>{let e=class e{constructor(i,n){this.bookApi=i,this.router=n,this.bookSearchTerm="",this.books=V(this.bookApi.getAll())}goToBookDetails(i){this.router.navigate(["books","detail",i.isbn])}updateBookSearchTerm(i){this.bookSearchTerm=i.target.value}};e.\u0275fac=function(n){return new(n||e)(b(k),b(le))},e.\u0275cmp=h({type:e,selectors:[["app-book"]],standalone:!0,features:[g],decls:6,vars:4,consts:[["type","search","placeholder","Filter your books...",1,"book-filter",3,"input"],["routerLink","new"],[3,"content","detailClick",4,"ngFor","ngForOf"],[3,"content","detailClick"]],template:function(n,a){n&1&&(l(0,"input",0),f("input",function(j){return a.updateBookSearchTerm(j)}),r(),l(1,"div")(2,"a",1),s(3,"Create Book"),r()(),d(4,Se,1,1,"app-book-card",2),A(5,"bookFilter")),n&2&&(m(4),p("ngForOf",ne(5,1,a.books(),a.bookSearchTerm)))},dependencies:[oe,D,O,ve,se],styles:[".book-filter[_ngcontent-%COMP%]{display:block;margin:1rem;padding:12px 20px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}"]});let t=e;return t})();function we(t,e){if(t&1&&(v(0),l(1,"h3"),s(2),r(),l(3,"h4"),s(4),r(),l(5,"section",1)(6,"p"),s(7),l(8,"i"),s(9),r()(),u(10,"img",2),r(),C()),t&2){let o=e.ngIf;m(2),F(" ",o.title," "),m(2),F("ISBN - ",o.isbn,""),m(3),F(" ",o.abstract," "),m(2),_(o.author),m(1),p("src",o.cover,Q)("alt",o.title)}}var ye=(()=>{let e=class e{constructor(i){this.bookApi=i}set isbn(i){this.book$=this.bookApi.getByIsbn(i)}};e.\u0275fac=function(n){return new(n||e)(b(k))},e.\u0275cmp=h({type:e,selectors:[["app-book-detail"]],inputs:{isbn:"isbn"},standalone:!0,features:[g],decls:2,vars:3,consts:[[4,"ngIf"],[1,"book-insights"],[1,"book-cover",3,"src","alt"]],template:function(n,a){n&1&&(d(0,we,11,6,"ng-container",0),A(1,"async")),n&2&&p("ngIf",te(1,1,a.book$))},dependencies:[ie,M],styles:["[_nghost-%COMP%]{display:block;margin:1rem}.book-insights[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr;gap:2rem}.book-cover[_ngcontent-%COMP%]{max-height:200px}"]});let t=e;return t})();var _e=(t,e)=>confirm("Do you really want to leave?");function z(){return t=>{let e=t.value;return e&&/[0-9]+/.test(e)?{invalidAuthor:!0}:null}}function Ee(t,e){t&1&&(l(0,"small"),s(1," Please insert a title. "),r())}function Ne(t,e){t&1&&(l(0,"small"),s(1," Please insert an Author. "),r())}function Be(t,e){t&1&&(l(0,"small"),s(1," Der Name eines Autors darf keine Zahlen beinhalten! "),r())}function Ie(t,e){if(t&1){let o=I();v(0),l(1,"label",1)(2,"span"),s(3,"Author"),r(),u(4,"input",13),d(5,Ne,2,0,"small",4)(6,Be,2,0,"small",4),r(),l(7,"button",14),f("click",function(){let a=N(o).index,c=y();return B(c.deleteAuthor(a))}),s(8," Remove Author "),r(),C()}if(t&2){let o=e.$implicit,i=e.index;m(4),p("formControlName",i),m(1),p("ngIf",(o==null?null:o.dirty)&&(o==null?null:o.hasError("required"))),m(1),p("ngIf",(o==null?null:o.dirty)&&(o==null?null:o.hasError("invalidAuthor")))}}function Fe(t,e){if(t&1&&(l(0,"div")(1,"h2"),s(2,"Successfully submitted"),r(),u(3,"app-book-card",15),r()),t&2){let o=y();m(3),p("content",o.newBook)}}var xe=(()=>{let e=class e{constructor(i,n){this.formBuilder=i,this.bookApiService=n,this.submitted=!1,this.form=this.formBuilder.nonNullable.group({title:["",[T.required]],subtitle:[""],authors:this.formBuilder.array([["",[T.required,z()]]]),abstract:[""],isbn:[""],cover:[""]})}submit(){let i=this.form.getRawValue().authors[0]||"n/a";this.bookApiService.create(w(S({},this.form.getRawValue()),{author:i})).pipe(G(1)).subscribe(n=>{this.newBook=n,this.submitted=!0})}get authors(){return this.form.controls.authors}deleteAuthor(i){this.authors.removeAt(i)}addAuthor(){this.authors.push(new ue("",[T.required,z()]))}};e.\u0275fac=function(n){return new(n||e)(b(ge),b(k))},e.\u0275cmp=h({type:e,selectors:[["app-book-new"]],standalone:!0,features:[g],decls:32,vars:5,consts:[[3,"formGroup","ngSubmit"],[1,"form-field"],["formControlName","isbn"],["formControlName","title"],[4,"ngIf"],["formControlName","subtitle"],["formArrayName","authors"],[4,"ngFor","ngForOf"],["type","button",3,"click"],["formControlName","abstract"],["formControlName","cover"],[1,"form-actions"],["type","submit",3,"disabled"],[3,"formControlName"],[3,"click"],[3,"content"]],template:function(n,a){if(n&1&&(l(0,"h2"),s(1,"New"),r(),l(2,"form",0),f("ngSubmit",function(){return a.submit()}),l(3,"label",1)(4,"span"),s(5,"ISBN"),r(),u(6,"input",2),r(),l(7,"label",1)(8,"span"),s(9,"Title"),r(),u(10,"input",3),d(11,Ee,2,0,"small",4),r(),l(12,"label",1)(13,"span"),s(14,"Subtitle"),r(),u(15,"input",5),r(),v(16,6),d(17,Ie,9,3,"ng-container",7),C(),l(18,"button",8),f("click",function(){return a.addAuthor()}),s(19," Author hinzuf\xFCgen "),r(),l(20,"label",1)(21,"span"),s(22,"Abstract"),r(),u(23,"input",9),r(),l(24,"label",1)(25,"span"),s(26,"Cover"),r(),u(27,"input",10),r(),l(28,"div",11)(29,"button",12),s(30,"Save"),r()()(),d(31,Fe,4,1,"div",4)),n&2){let c;m(2),p("formGroup",a.form),m(9),p("ngIf",((c=a.form.get("title"))==null?null:c.dirty)&&((c=a.form.get("title"))==null?null:c.hasError("required"))),m(6),p("ngForOf",a.authors.controls),m(12),p("disabled",a.form.invalid),m(2),p("ngIf",a.submitted)}},dependencies:[ke,de,me,ce,pe,fe,be,he,M,D,O],styles:["[_nghost-%COMP%]{display:block;margin:1rem}.form-field[_ngcontent-%COMP%]{display:block;margin-top:1rem}.form-field[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem}.form-field[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{padding:12px 20px 12px 6px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;min-width:250px}.form-field-hint[_ngcontent-%COMP%]{display:block;color:#3c3c3c}.form-actions[_ngcontent-%COMP%]{margin-top:1rem}"]});let t=e;return t})();var kt=[{path:"",component:Ce},{path:"new",component:xe},{path:"detail/:isbn",component:ye,canDeactivate:[_e]}];export{kt as bookRoutes};
