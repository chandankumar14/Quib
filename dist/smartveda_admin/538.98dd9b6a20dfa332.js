"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[538],{538:(Lt,g,l)=>{l.r(g),l.d(g,{CustomerModule:()=>qt});var u=l(9808),d=l(1083),x=l(5861),m=l(8441),_=l(9783),a=l(3075),t=l(5e3),v=l(9996),Z=l(7650),T=l(7673),C=l(2866),U=l(7398),c=l(4255),M=l(1424),h=l(6526),Q=l(845),y=l(4119),A=l(5315),N=l(4297),f=l(9114);const w=["QuibUserTable"];function q(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",14),t.TgZ(2,"span",14),t.TgZ(3,"h2",15),t._uU(4," Users "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"div",14),t._UZ(6,"i",16),t.TgZ(7,"input",17),t.NdJ("input",function(n){return t.CHM(e),t.oxw().FilterGlobal(n,"contains")}),t.qZA(),t.qZA(),t.TgZ(8,"div",14),t.TgZ(9,"form",18),t._UZ(10,"p-multiSelect",19),t.TgZ(11,"button",20),t.NdJ("click",function(){return t.CHM(e),t.oxw().SelectRequestedColumns()}),t._uU(12," Submit "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",14),t.TgZ(14,"button",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return[n.display=!0,n.MoVList=!1,n.AssignToModerator=!0,n.ModeratorMovies=!1,n.message="Assign Movie to Moderator"]}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(7),t.Q6J("value",e.SearchKeyWord.Gsearch),t.xp6(2),t.Q6J("formGroup",e.columnSelectorForm),t.xp6(1),t.Q6J("options",e.colsOptions)("virtualScroll",!0)}}function S(o,s){if(1&o&&(t.TgZ(0,"th",24),t._uU(1),t._UZ(2,"p-sortIcon",25),t.qZA()),2&o){const e=s.$implicit;t.Q6J("pSortableColumn",e.field),t.xp6(1),t.hij(" ",e.headers," "),t.xp6(1),t.Q6J("field",e.field)}}function I(o,s){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"th",22),t._uU(2,"S.no"),t.qZA(),t.YNc(3,S,3,3,"th",23),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",0==e.filteredCols.length?e.cols:e.filteredCols)}}function J(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.displayName," ")}}function k(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.firstName," ")}}function L(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.lastName)}}function F(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.email)}}function P(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.createdDate,"MM/dd/yyyy")," ")}}function O(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.bumpCount)}}function Y(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.followeeCount)}}function D(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.followerCount)}}function B(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.unPostedQuibsCount," ")}}function R(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit;return t.oxw().changeUserStatus(null==n?null:n.id,!1)}),t._uU(1," Approved "),t.qZA()}}function K(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit;return t.oxw().changeUserStatus(null==n?null:n.id,!0)}),t._uU(1," Pending "),t.qZA()}}function W(o,s){if(1&o&&(t.TgZ(0,"td"),t.TgZ(1,"div",27),t.YNc(2,R,2,0,"button",28),t.YNc(3,K,2,0,"button",29),t.qZA(),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",1==e.isPending),t.xp6(1),t.Q6J("ngIf",0==e.isPending||null==e.isPending)}}function E(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",34),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit;return t.oxw().markUserAsModerator(null==n?null:n.id,!1)}),t._uU(1," Approved "),t.qZA()}}function $(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit;return t.oxw().markUserAsModerator(null==n?null:n.id,!0)}),t._uU(1," Pending "),t.qZA()}}function G(o,s){if(1&o&&(t.TgZ(0,"td"),t.TgZ(1,"div",27),t.YNc(2,E,2,0,"button",32),t.YNc(3,$,2,0,"button",33),t.qZA(),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",1==e.isModerator),t.xp6(1),t.Q6J("ngIf",0==e.isModerator||null==e.isModerator)}}function H(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td"),t.TgZ(1,"a",36),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,r=t.oxw();return[r.display=!0,r.ModeratorMovies=!0,r.AssignToModerator=!1,r.MoVList=!1,r.getModeratorMovieList(null==n?null:n.id),r.message="Moderator Movie List"]}),t._uU(2,"M Movies"),t.qZA(),t.qZA()}}function z(o,s){1&o&&(t.TgZ(0,"td"),t._uU(1," M Movies "),t.qZA())}function j(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.curatorScore)}}function V(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.ccp)}}function X(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.cfp)}}function tt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td"),t.TgZ(1,"a",36),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,r=t.oxw();return[r.display=!0,r.MoVList=!0,r.AssignToModerator=!1,r.ModeratorMovies=!1,r.getUserQuibedMoviesList(null==n?null:n.id),r.message="Movie List"]}),t._uU(2,"MOV"),t.qZA(),t.qZA()}}function et(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.totalQuibsWritten," ")}}function ot(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.averageOverallRating," ")}}function it(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.totalBumpReceived," ")}}function nt(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.bumpCount)}}function st(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.totalFlagReceived," ")}}function rt(o,s){if(1&o&&(t.TgZ(0,"div",39),t.TgZ(1,"div",40),t._uU(2),t.qZA(),t.qZA()),2&o){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e.about)}}function lt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",37),t.NdJ("mouseenter",function(){return t.CHM(e),t.oxw(2).showPopup=!0})("mouseleave",function(){return t.CHM(e),t.oxw(2).showPopup=!1}),t._uU(1),t.YNc(2,rt,3,1,"div",38),t.qZA()}if(2&o){const e=t.oxw().$implicit,i=t.oxw();t.xp6(1),t.hij(" ",e.about," "),t.xp6(1),t.Q6J("ngIf",i.showPopup)}}function at(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit;return t.oxw().deleteUser(null==n?null:n.id)}),t._uU(1," Delete "),t.qZA()}}function ut(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",44),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit;return t.oxw().restoreUser(null==n?null:n.id)}),t._uU(1," Restore "),t.qZA()}}function ct(o,s){if(1&o&&(t.TgZ(0,"td"),t.TgZ(1,"div",27),t.YNc(2,at,2,0,"button",41),t.YNc(3,ut,2,0,"button",42),t.qZA(),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",!e.isDeleted),t.xp6(1),t.Q6J("ngIf",e.isDeleted)}}function pt(o,s){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.YNc(3,J,2,1,"td",11),t.YNc(4,k,2,1,"td",11),t.YNc(5,L,2,1,"td",11),t.YNc(6,F,2,1,"td",11),t.YNc(7,P,3,4,"td",11),t.YNc(8,O,2,1,"td",11),t.YNc(9,Y,2,1,"td",11),t.YNc(10,D,2,1,"td",11),t.YNc(11,B,2,1,"td",11),t.YNc(12,W,4,2,"td",11),t.YNc(13,G,4,2,"td",11),t.YNc(14,H,3,0,"td",11),t.YNc(15,z,2,0,"td",11),t.YNc(16,j,2,1,"td",11),t.YNc(17,V,2,1,"td",11),t.YNc(18,X,2,1,"td",11),t.YNc(19,tt,3,0,"td",11),t.YNc(20,et,2,1,"td",11),t.YNc(21,ot,2,1,"td",11),t.YNc(22,it,2,1,"td",11),t.YNc(23,nt,2,1,"td",11),t.YNc(24,st,2,1,"td",11),t.YNc(25,lt,3,2,"td",26),t.YNc(26,ct,4,2,"td",11),t.qZA()),2&o){const e=s.rowIndex,i=s.$implicit,n=t.oxw();t.xp6(2),t.Oqu(e+1),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("Display Name")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("First Name")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("Last Name")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("Email")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("Join")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("BMP")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("FNG")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("FRS")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("UNP")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("Status")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("IsModerator")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("Moderator Movies")&&i.isModerator),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("Moderator Movies")&&!i.isModerator),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("CUR")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("CCP")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("CFP")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("MOV")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("QUIBS")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("AVR")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("B-IN")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("B-OUT")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("FLAGE")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("PERS")),t.xp6(1),t.Q6J("ngIf",n.shouldDisplayColumn("Action"))}}function dt(o,s){1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td",45),t._uU(2," No Records Found. "),t.qZA(),t.qZA())}function mt(o,s){if(1&o&&(t.TgZ(0,"option",62),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.email," ")}}function _t(o,s){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"form",18),t.TgZ(2,"div",46),t.TgZ(3,"div",47),t.TgZ(4,"div",48),t.TgZ(5,"div",49),t.TgZ(6,"div",50),t.TgZ(7,"div",47),t.TgZ(8,"div",51),t.TgZ(9,"label",52),t._uU(10," Movies List "),t.qZA(),t._UZ(11,"p-multiSelect",53),t.qZA(),t.TgZ(12,"div",51),t.TgZ(13,"div",54),t.TgZ(14,"label",52),t._uU(15," Moderator User List "),t.qZA(),t.TgZ(16,"select",55),t.YNc(17,mt,2,2,"option",56),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",57),t.TgZ(19,"div",58),t.TgZ(20,"div",59),t.TgZ(21,"button",60),t.NdJ("click",function(){return t.CHM(e),t.oxw().display=!1}),t._uU(22," Cancel "),t.qZA(),t.TgZ(23,"button",61),t.NdJ("click",function(){return t.CHM(e),t.oxw().AssignMovieToModeratorUser()}),t._uU(24," Submit "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.quibUserForm),t.xp6(10),t.Q6J("options",e.moviesList)("virtualScroll",!0),t.xp6(6),t.Q6J("ngForOf",e.Approved_UserList)}}function gt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"p-card",64),t.TgZ(2,"div",47),t.TgZ(3,"div",51),t.TgZ(4,"strong",65),t._uU(5,"Movie Name"),t.qZA(),t._uU(6," =>"),t.TgZ(7,"span",66),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).AdminQuib(null==r?null:r.movieId)}),t._uU(8),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"strong",65),t._uU(11,"Total No of Quib"),t.qZA(),t._uU(12," =>"),t.TgZ(13,"span",67),t._uU(14),t.qZA(),t._UZ(15,"br"),t.qZA(),t.TgZ(16,"div",51),t.TgZ(17,"strong",65),t._uU(18,"Total No of Rated Quib"),t.qZA(),t._uU(19," =>"),t.TgZ(20,"span",67),t._uU(21),t.qZA(),t._UZ(22,"br"),t.TgZ(23,"strong",65),t._uU(24,"AVR Rating"),t.qZA(),t._uU(25," =>"),t.TgZ(26,"span",67),t._uU(27),t.qZA(),t._UZ(28,"br"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=s.$implicit;t.xp6(8),t.Oqu(null==e?null:e.movieName),t.xp6(6),t.Oqu(null==e?null:e.totalQuibByMovieId),t.xp6(7),t.Oqu(null==e?null:e.ratedQuibByMovieId),t.xp6(6),t.Oqu(null==e?null:e.averageRatingByMovieId)}}function ht(o,s){if(1&o&&(t.ynx(0),t.YNc(1,gt,29,4,"div",63),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.userMovieList)}}function ft(o,s){1&o&&(t.ynx(0),t.TgZ(1,"h1",68),t._uU(2,"Sorry No Data Found"),t.qZA(),t.BQk())}function bt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"p-card",64),t.TgZ(2,"div",47),t.TgZ(3,"div",51),t.TgZ(4,"strong",65),t._uU(5,"Movie Name"),t.qZA(),t._uU(6," =>"),t.TgZ(7,"span",69),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).AdminQuib(null==r?null:r.movieId)}),t._uU(8),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"strong",65),t._uU(11,"Assigned Date"),t.qZA(),t._uU(12," =>"),t.TgZ(13,"span",67),t._uU(14),t.qZA(),t._UZ(15,"br"),t.qZA(),t.TgZ(16,"div",70),t.TgZ(17,"button",71),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).removeMovieFromModerator(r.id,r.userId)}),t._uU(18," Remove "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=s.$implicit,i=t.oxw(2);t.xp6(8),t.Oqu(null==e?null:e.title),t.xp6(6),t.Oqu(i.getFormattedDate(null==e?null:e.createdDate))}}function xt(o,s){if(1&o&&(t.ynx(0),t.YNc(1,bt,19,2,"div",63),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.moderatorMovieList)}}function vt(o,s){1&o&&(t.ynx(0),t.TgZ(1,"h1",68),t._uU(2,"Sorry No Data Found"),t.qZA(),t.BQk())}const Zt=function(){return[20,50,100]},Tt=function(){return["firstName","lastName","email","displayName"]},Ct=function(){return{width:"60vw",height:"90vh"}},Ut=function(){return{width:"40vw"}};let b=(()=>{class o{constructor(e,i,n,r,p,St,It,Jt,kt){this.QuibService=e,this.ngxLoader=i,this.toastr=n,this.fb=r,this.router=p,this.CommonService=St,this.MoviesService=It,this.confirmationService=Jt,this.el=kt,this.Quib_User=[],this.Approved_UserList=[],this.selectedMovies=[],this.selectedColumns=[],this.colsOptions=[],this.filteredCols=[],this.userMovieList=[],this.movieId=[],this.display=!1,this.MoVList=!1,this.AssignToModerator=!1,this.quibUserForm=new a.cw({}),this.columnSelectorForm=new a.cw({}),this.showPopup=!1,this.moderatorMovieList=[],this.ModeratorMovies=!1,this.styleValue={height:"55vw",width:"80vh"},this.quibUserForm=this.fb.group({curator:["",[a.kI.required]],user:["",[a.kI.required]],selectedMovies:new a.NI([])}),this.columnSelectorForm=this.fb.group({selectedColumns:new a.NI([])})}ngOnInit(){this.sidebarSpacing="expanded",this.fgsType=m.aS.squareLoader,this.ngxLoader.start(),this.QuibService.SearchKeyWord.subscribe(e=>{this.SearchKeyWord=e}),this.getUserList(),this.getMovieList(),this.cols=[{field:"displayName",show:!0,headers:"Display Name"},{field:"firstName",show:!0,headers:"First Name"},{field:"lastName",show:!0,headers:"Last Name"},{field:"email",show:!0,headers:"Email"},{field:"createdDate",show:!0,headers:"Join"},{field:"bumpCount",show:!0,headers:"BMP"},{field:"followeeCount",show:!0,headers:"FNG"},{field:"followerCount",show:!0,headers:"FRS"},{field:"unPostedQuibsCount",show:!0,headers:"UNP"},{field:"status",show:!0,headers:"Status"},{field:"IsModerator",show:!0,headers:"IsModerator"},{field:"ModeratorMovies",show:!0,headers:"M Movies"},{field:"curatorScore",show:!0,headers:"CUR"},{field:"ccp",show:!0,headers:"CCP"},{field:"cfp",show:!0,headers:"CFP"},{field:"mov",show:!0,headers:"MOV"},{field:"totalQuibsWritten",show:!0,headers:"QUIBS"},{field:"averageOverallRating",show:!0,headers:"AVR"},{field:"totalBumpReceived",show:!0,headers:"B-IN"},{field:"bumpCount",show:!0,headers:"B-OUT"},{field:"totalFlagReceived",show:!0,headers:"FLAGE"},{field:"about",show:!0,headers:"PERS"},{field:"Action",show:!0,headers:"Action"}],this.colsOptions=this.cols.map(e=>({label:e.headers,value:e.field})),this.hoverableCells=this.el.nativeElement.querySelectorAll(".hoverable-cell"),this.hoverableCells.forEach(e=>{e.addEventListener("mouseover",()=>{this.setPopupContent(e.textContent);const i=e.nextElementSibling;i&&(i.style.display="block")}),e.addEventListener("mouseout",()=>{const i=e.nextElementSibling;i&&(i.style.display="none")})})}setPopupContent(e){const i=this.el.nativeElement.querySelector(".popup-content");i&&(i.textContent=e)}SelectRequestedColumns(){this.selectedColumns=this.columnSelectorForm.controls.selectedColumns.value,this.filteredCols=this.cols.filter(e=>this.selectedColumns.some(i=>i.value===e.field)).map(e=>({headers:e.headers}))}shouldDisplayColumn(e){return 0===this.filteredCols.length||this.filteredCols.some(i=>i.headers===e)}getFormattedDate(e){return e.split("T")[0]}removeMovieFromModerator(e,i){var n=this;return(0,x.Z)(function*(){(yield n.QuibService.removeModeratorMovie(e)).subscribe(r=>{r&&(n.toastr.showSuccess("Moderator movie removed successfully","Remove Movie"),n.getModeratorMovieList(i))})})()}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}applyFilterGlobal(e,i){switch(e.target.id){case"displayName":this.SearchKeyWord.displayName=e.target.value,this.QuibUserTable.filter(e.target.value,e.target.id,i);break;case"firstName":this.SearchKeyWord.firstName=e.target.value,this.QuibUserTable.filter(e.target.value,e.target.id,i);break;case"lastName":this.SearchKeyWord.lastName=e.target.value,this.QuibUserTable.filter(e.target.value,e.target.id,i);break;case"email":this.SearchKeyWord.email=e.target.value,this.QuibUserTable.filter(e.target.value,e.target.id,i)}}deleteUser(e){this.confirmationService.confirm({message:"Are you sure that you want to delete user?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.QuibService.deleteUser(e).subscribe(i=>{i&&(this.toastr.showSuccess("user deleted successfully","user delete"),this.getUserList())})}})}restoreUser(e){this.confirmationService.confirm({message:"Are you sure that you want to restore user?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.QuibService.restoreUser(e).subscribe(i=>{i&&(this.toastr.showSuccess("user restored successfully","user restore"),this.getUserList())})}})}getUserList(){this.QuibService.getUserList().subscribe(e=>{this.Quib_User=e,this.Approved_UserList=e.filter(i=>!0===i.isModerator),this.QuibUserSearch(),this.ngxLoader.stop()})}changeUserStatus(e,i){this.message=i?"Are you sure that you want to Approved user?":"Are you sure that you want to mark as Pending?",this.confirmationService.confirm({message:this.message,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.QuibService.changeUserStatus(e,i).subscribe(n=>{n&&(this.toastr.showSuccess(" Status change successfully","Status change"),this.getUserList())})}})}AssignMovieToModeratorUser(){this.ngxLoader.start(),this.display=!1,this.quibUserForm.controls.selectedMovies.value.map(i=>this.movieId.push(i.id)),this.QuibService.AssignMovieToModeratorUser({UserId:this.quibUserForm.controls.user.value,movieIds:this.movieId}).subscribe(i=>{i&&(this.toastr.showSuccess("Movies Assigned to  Moderator user  successfully","Moderator user"),this.display=!1,this.getUserList())})}getMovieList(){this.MoviesService.getMovieList().subscribe(e=>{this.moviesList=e})}markUserAsModerator(e,i){this.ngxLoader.start(),this.QuibService.markUserAsModerator(e,i).subscribe(n=>{n&&(this.toastr.showSuccess(" Moderator  user is added successfully","Moderator user"),this.display=!1,this.getUserList())})}ngOnDestroy(){this.QuibService.SearchKeyWord.next(this.SearchKeyWord),this.CommonService.setUserSearchKeyWord(this.SearchKeyWord)}QuibUserSearch(){null!=this.SearchKeyWord.displayName&&this.SearchKeyWord.displayName.trim().length>0&&this.QuibUserTable.filter(this.SearchKeyWord.displayName,"displayName","contains"),null!=this.SearchKeyWord.firstName&&this.SearchKeyWord.firstName.trim().length>0&&this.QuibUserTable.filter(this.SearchKeyWord.firstName,"firstName","contains"),null!=this.SearchKeyWord.lastName&&this.SearchKeyWord.lastName.trim().length>0&&this.QuibUserTable.filter(this.SearchKeyWord.lastName,"lastName","contains"),null!=this.SearchKeyWord.email&&this.SearchKeyWord.email.trim().length>0&&this.QuibUserTable.filter(this.SearchKeyWord.email,"email","contains"),null!=this.SearchKeyWord.Gsearch&&this.SearchKeyWord.Gsearch.trim().length>0&&this.QuibUserTable.filterGlobal(this.SearchKeyWord.Gsearch,"contains")}FilterGlobal(e,i){this.SearchKeyWord.Gsearch=e.target.value,this.QuibUserTable.filterGlobal(e.target.value,i)}AdminQuib(e){this.router.navigate(["/Quib/admin-quib"],{queryParams:{userId:this.userId,movieId:e}})}getUserQuibedMoviesList(e){this.userId=e,this.QuibService.getUserQuibedMoviesList(e).subscribe(i=>{this.userMovieList=i})}getModeratorMovieList(e){this.userId=e,this.QuibService.getModeratorMovies(e).subscribe(i=>{this.moderatorMovieList=i})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v.V),t.Y36(m.LA),t.Y36(Z.$),t.Y36(a.qu),t.Y36(d.F0),t.Y36(T.v),t.Y36(C.I),t.Y36(_.YP),t.Y36(t.SBq))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-quib-user"]],viewQuery:function(e,i){if(1&e&&t.Gf(w,5),2&e){let n;t.iGM(n=t.CRH())&&(i.QuibUserTable=n.first)}},features:[t._Bn([_.YP])],decls:17,vars:30,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"card","col-sm-12","table-container",2,"border","none"],["id","customerTable","scrollHeight","70vh","columnResizeMode","expand","responsiveLayout","scroll","dataKey","id","stateStorage","session","stateKey","QuibUser-session","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-gridlines",3,"value","columns","resizableColumns","paginator","rows","rowsPerPageOptions","showCurrentPageReport","responsive","globalFilterFields"],["QuibUserTable",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"fgsColor","fgsType"],["position","top",3,"visible","modal","header","baseZIndex","visibleChange"],[4,"ngIf"],["header","Confirmation","position","top","icon","pi pi-exclamation-triangle",3,"baseZIndex"],[1,"row"],[1,"p-input-icon-right","ml-5"],[2,"font-family","'Times New Roman', Times, serif"],[1,"pi","pi-search"],["pInputText","","type","text","id","Gsearch","placeholder","Search by name/email",3,"value","input"],[3,"formGroup"],["optionLabel","label","formControlName","selectedColumns","display","chip","defaultLabel","Select Columns to display",3,"options","virtualScroll"],["pButton","","type","button","id","submit","name","submit",1,"p-button-primary",2,"margin-left","8px","margin-bottom","6.7px","height","30px",3,"click"],["pButton","","type","button","label","Assign Movie to Moderator",1,"p-button-success",2,"margin-left","2rem",3,"click"],["pResizableColumn","",2,"width","40px !important"],["pResizableColumn","",3,"pSortableColumn",4,"ngFor","ngForOf"],["pResizableColumn","",3,"pSortableColumn"],[3,"field"],[3,"mouseenter","mouseleave",4,"ngIf"],[1,"btn-grp"],["pTooltip","Mark As Pending","pButton","","type","button","class","p-button-success","style","height: 30px",3,"click",4,"ngIf"],["pButton","","type","button","class","p-button-danger","pTooltip","Mark As Approved","style","height: 30px; width: 6.78rem; padding-left: 1.55rem",3,"click",4,"ngIf"],["pTooltip","Mark As Pending","pButton","","type","button",1,"p-button-success",2,"height","30px",3,"click"],["pButton","","type","button","pTooltip","Mark As Approved",1,"p-button-danger",2,"height","30px","width","6.78rem","padding-left","1.55rem",3,"click"],["pTooltip","Mark As Normal User ","pButton","","type","button","class","p-button-success","style","height: 30px",3,"click",4,"ngIf"],["pButton","","type","button","class","p-button-danger","pTooltip","Mark As Moderator","style","height: 30px; width: 6.78rem; padding-left: 1.55rem",3,"click",4,"ngIf"],["pTooltip","Mark As Normal User ","pButton","","type","button",1,"p-button-success",2,"height","30px",3,"click"],["pButton","","type","button","pTooltip","Mark As Moderator",1,"p-button-danger",2,"height","30px","width","6.78rem","padding-left","1.55rem",3,"click"],[2,"color","blue","cursor","pointer",3,"click"],[3,"mouseenter","mouseleave"],["class","popup",4,"ngIf"],[1,"popup"],[1,"popup-content"],["class","p-button-success","pButton","","type","button","pTooltip","Delete user","tooltipPosition","bottom",3,"click",4,"ngIf"],["class","p-button-danger","pButton","","type","button","pTooltip","Restore User","tooltipPosition","bottom",3,"click",4,"ngIf"],["pButton","","type","button","pTooltip","Delete user","tooltipPosition","bottom",1,"p-button-success",3,"click"],["pButton","","type","button","pTooltip","Restore User","tooltipPosition","bottom",1,"p-button-danger",3,"click"],["colspan","12",1,"text-center","text-danger","font-weight-700"],[1,"card","col-sm-12",2,"height","70vh"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-5"],[1,"card-body"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],["for","FirstName"],["optionLabel","title","formControlName","selectedMovies","display","chip","defaultLabel","Select Movies",3,"options","virtualScroll"],[1,"form-group"],["formControlName","user","placeholder","Select User",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"click"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success",3,"click"],[3,"value"],[4,"ngFor","ngForOf"],[1,"m-5"],[1,"heading-section"],[1,"content-data",2,"cursor","pointer",3,"click"],[1,"content-data"],[1,"NoRecord"],[1,"content-data","movie-content",2,"cursor","pointer",3,"click"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12",2,"text-align","center"],["pButton","","type","button",1,"p-button-danger","mr-4",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("toggleSidebar",function(r){return i.onToggleSidebar(r)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"p-table",3,4),t.YNc(5,q,15,4,"ng-template",5),t.YNc(6,I,4,1,"ng-template",6),t.YNc(7,pt,27,25,"ng-template",7),t.YNc(8,dt,3,0,"ng-template",8),t.qZA(),t._UZ(9,"ngx-ui-loader",9),t.qZA(),t.TgZ(10,"p-dialog",10),t.NdJ("visibleChange",function(r){return i.display=r}),t.YNc(11,_t,25,4,"ng-container",11),t.YNc(12,ht,2,1,"ng-container",11),t.YNc(13,ft,3,0,"ng-container",11),t.YNc(14,xt,2,1,"ng-container",11),t.YNc(15,vt,3,0,"ng-container",11),t.qZA(),t._UZ(16,"p-confirmDialog",12),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngClass",i.sidebarSpacing),t.xp6(2),t.Q6J("value",i.Quib_User)("columns",i.cols)("resizableColumns",!0)("paginator",!0)("rows",20)("rowsPerPageOptions",t.DdM(26,Zt))("showCurrentPageReport",!0)("responsive",!0)("globalFilterFields",t.DdM(27,Tt)),t.xp6(6),t.Q6J("fgsColor","#000000")("fgsType",i.fgsType),t.xp6(1),t.Akn(t.DdM(28,Ct)),t.Q6J("visible",i.display)("modal",!0)("header",i.message)("baseZIndex",1e4),t.xp6(1),t.Q6J("ngIf",i.AssignToModerator),t.xp6(1),t.Q6J("ngIf",i.MoVList&&i.userMovieList.length>0),t.xp6(1),t.Q6J("ngIf",i.MoVList&&0==i.userMovieList.length),t.xp6(1),t.Q6J("ngIf",i.ModeratorMovies&&i.moderatorMovieList.length>0),t.xp6(1),t.Q6J("ngIf",i.ModeratorMovies&&0==i.moderatorMovieList.length),t.xp6(1),t.Akn(t.DdM(29,Ut)),t.Q6J("baseZIndex",1e4))},directives:[U.G,u.mk,c.iA,_.jx,M.o,a._Y,a.JL,a.sg,h.NU,a.JJ,a.u,Q.Hq,c.Q7,u.sg,c.lQ,c.fz,u.O5,y.u,m.Eo,A.V,a.EJ,a.YN,a.Kr,N.Z,f.Q],pipes:[u.uU],styles:['th[_ngcontent-%COMP%]{background-color:#353d44!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:left!important;font-size:200!important}.p-datatable[_ngcontent-%COMP%]{padding:none!important}.content-header[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.5px;font-size:1.6rem;margin-bottom:.25rem}.text-center[_ngcontent-%COMP%]{margin-left:60%!important}.glyphicon-cog[_ngcontent-%COMP%]:before{content:"\\e019";padding-right:10px}.export[_ngcontent-%COMP%]{margin-left:90%;margin-bottom:.5rem}.btn-grp[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background-color:#c6c7cd94}[_nghost-%COMP%]     .p-menuitem-link-active{background-color:#900!important;color:#fff}[_nghost-%COMP%]     .p-multiselect{min-width:20rem;max-width:20rem;height:auto}[_nghost-%COMP%]     .multiselect-custom .p-multiselect-label{padding-top:.5rem;padding-bottom:.5rem}.intputSearch[_ngcontent-%COMP%]{width:170px}.disableInputSearch[_ngcontent-%COMP%]{width:90px}.content-data[_ngcontent-%COMP%]{font-family:initial;font-size:18px;color:#483d8b}.heading-section[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif;font-size:17px;color:#d2691e}.table-container[_ngcontent-%COMP%]{max-height:calc(100vh - 55px);overflow-y:auto;position:relative}.sticky-table-head[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;background-color:#fff;z-index:500;overflow:hidden}.movie-content[_ngcontent-%COMP%]:hover{color:red;text-decoration:underline}.movie-content[_ngcontent-%COMP%]{transition:color .3s ease,-webkit-text-decoration .3s ease;transition:color .3s ease,text-decoration .3s ease;transition:color .3s ease,text-decoration .3s ease,-webkit-text-decoration .3s ease}']}),o})();const Mt=[{path:"",component:b},{path:"quib-user",component:b}];let Qt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(Mt)],d.Bz]}),o})();var yt=l(5366),At=l(9821),Nt=l(9959),wt=l(2075);let qt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,Qt,yt.m,At.m,f.D,Nt.h,h.q4,a.u5,a.UX,c.U$,wt.p0]]}),o})()}}]);