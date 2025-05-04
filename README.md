# 🚀 Docker – Guia Rápido para Gerenciar sua API

Este repositório traz um conjunto prático de comandos Docker voltados para facilitar o ciclo de vida de uma API containerizada. Desde a criação da imagem até o gerenciamento do container, este guia cobre o essencial para te ajudar no dia a dia.

---

## 🛠️ Comandos Essenciais

### 1. 🔨 Construir a imagem da API

```bash
docker build -t img-api .
```

**O que faz:**
Gera uma imagem chamada `img-api` a partir do `Dockerfile` presente no diretório atual.

---

### 2. ▶️ Iniciar o container da API

```bash
docker run --name cont-api -p 5200:5200 img-api
```

**O que faz:**
Cria e inicia um container com o nome `cont-api`, mapeando a porta `5200` da máquina local para a mesma porta dentro do container.

---

### 3. 🧹 Remover o container existente

```bash
docker rm -f cont-api
```

**O que faz:**
Força a parada do container `cont-api` e o remove completamente do sistema.

---

### 4. 🗑️ Excluir a imagem Docker

```bash
docker rmi img-api
```

**O que faz:**
Apaga a imagem `img-api` do repositório local de imagens Docker.

---

### 5. 📋 Acompanhar os logs do container

```bash
docker logs cont-api
```

**O que faz:**
Exibe os registros de saída (logs) do container `cont-api`, úteis para debug e monitoramento.

---

## ⚠️ Notas Importantes

* Verifique se a porta `5200` está disponível no seu sistema antes de iniciar o container.
* Ao fazer alterações no código ou no Dockerfile, é recomendável reconstruir a imagem usando `--no-cache` ou remover a versão anterior com `docker rmi img-api`.
