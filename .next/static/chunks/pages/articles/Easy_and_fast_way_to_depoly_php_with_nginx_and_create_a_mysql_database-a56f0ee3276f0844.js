(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[291],{993:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/Easy_and_fast_way_to_depoly_php_with_nginx_and_create_a_mysql_database",function(){return s(8881)}])},6295:function(n,e,s){"use strict";s.d(e,{B:function(){return p}});var a=s(5893),t=s(9008),i=s.n(t),c=s(1163),r=s(5649),l=s(6010);function o(n){let{children:e,className:s}=n;return(0,a.jsx)("div",{className:(0,l.Z)(s,"prose dark:prose-invert"),children:e})}var d=s(3652);function h(n){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",...n,children:(0,a.jsx)("path",{d:"M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function p(n){let{children:e,meta:s,isRssFeed:t=!1,previousPathname:l}=n,p=(0,c.useRouter)();return t?e:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:`${s.title} - JianyueHugo`}),(0,a.jsx)("meta",{name:"description",content:s.description})]}),(0,a.jsx)(r.W,{className:"mt-16 lg:mt-32",children:(0,a.jsx)("div",{className:"xl:relative",children:(0,a.jsxs)("div",{className:"mx-auto max-w-2xl",children:[l&&(0,a.jsx)("button",{type:"button",onClick:()=>p.back(),"aria-label":"Go back to articles",className:"group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0",children:(0,a.jsx)(h,{className:"h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"})}),(0,a.jsxs)("article",{children:[(0,a.jsxs)("header",{className:"flex flex-col",children:[(0,a.jsx)("h1",{className:"mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",children:s.title}),(0,a.jsxs)("time",{dateTime:s.date,className:"order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",children:[(0,a.jsx)("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"}),(0,a.jsx)("span",{className:"ml-3",children:(0,d.p)(s.date)})]})]}),(0,a.jsx)(o,{className:"mt-8",children:e})]})]})})})]})}},3652:function(n,e,s){"use strict";function a(n){return new Date(`${n}T00:00:00Z`).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}s.d(e,{p:function(){return a}})},8881:function(n,e,s){"use strict";s.r(e),s.d(e,{meta:function(){return c}});var a=s(5893),t=s(1151),i=s(6295);let c={author:"Valor",date:"2023-07-30",title:"Easy and fast way to depoly php with nginx",description:"A tutorial for nginx, php and mariadb(mysql)"},r=n=>(0,a.jsx)(i.B,Object.assign({meta:c},n));function l(n){let e=Object.assign({h1:"h1",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span"},(0,t.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{children:"Goals & Steps:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"useful php packages"}),"\n",(0,a.jsx)(e.li,{children:"Edit Nginx config to enable php"}),"\n",(0,a.jsx)(e.li,{children:"Set a Database and create a user for it"}),"\n"]}),"\n",(0,a.jsx)(e.h1,{children:"Lets start !"}),"\n",(0,a.jsx)(e.h2,{children:"PHP"}),"\n",(0,a.jsx)(e.h3,{children:"Useful packages"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"curl — Performs remote request operations."}),"\n",(0,a.jsx)(e.li,{children:"dom — Used to validate Text Widget content and to automatically configure IIS7+."}),"\n",(0,a.jsx)(e.li,{children:"exif — Works with metadata stored in images."}),"\n",(0,a.jsx)(e.li,{children:"fileinfo — Used to detect the MIME type of file uploads."}),"\n",(0,a.jsx)(e.li,{children:"hash — Used for hashing, including passwords and update packages."}),"\n",(0,a.jsx)(e.li,{children:"imagick — Provides better image quality for media uploads."}),"\n",(0,a.jsx)(e.li,{children:"json — Used for communications with other servers."}),"\n",(0,a.jsx)(e.li,{children:"mbstring — Used to properly handle UTF-8 text."}),"\n",(0,a.jsx)(e.li,{children:"mysqli — Connects to MySQL for database interactions."}),"\n",(0,a.jsx)(e.li,{children:"openssl — Permits SSL-based connections to other hosts."}),"\n",(0,a.jsx)(e.li,{children:"pcre — Increases performance of pattern matching in code searches."}),"\n",(0,a.jsx)(e.li,{children:"sodium — Validates signatures and provides secure random bytes."}),"\n",(0,a.jsx)(e.li,{children:"xml — Used for XML parsing, such as from a third-party site."}),"\n",(0,a.jsx)(e.li,{children:"zip — Used for decompressing Plugins, Themes, and WordPress update packages."}),"\n"]}),"\n",(0,a.jsx)(e.h3,{children:"how to fast install them"}),"\n",(0,a.jsx)(e.pre,{className:"language-bash",children:(0,a.jsxs)(e.code,{className:"language-bash",children:[(0,a.jsx)(e.span,{className:"token comment",children:"#for debian / ubuntu"}),"\n",(0,a.jsx)(e.span,{className:"token comment",children:"#if you need install with root permission on other user please add sudo at first of command & this will install the latest version with your apt"}),"\n$ ",(0,a.jsx)(e.span,{className:"token function",children:"apt"})," update \n$ ",(0,a.jsx)(e.span,{className:"token function",children:"apt"})," ",(0,a.jsx)(e.span,{className:"token function",children:"install"})," -y php php-common php-curl php-dom php-exif php-fileinfo php-hash php-imagick php-json php-mbstring php-mysql php-openssl php-pcre php-sodium php-xml php-zip \n"]})}),"\n",(0,a.jsx)(e.h2,{children:"How to enable php with your NGINX web server"}),"\n",(0,a.jsx)(e.pre,{className:"language-bash",children:(0,a.jsxs)(e.code,{className:"language-bash",children:[(0,a.jsx)(e.span,{className:"token comment",children:"#Step 1: Check your php version"}),"\n$ php -version\nPHP ",(0,a.jsx)(e.span,{className:"token number",children:"7.4"}),".3-4ubuntu2.19 ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"cli",(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"built: Jun ",(0,a.jsx)(e.span,{className:"token number",children:"27"})," ",(0,a.jsx)(e.span,{className:"token number",children:"2023"})," ",(0,a.jsx)(e.span,{className:"token number",children:"15"}),":49:59",(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("})," NTS ",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),"\nCopyright ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"c",(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," The PHP Group\nZend Engine v3.4.0, Copyright ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"c",(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," Zend Technologies\nwith Zend OPcache v7.4.3-4ubuntu2.19, Copyright ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"c",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),", by Zend Technologies\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"#Step 2: Edit your config file"}),"\n$ ",(0,a.jsx)(e.span,{className:"token function",children:"nano"})," /etc/nginx/sites-available/default\n",(0,a.jsx)(e.span,{className:"token comment",children:"# found index line and add a index.php "}),"\nindex index.html index.htm index.nginx-debian.html index.php",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token comment",children:"# found default php quote adn edit it like this."}),"\nlocation ~ ",(0,a.jsx)(e.span,{className:"token punctuation",children:"\\"}),".php$ ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n  include snippets/fastcgi-php.conf",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n  fastcgi_pass unix:/var/run/php/php7.4-fpm.sock",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"#Step 3: press ctrl + X save file & check and restart nginx"}),"\n$ nginx -t ",(0,a.jsx)(e.span,{className:"token comment",children:"# after it said successful countinue or go back and check !"}),"\n$ systemctl restart nginx\n"]})}),"\n",(0,a.jsx)(e.h2,{children:"How to create a mysql database"}),"\n",(0,a.jsx)(e.pre,{className:"language-bash",children:(0,a.jsxs)(e.code,{className:"language-bash",children:[(0,a.jsx)(e.span,{className:"token comment",children:"#Step 1: Login mysql"}),"\n$ mysql -u root -p\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"#Step 2: Create database & change database_name to your own!!"}),"\n$ CREATE DATABASE database_name",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"#Step 3: Create user and give permission"}),"\n",(0,a.jsx)(e.span,{className:"token comment",children:"#Change database_name with same above, and edit your own user_name and PWD(password)"}),"\n$ GRANT ALL PRIVILEGES ON database_name.* TO ",(0,a.jsx)(e.span,{className:"token string",children:"'user_name'"}),"@",(0,a.jsx)(e.span,{className:"token string",children:"'localhost'"})," IDENTIFIED BY ",(0,a.jsx)(e.span,{className:"token string",children:"'PWD'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"#Step 4: Save & Exit"}),"\n$ FLUSH PRIVILEGES",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n$ EXIT:\n"]})})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(r,Object.assign({},n,{children:(0,a.jsx)(l,n)}))}},9008:function(n,e,s){n.exports=s(2636)},1151:function(n,e,s){"use strict";s.d(e,{ah:function(){return i}});var a=s(7294);let t=a.createContext({});function i(n){let e=a.useContext(t);return a.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=993)}),_N_E=n.O()}]);