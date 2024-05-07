# playing_aws_codepipeline


* Create Pipeline
https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-github-gitclone.html#tutorials-github-gitclone-pipeline

* Add Report
https://aws.amazon.com/blogs/devops/test-reports-with-aws-codebuild/

* CodeBuild: Add Notification
![image](https://github.com/AntonioDiaz/playing_aws_codepipeline/assets/725743/c48dcb87-2e98-4b36-9559-60fd0fc7931a)

* Lambda
![image](https://github.com/AntonioDiaz/playing_aws_codepipeline/assets/725743/88c5fe5c-812b-4926-b4f6-dff557c2dab0)

* Event received
````json
{
    "Records": [
        {
            "EventSource": "aws:sns",
            "EventVersion": "1.0",
            "EventSubscriptionArn": "arn:aws:sns:eu-west-3:732945014111:codebuild-notifications-sns:70d0de2d-acd3-4ad3-9b01-46ac078bec9d",
            "Sns": {
                "Type": "Notification",
                "MessageId": "4c725409-d185-5b34-8528-0abae2783c24",
                "TopicArn": "arn:aws:sns:eu-west-3:732945014111:codebuild-notifications-sns",
                "Subject": null,
                "Message": "{\"account\":\"732945014111\",\"detailType\":\"CodeBuild Build Phase Change\",\"region\":\"eu-west-3\",\"source\":\"aws.codebuild\",\"time\":\"2024-05-06T19:38:09Z\",\"notificationRuleArn\":\"arn:aws:codestar-notifications:eu-west-3:732945014111:notificationrule/d75328f5168c517b75e0daec364d1068c80091f0\",\"detail\":{\"completed-phase\":\"BUILD\",\"project-name\":\"build_04\",\"build-id\":\"arn:aws:codebuild:eu-west-3:732945014111:build/build_04:a6fa43db-5062-401a-944e-b660fbeff074\",\"completed-phase-context\":\"[COMMAND_EXECUTION_ERROR: Error while executing command: mvn test. Reason: exit status 1]\",\"additional-information\":{\"cache\":{\"type\":\"NO_CACHE\"},\"build-number\":31.0,\"timeout-in-minutes\":60.0,\"build-complete\":false,\"initiator\":\"codepipeline/MyGitHubPipeline\",\"build-start-time\":\"May 6, 2024 7:37:55 PM\",\"source\":{\"report-build-status\":false,\"git-clone-depth\":1.0,\"type\":\"CODEPIPELINE\",\"git-submodules-config\":{\"fetch-submodules\":false}},\"source-version\":\"arn:aws:s3:::codepipeline-eu-west-3-263666658512/MyGitHubPipeline/SourceArti/gZkH2iH\",\"artifact\":{\"location\":\"arn:aws:s3:::codepipeline-eu-west-3-263666658512/MyGitHubPipeline/BuildArtif/azeG09Z\"},\"environment\":{\"image\":\"aws/codebuild/standard:7.0\",\"privileged-mode\":false,\"image-pull-credentials-type\":\"CODEBUILD\",\"compute-type\":\"BUILD_GENERAL1_SMALL\",\"type\":\"LINUX_CONTAINER\",\"environment-variables\":[]},\"project-file-system-locations\":[],\"logs\":{\"group-name\":\"/aws/codebuild/build_04\",\"stream-name\":\"a6fa43db-5062-401a-944e-b660fbeff074\",\"deep-link\":\"https://console.aws.amazon.com/cloudwatch/home?region=eu-west-3#logsV2:log-groups/log-group/$252Faws$252Fcodebuild$252Fbuild_04/log-events/a6fa43db-5062-401a-944e-b660fbeff074\"},\"phases\":[{\"phase-context\":[],\"start-time\":\"May 6, 2024 7:37:55 PM\",\"end-time\":\"May 6, 2024 7:37:55 PM\",\"duration-in-seconds\":0.0,\"phase-type\":\"SUBMITTED\",\"phase-status\":\"SUCCEEDED\"},{\"phase-context\":[],\"start-time\":\"May 6, 2024 7:37:55 PM\",\"end-time\":\"May 6, 2024 7:37:56 PM\",\"duration-in-seconds\":0.0,\"phase-type\":\"QUEUED\",\"phase-status\":\"SUCCEEDED\"},{\"phase-context\":[\": \"],\"start-time\":\"May 6, 2024 7:37:56 PM\",\"end-time\":\"May 6, 2024 7:37:58 PM\",\"duration-in-seconds\":2.0,\"phase-type\":\"PROVISIONING\",\"phase-status\":\"SUCCEEDED\"},{\"phase-context\":[\": \"],\"start-time\":\"May 6, 2024 7:37:58 PM\",\"end-time\":\"May 6, 2024 7:38:08 PM\",\"duration-in-seconds\":9.0,\"phase-type\":\"DOWNLOAD_SOURCE\",\"phase-status\":\"SUCCEEDED\"},{\"phase-context\":[\": \"],\"start-time\":\"May 6, 2024 7:38:08 PM\",\"end-time\":\"May 6, 2024 7:38:08 PM\",\"duration-in-seconds\":0.0,\"phase-type\":\"INSTALL\",\"phase-status\":\"SUCCEEDED\"},{\"phase-context\":[\": \"],\"start-time\":\"May 6, 2024 7:38:08 PM\",\"end-time\":\"May 6, 2024 7:38:09 PM\",\"duration-in-seconds\":0.0,\"phase-type\":\"PRE_BUILD\",\"phase-status\":\"SUCCEEDED\"},{\"phase-context\":[\"COMMAND_EXECUTION_ERROR: Error while executing command: mvn test. Reason: exit status 1\"],\"start-time\":\"May 6, 2024 7:38:09 PM\",\"end-time\":\"May 6, 2024 7:38:32 PM\",\"duration-in-seconds\":23.0,\"phase-type\":\"BUILD\",\"phase-status\":\"FAILED\"},{\"start-time\":\"May 6, 2024 7:38:32 PM\",\"phase-type\":\"POST_BUILD\"}],\"queued-timeout-in-minutes\":480.0},\"completed-phase-status\":\"FAILED\",\"completed-phase-duration-seconds\":23.0,\"version\":\"1\",\"completed-phase-start\":\"May 6, 2024 7:38:09 PM\",\"completed-phase-end\":\"May 6, 2024 7:38:32 PM\"},\"resources\":[\"arn:aws:codebuild:eu-west-3:732945014111:build/build_04:a6fa43db-5062-401a-944e-b660fbeff074\"],\"additionalAttributes\":{}}",
                "Timestamp": "2024-05-06T19:38:37.773Z",
                "SignatureVersion": "1",
                "Signature": "rkk/e+Ffhy+KpDWPH45sswsbbT0Ohvtr4z7qIlVVpvHLTu/3qYoMjCE+NbtmwkvsZYi3NZDIpcC9HcBQp6imdK0qvdxyu5SFWTPvVxERt4v/vYKAkIQxQ7pS+Coxtig//Wv4sdnTX/MbL670kckkC6VS8sRd4iSnuYRzW/N/Jikuy98EnmqOrR4gIpSp28p07gf0TyatTi6XOYo/Tueq20jc/dEd4R3OqEOM5TLNGjNWbkI18bdxsWbIpknA2SNfj6afHjyJ9qVdRaqE4MCpvAfEy/uT7KBbvK7w132AnUXw4Ixd63RJCx2OLhqNcXDNHnixR8ApbcBueaaim0l8MA==",
                "SigningCertUrl": "https://sns.eu-west-3.amazonaws.com/SimpleNotificationService-60eadc530605d63b8e62a523676ef735.pem",
                "UnsubscribeUrl": "https://sns.eu-west-3.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:eu-west-3:732945014111:codebuild-notifications-sns:70d0de2d-acd3-4ad3-9b01-46ac078bec9d",
                "MessageAttributes": {}
            }
        }
    ]
}
````

* Sending email
````json
 {
  "Effect": "Allow",
  "Action": [
    "ses:SendEmail",
    "ses:SendRawEmail"
  ],
  "Resource": "*"
 }
````
