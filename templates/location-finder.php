<?php
  /* Template Name: 2019 Location Finder Page */
  $root = get_template_directory_uri();

  get_header();
?>

<div id="lfe-root"></div>
<script>!function(f){function e(e){for(var r,t,n=e[0],o=e[1],u=e[2],i=0,l=[];i<n.length;i++)t=n[i],Object.prototype.hasOwnProperty.call(c,t)&&c[t]&&l.push(c[t][0]),c[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(f[r]=o[r]);for(d&&d(e);l.length;)l.shift()();return p.push.apply(p,u||[]),a()}function a(){for(var e,r=0;r<p.length;r++){for(var t=p[r],n=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(n=!1)}n&&(p.splice(r--,1),e=i(i.s=t[0]))}return e}var t={},c={1:0},p=[];function i(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return f[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=f,i.c=t,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(r,e){if(1&e&&(r=i(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)i.d(t,n,function(e){return r[e]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/";var r=window["webpackJsonplocation-finder-embed"]=window["webpackJsonplocation-finder-embed"]||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var d=n;a()}([])</script>
<script src="<?php echo $root . '/dist/react-location-finder/static/js/2.c783649b.chunk.js'; ?>"></script>
<script src="<?php echo $root . '/dist/react-location-finder/static/js/main.0cd0edd3.chunk.js'; ?>"></script>
<?php get_footer();