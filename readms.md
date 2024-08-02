To run the docker file :


For Windows
```shell
docker run -p 3000:3000 -v "%cd%:/app" -v /app/node_modules next-template
```


For Linux:

```shell
docker run -p 3000:3000 -v "$(pwd):/app" -v /app/node_modules next-template
```
