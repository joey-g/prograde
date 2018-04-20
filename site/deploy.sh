#!/usr/bin/env bash

aws s3 rm s3://www.joeygryder.com --recursive
aws s3 sync build s3://www.joeygryder.com
aws cloudfront create-invalidation --distribution-id E3EB2IVJAI21K0 --paths '/*'
