"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[847],{6847:(Ne,h,a)=>{a.r(h),a.d(h,{QuibModule:()=>Me});var u=a(9808),b=a(1083),d=a(8441),p=a(9783),e=a(5e3),f=a(9996),Z=a(7650),T=a(7398),g=a(4255),v=a(1424),x=a(845),Q=a(4119),A=a(9114);const q=["dt"];function U(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",11),e.TgZ(1,"div",12),e._UZ(2,"i",13),e.TgZ(3,"input",14),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.qZA()}}function y(n,s){if(1&n&&(e.TgZ(0,"th",15),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.Oqu(t.headers)}}function w(n,s){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"th",15),e._uU(2,"S.no"),e.qZA(),e.YNc(3,y,2,1,"th",16),e.TgZ(4,"th"),e._uU(5,"Action"),e.qZA(),e.qZA()),2&n){const t=s.$implicit;e.xp6(3),e.Q6J("ngForOf",t)}}function M(n,s){if(1&n&&(e.TgZ(0,"button",22),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.isEnabled)}}function N(n,s){if(1&n&&(e.TgZ(0,"button",23),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.isEnabled)}}function R(n,s){if(1&n&&(e.TgZ(0,"button",22),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.isBumped)}}function I(n,s){if(1&n&&(e.TgZ(0,"button",24),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.isBumped)}}function L(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e.TgZ(16,"div",17),e.YNc(17,M,2,1,"button",18),e.YNc(18,N,2,1,"button",19),e.qZA(),e.qZA(),e.TgZ(19,"td"),e.TgZ(20,"div",17),e.YNc(21,R,2,1,"button",18),e.YNc(22,I,2,1,"button",20),e.qZA(),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA(),e.TgZ(25,"td"),e.TgZ(26,"div",17),e.TgZ(27,"button",21),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().deleteQuib(null==r?null:r.id)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.rowIndex,i=s.$implicit;e.xp6(2),e.Oqu(t+1),e.xp6(2),e.Oqu(i.displayName),e.xp6(2),e.Oqu(i.movieId),e.xp6(2),e.Oqu(i.body),e.xp6(2),e.Oqu(i.time),e.xp6(2),e.Oqu(i.createdDate),e.xp6(2),e.Oqu(i.postedDate),e.xp6(3),e.Q6J("ngIf",!0===i.isEnabled),e.xp6(1),e.Q6J("ngIf",0==i.isEnabled||null),e.xp6(3),e.Q6J("ngIf",1==i.isBumped),e.xp6(1),e.Q6J("ngIf",!1===i.isBumped||null),e.xp6(2),e.Oqu(i.quibType)}}function F(n,s){1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td",25),e._uU(2," No Records Found. "),e.qZA(),e.qZA())}const D=function(){return[10,50,100]},B=function(){return["user","movies"]},J=function(){return{width:"40vw"}};let O=(()=>{class n{constructor(t,i,o,r,l){this.QuibService=t,this.ngxLoader=i,this.toastr=o,this.ActivatedRoute=r,this.confirmationService=l}ngOnInit(){this.sidebarSpacing="contracted",this.fgsType=d.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.ActivatedRoute.queryParams.subscribe(t=>{this.payload=t}),this.AdminQuibList(this.payload),this.cols=[{field:"user",show:!0,headers:"User"},{field:"movies",show:!0,headers:"Movies"},{field:"quib",show:!0,headers:"Quib"},{field:"time",show:!0,headers:"Time"},{field:"createdDate",show:!0,headers:"Created Date"},{field:"postedDate",show:!0,headers:"Posted Date"},{field:"isEnabled",show:!0,headers:"Is Enabled"},{field:"isBumped",show:!0,headers:"Is Bumped"},{field:"quibType",show:!0,headers:"Quib Type"}]}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}applyFilterGlobal(t,i){this.dt.filterGlobal(t.target.value,i)}AdminQuibList(t){this.QuibService.AdminQuibList(t).subscribe(i=>{this.Admin_Quib=i,this.ngxLoader.stop()})}deleteQuib(t){this.confirmationService.confirm({message:"Are you sure that you want to delete Quib ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.QuibService.deleteQuib(t).subscribe(i=>{this.toastr.showSuccess(" Quib deleted successfully","Quib delete"),this.AdminQuibList(this.payload)})}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.V),e.Y36(d.LA),e.Y36(Z.$),e.Y36(b.gz),e.Y36(p.YP))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-quib"]],viewQuery:function(t,i){if(1&t&&e.Gf(q,5),2&t){let o;e.iGM(o=e.CRH())&&(i.dt=o.first)}},features:[e._Bn([p.YP])],decls:11,vars:18,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped,width:max-content",3,"value","columns","paginator","rows","rowsPerPageOptions","showCurrentPageReport","resizableColumns","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"fgsColor","fgsType"],["header","Confirmation","position","top","icon","pi pi-exclamation-triangle",3,"baseZIndex"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","id","search-box","placeholder","Search by User or Movies",3,"input"],["pResizableColumn",""],["pResizableColumn","",4,"ngFor","ngForOf"],[1,"btn-grp"],["pButton","","type","button","class","p-button-success","style","height: 30px;",4,"ngIf"],["pButton","","type","button","class","p-button-danger","style","height: 30px",4,"ngIf"],["pButton","","type","button","class","p-button-danger","pTooltip","mark as Saved","style","height: 30px",4,"ngIf"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Quib","tooltipPosition","bottom",1,"p-button-danger",3,"click"],["pButton","","type","button",1,"p-button-success",2,"height","30px"],["pButton","","type","button",1,"p-button-danger",2,"height","30px"],["pButton","","type","button","pTooltip","mark as Saved",1,"p-button-danger",2,"height","30px"],["colspan","12",1,"text-center","text-danger","font-weight-700"]],template:function(t,i){1&t&&(e.TgZ(0,"app-header",0),e.NdJ("toggleSidebar",function(r){return i.onToggleSidebar(r)}),e.qZA(),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"p-table",3,4),e.YNc(5,U,4,0,"ng-template",5),e.YNc(6,w,6,1,"ng-template",6),e.YNc(7,L,28,12,"ng-template",7),e.YNc(8,F,3,0,"ng-template",8),e.qZA(),e._UZ(9,"ngx-ui-loader",9),e.qZA(),e._UZ(10,"p-confirmDialog",10),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngClass",i.sidebarSpacing),e.xp6(2),e.Q6J("value",null==i.Admin_Quib?null:i.Admin_Quib.savedQuibs)("columns",i.cols)("paginator",!0)("rows",10)("rowsPerPageOptions",e.DdM(15,D))("showCurrentPageReport",!0)("resizableColumns",!0)("responsive",!0)("globalFilterFields",e.DdM(16,B)),e.xp6(6),e.Q6J("fgsColor","#000000")("fgsType",i.fgsType),e.xp6(1),e.Akn(e.DdM(17,J)),e.Q6J("baseZIndex",1e4))},directives:[T.G,u.mk,g.iA,p.jx,v.o,g.Q7,u.sg,u.O5,x.Hq,Q.u,d.Eo,A.Q],styles:['th[_ngcontent-%COMP%]{background-color:#353d44!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:left!important;font-size:200!important}.p-datatable[_ngcontent-%COMP%]{padding:none!important}.content-header[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.5px;font-size:1.6rem;margin-bottom:.25rem}.text-center[_ngcontent-%COMP%]{margin-left:60%!important}.glyphicon-cog[_ngcontent-%COMP%]:before{content:"\\e019";padding-right:10px}.export[_ngcontent-%COMP%]{margin-left:90%;margin-bottom:.5rem}.btn-grp[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background-color:#c6c7cd94}']}),n})();var _=a(5861),c=a(3075),P=a(7673),C=a(6526),Y=a(5315);const k=["QuibTable"];function W(n,s){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t.movieId),e.xp6(1),e.hij(" ",t.title," ")}}function H(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"a",31),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).onReset()}),e._UZ(1,"img",32),e.qZA()}}function E(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"a",31),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).onReset()}),e._UZ(1,"img",33),e.qZA()}}function G(n,s){1&n&&(e.TgZ(0,"a"),e._UZ(1,"img",34),e.qZA())}function z(n,s){if(1&n&&(e.TgZ(0,"option",30),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t.userId),e.xp6(1),e.hij(" ",t.displayName," ")}}function V(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",14),e.TgZ(1,"div",15),e.TgZ(2,"h2",16),e._uU(3,"Quibs"),e.qZA(),e.qZA(),e.TgZ(4,"div",15),e._UZ(5,"i",17),e.TgZ(6,"input",18),e.NdJ("input",function(o){return e.CHM(t),e.oxw().FilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(7,"div",15),e.TgZ(8,"form",19),e.TgZ(9,"select",20),e.NdJ("change",function(){return e.CHM(t),e.oxw().getFilteredUsersOnMovieSelection()})("input",function(o){return e.CHM(t),e.oxw().filterMovieTitles(o)}),e.TgZ(10,"option",21),e._uU(11,"Select Movie"),e.qZA(),e.TgZ(12,"option",22),e._uU(13,"--unselect movie--"),e.qZA(),e.YNc(14,W,2,2,"option",23),e.qZA(),e.YNc(15,H,2,0,"a",24),e.YNc(16,E,2,0,"a",24),e.YNc(17,G,2,0,"a",25),e.TgZ(18,"select",26),e.NdJ("change",function(){return e.CHM(t),e.oxw().getFilteredMoviesOnUserSelection()}),e.TgZ(19,"option",21),e._uU(20,"Select User"),e.qZA(),e.TgZ(21,"option",22),e._uU(22,"--unselect user--"),e.qZA(),e.YNc(23,z,2,2,"option",23),e.qZA(),e.TgZ(24,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw().onSubmit()}),e._uU(25," Submit "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div",15),e.TgZ(27,"form",19),e._UZ(28,"p-multiSelect",28),e.TgZ(29,"button",29),e.NdJ("click",function(){return e.CHM(t),e.oxw().SelectRequestedColumns()}),e._uU(30," Submit "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(8),e.Q6J("formGroup",t.movieAndUserSelectionForm),e.xp6(6),e.Q6J("ngForOf",t.filteredMovieTitles),e.xp6(1),e.Q6J("ngIf",t.filterDirectionTowardsUser),e.xp6(1),e.Q6J("ngIf",t.filterDirectionTowardsMovie),e.xp6(1),e.Q6J("ngIf",!t.filterDirectionTowardsUser&&!t.filterDirectionTowardsMovie),e.xp6(6),e.Q6J("ngForOf",t.filteredUserNames),e.xp6(4),e.Q6J("formGroup",t.columnSelectorForm),e.xp6(1),e.Q6J("options",t.colsOptions)("virtualScroll",!0)}}function j(n,s){if(1&n&&(e.TgZ(0,"th",36),e._uU(1),e._UZ(2,"p-sortIcon",37),e.qZA()),2&n){const t=s.$implicit;e.Q6J("pSortableColumn",t.field),e.xp6(1),e.hij(" ",t.headers," "),e.xp6(1),e.Q6J("field",t.field)}}function $(n,s){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"th"),e._uU(2,"S.no"),e.qZA(),e.YNc(3,j,3,3,"th",35),e.TgZ(4,"th"),e._uU(5,"Action"),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngForOf",0==t.filteredCols.length?t.cols:t.filteredCols)}}function X(n,s){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.displayName)}}function K(n,s){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.title)}}function ee(n,s){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.body)}}function te(n,s){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.lnq(" ",t.HH,":",t.MM,":",t.SS," ")}}function ie(n,s){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.createdDate," ")}}function ne(n,s){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.postedDate," ")}}function oe(n,s){1&n&&(e.TgZ(0,"button",42),e._uU(1," Enabled "),e.qZA())}function se(n,s){1&n&&(e.TgZ(0,"button",43),e._uU(1," Disbaled "),e.qZA())}function re(n,s){if(1&n&&(e.TgZ(0,"td"),e.TgZ(1,"div",38),e.YNc(2,oe,2,0,"button",40),e.YNc(3,se,2,0,"button",41),e.qZA(),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Q6J("ngIf",1==t.isEnabled),e.xp6(1),e.Q6J("ngIf",0==t.isEnabled)}}function le(n,s){1&n&&(e.TgZ(0,"button",43),e._uU(1," UnBumped "),e.qZA())}function ae(n,s){1&n&&(e.TgZ(0,"button",42),e._uU(1," Bumped "),e.qZA())}function ce(n,s){1&n&&(e.TgZ(0,"button",43),e._uU(1," UnBumped "),e.qZA())}function ue(n,s){if(1&n&&(e.TgZ(0,"td"),e.TgZ(1,"div",38),e.YNc(2,le,2,0,"button",41),e.YNc(3,ae,2,0,"button",40),e.YNc(4,ce,2,0,"button",41),e.qZA(),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Q6J("ngIf",null==t.isBumped),e.xp6(1),e.Q6J("ngIf",1==t.isBumped),e.xp6(1),e.Q6J("ngIf",0==t.isBumped)}}function de(n,s){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(null==t?null:t.averageRating)}}function pe(n,s){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",null==t?null:t.numOfRatings," ")}}function ge(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"td",31),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().getBumpUserListByQuibId(null==o?null:o.id)}),e.TgZ(1,"a",44),e._uU(2,"B-IN"),e.qZA(),e.qZA()}}function me(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"td",31),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().getFlageUserListByQuibId(null==o?null:o.id)}),e.TgZ(1,"a",44),e._uU(2,"Flag"),e.qZA(),e.qZA()}}function _e(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.YNc(3,X,2,1,"td",25),e.YNc(4,K,2,1,"td",25),e.YNc(5,ee,2,1,"td",25),e.YNc(6,te,2,3,"td",25),e.YNc(7,ie,2,1,"td",25),e.YNc(8,ne,2,1,"td",25),e.YNc(9,re,4,2,"td",25),e.YNc(10,ue,5,3,"td",25),e.YNc(11,de,2,1,"td",25),e.YNc(12,pe,2,1,"td",25),e.YNc(13,ge,3,0,"td",24),e.YNc(14,me,3,0,"td",24),e.TgZ(15,"td"),e.TgZ(16,"div",38),e.TgZ(17,"button",39),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().deleteQuib(null==r?null:r.id)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.rowIndex,i=e.oxw();e.xp6(2),e.Oqu(t+1),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("User")),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("Movies")),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("Quib")),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("Time")),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("Created Date")),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("Posted Date")),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("IsEnabled")),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("IsBumped")),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("AVR")),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("Rating")),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("B-IN")),e.xp6(1),e.Q6J("ngIf",i.shouldDisplayColumn("FLAG"))}}function be(n,s){1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td",45),e._uU(2," No Records Found. "),e.qZA(),e.qZA())}function he(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",47),e.TgZ(2,"div",51),e.TgZ(3,"div",52),e._UZ(4,"input",61),e.qZA(),e.qZA(),e.TgZ(5,"div",51),e.TgZ(6,"div",52),e.TgZ(7,"div",47),e.TgZ(8,"div",62),e.TgZ(9,"button",63),e.NdJ("click",function(){const o=e.CHM(t),r=o.index,l=o.$implicit;return e.oxw(3).BumpIncreamentAndDecreament(r,l.ccp-1)}),e._UZ(10,"i",64),e.qZA(),e.qZA(),e.TgZ(11,"div",65),e._UZ(12,"input",61),e.qZA(),e.TgZ(13,"div",62),e.TgZ(14,"button",66),e.NdJ("click",function(){const o=e.CHM(t),r=o.index,l=o.$implicit;return e.oxw(3).BumpIncreamentAndDecreament(r,l.ccp+1)}),e._UZ(15,"i",67),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.$implicit;e.xp6(4),e.s9C("value",t.userName),e.xp6(8),e.s9C("value",t.ccp)}}function fe(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",46),e.TgZ(2,"div",47),e.TgZ(3,"div",48),e.TgZ(4,"div",49),e.TgZ(5,"div",50),e.TgZ(6,"div",47),e.TgZ(7,"div",51),e.TgZ(8,"div",52),e.TgZ(9,"label",53),e._uU(10,"User List"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",51),e.TgZ(12,"div",52),e.TgZ(13,"label",54),e._uU(14,"Current Curator Point "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(15,he,16,2,"div",55),e.TgZ(16,"div",56),e.TgZ(17,"div",57),e.TgZ(18,"div",58),e.TgZ(19,"button",59),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).display=!1}),e._uU(20," Cancel "),e.qZA(),e.TgZ(21,"button",60),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).submitBumpUserListdata()}),e._uU(22," Submit "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(15),e.Q6J("ngForOf",t.BumpUserList)}}function Ze(n,s){1&n&&(e.ynx(0),e.TgZ(1,"h1",68),e._uU(2,"Sorry No Data Found"),e.qZA(),e.BQk())}function Te(n,s){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,fe,23,1,"ng-container",25),e.YNc(2,Ze,3,0,"ng-container",25),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.BumpUserList.length>0),e.xp6(1),e.Q6J("ngIf",0===t.BumpUserList.length)}}function ve(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",47),e.TgZ(2,"div",51),e.TgZ(3,"div",52),e._UZ(4,"input",61),e.qZA(),e.qZA(),e.TgZ(5,"div",51),e.TgZ(6,"div",52),e.TgZ(7,"div",47),e.TgZ(8,"div",62),e.TgZ(9,"button",63),e.NdJ("click",function(){const o=e.CHM(t),r=o.index,l=o.$implicit;return e.oxw(3).FlagIncreamentAndDecreament(r,l.cfp-1)}),e._UZ(10,"i",64),e.qZA(),e.qZA(),e.TgZ(11,"div",65),e._UZ(12,"input",61),e.qZA(),e.TgZ(13,"div",62),e.TgZ(14,"button",66),e.NdJ("click",function(){const o=e.CHM(t),r=o.index,l=o.$implicit;return e.oxw(3).FlagIncreamentAndDecreament(r,l.cfp+1)}),e._UZ(15,"i",67),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.$implicit;e.xp6(4),e.s9C("value",t.userName),e.xp6(8),e.s9C("value",t.cfp)}}function xe(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",46),e.TgZ(2,"div",47),e.TgZ(3,"div",48),e.TgZ(4,"div",49),e.TgZ(5,"div",50),e.TgZ(6,"div",47),e.TgZ(7,"div",51),e.TgZ(8,"div",52),e.TgZ(9,"label",53),e._uU(10,"User List"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",51),e.TgZ(12,"div",52),e.TgZ(13,"label",54),e._uU(14,"Current Flagget Point "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(15,ve,16,2,"div",55),e.TgZ(16,"div",56),e.TgZ(17,"div",57),e.TgZ(18,"div",58),e.TgZ(19,"button",59),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).display=!1}),e._uU(20," Cancel "),e.qZA(),e.TgZ(21,"button",60),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).submitFlagUserListdata()}),e._uU(22," Submit "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(15),e.Q6J("ngForOf",t.FlagUserList)}}function Qe(n,s){1&n&&(e.ynx(0),e.TgZ(1,"h1",68),e._uU(2,"Sorry No Data Found"),e.qZA(),e.BQk())}function Ae(n,s){if(1&n&&(e.YNc(0,xe,23,1,"ng-container",25),e.YNc(1,Qe,3,0,"ng-container",25)),2&n){const t=e.oxw();e.Q6J("ngIf",t.FlagUserList.length>0),e.xp6(1),e.Q6J("ngIf",0===t.FlagUserList.length)}}const Ce=function(){return[20,50,100]},Se=function(){return["displayName","title","body","time","createdDate","postedDate","averageRating","numOfRatings"]},qe=function(){return{width:"40vw"}};let S=(()=>{class n{constructor(t,i,o,r,l,m){this.ngxLoader=t,this.QuibService=i,this.fb=o,this.CommonService=r,this.confirmationService=l,this.toastr=m,this.display=!1,this.newQuibList=[],this.BIN=!1,this.CCP=0,this.pageNo=100,this.BumpUserList=[],this.FlagUserList=[],this.movieAndUserSelectionForm=new c.cw({}),this.movieTitles=[],this.filteredMovieTitles=[],this.userNames=[],this.filteredUserNames=[],this.filterDirectionTowardsUser=!1,this.filterDirectionTowardsMovie=!1,this.columnSelectorForm=new c.cw({}),this.colsOptions=[],this.selectedColumns=[],this.filteredCols=[],this.multiSelectStyle={width:"12.5rem"},this.movieAndUserSelectionForm=this.fb.group({selectedMovie:new c.NI(""),selectedUser:new c.NI("")}),this.columnSelectorForm=this.fb.group({selectedColumns:new c.NI([])})}ngOnInit(){this.sidebarSpacing="expanded",this.fgsType=d.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="expanded",this.QuibService.QuibSearchWord.subscribe(t=>{this.QuibSearchWord=t}),this.fetchOnLoad(),this.cols=[{field:"displayName",show:!0,headers:"User"},{field:"title",show:!0,headers:"Movies"},{field:"body",show:!0,headers:"Quib"},{field:"time",show:!0,headers:"Time"},{field:"createdDate",show:!0,headers:"Created Date"},{field:"postedDate",show:!0,headers:"Posted Date"},{field:"isEnabled",show:!0,headers:"IsEnabled"},{field:"isBumped",show:!0,headers:"IsBumped"},{field:"averageRating",show:!0,headers:"AVR"},{field:"numOfRatings",show:!0,headers:"Rating"},{field:"BumpIn",show:!0,headers:"B-IN"},{field:"flage",show:!0,headers:"FLAG"}],this.colsOptions=this.cols.map(t=>({label:t.headers,value:t.field}))}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}applyFilterGlobal(t,i){switch(t.target.id){case"displayName":this.QuibSearchWord.displayName=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"title":this.QuibSearchWord.title=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"body":this.QuibSearchWord.body=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"createdDate":this.QuibSearchWord.createdDate=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"postedDate":this.QuibSearchWord.postedDate=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"time":this.QuibSearchWord.time=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"averageRating":this.QuibSearchWord.averageRating=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i);break;case"numOfRatings":this.QuibSearchWord.numOfRatings=t.target.value,this.QuibTable.filter(t.target.value,t.target.id,i)}}SelectRequestedColumns(){this.selectedColumns=this.columnSelectorForm.controls.selectedColumns.value,this.filteredCols=this.cols.filter(t=>this.selectedColumns.some(i=>i.value===t.field)).map(t=>({headers:t.headers}))}shouldDisplayColumn(t){return 0===this.filteredCols.length||this.filteredCols.some(i=>i.headers===t)}fetchOnLoad(){this.getMovieList(),this.getUserList()}onSubmit(){var t=this;return(0,_.Z)(function*(){if(t.selectedMovie=t.movieAndUserSelectionForm.get("selectedMovie"),t.selectedUser=t.movieAndUserSelectionForm.get("selectedUser"),null!=t.selectedMovie&&""!=t.selectedMovie.value||null!=t.selectedUser&&""!=t.selectedUser.value)if(null==t.selectedMovie||""==t.selectedMovie.value){const i=t.selectedUser.value;(yield t.QuibService.getAllFilteredMovies(i)).subscribe(o=>{t.filteredMovieTitles=o}),yield t.getFilteredQuibList(i,null)}else if(null==t.selectedUser||""==t.selectedUser.value){const i=t.selectedMovie.value;(yield t.QuibService.getAllFilteredUsers(i)).subscribe(o=>{t.filteredUserNames=o}),yield t.getFilteredQuibList(null,i)}else{const i=t.selectedMovie.value,o=t.selectedUser.value;yield t.getFilteredQuibList(o,i)}else t.toastr.showWarning("Please select either a Movie or a User","Select")})()}onReset(){this.movieAndUserSelectionForm.reset(),this.movieAndUserSelectionForm.get("selectedMovie").setValue(""),this.movieAndUserSelectionForm.get("selectedUser").setValue(""),this.filteredMovieTitles=this.movieTitles,this.filteredUserNames=this.userNames,this.quibLIst=null,this.selectedMovie=null,this.selectedUser=null,this.filterDirectionTowardsMovie=!1,this.filterDirectionTowardsUser=!1}getMovieList(){this.QuibService.getAllMoviesAdminPanel().subscribe(t=>{this.movieTitles=t,this.filteredMovieTitles=this.movieTitles})}getUserList(){this.QuibService.getAllUsersAdminPanel().subscribe(t=>{this.userNames=t,this.filteredUserNames=this.userNames}),this.ngxLoader.stop()}filterMovieTitles(t){const i=t.target.value.toLowerCase();this.filteredMovieTitles=this.filteredMovieTitles.filter(o=>{o.title.toLowerCase.includes(i)})}getFilteredUsersOnMovieSelection(){var t=this;return(0,_.Z)(function*(){if(t.selectedMovie=t.movieAndUserSelectionForm.get("selectedMovie"),null==t.selectedMovie.value||"null"===t.selectedMovie.value)t.selectedMovie.setValue(""),t.selectedMovie=null;else if(!t.filterDirectionTowardsUser&&!t.filterDirectionTowardsMovie&&(t.filterDirectionTowardsUser=!0),t.filterDirectionTowardsUser&&!t.filterDirectionTowardsMovie){const i=t.selectedMovie.value;(yield t.QuibService.getAllFilteredUsers(i)).subscribe(o=>{t.filteredUserNames=o}),t.selectedUser.setValue("")}else!t.filterDirectionTowardsMovie&&!t.filterDirectionTowardsUser&&t.toastr.showWarning("Please reset and start filtering again","reset")})()}getFilteredMoviesOnUserSelection(){var t=this;return(0,_.Z)(function*(){if(t.selectedUser=t.movieAndUserSelectionForm.get("selectedUser"),null==t.selectedUser.value||"null"===t.selectedUser.value)t.selectedUser.setValue(""),t.selectedUser=null;else if(!t.filterDirectionTowardsMovie&&!t.filterDirectionTowardsUser&&(t.filterDirectionTowardsMovie=!0),t.filterDirectionTowardsMovie&&!t.filterDirectionTowardsUser){const i=t.selectedUser.value;(yield t.QuibService.getAllFilteredMovies(i)).subscribe(o=>{t.filteredMovieTitles=o}),t.selectedMovie.setValue("")}else!t.filterDirectionTowardsMovie&&!t.filterDirectionTowardsUser&&t.toastr.showWarning("Please reset and start filtering again","Reset")})()}getFilteredQuibList(t,i){var o=this;return(0,_.Z)(function*(){o.ngxLoader.start(),(yield o.QuibService.getFilteredQuibs(t,i)).subscribe(r=>{o.quibLIst=r,o.totalRecords=r.quibTotalPages,o.quibLIst.savedQuibs.map(l=>{l.createdDate=o.CommonService.convertDate(l.createdDate),l.postedDate=l.postedDate?o.CommonService.convertDate(l.postedDate):"00:00:00",l.MM=o.CommonService.consverIntoHHMMSS(l.time).MM,l.HH=o.CommonService.consverIntoHHMMSS(l.time).HH,l.SS=o.CommonService.consverIntoHHMMSS(l.time).SS}),o.ngxLoader.stop(),o.loading=!1})})()}getQuibList(){this.QuibService.getQuibList(this.pageNo).subscribe(t=>{this.quibLIst=t,this.totalRecords=t.quibTotalPages,this.quibLIst.savedQuibs.map(i=>{i.createdDate=this.CommonService.convertDate(i.createdDate),i.postedDate=this.CommonService.convertDate(i.postedDate),i.MM=this.CommonService.consverIntoHHMMSS(i.time).MM,i.HH=this.CommonService.consverIntoHHMMSS(i.time).HH,i.SS=this.CommonService.consverIntoHHMMSS(i.time).SS}),this.ngxLoader.stop(),this.loading=!1})}deleteQuib(t){this.confirmationService.confirm({message:"Are you sure that you want to delete Quib ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.QuibService.deleteQuib(t).subscribe(i=>{this.toastr.showSuccess(" Quib deleted successfully","Quib delete"),this.getQuibList()})}})}IsEnabled(t,i){this.ngxLoader.start(),this.QuibService.IsEnabled(t,i).subscribe(o=>{o&&(this.toastr.showSuccess(" Status change successfully","Status change"),this.getQuibList())})}IsBumped(t,i){this.ngxLoader.start(),this.QuibService.IsBumped(t,i).subscribe(o=>{o&&(this.toastr.showSuccess(" Status change successfully","Status change"),this.getQuibList())})}FlagIncreamentAndDecreament(t,i){this.FlagUserList[t].cfp=i}BumpIncreamentAndDecreament(t,i){this.BumpUserList[t].ccp=i}submitBumpUserListdata(){let t=this.BumpUserList.map(i=>({id:i.id,ccp:i.ccp}));this.ngxLoader.start(),this.QuibService.submitBumpUserListdata(t).subscribe(i=>{i?(this.display=!1,this.BIN=!1,this.toastr.showSuccess(" Current Curator Point is  changed successfully","Curator Point"),this.getQuibList()):(this.display=!1,this.BIN=!1,this.toastr.showSuccess("Somthing is Wrong,Please check ","Curator  Score"),this.getQuibList())})}submitFlagUserListdata(){let t=this.FlagUserList.map(i=>({id:i.id,cfp:i.cfp}));this.ngxLoader.start(),this.QuibService.submitFlagUserListdata(t).subscribe(i=>{i?(this.display=!1,this.BIN=!1,this.toastr.showSuccess(" Current Flagger Point is  changed successfully","Flagger Point"),this.getQuibList()):(this.display=!1,this.BIN=!1,this.toastr.showSuccess("Somthing is Wrong,Please check ","Flagger Point"),this.getQuibList())})}getBumpUserListByQuibId(t){this.headerMessage="Bumped User List",this.ngxLoader.start(),this.QuibService.getBumpUserListByQuibId(t).subscribe(i=>{this.BumpUserList=i,this.display=!0,this.BIN=!0,this.ngxLoader.stop(),0===this.BumpUserList.length?(this.styleValue.height="20vh",this.styleValue.width="55vw"):(this.styleValue.height="90vh",this.styleValue.width="55vw")})}getFlageUserListByQuibId(t){this.headerMessage="Flagged User List",this.QuibService.getFlageUserListByQuibId(t).subscribe(i=>{this.FlagUserList=i,this.display=!0,this.BIN=!1,0===this.FlagUserList.length?(this.styleValue.height="20vh",this.styleValue.width="55vw"):(this.styleValue.height="90vh",this.styleValue.width="55vw"),this.ngxLoader.stop()})}FilterGlobal(t,i){this.QuibSearchWord.Gseacrh=t.target.value,this.QuibTable.filterGlobal(t.target.value,i)}ngOnDestroy(){this.QuibService.QuibSearchWord.next(this.QuibSearchWord),this.CommonService.setQuibSearchWord(this.QuibSearchWord)}QuibSearch(){null!=this.QuibSearchWord.Gseacrh&&this.QuibSearchWord.Gseacrh.trim().length>0&&this.QuibTable.filterGlobal(this.QuibSearchWord.Gseacrh,"contains"),null!=this.QuibSearchWord.displayName&&this.QuibSearchWord.displayName.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.displayName,"displayName","contains"),null!=this.QuibSearchWord.title&&this.QuibSearchWord.title.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.title,"title","contains"),null!=this.QuibSearchWord.body&&this.QuibSearchWord.body.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.body,"body","contains"),null!=this.QuibSearchWord.createdDate&&this.QuibSearchWord.createdDate.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.createdDate,"createdDate","contains"),null!=this.QuibSearchWord.postedDate&&this.QuibSearchWord.postedDate.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.postedDate,"postedDate","contains"),null!=this.QuibSearchWord.averageRating&&this.QuibSearchWord.averageRating.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.averageRating,"averageRating","contains"),null!=this.QuibSearchWord.time&&this.QuibSearchWord.time.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.time,"time","contains"),null!=this.QuibSearchWord.numOfRatings&&this.QuibSearchWord.numOfRatings.trim().length>0&&this.QuibTable.filter(this.QuibSearchWord.numOfRatings,"numOfRatings","contains")}loadNextQuibsdata(t){this.loading=!0,this.pageNo=(t.first+t.rows)/20,this.QuibService.getQuibList(this.pageNo).subscribe(i=>{this.quibLIst=i,this.totalRecords=i.quibTotalPages,this.loading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.LA),e.Y36(f.V),e.Y36(c.qu),e.Y36(P.v),e.Y36(p.YP),e.Y36(Z.$))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-recent-quib"]],viewQuery:function(t,i){if(1&t&&e.Gf(k,5),2&t){let o;e.iGM(o=e.CRH())&&(i.QuibTable=o.first)}},inputs:{movieTitles:"movieTitles",filteredMovieTitles:"filteredMovieTitles",userNames:"userNames",filteredUserNames:"filteredUserNames"},features:[e._Bn([p.YP])],decls:15,vars:27,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","stateStorage","session","stateKey","Quib-session","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped,width:max-content",3,"value","columns","paginator","rows","rowsPerPageOptions","showCurrentPageReport","resizableColumns","totalRecords","responsive","globalFilterFields"],["QuibTable",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"fgsColor","fgsType"],["position","top",3,"visible","modal","header","baseZIndex","visibleChange"],[4,"ngIf","ngIfElse"],["flage",""],["header","Confirmation","position","top","icon","pi pi-exclamation-triangle",3,"baseZIndex"],[1,"row"],[1,"p-input-icon-right","ml-5"],[2,"font-family","'Times New Roman', Times, serif"],[1,"pi","pi-search"],["pInputText","","type","text","id","search-box","placeholder","Search",2,"width","11rem",3,"input"],[3,"formGroup"],["formControlName","selectedMovie","optionLabel","title","display","chip","defaultLabel","Select Movie",2,"width","12rem","height","2.4rem","border","1px solid #a6a6a6","border-radius","3px",3,"change","input"],["value","","disabled","","selected",""],["value","null"],[3,"value",4,"ngFor","ngForOf"],[3,"click",4,"ngIf"],[4,"ngIf"],["formControlName","selectedUser","optionLabel","displayName","display","chip","defaultLabel","Select User",2,"margin-left","3px","width","12rem","height","2.4rem","border","1px solid #a6a6a6","border-radius","3px",3,"change"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success",2,"height","1.89rem","margin-left","3px","margin-bottom","4.7px",3,"click"],["optionLabel","label","formControlName","selectedColumns","display","chip","defaultLabel","Select Columns to display",3,"options","virtualScroll"],["pButton","","type","button","id","submit","name","submit",1,"p-button-primary",2,"margin-left","8px","margin-bottom","5.8px","height","30px",3,"click"],[3,"value"],[3,"click"],["src","../../../assets/images/reset-right3.png","alt","Arrow right",2,"cursor","pointer","height","25px","width","50px","margin-right","6.5px","margin-left","10px","margin-bottom","6.8px"],["src","../../../assets/images/reset-left3.png","alt","Arrow right",2,"cursor","pointer","height","24px","width","50px","margin-right","6.5px","margin-left","10px","margin-bottom","6.8px"],["src","../../../assets/images/block.png","alt","",2,"height","25px","width","50px","margin-right","6.5px","margin-left","10px","margin-bottom","6.8px"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],[1,"btn-grp"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Quib","tooltipPosition","bottom",1,"p-button-danger",3,"click"],["pButton","","type","button","class","p-button-success","style","height: 30px",4,"ngIf"],["pButton","","type","button","class","p-button-danger","style","height: 30px",4,"ngIf"],["pButton","","type","button",1,"p-button-success",2,"height","30px"],["pButton","","type","button",1,"p-button-danger",2,"height","30px"],[2,"color","blue","cursor","pointer"],["colspan","12",1,"text-center","text-danger","font-weight-700"],[1,"card","col-sm-12",2,"height","70vh"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-2"],[1,"card-body"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"form-group"],["for","name"],["for","image"],[4,"ngFor","ngForOf"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"click"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success",3,"click"],["type","text","readonly","",1,"form-control",3,"value"],[1,"col-xl-2","col-lg-2","col-md-2","col-sm-2","col-2"],["pButton","","type","button",1,"p-button-danger",3,"click"],[1,"pi","pi-minus-circle",2,"font-size","1rem"],[1,"col-xl-8","col-lg-8","col-md-8","col-sm-8","col-8"],["pButton","","type","button",1,"p-button-success",3,"click"],[1,"pi","pi-plus-circle",2,"font-size","1rem"],[1,"NoRecord"]],template:function(t,i){if(1&t&&(e.TgZ(0,"app-header",0),e.NdJ("toggleSidebar",function(r){return i.onToggleSidebar(r)}),e.qZA(),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"p-table",3,4),e.YNc(5,V,31,9,"ng-template",5),e.YNc(6,$,6,1,"ng-template",6),e.YNc(7,_e,18,13,"ng-template",7),e.YNc(8,be,3,0,"ng-template",8),e.qZA(),e._UZ(9,"ngx-ui-loader",9),e.qZA(),e.TgZ(10,"p-dialog",10),e.NdJ("visibleChange",function(r){return i.display=r}),e.YNc(11,Te,3,2,"div",11),e.YNc(12,Ae,2,2,"ng-template",null,12,e.W1O),e.qZA(),e._UZ(14,"p-confirmDialog",13),e.qZA()),2&t){const o=e.MAs(13);e.xp6(1),e.Q6J("ngClass",i.sidebarSpacing),e.xp6(2),e.Q6J("value",null==i.quibLIst?null:i.quibLIst.savedQuibs)("columns",i.cols)("paginator",!0)("rows",100)("rowsPerPageOptions",e.DdM(24,Ce))("showCurrentPageReport",!0)("resizableColumns",!0)("totalRecords",i.totalRecords)("responsive",!0)("globalFilterFields",e.DdM(25,Se)),e.xp6(6),e.Q6J("fgsColor","#000000")("fgsType",i.fgsType),e.xp6(1),e.Akn(i.styleValue),e.Q6J("visible",i.display)("modal",!0)("header",i.headerMessage)("baseZIndex",1e4),e.xp6(1),e.Q6J("ngIf",i.BIN)("ngIfElse",o),e.xp6(3),e.Akn(e.DdM(26,qe)),e.Q6J("baseZIndex",1e4)}},directives:[T.G,u.mk,g.iA,p.jx,v.o,c._Y,c.JL,c.sg,c.EJ,c.JJ,c.u,c.YN,c.Kr,u.sg,u.O5,x.Hq,C.NU,g.lQ,g.fz,Q.u,d.Eo,Y.V,A.Q],styles:['th[_ngcontent-%COMP%]{background-color:#353d44!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:left!important;font-size:200!important}.p-datatable[_ngcontent-%COMP%]{padding:none!important}.content-header[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.5px;font-size:1.6rem;margin-bottom:.25rem}.text-center[_ngcontent-%COMP%]{margin-left:60%!important}.glyphicon-cog[_ngcontent-%COMP%]:before{content:"\\e019";padding-right:10px}.export[_ngcontent-%COMP%]{margin-left:90%;margin-bottom:.5rem}.btn-grp[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background-color:#c6c7cd94}[_nghost-%COMP%]     .p-menuitem-link-active{background-color:#900!important;color:#fff}[_nghost-%COMP%]     .p-multiselect{min-width:15rem;max-width:15rem;height:auto}']}),n})();const Ue=[{path:"",component:S},{path:"recent-quib",component:S},{path:"admin-quib",component:O}];let ye=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[b.Bz.forChild(Ue)],b.Bz]}),n})();var we=a(5366);let Me=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.ez,ye,we.m,c.u5,c.UX,C.q4]]}),n})()}}]);