# 使用官方提供的node作为基础镜像  
FROM node:19  
  
# 设置工作目录为/app  
WORKDIR /app  
  
# 将当前目录内容复制到容器的/app内  
COPY . /app  
  
# 安装项目依赖  
RUN npm install  
  
# 安装nextjs所需依赖  
RUN npm run build  
  
# 对外暴露的端口号  
ENV PORT 4000
EXPOSE 4000  
  
# 定义环境变量  
ENV NODE_ENV=production  
  
# 当容器启动时运行npm run start  
CMD ["npm", "run", "start"]
