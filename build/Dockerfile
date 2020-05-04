FROM centos:centos8

WORKDIR /usr/local/src/

RUN dnf upgrade -y && \
	dnf install which -y && \
	dnf install python2 python3 gcc-c++ make -y

RUN curl https://nodejs.org/dist/v12.16.3/node-v12.16.3.tar.gz -o node-v12.16.3.tar.gz && \
	curl https://github.com/unicode-org/icu/releases/download/release-66-1/icu4c-66_1-src.tgz -o icu4c-66_1-src.tgz -L && \
	tar -xvzf node-v12.16.3.tar.gz && tar -xvzf icu4c-66_1-src.tgz && \
	cd node-v12.16.3 && \
	./configure --with-intl=full-icu --with-icu-source=/usr/local/src/icu --prefix=/usr/local && \
	make -j4 && make install && \
	node -v && npm -v && \
	cd ../ && rm -rf node* icu*

WORKDIR /app
