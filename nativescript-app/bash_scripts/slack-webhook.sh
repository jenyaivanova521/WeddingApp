#!/bin/bash
value=$(<output.log)

for file in output.log; do
  echo "Touching file: ${file##*/}"
  sed -n 's|.*"publicURL":"\([^"]*\)".*|publicURL=\1|p' output.log > output2.log
done

payload=$(<output2.log)

curl -X POST --data-urlencode "payload={\"channel\": \"#builds\", \"username\": \"Android Build Bot for Appetize\", \"text\": \"Android app has been deployed successfully. $payload\", \"icon_emoji\": \":cubimal_chick:\"}" https://hooks.slack.com/services/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
