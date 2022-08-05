# Management-system

- [x] sign up page done
- [ ] optimize sign up error handling
- [ ] might use hook in signup (217. Using the useRequest Hook)
- [ ] add a tip for how to create a jwt seacrt jwt webtoken

install docker

install kubernetes

install minikube(linux)
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && \
sudo install minikube-linux-amd64 /usr/local/bin/minikube

install skaffold
linux: curl -Lo skaffold https://storage.googleapis.com/skaffold/builds/latest/skaffold-linux-amd64 && \
sudo install skaffold /usr/local/bin/

windows: scoop bucket add extras
scoop install skaffold

install ingress-nginx
windows: kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.4/deploy/static/provider/cloud/deploy.yaml
linux: minikube addons enable ingress

edit host file

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=syswift