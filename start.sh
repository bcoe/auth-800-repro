echo "connect to IP"
curl http://169.254.169.254/computeMetadata/v1/instance/ -H "Metadata-Flavor: Google"
curl http://169.254.169.254/computeMetadata/v1/instance/ -I -H "Metadata-Flavor: Google"
echo "connect to URL"
curl http://metadata.google.internal./computeMetadata/v1/instance/ -H "Metadata-Flavor: Google"
curl http://metadata.google.internal./computeMetadata/v1/instance/ -I -H "Metadata-Flavor: Google"
npm run start
