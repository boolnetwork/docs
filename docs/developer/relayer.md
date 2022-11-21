# Run Relayer Service

How to become a relayer service of BOOLNetwork and participate in cross-chain.

---

The relayer is responsible for submitting the cross-chain transaction to the target chain. He needs to be able to perceive the state of the target chain and the original chain, and at the same time get the signature of the cross-chain transaction on the bool chain.

## start

```bash
docker run --net=host --rm -e RUST_LOG=debug boolnetwork/bnk-relayer:latest -w=http://127.0.0.1:8720 -m=http://127.0.0.1:8740 -p=8750
```

Startup relayer depends on `monitor` and `watcher`，so we can refer to[Run Privacy Node](/developer/tee)
