module.exports = {  
  apps: [{  
    name: 'mybabyname-next',  
    script: 'npm',  
    args: 'run start',  
    cwd: '/mnt/mydisk/www/mybabyname/frontend/', // 你的项目目录  
    instances: 1,  
    autorestart: true,  
    watch: false,  
    max_memory_restart: '1G',  
    env: {  
      NODE_ENV: 'production'  
    },  
    env_production: {  
      NODE_ENV: 'production'  
    }  
  }]  
};
