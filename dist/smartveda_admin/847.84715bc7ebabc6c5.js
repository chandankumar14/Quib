"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[847],{6847:(me,_,l)=>{l.r(_),l.d(_,{QuibModule:()=>ge});var u=l(9808),h=l(1083),d=l(8441),p=l(9783),e=l(5e3),f=l(9996),Z=l(7650),v=l(7398),g=l(4255),T=l(1424),Q=l(845),x=l(4119),A=l(9114);const q=["dt"];function C(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",11),e.TgZ(1,"div",12),e._UZ(2,"i",13),e.TgZ(3,"input",14),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.qZA()}}function U(n,s){if(1&n&&(e.TgZ(0,"th",15),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.Oqu(t.headers)}}function y(n,s){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"th",15),e._uU(2,"S.no"),e.qZA(),e.YNc(3,U,2,1,"th",16),e.TgZ(4,"th"),e._uU(5,"Action"),e.qZA(),e.qZA()),2&n){const t=s.$implicit;e.xp6(3),e.Q6J("ngForOf",t)}}function M(n,s){if(1&n&&(e.TgZ(0,"button",22),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.isEnabled)}}function w(n,s){if(1&n&&(e.TgZ(0,"button",23),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.isEnabled)}}function N(n,s){if(1&n&&(e.TgZ(0,"button",22),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.isBumped)}}function L(n,s){if(1&n&&(e.TgZ(0,"button",24),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.isBumped)}}function R(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e.TgZ(16,"div",17),e.YNc(17,M,2,1,"button",18),e.YNc(18,w,2,1,"button",19),e.qZA(),e.qZA(),e.TgZ(19,"td"),e.TgZ(20,"div",17),e.YNc(21,N,2,1,"button",18),e.YNc(22,L,2,1,"button",20),e.qZA(),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA(),e.TgZ(25,"td"),e.TgZ(26,"div",17),e.TgZ(27,"button",21),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().deleteQuib(null==r?null:r.id)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.rowIndex,i=s.$implicit;e.xp6(2),e.Oqu(t+1),e.xp6(2),e.Oqu(i.displayName),e.xp6(2),e.Oqu(i.movieId),e.xp6(2),e.Oqu(i.body),e.xp6(2),e.Oqu(i.time),e.xp6(2),e.Oqu(i.createdDate),e.xp6(2),e.Oqu(i.postedDate),e.xp6(3),e.Q6J("ngIf",!0===i.isEnabled),e.xp6(1),e.Q6J("ngIf",0==i.isEnabled||null),e.xp6(3),e.Q6J("ngIf",1==i.isBumped),e.xp6(1),e.Q6J("ngIf",!1===i.isBumped||null),e.xp6(2),e.Oqu(i.quibType)}}function I(n,s){1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td",25),e._uU(2," No Records Found. "),e.qZA(),e.qZA())}const F=function(){return[10,50,100]},B=function(){return["user","movies"]},D=function(){return{width:"40vw"}};let O=(()=>{class n{constructor(t,i,o,r,a){this.QuibService=t,this.ngxLoader=i,this.toastr=o,this.ActivatedRoute=r,this.confirmationService=a}ngOnInit(){this.sidebarSpacing="contracted",this.fgsType=d.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.ActivatedRoute.queryParams.subscribe(t=>{this.payload=t}),this.AdminQuibList(this.payload),this.cols=[{field:"user",show:!0,headers:"User"},{field:"movies",show:!0,headers:"Movies"},{field:"quib",show:!0,headers:"Quib"},{field:"time",show:!0,headers:"Time"},{field:"createdDate",show:!0,headers:"Created Date"},{field:"postedDate",show:!0,headers:"Posted Date"},{field:"isEnabled",show:!0,headers:"Is Enabled"},{field:"isBumped",show:!0,headers:"Is Bumped"},{field:"quibType",show:!0,headers:"Quib Type"}]}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}applyFilterGlobal(t,i){this.dt.filterGlobal(t.target.value,i)}AdminQuibList(t){this.QuibService.AdminQuibList(t).subscribe(i=>{this.Admin_Quib=i,this.ngxLoader.stop()})}deleteQuib(t){this.confirmationService.confirm({message:"Are you sure that you want to delete Quib ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.QuibService.deleteQuib(t).subscribe(i=>{this.toastr.showSuccess(" Quib deleted successfully","Quib delete"),this.AdminQuibList(this.payload)})}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.V),e.Y36(d.LA),e.Y36(Z.$),e.Y36(h.gz),e.Y36(p.YP))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-quib"]],viewQuery:function(t,i){if(1&t&&e.Gf(q,5),2&t){let o;e.iGM(o=e.CRH())&&(i.dt=o.first)}},features:[e._Bn([p.YP])],decls:11,vars:18,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped,width:max-content",3,"value","columns","paginator","rows","rowsPerPageOptions","showCurrentPageReport","resizableColumns","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"fgsColor","fgsType"],["header","Confirmation","position","top","icon","pi pi-exclamation-triangle",3,"baseZIndex"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","id","search-box","placeholder","Search by User or Movies",3,"input"],["pResizableColumn",""],["pResizableColumn","",4,"ngFor","ngForOf"],[1,"btn-grp"],["pButton","","type","button","class","p-button-success","style","height: 30px;",4,"ngIf"],["pButton","","type","button","class","p-button-danger","style","height: 30px",4,"ngIf"],["pButton","","type","button","class","p-button-danger","pTooltip","mark as Saved","style","height: 30px",4,"ngIf"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Quib","tooltipPosition","bottom",1,"p-button-danger",3,"click"],["pButton","","type","button",1,"p-button-success",2,"height","30px"],["pButton","","type","button",1,"p-button-danger",2,"height","30px"],["pButton","","type","button","pTooltip","mark as Saved",1,"p-button-danger",2,"height","30px"],["colspan","12",1,"text-center","text-danger","font-weight-700"]],template:function(t,i){1&t&&(e.TgZ(0,"app-header",0),e.NdJ("toggleSidebar",function(r){return i.onToggleSidebar(r)}),e.qZA(),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"p-table",3,4),e.YNc(5,C,4,0,"ng-template",5),e.YNc(6,y,6,1,"ng-template",6),e.YNc(7,R,28,12,"ng-template",7),e.YNc(8,I,3,0,"ng-template",8),e.qZA(),e._UZ(9,"ngx-ui-loader",9),e.qZA(),e._UZ(10,"p-confirmDialog",10),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngClass",i.sidebarSpacing),e.xp6(2),e.Q6J("value",null==i.Admin_Quib?null:i.Admin_Quib.savedQuibs)("columns",i.cols)("paginator",!0)("rows",10)("rowsPerPageOptions",e.DdM(15,F))("showCurrentPageReport",!0)("resizableColumns",!0)("responsive",!0)("globalFilterFields",e.DdM(16,B)),e.xp6(6),e.Q6J("fgsColor","#000000")("fgsType",i.fgsType),e.xp6(1),e.Akn(e.DdM(17,D)),e.Q6J("baseZIndex",1e4))},directives:[v.G,u.mk,g.iA,p.jx,T.o,g.Q7,u.sg,u.O5,Q.Hq,x.u,d.Eo,A.Q],styles:['th[_ngcontent-%COMP%]{background-color:#353d44!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:left!important;font-size:200!important}.p-datatable[_ngcontent-%COMP%]{padding:none!important}.content-header[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.5px;font-size:1.6rem;margin-bottom:.25rem}.text-center[_ngcontent-%COMP%]{margin-left:60%!important}.glyphicon-cog[_ngcontent-%COMP%]:before{content:"\\e019";padding-right:10px}.export[_ngcontent-%COMP%]{margin-left:90%;margin-bottom:.5rem}.btn-grp[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background-color:#c6c7cd94}']}),n})();var b=l(5861),c=l(3075),J=l(7673),P=l(5315);const k=["QuibTable"];function W(n,s){if(1&n&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t.movieId),e.xp6(1),e.hij(" ",t.title," ")}}function Y(n,s){if(1&n&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t.userId),e.xp6(1),e.hij(" ",t.displayName," ")}}function H(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",14),e.TgZ(1,"div",15),e.TgZ(2,"h2",16),e._uU(3," Quib list "),e.qZA(),e.qZA(),e.TgZ(4,"div",15),e._UZ(5,"i",17),e.TgZ(6,"input",18),e.NdJ("input",function(o){return e.CHM(t),e.oxw().FilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(7,"div",15),e.TgZ(8,"form",19),e.TgZ(9,"select",20),e.NdJ("change",function(){return e.CHM(t),e.oxw().getFilteredUsersOnMovieSelection()}),e.TgZ(10,"option",21),e._uU(11,"Select Movie"),e.qZA(),e.TgZ(12,"option",22),e._uU(13,"--unselect movie--"),e.qZA(),e.YNc(14,W,2,2,"option",23),e.qZA(),e.TgZ(15,"select",24),e.NdJ("change",function(){return e.CHM(t),e.oxw().getFilteredMoviesOnUserSelection()}),e.TgZ(16,"option",21),e._uU(17,"Select User"),e.qZA(),e.TgZ(18,"option",22),e._uU(19,"--unselect user--"),e.qZA(),e.YNc(20,Y,2,2,"option",23),e.qZA(),e.TgZ(21,"button",25),e.NdJ("click",function(){return e.CHM(t),e.oxw().onSubmit()}),e._uU(22," Submit "),e.qZA(),e.TgZ(23,"button",26),e.NdJ("click",function(){return e.CHM(t),e.oxw().onReset()}),e._uU(24," Reset "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(8),e.Q6J("formGroup",t.movieAndUserSelectionForm),e.xp6(6),e.Q6J("ngForOf",t.filteredMovieTitles),e.xp6(6),e.Q6J("ngForOf",t.filteredUserNames)}}function E(n,s){if(1&n&&(e.TgZ(0,"th",29),e._uU(1),e._UZ(2,"p-sortIcon",30),e.qZA()),2&n){const t=s.$implicit;e.Q6J("pSortableColumn",t.field),e.xp6(1),e.hij(" ",t.headers," "),e.xp6(1),e.Q6J("field",t.field)}}function G(n,s){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"th"),e._uU(2,"S.no"),e.qZA(),e.YNc(3,E,3,3,"th",28),e.TgZ(4,"th"),e._uU(5,"Action"),e.qZA(),e.qZA()),2&n){const t=s.$implicit;e.xp6(3),e.Q6J("ngForOf",t)}}function z(n,s){1&n&&(e.TgZ(0,"button",37),e._uU(1," Enabled "),e.qZA())}function V(n,s){1&n&&(e.TgZ(0,"button",38),e._uU(1," Disbaled "),e.qZA())}function j(n,s){1&n&&(e.TgZ(0,"button",37),e._uU(1," Bumped "),e.qZA())}function X(n,s){1&n&&(e.TgZ(0,"button",38),e._uU(1," UnBumped "),e.qZA())}function K(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e.TgZ(16,"div",31),e.YNc(17,z,2,0,"button",32),e.YNc(18,V,2,0,"button",33),e.qZA(),e.qZA(),e.TgZ(19,"td"),e.TgZ(20,"div",31),e.YNc(21,j,2,0,"button",32),e.YNc(22,X,2,0,"button",33),e.qZA(),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA(),e.TgZ(25,"td"),e._uU(26),e.qZA(),e.TgZ(27,"td",34),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().getBumpUserListByQuibId(null==r?null:r.id)}),e.TgZ(28,"a",35),e._uU(29,"B-IN"),e.qZA(),e.qZA(),e.TgZ(30,"td",34),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().getFlageUserListByQuibId(null==r?null:r.id)}),e.TgZ(31,"a",35),e._uU(32,"Flag"),e.qZA(),e.qZA(),e.TgZ(33,"td"),e.TgZ(34,"div",31),e.TgZ(35,"button",36),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().deleteQuib(null==r?null:r.id)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.rowIndex,i=s.$implicit;e.xp6(2),e.Oqu(t+1),e.xp6(2),e.Oqu(i.displayName),e.xp6(2),e.Oqu(i.title),e.xp6(2),e.Oqu(i.body),e.xp6(2),e.lnq("",i.HH,":",i.MM,":",i.SS,""),e.xp6(2),e.Oqu(i.createdDate),e.xp6(2),e.Oqu(i.postedDate),e.xp6(3),e.Q6J("ngIf",1==i.isEnabled),e.xp6(1),e.Q6J("ngIf",0==i.isEnabled),e.xp6(3),e.Q6J("ngIf",1==i.isBumped),e.xp6(1),e.Q6J("ngIf",0==i.isBumped),e.xp6(2),e.Oqu(null==i?null:i.averageRating),e.xp6(2),e.Oqu(null==i?null:i.numOfRatings)}}function $(n,s){1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td",39),e._uU(2," No Records Found. "),e.qZA(),e.qZA())}function ee(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",42),e.TgZ(2,"div",46),e.TgZ(3,"div",47),e._UZ(4,"input",56),e.qZA(),e.qZA(),e.TgZ(5,"div",46),e.TgZ(6,"div",47),e.TgZ(7,"div",42),e.TgZ(8,"div",57),e.TgZ(9,"button",58),e.NdJ("click",function(){const o=e.CHM(t),r=o.index,a=o.$implicit;return e.oxw(3).BumpIncreamentAndDecreament(r,a.ccp-1)}),e._UZ(10,"i",59),e.qZA(),e.qZA(),e.TgZ(11,"div",60),e._UZ(12,"input",56),e.qZA(),e.TgZ(13,"div",57),e.TgZ(14,"button",61),e.NdJ("click",function(){const o=e.CHM(t),r=o.index,a=o.$implicit;return e.oxw(3).BumpIncreamentAndDecreament(r,a.ccp+1)}),e._UZ(15,"i",62),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.$implicit;e.xp6(4),e.s9C("value",t.userName),e.xp6(8),e.s9C("value",t.ccp)}}function te(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",41),e.TgZ(2,"div",42),e.TgZ(3,"div",43),e.TgZ(4,"div",44),e.TgZ(5,"div",45),e.TgZ(6,"div",42),e.TgZ(7,"div",46),e.TgZ(8,"div",47),e.TgZ(9,"label",48),e._uU(10,"User List"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",46),e.TgZ(12,"div",47),e.TgZ(13,"label",49),e._uU(14,"Current Curator Point "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(15,ee,16,2,"div",50),e.TgZ(16,"div",51),e.TgZ(17,"div",52),e.TgZ(18,"div",53),e.TgZ(19,"button",54),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).display=!1}),e._uU(20," Cancel "),e.qZA(),e.TgZ(21,"button",55),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).submitBumpUserListdata()}),e._uU(22," Submit "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(15),e.Q6J("ngForOf",t.BumpUserList)}}function ie(n,s){1&n&&(e.ynx(0),e.TgZ(1,"h1",63),e._uU(2,"Sorry No Data Found"),e.qZA(),e.BQk())}function ne(n,s){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,te,23,1,"ng-container",40),e.YNc(2,ie,3,0,"ng-container",40),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.BumpUserList.length>0),e.xp6(1),e.Q6J("ngIf",0===t.BumpUserList.length)}}function oe(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",42),e.TgZ(2,"div",46),e.TgZ(3,"div",47),e._UZ(4,"input",56),e.qZA(),e.qZA(),e.TgZ(5,"div",46),e.TgZ(6,"div",47),e.TgZ(7,"div",42),e.TgZ(8,"div",57),e.TgZ(9,"button",58),e.NdJ("click",function(){const o=e.CHM(t),r=o.index,a=o.$implicit;return e.oxw(3).FlagIncreamentAndDecreament(r,a.cfp-1)}),e._UZ(10,"i",59),e.qZA(),e.qZA(),e.TgZ(11,"div",60),e._UZ(12,"input",56),e.qZA(),e.TgZ(13,"div",57),e.TgZ(14,"button",61),e.NdJ("click",function(){const o=e.CHM(t),r=o.index,a=o.$implicit;return e.oxw(3).FlagIncreamentAndDecreament(r,a.cfp+1)}),e._UZ(15,"i",62),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.$implicit;e.xp6(4),e.s9C("value",t.userName),e.xp6(8),e.s9C("value",t.cfp)}}function se(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",41),e.TgZ(2,"div",42),e.TgZ(3,"div",43),e.TgZ(4,"div",44),e.TgZ(5,"div",45),e.TgZ(6,"div",42),e.TgZ(7,"div",46),e.TgZ(8,"div",47),e.TgZ(9,"label",48),e._uU(10,"User List"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",46),e.TgZ(12,"div",47),e.TgZ(13,"label",49),e._uU(14,"Current Flagget Point "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(15,oe,16,2,"div",50),e.TgZ(16,"div",51),e.TgZ(17,"div",52),e.TgZ(18,"div",53),e.TgZ(19,"button",54),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).display=!1}),e._uU(20," Cancel "),e.qZA(),e.TgZ(21,"button",55),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).submitFlagUserListdata()}),e._uU(22," Submit "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(15),e.Q6J("ngForOf",t.FlagUserList)}}function re(n,s){1&n&&(e.ynx(0),e.TgZ(1,"h1",63),e._uU(2,"Sorry No Data Found"),e.qZA(),e.BQk())}function ae(n,s){if(1&n&&(e.YNc(0,se,23,1,"ng-container",40),e.YNc(1,re,3,0,"ng-container",40)),2&n){const t=e.oxw();e.Q6J("ngIf",t.FlagUserList.length>0),e.xp6(1),e.Q6J("ngIf",0===t.FlagUserList.length)}}const le=function(){return["displayName","title","body","time","createdDate","postedDate","averageRating","numOfRatings"]},ce=function(){return{width:"40vw"}};let S=(()=>{class n{constructor(t,i,o,r,a,m){this.ngxLoader=t,this.QuibService=i,this.fb=o,this.CommonService=r,this.confirmationService=a,this.toastr=m,this.display=!1,this.newQuibList=[],this.BIN=!1,this.CCP=0,this.pageNo=100,this.BumpUserList=[],this.FlagUserList=[],this.movieAndUserSelectionForm=new c.cw({}),this.movieTitles=[],this.filteredMovieTitles=[],this.userNames=[],this.filteredUserNames=[],this.filterDirectionTowardsUser=!1,this.filterDirectionTowardsMovie=!1,this.movieAndUserSelectionForm=this.fb.group({selectedMovie:new c.NI(""),selectedUser:new c.NI("")})}ngOnInit(){this.sidebarSpacing="expanded",this.fgsType=d.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="expanded",this.QuibService.QuibSearchWord.subscribe(t=>{this.QuibSearchWord=t}),this.fetchOnLoad(),this.cols=[{field:"displayName",show:!0,headers:"User"},{field:"title",show:!0,headers:"Movies"},{field:"body",show:!0,headers:"Quib"},{field:"time",show:!0,headers:"Time"},{field:"createdDate",show:!0,headers:"Created Date"},{field:"postedDate",show:!0,headers:"Posted Date"},{field:"isEnabled",show:!0,headers:"IsEnabled"},{field:"isBumped",show:!0,headers:"IsBumped"},{field:"averageRating",show:!0,headers:"AVR"},{field:"numOfRatings",show:!0,headers:"Rating"},{field:"BumpIn",show:!0,headers:"B-IN"},{field:"flage",show:!0,headers:"FLAG"}]}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}applyFilterGlobal(t,i){switch(t.target.id){case"displayName":this.QuibSearchWord.displayName=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"title":this.QuibSearchWord.title=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"body":this.QuibSearchWord.body=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"createdDate":this.QuibSearchWord.createdDate=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"postedDate":this.QuibSearchWord.postedDate=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"time":this.QuibSearchWord.time=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"averageRating":this.QuibSearchWord.averageRating=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"numOfRatings":this.QuibSearchWord.numOfRatings=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i)}}fetchOnLoad(){this.getMovieList(),this.getUserList()}onSubmit(){var t=this;return(0,b.Z)(function*(){if(t.selectedMovie=t.movieAndUserSelectionForm.get("selectedMovie"),t.selectedUser=t.movieAndUserSelectionForm.get("selectedUser"),null!=t.selectedMovie&&""!=t.selectedMovie.value||null!=t.selectedUser&&""!=t.selectedUser.value)if(null==t.selectedMovie||""==t.selectedMovie.value){const i=t.selectedUser.value;(yield t.QuibService.getAllFilteredMovies(i)).subscribe(o=>{t.filteredMovieTitles=o}),yield t.getFilteredQuibList(i,null)}else if(null==t.selectedUser||""==t.selectedUser.value){const i=t.selectedMovie.value;(yield t.QuibService.getAllFilteredUsers(i)).subscribe(o=>{t.filteredUserNames=o}),yield t.getFilteredQuibList(null,i)}else{const i=t.selectedMovie.value,o=t.selectedUser.value;yield t.getFilteredQuibList(o,i)}else window.alert("Please select either a movie or a writer")})()}onReset(){this.movieAndUserSelectionForm.reset(),this.movieAndUserSelectionForm.get("selectedMovie").setValue(""),this.movieAndUserSelectionForm.get("selectedUser").setValue(""),this.filteredMovieTitles=this.movieTitles,this.filteredUserNames=this.userNames,this.quibLIst=null,this.selectedMovie=null,this.selectedUser=null,this.filterDirectionTowardsMovie=!1,this.filterDirectionTowardsUser=!1}getMovieList(){this.QuibService.getAllMoviesAdminPanel().subscribe(t=>{this.movieTitles=t,this.filteredMovieTitles=this.movieTitles})}getUserList(){this.QuibService.getAllUsersAdminPanel().subscribe(t=>{this.userNames=t,this.filteredUserNames=this.userNames}),this.ngxLoader.stop()}getFilteredUsersOnMovieSelection(){var t=this;return(0,b.Z)(function*(){if(t.selectedMovie=t.movieAndUserSelectionForm.get("selectedMovie"),null==t.selectedMovie.value||"null"===t.selectedMovie.value)t.selectedMovie.setValue(""),t.selectedMovie=null;else if(!t.filterDirectionTowardsUser&&!t.filterDirectionTowardsMovie&&(t.filterDirectionTowardsUser=!0),t.filterDirectionTowardsUser&&!t.filterDirectionTowardsMovie){const i=t.selectedMovie.value;(yield t.QuibService.getAllFilteredUsers(i)).subscribe(o=>{t.filteredUserNames=o}),t.selectedUser.setValue("")}else!t.filterDirectionTowardsMovie&&!t.filterDirectionTowardsUser&&t.toastr.showWarning("Please reset and start filtering again","reset")})()}getFilteredMoviesOnUserSelection(){var t=this;return(0,b.Z)(function*(){if(t.selectedUser=t.movieAndUserSelectionForm.get("selectedUser"),null==t.selectedUser.value||"null"===t.selectedUser.value)t.selectedUser.setValue(""),t.selectedUser=null;else if(!t.filterDirectionTowardsMovie&&!t.filterDirectionTowardsUser&&(t.filterDirectionTowardsMovie=!0),t.filterDirectionTowardsMovie&&!t.filterDirectionTowardsUser){const i=t.selectedUser.value;(yield t.QuibService.getAllFilteredMovies(i)).subscribe(o=>{t.filteredMovieTitles=o}),t.selectedMovie.setValue("")}else!t.filterDirectionTowardsMovie&&!t.filterDirectionTowardsUser&&t.toastr.showWarning("Please reset and start filtering again","Reset")})()}getFilteredQuibList(t,i){var o=this;return(0,b.Z)(function*(){o.ngxLoader.start(),yield(yield o.QuibService.getFilteredQuibs(t,i)).subscribe(r=>{o.quibLIst=r,o.totalRecords=r.quibTotalPages,o.quibLIst.savedQuibs.map(a=>{a.createdDate=o.CommonService.convertDate(a.createdDate),a.postedDate=o.CommonService.convertDate(a.postedDate),a.MM=o.CommonService.consverIntoHHMMSS(a.time).MM,a.HH=o.CommonService.consverIntoHHMMSS(a.time).HH,a.SS=o.CommonService.consverIntoHHMMSS(a.time).SS}),o.ngxLoader.stop(),o.loading=!1})})()}getQuibList(){this.QuibService.getQuibList(this.pageNo).subscribe(t=>{this.quibLIst=t,this.totalRecords=t.quibTotalPages,this.quibLIst.savedQuibs.map(i=>{i.createdDate=this.CommonService.convertDate(i.createdDate),i.postedDate=this.CommonService.convertDate(i.postedDate),i.MM=this.CommonService.consverIntoHHMMSS(i.time).MM,i.HH=this.CommonService.consverIntoHHMMSS(i.time).HH,i.SS=this.CommonService.consverIntoHHMMSS(i.time).SS}),this.ngxLoader.stop(),this.loading=!1})}deleteQuib(t){this.confirmationService.confirm({message:"Are you sure that you want to delete Quib ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.QuibService.deleteQuib(t).subscribe(i=>{this.toastr.showSuccess(" Quib deleted successfully","Quib delete"),this.getQuibList()})}})}IsEnabled(t,i){this.ngxLoader.start(),this.QuibService.IsEnabled(t,i).subscribe(o=>{o&&(this.toastr.showSuccess(" Status change successfully","Status change"),this.getQuibList())})}IsBumped(t,i){this.ngxLoader.start(),this.QuibService.IsBumped(t,i).subscribe(o=>{o&&(this.toastr.showSuccess(" Status change successfully","Status change"),this.getQuibList())})}FlagIncreamentAndDecreament(t,i){this.FlagUserList[t].cfp=i}BumpIncreamentAndDecreament(t,i){this.BumpUserList[t].ccp=i}submitBumpUserListdata(){let t=this.BumpUserList.map(i=>({id:i.id,ccp:i.ccp}));this.ngxLoader.start(),this.QuibService.submitBumpUserListdata(t).subscribe(i=>{i?(this.display=!1,this.BIN=!1,this.toastr.showSuccess(" Current Curator Point is  changed successfully","Curator Point"),this.getQuibList()):(this.display=!1,this.BIN=!1,this.toastr.showSuccess("Somthing is Wrong,Please check ","Curator  Score"),this.getQuibList())})}submitFlagUserListdata(){let t=this.FlagUserList.map(i=>({id:i.id,cfp:i.cfp}));this.ngxLoader.start(),this.QuibService.submitFlagUserListdata(t).subscribe(i=>{i?(this.display=!1,this.BIN=!1,this.toastr.showSuccess(" Current Flagger Point is  changed successfully","Flagger Point"),this.getQuibList()):(this.display=!1,this.BIN=!1,this.toastr.showSuccess("Somthing is Wrong,Please check ","Flagger Point"),this.getQuibList())})}getBumpUserListByQuibId(t){this.headerMessage="Bumped User List",this.ngxLoader.start(),this.QuibService.getBumpUserListByQuibId(t).subscribe(i=>{this.BumpUserList=i,this.display=!0,this.BIN=!0,this.ngxLoader.stop(),0===this.BumpUserList.length?(this.styleValue.height="20vh",this.styleValue.width="55vw"):(this.styleValue.height="90vh",this.styleValue.width="55vw")})}getFlageUserListByQuibId(t){this.headerMessage="Flagged User List",this.QuibService.getFlageUserListByQuibId(t).subscribe(i=>{this.FlagUserList=i,this.display=!0,this.BIN=!1,0===this.FlagUserList.length?(this.styleValue.height="20vh",this.styleValue.width="55vw"):(this.styleValue.height="90vh",this.styleValue.width="55vw"),this.ngxLoader.stop()})}FilterGlobal(t,i){this.QuibSearchWord.Gseacrh=t.target.value,this.QuibTable.filterGlobal(t.target.value,i)}ngOnDestroy(){this.QuibService.QuibSearchWord.next(this.QuibSearchWord),this.CommonService.setQuibSearchWord(this.QuibSearchWord)}QuibSearch(){null!=this.QuibSearchWord.Gseacrh&&this.QuibSearchWord.Gseacrh.trim().length>0&&this.QuibTable.filterGlobal(this.QuibSearchWord.Gseacrh,"contains"),null!=this.QuibSearchWord.displayName&&this.QuibSearchWord.displayName.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.displayName,"displayName","contains"),null!=this.QuibSearchWord.title&&this.QuibSearchWord.title.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.title,"title","contains"),null!=this.QuibSearchWord.body&&this.QuibSearchWord.body.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.body,"body","contains"),null!=this.QuibSearchWord.createdDate&&this.QuibSearchWord.createdDate.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.createdDate,"createdDate","contains"),null!=this.QuibSearchWord.postedDate&&this.QuibSearchWord.postedDate.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.postedDate,"postedDate","contains"),null!=this.QuibSearchWord.averageRating&&this.QuibSearchWord.averageRating.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.averageRating,"averageRating","contains"),null!=this.QuibSearchWord.time&&this.QuibSearchWord.time.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.time,"time","contains"),null!=this.QuibSearchWord.numOfRatings&&this.QuibSearchWord.numOfRatings.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.numOfRatings,"numOfRatings","contains")}loadNextQuibsdata(t){this.loading=!0,this.pageNo=(t.first+t.rows)/20,this.QuibService.getQuibList(this.pageNo).subscribe(i=>{this.quibLIst=i,this.totalRecords=i.quibTotalPages,this.loading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.LA),e.Y36(f.V),e.Y36(c.qu),e.Y36(J.v),e.Y36(p.YP),e.Y36(Z.$))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-recent-quib"]],viewQuery:function(t,i){if(1&t&&e.Gf(k,5),2&t){let o;e.iGM(o=e.CRH())&&(i.QuibTable=o.first)}},inputs:{movieTitles:"movieTitles",filteredMovieTitles:"filteredMovieTitles",userNames:"userNames",filteredUserNames:"filteredUserNames"},features:[e._Bn([p.YP])],decls:15,vars:25,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","stateStorage","session","stateKey","Quib-session","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped,width:max-content",3,"value","columns","paginator","rows","showCurrentPageReport","resizableColumns","totalRecords","responsive","globalFilterFields"],["QuibTable",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"fgsColor","fgsType"],["position","top",3,"visible","modal","header","baseZIndex","visibleChange"],[4,"ngIf","ngIfElse"],["flage",""],["header","Confirmation","position","top","icon","pi pi-exclamation-triangle",3,"baseZIndex"],[1,"row"],[1,"p-input-icon-right","ml-5"],[2,"font-family","'Times New Roman', Times, serif"],[1,"pi","pi-search"],["pInputText","","type","text","id","search-box","placeholder","Search by each column",3,"input"],[3,"formGroup"],["formControlName","selectedMovie","optionLabel","title","display","chip","defaultLabel","Select Movie",2,"width","12rem",3,"change"],["value","","disabled","","selected",""],["value","null"],[3,"value",4,"ngFor","ngForOf"],["formControlName","selectedUser","optionLabel","displayName","display","chip","defaultLabel","Select User",2,"margin-left","3px","width","12rem",3,"change"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success",2,"height","25px","margin-left","3px",3,"click"],["pButton","","type","button","id","reset","name","reset",1,"p-button-danger",2,"height","25px","margin-left","3px",3,"click"],[3,"value"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],[1,"btn-grp"],["pButton","","type","button","class","p-button-success","style","height: 30px",4,"ngIf"],["pButton","","type","button","class","p-button-danger","style","height: 30px",4,"ngIf"],[3,"click"],[2,"color","blue","cursor","pointer"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Quib","tooltipPosition","bottom",1,"p-button-danger",3,"click"],["pButton","","type","button",1,"p-button-success",2,"height","30px"],["pButton","","type","button",1,"p-button-danger",2,"height","30px"],["colspan","12",1,"text-center","text-danger","font-weight-700"],[4,"ngIf"],[1,"card","col-sm-12",2,"height","70vh"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-2"],[1,"card-body"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"form-group"],["for","name"],["for","image"],[4,"ngFor","ngForOf"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"click"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success",3,"click"],["type","text","readonly","",1,"form-control",3,"value"],[1,"col-xl-2","col-lg-2","col-md-2","col-sm-2","col-2"],["pButton","","type","button",1,"p-button-danger",3,"click"],[1,"pi","pi-minus-circle",2,"font-size","1rem"],[1,"col-xl-8","col-lg-8","col-md-8","col-sm-8","col-8"],["pButton","","type","button",1,"p-button-success",3,"click"],[1,"pi","pi-plus-circle",2,"font-size","1rem"],[1,"NoRecord"]],template:function(t,i){if(1&t&&(e.TgZ(0,"app-header",0),e.NdJ("toggleSidebar",function(r){return i.onToggleSidebar(r)}),e.qZA(),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"p-table",3,4),e.YNc(5,H,25,3,"ng-template",5),e.YNc(6,G,6,1,"ng-template",6),e.YNc(7,K,36,15,"ng-template",7),e.YNc(8,$,3,0,"ng-template",8),e.qZA(),e._UZ(9,"ngx-ui-loader",9),e.qZA(),e.TgZ(10,"p-dialog",10),e.NdJ("visibleChange",function(r){return i.display=r}),e.YNc(11,ne,3,2,"div",11),e.YNc(12,ae,2,2,"ng-template",null,12,e.W1O),e.qZA(),e._UZ(14,"p-confirmDialog",13),e.qZA()),2&t){const o=e.MAs(13);e.xp6(1),e.Q6J("ngClass",i.sidebarSpacing),e.xp6(2),e.Q6J("value",null==i.quibLIst?null:i.quibLIst.savedQuibs)("columns",i.cols)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("resizableColumns",!0)("totalRecords",i.totalRecords)("responsive",!0)("globalFilterFields",e.DdM(23,le)),e.xp6(6),e.Q6J("fgsColor","#000000")("fgsType",i.fgsType),e.xp6(1),e.Akn(i.styleValue),e.Q6J("visible",i.display)("modal",!0)("header",i.headerMessage)("baseZIndex",1e4),e.xp6(1),e.Q6J("ngIf",i.BIN)("ngIfElse",o),e.xp6(3),e.Akn(e.DdM(24,ce)),e.Q6J("baseZIndex",1e4)}},directives:[v.G,u.mk,g.iA,p.jx,T.o,c._Y,c.JL,c.sg,c.EJ,c.JJ,c.u,c.YN,c.Kr,u.sg,Q.Hq,g.lQ,g.fz,u.O5,x.u,d.Eo,P.V,A.Q],styles:['th[_ngcontent-%COMP%]{background-color:#353d44!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:left!important;font-size:200!important}.p-datatable[_ngcontent-%COMP%]{padding:none!important}.content-header[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.5px;font-size:1.6rem;margin-bottom:.25rem}.text-center[_ngcontent-%COMP%]{margin-left:60%!important}.glyphicon-cog[_ngcontent-%COMP%]:before{content:"\\e019";padding-right:10px}.export[_ngcontent-%COMP%]{margin-left:90%;margin-bottom:.5rem}.btn-grp[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background-color:#c6c7cd94}[_nghost-%COMP%]     .p-menuitem-link-active{background-color:#900!important;color:#fff}']}),n})();const ue=[{path:"",component:S},{path:"recent-quib",component:S},{path:"admin-quib",component:O}];let de=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.Bz.forChild(ue)],h.Bz]}),n})();var pe=l(5366);let ge=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.ez,de,pe.m,c.u5,c.UX]]}),n})()}}]);