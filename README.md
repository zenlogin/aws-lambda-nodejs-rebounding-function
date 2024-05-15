# Node.js Lambda Function: Webhook Rebounding
This repository contains a simple `index.mjs` file. It's use by the following blog post:  
[https://zenlogin.co/blog/triggering-webhooks-for-aws-console-login-events](https://zenlogin.co/blog/triggering-webhooks-for-aws-console-login-events)

In this blog post / tutorial, we walk you through the process of setting up resources in your AWS account, so that each time a user logs into the AWS console for your AWS account, a webhook will be fired. This can be useful for organizations and teams that want to trigger logic on those events (e.g. sending email or SMS notifications), or for auditing purposes (using your own application logic and not having to rely on Amazon CloudTrails, for example).

When you go through the tutorial linked above, you'll see a callout to the `index.mjs` file. You'll just need to copy + paste the contents, and then change the endpoint URL (located on `line 58` in the file).

## Support
If you need support for this, please contact [support@zenlogin.co](mailto:support@zenlogin.co).
