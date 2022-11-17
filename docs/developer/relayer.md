# 运行中继人服务

如何成为 BOOLNetwork 的中继人服务，参与跨链。

---

中继人负责将跨链交易提交到目标链，他需要能感知到目标链和原始链的状态，同时还能拿到 bool 链上的跨链交易的签名。

## 启动

```bash
docker run --net=host --rm -e RUST_LOG=debug boolnetwork/bnk-relayer:latest -w=http://127.0.0.1:8720 -m=http://127.0.0.1:8740 -p=8750
```
