(self.webpackChunkblossom_flex_ui=self.webpackChunkblossom_flex_ui||[]).push([[8521],{13219:function(e,t,r){r.r(t),r.d(t,{CTACarouselRegionContext:function(){return f},CTACarouselRegion:function(){return g}});var n,l=r(67294),o=r(98369),a=r(72933),i=r(60201),u=r(88213),c=r(80955),s=r(65422),d=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),m=function(){return(m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},p=function(e,t,r,n){var l,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(a=(o<3?l(a):o>3?l(t,r,a):l(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},f=l.createContext({hasBorder:!1}),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.render=function(){return l.createElement(h,m({},this.props))},t=p([(0,o.logger)("CTACarouselRegion"),(0,c.inject)("context","flexModuleModelStore")],t)}(l.Component),h=function(e){var t=e.context,r=e.blossomComponent,n=e.flexModuleModelStore,o=e.flexTemplateNode,c=e.l10n,d=o.id,p=o.options.flexComponentName,g=n.getModel(o.id);if(!g)return null;var h=g.mobileWidth;if(!r||!(0,s.T8)(o,n)||"hidden"===h)return null;var x=g.title,b=g.innerTitle,v=g.hasBorder,y=g.lg,C=g.md,_=g.sm,O=g.view,k="uitk-type-300 all-x-margin-three",w="all-b-padding-six",T="all-t-padding-three",j="all-t-margin-three all-b-margin-zero all-l-margin-three",E=["call-to-action","native-marquee-tile","editorial"],R=!1,z={lg:y||6,md:C||4,sm:_||3};"lob-carousel"===O&&(z={lg:y||5,md:C||4,sm:_||2},k="uitk-type-300 all-t-margin-zero all-x-margin-three",w="s-b-padding-three all-b-padding-zero",j="all-b-margin-zero all-l-margin-three"),"grid-merch-container"===O&&(z={lg:y||4,md:C||4,sm:_||2},R=!0,T="all-t-padding-six");var B="CTACarouselRegion "+T+" "+w+" "+p+" ",M=r.renderChildren(e.logger,c,t,(function(e){return E.includes(e.name)})),N=null==M?void 0:M.length;if(M.length<1)return null;var P=new i.V(d),A=e.l10n.formatText;return l.createElement("div",{className:B,"data-testid":"cta-carousel-region",id:d},x&&l.createElement("div",{className:"all-x-margin-three"},l.createElement(a.UitkHeading,m({},{tag:"h2",size:3}),x)),b&&l.createElement("p",{className:k},b),l.createElement(f.Provider,{value:{hasBorder:v,carouselSize:N}},l.createElement(u.G,{className:j,itemsVisible:z,buttonText:{nextButton:A("carousel.item.next"),prevButton:A("carousel.item.prev")},pageBy:1,peekWidth:12,showMaxItems:R},M.map((function(e,t){return l.createElement("div",{key:P.next(),"data-idx":t},e)})))))};t.default=g}}]);
//# sourceMappingURL=flexComponents~CTACarouselRegion.2be5230b50155b3f0aeb.js.map