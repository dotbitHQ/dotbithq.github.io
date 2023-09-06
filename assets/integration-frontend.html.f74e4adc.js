import{_ as i,o as r,c as l,a as n,b as s,d as e,w as t,e as c,r as p}from"./app.e995027b.js";const d={},u=n("h1",{id:"integrating-bit-into-frontend",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#integrating-bit-into-frontend","aria-hidden":"true"},"#"),s(" Integrating .bit into Frontend")],-1),k=n("h2",{id:"dotbit-js",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dotbit-js","aria-hidden":"true"},"#"),s(" dotbit.js")],-1),v={href:"https://github.com/dotbitHQ/dotbit.js",target:"_blank",rel:"noopener noreferrer"},b=n("blockquote",null,[n("p",null,"Note that after obtaining the value of the data set by the user, the validity of its value should be verified.")],-1),h={href:"https://github.com/dotbitHQ/dotbit.js",target:"_blank",rel:"noopener noreferrer"},m=n("h3",{id:"dependencies",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dependencies","aria-hidden":"true"},"#"),s(" Dependencies")],-1),g=n("p",null,"We recommend that developers build their own .bit Indexer, but developers can use the official .bit Indexer service for development and testing during the development phase. For details, please refer to:",-1),f=c(`<h3 id="usage-example" tabindex="-1"><a class="header-anchor" href="#usage-example" aria-hidden="true">#</a> Usage example</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// For ES Module</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;dotbit&#39;</span>
<span class="token keyword">const</span> dotbit <span class="token operator">=</span> <span class="token function">createInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Get the account info of a .bit account</span>
dotbit<span class="token punctuation">.</span><span class="token function">records</span><span class="token punctuation">(</span><span class="token string">&quot;jeffx.bit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;address.polygon&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Usually&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;0xB2bE2887A26f44555835EEaCC47d65B88b6B42c2&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ttl</span><span class="token operator">:</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;address&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">subtype</span><span class="token operator">:</span> <span class="token string">&#39;polygon&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;profile.discord&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Discord Username&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;west.bit#8906&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ttl</span><span class="token operator">:</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">subtype</span><span class="token operator">:</span> <span class="token string">&#39;discord&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps" aria-hidden="true">#</a> Next steps</h4>`,5);function y(_,x){const o=p("ExternalLinkIcon"),a=p("RouterLink");return r(),l("div",null,[u,k,n("p",null,[n("a",v,[s("dotbit.js"),e(o)]),s(" is an npm package that wraps the JSON-RPC calls to the indexer.")]),n("p",null,[s("Dapps only need to integrate this SDK and call the corresponding interfaces (data provided by .bit "),e(a,{to:"/developers/integration-backend.html#das-account-indexer"},{default:t(()=>[s("das-account-indexer")]),_:1}),s(") to obtain the required data.")]),b,n("blockquote",null,[n("p",null,[n("a",h,[s("dotbit.js documentation"),e(o)])])]),m,n("p",null,[s("Using this SDK requires the JSON-RPC service provided by "),e(a,{to:"/developers/integration-backend.html"},{default:t(()=>[s("das-account-indexer")]),_:1}),s(".")]),g,n("blockquote",null,[n("p",null,[e(a,{to:"/developers/integration-backend.html#official-indexer-service"},{default:t(()=>[s("Official Indexer service")]),_:1})])]),f,n("ul",null,[n("li",null,[s("If you need to integrate .bit on the backend, please refer to "),e(a,{to:"/developers/integration-backend.html"},{default:t(()=>[s("Backend Integration")]),_:1})]),n("li",null,[s("If you need to view the design guide, please see "),e(a,{to:"/developers/design-guide.html"},{default:t(()=>[s("Design Guide")]),_:1})])])])}var I=i(d,[["render",y],["__file","integration-frontend.html.vue"]]);export{I as default};
