"use strict";(self.webpackJsonpform=self.webpackJsonpform||[]).push([[671],{2671:(u,d,n)=>{n.r(d),n.d(d,{HomeComponent:()=>f});var t=n(9379),s=n(1714),a=n(2748),c=n(9648),l=n(4417),o=n(5100);function g(r,i){1&r&&(o.TgZ(0,"div",10),o._uU(1,"Todo has been added"),o.qZA())}let f=(()=>{class r{constructor(e){this._fb=e,this.show=!1,this.form=this._fb.group({todo:new t.NI(null,t.kI.required),completed:new t.NI(!1,{nonNullable:!0,validators:t.kI.required})})}go(){(0,c.UO)("/")}sendForm(){if(this.form.invalid)return;const{completed:e,todo:m}=this.form.value;l.storeTodo.addTodo({completed:e,id:l.storeTodo.id,text:m}),this.form.reset(),this.show=!0,setTimeout(()=>{this.show=!1},1500)}}return r.\u0275fac=function(e){return new(e||r)(o.Y36(t.qu))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-home"]],standalone:!0,features:[o.jDz],decls:15,vars:2,consts:[[1,"Home"],["class","alert",4,"ngIf"],[1,"card"],[1,"form",3,"formGroup","ngSubmit"],[1,"form__row"],["for","todo"],["type","text","id","todo","formControlName","todo",1,"form__input"],[1,"form__row","form__flex"],["type","checkbox","formControlName","completed","id","todo"],[1,"form__row","text-right"],[1,"alert"]],template:function(e,m){1&e&&(o.TgZ(0,"div",0),o.YNc(1,g,2,0,"div",1),o.TgZ(2,"div",2)(3,"form",3),o.NdJ("ngSubmit",function(){return m.sendForm()}),o.TgZ(4,"div",4)(5,"label",5),o._uU(6,"Todo"),o.qZA(),o._UZ(7,"input",6),o.qZA(),o.TgZ(8,"div",7)(9,"label",5),o._uU(10,"Completed"),o.qZA(),o._UZ(11,"input",8),o.qZA(),o.TgZ(12,"div",9)(13,"button"),o._uU(14,"Send"),o.qZA()()()()()),2&e&&(o.xp6(1),o.Q6J("ngIf",m.show),o.xp6(2),o.Q6J("formGroup",m.form))},dependencies:[s.Bz,t.UX,t._Y,t.Fj,t.Wl,t.JJ,t.JL,t.sg,t.u,a.ez,a.O5],styles:[".Home[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;padding-top:5rem}.Home[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{width:400px;background:#04a777;color:var(--white);padding:.75rem;font-weight:700;border-radius:var(--radius);border:1px solid #04a777;box-sizing:border-box;margin-bottom:2rem}.Home[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:100%;background-color:var(--white);max-width:400px;border-radius:var(--radius);padding:2rem;box-sizing:border-box;box-shadow:0 0 20px -5px var(--light-grayish-blue-2)}.Home[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form__row[_ngcontent-%COMP%]{margin-bottom:1rem}.Home[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form__row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:700;color:var(--blue);margin-bottom:1rem}.Home[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form__row[_ngcontent-%COMP%]:last-child{margin-bottom:0}.Home[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form__flex[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.Home[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form__flex[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin:0}.Home[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form__input[_ngcontent-%COMP%]{width:100%;min-height:40px;border-radius:5px;padding:0 1rem;box-sizing:border-box;border:1px solid var(--blue);font-family:inherit}.Home[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--blue);color:var(--white);font-family:inherit;border-radius:var(--radius);height:40px;padding:0 1rem;border:none;font-weight:700}.text-right[_ngcontent-%COMP%]{text-align:right}"]}),r})()}}]);