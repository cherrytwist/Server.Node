# File uploads

In order to upload files, a file stream is created through GraphQL Upload to the server /uploads folder. From there the file is pinned in IPFS and CID is returned.

You can test (assuming default endpoint configuration) with the following CURL request:

```bash
curl localhost:4000/graphql \
 -F operations='{"query":"mutation UploadFile($file:Upload!) {uploadFile(file:$file)}", "variables": { "file": null }}' \
 -F map='{ "0": ["variables.file"] }' \
 -F 0=@"./uploads/sample/default.txt"
```

You should get a response: {"data":{"uploadFile":"https://ipfs.io/ipfs/QmYt9ypyGsR1BKdaCGPdwdBgAiuXK5AYN2bGSNZov7YXuk"}}.
This file should be accessible (assuming default IPFS installation) on http://localhost:8080/ipfs/QmYt9ypyGsR1BKdaCGPdwdBgAiuXK5AYN2bGSNZov7YXuk or on a public IPFS on https://ipfs.io/ipfs/QmYt9ypyGsR1BKdaCGPdwdBgAiuXK5AYN2bGSNZov7YXuk.
If the upload worked, you should see 'Hello IPFS' in the browser :)