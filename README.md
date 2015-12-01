## Setup
``` bash
npm install
npm run dev
```

## 目录结构
<pre>
│  .gitignore          # 忽略无需git控制的文件  比如 node_modules
│  package.json        # 项目配置
│  readme.md           # 项目说明
│  index.html          # 首页
│  webpack.config.js   # webpack 配置文件
│
├─node_modules
└─src
    │  app.vue         # 主vue
    │  main.js         # 启动配置，配置路由，过滤器
    │
    ├─components       # 组件
    │      index.vue
    │
    └─assets             
          │            
	      │
	      ├─ css 		# 公用css
    	  │
    	  │
    	  ├─ font 		# 字体
    	  │
    	  │
    	  └─ img 		# 图片资源
</pre>