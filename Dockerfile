FROM node:erbium

ARG YARN_GLOBAL_DIR=/usr/local/share/.config/yarn/global

RUN yarn config set prefix $YARN_GLOBAL_DIR && \
	yarn global add full-icu

ENV NODE_ICU_DATA="${YARN_GLOBAL_DIR}/node_modules/full-icu"

WORKDIR /app
COPY icu.js .
