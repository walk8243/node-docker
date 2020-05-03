FROM centos:centos8

RUN dnf upgrade -y && \
	dnf install which -y && \
	dnf install python2 python3 gcc-c++ make -y

RUN curl https://nodejs.org/dist/v12.16.3/node-v12.16.3.tar.gz -o node-v12.16.3.tar.gz && \
	tar -xvzf node-v12.16.3.tar.gz && \
	cd node-v12.16.3 && \
	./configure && make -j4 && \
	ln -s $(pwd)/node /usr/local/bin/node && \
	node -v && \
	cd ../ && rm node-v12.16.3.tar.gz
