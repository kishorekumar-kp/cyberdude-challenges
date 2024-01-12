(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const m of e.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function t(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(a){if(a.ep)return;a.ep=!0;const e=t(a);fetch(a.href,e)}})();const s=[{gitName:"kishorekumar-kp",email:"kishorekp123@gmail.com"},{gitName:"esakki2104prsnl",email:"esakki2104prsnl@gmail.com"},{gitName:"Vk2401",email:"vipvasanth433@gmail.com"},{gitName:"suriyamassmsd",email:"ksmass2001@gmail.com"},{gitName:"riyaz1000",email:"hriyaz1412@gmail.com"},{gitName:"hema-venkat3",email:"hemavenkatesan3@gmail.com"},{gitName:"yrd369",email:"yogharajdhayalnamburajan@gmail.com"},{gitName:"mushkir",email:"mushkirmohamed@gmail.com"},{gitName:"bearcin46",email:"imsweety33@gmail.com"},{gitName:"dineshdevelope",email:"dineshinmecheng@gmail.com"},{gitName:"jeya-rosini",email:"jeya.rosini@gmail.com"},{gitName:"swethadsalvatore",email:"swetharamesh35309@gmail.com"},{gitName:"mshajid",email:"shajid1biz@gmail.com"},{gitName:"muthuakalya",email:"muthuakalyaa@gmail.com"},{gitName:"vedhatech002",email:"vedhatech02@gmail.com"},{gitName:"danielace1",email:"asudharsan1805@gmail.com"},{gitName:"sharif-22",email:"khajasharif065@gmail.com"},{gitName:"gayathrihg",email:"gai388926@gmail.com"},{gitName:"muthukumarimoorthi",email:"muthukumari.m28197@gmail.com"}],r=document.getElementById("list-container");s.forEach(c=>{const i=`https://api.github.com/users/${c.gitName}`;fetch(i).then(t=>t.json()).then(t=>{console.log(t),r.innerHTML+=`
    <div class="flex items-center bg-[#FDCEDF] rounded-xl justify-between px-10 py-5">
<div class="flex space-x-10 items-center px-5">
<div>
  <img
    src="${t.avatar_url}
    alt="profile"
    width="150"
    class="rounded-full"
  />
</div>
<div class="text-xl text-gray-700 space-y-2">
  <p class="font-medium text-gray-900">${t.name}</p>
  <p class="flex items-center gap-1">
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        class="text-blue-400"
      >
        <path
          fill="currentColor"
          d="M3.615 19.77q-.69 0-1.152-.463Q2 18.844 2 18.154v-9.5h1v9.5q0 .27.173.442t.442.173h14.77v1zm3-3q-.69 0-1.152-.463Q5 15.844 5 15.154v-9.77q0-.69.463-1.152t1.152-.463h13.77q.69 0 1.152.463q.463.462.463 1.153v9.769q0 .69-.462 1.153q-.463.462-1.153.462zm6.885-5.24L21 5.945q0-.292-.048-.558q-.048-.267-.144-.501L13.5 10.312L6.154 4.923q-.096.235-.125.491T6 5.944z"
        />
      </svg>
    </span>
    ${c.email}
  </p>
  <p class="flex items-center gap-1">
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        class="text-red-500"
      >
        <path
          fill="currentColor"
          d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
        />
      </svg>
    </span>
    ${t.location}
  </p>
  <button class="py-2 mt-2 px-5 rounded-lg font-medium text-xl bg-[#d55092]"><a href="https://github.com/${t.login}?tab=repositories" target="_blank">Go to github repo</a></button>
            
</div>
</div>
<div class="space-x-5 mr-10 flex items-center text-gray-800">
<a>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 1000 1000"
    class="hover:text-blue-600"
  >
    <path
      fill="currentColor"
      d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854z"
    />
  </svg>
</a>
<a >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    class="hover:text-pink-500"
  >
    <path
      fill="currentColor"
      d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
    />
  </svg>
</a>
<a href="${t.html_url}" target=_blank>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    class="hover:text-gray-600"
  >
    <path
      fill="currentColor"
      d="M12 0a12 12 0 1 0 0 24a12 12 0 0 0 0-24m3.163 21.783h-.093a.513.513 0 0 1-.382-.14a.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028a1.832 1.832 0 0 0-.542-.875a8.014 8.014 0 0 0 2.038-.471a4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13a4.138 4.138 0 0 0-.26-1.476a3.892 3.892 0 0 0-.795-1.284a2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604c0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763a.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26a6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0a13.507 13.507 0 0 0-.572-.362a6.022 6.022 0 0 0-.672-.342a4.516 4.516 0 0 0-.705-.261a2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02a5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773c0 .202.017.404.051.604c.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476a6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516c.415.422.915.75 1.466.964c.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633a2.99 2.99 0 0 0-.2.744a2.754 2.754 0 0 1-1.175.27a1.788 1.788 0 0 1-1.065-.3a2.904 2.904 0 0 1-.752-.824a3.1 3.1 0 0 0-.292-.382a2.693 2.693 0 0 0-.372-.343a1.841 1.841 0 0 0-.432-.24a1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02a.408.408 0 0 0-.13.06a.116.116 0 0 0-.06.1a.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333c.112.098.213.209.3.33c.09.119.168.246.231.381c.073.134.15.288.231.463c.188.474.522.875.954 1.145c.453.243.961.364 1.476.351c.174 0 .349-.01.522-.03c.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0z"
    />
  </svg>
</a>
</div>
</div>`})});